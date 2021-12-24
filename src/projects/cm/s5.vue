<template>
  <div class="s5">
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
        src="~@/projects/cm/s5/title.svg"
        alt="藏美表參道"
        srcset=""
        data-aos="zoom-in"
      />
<div class="txt">
  <div class="title" data-aos="zoom-in">新日本美學建築<br>國際視野職人匠心</div>
  <div class="desc" data-aos="zoom-in">藏美建設獨鍾日式美學的怦然細膩，屢次親赴日本考察指標建築，轉譯嚴謹的匠心思維，定義「新日本建築美學」基準，以深思熟慮的規劃為經、五感入心的細節為緯，交織富饒生活層次。</div>
</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s5 {
  position: relative;
  width: size(1920);
  height: size(1080);
  padding-top: size(100);

  .swiper-box {
    position: relative;
    width: size(1630);
    margin-right: auto;
    .swiper-wrapper {
      .slide {
        width: size(518);
        height: size(610);
        background-size: cover;
      }
    }
    .swiper-pagination {
      position: absolute;
      top: unset;
      bottom: 27%;
      right: -#{size(50)};
      display: flex;
      flex-direction: column;
      .swiper-pagination-bullet {
        width: size(20.5);
        height: size(20.5);
        background-color: #fff;
        opacity: 1;
        border: 1.5px solid #182c80;
        margin-top: size(20);
        &.swiper-pagination-bullet-active {
          background-color: #182c80;
        }
      }
    }
    .large-title {
      width: size(582);
      position: absolute;
      right: -#{size(185)};
      top: -#{size(70)};
      z-index: 1;
    }
    .content {
      width: size(1389);
      margin-top: size(100);
      position: absolute;
      right: 0;
    }
  }
  .txt{
    margin-top: size(100);
    font-size: size(23);
    transform:scaleY(1);
    text-align:justify;
    line-height: 1.7;
    width: size(1400);
      letter-spacing: 0.1em;
      color:#444;
      font-family: "Noto Serif TC",sans-serif;
      font-weight: 600;
      margin-left: 13%;
    .title{
      font-size: 1.5em;
      color:#182C80;
      float: right;
      font-weight: 500;
      display: block;
      padding: 0 0 0 0.5em;
      margin: 0 0 0 3em;
      border-left: 0.18em solid currentColor;
      font-family: "Noto Serif TC",sans-serif;
      font-weight: 800;
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
    height: size-m(600);
    padding-top: 0;

    .swiper-box {
      position: relative;
      width: size-m(336.69);
      margin-right: auto;
      margin-left: 0;
      .swiper-wrapper {
        .slide {
          width: size-m(162.61);
          height: size-m(278.57);
          background-size: cover;
          background-position: bottom;
        }
      }
      .swiper-pagination {
        position: relative;
        top: 0;
        right: 0;
        left: unset;
        justify-content: flex-end;
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
        width: auto;
        height: size-m(35);
        position: absolute;
        right: -#{size-m(18)};
        top: -#{size-m(25)};
        z-index: 1;
      }
      .content {
        width: 90%;
        margin-top: size-m(80);
      }
    }
  .txt{
    font-size: size-m(14);
    width: 90%;
    margin: auto 0 auto auto;
    .title{
      font-size: 1.4em;
      float:none;
      text-align: left;
      padding: 0 0.5em 0 0.5em;
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
  name: "s5",

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
        spaceBetween: isMobile ? 5 : 30,
        slidesPerView: isMobile ? 2 : 3,
        slidesPerGroup: isMobile ? 2 : 3,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-nav .next",
          prevEl: ".swiper-nav .prev",
        },
        pagination: {
          el: ".s5 .swiper-pagination",
          clickable: true,
        },
      },
      imgs: [
        isMobile
          ? require("@/projects/cm/s5/3_m.jpg")
          : require("@/projects/cm/s5/3.jpg"),
        isMobile
          ? require("@/projects/cm/s5/1_m.jpg")
          : require("@/projects/cm/s5/1.jpg"),
        isMobile
          ? require("@/projects/cm/s5/2_m.jpg")
          : require("@/projects/cm/s5/2.jpg"),
        
        isMobile
          ? require("@/projects/cm/s5/4_m.jpg")
          : require("@/projects/cm/s5/4.jpg"),
        isMobile
          ? require("@/projects/cm/s5/5_m.jpg")
          : require("@/projects/cm/s5/5.jpg"),
        isMobile
          ? require("@/projects/cm/s5/6_m.jpg")
          : require("@/projects/cm/s5/6.jpg"),
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
