<template>
  <div class="section4">
    <div class="main">
      <div class="box1" data-aos="fade">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :key="i"
              v-for="(banner, i) in activeBanner.img"
              v-bind:style="`background-image:url(${banner.src})`"
            >
              <div v-if="banner.caption" class="slide-text">
                {{ banner.caption }}
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </div>
      </div>
      <div class="box2">
        <div class="text">
          <div class="t1-t2">
            <div class="t1" data-aos="fade" v-html="activeBanner.t1"></div>
            <div class="t2" data-aos="fade" v-html="activeBanner.t2"></div>
          </div>
          <div class="t3" data-aos="fade" v-html="activeBanner.t3"></div>
          <div class="t4" data-aos="fade" v-html="activeBanner.t4"></div>
          <div class="t-work" data-aos="fade">建築實績作品｜</div>
          <div class="t5" data-aos="fade" v-html="activeBanner.t5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-slide {
  /*
  &:nth-child(1) {
    background-size: 150% !important;
    background-position: top !important;
  }
  */
}
.swiper-pagination {
  width: unset;
  top: 5vw !important;
  left: 5vw !important;
  display: flex;
  flex-direction: column;

  .swiper-pagination-bullet {
    margin: 0.3vw !important;
    width: 10px;
    height: 10px;
    border: 1px solid #356292;
    opacity: 1;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: #356292;
      border: 2px solid;
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        background: transparent;
        position: absolute;
        border-radius: 100%;
        border: 1px solid #fff;
        margin-left: -4px;
        margin-top: -1px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .swiper-pagination {
    margin: 5vw 0 0 0;
    .swiper-pagination-bullet {
      margin: 0.5vh !important;
      width: 10px;
      height: 10px;
      border: 1px solid #356292;
      transform: unset !important;
      &.swiper-pagination-bullet-active {
        background: #356292;
      }
    }
  }
  .swiper-pagination-bullets {
    transform: unset !important;
  }
}
</style>

<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section4 {
  height: calc(100vh - 70px);
  min-height: calc(100vw * 900 / 1920 - 70px);
  max-height: calc(100vw * 1080 / 1920 - 70px);
  .main {
    height: 100%;
    display: flex;
    border-top: 1px solid #356292;
    border-bottom: 1px solid #356292;
    flex-direction: row-reverse;
    .box1 {
      width: 55%;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #356292;
      .swiper-slide {
        .slide-text {
          position: absolute;
          bottom: 2.5vw;
          right: 4vw;
          font-size: 1.2vw;
          color: #fff;
          filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.7));
        }
      }
    }
    .box2 {
      position: relative;
      width: 45%;
      height: 100%;
      background: rgb(211, 227, 234);
      background: rgb(211, 227, 234);
      background: linear-gradient(
        -166deg,
        rgba(211, 227, 234, 1) 0%,
        #0054889a 44%,
        #005488b9 78%,
        #00386cb0 100%
      );
      display: flex;
      align-items: center;

      .text {
        position: relative;
        width: 60%;
        margin: 0 auto;
        text-align: justify;
        color: #283555;
        font-size: calc(12px + 700vw / 1920);
        line-height: 2;
        color: #fff;

        .t1-t2 {
          margin: 0 auto;
          .t1 {
            font-size: 1vw;
            font-weight: bold;
            margin-bottom: 0.5vw;
            display: inline;
          }

          .t2 {
            font-size: 1.4vw;
            font-weight: bold;
            margin-left: 1vw;
            display: inline;
          }
        }

        .t3 {
          font-size: 1vw;
          font-weight: bold;
          margin-bottom: 1vw;
          margin-top: 5vw;
        }
        .t-work {
          margin-top: 1vw;
        }
      }

      .bottle {
        width: 25vw;
        position: absolute;
        right: -10vw;
        top: 5vw;
      }

      .swiper-btn {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        .swiper-btn-item {
          writing-mode: vertical-lr;
          flex: auto;
          font-weight: bold;
          font-size: 1.2vw;
          padding: 0 1vw;
          transition: all 0.2s;
          background: rgb(255, 255, 255);
          background: linear-gradient(
            -180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(186, 211, 234, 0.7) 90%,
            rgba(186, 211, 234, 1) 100%
          );
          &:nth-child(1) {
            clip-path: polygon(100% 0, 100% 89%, 0 100%, 0 0%);
          }
          &:nth-child(2) {
            clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 7%);
            margin-top: -2vw;
          }
          &:nth-child(3) {
            clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 7%);
            margin-top: -2vw;
          }
          &:nth-child(4) {
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 7%);
            margin-top: -2vw;
          }

          &:hover {
            background: linear-gradient(
              -180deg,
              rgba(53, 98, 146, 1) 0%,
              rgba(69, 135, 166, 1) 50%,
              rgba(186, 211, 234, 1) 100%
            );
            color: #fff;
            cursor: pointer;
          }

          &.active {
            background: linear-gradient(
              -180deg,
              rgba(53, 98, 146, 1) 0%,
              rgba(69, 135, 166, 1) 50%,
              rgba(186, 211, 234, 1) 100%
            );
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
  .swiper-container {
    height: 100%;
  }
  .swiper-wrapper {
    height: 100%;
    .swiper-slide {
      height: 100%;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    height: auto;
    min-height: 0;
    max-height: initial;
    .main {
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      border: 0;
      .box1 {
        width: 100%;
        background-color: #fff;
        height: 100vw;
        border: 0;
        .swiper-slide {
          .slide-text {
            position: absolute;
            bottom: 5vw;
            left: 5vw;
            font-size: calc(100vw * 12 / 375);
          }
        }
      }
      .box2 {
        width: 100%;
        height: auto;

        .text {
          position: relative;
          width: 70%;
          margin: 0 auto;
          font-size: calc(12px + 100vw / 375);

          .t1-t2 {
            margin: 0 auto;
            text-align: center;
            margin-top: 10vw;
            .t1 {
              font-size: 14px;
              font-weight: bold;
              margin-bottom: 0.5vw;
              display: inline;
            }

            .t2 {
              font-size: 20px;
              font-weight: bold;
              margin-left: 12px;
              display: inline;
            }
          }
          .t3 {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5vw;
            text-align: center;
            white-space: nowrap;
          }
          .t-work {
            margin-top: 5vw;
          }
          .t5 {
            margin-bottom: 10vw;
          }
        }
      }
    }

    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
       // height: 60vh;
        background-size: cover;
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
  name: "section4",

  data() {
    return {
      isMobile,
      activeBanner: {
        img: [
          {
            src: require("@/projects/dm-h35/s4/B-1.jpg"),
          },
          {
            src: require("@/projects/dm-h35/s4/B-2.jpg"),
            caption: "建築實績｜台北時代寓所",
          },
          {
            src: require("@/projects/dm-h35/s4/B-3.jpg"),
            caption: "建築實績｜仁濟醫院忠孝館前大樓",
          },
          {
            src: require("@/projects/dm-h35/s4/B-4.jpg"),
            caption: "建築實績｜璞真仰心",
          },
          {
            src: require("@/projects/dm-h35/s4/B-5.jpg"),
            caption: "建築實績｜名豐時藝",
          },
        ],
        t1: "營建工程",
        t2: "地樺營造",
        t3: "以熱情成就建築藝術與人本關懷。",
        t4: "「誠信、品質、環保」架構起地樺營造永續經營的願景與理想。創辦者曾任職日商、美商與澳商等多家一流的國際公司，以精鍊工程管理及堅持的態度去做對的事情，讓人與建築、環境與工程和諧共存並落實美學感知，是地樺營造不變與堅守的原則。",
        t5: "臺北時代寓所、璞真仰心、璞真永吉、仁濟醫院忠孝館前大樓、名豐時藝、忠孝無極",

        swiperOption: {
          pagination: {
            el: ".swiper-pagination-1",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          loop: true,
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
        },
      },
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      },
    };
  },

  methods: {},

  mounted() {},
};
</script>