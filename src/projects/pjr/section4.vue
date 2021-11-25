<template>
  <div class="section4">
    <div class="info hasdivider" data-aos="fade-up" data-aos-delay="400">
      <h2 v-html="activeSlide.title"></h2>
      <div class="divider"></div>
    </div>
    <div class="swiper-box" data-aos="fade-up">
      <swiper
        :options="swiperOptions"
        ref="swiper"
        @slideChangeTransitionEnd="slidechange"
      >
        <swiper-slide
          class="slide"
          v-for="(slide, i) in slides"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${slide.img})`,
          }"
        >
          <div class="caption">
            {{ slide.caption }}
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section4 {
  background-color: #d2dee0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  overflow: hidden;
  position: relative;
  .info {
    position: relative;
    text-align: left;
    width: size(440);
    margin-right: size(80);
    h2 {
      text-align: center;
      font-size: size(50);
      font-weight: 600;
      line-height: 1.2;
      color: #267f98;
      white-space: nowrap;
      font-family: "Noto Serif TC", Noto Sans TC, serif;
    }
    .divider {
      background: #009be4;
      width: size(560);
      height: 1px;
      margin: size(20) 0;
      margin-right: -#{size(80)};
    }
    &::after {
      content: "";
      width: 1px;
      height: size(400);
      background: #267f98;
      position: absolute;
      top: -#{size(450)};
      left: 50%;
    }
  }
  .swiper-box {
    width: size(1278);
    .swiper-container {
      padding: size(80) 0;
      margin: size(100) 0;
      .slide {
        height: 0;
        padding-bottom: 66%;
        background-size: cover;
        .caption {
          position: absolute;
          z-index: 1;
          color: #fff;
          right: size(40);
          bottom: size(30);
          font-size: size(20);
          font-weight: 200;
          text-shadow: #000 0.1em 0.1em 0.1em;
        }
      }
      .swiper-button-prev {
        left: size(50);
        width: size(80);
        height: size(80);
        color: #fff;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;

        &::after {
          content: "";
        }
      }
      .swiper-button-next {
        right: size(50);
        color: #fff;
        width: size(80);
        height: size(80);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;

        &::after {
          content: "";
        }
      }

      .swiper-pagination {
        padding-left: size(650);
        .swiper-pagination-bullet {
          margin: 0 size(6);
          border-radius: 0;
          background: transparent;
          border: 1px solid #267f98;
          width: size(18);
          height: size(18);
          opacity: 1;
          &.swiper-pagination-bullet-active {
            background: #267f98;
          }
        }
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    background-color: #d2dee0;
    min-height: unset;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-top: size-m(50);
    .info {
      text-align: left;
      width: 80%;
      margin-right: unset;
      margin-top: size-m(25);
      padding-top: size-m(25);
      height: auto;
      h2 {
        text-align: center;
        font-size: size-m(25.5);
        font-weight: 600;
        line-height: 1.5;
        height: size-m(70);
        font-family: "Noto Serif TC", Noto Sans TC, serif;
      }
      .divider {
        width: 1px;
        height: size-m(100);
        margin-right: 0;
        margin: size-m(50) auto size-m(15) auto;
      }
      p {
        margin-top: size-m(20);
        font-size: size-m(12);
        letter-spacing: size(3);
        line-height: 1.5;
      }
      &::after {
        content: "";
        width: 80vw;
        height: 1px;
        background: #267f98;
        position: absolute;
        left: 0;
        transform: unset;
        top: 0%;
        opacity: 1;
        animation: fade 2s;

        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      }
    }
    .swiper-box {
      margin-top: size-m(0);
      width: 100%;
      .swiper-container {
        padding-bottom: size-m(40);
        margin-bottom: size-m(10);
        margin-top: 0 !important;
        padding-top: 0 !important;
        .slide {
          height: 0;
          padding-bottom: 66%;
          background-size: cover;
          .caption {
            position: absolute;
            z-index: 1;
            color: #fff;
            right: size-m(10);
            bottom: size-m(10);
            font-size: size-m(16);
            text-shadow: #000 0.1em 0.1em 0.1em;
            font-weight: 300;
          }
        }
        .swiper-button-prev {
          left: size-m(20);
          width: size-m(40);
          height: size-m(40);
          color: #fff;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: left;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;

          &::after {
            content: "";
            left: 0;
            top: -50%;
          }
        }
        .swiper-button-next {
          right: size-m(20);
          width: size-m(40);
          height: size-m(40);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;

          &::after {
            content: "";
          }
        }

        .swiper-pagination {
          padding: 0;
          .swiper-pagination-bullet {
            border-radius: 0;
            background: transparent;
            border: 1px solid #267f98;
            width: size-m(10);
            height: size-m(10);
            margin: 0 size-m(2);
            opacity: 1;
            &.swiper-pagination-bullet-active {
              background: #267f98;
            }
          }
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "section4",

  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      isMobile,
      activeSlide: {},
      slides: [
        {
          title: "中山、雙連雙捷核心<br>盛裝優雅日常時光",
          img: require("@/projects/pjr/s4/1.jpg"),
          caption: "新光三越與誠品生活南西店",
        },
        {
          title: "百年雙連生活質蘊<br>難忘市井好味道",
          img: require("@/projects/pjr/s4/2.jpg"),
          caption: "情境圖",
        },
        {
          title: "五星級飯店廊道<br>全球貴賓風光下榻",
          img: require("@/projects/pjr/s4/3.jpg"),
          caption: "晶華酒店",
        },
        {
          title: "權掌松山機場<br>台北雙子星<br>雙國門輻輳",
          img: require("@/projects/pjr/s4/4.jpg"),
          caption: "台北雙子星",
        },
        {
          title: "上海、陽信雙總部<br>第一大道再鑲榮耀",
          img: require("@/projects/pjr/s4/5.jpg"),
          caption: "上海陽信雙總部",
        },
        {
          title: "百年古蹟藝術聚落<br>探不盡的人文靈光",
          img: require("@/projects/pjr/s4/6.jpg"),
          caption: "光點台北",
        },
      ],
      swiperOptions: {
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".section4 .swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 4500,
        },
      },
    };
  },

  methods: {
    slidechange() {
      const activeIndex = this.$refs.swiper.$swiper.realIndex;
      this.activeSlide = this.slides[activeIndex];
    },
  },

  mounted() {
    this.activeSlide = this.slides[0];
  },

  created() { },
};
</script>
