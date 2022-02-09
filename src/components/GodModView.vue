<template>
  <div class="GodModView with-mask">
    <div class="view" ref="view">
      <img
        v-if="!isMobile"
        ref="viewImg"
        class="view-img"
        src="@/projects/cfyd/s2/view.png"
        alt="春福御邸"
      />
      <img
        v-else
        ref="viewImg"
        class="view-img"
        src="@/projects/cfyd/s2/view_m.png"
        alt="春福御邸"
      />
      <div class="view-hand" ref="viewHand">
        <img :src="swipeUrl" alt="春福御邸" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.GodModView {
  height: 100%;
  .view {
    position: relative;
    height: size(957); //依照設計稿調整
    width: size(1767); //依照設計稿調整
    overflow: hidden;
    // cursor: ew-resize;

    .view-hand {
      position: absolute;
      z-index: 1;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: #0696;
      display: none;

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
      height: 100%;
    }
  }
}

@media only screen and (max-width: 767px) {
  .GodModView {
    .view {
      width: size-m(375);
      height: size-m(889);
      overflow: hidden;
      .view-hand {
        img {
          position: absolute;
          bottom: 5%;
          top: unset;
          width: size-m(40);
          animation: move 2s alternate-reverse infinite ease-in-out;
        }
      }
      .view-img {
        max-width: unset;
        height: 100%;
        width: auto;
      }
      //.view-img{height: 100%;}
    }
  }
}
</style>

<script>
import { isMobile } from "@/utils";
import BScroll from "@better-scroll/core";

export default {
  name: "GodModView",
  data() {
    return {
      isMobile,
      autoScrollView: true, //是否自動調整鳥瞰圖至建案位置 (手機板)
      autoScrollViewOffset: 150, //自動調整偏移微調
      viewAspectRatioPercentage: isMobile ? "50" : "37.38", // 鳥瞰圖比例 高÷寬×100
      // bgUrl: require("@/projects/cfyd/s2/view.png"), //置換圖片路徑即可
      swipeUrl: require("@/projects/tm/s5/swipe-here.png"), //置換圖片路徑即可
    };
  },
  methods: {
    scrollView() {
      const imgEl = this.$refs.viewImg;

      $(imgEl).on("load", () => {
        let bs = new BScroll(this.$refs.view, {
          probeType: 2,
          scrollX: true,
          scrollY: true,
          disableTouch: false,
          disableMouse: false,
          useTransition: false,
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

      $(imgEl).on("dragstart", (e) => {
        e.preventDefault();
      });
    },
  },
  mounted() {
    this.scrollView();
  },
};
</script>