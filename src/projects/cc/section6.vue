<template>
  <div class="section6">
    <div class="swiper-box">
      <div class="left" uk-parallax="viewport: 0.3;y:1000,0;">
        <h2 uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-200,0;x:-200,0">
          交通百匯<br />
          3高3快3捷&nbsp;瞬移速可達
        </h2>
        <div
          class="content"
          uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:200,0;x:200,0"
        >
          駕上輕車10分鐘上五股交流道或速接台64、65。<br
            v-if="!isMobile"
          />新北唯一3線捷運環抱行政區，雙北悠遊隨行。
        </div>
        <img
          class="textimg"
          v-lazy
          :temp="require('@/projects/cc/s6/textimg.png')"
          alt=""
          srcset=""
          uk-parallax="viewport: 0.3;blur:50,0"
        />
        <img
          class="deer"
          v-lazy
          :temp="require('@/projects/cc/s6/deer.png')"
          alt=""
          srcset=""
          uk-parallax="viewport:0.3;y:100,0"
        />
      </div>
      <div class="right">
        <swiper
          :options="swiperOptions"
          ref="swiper"
          class="swiper-wrapper"
          uk-parallax="viewport:0.3;y:  -100,0"
        >
          <swiper-slide
            class="slide"
            v-for="(slide, i) in slides.img"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide})`,
            }"
          >
            <div class="caption">
              {{ slides.caption[i] }}
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-nav">
          <div class="prev">
            <img src="@/projects/cc/s6/prev.svg" alt="" srcset="" />
          </div>
          <div class="next">
            <img src="@/projects/cc/s6/next.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section6 {
  position: relative;
  height: auto;
  padding-top: size(100);
  z-index: 1;

  .swiper-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    .left {
      width: size(1920);
      height: size(549);
      text-align: center;
      background-image: url("../../projects/cc/s6/bg.png");
      background-size: cover;
      background-position: bottom center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #fff;

      &::after {
        content: "";
        width: size(1368);
        height: size(211);
        border-right: 1px solid #fff;
        border-left: 1px solid #fff;
        position: absolute;
      }

      h2 {
        font-size: size(50);
        font-weight: 300;
        line-height: 1.2;
        letter-spacing: size(15);
        margin-bottom: size(50);
      }
      .content {
        font-size: size(24);
        font-weight: 300;
        line-height: 2;
        letter-spacing: size(5);
        margin-bottom: size(20);
      }
      .textimg {
        width: size(100);
      }
      .deer {
        position: absolute;
        right: size(20);
        bottom: 0;
        height: size(400);
      }
    }

    .right {
      position: relative;
      .swiper-wrapper {
        width: size(1920);
        height: size(647.01);
        .slide {
          position: relative;
          background-size: cover;
          .caption {
            position: absolute;
            left: size(60);
            bottom: size(30);
            font-size: size(36);
            color: #fff;
            filter: drop-shadow(5px 12px 4px rgba(0, 0, 0, 0.9));
          }
        }
      }
      .swiper-nav {
        position: absolute;
        width: 100%;
        bottom: -#{size(90)};
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 size(50);
        .prev,
        .next {
          width: size(63);
          height: size(63);
          cursor: pointer;
          img {
            width: 100%;
          }
        }
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
    height: auto;
    padding-top: size(100);
    z-index: 1;

    .swiper-box {
      display: flex;
      align-items: center;
      flex-direction: column;
      .left {
        width: size-m(375);
        height: size-m(350);
        text-align: center;
        background-image: url("../../projects/cc/s6/bg-mo.png");
        background-size: cover;
        background-position: bottom center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;

        &::after {
          content: unset;
        }

        h2 {
          font-size: size-m(19);
          font-weight: 300;
          line-height: 1.2;
          letter-spacing: size-m(5);
          margin-bottom: size-m(20);
        }
        .content {
          font-size: size-m(15);
          font-weight: 300;
          line-height: 2;
          letter-spacing: size-m(5);
          margin-bottom: size-m(20);
          width: 80%;
        }
        .textimg {
          width: size-m(75);
        }
        .deer {
          position: absolute;
          right: -#{size-m(10)};
          bottom: 0;
          height: size-m(120);
        }
      }

      .right {
        position: relative;
        .swiper-wrapper {
          width: size-m(375);
          height: size-m(183);
          .slide {
            position: relative;
            background-size: cover;
            .caption {
              position: absolute;
              left: size-m(20);
              bottom: size-m(10);
              font-size: size-m(15);
              color: #fff;
              filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.9));
            }
          }
        }
        .swiper-nav {
          position: absolute;
          width: 100%;
          bottom: size-m(65);
          left: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 size-m(10);
          z-index: 10;
          .prev,
          .next {
            width: size-m(31);
            height: size-m(31);
            cursor: pointer;
            img {
              width: 100%;
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
      isMobile,
      slides:
      {
        img: [require("@/projects/cc/s6/1.jpg"), require("@/projects/cc/s6/2.jpg"), require("@/projects/cc/s6/3.jpg"), require("@/projects/cc/s6/4.jpg"), require("@/projects/cc/s6/5.jpg"), require("@/projects/cc/s6/6.jpg"), require("@/projects/cc/s6/7.jpg")],
        caption: ['國道一號', '64號快速道路', '機捷新北產業園區站', '台一線高架', '65號快速道路', '公車站 頭前國中站', 'YouBike 頭前國中站'],
      },
      swiperOptions: {
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        autoplay: {
          delay: 4500,
        },
        navigation: {
          nextEl: ".swiper-nav .next",
          prevEl: ".swiper-nav .prev",
        },
      },
    };
  },

  methods: {},

  created() { },
};
</script>
