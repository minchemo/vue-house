<template>
  <div class="section3">
    <div class="main">
      <div class="box1" data-aos="fade">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :key="i"
              v-for="(banner, i) in banners"
              v-bind:style="`background-image:url(${banner.imgSrc})`"
            >
              <div class="slide-text" v-bind:class="i == 0 ? 'header' : ''">
                {{ banner.text }}
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
          <div class="title" data-aos="fade">
            匠人靈魂致敬時代<br />執著無懼創造自慢美學
          </div>
          <div v-if="!isMobile" class="des" data-aos="fade">
            興富謙建設在創作的過程中，用近乎自燃的方式，對追求建築的獨特率先採取行動；逾20多年經驗，事必躬親、講究細節、敬畏土地、提煉匠心，以內斂謙遜之姿、曖曖含光之態，在大安中正等台北精華區域，持續追尋著足以自身感到自慢的建築作品。
          </div>
          <div v-if="isMobile" class="des" data-aos="fade">
            興富謙建設在創作的過程中，用近乎自燃的方式，對追求獨特率先採取行動；逾20多年經驗，在大安中正等台北精華區域，追尋著足以令自身感到自慢的建築作品。
          </div>
        </div>
        <img
          data-aos="fade"
          v-if="!isMobile"
          class="bottle"
          src="~@/projects/dm-h35/s3/bottle.png"
          alt=""
        />
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

.swiper-button-prev,
.swiper-button-next {
  color: #fff !important;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.4));
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: 1vh !important;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 1vh !important;
}

@media only screen and (max-width: 767px) {
  .swiper-pagination {
    margin: 5vw 0 0 0;
    .swiper-pagination-bullet {
      margin: 0.5vh !important;
      width: 10px;
      height: 10px;
      border: 1px solid #356292;
      &.swiper-pagination-bullet-active {
        background: #356292;
      }
    }
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 24px !important;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 2vh !important;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 2vh !important;
  }
}
</style>

<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section3 {
  height: calc(100vh - 70px);
  min-height: calc(100vw * 900 / 1920 - 70px);
  max-height: calc(100vw * 1080 / 1920 - 70px);
  .main {
    height: 100%;
    display: flex;
    border-top: 1px solid #356292;
    border-bottom: 1px solid #356292;
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
          filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.7));
          &.header {
            color: #283555;
          }
        }
      }
    }
    .box2 {
      width: 45%;
      height: 100%;
      background: rgb(211, 227, 234);
      background: linear-gradient(
        -166deg,
        rgba(211, 227, 234, 1) 0%,
        rgba(211, 227, 234, 1) 44%,
        rgba(208, 225, 234, 1) 78%,
        rgba(186, 211, 234, 1) 100%
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

        .title {
          font-size: 1.6em;
          font-weight: bold;
          letter-spacing: 0.06em;
          line-height: 1.4;
        }

        .des {
          margin: 2em 0 0;
        }
      }

      .bottle {
        width: 25vw;
        position: absolute;
        right: -10vw;
        top: 5vw;
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
  .section3 {
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
        height: 40vh;

        .text {
          position: relative;
          width: 70%;
          margin: 0 auto;
          font-size: calc(12px + 100vw / 375);

          .title {
            font-size: 1.3em;
            text-align: center;
          }
        }
      }
    }

    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
        //height: 60vh;
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
  name: "section3",

  data() {
    return {
      isMobile,
      banners: [
        {
          imgSrc: require("@/projects/dm-h35/s3/A-1.jpg"),
          text: "興富謙建設主理人 蔡煜凱",
        },
        {
          imgSrc: require("@/projects/dm-h35/s3/A-2.jpg"),
          text: "建築實績｜元亨無界",
        },
        {
          imgSrc: require("@/projects/dm-h35/s3/A-3.jpg"),
          text: "建築實績｜寬心富謙",
        },
        {
          imgSrc: require("@/projects/dm-h35/s3/A-4.jpg"),
          text: "建築實績｜謙邸",
        },
        {
          imgSrc: require("@/projects/dm-h35/s3/A-5.jpg"),
          text: "建築實績｜任所適",
        },
      ],
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

  created() {},
};
</script>