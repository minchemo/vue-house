<template>
  <div class="s7">
    <div class="item" data-aos="fade"></div>
    <div class="info">
      <div class="t1" data-aos="fade-up">
        台灣建築標竿<br />
        半世紀榮耀領導品牌
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="100">
        1967年創立，迄今55年。<br v-if="!isMobile" />
        達欣企業集團發展史與國家發展同步脈動，<br v-if="!isMobile" />
        IBM大樓揭開台灣科技時代序幕，<br v-if="!isMobile" />
        捷運忠孝復興站啟動台北捷運路網軸心，<br v-if="!isMobile" />
        遠企購物中心引領精品百貨時代來臨，<br v-if="!isMobile" />
        文華東方酒店重新定義國內頂級奢華酒店，<br v-if="!isMobile" />
        台南奇美博物館讓世界驚艷台灣民間藝術能量，<br v-if="!isMobile" />
        台積電高科技廠房見證台灣科技島誕生。
      </div>
    </div>
    <div class="divider" data-aos="scaleY"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s7 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background-image: url("~@/projects/dh/bg.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  .item {
    width: size(1100);
    height: size(800);
    background-image: url("~@/projects/dh/s7/a.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border: size(2) solid #1b485b;
  }

  .info {
    color: #1b485b;
    text-align: left;
    padding-left: size(120);
    .t1 {
      font-size: size(55);
      font-weight: bold;
      line-height: 1.5;
      .large {
        display: inline;
        font-size: size(69);
        margin-right: -12px;
      }
    }
    .t2 {
      margin-top: size(35);
      font-size: size(26);
      font-weight: 500;
      line-height: 2;
    }
  }

  .divider {
    position: absolute;
    width: size(2);
    height: size(160);
    background: #c28c65;
    bottom: -#{size(100)};
    left: 50%;
    z-index: 10;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s7 {
    position: relative;
    width: size-m(375);
    height: size-m(563);
    background-image: url("~@/projects/dh/s7/a_m.jpg");

    .item {
      display: none;
    }

    .info {
      position: absolute;
      color: #fff;
      text-align: center;
      padding-left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: size-m(20) 0;
      pointer-events: none;
      .t1 {
        font-size: size-m(24);
        font-weight: bold;
        line-height: 1.5;
        white-space: nowrap;
        .large {
          display: inline;
          font-size: size(69);
          margin-right: -12px;
        }
      }
      .t2 {
        max-width: size-m(320);
        margin-top: size(0);
        font-size: size-m(13);
        font-weight: 500;
        line-height: 1.5;
        text-align: left;
      }
    }

    .divider {
      display: none;
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
  name: "s7",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
    };
  },
};
</script>