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
        <div class="t1" data-aos="fade-up" v-if="!isMobile">
          美好生活永不落幕<br />繁華寧靜輕而易舉
        </div>
        <div class="t1" data-aos="fade-up" v-else>
          繁華寧靜輕而易舉<br />美好生活永不落幕
        </div>
        <div
          class="t2"
          data-aos="fade-up"
          data-aos-delay="300"
          v-if="!isMobile"
        >
          紹興南街銜接華山藝文公園、國家兩廳院園區，前後串連北市三條最有價值的東西向大道：忠孝東路、仁愛路、信義路。<br />從〔仁愛旭〕出發，散步3分鐘市長官邸藝文沙龍、6分鐘中正紀念堂園區、8分鐘捷運板南線、10分鐘台灣文學基地，市中心的休閒與便捷近在咫尺。
        </div>
        <div class="t2" data-aos="fade-up" data-aos-delay="300" v-else>
          紹興南街銜接華山藝文公園、國家兩廳院園區，前後串連北市三條最有價值的東西向大道：忠孝東路、仁愛路、信義路。從〔仁愛旭〕出發，散步3分鐘市長官邸藝文沙龍、6分鐘中正紀念堂園區、8分鐘捷運板南線、10分鐘台灣文學基地，市中心的休閒與便捷近在咫尺。
        </div>
      </div>
    </div>
    <div class="decor parallax-item" data-depth="0.25">
      <img
        loading="lazy"
        class="d1"
        data-aos="fade"
        src="@/projects/renai/s7/decor1.svg"
        alt=""
        srcset=""
      />
      <img
        loading="lazy"
        v-if="!isMobile"
        class="d2"
        data-aos="fade"
        src="@/projects/renai/s7/decor3.svg"
        alt=""
        srcset=""
      />
      <img
        loading="lazy"
        v-else
        class="d2"
        data-aos="fade"
        src="@/projects/renai/s7/decor4.svg"
        alt=""
        srcset=""
      />
      <div class="title" data-aos="fade" data-aos-delay="300">藝文捷境</div>
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
    height: size-m(613);

    .decor {
      .d1 {
        left: -#{size(180)};
        top: size-m(70);
        width: size-m(140);
      }
      .d2 {
        position: absolute;
        right: size-m(10);
        top: -#{size-m(50)};
        bottom: unset;
        width: size-m(140.79);
      }
      .title {
        font-size: size-m(15);
        top: size-m(82);
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
  name: "s7",
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
          el: ".s7 .swiper-pagination",
          clickable: true,
        },
      },
      imgs: [
        {
          img: require("@/projects/renai/s7/1.jpg"),
          caption: "國家兩廳院",
        },
        {
          img: require("@/projects/renai/s7/2.jpg"),
          caption: "市長官邸藝文沙龍",
        },
        {
          img: require("@/projects/renai/s7/3.jpg"),
          caption: "市長官邸藝文沙龍",
        },
        {
          img: require("@/projects/renai/s7/6.jpg"),
          caption: "台灣文學基地",
        },
        {
          img: require("@/projects/renai/s7/4.jpg"),
          caption: "璞滿滿居酒屋",
        },
        {
          img: require("@/projects/renai/s7/8.jpg"),
          caption: "東和禪寺鐘樓",
        },
        {
          img: require("@/projects/renai/s7/5.jpg"),
          caption: "華山1914文化創意產業園區",
        },
        {
          img: require("@/projects/renai/s7/7.jpg"),
          caption: "捷運板南線善導寺站",
        },
        {
          img: require("@/projects/renai/s7/9.jpg"),
          caption: "台北市青少年發展處攀岩場",
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
      var scene = this.$refs.s7;
      new Parallax(scene, {
        relativeInput: true,
        selector: ".parallax-item",
      });
    }, 1500);
  },

  created() {},
};
</script>
