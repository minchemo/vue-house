<template>
  <div class="section7" >
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
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="info">
        <div class="info-title" v-html="activeSlide.infoHeader"></div>
        <div class="info-content" v-html="activeSlide.infoContent"></div>
        <div class="info-logo">
          <img :src="activeSlide.infoLogo" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section7 {
  background-color: #d5e1e3;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
      font-family: "Noto Serif TC",Noto Sans TC,serif;
      font-weight: 600;
    }
    h2 {
      text-align: center;
      font-size: size(54);
      font-weight: 500;
      line-height: 1.2;
      color: #267f98;
      white-space: nowrap;
      margin-bottom: size(25);
      font-family: "Noto Serif TC",Noto Sans TC,serif;
    }
    .small-title {
      text-align: center;
      font-size: size(39);
      color: #267f98;
      font-weight: 600;
      font-family: "Noto Serif TC",Noto Sans TC,serif;

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
  }
  .swiper-box {
    position: relative;
    width: size(932);
    padding: size(100) 0;
    .swiper-container {
      .slide {
        height: 0;
        padding-bottom: 52.1%;
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

    .info {
      position: absolute;
      color: #231815;
      font-weight: 400;
      width: size(932);
      .info-title {
        font-size: size(24);
        margin: size(24) 0;
      }
      .info-content {
        font-size: size(20);
        line-height: 1.5;
      }
      .info-logo {
        position: absolute;
        right: size(24);
        top: size(24);
        height: size(80);
        img {
          min-height: 40%;
          max-height: 100%;
        }
      }
    }
    &::before {
      content: "翻轉傳統 開啟綠色生產新頁";
      top: 0;
      left: 0;
      font-size: size(54);
      font-weight: 500;
      color: #267f98;
      position: absolute;
      font-family: "Noto Serif TC",Noto Sans TC,serif;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section7 {
    background-color: #d5e1e3;
    min-height: unset;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: size-m(40);
    .info {
      text-align: left;
      width: 80%;
      margin-left: unset;
      margin-top: size-m(30);
      height: auto;
      .subtitle {
        font-size: size-m(14.5);
        font-weight: 600;
      }
      .small-title {
        font-size: size-m(20);
        font-weight: 600;

      }
      h2 {
        text-align: center;
        font-size: size-m(25.5);
        font-weight: 300;
        line-height: 1.5;
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
        font-weight: 500;
      }
    }
    .swiper-box {
      width: 80%;
      margin-top: size-m(50);

      padding: 0;
      &::before {
        font-size: size-m(24);
        font-weight: 600;
        
      }
      .swiper-container {
        padding: 0;
        margin-top: size-m(50);
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
      .info {
        position: relative;
        color: #231815;
        width: 100%;
        margin-top: 0;
        .info-title {
          font-size: size-m(14);
          margin: size-m(15) 0 size-m(5) 0;
          font-weight: 500;
        }
        .info-content {
          font-size: size-m(12);
          line-height: 1.5;
          max-width: 60%;
          font-weight: 400;
        }
        .info-logo {
          right: 0;
          top: 40;
          height: auto;
          width: 38%;
          img {
            max-height: size-m(50);
            max-width: 100%;
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
  name: "section7",

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
          subtitle: "職人精神 專心做好一件事",
          title: "CMP GROUP 勤美集團",
          smallTitle: "亞洲指標專業鑄造集團",
          content: `勤美（1532）集團成立於1972年，以「勤儉誠信，永續經營」為念，為台灣大型上市集團，於大中華地區享有盛譽。近年轉型跨國控股企業，旗下擁有建設公司、大型商場、文化美學、基金會等大型事業部，追求人文美善之多角化經營。`,
          img: require("@/projects/pjr/s7/1.jpg"),
          caption: "情境示意圖",
          infoHeader: "金屬成型事業",
          infoContent: "勤美新竹、勤美楊梅、化新精密、<br>天津勤威、蘇州勤堡、武漢勤美達",
          infoLogo: require("@/projects/pjr/s7/1logo.png"),
        },
        {
          subtitle: "職人精神 專心做好一件事",
          title: "CMP GROUP 勤美集團",
          smallTitle: "亞洲指標專業鑄造集團",
          content: `勤美（1532）集團成立於1972年，以「勤儉誠信，永續經營」為念，為台灣大型上市集團，於大中華地區享有盛譽。近年轉型跨國控股企業，旗下擁有建設公司、大型商場、文化美學、基金會等大型事業部，追求人文美善之多角化經營。`,
          img: require("@/projects/pjr/s7/2.png"),
          caption: "勤美璞真碧湖畔",
          infoHeader: "建設住宅",
          infoContent: "璞真建設股份有限公司",
          infoLogo: require("@/projects/pjr/s7/2logo.png"),
        },
        {
          subtitle: "職人精神 專心做好一件事",
          title: "CMP GROUP 勤美集團",
          smallTitle: "亞洲指標專業鑄造集團",
          content: `勤美（1532）集團成立於1972年，以「勤儉誠信，永續經營」為念，為台灣大型上市集團，於大中華地區享有盛譽。近年轉型跨國控股企業，旗下擁有建設公司、大型商場、文化美學、基金會等大型事業部，追求人文美善之多角化經營。`,
          img: require("@/projects/pjr/s7/3.png"),
          caption: "誠品書店",
          infoHeader: "人文商場",
          infoContent: "勤美誠品綠園道、金典綠園道",
          infoLogo: require("@/projects/pjr/s7/3logo.png"),
        },
        {
          subtitle: "職人精神 專心做好一件事",
          title: "CMP GROUP 勤美集團",
          smallTitle: "亞洲指標專業鑄造集團",
          content: `勤美（1532）集團成立於1972年，以「勤儉誠信，永續經營」為念，為台灣大型上市集團，於大中華地區享有盛譽。近年轉型跨國控股企業，旗下擁有建設公司、大型商場、文化美學、基金會等大型事業部，追求人文美善之多角化經營。`,
          img: require("@/projects/pjr/s7/4.png"),
          caption: "全國大飯店",
          infoHeader: "飯店休閒",
          infoContent: "全國大飯店、日華金典國際酒店、勤美學山那村",
          infoLogo: require("@/projects/pjr/s7/4logo.png"),
        },
        {
          subtitle: "職人精神 專心做好一件事",
          title: "CMP GROUP 勤美集團",
          smallTitle: "亞洲指標專業鑄造集團",
          content: `勤美（1532）集團成立於1972年，以「勤儉誠信，永續經營」為念，為台灣大型上市集團，於大中華地區享有盛譽。近年轉型跨國控股企業，旗下擁有建設公司、大型商場、文化美學、基金會等大型事業部，追求人文美善之多角化經營。`,
          img: require("@/projects/pjr/s7/5.png"),
          caption: "勤美學",
          infoHeader: "藝術深耕",
          infoContent: "勤美璞真文化藝術基金會、勤美術館、勤美學森大",
          infoLogo: require("@/projects/pjr/s7/5logo.png"),
        },
      ],
      swiperOptions: {
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".section7 .swiper-pagination",
          clickable: true
        },
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
