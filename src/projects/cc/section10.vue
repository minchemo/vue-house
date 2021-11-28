<template>
  <div class="section10">
    <img
      class="bg"
      src="@/projects/cc/s10/bg.png"
      uk-parallax="viewport: 0.5;blur:50,0;y: 50,0"
      alt=""
      srcset=""
    />
    <div class="swiper-box">
      <div class="left">
        <img
          class="textimg"
          src="@/projects/cc/s10/textimg.png"
          alt=""
          srcset=""
          uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-200,0;x:200,0"
        />
        <h2 uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-200,0;x:-200,0">
          公設內容<br />後續會補上圖片
        </h2>
        <div
          class="content"
          uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:200,0;x:200,0"
        >
          後續會補上文案，正對頭前國中永久棟距、都心百米林蔭步道搖曳為鄰，一座被豐盈知識與翠綠大樹關照的家，在『青青』學習如何優雅生活、品味從容日常。
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
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section10 {
  position: relative;
  height: auto;
  padding: size(200) 0;

  .bg {
    position: absolute;
    width: size(1920);
    right: 0;
    bottom: -#{size(50)};
  }

  .swiper-box {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    .left {
      width: size(485);
      text-align: left;
      margin-right: size(250);
      .textimg {
        width: size(100);
      }
      h2 {
        font-size: size(50);
        font-weight: 300;
        line-height: 1.3;
        letter-spacing: size(15);
        margin-bottom: size(60);
        margin-top: size(20);
      }
      .content {
        font-size: size(24);
        font-weight: 300;
        line-height: 2;
        letter-spacing: size(10);
      }
    }

    .right {
      .swiper-wrapper {
        width: size(1020);
        height: size(568);
        .slide {
          background-size: cover;
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
  .section10 {
    position: relative;
    height: auto;
    padding: size-m(30) 0;

    .bg {
      display: none;
    }

    .swiper-box {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      flex-direction: column;
      .left {
        width: 80%;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        .textimg {
          width: size-m(75);
        }
        h2 {
          font-size: size-m(19);
          line-height: 1.5;
          letter-spacing: size-m(10);
          margin-bottom: size-m(20);
          margin-top: size-m(40);
        }
        .content {
          font-size: size-m(15);
          font-weight: 300;
          line-height: 1.5;
          letter-spacing: size-m(10);
        }
      }

      .right {
        margin-top: size-m(60);
        margin-left: auto;
        .swiper-wrapper {
          width: size-m(334);
          height: size-m(185.72);

          .slide {
            background-size: cover;
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
  name: "section10",
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
        img: [require("@/projects/cc/s10/1.jpg")],
        caption: [],
      },
      swiperOptions: {
        loop: false,
        speed: 700,
        spaceBetween: 10,
        autoplay: {
          delay: 4500,
        },
      },
    };
  },

  methods: {},

  created() { },
};
</script>
