<template>
  <div class="section3">
    <div class="title">
      <h3>台北首都圈<br />海洋門戶</h3>
      <p>
        「市港再生標竿計畫」讓基隆港轉型，近年國門廣場、城際轉運站等開花結果，城市蛻變，從潛力股一躍成為績優股，迎上世界潮流，打造大台北首都圈海洋門戶。
      </p>
    </div>
    <div class="view" ref="view" data-aos="fade-up">
      <img
        class="view-img"
        ref="viewImg"
        src="~@/projects/js/s3/view.jpg"
        alt=""
      />
      <img
        class="view-img line"
        ref="viewImg"
        src="~@/projects/js/s3/line.gif"
        alt=""
      />
      <img
        v-if="isMobile"
        class="view-hand"
        ref="viewHand"
        src="~@/projects/js/s3/arrow_hand.png"
        alt=""
      />
    </div>
    <img class="draw" src="@/projects/js/s3/draw.png" alt="" srcset="" />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
/* 螢幕尺寸標準 */
.section3 {
  height: auto;
  .title {
    position: absolute;
    right: 10vw;
    top: 5vw;
    z-index: 10;
    background: #fdd93f;
    text-align: left;
    padding: 20px;
    color: #000;
    width: 400px;
    h3 {
      font-size: 70px;
      font-weight: bolder;
      line-height: 1.2;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    p {
      margin-top: 12px;
      font-size: 26px;
      margin-bottom: 10px;
      font-weight: bold;
      letter-spacing: 2px;
      line-height: 1.5;
      text-align: justify;
    }
  }

  .view {
    background-color: #fad2cd;
    .view-img {
      width: 100%;
      transform: translate(-1px, 3px);
    }
    .line {
      width: 100%;
      transform: translate(-1px, 3px);
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
    }
  }

  .draw {
    position: absolute;
    z-index: 20;
    width: 650px;
    right: 4vw;
    top: 20vw;
    animation: bird-skew 10s ease-in-out;
    animation-iteration-count: infinite;
    transform-origin: center;
    transform: skew(0, 0);
  }
  @keyframes bird-skew {
    0% {
      transform: skew(0, 0);
    }
    50% {
      transform: skew(8deg, 8deg);
    }
    100% {
      transform: skew(0, 0);
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
      background-color: #fad2cd;
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