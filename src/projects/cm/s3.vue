<template>
  <div class="s3">
    <div class="swiper-box">
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
      <img class="title" src="~@/projects/cm/s3/title.svg" alt="" srcset="" />
      <img
        class="content"
        src="~@/projects/cm/s3/content.svg"
        alt=""
        srcset=""
        v-if="!isMobile"
      />
      <img
        v-else
        class="content"
        src="~@/projects/cm/s3/content_m.svg"
        alt=""
        srcset=""
      />
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
  background-image: url("~@/projects/cm/bg.png");
  background-size: 100%;
  background-position: top;
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
    .title {
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
    background-image: url("~@/projects/cm/bg_m.png");
    background-size: 100%;
    background-position: top;
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
      .title {
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

  created() { },
};
</script>
