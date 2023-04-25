<template>
  <div class="GodModView with-mask">
    <div
      class="view"
      ref="view"
      :style="{ 'padding-bottom': viewAspectRatioPercentage + '%' }"
    >
      <img ref="viewImg" class="view-img" :src="bgUrl" alt="" />
      <img
        v-if="isMobile"
        class="view-hand"
        ref="viewHand"
        :src="swipeUrl"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.GodModView {
  .view {
    height: 0;
    width: 100%;
  }
}

@media screen and (min-width: 767px) and (max-width: 1300px) {
  .view-img{
     width: 100vw;
  }
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
      autoScrollViewOffset: -162, //自動調整偏移微調
      viewAspectRatioPercentage: isMobile ? this.getScreenHeight() : "58.16", // 鳥瞰圖比例 高÷寬×100
      bgUrl: require("@/projects/taurus/s3/bg.jpg"), //置換圖片路徑即可
      swipeUrl: require("@/projects/taurus/s3/swipe-here.png"), //置換圖片路徑即可
    };
  },
  methods: {
    getScreenHeight() {
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
     if(isMobile){
     $(".GodModView .view .view-img").height(targetHeight);}
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