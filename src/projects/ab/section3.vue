<template>
  <div class="section3">
    <div class="title">
      <h5>EXCELLENT LOCATION</h5>
      <h3>全城仰望 大安之心最精彩</h3>
    </div>
    <div class="view" ref="view" data-aos="fade-up">
      <div></div>
      <img loading="lazy" 
        class="view-img"
        ref="viewImg"
        src="~@/projects/ab/s3/view.jpg"
        alt=""
      />
      <img loading="lazy" 
        v-if="isMobile"
        class="view-hand"
        ref="viewHand"
        src="~@/projects/ab/s3/arrow_hand.png"
        alt=""
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
/* 螢幕尺寸標準 */
.section3 {
  height: auto;
  .title {
    position: absolute;
    left: 0;
    top: 5vw;
    z-index: 1;
    min-width: 40vw;
    background: #fff;
    font-family: $family1;
    text-align: left;
    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-left: 10vw;
    padding-right: 5vw;
    color: #d20028;
    h5 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 30px;
    }
  }

  .view {
    background-color: #FAD2CD;
    .view-img {
      width: 100%;
      transform: translate(-1px, 3px);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section3 {
    min-height: unset;
    height: auto;
    .title {
      position: absolute;
      left: 0;
      top: 5vw;
      z-index: 1;
      width: 100%;
      background: #fff;
      font-family: $family1;
      text-align: left;
      padding-top: 5vw;
      padding-bottom: 5vw;
      padding-left: 10vw;
      color: #d20028;
      h5 {
        font-size: 14px;
        margin-bottom: 10px;
      }
      h3 {
        font-size: 7vw;
      }
    }
    .view {
      background-color: #FAD2CD;
      overflow-y: hidden;
      overflow-x: scroll;
      height: 0;
      padding-bottom: 150.7%;
      .view-hand {
        position: absolute;
        width: 30%;
        z-index: 1;
        bottom: 20%;
        left: 50%;
        margin-left: -15%;
      }
      .view-img {
        width: unset !important;
        height: 100%;
        transform: translate(-1px, 3px);
      }
    }
  }
}
// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}
// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "section3",
  data() {
    return {
      isMobile,
    };
  },
  methods: {
    scrollView() {
      const el = this.$refs.view;
      const imgEl = this.$refs.viewImg;
      const handEl = this.$refs.viewHand;
      $(imgEl).one("load", () => {
        const scrollTarget = (el.scrollWidth - $(window).width()) / 2;
        el.scrollLeft = scrollTarget;
        setTimeout(() => {
          $(el).one("scroll", () => {
            $(handEl).fadeOut();
          });
        }, 1000);
      });
    },
    setViewImgHeight() {
      const height = $(".view").outerHeight();
      $(".view .view-img").css("height", height);
    },
  },
  created() {},
  mounted() {
    if (isMobile) {
      this.setViewImgHeight();
      this.scrollView();
    }
  },
};
</script>