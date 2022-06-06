<template>
  <div class="s11" ref="s11">
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
          品吾綠境界<br />以無爭之美
        </div>
        <div class="t1" data-aos="fade-up" v-else>
          品吾綠境界<br />以無爭之美
        </div>
        <div class="t2" data-aos="fade-up" data-aos-delay="300">
          〔仁愛旭〕所在街廓綠葉成蔭，建築師黃明智細心體察基地環境，佈劃饒富東方禪意的木石質感交織，巧妙牽起自然綠意和建築綠化，細緻雕琢雅致清朗的淡色外觀，樹立尊重地理氛圍的「輕建築」，以謙和設計還給生活一片綠。
        </div>
      </div>
    </div>
    <div class="decor parallax-item" data-depth="0.25">
      <img
        loading="lazy"
        class="d1"
        data-aos="fade"
        src="@/projects/renai/s11/decor1.svg"
        alt=""
        srcset=""
      />
      <img
        loading="lazy"
        v-if="!isMobile"
        class="d2"
        data-aos="fade"
        src="@/projects/renai/s11/decor3.svg"
        alt=""
        srcset=""
      />
      <img
        loading="lazy"
        v-else
        class="d2"
        data-aos="fade"
        src="@/projects/renai/s11/decor4.svg"
        alt=""
        srcset=""
      />
      <div class="title" data-aos="fade" data-aos-delay="300">共好建築</div>
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
.s11 {
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
  .s11 {
    position: relative;
    width: size-m(375);
    height: size-m(613);

    .decor {
      .d1 {
        left: -#{size(180)};
        top: size-m(80);
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
        top: size-m(92);
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
          bottom: -#{size-m(30)};
          font-size: size-m(12);
        }
      }
      .right {
        margin-left: 0;
        margin-top: size-m(50);
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
  name: "s11",
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
          el: ".s11 .swiper-pagination",
          clickable: true,
        },
      },
      imgs: [
        {
          img: require("@/projects/renai/s11/1.jpg"),
          caption: "〔仁愛旭〕建物外觀3D效果參考示意圖，周遭環境係電腦合成示意表現",
        },
        {
          img: require("@/projects/renai/s11/2.jpg"),
          caption: "〔仁愛旭〕建物外觀3D效果參考示意圖，周遭環境係電腦合成示意表現",
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
      var scene = this.$refs.s11;
      new Parallax(scene, {
        relativeInput: true,
        selector: ".parallax-item",
      });
    }, 1500);
  },

  created() {},
};
</script>
