<template>
  <div class="section8">
    <div class="main">
      <div class="box1" data-aos="fade">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :key="i"
              v-for="(banner, i) in banners"
              v-bind:style="`background-image:url(${banner.imgSrc})`"
            ></div>
          </div>
          <div class="swiper-pagination"></div>
          <div v-if="isMobile" class="swiper-button-next" slot="button-next"></div>
          <div v-if="isMobile" class="swiper-button-prev" slot="button-prev"></div>
        </div>
      </div>
    </div>
    <p class="tip">
      此為廣告效果示意，為單一建物電腦3D透視表現，周遭環境係電腦合成，建設公司保有建物外觀修正之權利。
    </p>
  </div>
</template>

<style lang="scss" scoped>
.swiper-slide {
  /*
  &:nth-child(1) {
    background-size: 150% !important;
    background-position: top !important;
  }
  */
}
.swiper-pagination {
  width: unset;
  top: 5vw !important;
  right: 5vw !important;
  left: unset !important;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .swiper-pagination-bullet {
    margin: 0.3vw !important;
    width: 10px;
    height: 10px;
    border: 1px solid #356292;
    opacity: 1;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: #356292;
      border: 2px solid;
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        background: transparent;
        position: absolute;
        border-radius: 100%;
        border: 1px solid #fff;
        margin-left: -4px;
        margin-top: -1px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .swiper-pagination {
    right: unset !important;
    left: 5vw !important;
    align-items: unset;

    margin: 5vw 0 0 0;
    .swiper-pagination-bullet {
      margin: 0.5vh !important;
      width: 10px;
      height: 10px;
      border: 1px solid #356292;
      &.swiper-pagination-bullet-active {
        background: #356292;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section8 {
  height:calc(100vh - 70px);
  min-height: calc(100vw * 950 / 1920 - 70px);
  max-height: calc(100vw * 1080 / 1920 - 70px);

  .main {
    height: 100%;
    display: flex;
    border-top: 1px solid #356292;
    border-bottom: 1px solid #356292;
    .box1 {
      width: 100%;
      height:100%;
      background-color: #fff;
      border-right: 1px solid #356292;
      .swiper-slide {
        .slide-text {
          font-family: "Noto Sans TC";
          position: absolute;
          bottom: 2.5vw;
          left: 4vw;
          font-size: 0.8vw;
          font-weight: 300;
          color: #fff;
          filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.7));
        }
      }
    }
  }
  .swiper-container {
    height: 100%;
  }
  .swiper-wrapper {
    height: 100%;
    .swiper-slide {
      height: 100%;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }

    .tip {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 3;
      font-size: 15px;
      padding:0.5em 1.6em ;
      text-align: left;
      font-family: "Noto Sans TC";
      line-height: 1.5;
      font-weight:500;
      color: #FFF;
      text-shadow: 0 0 0.5em #000;
    }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section8 {
    height: auto;
    min-height: 0;
    max-height: initial;
    .main {
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      border: 0;
      .box1 {
        width: 100%;
        background-color: #fff;
        height: 140vw;
        border: 0;
        .swiper-slide {
          .slide-text {
            position: absolute;
            bottom: 5vw;
            left: 5vw;
            font-size: calc(100vw * 12 / 375);
          }
        }
      }
    }

    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
        //height: 60vh;
        background-size: cover;
        background-position: center center;
      }
    }

    .tip {
      position: relative;
      bottom: 0;
      right: 0;
      font-size: 12px;
      padding:1.6em;
      text-align: left;
      font-family: "Noto Sans TC";
      line-height: 1.5;
      color: #283555;
      text-shadow: 0 0 0 #0000;
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
  name: "section8",

  data() {
    return {
      isMobile,
      banners: [
        {
          imgSrc: require("@/projects/dm-h35/s8/E-1.jpg"),
          text: "實際建材設備依銷售合約書為準，此為樣品屋裝修表現參考示意。",
        },
        {
          imgSrc: require("@/projects/dm-h35/s8/E-2.jpg"),
          text: "實際建材設備依銷售合約書為準，此為樣品屋裝修表現參考示意。",
        },
        {
          imgSrc:isMobile? require("@/projects/dm-h35/s8/E-3m.jpg"): require("@/projects/dm-h35/s8/E-3.jpg"),
          text: "實際建材設備依銷售合約書為準，此為樣品屋裝修表現參考示意。",
        },
        {
          imgSrc: require("@/projects/dm-h35/s8/E-4.jpg"),
          text: "實際建材設備依銷售合約書為準，此為樣品屋裝修表現參考示意。",
        },
        {
          imgSrc: isMobile? require("@/projects/dm-h35/s8/E-5m.jpg"): require("@/projects/dm-h35/s8/E-5.jpg"),
          text: "實際建材設備依銷售合約書為準，此為樣品屋裝修表現參考示意。",
        },
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        direction: "horizontal",
      },
    };
  },

  methods: {},

  created() {},
};
</script>