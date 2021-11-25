<template>
  <div class="section3">
    <div class="info" data-aos="fade-up" data-aos-delay="400">
      <h2 v-html="activeSlide.title"></h2>
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
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

        <div class="swiper-pagination" v-if="!isMobile" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section3 {
  background-color: #d2dee0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  .info {
    text-align: left;
    width: size(460);
    margin-left: size(80);
    margin-top: size(160);
    height: size(600);
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
      margin-left: -#{size(80)};
    }
    p {
      font-size: size(22);
      letter-spacing: size(3);
      font-weight: 400;
      line-height: 1.5;
      color: #231815;
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
  .section3 {
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
        font-weight: 600;
        line-height: 1.5;
        font-family: "Noto Serif TC", Noto Sans TC, serif;
      }
      .divider {
        display: none;
      }
      p {
        margin-top: size-m(20);
        font-size: size-m(12);
        letter-spacing: size(3);
        line-height: 1.5;
        font-weight: 500;
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
            font-size: size-m(12);
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
  name: "section3",

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
          title: "百年林蔭至高地標<br/>璞真訂製傳世眼界",
          content: `翻閱中山北路世紀繪卷，台灣第一條現代化大道，日本天皇敕使御道，國家外交官道，烜赫人物踏響中山北獨有的貴族身世。人文熟釀的大道胸豁，從昂首邁步到駐足仰望，23層百年樹海之巔，最懂居宅品味的「璞真之道」淬鍊來到。`,
          img: isMobile
            ? require("@/projects/pjr/s3/1_mo.jpg")
            : require("@/projects/pjr/s3/1.jpg"),
          caption: "中⼭北路",
        },
        {
          title: "樹海人文長鏡頭<br/>潛藏一世紀富裕壯遊",
          content: `半輩子縱橫江山，滿胸懷超然際遇，繫念中山北路樹海第一排的窗，台北歷史最淵遠的林蔭大道，心上永恆富裕原鄉。樟楓漫天綠浪開道，企業總部、縉紳豪邸，相偕未來蓬勃盛放。傳奇在腳下波瀾，繁華燈火在側，群山濃淡疊翠，頂峰之上，照看歲月寧靜。`,
          img: isMobile
            ? require("@/projects/pjr/s3/2_mo.jpg")
            : require("@/projects/pjr/s3/2.jpg"),
          caption: "中⼭北路",
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
          el: ".section3 .swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 4500,
        },
      },
    };
  },

  methods: {
    onSwiperSlideChangeTransitionStart() {
      console.log( this.$refs.swiper.$swiper);
      const activeIndex = this.$refs.swiper.$swiper.realIndex;
      this.activeSlide = this.slides[activeIndex];
    },
  },

  mounted() {
    this.activeSlide = this.slides[0];
  },

  created() {},
};
</script>
