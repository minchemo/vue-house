<template>
  <div class="GodModView with-mask">
    <div class="view" ref="view">
      <img ref="viewImg" class="view-img" v-lazy :temp="bgUrl" alt="" />
      <!-- <div class="view-hand" ref="viewHand">
        <img v-lazy :temp="swipeUrl" alt="" />
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.GodModView {
  .view {
    height: 100%;
    width: 100%;
    overflow: hidden;
    // cursor: ew-resize;

    .view-hand {
      position: absolute;
      z-index: 1;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #0696;
      img {
        position: absolute;
        top: size(150);
        width: size(82);
        animation: move 2s alternate-reverse infinite ease-in-out;
      }
      @keyframes move {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
    }
    .view-img {
      height: auto;
      max-width: 100%;
    }
  }
}

@media only screen and (max-width: 767px) {
  .GodModView {
    .view {
      height: size-m(312);
      overflow: hidden;
      .view-hand {
        img {
          position: absolute;
          top: 25%;
          width: size-m(40);
          animation: move 2s alternate-reverse infinite ease-in-out;
        }
      }
      .view-img {
        max-width: unset;
        height: 100%;
      }
      //.view-img{height: 100%;}
    }
  }
}
</style>

<script>
import { isMobile } from "@/utils";
import interact from "interactjs";
import BScroll from "@better-scroll/core";

export default {
  name: "GodModView",
  data() {
    return {
      isMobile,
      autoScrollView: true, //是否自動調整鳥瞰圖至建案位置 (手機板)
      autoScrollViewOffset: 150, //自動調整偏移微調
      viewAspectRatioPercentage: isMobile ? "50" : "37.38", // 鳥瞰圖比例 高÷寬×100
      bgUrl: require("@/projects/cm/s2/view.jpg"), //置換圖片路徑即可
      swipeUrl: '', //置換圖片路徑即可
    };
  },
  methods: {
    scrollView() {
      const self = this;
      const el = this.$refs.view;
      const imgEl = this.$refs.viewImg;
      const handEl = this.$refs.viewHand;
      const offset = this.autoScrollViewOffset;

      $(imgEl).on("load", () => {
        let bs = new BScroll(this.$refs.view, {
          probeType: 2,
          scrollX: true,
          scrollY: true,
          disableTouch: false,
            disableMouse: false,
          bindToWrapper: true,
          eventPassthrough: "vertical",
          bounce: false,
        });
        bs.scrollTo(bs.maxScrollX / 2, 500);
        setTimeout(() => {
          bs.on("scroll", () => {
            $(this.$refs.viewHand).fadeOut();
          });
        }, 1000);

        // setTimeout(() => {
        //   $(el).one("scroll", () => {
        //     if (self.isMobile) return;
        //     $(handEl).fadeOut();
        //   });
        // }, 100);
      });
    },
    setViewBgHeight() {
      const targetHeight = $(".GodModView .view").outerHeight(true);
      if (isMobile) {
        $(".GodModView .view .view-img").height(targetHeight);
      }
    },
    onResize() {
      $(window).on("resize", (e) => {
        this.setViewBgHeight();
      });
    },
    dragMoveListener(event) {
      $(".view-hand").hide();
      var target = event.target;
      var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
      target.style.transform = "translate(" + x + "px, " + y + "px)";

      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
  },
  mounted() {
    //this.getScreenHeight();
    this.setViewBgHeight();
    this.onResize();
    this.scrollView();
  },
};
</script>