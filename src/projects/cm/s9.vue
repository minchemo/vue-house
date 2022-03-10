<template>
  <div class="s9">
    <div class="swiper-box" data-aos="zoom-in">
      <swiper
        @slideChangeTransitionStart="slideChangeTransitionStart"
        :options="swiperOptions"
        ref="swiper"
        class="swiper-wrapper"
      >
        <swiper-slide
          class="slide"
          v-for="(slide, i) in imgs"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${slide})`,
          }"
        >
        </swiper-slide>
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
      <img
        class="large-title"
        src="~@/projects/cm/s9/title.svg"
        alt="藏美表參道"
        srcset=""
        data-aos="zoom-in"
      />
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
.s9 {
  position: relative;
  width: size(1920);
  height: size(1080);
  padding-top: size(100);

  .swiper-box {
    position: relative;
    width: size(1345.25);
    margin: 0 auto;
    .swiper-wrapper {
      .slide {
        width: size(1345.25);
        height: size(610.35);
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
        border: 1.5px solid #182c80;
        margin-bottom: size(20);
        &.swiper-pagination-bullet-active {
          background-color: #182c80;
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
        background: rgba($color: #182c80, $alpha: 0.5);
        color: #fff;
        &.active {
          background: rgba($color: #182c80, $alpha: 1);
        }
        &:hover {
          background: rgba($color: #182c80, $alpha: 1);
          cursor: pointer;
        }
      }
    }
    .large-title {
      height: size(220);
      position: absolute;
      right: -#{size(150)};
      top: -#{size(150)};
      z-index: 1;
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
      color: #182c80;
      float: left;
      font-weight: 500;
      display: block;
      padding: 0 0 0 0.5em;
      margin-left: 3em;
      margin-right: 3em;
      border-left: 0.18em solid currentColor;
      font-family: "Noto Serif TC", sans-serif;
      font-weight: 800;
      text-align: right;
      white-space: nowrap;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s9 {
    position: relative;
    width: size-m(375);
    height: size-m(667);
    padding-top: 0;

    .swiper-box {
      position: relative;
      width: size-m(375);
      margin: 0 auto;
      .swiper-wrapper {
        .slide {
          width: size-m(302);
          height: size-m(292);
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
          border: 1.5px solid #182c80;
          margin-bottom: 0;
          margin-top: size-m(10);
          margin-right: size-m(8);
          &.swiper-pagination-bullet-active {
            background-color: #182c80;
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
          font-size: size(25);
          background: rgba($color: #182c80, $alpha: 0.5);
          flex-shrink: 0;
          color: #fff;
          &.active {
            background: rgba($color: #182c80, $alpha: 1);
          }
          &:hover {
            background: rgba($color: #182c80, $alpha: 1);
            cursor: pointer;
          }
        }
      }
      .large-title {
        width: 80%;
        height: auto;
        position: absolute;
        left: 5%;
        top: -6.5%;
        z-index: 1;
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
  name: "s9",

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
          el: ".s9 .swiper-pagination",
          clickable: true,
        },
      },
      captions: [
        "台北南山廣場",
        "日本表參道商圈情境氛圍示意圖",
        "商圈情境氛圍示意圖",
      ],
      imgIdx: 0,
      imgs: [
        isMobile
          ? require("@/projects/cm/s9/1_m.jpg")
          : require("@/projects/cm/s9/1.jpg"),
        isMobile
          ? require("@/projects/cm/s9/1_m.jpg")
          : require("@/projects/cm/s9/1.jpg"),
        isMobile
          ? require("@/projects/cm/s9/1_m.jpg")
          : require("@/projects/cm/s9/1.jpg"),
      ],
      caption: [
        {
          btn: "24坪 / 兩房",
          title: "高坪效時尚美學<br/>超規格國際品味",
          desc: "●新日式休閒2房，奢擁雙衛浴，客餐廳、雙臥室均有採光通風，靈巧空間五臟俱全，動線流暢絲毫不浪費 ●現代時尚邊間3房，雙面採光，雙衛乾爽開窗，可規劃衣帽間 ●義式精品雙陽台3房，雙面採光，主臥四件式衛浴，開闊客餐廳空間，媲美透天機能享受",
        },
        {
          btn: "28坪 / 三房",
          title: "高坪效時尚美學<br/>超規格國際品味",
          desc: "●新日式休閒2房，奢擁雙衛浴，客餐廳、雙臥室均有採光通風，靈巧空間五臟俱全，動線流暢絲毫不浪費 ●現代時尚邊間3房，雙面採光，雙衛乾爽開窗，可規劃衣帽間 ●義式精品雙陽台3房，雙面採光，主臥四件式衛浴，開闊客餐廳空間，媲美透天機能享受",
        },
        {
          btn: "35坪 / 三房",
          title: "高坪效時尚美學<br/>超規格國際品味",
          desc: "●新日式休閒2房，奢擁雙衛浴，客餐廳、雙臥室均有採光通風，靈巧空間五臟俱全，動線流暢絲毫不浪費 ●現代時尚邊間3房，雙面採光，雙衛乾爽開窗，可規劃衣帽間 ●義式精品雙陽台3房，雙面採光，主臥四件式衛浴，開闊客餐廳空間，媲美透天機能享受",
        },
      ],
    };
  },

  methods: {
    slideChangeTransitionStart(idx, idx2) {
      this.imgIdx = this.$refs.swiper.$swiper.realIndex;
    },
    swipeTo(i) {
      this.$refs.swiper.$swiper.slideTo(i, 500, false);
      this.imgIdx = i;
    },
  },

  created() {},
};
</script>
