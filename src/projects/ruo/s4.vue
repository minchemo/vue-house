<template>
  <div class="s4" id="scene">
    <img
      v-if="!isMobile"
      class="title"
      src="@/projects/ruo/s4/title.svg"
      alt=""
      srcset=""
      data-aos="fade"
      data-aos-delay="200"
    />
    <img
      v-else
      class="title"
      src="@/projects/ruo/s4/title_m.png"
      alt=""
      srcset=""
      data-aos="fade"
      data-aos-delay="200"
    />
    <div class="swiper-box" v-animate-onscroll="'animated fadeInUp'">
      <Splide :has-track="false" :options="swipeOpt" ref="slide">
        <SplideSlide v-for="(img, i) in imgs" :key="i">
          <img :src="img" alt="" srcset="" />
        </SplideSlide>
      </Splide>
    </div>
    <div class="swiper-box2" v-animate-onscroll="'animated fadeInUp'">
      <Splide :has-track="false" :options="swipeOpt2">
        <SplideSlide v-for="(img, i) in imgs2" :key="i">
          <img :src="img" alt="" srcset="" />
        </SplideSlide>
      </Splide>
    </div>
    <div class="subtitle" data-aos="fade" data-aos-delay="500">
      全方位豐沛商圈，購食育行一次滿足
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s4 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: #faed00;
  .title {
    position: absolute;
    width: size(1134.5);
    top: size(88);
    left: size(201);
  }
  .swiper-box {
    position: absolute;
    width: size(1510.57);
    height: size(171);
    left: size(191);
    top: size(300);
    .splide {
      width: 100%;
      height: 100%;
      .splide__track {
        height: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
  .swiper-box2 {
    position: absolute;
    width: size(1496);
    left: size(202);
    bottom: size(82);
    .splide {
      width: 100%;
      height: 100%;
      .splide__track {
        height: 100%;
        img {
          width: 100%;
        }
      }
    }
    &::before {
      content: "";
      width: 200vw;
      height: 1px;
      position: absolute;
      top: -#{size(15)};
      left: -#{size(500)};
      background: #fff;
    }
    &::after {
      content: "";
      width: 200vw;
      height: 1px;
      position: absolute;
      bottom: -#{size(15)};
      left: -#{size(500)};
      background: #fff;
    }
  }
  .subtitle {
    position: absolute;
    font-size: size(33);
    font-weight: 1000;
    top: size(486);
    left: size(697);
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
    height: size-m(667);
    .title {
      position: absolute;
      width: size-m(311);
      top: size-m(71);
      left: size-m(34);
    }
    .swiper-box {
      position: absolute;
      width: 100%;
      height: auto;
      left: 0;
      top: size-m(165);
      .splide__list {
        padding: 10px 0 !important;
      }
      .splide__slide {
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        &.is-active {
          opacity: 1;
          img {
            width: 110% !important;
          }
        }
        img {
          width: 90% !important;
        }
      }
    }
    .swiper-box2 {
      width: 100%;
      height: size-m(266.11);
      left: 0;
      bottom: size-m(58);
      &::before {
        content: "";
        display: none;
      }
      &::after {
        content: "";
        display: none;
      }
      .splide__arrows {
        .splide__arrow {
          width: size-m(31);
          height: size-m(31);
        }
      }
      .splide__pagination {
        bottom: -10%;
        .splide__pagination__page {
          transform: scale(1) !important;
          background-color: transparent;
          border: 1px solid #fff;
          &.is-active {
            background-color: #fff;
          }
        }
      }
    }
    .subtitle {
      font-size: size-m(20);
      top: size-m(298);
      left: size-m(23);
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
      imgs: [
        require("@/projects/ruo/s4/a.svg"),
        require("@/projects/ruo/s4/b.svg"),
        require("@/projects/ruo/s4/c.svg"),
        require("@/projects/ruo/s4/d.svg"),
        require("@/projects/ruo/s4/e.svg"),
        require("@/projects/ruo/s4/f.svg"),
        require("@/projects/ruo/s4/g.svg"),
        require("@/projects/ruo/s4/h.svg"),
        require("@/projects/ruo/s4/i.svg"),
      ],
      imgs2: [
        require("@/projects/ruo/s4/1.jpg"),
        require("@/projects/ruo/s4/2.jpg"),
        require("@/projects/ruo/s4/3.jpg"),
        require("@/projects/ruo/s4/4.jpg"),
      ],
      swipeOpt: {
        rewind: true,
        pagination: false,
        arrows: false,
        perPage: 9,
        autoplay: true,
        interval: 3000,
        breakpoints: {
          640: {
            type: "loop",
            perPage: 1,
            padding: "37%",
            focus: "center",
            gap: 0,
          },
        },
      },
      swipeOpt2: {
        rewind: true,
        autoplay: true,
        interval: 3000,
        breakpoints: {
          640: {
            type: "loop",
            perPage: 1,
            gap: 0,
            pagination: true,
            arrows: true,
          },
          3000: {
            pagination: false,
            arrows: false,
            perPage: 4,
            gap: 20,
          },
        },
      },
    };
  },
  computed: {
    slideInstance() {
      return this.$refs.slide.splide;
    },
  },
  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },
  mounted() {
    const self = this;
    this.slideInstance.on("click", (e) => {
      self.slideInstance.go(e.index);
    });
  },
  created() { },
};
</script>