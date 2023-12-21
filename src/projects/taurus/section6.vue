<template>
  <div class="section6 f-p-section">
 <!--- <div class="swiper-title" data-aos="fade-down" data-aos-duration="1000">
      <span v-if="!isMobile">　</span>新穎暢快<br v-if="isMobile" /><span
        class="db"
        >高達<span class="large">15</span>項</span
      >的渡假公設！
    </div>
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
          v-bind:style="{ backgroundImage: `url(${isMobile ? imgList.imgMo : imgList.img})` }"
        >
          <div class="caption">
            <div class="title" v-html="imgList.title"></div>
            <div class="content" v-html="imgList.content"></div>
          </div>
          <div class="tip-title">3D模擬示意圖</div>
        </swiper-slide>
        <div class="swiper-pagination-s6" slot="pagination"></div>
      </swiper>
      <img
        v-if="isMobile"
        class="touch-3d"
        src="./s5/touch.png"
        alt=""
        srcset=""
        v-show="!showingFullBox"
      />
    </div>-->
    <div v-if="isMobile" class="full-box" v-show="showingFullBox">
      <img
        v-if="isMobile"
        class="swiper-here"
        src="./s5/swipe-here.png"
        alt=""
        srcset=""
      />
      <img :src="fullBoxImg" alt="" srcset="" v-show="showingFullBoxImg" />
      <div id="viewer-fullbox" class="viewer-fullbox"></div>
      <div class="close" @click="showingFullBox = false">×</div>
    </div>

    <template>
      <div
        v-for="(viewer, i) in viewerList"
        :key="i"
        class="viewer-box"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <div
          v-if="isMobile"
          :id="'viewer-' + (i + 1)"
          class="viewer"
          v-bind:style="{ backgroundImage: `url(${viewer.mo_bg})` }"
          @click="handleClickViewer(viewer.img)"
        ></div>
        <div v-else :id="'viewer-' + (i + 1)" class="viewer"></div>
        <div v-if="isMobile" class="touch" v-show="!showingFullBox">
          <img src="./s6/viewer/touch.png" alt="" srcset="" />
          <p>點擊觀看VR環景</p>
        </div>
        <div
          :class="'title title-' + viewer.titlePos"
          v-html="viewer.title"
        ></div>
      </div>
    </template>

    <img
      class="style1_1 floating"
      src="./s6/viewer/style_1.png"
      alt=""
    />
    <img
      class="style1_2 floating"
      src="./s6/viewer/style_1.png"
      alt=""
    />
    <img
      class="style2_1 floating rotating"
      src="./s6/viewer/style_2.png"
      alt=""
    />
    <div class="style3 style3_1"></div>
    <div class="style3 style3_2"></div>
    <div class="style3 style3_3"></div>
    <div class="style3 style3_4"></div>
  </div>
</template>
<style lang="scss">
.swiper-pagination-s6 {
  position: absolute;
  z-index: 10;
  bottom: 0 !important;
  width: auto !important;
  padding: 20px;
  background: #fff;
  border-radius: 20px 20px 0 0;
  left: 50% !important;
  transform: translate(-50%, 0);

  .swiper-pagination-bullet {
    background-color: transparent;
    border: 1px solid #07aed1;
    opacity: 1;
    width: 16px;
    height: 16px;
    margin: 0 6px !important;

    &.swiper-pagination-bullet-active {
      background-color: #07aed1;
    }
  }
}
@media only screen and (max-width: 767px) {
  .swiper-pagination-s6 {
    position: absolute;
    z-index: 10;
    bottom: 0 !important;
    width: auto !important;
    padding: 7px 16px 0px 16px;
    background: #fff;
    border-radius: 20px 20px 0 0;
    left: 50% !important;
    transform: translate(-50%, 0);

    .swiper-pagination-bullet {
      background-color: transparent;
      border: 1px solid #07aed1;
      opacity: 1;
      width: 10px;
      height: 10px;
      margin: 0 2px !important;

      &.swiper-pagination-bullet-active {
        background-color: #07aed1;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section6 {
  height: auto;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(252, 252, 252, 1) 15%,
    rgba(236, 236, 236, 1) 31%,
    rgba(226, 226, 226, 1) 56%,
    rgba(255, 255, 255, 1) 100%
  );
  padding: 6vw 0 0 0;

  .style1_1 {
    position: absolute;
    width: 14vw;
    top: 59vw;
    z-index: 0;
    right: 4vw;
  }
  .style1_2 {
    position: absolute;
    width: 14vw;
    top: 100vw;
    z-index: 0;
    left: 4vw;
  }
  .style2_1 {
    position: absolute;
    width: 21vw;
    top: 123vw;
    z-index: 0;
    right: 5vw;
  }
  .style3 {
    position: absolute;
    width: 23vw;
    height: 1px;
    background: #2bb2d8;
    transform: rotate(-45deg);
    &.style3_1 {
      top: 138vw;
      left: -3vw;
    }
    &.style3_2 {
      top: 152vw;
      left: -7vw;
    }
    &.style3_3 {
      top: 116vw;
      right: 4vw;
    }
    &.style3_4 {
      top: 119vw;
      right: -4vw;
    }
  }

  .swiper-title {
    position: relative;
    font-size: 2.5vw;
    font-weight: bold;
    color: #3fa3ef;
    margin-top: 2vw;
    .db {
      color: #0071b6;
      margin: 0 1vw;
      .large {
        font-size: 3.5vw;
      }
    }
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 1vw 1.2vw 1vw;
      border-color: transparent transparent #07aed1 transparent;
      position: absolute;
      bottom: 0;
      left: 50%;
      z-index: 15;
      transform: translate(-50%, 2vw);
    }
  }
  .swiper-box {
    position: relative;
    width: 92vw;
    left: 4vw;
    border-radius: 2vw;
    border: 1vw solid #fff;
    overflow: hidden;
    box-shadow: 1px 1px 15px rgb(0 0 0 / 30%);
    margin-top: 2vw;
    margin-bottom: 8vw;
    z-index: 1000;
    .swiper-slide {
      height: 0;
      padding-bottom: 43.7%;
      background-size: cover;

      .caption {
        position: absolute;
        left: 6vw;
        top: 2vw;
        z-index: 1;
        display: flex;
        align-items: center;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));

        .title {
          margin-right: 0.7vw;
          font-size: 1.1vw;
          color: #fff;
          width: 6vw;
          height: 6vw;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          border: 0.1vw solid #fff;
          font-weight: bold;
        }
        .content {
          text-align: left;
          font-size: 1vw;
          line-height: 1.3vw;
          color: #fff;
        }
      }
      .tip-title {
        position: absolute;
        color: #fff;
        left: 10vw;
        bottom: 2vw;
        z-index: 1;
        font-size: 1.2vw;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.7));
      }
    }
  }

  .viewer-box {
    position: relative;
    z-index: 10;
    .viewer {
      position: relative;
      width: 70vw;
      left: 15vw;
      height: 42.26vw;
      background: #eee;
      border-radius: 2vw;
      border: 1vw solid #fff;
      overflow: hidden;
      box-shadow: 1px 1px 15px rgb(0 0 0 / 30%);
      margin-bottom: 8vw;
    }

    .title {
      position: absolute;
      z-index: 100;
      top: -2vw;
      width: 10vw;
      height: 10vw;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 100%;
      color: #bd802f;
      font-size: 1.2vw;
      font-weight: bold;
      box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);line-height: 1.3;
      &.title-rt {
        right: 12vw;
      }
      &.title-lt {
        left: 12vw;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section6 {
    position: relative;
  padding: 30vw 0 0 0;

    .style1_1 {
      width: 50vw;
      top: 258vw;
      right: 0vw;
    }
    .style1_2 {
      width: 50vw;
      left: 0vw;
    }
    .style2_1 {
      width: 50vw;
      top: 375vw;
      right: unset;
      left: 0;
      transform: rotate(5deg);
    }

    .style3 {
      width: 40vw;
      &.style3_1 {
        top: 273vw;
        left: -3vw;
      }
      &.style3_2 {
        top: 303vw;
        left: -7vw;
      }
      &.style3_3 {
        display: none;
      }
      &.style3_4 {
        display: none;
      }
    }

    .swiper-title {
      position: relative;
      font-size: 24px;
      font-weight: bold;
      color: #3fa3ef;
      margin-top: 24px;
      .db {
        color: #0071b6;
        margin: 0 8px;
        .large {
          font-size: 32px;
        }
      }
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 12px 10px;
        border-color: transparent transparent #07aed1 transparent;
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 15;
        transform: translate(-50%, 24px);
      }
    }

    .swiper-box {
      position: relative;
      width: 92vw;
      left: 4vw;
      border-radius: 8vw;
      margin: 24px 0;
      margin-bottom: 36vw;
      .swiper-slide {
        height: 0;
        padding-bottom: 95.66%;
        background-size: cover;
        background-position: center;

        .caption {
          position: absolute;
          left: 5vw;
          top: 5vw;
          z-index: 1;
          text-align: center;
          width: 90vw;

          .title {
            font-size: 16px;
            width: 100px;
            height: 100px;
            border: 4px solid;
            margin-right: 10px;
            line-height: 1.2;
          }
          .content {
            width: 60%;
            font-size: 12px;
            line-height: 1.5;
          }
        }
        .tip-title {
          position: absolute;
          color: #fff;
          width: 100%;
          left: 0;
          bottom: 10vw;
          z-index: 1;
          font-size: 14px;
        }
      }

      .touch-3d {
        position: absolute;
        z-index: 2;
        pointer-events: none;
        width: 24vw;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -20%);
      }
    }

    .full-box {
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 10000000;
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

      .viewer-fullbox {
        height: 100%;
        width: 100%;
      }
    }

    .viewer-box {
      position: relative;
      .viewer {
        position: relative;
        width: 90vw;
        left: 5vw;
        height: 106vw;
        background: #eee;
        border-radius: 8vw;
        border: 1vw solid #fff;
        overflow: hidden;
        box-shadow: 1px 1px 15px rgb(0 0 0 / 30%);
        margin-bottom: 36vw;
        background-size: cover;
        filter: brightness(0.6);
      }

      .title {
        position: absolute;
        z-index: 100;
        top: -18vw;
        width: 36vw;
        height: 36vw;
        left: 32vw !important;
        right: unset !important;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 100%;
        color: #bd802f;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
      }

      .touch {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        img {
          width: 60px;
        }
        p {
          margin-top: 12px;
          font-size: 20px;
          color: #fff;
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "pannellum";

import "swiper/css/swiper.css";
export default {
  name: "section6",
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
      img_prefix: isMobile ? "mo/" : "",
      swiperOptions1: {
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination-s6",
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
      showingFullBoxImg: false,
      fullBoxImg: "",
/*
      imgList1: [
        {
          img: require("./s6/slider_1.jpg"),
          imgMo: require("./s6/mo/slider_1.jpg"),
          title: "六星級<br>冷泉SPA",
          content: !isMobile
            ? "除了義大利外，唯台灣蘇澳獨有的低溫碳酸礦泉冷泉，<br>一年四季溫柔呵護您的每一寸肌膚。"
            : "除了義大利外，唯台灣蘇澳獨有的低溫碳酸礦泉冷泉，一年四季溫柔呵護您的每一寸肌膚。",
        },
        {
          img: require("./s6/slider_2.jpg"),
          imgMo: require("./s6/mo/slider_2.jpg"),
          title: "景觀<br>健身房",
          content: !isMobile
            ? "選用專業健身器材，為專注體態雕塑的貴賓提供優質的場域及設備。"
            : "選用專業健身器材，為專注體態雕塑的貴賓提供優質的場域及設備。",
        },
        {
          img: require("./s6/slider_3.jpg"),
          imgMo: require("./s6/mo/slider_3.jpg"),
          title: "自助<br>洗衣中心",
          content: !isMobile
            ? "便利完善渡假機能"
            : "便利完善渡假機能",
        },
        {
          img: require("./s6/slider_4.jpg"),
          imgMo: require("./s6/mo/slider_4.jpg"),
          title: "中庭<br>泳池",
          content: !isMobile
            ? "擁有多樣設施給予不受拘束愜意的時刻"
            : "擁有多樣設施給予不受拘束愜意的時刻",
        },
        {
          img: require("./s6/slider_5.jpg"),
          imgMo: require("./s6/mo/slider_5.jpg"),
          title: "熱帶風格<br>發呆亭",
          content: !isMobile
            ? "想到熱帶島嶼渡假不用飛出國，<br>灣岸villa的發呆亭，讓你躺著就像在國外海邊渡假村。"
            : "想到熱帶島嶼渡假不用飛出國，灣岸villa的發呆亭，讓你躺著就像在國外海邊渡假村。",
        },
      ],
*/
      viewerList: [
        {
          el: "viewer-1",
          img: require("./s6/viewer/01.jpg"),
          mo_bg: require("./s6/viewer/01_mo.jpg"),
          title: "中庭全景圖",
          titlePos: "rt",
        },
        {
          el: "viewer-2",
          img: require("./s6/viewer/02.jpg"),
          mo_bg: require("./s6/viewer/02_mo.jpg"),
          title: isMobile?"雙泉會館<br>全景圖":"雙泉會館全景圖",
          titlePos: "lt",
        },
      ],
    };
  },
  methods: {
    onSwiperSlideChangeTransitionStart() {},
    handleClickSlide(index, reallyIndex) {
      if (isMobile) {
        this.showingFullBox = true;
        this.showingFullBoxImg = true;
        this.fullBoxImg = this.imgList1[index].img;
      }
    },
    handleFullBoxSlide() {
      $(".full-box").on("scroll", () => {
        $(".swiper-here").fadeOut();
      });
    },
    handleClickViewer(img) {
      this.showingFullBox = true;
      this.showingFullBoxImg = false;
      this.initPanoramaMb(img);
    },
    initPanorama() {
      //pc
      this.viewerList.forEach((element) => {
        pannellum.viewer(element.el, {
          type: "equirectangular",
          compass: true,
          autoLoad: true,
          autoRotate: -10,
          hfov: 160,
          autoRotateInactivityDelay: 3000,
          maxLevel: 16,
          panorama: element.img,
        });
      });
    },
    initPanoramaMb(img) {
      pannellum.viewer("viewer-fullbox", {
        type: "equirectangular",
        compass: true,
        autoLoad: true,
        autoRotate: -10,
        hfov: 60,
        autoRotateInactivityDelay: 3000,
        maxLevel: 16,
        panorama: img,
      });

      setTimeout(() => {
        $(".swiper-here").fadeOut();
      }, 1000);
    },
  },

  mounted() {
    this.handleFullBoxSlide();

    if (!isMobile) {
      this.initPanorama();
    }
  },
  created() {},
};
</script>
