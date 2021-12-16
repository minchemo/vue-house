<template>
  <div class="s1">
    <div class="bg"></div>
    <div class="circle">
      <img
        class="c1"
        data-aos="zoom-in"
        data-aos-delay="0"
        src="~@/projects/cm/s1/circle.png"
        alt=""
      />
      <img
        class="c2"
        data-aos="zoom-in"
        data-aos-delay="300"
        src="~@/projects/cm/s1/circle.png"
        alt=""
      />
      <img
        class="c3"
        data-aos="zoom-in"
        data-aos-delay="600"
        src="~@/projects/cm/s1/circle.png"
        alt=""
      />
      <img
        class="c4"
        data-aos="zoom-in"
        data-aos-delay="900"
        src="~@/projects/cm/s1/circle.png"
        alt=""
      />
      <img
        class="c5"
        data-aos="zoom-in"
        data-aos-delay="1200"
        src="~@/projects/cm/s1/circle.png"
        alt=""
      />
    </div>
    <div class="title">
      <img
        class="t2"
        data-aos="fade"
        data-aos-delay="500"
        src="~@/projects/cm/s1/t2.svg"
        alt=""
        srcset=""
      />
      <img
        class="t1"
        data-aos="fade"
        data-aos-delay="1500"
        src="~@/projects/cm/s1/t1.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="subtitle">
      <img
        class="t1"
        data-aos="fade"
        data-aos-delay="2000"
        src="~@/projects/cm/s1/subtitle.svg"
        alt=""
        srcset=""
      />
      <div class="order" data-aos="fade" data-aos-delay="2500"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background-image: url("~@/projects/cm/bg.png");
  background-size: 100%;
  background-position: bottom;
  .bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 120%;
    top: 0;
    left: 0;
    background-image: url("~@/projects/cm/s1/bg.jpeg");
    background-size: 120%;
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
        width: size(180);
        height: size(180);
        left: size(150);
        top: size(70);
      }
      &.c2 {
        width: size(1000);
        height: size(1000);
        right: -#{size(400)};
        top: -#{size(350)};
      }
      &.c3 {
        width: size(600);
        height: size(600);
        left: -#{size(300)};
        top: size(400);
      }
      &.c4 {
        width: size(180);
        height: size(180);
        right: size(20);
        top: size(650);
      }
      &.c5 {
        width: size(350);
        height: size(350);
        right: size(150);
        bottom: -#{size(250)};
      }
    }
  }
  .title {
    z-index: 1;
    position: absolute;
    width: size(1098);
    height: size(478.9);
    left: 50%;
    top: 45%;
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
      width: size(1084.6);
    }
  }
  .subtitle {
    position: absolute;
    width: size(1100);
    height: size(149.6);
    bottom: size(150);
    left: 50%;
    transform: translateX(-50%);
    .t1 {
      width: 100%;
    }
    .order {
      position: absolute;
      left: 0;
      bottom: -#{size(30)};
      width: size(630.5);
      height: size(83.78);
      background-image: url("~@/projects/cm/s1/order.png");
      background-size: 95%;
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
    height: size-m(667);
    background-image: url("~@/projects/cm/bg.png");
    background-size: 100%;
    background-position: bottom;
    .bg {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 120%;
      top: 0;
      left: 0;
      background-image: url("~@/projects/cm/s1/bg.jpeg");
      background-size: 120%;
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
          width: size(180);
          height: size(180);
          left: size(150);
          top: size(70);
        }
        &.c2 {
          width: size(1000);
          height: size(1000);
          right: -#{size(400)};
          top: -#{size(350)};
        }
        &.c3 {
          width: size(600);
          height: size(600);
          left: -#{size(300)};
          top: size(400);
        }
        &.c4 {
          width: size(180);
          height: size(180);
          right: size(20);
          top: size(650);
        }
        &.c5 {
          width: size(350);
          height: size(350);
          right: size(150);
          bottom: -#{size(250)};
        }
      }
    }
    .title {
      z-index: 1;
      position: absolute;
      width: size(1098);
      height: size(478.9);
      left: 50%;
      top: 45%;
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
        width: size(1084.6);
      }
    }
    .subtitle {
      position: absolute;
      width: size(1100);
      height: size(149.6);
      bottom: size(150);
      left: 50%;
      transform: translateX(-50%);
      .t1 {
        width: 100%;
      }
      .order {
        position: absolute;
        left: 0;
        bottom: -#{size(30)};
        width: size(630.5);
        height: size(83.78);
        background-image: url("~@/projects/cm/s1/order.png");
        background-size: 95%;
        background-repeat: no-repeat;
        background-position: bottom left;
        &:hover {
          background-image: url("~@/projects/cm/s1/order_h.png");
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

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
