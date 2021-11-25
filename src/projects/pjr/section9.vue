<template>
  <div class="section9">
    <div class="s-divider"></div>
    <div class="info" data-aos="fade-up" data-aos-delay="400">
      <h2>
        建築、自然永恆詩境<br />
        鐫刻城市美學指標
      </h2>
      <div class="divider"></div>
      <p>
        建築不只精密科學計算，而是有溫度、有情感、有故事的生活聚場，從結構形體昇華至精神領域。璞真願意花更多時間探索生活，量身訂製創新空間提案，以綠建築、智慧建築設計導入低碳思維。當建築擁有獨一無二的性格，自然吸引居住品味相契的人們，回歸生活最樸實且真摯的樣貌。
      </p>
      <template>
        <div class="swiper-box1 swiper-box" data-aos="fade-up" v-if="!isMobile">
          <swiper
            :options="swiperOptions1"
            ref="swiper1"
            @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart1"
          >
            <swiper-slide
              class="slide"
              v-for="(slide, i) in slides1"
              v-bind:key="i"
              v-bind:style="{
                backgroundImage: `url(${slide.img})`,
              }"
            >
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="caption" v-html="activeSlide1.caption"></div>
        </div>
        <div class="swiper-box1 swiper-box" data-aos="fade-up" v-else>
          <div class="caption large">璞真建設 經典業績</div>
          <swiper
            :options="swiperOptions1"
            ref="swiper1"
            @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart1"
          >
            <swiper-slide
              class="slide"
              v-for="(slide, i) in slides1"
              v-bind:key="i"
              v-bind:style="{
                backgroundImage: `url(${slide.img})`,
              }"
            >
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
          <div class="caption" v-html="activeSlide1.caption"></div>
        </div>
      </template>
    </div>

    <template>
      <div class="swiper-box swiper-box2" data-aos="fade-up" v-if="isMobile">
        <swiper
          :options="swiperOptions2"
          ref="swiper2"
          @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart2"
        >
          <swiper-slide
            class="slide"
            v-for="(slide, i) in slides2"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide.img})`,
            }"
          >
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="caption" v-html="activeSlide2.caption"></div>
      </div>
      <div class="swiper-box" data-aos="fade-up" v-else>
        <div class="caption large">璞真建設 經典業績</div>
        <swiper
          :options="swiperOptions2"
          ref="swiper2"
          @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart2"
        >
          <swiper-slide
            class="slide"
            v-for="(slide, i) in slides2"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide.img})`,
            }"
          >
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="caption" v-html="activeSlide2.caption"></div>
      </div>
    </template>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section9 {
  background-color: #ededee;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  padding: size(200) 0;
  .info {
    text-align: left;
    width: size(600);
    margin-right: size(50);
    .subtitle {
      text-align: center;
      font-size: size(29);
      color: #231815;
      margin-bottom: size(25);
    }
    h2 {
      text-align: center;
      font-size: size(54);
      font-weight: 500;
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
      background: #009be4;
      width: size(1000);
      height: 1px;
      right: 0;
      margin-left: -#{size(400)} !important;
      margin: size(25);
    }
    p {
      font-size: size(22);
      letter-spacing: size(3);
      font-weight: 400;
      line-height: 1.5;
      color: #231815;
    }
    .swiper-box1 {
      position: relative;
      width: 100%;
      margin-top: size(20);
      padding-bottom: size(20);
      .swiper-container {
        .slide {
          height: 0;
          padding-bottom: 66.6%;
          background-size: cover;
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
  .swiper-box {
    position: relative;
    width: size(600);
    padding-bottom: size(20);
    .swiper-container {
      .slide {
        height: 0;
        padding-bottom: 150%;
        background-size: cover;
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
  .caption {
    text-align: center;
    font-size: size(20);
    letter-spacing: size(2);
    font-weight: 600;
    margin: size(12) 0;
    font-family: "Noto Serif TC", Noto Sans TC, serif;

    &.large {
      font-size: size(29);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section9 {
    background-color: #ededee;
    min-height: unset;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .s-divider {
      width: 80%;
      height: 1px;
      background: #267f9b;
    }
    .info {
      text-align: left;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-top: size-m(30);
      height: auto;
      padding: 0 10%;
      h2 {
        text-align: center;
        font-size: size-m(25.5);
        font-weight: 600;
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
        font-weight: 500;
      }
    }
    .swiper-box1 {
      width: 100vw !important;
      margin-left: -10vw;
      .swiper-container {
        padding: 0;
        margin: size-m(20) 0;
        .slide {
          height: 0;
          padding-bottom: 66.6% !important;
          background-size: cover;
        }
        .swiper-button-prev {
          left: size-m(20) !important;
          width: size-m(40) !important;
          height: size-m(40) !important;
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
          right: size-m(20) !important;
          width: size-m(40) !important;
          height: size-m(40) !important;
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
    .swiper-box2 {
      margin-top: size-m(20);
    }
    .swiper-box {
      width: 80%;
      .swiper-container {
        padding: 0;
        margin: size-m(10) 0;
        .slide {
          height: 0;
          padding-bottom: 150%;
          background-size: cover;
        }
        .swiper-button-prev {
          left: size-m(20);
          width: size-m(40) !important;
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
    .caption {
      text-align: center;
      font-size: size-m(12);
      letter-spacing: size-m(0);
      font-weight: 600;
      margin: size-m(6) 0;

      &.large {
        font-size: size-m(14.5);
        margin-top: size-m(50);
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
  name: "section9",

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
      activeSlide1: {},
      activeSlide2: {},
      slides1: [
        {
          img: require("@/projects/pjr/s9/2014.jpg"),
          caption: "2018 內湖 勤美璞真碧湖畔",
        },
        {
          img: require("@/projects/pjr/s9/2022.jpg"),
          caption: "2022 台中 勤美之森",
        },
        {
          img: require("@/projects/pjr/s9/2011-1.jpg"),
          caption: "2011 大安 勤美璞真",
        },
      ],
      slides2: [
        {
          img: require("@/projects/pjr/s9/2010.jpg"),
          caption: "2013 中山 璞真詠真",
        },
        {
          img: require("@/projects/pjr/s9/2019.jpg"),
          caption: "2021 松山 勤耕延吉",
        },
        {
          img: require("@/projects/pjr/s9/2024.jpg"),
          caption: "2022 信義 璞真永吉",
        },
        {
          img: require("@/projects/pjr/s9/2024-1.jpg"),
          caption: "2024 大安 璞真合和",
        },
      ],
      swiperOptions1: {
        loop: true,
        spaceBetween: isMobile ? 0 : 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-box1 .swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 4500,
        },
      },
      swiperOptions2: {
        loop: true,
        spaceBetween: isMobile ? 0 : 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-box2 .swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 4500,
        },
      },
    };
  },

  methods: {
    onSwiperSlideChangeTransitionStart1() {
      const activeIndex = this.$refs.swiper1.$swiper.realIndex;
      this.activeSlide1 = this.slides1[activeIndex];
    },
    onSwiperSlideChangeTransitionStart2() {
      const activeIndex = this.$refs.swiper2.$swiper.realIndex;
      this.activeSlide2 = this.slides2[activeIndex];
    },
  },

  mounted() {
    this.activeSlide1 = this.slides1[0];
    this.activeSlide2 = this.slides2[0];
  },

  created() {},
};
</script>
