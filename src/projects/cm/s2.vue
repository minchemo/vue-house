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
  <div class="title" data-aos="zoom-in">府城核心未來錢景<br>西門大道一脈相連</div>
  <div class="desc" data-aos="zoom-in">市中心北區正西門路，連接三越商圈、小北商圈，匯聚好市多、特力屋，以及南山台南廣場，未來銜接北外環快速道，直達南科園區飆速通勤。府城最有價值的燙金大道，串起市心繁華，見證台南的過去與未來。</div>
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

    .large-title {
      position: absolute;
      top: -#{size(80)};
      left: -#{size(180)};
      width: size(835.54);
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
    transform:scaleY(1.1);
    text-align:justify;
    line-height: 1.7;
    width: size(1400);
      letter-spacing: 0.1em;
      color:#444;
    .title{
      font-size: 1.6em;
      color:#182C80;
      float: left;
      font-weight: 500;
      letter-spacing: 0.31em;
      display: block;
      padding: 0 0.5em 0 0;
      margin: 0 3em 0 0;
      border-right: 0.18em solid currentColor;
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
      text-align: right;
      margin: size-m(50) 0 .9em 0;
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
