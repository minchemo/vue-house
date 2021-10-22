<template>
  <div class="GodModView with-mask">
    <div
      class="view"
      ref="view"
      :style="{ 'padding-bottom': viewAspectRatioPercentage + '%' }"
    >
    <div ref="viewImg">
      
      <img  class="view-img" :src="bgUrl2" alt="" />
      <img  class="view-img viewtext" :src="bgUrl" alt="" />
      </div>
      <!-- <img
        v-if="isMobile"
        class="view-hand"
        ref="viewHand"
        :src="swipeUrl"
        alt=""
      /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.GodModView {
  display: flex;
  justify-content: center;
  .view {
    height: 0;
    width: 100%;
    position: relative;
    max-width: 1825px;
    .view-img {
      max-width: 100vw;
    }
  }
}
.viewtext{
  position: absolute;
  top: 0;
  left:0;
}

@media only screen and (max-width: 767px) {
  .GodModView {
    .view {
      height: 0;
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;

      .view-hand {
        position: absolute;
        width: 100px;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
        pointer-events: none;
      }
      .view-img {
        max-width: unset;
      }
      //.view-img{height: 100%;}
    }
  }
}
</style>

<script>
import { isMobile } from "@/utils";
export default {
  name: "GodModView",
  data() {
    return {
      isMobile,
      autoScrollView: true, //是否自動調整鳥瞰圖至建案位置 (手機板)
      autoScrollViewOffset: -150, //自動調整偏移微調
      viewAspectRatioPercentage: isMobile ? "150" : "46.82", // 鳥瞰圖比例 高÷寬×100
      bgUrl: require("@/projects/dnls/s5/view-text.png"), //置換圖片路徑即可
      bgUrl2: require("@/projects/dnls/s5/view.jpg"), //置換圖片路徑即可
      //swipeUrl: require("@/projects/dnls/s5/view-text.png"), //置換圖片路徑即可
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
  },
  mounted() {
    //this.getScreenHeight();
    this.setViewBgHeight();
    this.onResize();
    this.scrollView();
  },
};
</script>