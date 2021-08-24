<template>
  <div class="subsection">
    <div 
     data-aos="fade" data-aos-duration="1000" data-aos-delay="0" v-if="isMobile" class="title">
      <div class="title-btn">
        <div
          v-bind:class="activeList == data ? 'active' : ''"
          class="title-btn-item"
          v-for="(data, i) in slideList"
          :key="i"
          @click="setData(data)"
        >
          <img :src="data.btnTitle" alt="" srcset="" />
        </div>
      </div>
      <img class="title-img" :src="activeList.title" alt="" srcset="" />
    </div>
    <div class="swiper-box" data-aos-duration="1000" data-aos="fade-down">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(img, i) in activeList.imgList"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${img})`,
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
    <div 
     data-aos="fade" data-aos-duration="1000" data-aos-delay="0" v-if="!isMobile" class="title">
      <div class="title-btn">
        <div
          v-bind:class="activeList == data ? 'active' : ''"
          class="title-btn-item"
          v-for="(data, i) in slideList"
          :key="i"
          @click="setData(data)"
        >
          <img :src="data.btnTitle" alt="" srcset="" />
        </div>
      </div>
      <img class="title-img" :src="activeList.title" alt="" srcset="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.subsection {
  height: auto;
  padding: 5vh 0;

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
    display: flex;
    width: 80vw;
    margin: 0 auto;
    margin-top: 3vh;

    .title-btn {
      width: 30%;
      display: flex;
      align-items: flex-start;
      .title-btn-item {
        width: 5.5vw;
        height: 4.5vw;
        background-size: cover;
        background-image: url("~@/projects/llcs/s6/sb3/btn_bg.jpg");
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        img {
          position: relative;
          z-index: 2;
          width: 80%;
        }
        &:nth-child(1) {
          margin-right: 0.5vw;
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgb(0, 0, 0);
          background: linear-gradient(
            -90deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          transition: all 0.5s;
          transform: translateX(-100%);
        }
        &:hover {
          cursor: pointer;
          &::after {
            transform: translateX(0);
          }
        }
        &.active {
          &::after {
            transform: translateX(0);
          }
        }
      }
    }
    .title-img {
      width: 75%;
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
    padding: 5vh 0;
    padding-bottom: 0;

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
      display: flex;
      width: 95vw;
      margin: 0 auto;
      margin-top: 3vh;

      .title-btn {
        position: absolute;
        right: 2.5vw;
        width: auto;
        display: flex;
        align-items: flex-start;
        .title-btn-item {
          width: 30vw;
          height: 24.5vw;
          background-size: cover;
          background-image: url("~@/projects/llcs/s6/sb3/btn_bg.jpg");
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          img {
            position: relative;
            z-index: 2;
            width: 80%;
          }
          &:nth-child(1) {
            margin-right: 3vw;
          }

          &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgb(0, 0, 0);
            background: linear-gradient(
              -90deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 1) 100%
            );
            transition: all 0.5s;
            transform: translateX(-100%);
          }
          &:hover {
            cursor: pointer;
            &::after {
              transform: translateX(0);
            }
          }
          &.active {
            &::after {
              transform: translateX(0);
            }
          }
        }
      }
      .title-img {
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
      activeList: {},
      slideList: [
        {
          title: isMobile
            ? require("@/projects/llcs/s6/sb3/slides1/title_mo.svg")
            : require("@/projects/llcs/s6/sb3/slides1/title.svg"),
          btnTitle: require("@/projects/llcs/s6/sb3/slides1/btn_title.png"),
          imgList: [require("@/projects/llcs/s6/sb3/slides1/1.jpg")],
        },
        {
          title: isMobile
            ? require("@/projects/llcs/s6/sb3/slides2/title_mo.svg")
            : require("@/projects/llcs/s6/sb3/slides2/title.svg"),
          btnTitle: require("@/projects/llcs/s6/sb3/slides2/btn_title.png"),
          imgList: [require("@/projects/llcs/s6/sb3/slides2/1.jpg")],
        },
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

  methods: {
    setData(data) {
      this.activeList = data;
    },
  },

  created() {
    this.activeList = this.slideList[0];
  },

  mounted() {
    this.activeList = this.slideList[0];
  },
};
</script>
