<template>
  <div class="section3">
    <div v-if="!isMobile" class="slides">
      <div
        class="slide"
        v-for="(slide, i) in slides"
        :key="i"
        :style="{ backgroundImage: 'url(' + slide.img + ')' }"
        data-aos="fade"
        data-aos-duration="1000"
        :data-aos-delay="i * 200"
      >
        <div
          class="title"
          data-aos="fade-up"
          :data-aos-delay="i * 200 + 600"
          data-aos-duration="1000"
        >
          {{ slide.title }}
        </div>
        <div
          class="caption"
          data-aos="fade"
          :data-aos-delay="i * 100 + 300"
          data-aos-duration="1000"
        >
          {{ slide.caption }}
        </div>
      </div>
    </div>
    <div v-else class="slides">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(slide, i) in slides"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${slide.img})`,
          }"
        >
          <div
            class="title"
            data-aos="fade-up"
            :data-aos-delay="i * 200 + 600"
            data-aos-duration="1000"
          >
            {{ slide.title }}
          </div>
          <div
            class="caption"
            data-aos="fade"
            :data-aos-delay="i * 100 + 300"
            data-aos-duration="1000"
          >
            {{ slide.caption }}
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section3 {
  height: auto;
  width: 100vw;
  background-size: contain;
  background-image: url("~@/assets/img/bg.jpg");

  .slides {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    padding: 0 5vw;
    .slide {
      width: 30%;
      background-size: cover;
      background-repeat: no-repeat;
      height: 0;
      padding-bottom: 30%;
      box-sizing: border-box;
      position: relative;
      overflow: visible;

      &:nth-child(-n + 2) {
        width: 48%;
        padding-bottom: 32.03%;
        margin-bottom: 4vw;
      }

      .title {
        position: absolute;
        width: 15vw;
        font-size: 1.8vw;
        padding: 0.6vw 0;
        background-color: #000;
        color: #fff;
        left: -1vw;
        top: 1vw;
      }

      .caption {
        position: absolute;
        font-size: 1.5vw;
        font-weight: bold;
        color: #fff;
        right: 1vw;
        bottom: 1vw;
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section3 {
    height: auto;
    width: 100vw;
    background-size: cover;
    background-image: url("~@/assets/img/bg.jpg");

    .slides {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      height: 100%;
      padding: 0;
      margin: 0 5vw;
      margin-right: auto;
      .swiper-container {
        overflow-x: visible;
        .swiper-wrapper {
          overflow-x: visible;
          .swiper-slide {
            height: 0;
            padding-bottom: 90vw;
            width: 90vw !important;
            overflow: visible;
            background-size: cover;
            background-position: center;
            margin-left: 20px;
            .title {
              position: absolute;
              width: 50vw;
              font-size: 24px;
              padding: 8px 0;
              background-color: #000;
              color: #fff;
              left: -24px;
              top: 12px;
            }

            .caption {
              position: absolute;
              font-size: 24px;
              font-weight: bold;
              color: #fff;
              right: 24px;
              bottom: 16px;
              filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
            }
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
import info from "@/info";
import { isMobile } from "@/utils";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "section3",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      info,
      isMobile,
      slides: [
        {
          title: "建築創新",
          img: require("@/projects/dnls/s3/1.jpg"),
          caption: "1987 太平洋鳳翔",
        },
        {
          title: "城市創新",
          img: require("@/projects/dnls/s3/2.jpg"),
          caption: "1990 台北君悅酒店",
        },
        {
          title: "生活創新",
          img: require("@/projects/dnls/s3/3.jpg"),
          caption: "1994 太平洋翡翠灣摘星樓",
        },
        {
          title: "綠色創新",
          img: require("@/projects/dnls/s3/4.jpg"),
          caption: "2013 太平洋盛宴",
        },
        {
          title: "智慧創新",
          img: require("@/projects/dnls/s3/5.jpg"),
          caption: "2021 太平洋敦南麗舍",
        },
      ],
      swiperOptions: {
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
        },
      },
    };
  },

  methods: {},

  created() {},
};
</script>
