<template>
  <div class="section6">
    <div class="slides-title" data-aos="flip-up" data-aos-duration="1000">
      敦化忠孝交會富域 <br v-if="isMobile">處處精彩豈止現在
    </div>
    <div class="slides-subtitle" data-aos="fade" data-aos-duration="1000">
      敦化南路、忠孝東路交會的東區，是台北腹地的正中心，城市地位無法複製。〔太平洋敦南麗舍〕坐擁東區繁華核心，微距捷運忠孝敦化站200米，近享松山文創園區、國父紀念館，未來台北大巨蛋、正義國宅都更完工，東區前景注定倍添精彩。
    </div>
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
          class="serial"
          data-aos="fade-up"
          :data-aos-delay="i * 200 + 600"
          data-aos-duration="1000"
        >
          0{{ i + 1 }}
        </div>
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
            class="serial"
            data-aos="fade-up"
            :data-aos-delay="i * 200 + 600"
            data-aos-duration="1000"
          >
            0{{ i + 1 }}
          </div>
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
.section6 {
  height: auto;
  width: 100vw;
  background-size: contain;
  background-image: url("~@/assets/img/bg.jpg");
  padding-bottom: 120px;

  .slides-title {
    text-align: left;
    padding: 0 5vw;
    font-size: 1.8vw;
    font-weight: bold;
    color:#000;
  }
  .slides-subtitle {
    text-align: left;
    padding: 0 5vw;
    margin-top: 2.5vw;
    margin-bottom: 2.5vw;
    font-size: 1vw;
    line-height: 1.5;
    color:#000;
  }

  .slides {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    padding: 0 5vw;

    .slide {
      width: 47%;
      background-size: cover;
      background-repeat: no-repeat;
      height: 0;
      padding-bottom: 31.2%;
      box-sizing: border-box;
      position: relative;
      overflow: visible;
      margin-top: 3vw;

      .serial {
        position: absolute;
        width: 15vw;
        font-size: 3.2vw;
        padding: 0.6vw 0;
        color: #000;
        left: 0;
        top: -5.5vw;
        text-align: left;
        font-weight: bold;
        display: none;
      }
      .title {
        position: absolute;
        width: 15vw;
        font-size: 1.8vw;
        padding: 0.6vw 0;
        color: #000;
        left: 4.5vw;
        top: -4.4vw;
        text-align: left;
        font-weight: bold;
      }

      .caption {
        width: 70%;
        background: #000;
        position: absolute;
        font-size: 1.2vw;
        font-weight: bold;
        color: #fff;
        right: -1.5vw;
        bottom: 1vw;
        padding: 1vw 0;
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
    height: auto;
    width: 100vw;
    background-size: contain;
    background-image: url("~@/assets/img/bg.jpg");
    padding-bottom: 90px;

    .slides-title {
      text-align: left;
      padding: 0 10vw;
      font-size: 28px;
      font-weight: bold;
      padding-top: 60px;
    }
    .slides-subtitle {
      text-align: justify;
      padding: 0 10vw;
      margin-top: 6vw;
      margin-bottom: -6vw;
      font-size:14px;
      line-height: 1.5;
    }

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
            padding-bottom: 60vw;
            width: 90vw !important;
            overflow: visible;
            background-size: cover;
            background-position: center;
            margin-left: 20px;
            margin-top: 70px;
            margin-bottom: 50px;

            .serial {
              position: absolute;
              width: 15vw;
              font-size: 32px;
              padding: 0.6vw 0;
              color: #000;
              left: 0;
              top: -4vw;
              text-align: left;
              font-weight: bold;
              font-family: "Noto Serif TC", sans-serif;
              display: none;
            }
            .title {
              position: absolute;
              width: 100%;
              font-size: 18px;
              padding: 0.6vw 0;
              color: #000;
              left: 12vw;
              top: -9.2vw;
              text-align: left;
              font-weight: bold;
            }

            .caption {
              width: 90%;
              background: #000;
              position: absolute;
              font-size: 14px;
              font-weight: bold;
              color: #fff;
              right: 0;
              bottom: -5vw;
              padding: 4vw 0;
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
      info,
      isMobile,
      slides: [
        {
          img: require("@/projects/dnls/s6/font_1.png"),
          caption: "敦化忠孝十字交會 北市腹地正中央",
        },
        {
          img: require("@/projects/dnls/s6/font_2.png"),
          caption: "敦南國際林蔭 首都經貿中軸",
        },
        {
          img: require("@/projects/dnls/s6/font_3.png"),
          caption: "忠孝東路四段 百貨精品匯集",
        },
        {
          img: require("@/projects/dnls/s6/font_4.png"),
          caption: "忠孝敦化站 走路2分鐘",
        },
        {
          img: require("@/projects/dnls/s6/font_5.png"),
          caption: "松山文創園區、國父紀念館 萬坪雙綠意",
        },
        {
          img: require("@/projects/dnls/s6/font_6.png"),
          caption: "台北大巨蛋 城市新動能",
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
