<template>
  <div class="s5" id="scene">
    <img
      v-if="!isMobile"
      class="bg2"
      src="@/projects/ruo/s5/bg.jpg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />
    <img
      v-if="!isMobile"
      class="bg1"
      src="@/projects/ruo/s5/bg.png"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />
    <img
      v-else
      class="bg"
      src="@/projects/ruo/s5/bg_m.png"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />
    <img
      v-if="!isMobile"
      class="img1"
      src="@/projects/ruo/s5/1.jpg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <img
      v-if="!isMobile"
      class="title"
      src="@/projects/ruo/s5/title.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <img
      v-else
      class="title"
      src="@/projects/ruo/s5/title_m.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <img
      v-if="!isMobile"
      class="circle"
      src="@/projects/ruo/s5/circle.svg"
      alt=""
      srcset=""
    />
    <img
      v-else
      class="circle"
      src="@/projects/ruo/s5/circle_m.png"
      alt=""
      srcset=""
    />
    <img
      v-if="!isMobile"
      class="circle2"
      src="@/projects/ruo/s5/circle2.svg"
      alt=""
      srcset=""
    />
    <img
      v-if="!isMobile"
      class="large"
      src="@/projects/ruo/s5/large.svg"
      alt=""
      srcset=""
    />
    <img
      v-else
      class="large"
      src="@/projects/ruo/s5/large_m.png"
      alt=""
      srcset=""
    />
    <div class="subtitle1" data-aos="fade" data-aos-delay="500" v-if="isMobile">
      建築外觀實景圖
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s5 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: #efeff1;
  z-index: 2;
  .title {
    position: absolute;
    z-index: 2;
    left: size(664);
    top: size(150);
    width: size(464.27);
  }
  .img1 {
    position: absolute;
    z-index: 1;
    height: 100%;
    right: 0;
    top: 0;
  }
  .bg2 {
    position: absolute;
    left: size(480);
    bottom: 0;
    width: size(1100);
    z-index: 0;
    transform-origin: 50% 100%;
  }
  .bg1 {
    position: absolute;
    left: size(20);
    bottom: 0;
    width: size(545);
    z-index: 2;
  }
  .circle {
    position: absolute;
    width: size(297.6767);
    top: size(63);
    left: size(995);
    animation: float 5s alternate-reverse infinite ease-in-out;
    z-index: 1;
  }
  .circle2 {
    position: absolute;
    width: size(535.54);
    bottom: -#{size(250)};
    left: -#{size(246)};
    animation: float 5s alternate-reverse infinite ease-in-out;
    z-index: 1;
  }
  .large {
    position: absolute;
    z-index: 2;
    right: size(93);
    bottom: 0;
    width: size(936);
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
  .s5 {
    position: relative;
    width: size-m(375);
    height: size-m(667);

    .title {
      position: absolute;
      z-index: 2;
      left: size-m(30);
      top: size-m(40);
      width: size-m(313.27);
    }
    .bg {
      position: absolute;
      left: size-m(43);
      bottom: 0;
      width: size-m(271.31);
      z-index: 2;
    }
    .subtitle1 {
          position: absolute;
          font-size: size-m(12);
          color: #000;
          left: 10px;
          bottom: 10px;
          z-index: 10;
        }
    .circle {
      width: size-m(484.74);
      top: -#{size-m(79)};
      left: -#{size-m(48)};
    }
    .large {
      position: absolute;
      z-index: 2;
      right: size-m(31);
      bottom: unset;
      top: size-m(212);
      width: size-m(312);
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
  name: "s5",
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
  mounted() { },
  created() { },
};
</script>