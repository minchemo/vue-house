<template>
  <div class="s3">
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
      <img
        class="large-title"
        src="~@/projects/cm/s3/title.svg"
        alt="藏美表參道"
        srcset=""
        data-aos="zoom-in"
      />
<div class="txt">
  <div class="title" data-aos="zoom-in">科技之都未來市<br>台灣矽谷進行式</div>
  <div class="desc" data-aos="zoom-in">中央領軍，企業跟進！南科 3 期 92 公頃擴建啟動，全球半導體龍頭台積電同步加速投資，推升南科破兆產值，點燃台灣科技經濟能量引擎！正西門路大道，順接北外環快速道路，通勤南科無縫接軌，科技新貴置產首選。</div>
</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s3 {
  position: relative;
  width: size(1920);
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
      top: 0;
      left: -#{size(50)};
      bottom: unset;
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
    .large-title {
      width: size(77);
      position: absolute;
      right: -#{size(30)};
      top: -#{size(40)};
      z-index: 1;
    }
    .content {
      width: 100%;
      margin-top: size(100);
    }
  }
  .txt{
      margin-top: size(100);
    font-size: size(23);
    transform:scaleY(1.1);
    text-align:justify;
    line-height: 1.7;
    width: size(1350);
      letter-spacing: 0.1em;
      color:#444;
    .title{
      font-size: 1.6em;
      color:#182C80;
      float: right;
      font-weight: 500;
      letter-spacing: 0.31em;
      display: block;
      padding: 0 0 0 0.5em;
      margin: 0 0 0 3em;
      border-left: 0.18em solid currentColor;
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
        width: size-m(36);
        position: absolute;
        right: -#{size-m(18)};
        top: -#{size-m(15)};
        z-index: 1;
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
      float:none;
      text-align: left;
      margin: size-m(50) 0 .9em 0;
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
        require("@/projects/cm/s3/1.jpg"),
        require("@/projects/cm/s3/1.jpg"),
        require("@/projects/cm/s3/1.jpg"),
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
