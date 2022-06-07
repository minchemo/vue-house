<template>
  <div class="s9" ref="s9">
    <div class="main">
      <div class="left">
        <div class="swiper-box" data-aos="fade">
          <swiper
            ref="swiper"
            class="swiper"
            :options="swiperOption"
            @slideChangeTransitionStart="slideChangeTransitionStart"
          >
            <swiper-slide
              v-for="(item, i) in imgs"
              :key="i"
              v-bind:style="{ backgroundImage: `url('${item.img}')` }"
            >
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="caption">{{ imgs[swiperIndex].caption }}</div>
      </div>
      <div class="right">
        <div class="t1" data-aos="fade-up" v-if="!isMobile">
          <span>放眼城市尺度 思考建築器度</span><br />城市美學推手 黃明智
        </div>
        <div class="t1" data-aos="fade-up" v-else>
          城市美學推手 黃明智<br /><span>放眼城市尺度 思考建築器度</span>
        </div>
        <div class="t2" data-aos="fade-up" data-aos-delay="300">
          奉行共好的建築理念，期盼以正確的設計成就友善環境、結構安全、裨益施工的正向循環，讓建築承載眾人生活長長久久。<br /><br />
          ｜業績作品｜<br />
          中山區｜<span>南京六福居</span><br />
          大安區｜<span>友座臻璽</span> <br />
          士林區｜<span>白玉別苑</span>
        </div>
      </div>
    </div>
    <div class="decor parallax-item" data-depth="0.25">
      <img
        loading="lazy"
        class="d1"
        data-aos="fade"
        src="@/projects/renai/s9/decor1.svg"
        alt=""
        srcset=""
      />
      <img
        loading="lazy"
        v-if="!isMobile"
        class="d2"
        data-aos="fade"
        src="@/projects/renai/s9/decor3.svg"
        alt=""
        srcset=""
      />
      <img
        loading="lazy"
        v-else
        class="d2"
        data-aos="fade"
        src="@/projects/renai/s9/decor4.svg"
        alt=""
        srcset=""
      />
      <div class="title" data-aos="fade" data-aos-delay="300">人文擘劃</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.parallax-item {
  position: absolute !important;
  &.no-delay {
    transition: all 0s;
  }
}
.s9 {
  position: relative;
  width: size(1920);
  height: size(1232);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .decor {
    pointer-events: none;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    .d1 {
      position: absolute;
      left: -#{size(130)};
      top: size(85);
      width: size(557);
    }
    .d2 {
      position: absolute;
      right: size(0);
      top: size(0);
      width: size(298);
    }
    .title {
      font-size: size(50);
      position: absolute;
      writing-mode: vertical-rl;
      color: #fff;
      z-index: 1;
      top: size(140);
      left: size(240);
    }
  }
  .main {
    width: size(1696);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .left {
      position: relative;
      .swiper-box {
        position: relative;
        .swiper-container {
          box-sizing: content-box;
          width: size(986);
          height: size(940);
          .swiper-slide {
            background-size: cover;
          }
        }
        .swiper-pagination {
          position: absolute;
          display: flex;
          flex-direction: column;
          right: -#{size(30)};
          bottom: 0;
          z-index: 10;
          .swiper-pagination-bullet {
            width: size(15.14);
            height: size(15.14);
            border: size(2) solid #eb5c20;
            background: transparent;
            opacity: 1;
            margin-top: size(7);

            &.swiper-pagination-bullet-active {
              background: #eb5c20;
            }
          }
        }
      }
      .caption {
        position: absolute;
        left: 0;
        bottom: -#{size(30)};
        font-size: size(21);
      }
    }
    .right {
      margin-left: size(115);
      .t1 {
        font-size: size(57);
        color: #eb5c20;
        writing-mode: vertical-rl;
        text-align: left;
        margin: 0 auto;
        line-height: 1.5;
        margin-bottom: size(109);
        span {
          font-size: size(39);
        }
      }
      .t2 {
        font-size: size(21);
        line-height: 2;
        text-align: left;
        span {
          color: #eb5c20;
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
  .s9 {
    position: relative;
    width: size-m(375);
    height: size-m(613);

    .decor {
      .d1 {
        left: -#{size(180)};
        top: size-m(60);
        width: size-m(140);
      }
      .d2 {
        position: absolute;
        right: size-m(-20);
        top: -#{size-m(30)};
        bottom: unset;
        width: size-m(100);
      }
      .title {
        font-size: size-m(15);
        top: size-m(72);
        left: size-m(55);
      }
    }
    .main {
      width: size-m(288.75);
      flex-direction: column;
      .left {
        .swiper-box {
          .swiper-container {
            width: size-m(288.75);
            height: size-m(275.28);
            .swiper-slide {
              background-size: cover;
            }
          }
          .swiper-pagination {
            right: -#{size-m(10)};
            .swiper-pagination-bullet {
              width: size-m(5);
              height: size-m(5);
              border: 1px solid #eb5c20;
              margin-top: size-m(3);

              &.swiper-pagination-bullet-active {
                background: #eb5c20;
              }
            }
          }
        }
        .caption {
          bottom: -#{size-m(15)};
          font-size: size-m(12);
        }
      }
      .right {
        margin-left: 0;
        margin-top: size-m(41);
        .t1 {
          font-size: size-m(20);
          writing-mode: horizontal-tb;
          text-align: center;
          margin-bottom: size-m(20);
          span {
            font-size: size-m(16);
          }
        }
        .t2 {
          font-size: 11px;
          line-height: 1.5;
          text-align: center;
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
import Parallax from "parallax-js";

export default {
  name: "s9",
  props: ["scrollInstance"],
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
      swiperIndex: 0,
      swiperOption: {
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".s9 .swiper-pagination",
          clickable: true,
        },
      },
      imgs: [
        {
          img: require("@/projects/renai/s9/1.jpg"),
          caption: "城市美學推手 黃明智",
        },
        {
          img: require("@/projects/renai/s9/3.jpg"),
          caption: "南京六福居",
        },
        {
          img: require("@/projects/renai/s9/2.jpg"),
          caption: "友座臻璽",
        },
        {
          img: require("@/projects/renai/s9/4.jpg"),
          caption: "白玉別苑",
        },
      ],
    };
  },

  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
    slideChangeTransitionStart() {
      const idx = this.$refs.swiper.$swiper.realIndex;
      this.swiperIndex = idx;
    },
  },

  mounted() {
    setTimeout(() => {
      if (isMobile) {
        return;
      }
      // $(".parallax-item").addClass("no-delay");
      var scene = this.$refs.s9;
      new Parallax(scene, {
        relativeInput: true,
        selector: ".parallax-item",
      });
    }, 1500);
  },

  created() {},
};
</script>
