<template>
  <div class="subsection">
    <div 
     data-aos="fade" data-aos-duration="1000" data-aos-delay="0" v-if="isMobile" class="title">
      <img src="~@/projects/llcs/s6/sb2/title_mo.svg" alt="" srcset="" />
    </div>
    <div class="swiper-box" data-aos-duration="1000" data-aos="fade-down">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(imgList, i) in imgList"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${imgList})`,
          }"
        >
        </swiper-slide>
        <div class="swiper-button-next" slot="button-next">
          <img src="~@/projects/llcs/s4/next_btn.svg" alt="" srcset="" />
        </div>
        <div class="swiper-button-prev" slot="button-prev">
          <img src="~@/projects/llcs/s4/prev_btn.svg" alt="" srcset="" />
        </div>
      </swiper>
    </div>
    <div v-if="!isMobile" 
     data-aos="fade" data-aos-duration="1000" data-aos-delay="0" class="title">
      <img src="~@/projects/llcs/s6/sb2/title.svg" alt="" srcset="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.subsection {
  height: auto;

  .swiper-box {
    position: relative;
    width: 80vw;
    margin: 0 auto;
    .swiper-slide {
      height: 0;
      padding-bottom: 44.54%;
      background-size: cover;
      background-position: center;
    }
  }

  .title {
    width: 80vw;
    margin: 0 auto;
    margin-top: 5vh;
    img {
      width: 100%;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
.subsection {
  height: auto;

  .swiper-box {
    position: relative;
    width: 100vw;
    margin: 0 auto;
    .swiper-slide {
      height: 0;
      padding-bottom: 61.41%;
      background-size: cover;
      background-position: center;
    }
  }

  .title {
    width: 90vw;
    margin: 0 auto;
    margin-top: 5vh;
    margin-bottom: -5vh;
    img {
      width: 100%;
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
  name: "subsection",

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
      imgList: [
        require("@/projects/llcs/s6/sb2/1.jpg"),
        require("@/projects/llcs/s6/sb2/2.jpg"),
        require("@/projects/llcs/s6/sb2/3.jpg"),
        require("@/projects/llcs/s6/sb2/4.jpg"),
        require("@/projects/llcs/s6/sb2/5.jpg"),
        require("@/projects/llcs/s6/sb2/6.jpg"),
        require("@/projects/llcs/s6/sb2/7.jpg"),
        require("@/projects/llcs/s6/sb2/8.jpg"),
      ],
      swiperOptions: {
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      },
    };
  },

  methods: {},

  created() {},
};
</script>
