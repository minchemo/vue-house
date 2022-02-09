<template>
  <div class="s4">
    <div class="text">
      <div class="t1" data-aos="flip-up" data-aos-delay="0">ARCHITECTURE</div>
      <div class="t2" data-aos="flip-up" data-aos-delay="400">
        公園正排頭 收藏仰望
      </div>
      <div class="t3" data-aos="flip-up" data-aos-delay="800">
        建築以簡潔俐落為風格主筆，映襯基地正對公園第一排的難得席位，利用各式深淺灰調材質立面，營造多層次的視覺饗宴，並設計有大陽台，能和自然產生溝通連結，同時達成健康流動的多重目的。
      </div>
    </div>
    <div
      class="building"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-anchor=".s4 .text"
      data-aos-anchor-placement="bottom"
    >
      <div class="caption">建築外觀3D示意圖</div>
    </div>
    <div class="bg"></div>
    <div class="bg2" v-if="!isMobile"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s4 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: #000;
  z-index: 10;
  .text {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 3;
    color: #fff;
    top: size(260);
    left: size(850);
    .t1 {
      font-size: size(92);
      font-weight: 1000;
    }
    .t2 {
      font-size: size(38);
      font-weight: bold;
      font-family: "Noto serif tc";
      color: #946134;
      margin-top: size(20);
      margin-bottom: size(45);
    }
    .t3 {
      font-size: size(17);
      width: size(438);
      text-align: left;
      line-height: 2;
    }
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@/projects/cfyd/s4/bg1.png");
    background-position: center;
    background-size: cover;
    z-index: 1;
  }
  .bg2 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: size(1142);
    background-image: url("~@/projects/cfyd/s4/bg2.png");
    background-position: center;
    background-size: cover;
    z-index: 1;
    animation: skew 8s infinite alternate-reverse;

    @keyframes skew {
      from {
        transform: skew(6deg, 6deg);
      }
      to {
        transform: skew(-6deg, -6deg);
      }
    }
  }
  .building {
    position: absolute;
    left: 0;
    bottom: 0;
    width: size(1406);
    height: size(1335);
    background-image: url("~@/projects/cfyd/s4/building.png");
    background-position: center;
    background-size: cover;
    z-index: 2;
    .caption {
      position: absolute;
      left: size(40);
      bottom: size(25);
      color: #fff;
      font-size: size(17);
    }
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
    height: size-m(598);
    background-color: transparent;
    padding-top: size-m(30);
    .text {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 3;
      color: #fff;
      top: unset;
      left: unset;
      width: 80%;
      margin: 0 auto;
      .t1 {
        font-size: size-m(20);
        font-weight: 1000;
      }
      .t2 {
        font-size: size-m(20);
        margin-top: size-m(5);
        margin-bottom: size-m(20);
      }
      .t3 {
        font-size: size-m(12);
        width: 100%;
        text-align: left;
        line-height: 2;
      }
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("~@/projects/cfyd/s4/bg_m.png");
      background-position: center;
      background-size: cover;
      z-index: 1;
    }
    .building {
      position: absolute;
      left: 0;
      bottom: 0;
      width: size-m(375);
      height: size-m(416);
      background-image: url("~@/projects/cfyd/s4/building_m.png");
      background-position: center;
      background-size: cover;
      z-index: 2;
      .caption {
        position: absolute;
        left: size-m(30);
        bottom: size-m(10);
        color: #fff;
        font-size: size-m(12);
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
  name: "s4",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      visual: "",
    };
  },

  methods: {
    // scrollTo(el) {
    //   this.scrollInstance.scrollTo(el);
    // },
  },

  created() { },
  mounted() {
  },
};
</script>