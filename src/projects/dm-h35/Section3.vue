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
              <div class="slide-text">{{ banner.text }}</div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="box2">
        <div class="text">
          <div class="title" data-aos="fade">匠人靈魂致敬時代<br />執著無懼創造自慢美學</div>
          <div v-if="!isMobile" class="des" data-aos="fade">
            興富謙建設在創作的過程中，用近乎自燃的方式，對追求建築的獨特率先採取行動；逾20多年經驗，事必躬親、講究細節、敬畏土地、提煉匠心，以內斂謙遜之姿、曖曖含光之態，在大安中正等台北精華區域，持續追尋著足以自身感到自慢的建築作品。
          </div>
          <div v-if="isMobile" class="des" data-aos="fade">
            興富謙建設在創作的過程中，用近乎自燃的方式，對追求獨特率先採取行動；逾20多年經驗，在大安中正等台北精華區域，追尋著足以令自身感到自慢的建築作品。
          </div>
        </div>
        <img data-aos="fade"
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
  &:nth-child(1) {
    background-size: 150% !important;
    background-position: top !important;
  }
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
  .swiper-slide {
    &:nth-child(1) {
      background-size: 180% !important;
      background-position: top !important;
    }
  }
  .swiper-pagination {
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
}
</style>

<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section3 {
  height:  calc(100vh - 70px);
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
          bottom:3vw;
          left: 5vw;
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

        .title {
          font-size: 1.6vw;
          font-weight: bold;
          letter-spacing: 0.2vw;
          line-height: 2.2vw;
        }

        .des {
          margin-top: 5vw;
          font-size: 1.06vw;
          line-height: 2vw;
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
.swiper-container{height: 100%;}
  .swiper-wrapper {
    height: 100%;
    .swiper-slide {
      height: 100%;
      background-size: 100%;
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
    height:auto;
  min-height:0;
  max-height:initial;
    .main {
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      border: 0;
      .box1 {
        width: 100%;
        background-color: #fff;
        height: 60vh;
        border: 0;
        .swiper-slide {
          .slide-text {
            position: absolute;
            bottom: 5vw;
            left: 5vw;
            font-size:calc(100vw * 12 / 375);
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
          color: #283555;

          .title {
            font-size:calc(100vw * 17 / 375);
            font-weight: bold;
            letter-spacing: 1vw;
            line-height: 5vw;
          text-align: center;
          }

          .des {
            font-size:calc(100vw * 13 / 375);
            line-height: 7vw;
          }
        }
      }
    }

    .swiper-wrapper {
      height: 100vh;
      .swiper-slide {
        height: 60vh;
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
          imgSrc: require("@/projects/dm-h35/s3/01.jpg"),
          text: "興富謙建設主理人 蔡煜凱",
        },
        { imgSrc: require("@/projects/dm-h35/s3/02.jpg"), text: "元亨無界" },
        { imgSrc: require("@/projects/dm-h35/s3/03.jpg"), text: "謙邸" },
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },

  methods: {},

  created() {},
};
</script>