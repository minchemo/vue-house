<template>
  <div class="section3">
    <div class="sub-section">
      <div class="flex">
        <swiper :options="swiperOptions" :instanceName="1">
          <swiper-slide
            v-for="item of swiperList"
            :key="item.id"
            :style="{ backgroundImage: `url(${item.imgUrl})` }"
            data-aos="fade-up"
          >
            <p>{{ item.title }}</p>
          </swiper-slide>
          <div
            v-if="isMobile"
            class="swiper-button-prev"
            slot="button-prev"
          ></div>
          <div
            v-if="isMobile"
            class="swiper-button-next"
            slot="button-next"
          ></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <div
          class="txt"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="0"
        >
          <h2 v-if="!isMobile">
            曬暖陽擁綠意<br />
            給孩子最棒的成長環境
          </h2>
          <p>
            左岸公園、文昌公園、考古公園，多座綠意公園隨伺，假日就牽著孩子與毛孩，來場公園即興野餐吧。
          </p>
        </div>
      </div>

      <img class="draw" src="~@/projects/rose/s3/draw.png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section3 {
  width: 100%;
  height: auto;

  .sub-section {
    height: 100vh;
    position: relative;

    .flex {
      height: 100%;
      align-items: center;

      .txt {
        width: 35%;
        padding: 0 6vw 0 6vw;
        h2 {
          font-size: 34px;
          letter-spacing: 2px;
          line-height: 1.2;
          color: #b61937;
          font-weight: bold;
          white-space: nowrap;
          margin-bottom: 20px;
        }
        p {
          font-size: 18px;
          line-height: 1.5;
          font-weight: bold;
        }
      }
    }

    .draw {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 40vw;
      z-index: -1;
    }
  }

  .swiper-container {
    width: 65%;
    padding: 0;

    .swiper-slide {
      height: 75vh;
      border-radius: 0;

      p {
        color: #fff;
        letter-spacing: 3px;
        line-height: 1.5;
        position: absolute;
        transition: all 0.3s;
        opacity: 1;
        font-size: 24px;
        right: 15px;
        bottom: 10px;
        text-align: justify;
        text-align-last: center;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0.8));
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
    width: 100%;
    height: auto;

    .sub-section {
      height: auto;
      position: relative;

      .flex {
        height: 100%;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column-reverse;

        .txt {
          width: 100%;
          padding: 0 6vw;
          margin: 6vw 0;

          h2 {
            font-size: 24px;
            letter-spacing: 2px;
            line-height: 1.2;
            color: #b61937;
            font-weight: bold;
            white-space: nowrap;
            margin-bottom: 20px;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
            font-weight: bold;
          }
        }
      }

      .draw {
        display: none;
      }
    }

    .swiper-container {
      width: 100%;
      padding: 0;

      .swiper-slide {
        height: 40vh;
        border-radius: 0;

        p {
          color: #fff;
          letter-spacing: 3px;
          line-height: 1.5;
          position: absolute;
          transition: all 0.3s;
          opacity: 1;
          font-size: 16px;
          right: 15px;
          bottom: 10px;
          text-align: justify;
          text-align-last: center;
          filter: drop-shadow(0 0 5px rgba(0, 0, 0.8));
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

export default {
  name: "section3",

  data() {
    return {
      isMobile,
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: true,
        speed: 1000,
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperOptions2: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: true,
        speed: 1000,
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("./s3/1.jpg"),
          title: "左岸公園"
        },
        {
          id: "0002",
          imgUrl: require("./s3/2.jpg"),
          title: "米飛公園"
        },
        {
          id: "0003",
          imgUrl: require("./s3/3.jpg"),
          title: "考古公園"
        }
      ]
    };
  },

  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    }
  },

  created() {}
};
</script>
