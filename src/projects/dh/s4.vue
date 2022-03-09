<template>
  <div class="s4">
    <div class="item" data-aos="fade"></div>
    <div class="info">
      <div class="t1" data-aos="fade-up">
        三井LaLaport南港<br />漢來皇家鬱金香酒店為鄰
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="100">
        捷運南港展覽館站步行約3分鐘，<br v-if="!isMobile" />
        漢來飯店與法國羅浮酒店集團合作，<br v-if="!isMobile" />
        漢來皇家鬱金香酒店預計2022年底開幕。<br v-if="!isMobile" />
        緊鄰日商三井LaLaport南港，<br v-if="!isMobile" />
        50000坪親子大型購物中心，<br v-if="!isMobile" />
        規劃約250間店鋪， 2023年開幕。
      </div>
    </div>
    <div class="divider" data-aos="scaleY"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s4 {
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
    background-image: url("~@/projects/dh/s4/a.jpg");
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
  .s4 {
    position: relative;
    width: size-m(375);
    height: size-m(563);
    background-image: url("~@/projects/dh/s4/a_m.jpg");

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
        font-size: size-m(28.28);
        font-weight: bold;
        line-height: 1.5;
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
  name: "s4",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
    };
  },
};
</script>