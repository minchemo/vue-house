<template>
  <div class="section13">
    <div class="info" data-aos="fade-up" data-aos-delay="400">
      <div class="subtitle" v-html="activeSlide.subtitle"></div>
      <h2 v-html="activeSlide.title"></h2>
      <div class="small-title" v-html="activeSlide.smallTitle"></div>
      <div class="divider"></div>
      <p v-html="activeSlide.content"></p>
      <div class="s-nav">
        <div class="prev" @click="prevS">
          <img
            v-lazy
            :temp="require('@/projects/pjr/s11/prev.svg')"
            alt=""
            srcset=""
          />
        </div>
        <div class="next" @click="nextS">
          <img
            v-lazy
            :temp="require('@/projects/pjr/s11/next.svg')"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
    <div class="swiper-box" data-aos="fade-up">
      <swiper :options="swiperOptions" ref="swiper">
        <swiper-slide
          class="slide"
          v-for="(slide, i) in activeSlide.img"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${slide})`,
          }"
        >
          <div class="caption">
            {{ activeSlide.caption }}
          </div>
        </swiper-slide>
        <div
          class="swiper-button-prev"
          slot="button-prev"
          v-if="isMobile"
        ></div>
        <div
          class="swiper-button-next"
          slot="button-next"
          v-if="isMobile"
        ></div>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section13 {
  background-color: #ededee;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  .info {
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 0;
    text-align: left;
    background-color: rgba($color: #ededee, $alpha: 0.6);
    padding: size(60) size(80) size(60) size(120);
    .subtitle {
      font-size: size(29);
      color: #231815;
      line-height: 1.5;
      margin-bottom: size(25);
      font-family: "Noto Serif TC", Noto Sans TC, serif;
      font-weight: 600;
    }
    h2 {
      font-size: size(54);
      font-weight: 600;
      line-height: 1.2;
      color: #267f98;
      white-space: nowrap;
      margin-bottom: size(25);
      font-family: "Noto Serif TC", Noto Sans TC, serif;
    }
    .small-title {
      text-align: center;
      font-size: size(39);
      color: #267f98;
      font-weight: 300;
    }
    .divider {
      position: relative;
      background: #fff;
      width: 200%;
      height: 1px;
      left: 0;
      margin-right: -100%;
      margin-top: size(25);
      margin-bottom: size(25);
    }
    p {
      font-size: size(22);
      letter-spacing: size(3);
      font-weight: 400;
      line-height: 1.5;
      color: #231815;
      max-width: size(570);
    }
    .s-nav {
      width: size(140);
      margin-top: size(25);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .prev,
      .next {
        width: size(24);
        cursor: pointer;
        img {
          width: 100%;
        }
      }
    }
  }
  .swiper-box {
    position: relative;
    width: 100vw;
    .swiper-container {
      .slide {
        height: 0;
        padding-bottom: 56.25%;
        background-size: cover;
        .caption {
          position: absolute;
          z-index: 1;
          color: #000;
          left: size(150);
          bottom: size(50);
          font-size: size(20);
          font-weight: 400;
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
  .section13 {
    background-color: #ededee;
    min-height: unset;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .info {
      position: relative;
      text-align: left;
      width: 100%;
      margin-left: unset;
      margin-top: size-m(30);
      height: auto;
      padding: size-m(20);
      .subtitle {
        text-align: center;
        font-size: size-m(14.5);
        font-weight: 600;
      }
      h2 {
        text-align: center;
        font-size: size-m(25.2);
        font-weight: 600;
      }
      .divider {
        display: none;
      }
      p {
        margin-top: size-m(20);
        font-size: size-m(12);
        letter-spacing: size(3);
        line-height: 1.5;
        max-width: 100%;
        font-weight: 500;
      }
    }
    .swiper-box {
      width: 100%;
      .swiper-container {
        padding: 0;
        margin: 0;
        .slide {
          height: 0;
          padding-bottom: 100%;
          background-size: cover;
          .caption {
            position: absolute;
            z-index: 1;
            color: #000;
            right: size-m(10);
            bottom: size-m(10);
            font-size: size-m(12);
            font-weight: 400;
            text-align: right;
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
  name: "section13",

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
      currentSlide: 0,
      activeSlide: {},
      slides: [
        {
          subtitle: "璞真建設 建築摯美生活初衷",
          title: "讓建築好好地長<br>就像那些很紮實的大樹",
          content: `2002年成立，璞真像棵樹，也像種樹的人，作建築本心，對環境，對人，密密融合；對土地，念念不忘。致力發揮土地最高價值，秉持自然生態與居住環境和諧共生。`,
          img: [require("@/projects/pjr/s13/1.jpg")],
          caption: "3D 情境示意圖",
        },
        {
          subtitle: "璞真建22設 建築摯美生活初衷",
          title: "讓建築好好地長<br>就像那些很紮實的大樹",
          content: `2002年成立，璞真像棵樹，也像種樹的人，作建築本心，對環境，對人，密密融合；對土地，念念不忘。致力發揮土地最高價值，秉持自然生態與居住環境和諧共生。`,
          img: [require("@/projects/pjr/s13/1.jpg")],
          caption: "3D 情境示意圖",
        },
      ],
      swiperOptions: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
        autoplay: {
          delay: 4500,
        },
      },
    };
  },

  methods: {
    nextS() {
      this.currentSlide++;
      if (this.currentSlide == this.slides.length) {
        this.currentSlide = 0
      }
      this.activeSlide = this.slides[this.currentSlide];
    },
    prevS() {
      this.currentSlide--;
      if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length - 1
      }

      this.activeSlide = this.slides[this.currentSlide];
    },
  },

  mounted() {
    this.activeSlide = this.slides[this.currentSlide];
  },

  created() { },
};
</script>
