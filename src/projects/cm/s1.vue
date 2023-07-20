<template>
  <div class="s1">
    <div class="bg"></div>
    <div class="circle">
      <img loading="lazy" class="c1" data-aos="zoom-in" data-aos-delay="0" src="~@/projects/cm/s1/logo.png"
        alt="藏美表參道" />
    </div>

    <img loading="lazy" v-if="!isMobile" class="t1" data-aos="fade" data-aos-delay="500"
        src="~@/projects/cm/s1/t1.svg" alt="藏美表參道" srcset="" />
      <img loading="lazy" v-else class="t1" data-aos="fade" data-aos-delay="1500" src="~@/projects/cm/s1/t1_m.svg"
        alt="藏美表參道" srcset="" />
        <div class="order" @click="scrollTo('#contact')" data-aos="fade" data-aos-delay="800"></div>

    <img loading="lazy" v-if="!isMobile" class="t2" data-aos="fade" data-aos-delay="1200"
        src="~@/projects/cm/s1/t2.svg" alt="藏美表參道" srcset="" />
      <img loading="lazy" v-else class="t2" data-aos="fade" data-aos-delay="1500" src="~@/projects/cm/s1/t2_m.svg"
        alt="藏美表參道" srcset="" />    
      
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";

/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  //background-image: url("~@/projects/cm/bg.png");
  background-size: 100%;
  background-position: bottom;

  .bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 120%;
    top: 0;
    left: 0;
    background: url("~@/projects/cm/s1/bg.png") repeat-x;
    background-size: 100vw auto;
    background-position: top center;
    mask-image: linear-gradient(0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(231, 231, 231, 0.25) 10%,
        rgba(209, 209, 209, 0.5) 20%,
        rgba(209, 209, 209, 0.7) 40%,
        rgba(156, 156, 156, 1) 100%);
  }

  .circle {
    img {
      position: absolute;

      &.c1 {
        width: size(510);
        height: size(558);
        left: size(730);
        top: calc(50% + (160 - 540) * 100vw / 1920);
      }

      &.c2 {
        width: size(1000);
        height: size(1000);
        right: -#{size(400)};
        top: -#{size(350)};
        animation: circle 12s ease-in-out infinite alternate;
      }

      &.c3 {
        width: size(600);
        height: size(600);
        left: -#{size(300)};
        top: size(400);
        animation: circle 9s ease-in-out infinite alternate;
      }

      &.c4 {
        width: size(180);
        height: size(180);
        right: size(20);
        top: size(650);
        animation: circle 4s ease-in-out infinite alternate;
      }

      &.c5 {
        width: size(350);
        height: size(350);
        right: size(150);
        bottom: -#{size(250)};
        animation: circle 6s ease-in-out infinite alternate;
      }
    }
  }

  @keyframes circle {
    to {
      transform: translateY(-20%);
    }
  }

    .t1 {
      position: absolute;
      width: size(897);
      left: size(232);
      bottom: size(150);
    }

    .order {
      position: absolute;
      right: size(232);
      bottom: size(185);
      width: size(515);
      height: size(75);
      background-image: url("~@/projects/cm/s1/btn.svg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: bottom left;

      &:hover {
        background-image: url("~@/projects/cm/s1/btn_h.svg");
        cursor: pointer;
      }
    }
    .t2 {
      position: absolute;
      width: size(513);
      right: size(232);
      bottom: size(150);
    }


}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s1 {
    position: relative;
    width: size-m(375);
    height: size-m(720);
    min-height: 0;
    max-height: size-m(812);

    .bg {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 120%;
      top: 0;
      left: 0;
      background-image: url("~@/projects/cm/s1/bg-m.png");
      mask-image: linear-gradient(0deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(231, 231, 231, 0.25) 10%,
          rgba(209, 209, 209, 0.5) 20%,
          rgba(209, 209, 209, 0.7) 40%,
          rgba(156, 156, 156, 1) 100%);
    }

    .circle {
      img {
        position: absolute;

        &.c1 {
          width: size-m(231);
          height: size-m(253);
          left: size-m(70);
          top: size-m(80);
        }

        &.c2 {
          width: size-m(200);
          height: size-m(200);
          right: -#{size-m(100)};
          top: -#{size-m(60)};
        }

        &.c3 {
          width: size-m(200);
          height: size-m(200);
          left: -#{size-m(95)};
          top: size-m(250);
        }

        &.c4 {
          width: size-m(50);
          height: size-m(50);
          right: size-m(20);
          top: size-m(220);
        }

        &.c5 {
          width: size-m(90);
          height: size-m(90);
          right: size-m(20);
          bottom: size-m(250);
        }
      }
    }

    .t2 {
        position: absolute;
        width: size-m(245);
        bottom: size-m(120);
        left: size-m(65);
      }

      .t1 {
        position: absolute;
        width: size-m(231);
        left: size-m(70);
        bottom: size-m(190);
      }

      .order {
        position: absolute;
        left: size-m(70);
        bottom: size-m(145);
        width: size-m(245);
        height: size-m(36);
        background-image: url("~@/projects/cm/s1/btn.svg");
        background-size: 95%;
        background-repeat: no-repeat;
        background-position: bottom left;

        &:hover {
          background-image: url("~@/projects/cm/s1/btn_h.svg");
          cursor: pointer;
        }
      }


  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";

export default {
  name: "s1",
  props: ["scrollInstance"],

  data() {
    return {
      isMobile,
    };
  },

  methods: {
    scrollTo(el) {
      const self = this;
      self.scrollInstance.scrollTo(el, { duration: 0 });
    },
  },

  created() { },
};
</script>
