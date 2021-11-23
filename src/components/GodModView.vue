<template>
  <div class="GodModView with-mask">
    <div class="view" ref="view">
      <img ref="viewImg" class="view-img" v-lazy :temp="bgUrl" alt="" />
      <img class="view-hand" ref="viewHand" v-lazy :temp="swipeUrl" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.GodModView {
  .view {
    height: 100vh;
    width: 100%;

    .view-hand {
      position: absolute;
      width: size(120);
      z-index: 1;
      right: size(400);
      top: size(150);
      pointer-events: none;
      transform: translateX(0);
      animation: move 2s alternate-reverse infinite ease-in-out;

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
      max-width: unset;
    }
  }
}

@media only screen and (max-width: 767px) {
  .GodModView {
    .view {
      height: 100vh;
      overflow-x: scroll;
      overflow-y: hidden;

      .view-hand {
        position: absolute;
        width: 100px;
        z-index: 1;
        top: 25%;
        left: 50%;
        transform: translate(-50%, 0%);
        pointer-events: none;
      }
      .view-img {
        height: 100%;
      }
      //.view-img{height: 100%;}
    }
  }
}
</style>

<script>
import { isMobile } from "@/utils"
import interact from 'interactjs';

export default {
  name: "GodModView",
  data() {
    return {
      isMobile,
      autoScrollView: true, //是否自動調整鳥瞰圖至建案位置 (手機板)
      autoScrollViewOffset: -150, //自動調整偏移微調
      viewAspectRatioPercentage: isMobile ? "150" : "46.82", // 鳥瞰圖比例 高÷寬×100
      bgUrl: require("@/projects/pjr/s6/bg.jpg"), //置換圖片路徑即可
      swipeUrl: !isMobile ? require("@/projects/pjr/s6/hand.png") : require("@/projects/pjr/s6/hand-mo.png"), //置換圖片路徑即可
    };
  },
  methods: {
    getScreenHeight() {
      return "220";
      const width = $(window).width();
      const height = $(window).height();
      const ratio = (height / width) * 100;
      return ratio;
    },
    scrollView() {
      const self = this;
      const el = this.$refs.view;
      const imgEl = this.$refs.viewImg;
      const handEl = this.$refs.viewHand;
      const offset = this.autoScrollViewOffset;

      $(imgEl).one("load", () => {
        const scrollTarget = this.autoScrollView
          ? (el.scrollWidth - $(window).width()) / 2 + offset
          : false;
        el.scrollLeft = scrollTarget;
        setTimeout(() => {
          $(el).one("scroll", () => {
            if (self.isMobile) return
            $(handEl).fadeOut();
          });
        }, 1000);
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
      $('.view-hand').hide();
      var target = event.target
      var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
      var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
    }
  },
  mounted() {
    //this.getScreenHeight();
    this.setViewBgHeight();
    this.onResize();
    this.scrollView();


    if (!this.isMobile) {

      interact('.view-img')
        .draggable({
          inertia: true,
          startAxis: 'x',
          lockAxis: 'x',
          modifiers: [
            interact.modifiers.restrictRect({
              restriction: 'parent',
              endOnly: false
            })
          ],
          listeners: {
            move: this.dragMoveListener,
            end(event) {
              var textEl = event.target.querySelector('p')

              textEl && (textEl.textContent =
                'moved a distance of ' +
                (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                  Math.pow(event.pageY - event.y0, 2) | 0))
                  .toFixed(2) + 'px')
            }
          }
        })
    }
  },
};
</script>