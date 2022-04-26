<template>
  <div class="section9">
    <img
      v-if="!isMobile"
      class="bg"
      src="@/projects/cc/s9/bg.png"
      uk-parallax="viewport: 0.5;blur:50,0;y: 50,0"
      alt=""
      srcset=""
    />
    <img
      v-else
      class="bg"
      src="@/projects/cc/s9/bg-mo.png"
      uk-parallax="viewport: 0.5;blur:50,0;y: 50,0"
      alt=""
      srcset=""
    />
    <div class="swiper-box">
      <div class="left">
        <img
          class="textimg"
          src="@/projects/cc/s9/textimg.png"
          alt=""
          srcset=""
          uk-parallax="viewport: 0.3;blur:40,0;y:-200,0"
        />
        <h2 uk-parallax="viewport: 0.3;blur:40,0;y:-200,0">
          會呼吸的<br />濃綠系青建築
        </h2>
        <div class="content" uk-parallax="viewport: 0.3;blur:40,0;y:200,0">
          順著天空滑落的有機曲面呼應校園與純住宅區軟性氛圍。建築引進日光、風動、水景，空間流轉中消弭了內外分界，居住心境在此獲得全然舒展。
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
            <p>建築外觀3D情境示意</p>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section9 {
  position: relative;
  height: auto;
  padding: size(200) 0;

  .bg {
    position: absolute;
    width: size(302);
    right: 0;
    top: 0;
  }

  .swiper-box {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: row-reverse;
    .left {
      width: size(485);
      text-align: left;
      margin-left: size(250);
      .textimg {
        width: size(100);
      }
      h2 {
        font-size: size(50);
        font-weight: 500;
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
          p {
            font-size: size(15);
            position: absolute;
            right: size(20);
            bottom: size(16);
            color: #fff;
            filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8));
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
  .section9 {
    position: relative;
    height: auto;
    padding: size-m(30) 0;

    .bg {
      position: absolute;
      width: 100%;
      right: 0;
      top: size-m(20);
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
          font-size: size-m(22);
          line-height: 1.5;
          letter-spacing: size-m(10);
          margin-bottom: size-m(20);
          margin-top: size-m(40);
          letter-spacing: 0.2em;
        }
        .content {
          font-size: size-m(15);
          font-weight: 300;
          line-height: 1.5;
          letter-spacing: 0.1em;
          text-align: justify;
        }
      }

      .right {
        margin-top: size-m(60);
        margin-right: auto;
        .swiper-wrapper {
          width: size-m(334);
          height: size-m(185.72);

          .slide {
            background-size: cover;
            p {
              font-size: size-m(15);
              right: unset;
              left: size-m(8);
              bottom: size-m(8);
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
  name: "section9",
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
        img: [require("@/projects/cc/s9/1.jpg")],
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
