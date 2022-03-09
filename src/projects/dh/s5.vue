<template>
  <div class="s5">
    <div class="item" data-aos="fade"></div>
    <div class="info">
      <div class="t1" data-aos="fade-up" v-if="!isMobile">
        環東大道，<br />
        雙捷南港展覽館站<br />
        五鐵共構南港車站
      </div>
      <div class="t1" data-aos="fade-up" v-else>
        環東大道<br />
        雙捷南港展覽館站<br />
        五鐵共構南港車站
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="100">
        交通決定發展動能，南港潛能無可限量。板南線、<br v-if="!isMobile" />
        文湖線雙捷交會南港展覽館站，牽手南軟、內科。<br v-if="!isMobile" />
        五鐵共構南港車站，高鐵、台鐵、<br v-if="!isMobile" />
        捷運、客運匯集，通行全國。<br v-if="!isMobile" />
        環東大道快速串聯南港、內湖、信義計劃區，<br v-if="!isMobile" />
        國道一、三、五速可達。
      </div>
    </div>
    <div class="divider" data-aos="scaleY"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s5 {
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
    background-image: url("~@/projects/dh/s5/a.jpg");
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
  .s5 {
    position: relative;
    width: size-m(375);
    height: size-m(604);
    background-image: url("~@/projects/dh/s5/a_m.jpg");

    .item {
      display: none;
    }

    .info {
      position: absolute;
      color: #000;
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
        position: absolute;
        font-size: size-m(28.28);
        font-weight: bold;
        line-height: 1.5;
        top: 50%;
        color: #fff;
        filter: drop-shadow(0 0 10px #000);
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
  name: "s5",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
    };
  },
};
</script>