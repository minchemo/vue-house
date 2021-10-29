<template>
  <div class="section9">
    <div class="slides-title" data-aos="flip-up" data-aos-duration="1000">
      EXQUISITE TASTE <br v-if="isMobile" />精緻品味
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
.section9 {
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
          padding-bottom: 82.46%;
          box-sizing: border-box;
          position: relative;
          overflow: visible;
          background-color: #000;

          .caption {
            position: absolute;
            right: 1vw;
            bottom: 1vw;
            color: #fff;
            font-size: 14px;
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
  .section9 {
    height: auto;
    padding-bottom: 50px;

    .slides-title {
      text-align: left;
      padding: 0 10vw;
      font-size: 28px;
      font-weight: 600;
      padding-top: 60px;
      line-height: 1.5;
    }

    .divider {
      position: relative;
      height: 1px;
      width: 90vw;
      right: -5vw;
      margin: 10vw auto;
      background-color: #000;
    }

    .feature {
      position: relative;
      width: 100vw;
      height: auto;
      left: 0;
      .feature-item {
        padding: 0;
        flex-direction: column-reverse;
        .info {
          width: 100%;
          text-align: left;
          position: relative;
          z-index: 2;
          .content {
            padding: 0 10vw;
            margin-top: 24px;
            font-size: 16px;
            line-height: 1.5;
            display: block;
          }
        }

        .slides {
          width: 100%;
          .slide-item {
            .caption {
              position: absolute;
              width: 70vw;
              right: 1vw;
              bottom: 2vw;
              color: #fff;
              text-align: right;
              font-size: 12px;
              letter-spacing: 1px;
              line-height: 1.3em;
              filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.8));
            }
          }
        }
      }

      &:after {
        display: none;
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
  name: "section9",
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
        spaceBetween: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
        },
      },
      slides: {
        content: !isMobile
          ? `台北東區核心珍稀3.65米面寬精品宅，客餐<br/>廚、臥室、衛浴、陽台四進式空間規劃，舒<br/>適宜居的人性化尺度布局，生活有餘裕、時<br/>尚即日常，12-28坪輕門檻享樂型優質資產。`
          : `台北東區核心珍稀3.65米面寬精品宅，客餐廚、臥室、衛浴、陽台四進式空間規劃，舒適宜居的人性化尺度布局，生活有餘裕、時尚即日常，12-28坪輕門檻享樂型優質資產。`,
        img: [
          {
            url: require("@/projects/dnls/s8/01.jpg"),
            caption: "裝潢風格情境參考示意,格局尺度,依銷售買賣合約書為準,建設公司保有修正之權利。",
          },
          {
            url: require("@/projects/dnls/s8/02.jpg"),
            caption: "裝潢風格情境參考示意,格局尺度,依銷售買賣合約書為準,建設公司保有修正之權利。",
          },
          {
            url: require("@/projects/dnls/s8/03.jpg"),
            caption: "裝潢風格情境參考示意,格局尺度,依銷售買賣合約書為準,建設公司保有修正之權利。",
          },
          {
            url: require("@/projects/dnls/s8/04.jpg"),
            caption: "裝潢風格情境參考示意,格局尺度,依銷售買賣合約書為準,建設公司保有修正之權利。",
          },
          {
            url: require("@/projects/dnls/s8/05.jpg"),
            caption: "裝潢風格情境參考示意,格局尺度,依銷售買賣合約書為準,建設公司保有修正之權利。",
          },
        ],
      },
    };
  },

  methods: {},

  created() {},
};
</script>
