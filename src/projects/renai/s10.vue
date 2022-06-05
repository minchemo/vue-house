<template>
  <div class="s10" ref="s10">
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
          <span>靜中觸動點醒建築內部表情</span><br />源質設計主持 林大鈞
        </div>
        <div class="t1" data-aos="fade-up" v-else>
          源質設計主持 林大鈞<br /><span>靜中觸動點醒建築內部表情</span>
        </div>
        <div class="t2" data-aos="fade-up" data-aos-delay="300">
          重視公設引領的安定力量，使回家之人感受沉靜，不僅從氛圍影響心境，同時符合日常所需，進而贊襄建築品位錦上添花。<br /><br />
          ｜業績作品｜<br />
          中正區｜<span>中正國璽</span> <br />
          大安區｜<span>敦南御所</span><br />
          中山區｜<span>大直銘家</span>
        </div>
      </div>
    </div>
    <div class="decor parallax-item" data-depth="0.25">
      <img
        loading="lazy"
        class="d1"
        data-aos="fade"
        src="@/projects/renai/s10/decor4.svg"
        alt=""
        srcset=""
      />
      <img
        loading="lazy"
        v-if="isMobile"
        class="d2"
        data-aos="fade"
        src="@/projects/renai/s10/decor2.svg"
        alt=""
        srcset=""
      />
      <div class="title" data-aos="fade" data-aos-delay="300">住戶本位</div>
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
.s10 {
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
      right: -#{size(130)};
      top: size(85);
      width: size(557);
    }
    .d2 {
      position: absolute;
      left: -#{size(70)};
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
      right: size(240);
    }
  }
  .main {
    width: size(1696);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row-reverse;
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
          left: -#{size(30)};
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
        right: 0;
        bottom: -#{size(30)};
        font-size: size(21);
      }
    }
    .right {
      margin-right: size(115);
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
  .s10 {
    position: relative;
    width: size-m(375);
    height: size-m(613);

    .decor {
      .d1 {
        right: -#{size(130)};
        top: size-m(60);
        width: size-m(140);
      }
      .d2 {
        position: absolute;
        left: -#{size-m(10)};
        top: -#{size-m(50)};
        width: size-m(92);
      }
      .title {
        font-size: size-m(15);
        top: size-m(72);
        right: size-m(65);
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
            left: -#{size-m(10)};
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
        margin-right: 0;
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
  name: "s10",
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
          el: ".s10 .swiper-pagination",
          clickable: true,
        },
      },

      imgs: [
        {
          img: require("@/projects/renai/s10/1.jpg"),
          caption: "中山世紀",
        },
        {
          img: require("@/projects/renai/s10/2.jpg"),
          caption: "富貴百代",
        },
        {
          img: require("@/projects/renai/s10/3.jpg"),
          caption: "富利百代",
        },
        {
          img: require("@/projects/renai/s10/4.jpg"),
          caption: "南京75",
        },
        {
          img: require("@/projects/renai/s10/4.jpg"),
          caption: "青山通",
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
      var scene = this.$refs.s10;
      new Parallax(scene, {
        relativeInput: true,
        selector: ".parallax-item",
      });
    }, 1500);
  },

  created() {},
};
</script>
