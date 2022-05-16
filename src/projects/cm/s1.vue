<template>
  <div class="s1">
    <div class="bg"></div>
    <div class="circle">
      <img loading="lazy"
        class="c1"
        data-aos="zoom-in"
        data-aos-delay="0"
        src="~@/projects/cm/s1/logo.png"
        alt="藏美表參道"
      />
    </div>
    <div class="title">
      <!--img
        v-if="!isMobile"
        class="t2"
        data-aos="fade"
        data-aos-delay="500"
        src="~@/projects/cm/s1/t2.svg"
        alt="藏美表參道"
        srcset=""
      /-->
      <!--img
        v-else
        class="t2"
        data-aos="fade"
        data-aos-delay="500"
        src="~@/projects/cm/s1/t2_m.svg"
        alt="藏美表參道"
        srcset=""
      /-->
      <img loading="lazy"
        v-if="!isMobile"
        class="t1"
        data-aos="fade"
        data-aos-delay="1500"
        src="~@/projects/cm/s1/t1.svg"
        alt="藏美表參道"
        srcset=""
      />
      <img loading="lazy"
        v-else
        class="t1"
        data-aos="fade"
        data-aos-delay="1500"
        src="~@/projects/cm/s1/t1_m.svg"
        alt="藏美表參道"
        srcset=""
      />
    </div>
    <div class="subtitle">
      <img loading="lazy"
        v-if="!isMobile"
        class="t1"
        data-aos="fade"
        data-aos-delay="2000"
        src="~@/projects/cm/s1/subtitle.svg"
        alt="藏美表參道"
        srcset=""
      />
      <img loading="lazy"
        v-else
        class="t1"
        data-aos="fade"
        data-aos-delay="2000"
        src="~@/projects/cm/s1/subtitle_m.svg"
        alt="藏美表參道"
        srcset=""
      />
      <div
        class="order"
        @click="scrollTo('#contact')"
        data-aos="fade"
        data-aos-delay="1000"
      ></div>
    </div>
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
      background-size:50vw auto;
      background-position: top center;
    mask-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(231, 231, 231, 0.25) 10%,
      rgba(209, 209, 209, 0.5) 20%,
      rgba(209, 209, 209, 0.7) 40%,
      rgba(156, 156, 156, 1) 100%
    );
  }
  .circle {
    img {
      position: absolute;
      &.c1 {
        width: size(580);
        height: size(639);
        left: size(150);
        top: size(250);
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

  .title {
    z-index: 1;
    position: absolute;
    width: size(815);
    height: size(478.9);
    left: 65%;
    top:calc(50% - 0.8vw);
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    .t2 {
      position: relative;
      width: size(399.84);
      margin-bottom: size(40);
    }
    .t1 {
      position: relative;
      width: size(697);
      margin: 0px auto;
    }
  }
  .subtitle {
    position: absolute;
    width: size(823);
    height: size(149.6);
    top:calc(50% + 0.5vw);
    left: 65%;
    transform: translateX(-50%);
    .t1 {
      width: 100%;
    }
    .order {
      position: absolute;
      right: 0;
      bottom: -#{size(210)};
      width: size(823);
      height: size(75);
      background-image: url("~@/projects/cm/s1/order.png");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: bottom left;
      &:hover {
        background-image: url("~@/projects/cm/s1/order_h.png");
        cursor: pointer;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s1 {
    position: relative;
    width: size-m(375);
    height: size-m(720);
  min-height: 0;
  max-height:size-m(812);
    .bg {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 120%;
      top: 0;
      left: 0;
      background-image: url("~@/projects/cm/s1/bg-m.png");
      mask-image: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(231, 231, 231, 0.25) 10%,
        rgba(209, 209, 209, 0.5) 20%,
        rgba(209, 209, 209, 0.7) 40%,
        rgba(156, 156, 156, 1) 100%
      );
    }
    .circle {
      img {
        position: absolute;
        &.c1 {
          width: size-m(151);
          height: size-m(167);
          left: 30%;
          top: size-m(60);
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
    .title {
      z-index: 1;
      position: relative;
      width: size-m(243);
      height: size-m(62);
      left: 50%;
      top: 35%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-between;
      .t2 {
        position: relative;
        width: size-m(10);
        margin-bottom: 0;
        margin-top: size-m(20);
      }
      .t1 {
        position: relative;
        width: size-m(227);
        margin: 0px auto;
      }
    }
    .subtitle {
      position: relative;
      width: size-m(243);
      height: size-m(121);
      top: 39% !important;
      bottom: size-m(80);
      left: 50%;
      transform: translateX(-50%);
      .t1 {
        width: 100%;
      }
      .order {
        position: absolute;
        left: 1.5%;
        bottom: size-m(-100);
        width: size-m(245);
        height: size-m(41);
        background-image: url("~@/projects/cm/s1/order_m.png");
        background-size: 95%;
        background-repeat: no-repeat;
        background-position: bottom left;
        &:hover {
          background-image: url("~@/projects/cm/s1/order_m_h.png");
          cursor: pointer;
        }
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
  name: "s1",
  props: ["scrollInstance"],

  data() {
    return {
      isMobile,
    };
  },

  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },

  created() {},
};
</script>
