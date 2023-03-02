<template>
  <article class="s4">
    <div class="main" data-aos="fade">
      <div class="t1" data-aos="fade-down" data-aos-delay="200">世界級森林公園特區</div>
      <img class="t2" data-aos="fade-down" data-aos-delay="400" src="@/section/s4/internationalpark.svg" alt="" srcset="">
      <img class="t3" data-aos="fade-down" data-aos-delay="600" src="@/section/s4/centralpark.svg" alt="" srcset="">
    </div>
    <div class="swiper">
    <swiper :navigation="true" :options="swiperOption" ref="mySwiper" data-aos="flip-up" data-aos-delay="200" class="item-list flex-jb flex-as">
      <swiper-slide v-for="(slide, index) in slideList" :index="index" :key="slide.img" :class="`item`">
        <img :src="slide.img" alt>
        <div class="slide-name absolute" v-html="slide.name"></div>
      </swiper-slide>
    </swiper>
        <div class="swipe-btns absolute flex-ac flex-jb">
          <div class="prev-btn" slot="button-prev" v-if="isMobile"></div>
          <div class="next-btn" slot="button-next" v-if="isMobile"></div>
        </div>
        </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  @apply relative overflow-hidden w-full bg-[#E7E7E7];
  height: size(900);
  padding-top: size(24);

  .main {
    @apply relative w-full;
    height: size(612);
    background-image: url('@/section/s4/main.jpg');
    background-size: cover;
    .t1 {
      @apply absolute;
      color: #fff;
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(30);
      left: size(42);
      bottom: size(94.5);
    }

    .t2 {
      @apply absolute;
      width: size(961.96);
      left: size(42.86);
      bottom: 0;
    }
    .t3 {
      @apply absolute;
      width: size(203.83);
      right: size(73.6);
      bottom: size(24.88);

    }
  }

  .bottom {
    @apply flex items-center justify-between w-full;
    padding-left: size(43);
    padding-right: size(64);
    margin-top: size(44);
    color: #595758;

    .t1 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(42);
      line-height: 150%;
    }
    .t2 {
      font-weight: 400;
      font-size: size(18);
      line-height: 170%;
    }

    .imgs {
      @apply flex;
      gap: size(7);
      img {
        width: size(270.22);
      }
    }
    .caption {
      @apply absolute;
      right: size(64);
      bottom: size(20);
      font-weight: 400;
      font-size: size(12);
      color: #595758
    }
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
    @apply bg-white;
  height: sizem(629);
  padding-top: 0;

  .main {
    height: sizem(215);
    background-image: url('@/section/s4/main_m.jpg');
    .t1 {
      @apply absolute;
      font-size: sizem(12);
      left: sizem(16);
      bottom: sizem(27.8);
    }

    .t2 {
      width: sizem(319.2);
      left: sizem(16.29);
      bottom: 0;
    }
    .t3 {
      width: sizem(61.3);
      right: sizem(17);
      bottom: sizem(72.25);

    }
  }

  .bottom {
    @apply flex-col text-center;
    padding-left: sizem(32.5);
    padding-right: sizem(32.5);
    margin-top: sizem(36.12);

    .t1 {
      font-size: sizem(19);
      margin-bottom: sizem(5);
    }
    .t2 {
      font-size: sizem(12);
      margin-bottom: sizem(23);
    }

    .imgs {
      @apply flex-wrap;
      gap: sizem(4);
      img {
        width: sizem(153);
      }
    }
    .caption {
      right: sizem(32.5);
      bottom: sizem(40);
      font-size: sizem(12);
    }
  }
  }
}
</style>
<script setup>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { computed, getCurrentInstance, ref } from 'vue';
export default {

  components: {
    swiper,
    swiperSlide,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isAnimateBg: true,
      swiperOption: {
        slidesPerView: isMobile ? 1 : 3,
        spaceBetween: 0,
        allowSlidePrev: isMobile ? true : true,
        allowSlideNext: isMobile ? true : true,
        loop: isMobile ? true : false,
        autoplay: {
          delay: 5000,
          disableOnInteraction:isMobile ? false : true,
        },
         /*
        slidesPerColumn: isMobile ? 1 : 1,
       centeredSlides: isMobile ? true : false,

        slideToClickedSlide: isMobile ? true : false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        effect: 'fade',
        */
        navigation: {
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        },
      },
      slideList: [
        {
          img: require("./s4/1.jpg"),
          name: "中部科學園區 實景拍攝",
        },
        {
          img: require("./s4/2.jpg"),
          name: "台中精密園區 實景拍攝",
        },
        {
          img: require("./s4/3.jpg"),
          name: "台中工業區 實景拍攝",
        },
      ],
    }
  },

  methods: {
  },

  mounted() {
    if (this.isMobile) {
      this.toggleTimer = false
    }
  },

  created() {},

  computed: {
    // isCurrent() {
    //   return this.slideIndex
    // },
  },
};
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());



</script>
