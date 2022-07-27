<template>
  <article class="s3">
    <div class="swiper-box" data-aos="zoom-in">
      <swiper :options="swiperOptions" ref="swiper" class="swiper-wrapper">
        <swiper-slide
          class="slide"
          v-for="(slide, i) in imgs"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${slide})`,
          }"
        >
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div data-aos="zoom-in" class="large-title"><span>FUTURE</span></div>
<div class="txt">
  <h3 class="title" data-aos="zoom-in">科技首都台灣新矽谷<br>北外環捷徑近身相接</h3>
  <p class="desc" data-aos="zoom-in">中央領軍，企業到位！南科3期92公頃擴建啟動，全球半導體龍頭台積電同步加速投資，推升破兆產值，點燃台灣科技經濟能量引擎。北外環快速道路已成形，通勤南科近近接軌，打通科技新貴住居版圖新動脈。</p>
</div>
    </div>
  </article>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s3 {
  position: relative;
  width: 100%;
  height: size(1080);
  padding-top: size(100);

  .swiper-box {
    position: relative;
    width: size(1345.25);
    margin: 0 auto;
    .swiper-wrapper {
      .slide {
        width: size(1345.25);
        height: size(610.35);
        background-size: cover;
      }
    }
    .swiper-pagination {
      position: absolute;
      bottom: 24%;
      left: -#{size(50)};
      display: flex;
      flex-direction: column;
      .swiper-pagination-bullet {
        width: size(20.5);
        height: size(20.5);
        background-color: #fff;
        opacity: 1;
        border: 1.5px solid #182c80;
        margin-bottom: size(20);
        &.swiper-pagination-bullet-active {
          background-color: #182c80;
        }
      }
    }
    .large-title{
      position: absolute;
      right: size(-50);
      top: size(-50);
      z-index: 1;
      color: #182c80;
      font-size: size(104);
      letter-spacing: .17em;
      font-weight: 500;
      text-transform:uppercase;
      span{
       display: block;
       position: relative;
       transform: rotate(90deg)translate(100%,0%);
       transform-origin: 100% 0;
      }
    }
    .content {
      width: 100%;
      margin-top: size(100);
    }
  }
  .txt{
      margin-top: size(100);
    font-size: size(23);
    transform:scaleY(1);
    text-align:justify;
    line-height: 1.7;
    width: size(1350);
      letter-spacing: 0.1em;
      color:#444;
      font-family: "Noto Serif TC",sans-serif;
      font-weight: 600;
    .title{
      font-size: 1.5em;
      color:#182C80;
      float: left;
      font-weight: 500;
      display: block;
      padding: 0 0.5em 0 0;
      margin: 0 3em 0 0;
      border-right: 0.18em solid currentColor;
      font-family: "Noto Serif TC",sans-serif;
      font-weight: 800;
      text-align: right;
     }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s3 {
    height: size-m(667);
    padding-top: 0;

    .swiper-box {
      position: relative;
      width: size-m(302);
      margin: 0 auto;
      .swiper-wrapper {
        .slide {
          width: size-m(302);
          height: size-m(292);
          background-size: cover;
        }
      }
      .swiper-pagination {
        position: relative;
        top: 0;
        left: 0;
        bottom: unset;
        display: flex;
        flex-direction: row;
        .swiper-pagination-bullet {
          width: size-m(9);
          height: size-m(9);
          background-color: #fff;
          opacity: 1;
          border: 1.5px solid #182c80;
          margin-bottom: 0;
          margin-top: size-m(10);
          margin-right: size-m(8);
          &.swiper-pagination-bullet-active {
            background-color: #182c80;
          }
        }
      }
      .large-title {
        right:size-m(-26);
        top: size-m(-20);
      font-size: size-m(50);
        
      }
      .content {
        width: 100%;
        margin-top: size-m(50);
      }
    }
  .txt{
    font-size: size-m(14);
    width:100%;
    left: 10%;
    margin: auto;
    .title{
      font-size: 1.4em;
      padding: 0 0 0 0.5em;
      border-left: 0.18em solid currentColor;
      border-right: 0;
      float:none;
      text-align: left;
      margin: size-m(30) 0 .9em 0;
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
  name: "s3",

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
      swiperOptions: {
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-nav .next",
          prevEl: ".swiper-nav .prev",
        },
        pagination: {
          el: ".s3 .swiper-pagination",
          clickable: true,
        },
      },
      imgs: [
        isMobile
          ? require("@/projects/cm/s3/1_m.jpg")
          : require("@/projects/cm/s3/1.jpg"),
        isMobile
          ? require("@/projects/cm/s3/2_m.jpg")
          : require("@/projects/cm/s3/2.jpg"), 
        isMobile
          ? require("@/projects/cm/s3/3_m.jpg")
          : require("@/projects/cm/s3/3.jpg"),    
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
