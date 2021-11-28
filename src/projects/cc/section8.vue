<template>
  <div class="section8">
    <img
      v-if="!isMobile"
      class="bg"
      v-lazy
      :temp="require('@/projects/cc/s8/bg.png')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:50,0"
    />
    <img
      v-else
      class="bg"
      v-lazy
      :temp="require('@/projects/cc/s8/bg-mo.png')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:50,0"
    />
    <div class="swiper-box">
      <div class="left">
        <h2 uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-200,0;x:-200,0">
          校園第一排<br />
          被知識景仰的家
        </h2>
        <div
          class="content"
          uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:200,0;x:200,0"
        >
          正對頭前國中永久棟距、都心百米林蔭步道搖曳為鄰，一座被豐盈知識與翠綠大樹關照的家，在『青青』學習如何優雅生活、品味從容日常。
        </div>
        <img
          class="textimg"
          v-lazy
          :temp="require('@/projects/cc/s8/textimg.png')"
          alt=""
          srcset=""
          uk-parallax="viewport: 0.3;blur:50,0"
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
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="swiper-nav">
          <div class="prev">
            <img src="@/projects/cc/s8/prev.svg" alt="" srcset="" />
          </div>
          <div class="next">
            <img src="@/projects/cc/s8/next.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section8 {
  position: relative;
  height: auto;
  padding-top: size(100);
  z-index: 1;

  .bg {
    position: absolute;
    top: -#{size(50)};
    right: 0;
    width: 100%;
    z-index: 0;
  }
  .swiper-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    .left {
      width: size(1920);
      height: size(549);
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h2 {
        font-size: size(50);
        font-weight: 300;
        line-height: 1.2;
        letter-spacing: size(15);
        margin-bottom: size(50);
      }
      .content {
        width: size(749);
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
        height: size(650);
        padding-bottom: size(80);
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
        .swiper-pagination {
          position: absolute;
          width: auto;
          bottom: size(30);
          left: 50%;
          transform: translateX(-50%);
          .swiper-pagination-bullet {
            width: size(87);
            height: size(9);
            border-radius: 0;
            background: transparent;
            border: 1px solid #000;
            opacity: 1;
            &.swiper-pagination-bullet-active {
              background: #000;
            }
          }
        }
      }
      .swiper-nav {
        position: absolute;
        width: size(858);
        bottom: 0;
        left: 50%;
        margin-left: -#{size(429)};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 size(50);
        .prev,
        .next {
          position: relative;
          width: size(63);
          height: size(63);
          cursor: pointer;
          z-index: 1;
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
  .section8 {
    position: relative;
    height: auto;
    padding-top: size-m(60);
    z-index: 1;

    .bg {
      top: -#{size-m(50)};
      right: 0;
      width: size-m(137);
      z-index: 0;
    }
    .swiper-box {
      display: flex;
      align-items: center;
      flex-direction: column;
      .left {
        width: 80%;
        height: auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h2 {
          font-size: size-m(19);
          letter-spacing: size-m(8);
          line-height: 1.5;
          margin-bottom: size-m(30);
        }
        .content {
          width: 100%;
          font-size: size-m(15);
          letter-spacing: size-m(5);
          margin-bottom: size-m(40);
        }
        .textimg {
          width: size-m(75);
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
        margin-top: size-m(40);
        .swiper-wrapper {
          width: size-m(375);
          height: size-m(164.45);
          padding-bottom: size(80);
          .slide {
            position: relative;
            background-size: cover;
            .caption {
              position: absolute;
              left: size-m(20);
              bottom: size-m(10);
              font-size: size-m(15);
              color: #fff;
              filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.9));
            }
          }
          .swiper-pagination {
            display: none;
          }
        }
        .swiper-nav {
          display: none;
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
      isMobile,
      slides:
      {
        img: [require("@/projects/cc/s8/1.jpg"), require("@/projects/cc/s8/2.jpg"), require("@/projects/cc/s8/3.jpg"), require("@/projects/cc/s8/4.jpg")],
        caption: ['頭前國中', '新莊高中', '昌平國小', '吉得堡幼兒園'],
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
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
    };
  },

  methods: {},

  created() { },
};
</script>
