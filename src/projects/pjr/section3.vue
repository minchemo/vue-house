<template>
  <div class="section3">
    <div class="info">
      <h2 v-html="activeSlide.title"></h2>
      <div class="divider"></div>
      <p v-html="activeSlide.content"></p>
    </div>
    <div class="swiper-box">
      <swiper
        :options="swiperOptions"
        ref="swiper"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide
          class="slide"
          v-for="(slide, i) in slides"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${slide.img})`,
          }"
        >
          <div class="caption" data-aos="fade" data-aos-duration="200">
            {{ slide.caption }}
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section3 {
  background-color: #d2dee0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  .info {
    text-align: left;
    width: size(440);
    margin-left: size(80);
    margin-top: size(160);
    height: size(600);
    h2 {
      text-align: center;
      font-size: size(50);
      font-weight: 400;
      line-height: 1.2;
      color: #267f98;
      white-space: nowrap;
    }
    .divider {
      background: #009be4;
      width: size(560);
      height: 1px;
      margin: size(20) 0;
      margin-left: -#{size(80)};
    }
    p {
      font-size: size(26);
      letter-spacing: size(3);
      font-weight: 300;
      line-height: 2;
      color: #231815;
    }
  }
  .swiper-box {
    width: size(1278);
    .swiper-container {
      padding: size(100) 0;
      margin: size(100) 0;
      .slide {
        height: 0;
        padding-bottom: 66%;
        background-size: cover;
        .caption {
          position: absolute;
          z-index: 1;
          color: #fff;
          right: size(40);
          bottom: size(30);
          font-size: size(20);
          font-weight: 200;
        }
      }
      .swiper-button-prev {
        left: size(50);
        color: #fff;
        &::after {
          font-size: size(100);
        }
      }
      .swiper-button-next {
        right: size(50);
        color: #fff;
        &::after {
          font-size: size(100);
        }
      }

      .swiper-pagination {
        .swiper-pagination-bullet {
          border-radius: 0;
          background: transparent;
          border: 1px solid #267f98;
          width: size(18);
          height: size(18);
          opacity: 1;
          &.swiper-pagination-bullet-active{
            background :#267f98;
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
  name: "section3",

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
      activeSlide: {},
      slides: [
        {
          title: "百年林蔭至高地標<br/>璞真訂製傳世眼界",
          content: `翻閱中山北路世紀繪卷，台灣第一條現代化大道，日本天皇敕使御道，國家外交官道，烜赫人物踏響中山北獨有的貴族身世。人文熟釀的大道胸豁，從昂首邁步到駐足仰望，23層百年樹海之巔，最懂居宅品味的「璞真之道」淬鍊來到。`,
          img: require("@/projects/pjr/s3/1.jpg"),
          caption: "新光三越與誠品生活南西店",
        },
        {
          title: "樹海人文長鏡頭<br/>潛藏一世紀富裕壯遊",
          content: `半輩子縱橫江山，滿胸懷超然際遇，繫念中山北路樹海第一排的窗，台北歷史最淵遠的林蔭大道，心上永恆富裕原鄉。樟楓漫天綠浪開道，企業總部、縉紳豪邸，相偕未來蓬勃盛放。傳奇在腳下波瀾，繁華燈火在側，群山濃淡疊翠，頂峰之上，照看歲月寧靜。`,
          img: require("@/projects/pjr/s3/2.jpg"),
          caption: "新光三越與誠品生活南西店",
        },
      ],
      swiperOptions: {
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 3000,
        },
      },
    };
  },

  methods: {
    onSwiperSlideChangeTransitionStart() {
      const activeIndex = this.$refs.swiper.$swiper.activeIndex;
      this.activeSlide = this.slides[activeIndex];
    },
  },

  mounted() {
    this.activeSlide = this.slides[0];
  },

  created() {},
};
</script>
