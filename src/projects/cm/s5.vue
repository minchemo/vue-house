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
        class="title"
        src="~@/projects/cm/s5/title.svg"
        alt="藏美表參道"
        srcset=""
        data-aos="zoom-in"
      />
      <img
        class="content"
        src="~@/projects/cm/s5/content.svg"
        alt="藏美表參道"
        srcset=""
        v-if="!isMobile"
        data-aos="zoom-in"
      />
      <img
        v-else
        class="content"
        src="~@/projects/cm/s5/content_m.svg"
        alt="藏美表參道"
        srcset=""
        data-aos="zoom-in"
      />
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
  background-image: url("~@/projects/cm/bg.png");
  background-size: 100%;
  background-position: top;
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
      bottom: 0;
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
    .title {
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
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s5 {
    position: relative;
    width: size-m(375);
    height: size-m(667);
    background-image: url("~@/projects/cm/bg_m.png");
    background-size: 100%;
    background-position: top;
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
        position: absolute;
        bottom: -#{size-m(20)};
        right: 0;
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
          ? require("@/projects/cm/s5/1_m.jpg")
          : require("@/projects/cm/s5/1.jpg"),
        isMobile
          ? require("@/projects/cm/s5/2_m.jpg")
          : require("@/projects/cm/s5/2.jpg"),
        isMobile
          ? require("@/projects/cm/s5/3_m.jpg")
          : require("@/projects/cm/s5/3.jpg"),
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
