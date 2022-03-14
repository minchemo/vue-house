<template>
  <div class="s6">
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
        <swiper
          :options="swiperOptions2"
          ref="swiper2"
          class="swiper-wrapper"
          @click-slide="swipeTo"
        >
          <swiper-slide
            class="btn"
            v-for="(item, i) in caption"
            :key="i"
            v-bind:class="{ active: imgIdx == i }"
          >
            {{ item.btn }}
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div data-aos="zoom-in" class="large-title"><span>MASTERPIECE</span></div>
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
.s6 {
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
      bottom: 20%;
      left: -#{size(50)};
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
      // display: grid;
      // grid-template-columns: repeat(6, 1fr);
      background: #fff;
      .swiper-wrapper {
        width: 100%;
      }
      .swiper-container {
        width: 100%;
      }
      .btn {
        font-family: "Noto Serif TC";
        display: flex;
        align-items: center;
        justify-content: center;
        height: size(77);
        font-size: size(25);
        width: auto;
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
      position: absolute;
      left: size(-150);
      top: size(-100);
      z-index: 1;
      color: #182c80;
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
    .title {
      font-size: 1.5em;
      color: #182c80;
      float: left;
      font-weight: 500;
      display: block;
      padding: 0 0.5em 0 0;
      margin: 0 3em 0 0;
      border-right: 0.18em solid currentColor;
      font-family: "Noto Serif TC", sans-serif;
      font-weight: 800;
      text-align: right;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s6 {
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
        flex-wrap: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
        max-width: 100%;
        position: relative;
        z-index: 15;

        .btn {
          font-family: "Noto Serif TC";
          display: flex;
          align-items: center;
          justify-content: center;
          height: size-m(36);
          width: size-m(105);
          font-size: size-m(14);
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
        left: 0;
        right: 0;
        width: 100%;
        top: size-m(-40);
        text-align: center;
        font-size: size-m(50);
        letter-spacing: 0;
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
  name: "s6",

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
          el: ".s6 .swiper-pagination",
          clickable: true,
        },
      },
      swiperOptions2: {
        speed: 1000,
        breakpoints: {
          300: {
            loop: true,
            centeredSlides: true,
            slidesPerView: 3.5,
            spaceBetween: 0,
          },
          1000: {
            centeredSlides: false,
            slidesPerView: 6,
            loop: false,
            spaceBetween: 0,
          },
        },
      },
      imgIdx: 0,
      imgs: [
        {
          img: [
            //第1張, index=0
            isMobile
              ? require("@/projects/cm/s6/a/01_m.jpg")
              : require("@/projects/cm/s6/a/01.jpg"),
            //第2張, index=1
            isMobile
              ? require("@/projects/cm/s6/a/02_m.jpg")
              : require("@/projects/cm/s6/a/02.jpg"),
            //第3張, index=2
            isMobile
              ? require("@/projects/cm/s6/a/03_m.jpg")
              : require("@/projects/cm/s6/a/03.jpg"),
            //第4張，只有手機版有, index=3
            require("@/projects/cm/s6/a/04_m.jpg"),
          ],
          mobileOnly: [3], //填入只有手機版有的index就可以
        },
        {
          img: [
            isMobile
              ? require("@/projects/cm/s6/b/01_m.jpg")
              : require("@/projects/cm/s6/b/01.jpg"),
            isMobile
              ? require("@/projects/cm/s6/b/02_m.jpg")
              : require("@/projects/cm/s6/b/02.jpg"),
            isMobile
              ? require("@/projects/cm/s6/b/03_m.jpg")
              : require("@/projects/cm/s6/b/03.jpg"),
            require("@/projects/cm/s6/b/04_m.jpg"),
          ],
          mobileOnly: [3],
        },
        {
          img: [
            isMobile
              ? require("@/projects/cm/s6/c/01_m.jpg")
              : require("@/projects/cm/s6/c/01.jpg"),
            isMobile
              ? require("@/projects/cm/s6/c/02_m.jpg")
              : require("@/projects/cm/s6/c/02.jpg"),
            isMobile
              ? require("@/projects/cm/s6/c/03_m.jpg")
              : require("@/projects/cm/s6/c/03.jpg"),
            require("@/projects/cm/s6/c/04_m.jpg"),
            require("@/projects/cm/s6/c/05_m.jpg"),
          ],
          mobileOnly: [3, 4],
        },
        {
          img: [
            isMobile
              ? require("@/projects/cm/s6/d/01_m.jpg")
              : require("@/projects/cm/s6/d/01.jpg"),
            isMobile
              ? require("@/projects/cm/s6/d/02_m.jpg")
              : require("@/projects/cm/s6/d/02.jpg"),
            isMobile
              ? require("@/projects/cm/s6/d/03_m.jpg")
              : require("@/projects/cm/s6/d/03.jpg"),
            require("@/projects/cm/s6/d/04_m.jpg"),
            require("@/projects/cm/s6/d/05_m.jpg"),
          ],
          mobileOnly: [3, 4],
        },
        {
          img: [
            isMobile
              ? require("@/projects/cm/s6/e/01_m.jpg")
              : require("@/projects/cm/s6/e/01.jpg"),
            isMobile
              ? require("@/projects/cm/s6/e/02_m.jpg")
              : require("@/projects/cm/s6/e/02.jpg"),
            isMobile
              ? require("@/projects/cm/s6/e/03_m.jpg")
              : require("@/projects/cm/s6/e/03.jpg"),
            require("@/projects/cm/s6/e/04_m.jpg"),
          ],
          mobileOnly: [3],
        },
        {
          img: [
            isMobile
              ? require("@/projects/cm/s6/f/01_m.jpg")
              : require("@/projects/cm/s6/f/01.jpg"),
            isMobile
              ? require("@/projects/cm/s6/f/02_m.jpg")
              : require("@/projects/cm/s6/f/02.jpg"),
            isMobile
              ? require("@/projects/cm/s6/f/03_m.jpg")
              : require("@/projects/cm/s6/f/03.jpg"),
            require("@/projects/cm/s6/f/04_m.jpg"),
          ],
          mobileOnly: [3],
        },
      ],
      caption: [
        {
          btn: "營建顧問",
          title: "CONSTRUCTION<br/>日商台灣大林組",
          desc: "日本綜合建設龍首，創立至今超過130年，超過一世紀的職人精神，精鑄實績遍及全球國際地標、頂級酒店、高級住宅及超高層商辦。",
        },
        {
          btn: "建築規劃",
          title: "BUILDING<br/>大磊建築師事務所",
          desc: "台南美術館擘劃家，熟稔綠建築工法，屢獲國際認證與國家肯定。悉心考量坐向與起居動線，極大化住家開窗面，勾勒舒適生活場域。",
        },
        {
          btn: "立面美學",
          title: "ELEVATION<br/>玫格建築師事務所",
          desc: "日本一級建築士前田利、土井教次、張家豪、楊惠華建築師雜揉跨國設計思維，激盪日式基因建築，以沉穩低彩色調與金屬格柵，構織當代語彙。",
        },
        {
          btn: "公設設計",
          title: "INTERIOR DESIGN<br/>衡美室內裝修企業",
          desc: "操刀無數全球五星酒店與高價地標豪宅，完美施作國際精品店面，超過40年空間規劃經驗，玩轉國際飯店語彙，形塑超規格尺度享受。",
          mobileOnly: false,
        },
        {
          btn: "庭園景觀",
          title: "LANDSCAPE<br/>頤和設計有限公司",
          desc: "上市建商指名御用，2006年成立至今，創造無數經典園藝風采。移植億萬頂級生態蘊境，譜寫引綠入心的馥郁層次，再現東京表參道的幽靜綠意。",
        },
        {
          btn: "結構設計",
          title: "STRUCTURE<br/>科建聯合工程顧問",
          desc: "科建視結構設計為藝術品，精準掌握建築創新與結構安全的平衡點，提供專業樓層鋼筋體檢，捍衛每座建築不可撼動的根基。",
        },
      ],
    };
  },

  methods: {
    // slideChangeTransitionStart(idx, idx2) {
    //   this.imgIdx = this.$refs.swiper.$swiper.realIndex;
    // },
    swipeTo(index, r_index) {
      console.log(r_index);
      this.$refs.swiper.$swiper.slideTo(0, 500, false);
      this.$refs.swiper2.$swiper.slideTo(index, 500, false);
      if (r_index) {
        this.imgIdx = r_index;
      } else {
        this.imgIdx = index;
      }
    },
  },

  created() {},
};
</script>
