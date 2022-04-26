<template>
  <div class="section4">
    <div class="swiper-box">
      <div class="left">
        <h2 uk-parallax="viewport: 0.3;blur:40,0;y:-200,0">
          <span>20%</span>純住宅用地<br />新名邸特區誕生
        </h2>
        <div class="content" uk-parallax="viewport: 0.3;blur:40,0;y:200,0">
          副都心商業區繁華富域，僅一方稀有20%住宅用地，稀缺價值與一眼難忘的高端住宅區氛圍令各大建築名家爭藏。並進新富選地哲學在北臺灣下一座名邸特區為自己獨占一席，讓回家成為一種優越。
        </div>
      </div>
      <div class="right">
        <swiper
          :options="swiperOptions"
          ref="swiper"
          class="swiper-wrapper"
          uk-parallax="viewport:0.3;blur:50,0;y:100,0"
        >
          <swiper-slide
            class="slide"
            v-for="(slide, i) in slides.img"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide})`,
            }"
          >
            <!-- <div class="caption" v-if="slide.caption">
              {{ activeSlide.caption }}
            </div> -->
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <img
      class="bg"
      v-lazy
      :temp="
        !isMobile
          ? require('@/projects/cc/s4/bg.png')
          : require('@/projects/cc/s4/bg-mo.png')
      "
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:50,0"
    />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section4 {
  position: relative;
  height: auto;
  padding: size(200) 0;

  .swiper-box {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    .left {
      width: size(485);
      text-align: justify;
      margin-right: size(120);
      h2 {
        font-size: size(61);
        font-weight: 500;
        line-height: 1.2;
        letter-spacing: size(5);
        margin-bottom: size(100);
        span {
          font-size: 1.1em;
          letter-spacing: 0;
        }
      }
      .content {
        font-size: size(24);
        font-weight: 300;
        line-height: 2;
        letter-spacing: size(5);
      }
    }

    .right {
      .swiper-wrapper {
        width: size(1144);
        height: size(538);
        .slide {
          background-size: cover;
        }
      }
    }
  }

  .bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    z-index: -1;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    padding: size-m(100) 0 size-m(49) 0;

    .swiper-box {
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      .left {
        width: 100%;
        margin-right: 0;
        margin-bottom: size-m(30);
        h2 {
          font-size: size-m(22);
          line-height: 1.4;
          letter-spacing: 0.1em;
          margin-bottom: size-m(40);
          padding-right: 0;
          text-align: center;
        }
        .content {
          font-size: size-m(15);
          line-height: 1.7;
          letter-spacing: 0.1em;
          padding: 0 2.2em;
          text-align: justify;
        }
      }

      .right {
        .swiper-wrapper {
          width: size-m(343);
          height: size-m(161.56);
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
  name: "section4",
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
        img: [require("@/projects/cc/s4/2.jpg"), require("@/projects/cc/s4/1.jpg")],
        caption: [],
      },
      swiperOptions: {
        loop: false,
        speed: 700,
        spaceBetween: 10,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
      },
    };
  },

  methods: {},

  created() { },
};
</script>
