<template>
  <div class="s5">
    <div class="bg"></div>
    <div class="bg2"></div>
    <div class="text">
      <div class="t1" data-aos="flip-up" data-aos-delay="200">SPACE</div>
      <div class="t2" data-aos="flip-up" data-aos-delay="500">
        全齡共好哲學 國際品味美學
      </div>
      <div class="t3" data-aos="flip-up" data-aos-delay="800">
        「家人」是我們規劃所有空間的唯一主角，以全年齡層為發想，設計出各個人生階段，從小嬰兒到阿公阿嬤都常使用的公設，並透過窗景、廊道，引進基地周邊的自然風光，讓公設能跟景色互動，帶來更立體的生活感。
      </div>
    </div>
    <div class="swipe-box" data-aos="flip-up" data-aos-delay="200">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(img, i) in imgs"
          :key="i"
          v-bind:style="{
            backgroundImage: `url('${img.url}')`,
          }"
        >
          <div class="caption">{{ img.caption }}</div>
        </swiper-slide>
        <div
          class="swiper-button-prev"
          slot="button-prev"
          v-if="isMobile"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-delay="800"
          class="swiper-button-next"
          slot="button-next"
        ></div>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s5 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: #000;
  .text {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 3;
    color: #fff;
    top: size(160);
    left: size(290);
    .t1 {
      font-size: size(92);
      font-weight: 1000;
    }
    .t2 {
      font-size: size(38);
      font-weight: bold;
      font-family: "Noto serif tc";
      color: #946134;
      margin-top: size(20);
      margin-bottom: size(45);
    }
    .t3 {
      font-size: size(17);
      width: size(451);
      text-align: left;
      line-height: 2;
    }
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 60%;
    height: 100%;
    background-image: url("~@/projects/cfyd/s5/bg.png");
    background-position: left;
    background-size: size(1920);
    z-index: 5;
    pointer-events: none;
  }
  .bg2 {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background-image: url("~@/projects/cfyd/s5/bg.png");
    background-position: right;
    background-size: size(1920);
    z-index: 0;
    pointer-events: none;
  }
  .swipe-box {
    position: absolute;
    right: size(100);
    top: size(150);
    width: size(1014);
    height: size(631);
    .swiper-slide {
      position: relative;
      width: size(1014);
      height: size(631);
      background-size: cover;
      .caption {
        position: absolute;
        font-size: size(17);
        color: #fff;
        left: size(20);
        top: size(15);
      }
    }
    .swiper-button-next {
      width: size(71.39);
      height: size(71.39);
      background-image: url("~@/projects/cfyd/s5/arrow.svg");
      background-size: contain;
      background-repeat: no-repeat;
      transition: all 0.4s;
      &:hover {
        opacity: 0.7;
      }
      &::after {
        content: "";
      }
    }
    &::after {
      content: "";
      position: absolute;
      right: -#{size(25)};
      top: -#{size(25)};
      background: #937c52;
      opacity: 0.3;
      width: 100%;
      height: 100%;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s5 {
    position: relative;
    width: size-m(375);
    height: size-m(465);
    background-color: transparent;
    padding-top: size-m(25);
    .text {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 10;
      color: #fff;
      top: unset;
      left: unset;
      width: 80%;
      margin: 0 auto;
      .t1 {
        font-size: size-m(20);
        font-weight: 1000;
      }
      .t2 {
        font-size: size-m(20);
        font-weight: bold;
        font-family: "Noto serif tc";
        color: #946134;
        margin-top: size-m(10);
        margin-bottom: size-m(25);
      }
      .t3 {
        font-size: size-m(12);
        width: 100%;
        text-align: left;
        line-height: 2;
        margin-bottom: size-m(30);
      }
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("~@/projects/cfyd/s5/bg_m.png");
      background-position: left;
      background-size: cover;
      z-index: 5;
      pointer-events: none;
    }
    .bg2 {
      display: none;
    }
    .swipe-box {
      position: absolute;
      right: 0;
      top: unset;
      bottom: 0;
      width: size-m(375);
      height: size-m(233.42);
      .swiper-slide {
        position: relative;
        width: size-m(375);
        height: size-m(233.42);
        background-size: cover;
        .caption {
          position: absolute;
          font-size: size-m(12);
          color: #fff;
          left: size-m(20);
          top: size-m(10);
        }
      }
      .swiper-button-prev {
        width: size-m(32.37);
        height: size-m(32.37);
        background-image: url("~@/projects/cfyd/s5/arrow.svg") !important;
        background-size: contain;
        background-repeat: no-repeat;
        transition: all 0.4s;
        transform: rotate(180deg);
        &:hover {
          opacity: 0.7;
        }
        &::after {
          content: "";
        }
      }
      .swiper-button-next {
        width: size-m(32.37);
        height: size-m(32.37);
        background-image: url("~@/projects/cfyd/s5/arrow.svg") !important;
        background-size: contain;
        background-repeat: no-repeat;
        transition: all 0.4s;
        &:hover {
          opacity: 0.7;
        }
        &::after {
          content: "";
        }
      }
      &::after {
        content: "";
        position: absolute;
        right: 5%;
        top: -#{size-m(15)};
        background: #937c52;
        opacity: 0.3;
        width: 90%;
        height: 100%;
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
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  name: "s5",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      visual: "",
      swiperOptions: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 50,
        navigation: {
          prevEl: ".s5 .swipe-box .swiper-button-prev",
          nextEl: ".s5 .swipe-box .swiper-button-next",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      imgs: [
        {
          url: require("@/projects/cfyd/s5/1.jpg"),
          caption: "大廳3D示意圖",
        },
        {
          url: require("@/projects/cfyd/s5/2.jpg"),
          caption: "品茗室3D示意圖",
        },
        {
          url: require("@/projects/cfyd/s5/3.jpg"),
          caption: "健身房3D示意圖",
        },
        {
          url: require("@/projects/cfyd/s5/4.jpg"),
          caption: "閱覽家教室3D示意圖",
        },
        {
          url: require("@/projects/cfyd/s5/5.jpg"),
          caption: "交誼廳3D示意圖",
        },
      ],
    };
  },

  methods: {
    // scrollTo(el) {
    //   this.scrollInstance.scrollTo(el);
    // },
  },

  created() { },
  mounted() {
  },
};
</script>