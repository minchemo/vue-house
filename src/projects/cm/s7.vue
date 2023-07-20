<template>
  <div class="s7">
    <div class="swiper-box" data-aos="zoom-in">
      <swiper :options="swiperOptions" ref="swiper" class="swiper-wrapper">
        <template v-if="!isMobile">
          <swiper-slide
            class="slide"
            v-for="(slide, i) in imgs[imgIdx]['img'].filter(
              (item, index, array) =>
                imgs[imgIdx]['mobileOnly'].indexOf(index) == -1
            )"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide})`,
            }"
          >
          </swiper-slide>
        </template>
        <template v-else>
          <swiper-slide
            class="slide"
            v-for="(slide, i) in imgs[imgIdx]['img']"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${slide})`,
            }"
          >
          </swiper-slide>
        </template>
      </swiper>
      <div class="buttons">
        <div
          class="btn"
          v-for="(item, i) in caption"
          :key="i"
          v-bind:class="{ active: imgIdx == i }"
          @click="swipeTo(i)"
        >
          {{ item.btn }}
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div data-aos="zoom-in" class="large-title"><span>SERVICE</span></div>
      <div class="txt">
        <div
          class="title"
          data-aos="zoom-in"
          v-html="caption[imgIdx]['title']"
        ></div>
        <div
          class="desc"
          data-aos="zoom-in"
          v-html="caption[imgIdx]['desc']"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s7 {
  position: relative;
  width: 100%;
  height: size(1080);
  padding-top: size(100);

  .swiper-box {
    position: relative;
    width: size(1345.25);
    margin: 0 auto;
    .swiper-wrapper {
      .slide {
        width: size(1223);
        height: size(530);
        background-size: cover;
        p {
          position: absolute;
          right: 0.5em;
          bottom: 0.5em;
          color: #fff;
          font-size: size(15);
          text-shadow: 0 0 0.6em #000, 0 0 0.2em #000;
        }
      }
    }
    .swiper-pagination {
      position: absolute;
      bottom: 24%;
      right: -#{size(50)};
      display: flex;
      flex-direction: column;
      .swiper-pagination-bullet {
        width: size(20.5);
        height: size(20.5);
        background-color: #fff;
        opacity: 1;
        border: 1.5px solid #BF0E44;
        margin-bottom: size(20);
        &.swiper-pagination-bullet-active {
          background-color: #BF0E44;
        }
      }
    }
    .buttons {
      display: flex;
      width: 100%;
      background: #fff;
      .btn {
        width: 100%;
        font-family: "Noto Serif TC";
        display: flex;
        align-items: center;
        justify-content: center;
        height: size(77);
        font-size: size(25);
        background: #E65625;
        color: #fff;
        &.active {
          background: #BF0E44;
        }
        &:hover {
          background: #BF0E44;
          cursor: pointer;
        }
      }
    }
    .large-title {
      position: absolute;
      right: size(-160);
      top: size(-100);
      z-index: 1;
      color: #BF0E44;
      font-size: size(140);
      letter-spacing: 0.17em;
      font-weight: 500;
      text-transform: uppercase;
    }
    .content {
      width: 100%;
      margin-top: size(100);
    }
  }
  .txt {
    margin-top: size(100);
    font-size: size(23);
    transform: scaleY(1);
    text-align: justify;
    line-height: 1.7;
    width: size(1350);
    letter-spacing: 0.1em;
    color: #444;
    font-family: "Noto Serif TC", sans-serif;
    font-weight: 600;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    .title {
      font-size: 1.5em;
      color: #E65625;
      float: left;
      font-weight: 500;
      display: block;
      padding: 0 0 0 0.5em;
      margin-left: 3em;
      margin-right: 3em;
      border-left: 0.18em solid currentColor;
      font-family: "Noto Serif TC", sans-serif;
      font-weight: 800;
      text-align: left;
      white-space: nowrap;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s7 {
    height: size-m(667);
    padding-top: 0;

    .swiper-box {
      position: relative;
      width: size-m(375);
      margin: 0 auto;
      .swiper-wrapper {
        .slide {
          width: size-m(375);
          height: size-m(299.6);
          background-size: cover;
          p {
            font-size: size-m(12);
          }
        }
      }
      .swiper-pagination {
        position: absolute;
        top: size-m(260);
        right: 0;
        width: 100%;
        left: unset;
        justify-content: center;
        display: flex;
        flex-direction: row;

        .swiper-pagination-bullet {
          width: size-m(9);
          height: size-m(9);
          background-color: #fff;
          opacity: 1;
          border: 1.5px solid #BF0E44;
          margin-bottom: 0;
          margin-top: size-m(10);
          margin-right: size-m(8);
          &.swiper-pagination-bullet-active {
            background-color: #BF0E44;
          }
        }
      }
      .buttons {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        width: 100%;
        z-index: 15;
        position: relative;

        .btn {
          font-family: "Noto Serif TC";
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          height: size-m(36);
          width: 100%;
          font-size: size-m(14);
          background: #E65625;
          flex-shrink: 0;
          color: #fff;
          &.active {
            background: #BF0E44;
          }
          &:hover {
            background: #BF0E44;
            cursor: pointer;
          }
        }
      }
      .large-title {
        left: size-m(-100);
        top: size-m(-40);
        font-size: size-m(50);
      }
      .content {
        width: 100%;
        margin-top: size-m(50);
      }
    }
    .txt {
      font-size: size-m(14);
      width: 80%;
      left: 10%;
      margin: auto;
      margin-top: size-m(50);
      display: block;

      .title {
        font-size: 1.4em;
        padding: 0 0 0 0.5em;
        border-left: 0.18em solid currentColor;
        border-right: 0;
        float: none;
        text-align: left;
        margin: size-m(30) 0 0.9em 0;
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
  name: "s7",

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
      swiperOptions: {
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-nav .next",
          prevEl: ".swiper-nav .prev",
        },
        pagination: {
          el: ".s7 .swiper-pagination",
          clickable: true,
        },
      },
      imgIdx: 0,
      imgs: [
        {
          img: [
            //第1張, index=0
            isMobile
              ? require("@/projects/cm/s7/a/01_m.jpg")
              : require("@/projects/cm/s7/a/01.jpg"),
            //第2張, index=1
            isMobile
              ? require("@/projects/cm/s7/a/02_m.jpg")
              : require("@/projects/cm/s7/a/02.jpg"),
            //第3張, index=2
            isMobile
              ? require("@/projects/cm/s7/a/03_m.jpg")
              : require("@/projects/cm/s7/a/03.jpg"),
            //第4張，只有手機版有, index=3
            require("@/projects/cm/s7/a/04_m.jpg"),
          ],
          mobileOnly: [3], //填入只有手機版有的index就可以
        },
        {
          img: [
            //第1張, index=0
            //第2張, index=1
            isMobile
              ? require("@/projects/cm/s7/b/02_m.jpg")
              : require("@/projects/cm/s7/b/02.jpg"),
            //第3張, index=2
            isMobile
              ? require("@/projects/cm/s7/b/03_m.jpg")
              : require("@/projects/cm/s7/b/03.jpg"),
            //第4張，只有手機版有, index=3
            require("@/projects/cm/s7/b/04_m.jpg"),
            require("@/projects/cm/s7/b/05_m.jpg"),
          ],
          mobileOnly: [2, 3], //填入只有手機版有的index就可以
        },
      ],
      caption: [
        {
          btn: "雲端管家",
          title: "LIFESTYLE<br/>台南晶英酒店",
          desc: "「藏美表參道」導入台南晶英酒店「雲端管家」，透過住戶專屬平台，將星級飯店服務延伸到府，形塑極緻生活美學，引領社區成為台南品味標竿。",
        },
        {
          btn: "物業管理",
          title: "MANAGEMENT<br/>伯克錸物業管理服務",
          desc: "精緻物管服務的家，才匹配您的身份。伯克錸專業團隊進駐，引入星級飯店禮遇，提供無微不至的呵護，實績遍佈全台近200座高級住宅。",
        },
      ],
    };
  },

  methods: {
    swipeTo(i) {
      this.$refs.swiper.$swiper.slideTo(1, 500, false);
      this.imgIdx = i;
    },
  },

  created() {},
};
</script>
