<template>
  <div class="subsection">
    <div class="txt">
    <div class="title">飯店式物管 尊榮級公設</div>
    <div class="desc">氣派挑高大廳、專業物管恭迎主人歸來，榮寵來訪賓客，「朗朗城心」專為講究品味的您，留下一席讓身心棲息充電的處所，營造在家即是渡假的愜意感受。</div>
    </div>
    
    <div class="swiper-box" data-aos-duration="1000" data-aos="fade-down">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(imgList, i) in imgList"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${imgList})`,
          }"
        >
        <div class="name">建設公司業績參考圖</div>
        </swiper-slide>
        <div class="swiper-button-next" slot="button-next">
          <img src="~@/projects/llcs/s4/next_btn.svg" alt="" srcset="" />
        </div>
        <div class="swiper-button-prev" slot="button-prev">
          <img src="~@/projects/llcs/s4/prev_btn.svg" alt="" srcset="" />
        </div>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.subsection {
  height: auto;
  display: flex;
  flex-direction:column;

  .swiper-box {
    order:2;
    position: relative;
    width: 80vw;
    margin: 0 auto;
    .swiper-slide {
      height: 0;
      padding-bottom: 44.54%;
      background-size: cover;
      background-position: center;
      .name{
      position: absolute;
      bottom: 0.5em;left:1em;
      color: #fff;
      font-size: calc(1500vw / 1920);
      opacity: 0.8;
      }
    }
  }
  .txt{
    order:3;
    display: flex;
    width: 80vw;
border: solid #005e3c;;
border-width: 0 2px 2px 0;
padding: 0 1em 0.5em 0;
margin: 1.5em auto 1em auto;
    align-items:center;
    justify-content:space-between;
        font-size: calc(2200vw / 1920);
        line-height: 1.5;

      .title {
        font-size:2.5em;
        font-family: "Noto Serif TC";
        color:#005e3c;
        font-weight: bold;
        text-align: left;
        line-height: 1.3;
        white-space: nowrap;
      }
      .desc {
        color:#333;
        font-weight:400;
        text-align: justify;
        width: 35em;
      }

  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
.subsection {
  height: auto;

  .swiper-box {
    position: relative;
    width: 100vw;
    margin: 0 auto;
    .swiper-slide {
      height: 0;
      padding-bottom: 61.41%;
      background-size: cover;
      background-position: center;
      .name{
      font-size: calc(1200vw / 375);
      }
    }
  }
  .txt{
    order:1;
    width: 90vw;
    font-size: calc(1500vw / 375);
    flex-wrap:wrap;
    padding: 0;
    border: 0;
      .title {
        font-size:2em;
        width: 100%;
        text-align: center;
        &::after{content:"";
        margin: .45em auto .5em auto;
        width: 6em;height: 3px; background: currentColor;display: block;}
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
  name: "subsection",

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
      imgList: [
        require("@/projects/llcs/s6/sb2/1.jpg"),
        require("@/projects/llcs/s6/sb2/2.jpg"),
        require("@/projects/llcs/s6/sb2/3.jpg"),
        require("@/projects/llcs/s6/sb2/4.jpg"),
        require("@/projects/llcs/s6/sb2/5.jpg"),
        require("@/projects/llcs/s6/sb2/6.jpg"),
        require("@/projects/llcs/s6/sb2/7.jpg"),
        require("@/projects/llcs/s6/sb2/8.jpg"),
      ],
      swiperOptions: {
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      },
    };
  },

  methods: {},

  created() {},
};
</script>
