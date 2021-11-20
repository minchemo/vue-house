<template>
  <div class="section8">
    <div class="info" data-aos="fade-up" data-aos-delay="400">
      <div class="subtitle" v-html="activeSlide.subtitle"></div>
      <h2 v-html="activeSlide.title"></h2>
      <div class="small-title" v-html="activeSlide.smallTitle"></div>
      <div class="divider"></div>
      <p v-html="activeSlide.content"></p>
    </div>
    <div class="swiper-box" data-aos="fade-up">
      <swiper
        :options="swiperOptions"
        ref="swiper"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
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
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section8 {
  background-color: #d2dee0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
  .info {
    text-align: left;
    width: size(700);
    margin-left: size(50);
    .subtitle {
      text-align: center;
      font-size: size(29);
      color: #231815;
      margin-bottom: size(25);
    }
    h2 {
      text-align: center;
      font-size: size(54);
      font-weight: 300;
      line-height: 1.2;
      color: #267f98;
      white-space: nowrap;
      margin-bottom: size(25);
    }
    .small-title {
      text-align: center;
      font-size: size(39);
      color: #267f98;
      font-weight: 300;
    }
    .divider {
      background: #009be4;
      width: size(1050);
      height: 1px;
      left: 0;
      margin-right: -#{size(400)} !important;
      margin-top: size(25);
      margin-bottom: size(25);
    }
    p {
      font-size: size(22);
      letter-spacing: size(3);
      font-weight: 300;
      line-height: 2;
      color: #231815;
    }
  }
  .swiper-box {
    position: relative;
    width: size(932);
    padding: size(100) 0;
    .swiper-container {
      .slide {
        height: 0;
        padding-bottom: 54.9%;
        background-size: cover;
        .caption {
          position: absolute;
          z-index: 1;
          color: #fff;
          right: size(40);
          bottom: size(30);
          font-size: size(20);
          font-weight: 200;
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
  .section8 {
    background-color: #d2dee0;
    min-height: unset;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .info {
      text-align: left;
      width: 80%;
      margin-left: unset;
      margin-top: size-m(30);
      height: auto;
      h2 {
        text-align: center;
        font-size: size-m(25.5);
        font-weight: 300;
        line-height: 1.5;
      }
      .divider {
        display: none;
      }
      p {
        margin-top: size-m(20);
        font-size: size-m(12);
        letter-spacing: size(3);
        line-height: 1.5;
      }
    }
    .swiper-box {
      width: 80%;
      .swiper-container {
        padding: 0;
        margin: size-m(20) 0;
        .slide {
          height: 0;
          padding-bottom: 100%;
          background-size: cover;
          .caption {
            position: absolute;
            z-index: 1;
            color: #fff;
            right: size-m(10);
            bottom: size-m(10);
            font-size: size-m(16);
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
          .swiper-pagination-bullet {
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
  name: "section8",

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
          subtitle: "讓建築好好地長 就像那些很紮實的大樹",
          title: "璞真建設<br>建築摯美生活初衷",
          smallTitle: "",
          content: `2002年成立，璞真像棵樹，也像種樹的人，作建築本心，對環境，對人，密密融合；對土地，念念不忘。致力發揮土地最高價值，秉持自然生態與居住環境和諧共生，融入四季、晴雨、日夜、生態考量，涵養豐厚人文美學，為台灣創造深植人心的名邸，滿足居者返璞歸真的渴望。`,
          img: require("@/projects/pjr/s8/1.jpg"),
          caption: "情境示意圖",
        },

      ],
      swiperOptions: {
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
        },
      },
    };
  },

  methods: {
    onSwiperSlideChangeTransitionStart() {
      const activeIndex = this.$refs.swiper.$swiper.activeIndex;
      this.activeSlide = this.slides[activeIndex];
    },
  },

  mounted() {
    this.activeSlide = this.slides[0];
  },

  created() { },
};
</script>
