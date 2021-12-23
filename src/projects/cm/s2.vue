<template>
  <div class="s2">
    <div class="view">
      <img
        class="large-title"
        src="~@/projects/cm/s2/large-t.svg"
        alt="藏美表參道"
        srcset=""
      />
      <GodModView />
<div class="txt">
  <div class="title" data-aos="zoom-in">鄭子寮翠域×西門路門牌<br>富人爭藏層峰新核心</div>
  <div class="desc" data-aos="zoom-in">台南首屈一指高級住宅區-鄭子寮，富藏16座公園、文元雙語明星學區，更被商20、商60、兵工廠開發案環繞。府城最具價值的西門路貫穿其中，穿梭百貨、量販商圈與未來南山台南廣場，串起市心繁華的現在與未來。</div>
</div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s2 {
  position: relative;
  width: size(1920);
  height: size(1080);
  padding-top: size(100);
  .view {
    position: relative;
    margin-left: auto;
    width: size(1632.6);
    height: size(610.35);
    display: flex;
    flex-direction: column;
    //img{width: size(1632.6);}

    .large-title {
      position: absolute;
      top: -#{size(50)};
      left: -#{size(50)};
      width: size(700);
      z-index: 1;
      animation: fade 3s;
      opacity: 1;

      @keyframes fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
/*
    .info {
      position: relative;
      margin-top: size(100);
      width: size(1339.26);
    }
    */
  }
  .txt{
      margin-top: size(100);
    font-size: size(23);
    transform:scaleY(1);
    text-align:justify;
    line-height: 1.7;
    width: size(1400);
      letter-spacing: 0.1em;
      color:#444;
      font-family: "Noto Serif TC",sans-serif;
      font-weight: 600;
    .title{
      font-size: 1.5em;
      color:#182C80;
      float: right;
      font-weight: 500;
      display: block;
      padding: 0 0 0 0.5em;
      margin: 0 0 0 3em;
      border-left: 0.18em solid currentColor;
      font-family: "Noto Serif TC",sans-serif;
      font-weight: 800;
     }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s2 {
    position: relative;
    width: size-m(375);
    height: size-m(667);
    padding-top: size(100);
    .view {
      position: relative;
      margin-left: auto;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;

      .large-title {
        position: absolute;
        top: -#{size-m(30)};
        left: 50%;
        width: 90%;
        transform: translateX(-50%);
        z-index: 1;
      }
/*
      .info {
        position: relative;
        margin-top: size-m(50);
        width: 80%;
        margin-left: 10%;
      }
      */
    }
  .txt{
    font-size: size-m(14);
    width: 80%;
    left: 10%;
    margin: auto;
    .title{
      font-size: 1.4em;
      float:none;
      text-align: left;
      margin: size-m(30) 0 .9em 0;
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
import GodModView from "@/components/GodModView.vue";

export default {
  name: "s2",
  components: {
    GodModView,
  },
  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
