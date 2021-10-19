<template>
  <div class="section8">
    <div class="slides-title" data-aos="flip-up" data-aos-duration="1000">
      INGENIOUS DESIGN <br v-if="isMobile" />精湛設計
    </div>
    <div class="divider"></div>
    <div class="feature">
      <div class="feature-item">
        <div class="info">
          <div class="content" v-html="slides.content"></div>
        </div>
        <swiper :options="swiperOptions" class="slides">
          <swiper-slide
            v-for="(slide, i) in slides.img"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide.url})`,
            }"
            class="slide-item"
          >
            <div class="caption" v-if="slide.caption != ''">
              {{ slide.caption }}
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section8 {
  height: auto;
  width: 100vw;
  background-size: contain;
  background-image: url("~@/assets/img/bg.jpg");
  padding-bottom: 120px;

  .slides-title {
    text-align: left;
    padding: 0 5vw;
    font-size: 1.8vw;
    font-weight: 600;
    color: #000;
  }

  .divider {
    height: 2px;
    width: 90vw;
    margin: 3vw auto;
    background-color: #000;
  }

  .feature {
    position: relative;
    width: 100vw;
    height: auto;
    left: 0;
    .feature-item {
      display: flex;
      align-items: center;
      padding: 0 5vw;
      flex-direction: row-reverse;
      .info {
        width: 42%;
        text-align: left;
        position: relative;
        z-index: 2;
        .content {
          margin-top: 1vw;
          font-size: 1.2vw;
          font-weight: bold;
          line-height: 2;
          display: flex;
          justify-content: center;
        }
      }

      .slides {
        width: 58%;
        .slide-item {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          height: 0;
          padding-bottom: 91.09%;
          box-sizing: border-box;
          position: relative;
          overflow: visible;
          background-color: #000;

          .caption {
            position: absolute;
            right: 8vw;
            bottom: 2vw;
            color: #fff;
            font-size: 1.2vw;
            letter-spacing: 1px;
            filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.5));
          }
        }
      }
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100vw;
      height: 80%;
      background-color: rgba(0, 0, 0, 0.2);
      transform: translateY(-50%);
      z-index: 0;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section8 {
    height: auto;
    width: 100vw;
    background-size: contain;
    background-image: url("~@/assets/img/bg.jpg");
    padding-bottom: 90px;

    .slides-title {
      text-align: left;
      padding: 0 10vw;
      font-size: 28px;
      font-weight: 600;
      padding-top: 60px;
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
  name: "section8",
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
      swiperOptions: {
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
        },
      },
      slides:
      {
        content: `〔太平洋敦南麗舍〕領銜時代建築再現東區富域<br/>核心，半世紀建築行家太平洋建設細心打磨精良<br/>質地，傲人出身與仁愛路名宅「鳳翔」、<br/>「百吉」、「百利」系出同門。`,
        img: [
          {
            url: require('@/projects/dnls/s8/1.jpg'),
          },
        ]
      },
    };
  },

  methods: {},

  created() { },
};
</script>
