<template>
  <div class="s6">
    <div class="item" data-aos="fade"></div>
    <div class="info">
      <div class="t1" data-aos="fade-up">
        蘇富比全球十大豪宅<br v-if="!isMobile" />
        【文華苑】<br />
        達欣集團豪宅經典標竿
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="400">
        1996年台北高峰會，見證信義計劃起飛。<br v-if="!isMobile" />
        2012年敦北巔峰文華苑，<br v-if="!isMobile" />
        篆刻文華東方酒店亞洲首座豪宅里程碑，<br v-if="!isMobile" />
        落成即入選蘇富比全球十大豪宅。<br v-if="!isMobile" />
        達欣以建築落款，與台北城市輝煌時刻並肩同行，<br v-if="!isMobile" />
        2022年南港經貿再創經典。
      </div>
    </div>
    <div class="divider" data-aos="scaleY"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s6 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background-image: url("~@/projects/dh/bg.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .item {
    width: size(1100);
    height: size(800);
    background-image: url("~@/projects/dh/s6/a.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border: size(2) solid #1b485b;
  }

  .info {
    color: #1b485b;
    text-align: left;
    padding-right: size(120);
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
  .s6 {
    position: relative;
    width: size-m(375);
    height: size-m(563);
    background-image: url("~@/projects/dh/s6/a_m.jpg");

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
        font-size: size-m(11);
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
  name: "s6",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
    };
  },
};
</script>