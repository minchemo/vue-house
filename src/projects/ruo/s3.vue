<template>
  <div class="s3" id="scene">
    <img
      v-if="!isMobile"
      class="large"
      src="@/projects/ruo/s3/large.svg"
      alt=""
      srcset=""
      data-aos="fade"
      data-aos-delay="500"
    />
    <img
      v-else
      class="large"
      src="@/projects/ruo/s3/large_m.png"
      alt=""
      srcset=""
      data-aos="fade"
      data-aos-delay="500"
    />
    <img
      v-if="!isMobile"
      class="title"
      src="@/projects/ruo/s3/title.svg"
      alt=""
      srcset=""
      data-aos="fade"
    />
    <img
      v-else
      class="title"
      src="@/projects/ruo/s3/title_m.svg"
      alt=""
      srcset=""
      data-aos="fade"
    />
    <img
      v-if="!isMobile"
      class="circle"
      src="@/projects/ruo/s3/circle.svg"
      alt=""
      srcset=""
    />
    <img
      v-else
      class="circle"
      src="@/projects/ruo/s3/circle_m.png"
      alt=""
      srcset=""
    />
    <img
      v-if="!isMobile"
      class="circle2"
      src="@/projects/ruo/s3/circle2.svg"
      alt=""
      srcset=""
    />
    <img
      v-if="!isMobile"
      class="circle3"
      src="@/projects/ruo/s3/circle3.svg"
      alt=""
      srcset=""
    />
    <img class="splash" src="@/projects/ruo/s3/splash.svg" alt="" srcset="" />

    <div class="swiper-box">
      <Splide
        :has-track="false"
        :options="swipeOpt"
        data-aos="fade"
        data-aos-delay="400"
      >
        <SplideSlide v-for="(img, i) in imgs" :key="i">
          <img :src="img" alt="" srcset="" />
          <p>現場實景圖</p>
        </SplideSlide>
      </Splide>
    </div>
    <!-- <img class="" src="@/projects/ruo/s3/1.jpg" alt="" srcset=""> -->
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s3 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-size: 100%;
  background-position: bottom;
  background-color: #fff;
  z-index: 1;
  .title {
    position: absolute;
    width: size(270);
    top: size(151);
    right: size(200);
  }
  .large {
    position: absolute;
    width: size(465);
    bottom: size(90);
    right: size(131);
  }
  .splash {
    position: absolute;
    width: size(1164.96);
    bottom: -#{size(119)};
    left: -#{size(60)};
    z-index: 10;
  }
  .circle {
    position: absolute;
    width: size(123.44);
    bottom: size(261);
    right: size(566);
    animation: float 5s alternate-reverse infinite ease-in-out;
    z-index: 10;
  }
  .circle2 {
    position: absolute;
    width: size(346.71);
    bottom: -#{size(253)};
    right: size(131);
    animation: float 5s alternate-reverse infinite ease-in-out;
    z-index: 10;
  }
  .circle3 {
    position: absolute;
    width: size(416.25);
    top: -#{size(185)};
    left: -#{size(83)};
    animation: float 5s alternate-reverse infinite ease-in-out;
    z-index: 10;
  }
  .swiper-box {
    position: absolute;
    width: size(1146);
    height: size(694.17);
    // background: #eee;
    left: size(149);
    top: size(98);
    .splide {
      width: 100%;
      height: 100%;
      .splide__track {
        height: 100%;
        img {
          width: 100%;
        }
        p {
          position: absolute;
          font-size: size(12);
          color: #fff;
          right: 10px;
          bottom: 10px;
        }
      }
      .splide__arrows {
        .splide__arrow {
          width: size(71.39);
          height: size(71.39);
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid #000;
          &.splide__arrow--next {
            right: -#{size(36)};
          }
          &.splide__arrow--prev {
            left: -#{size(36)};
          }
        }
      }
    }
  }

  @keyframes float {
    from {
      transform: translateY(0) skew(1deg);
    }
    to {
      transform: translateY(-40px) skew(0deg);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s3 {
    position: relative;
    width: size-m(375);
    height: size-m(600);

    .title {
      position: absolute;
      width: size-m(313.27);
      top: size-m(89);
      right: size-m(29);
    }
    .large {
      width: size-m(298);
      bottom: size-m(295);
      right: auto;
      left: size-m(30);
    }
    .splash {
      position: absolute;
      width: size-m(463.68);
      bottom: -#{size-m(57)};
      left: -#{size-m(164)};
      z-index: 10;
    }
    .circle {
      position: absolute;
      width: size-m(468.21);
      bottom: size-m(166);
      right: -#{size-m(32)};
    }
    .swiper-box {
      position: absolute;
      width: 100%;
      height: size-m(226.17);
      left: 0;
      top: unset;
      bottom: 0;
      .splide {
        .splide__track {
          p {
            font-size: size-m(12);
          }
        }
        .splide__arrows {
          .splide__arrow {
            width: size-m(31);
            height: size-m(31);
            border: 1px solid #000;
            &.splide__arrow--next {
              right: 12px;
            }
            &.splide__arrow--prev {
              left: 12px;
            }
          }
        }
      }
    }

    @keyframes float {
      from {
        transform: translateY(0) skew(1deg);
      }
      to {
        transform: translateY(-40px) skew(0deg);
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
  name: "s3",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      imgs: [
        require("@/projects/ruo/s3/1.jpg"),
        require("@/projects/ruo/s3/2.jpg"),
        require("@/projects/ruo/s3/3.jpg"),
      ],
      swipeOpt: {
        rewind: true,
        pagination: false,
        autoplay: true,
        interval: 4000,
      },
    };
  },
  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },
  mounted() { },
  created() { },
};
</script>