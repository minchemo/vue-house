<template>
  <div class="section3">
    <div class="title">
      <h3>台北首都圈<br />海洋門戶</h3>
      <p>
        「市港再生標竿計畫」讓基隆港轉型，近年國門廣場、城際轉運站等開花結果，城市蛻變，從潛力股一躍成為績優股，迎上世界潮流，打造大台北首都圈海洋門戶。
      </p>
    </div>
    <div v-if="isMobile" class="title-bg"></div>
    <div class="view" ref="view" data-aos="fade-up">
      <img
        class="view-img"
        ref="viewImg"
        src="~@/projects/js/s3/view.jpg"
        alt=""
      />
      <!--    <img
        class="view-img line"
        ref="viewImg"
        src="~@/projects/js/s3/line.gif"
        alt=""
      />  -->
      <img
        v-if="isMobile"
        class="view-hand"
        ref="viewHand"
        src="~@/projects/js/s3/arrow_hand.png"
        alt=""
      />
    </div>
    <img
      v-if="!isMobile"
      class="draw"
      src="@/projects/js/s3/draw.png"
      alt=""
      srcset=""
    />
    <img
      v-else
      class="draw"
      src="@/projects/js/s3/draw-mo.png"
      alt=""
      srcset=""
    />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
/* 螢幕尺寸標準 */
.section3 {
  height: auto;
  background-color: #1c7cc1;
  .title {
    position: absolute;
    right: 10vw;
    top: 5vw;
    z-index: 10;
    background: #fdd93f;
    text-align: left;
    padding: 0.77em;
    color: #000;
    width: 16.8em;
    font-size: calc(2300vw / 1920);
    line-height: 1.6;
    h3 {
      font-size: 3em;
      font-weight: 900;
      line-height: 1.2;
      //  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    p {
      margin-top: 0.46em;
      margin-bottom: 0.38em;
      font-weight: 500;
      letter-spacing: 0.07em;
      text-align: justify;
    }
  }

  .view {
    background-color: #1c7cc1;
    .view-img {
      width: 100%;
      vertical-align: middle;
      // transform: translate(-1px, 3px);
    }
    .line {
      width: 100%;
      // transform: translate(-1px, 3px);
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
    pointer-events: none;
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
    padding-top: 40vh;

    .title-bg {
      position: absolute;
      z-index: 1;
      top: 0;
      width: 100%;
      height: 50vh;
      background: rgb(28, 124, 193);
      background: linear-gradient(
        180deg,
        rgba(28, 124, 193, 1) 0%,
        rgba(28, 124, 193, 1) 80%,
        rgba(28, 124, 193, 0) 100%
      );
      pointer-events: none;
    }

    .title {
      position: absolute;
      left: 50%;
      top: 0;
      width: 90%;
      transform: translate(-50%, 10%);
      background: #fdd93f;
      font-family: $family1;
      text-align: left;
      padding: 5%;
      color: #333;
      p {
        font-size: 16px;
        margin-top: 3vh;
      }
      h3 {
        font-size: 5vh;
      }
    }
    .view {
      overflow-y: hidden;
      overflow-x: scroll;
      height: 0;
      padding-bottom: 150.7%;
      .view-hand {
        position: absolute;
        width: 100%;
        z-index: 1;
        bottom: 30%;
        left: 0;
      }
      .view-img {
        width: unset !important;
        height: 100%;
        transform: translate(-1px, 3px);
      }
    }
    .draw {
      position: absolute;
      z-index: 20;
      width: 90%;
      right: 5%;
      top: 5%;
      pointer-events: none;
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

      const offset = 110; //置中偏移微調

      $(imgEl).one("load", () => {
        const scrollTarget = (el.scrollWidth - $(window).width()) / 2 + offset;
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