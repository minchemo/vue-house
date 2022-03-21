<template>
  <div class="s7" ref="s7">
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
        <div class="t1" data-aos="fade-up">好學自然而然<br />知識信手拈來</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="300">
          中正區為北市文教區代表，由頂尖志願台大醫學院領銜，百年名校比比皆是，學術、醫療資源堪稱全台之冠；除了國家級的博物館、圖書館、文學館環列左右，東門國小、弘道國中、成功高中、北一女中等12年國教優質學區亦在四周齊聚一堂。
        </div>
      </div>
    </div>
    <div class="decor parallax-item" data-depth="0.25">
      <img
        class="d1"
        data-aos="fade"
        src="@/projects/renai/s7/decor1.svg"
        alt=""
        srcset=""
      />
      <img
        class="d2"
        data-aos="fade"
        src="@/projects/renai/s7/decor3.svg"
        alt=""
        srcset=""
      />
      <div class="title" data-aos="fade" data-aos-delay="300">飽滿學餐</div>
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
.s7 {
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
      right: size(124);
      top: size(240);
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
      }
      .t2 {
        font-size: size(21);
        line-height: 2;
        text-align: left;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s7 {
    position: relative;
    width: size-m(375);
    height: size-m(720);
    min-height: 0;
    max-height: size-m(812);
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
  name: "s7",
  props: ["scrollInstance"],
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
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
          el: ".s7 .swiper-pagination",
          clickable: true,
        },
      },
      imgs: [
        {
          img: require("@/projects/renai/s7/1.jpg"),
          caption: "台大醫學院"
        },
        {
          img: require("@/projects/renai/s7/2.jpg"),
          caption: "東門國小"
        },
        {
          img: require("@/projects/renai/s7/3.jpg"),
          caption: "弘道國中"
        },
        {
          img: require("@/projects/renai/s7/4.jpg"),
          caption: "北一女中"
        },
        {
          img: require("@/projects/renai/s7/5.jpg"),
          caption: "成功高中"
        },
        {
          img: require("@/projects/renai/s7/6.jpg"),
          caption: "國家圖書館"
        },
        {
          img: require("@/projects/renai/s7/7.jpg"),
          caption: "台灣博物館"
        },
      ]
    };
  },

  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
    slideChangeTransitionStart() {
      const idx = this.$refs.swiper.$swiper.realIndex;
      this.swiperIndex = idx;
    }
  },

  mounted() {
    setTimeout(() => {
      // $(".parallax-item").addClass("no-delay");
      var scene = this.$refs.s7;
      new Parallax(scene, {
        relativeInput: true,
        selector: ".parallax-item",
      });
    }, 1500);
  },

  created() { },
};
</script>
