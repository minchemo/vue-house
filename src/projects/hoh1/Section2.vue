<template>
  <div class="section2">
    <div v-if="!isMobile">
      <div class="container relative flex">
        <img
          src="./s2/1-1.jpg"
          alt=""
          class="thumb"
          data-aos="fade"
          data-aos-delay="200"
        >
        <img
          src="./s2/title1.png"
          alt=""
          class="label absolute"
          data-aos="zoom-in-left"
          data-aos-delay="1000"
        >
        <div :class="`animate-slide`">
          <div class="balls">
            <img
              src="./ball/bright.png"
              alt=""
              :class="`ball${index} absolute`"
              v-for="index in 8"
              :key="`slide1-ball${index}`"
            >
          </div>
        </div>
        <div class="content">
          <div
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >
            公園 校園 花園<br />誠徵有園人
          </div>
          <div
            class="desc"
            data-aos="fade"
            data-aos-delay="500"
          >
            踏出家門就在公園裡！15萬坪高綠覆洲子洋重劃區<br />
            擁抱128萬坪大台北都會公園，家就在樹海鮮氧裡無限延伸<br />
            公園裡的家，健康佳、保值佳，「健康就是財富」在這裡你會得到驗證
          </div>
          <div class="flex-jb wrap imgs">
            <img
              src="./s2/2-1.jpg"
              alt=""
              class="img"
              data-aos="fade"
              data-aos-delay="600"
            >
            <img
              src="./s2/2-2.jpg"
              alt=""
              class="img"
              data-aos="fade"
              data-aos-delay="700"
            >
            <img
              src="./s2/2-3.jpg"
              alt=""
              class="img"
              data-aos="fade"
              data-aos-delay="800"
            >
            <div class="context">
              <div
                class="context-item"
                data-aos="fade"
                data-aos-delay="900"
              >
                <div class="context-title">
                  PARK公園
                </div>
                <div class="context-desc">
                  <img
                    src="./ball/bright.png"
                    alt=""
                  >
                  128萬坪大台北都會公園，數十座水岸主題運動場，萬噸有氧盡情暢飲
                </div>
                <div class="context-desc">
                  <img
                    src="./ball/bright.png"
                    alt=""
                  >
                  4500坪洲子洋公園+1200坪國民運動中心，泳池健身房隨時鍛鍊誘人曲線
                </div>
              </div>
              <div class="context-item">
                <div class="context-title">
                  SCHOOL校園
                </div>
                <div class="context-desc">
                  <img
                    src="./ball/bright.png"
                    alt=""
                  >
                  轉個彎到成州國小，上學好近孩子天天睡飽飽
                </div>
                <div class="context-desc">
                  <img
                    src="./ball/bright.png"
                    alt=""
                  >
                  下樓就到公托中心，新手爸媽也不手忙腳亂
                </div>
              </div>
              <div class="context-item">
                <div class="context-title">
                  GARDEN花園
                </div>
                <div class="context-desc">
                  <img
                    src="./ball/bright.png"
                    alt=""
                  >
                  15萬坪洲子洋重劃區，超高綠覆+超大棟距樂森活
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="relative"
    >
      <div class="m-content">
        <img
          src="./s2/title1.png"
          alt=""
          class="label absolute"
          data-aos="fade"
          data-aos-delay="1000"
        >
        <div :class="`animate-slide`">
          <div class="balls">
            <img
              src="./ball/bright.png"
              alt=""
              :class="`ball${index} absolute`"
              v-for="index in 1"
              :key="`slide1-ball${index}`"
            >
          </div>
        </div>
        <div
          class="title"
          data-aos="fade"
          data-aos-delay="400"
        >
          公園 校園 花園<br />誠徵有園人
        </div>
        <div
          class="desc"
          data-aos="fade"
          data-aos-delay="500"
        >
          踏出家門就在公園裡！15萬坪高綠覆洲子洋重劃區，擁抱128萬坪大台北都會公園，家就在樹海鮮氧裡無限延伸，公園裡的家，健康佳、保值佳，「健康就是財富」在這裡你會得到驗證
        </div>
        <div
          class="context-item"
          data-aos="fade"
          data-aos-delay="600"
        >
          <div class="context-title">
            PARK公園
          </div>
          <div
            class="context-desc"
            data-aos="fade"
            data-aos-delay="700"
          >
            <img
              src="./ball/bright.png"
              alt=""
            >
            128萬坪大台北都會公園，數十座水岸主題運動場，萬噸有氧盡情暢飲
          </div>
          <div class="context-desc">
            <img
              src="./ball/bright.png"
              alt=""
            >
            4500坪洲子洋公園+1200坪國民運動中心，泳池健身房隨時鍛鍊誘人曲線
          </div>
        </div>
        <div
          class="context-item"
          data-aos="fade"
          data-aos-delay="700"
        >
          <div class="context-title">
            SCHOOL校園
          </div>
          <div class="context-desc">
            <img
              src="./ball/bright.png"
              alt=""
            >
            轉個彎到成州國小，上學好近孩子天天睡飽飽
          </div>
          <div class="context-desc">
            <img
              src="./ball/bright.png"
              alt=""
            >
            下樓就到公托中心，新手爸媽也不手忙腳亂
          </div>
        </div>
        <div
          class="context-item"
          data-aos="fade"
          data-aos-delay="800"
        >
          <div class="context-title">
            GARDEN花園
          </div>
          <div class="context-desc">
            <img
              src="./ball/bright.png"
              alt=""
            >
            15萬坪洲子洋重劃區，超高綠覆+超大棟距樂森活
          </div>
        </div>
      </div>
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="1000"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="item"
        >
          <img
            :src="slide.src"
            :class="`item-img`"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  // position: relative;
  // z-index: 5;
  min-height: 100vh;
  background-color: #fddb3e;
}

.container {
}

.thumb {
  width: size(678);
  height: size(678);
  border-radius: 999px;
  margin: size(152) size(62);
}

.label {
  width: size(118);
  top: size(55);
  left: size(719);
}

.content {
  width: size(950);
}

.title {
  font-size: size(48);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: normal;
  text-align: left;
  color: #3d2824;
  margin-bottom: size(15);
  margin-top: size(166);
}

.desc {
  font-size: size(25);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: size(42);
}

.img {
  width: size(470);
  margin: size(6) 0;
}

.context {
  width: size(470);
  margin: size(6) 0;
  text-align: left;
  // padding-top: 10px;
}

.context-item {
  width: 100%;
  padding: 0 10px;
}

.context-title {
  background-color: #fff;
  border-radius: 20px / 20px;
  padding: 5px 15px;
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #3d2824;
  margin-top: size(15);
  margin-bottom: size(5);
  display: inline-block;
}

.context-desc {
  font-size: size(15);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: #3d2824;
  margin-bottom: size(5);

  img {
    width: 12px;
    margin-right: 5px;
    display: inline-block;
  }
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
  .balls {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      > img:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .ball1 {
    height: size(83);
    left: size(116);
    top: size(77);
  }

  .ball2 {
    width: size(270);
    top: size(113);
    left: size(486);
  }

  .ball3 {
    width: size(93);
    right: size(567);
    top: size(53);
  }

  .ball4 {
    height: size(404);
    top: size(22);
    right: size(-118);
  }

  .ball5 {
    height: size(204);
    left: size(80);
    top: size(899);
  }

  .ball6 {
    height: size(83);
    left: size(574);
    top: size(890);
  }

  .ball7 {
    width: size(134);
    top: size(652);
    right: size(45);
  }

  .ball8 {
    width: size(42);
    top: size(1000);
    right: size(160);
  }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}
@keyframes an2 {
  to {
    transform: translateY(0) rotate(5deg);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    margin: 0;
    min-height: auto;
  }

  .m-content {
    width: 85%;
    margin: 0 auto;
    padding-top: size-m(130);
    margin-bottom: 30px;
  }

  .label {
    width: size-m(97);
    top: size-m(27);
    left: size-m(30);
  }

  .title {
    font-size: size-m(36);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #3d2824;
    margin-bottom: size-m(15);
    margin-top: 0;
  }

  .desc {
    font-size: size-m(15);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
    margin-bottom: size-m(20);
  }

  .context-item {
    width: 100%;
    padding: 0 0;
    text-align: left;
  }

  .context-title {
    background-color: #fff;
    border-radius: 20px / 20px;
    padding: 5px 15px;
    font-size: size-m(20);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #3d2824;
    margin-top: size-m(15);
    margin-bottom: size-m(5);
    display: inline-block;
  }

  .context-desc {
    font-size: size-m(14);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: left;
    color: #3d2824;
    margin-bottom: size-m(5);

    img {
      width: 12px;
      margin-right: 5px;
      display: inline-block;
    }
  }

  .item-img {
    height: size-m(221);
    width: 100%;
    object-fit: cover;

    &.height {
      height: size-m(459);
    }
  }

  .animate-slide {
    .ball1 {
      width: size-m(138);
      height: auto;
      top: size-m(-20);
      left: auto;
      right: size-m(28);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from '@/utils'
import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section2',

  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    // Parallax,
  },

  data() {
    return {
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1.2 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? 15 : 30,
        slidesPerColumn: isMobile ? 1 : 2,

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      slideList: [
        { src: require('./mo/2/1.jpg') },
        { src: require('./mo/2/2.jpg') },
        { src: require('./mo/2/3.jpg') },
        { src: require('./mo/2/4.jpg') },
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
