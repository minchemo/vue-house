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
          uk-parallax="viewport: 0.3;blur:40,0;y:-200,0"
        />
        <h2 uk-parallax="viewport: 0.3;blur:40,0;y:-200,0">
          六星飯店規格<br />都會型奢享空間
        </h2>
        <div class="content" uk-parallax="viewport: 0.3;blur:40,0;y:200,0">
          水景花園、閱讀區、健身房、遊戲室..，德國iF設計獎團隊以新居住思維規劃符合都會型態的多元休閒設施，回家即是奢華享受開始。
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
            <p>{{ slides["caption"][i] }}</p>
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
          font-size: size-m(22);
          line-height: 1.5;
          letter-spacing: 0.1em;
          margin-bottom: size-m(20);
          margin-top: size-m(40);
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
        margin-left: auto;
        .swiper-wrapper {
          width: size-m(334);
          height: size-m(185.72);

          .slide {
            background-size: cover;
            p {
              font-size: size-m(15);
              right: size-m(8);
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
        img: [require("@/projects/cc/s10/1.jpg"), require("@/projects/cc/s10/2.jpg"), require("@/projects/cc/s10/3.jpg"), require("@/projects/cc/s10/4.jpg"), require("@/projects/cc/s10/5.jpg")],
        caption: [
          '大廳3D示意',
          '公設3D示意',
          '健身房3D示意',
          '遊戲室3D示意',
          '水景花園3D示意',
        ],
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
