<template>
  <div class="section5 f-p-section">
    <div class="swiper-box" data-aos-duration="1000" data-aos="fade-down">
      <swiper
        ref="swiper1"
        :options="swiperOptions1"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
        @click-slide="handleClickSlide"
      >
        <swiper-slide
          v-for="(imgList, i) in imgList1"
          v-bind:key="i"
          v-bind:style="{ backgroundImage: `url(${imgList.img})` }"
        >
          <div class="mask"></div>
          <div class="caption">
            <div class="main-title">
              彰顯尊崇<br />
              氣派顯赫的豪華公設！
            </div>
            <div class="title" v-html="imgList.title"></div>
            <div class="content" v-html="imgList.content"></div>
          </div>
          <div class="tip-title">3D模擬示意圖</div>
        </swiper-slide>
      </swiper>
      <img
        v-if="isMobile"
        class="touch"
        src="./s5/touch.png"
        alt=""
        srcset=""
        v-show="!showingFullBox"
      />
    </div>
    <div v-if="isMobile" class="full-box" v-show="showingFullBox">
      <img
        class="swiper-here"
        src="./s5/swipe-here.png"
        alt=""
        srcset=""
      />
      <img :src="fullBoxImg" alt="" srcset="" />
      <div class="close" @click="showingFullBox = false">×</div>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section5 {
  height: auto;
  .swiper-box {
    position: relative;
    .swiper-slide {
      height: 0;
      padding-bottom: 47.08%;
      background-size: cover;

      .mask {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.3) 95%,
          rgba(255, 255, 255, 0.6) 100%
        );
      }
      .caption {
        position: absolute;
        left: 8vw;
        top: 5vw;
        z-index: 1;
        text-align: left;

        .main-title {
          color: #bd802f;
          font-size: 2vw;
          font-weight: bold;
          line-height: 2.4vw;
          margin-bottom: 1vw;
          text-shadow:0px 0px 10px #fff,0px 0px 3px #fff;
        }
        .title {
          display: inline;
          margin-right: 0.7vw;
          font-size: 1.2vw;
          color: #666666;
          text-shadow:0px 0px 10px #fff,0px 0px 3px #fff;
        }
        .content {
          display: inline;
          font-size: 1.2vw;
          color: #666666;
          text-shadow:0px 0px 10px #fff,0px 0px 3px #fff;
        }
      }
      .tip-title {
        position: absolute;
        color: #fff;
        right: 1.5em;
        bottom:1.5em;
        z-index: 1;
        font-size:size(15);
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section5 {
    height: auto;
    .swiper-box {
      position: relative;
      .swiper-slide {
        height: 0;
        padding-bottom: 70vh;
        background-size: cover;
        background-position: center;

        .mask {
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          background: rgb(255, 255, 255);
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 95%,
            rgba(255, 255, 255, 1) 100%
          );
        }
        .caption {
          position: absolute;
          left: 5vw;
          top: 5vw;
          z-index: 1;
          text-align: center;
          width: 90vw;

          .main-title {
            color: #bd802f;
            font-size: 7vw;
            font-weight: bold;
            line-height: 9.4vw;
            margin-bottom: 3vw;
          }
          .title {
            display: inline;
            margin-right: 5vw;
            font-size: 5.2vw;
            color: #666666;
          }
          .content {
            display: inline;
            font-size: 5.2vw;
            color: #666666;
          }
        }
        .tip-title {
          position: absolute;
          color: #fff;
          right: 5vw;
          bottom: 5vw;
          z-index: 1;
          font-size: 4.5vw;
        }
      }

      .touch {
        position: absolute;
        z-index: 2;
        pointer-events: none;
        width: 24vw;
        top: 50%;
        left: 38vw;
      }
    }

    .full-box {
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 100000;
      top: 0;
      left: 0;
      background-color: #fff;
      overflow-x: scroll;
      overflow-y: hidden;

      .close {
        position: fixed;
        right: 30px;
        top: 30px;
        z-index: 1;
        width: 40px;
        height: 40px;
        background: #717071;
        color: #fff;
        line-height: 40px;
        text-align: center;
        font-size: 40px;
      }

      .swiper-here {
        position: fixed;
        right: 40vw;
        top: 50%;
        z-index: 1;
        width: 20vw;
        height: auto;
        pointer-events: none;
      }

      img {
        height: 100%;
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
  name: "section5",
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
      swiperOptions1: {
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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
      showingFullBox: false,
      fullBoxImg: "",
      imgList1: [
        {
          img: require("./s5/slider_1.jpg"),
          title: "大氣迎賓大廳",
          content: "奢華震撼挑高7米4",
        },
        {
          img: require("./s5/slider_2.jpg"),
          title: "禮賓接待櫃檯",
          content: "尊榮高貴飯店式管理",
        },
        {
          img: require("./s5/slider_3.jpg"),
          title: "景觀健身房",
          content: "盡覽風光愜意運動",
        },
        {
          img: isMobile? require("./s5/slider_4_full.jpg") : require("./s5/slider_4.jpg") ,
          title: "自助洗衣中心",
          content: "便利完善渡假機能",
        },
      ],
    };
  },

  methods: {
    onSwiperSlideChangeTransitionStart() {},
    handleClickSlide(index, reallyIndex) {
      if (isMobile) {
        this.showingFullBox = true;
        this.fullBoxImg = this.imgList1[index].img;
      }
    },
    handleFullBoxSlide() {
      $(".full-box").on("scroll", () => {
        $(".swiper-here").fadeOut();
      });
    },
  },

  mounted() {
    this.handleFullBoxSlide();
  },
  created() {},
};
</script>
