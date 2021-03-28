<template>
  <div class="section3">
    <div v-if="!isMobile">
      <div class="container relative">
        <img
          src="./s3/title2.png"
          alt=""
          class="label absolute"
          data-aos="zoom-in-right"
          data-aos-delay="1000"
        >
        <div :class="`animate-slide`">
          <div class="balls">
            <img
              src="./ball/bright.png"
              alt=""
              :class="`ball${index} absolute`"
              v-for="index in 6"
              :key="`slide1-ball${index}`"
            >
            <img
              src="./ball/l.png"
              alt=""
              class="smile absolute"
            >
          </div>
        </div>
        <div class="content flex">
          <div
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >
            愛情與麵包 我家全包
          </div>
          <div class="context">
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="500"
            >
              機能雙商圈，生鮮蔬果新鮮現購<br />
              頂好、全聯散步就到，再晚下班也不擔心<br />
              柴米油鹽零食飲料隨時買齊<br />
              今天懶得煮，雙商圈滿街美食餐廳隨你挑<br />
              幸福生活2.0，愛情與麵包一次通包
            </div>
            <div
              class="context-item flex-ac"
              data-aos="fade"
              data-aos-delay="600"
            >
              <img
                src="./ball/bright.png"
                alt=""
              >
              <div class="context-title">
                工商路商圈
              </div>
              <div class="context-desc">
                寶雅、屈臣氏、燦坤、麥當勞、銀行郵局排排站
              </div>
            </div>
            <div
              class="context-item flex-ac"
              data-aos="fade"
              data-aos-delay="700"
            >
              <img
                src="./ball/bright.png"
                alt=""
              >
              <div class="context-title">
                成泰路商圈
              </div>
              <div class="context-desc">
                傳統市場、全聯福利中心、頂好生鮮超市、早午餐
              </div>
            </div>
            <div
              class="context-item flex-ac"
              data-aos="fade"
              data-aos-delay="800"
            >
              <img
                src="./ball/bright.png"
                alt=""
              >
              <div class="context-title context-title3">
                傳統市場
              </div>
              <div class="context-desc">
                成洲市場、五股黃昏市場，晨型人或夜貓族早晚都好買
              </div>
            </div>
          </div>
        </div>
        <div class="flex-jb imgs">
          <img
            src="./s3/3-1.jpg"
            alt=""
            class="img"
            data-aos="fade"
            data-aos-delay="900"
          >
          <img
            src="./s3/3-2.jpg"
            alt=""
            class="img"
            data-aos="fade"
            data-aos-delay="1000"
          >
          <img
            src="./s3/3-3.jpg"
            alt=""
            class="img"
            data-aos="fade"
            data-aos-delay="1100"
          >
        </div>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="relative"
    >
      <div class="m-content">
        <img
          src="./s3/title2.png"
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
              v-for="index in 4"
              :key="`slide1-ball${index}`"
            >
            <img
              src="./ball/l.png"
              alt=""
              class="smile absolute"
            >
          </div>
        </div>
        <div
          class="title"
          data-aos="fade"
          data-aos-delay="400"
        >
          愛情與麵包 我家全包
        </div>
        <div
          class="desc"
          data-aos="fade"
          data-aos-delay="500"
        >
          機能雙商圈，生鮮蔬果新鮮現購<br />
          頂好、全聯散步就到，再晚下班也不擔心<br />
          柴米油鹽零食飲料隨時買齊<br />
          今天懶得煮，雙商圈滿街美食餐廳隨你挑<br />
          幸福生活2.0，愛情與麵包一次通包
        </div>
        <div
          class="context-item"
          data-aos="fade"
          data-aos-delay="600"
        >
          <div class="flex-ac">
            <img
              src="./ball/bright.png"
              alt=""
            >
            <div class="context-title">
              工商路商圈
            </div>
          </div>

          <div class="context-desc">
            寶雅、屈臣氏、燦坤、麥當勞<br />銀行郵局排排站
          </div>
        </div>
        <div
          class="context-item"
          data-aos="fade"
          data-aos-delay="700"
        >
          <div class="flex-ac">
            <img
              src="./ball/bright.png"
              alt=""
            >
            <div class="context-title">
              成泰路商圈
            </div>
          </div>
          <div class="context-desc">
            傳統市場、全聯福利中心<br />頂好生鮮超市、早午餐
          </div>
        </div>
        <div
          class="context-item"
          data-aos="fade"
          data-aos-delay="800"
        >
          <div class="flex-ac">
            <img
              src="./ball/bright.png"
              alt=""
            >
            <div class="context-title context-title3">
              傳統市場
            </div>
          </div>
          <div class="context-desc">
            成洲市場、五股黃昏市場<br />晨型人或夜貓族早晚都好買
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
  padding-top: size(150);
  padding-bottom: size(62);
}

.thumb {
  width: size(678);
  height: size(678);
  border-radius: 999px;
  margin: size(152) size(62);
}

.label {
  width: size(113);
  top: size(40);
  left: size(199);
}

.content {
  width: size(1094);
  margin-left: size(280);
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
  margin-right: size(34);
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
  margin-bottom: size(20);
}

.imgs {
  width: size(1094);
  margin-left: size(280);
  z-index: 3;
  position: relative;
}

.img {
  width: size(362);
}

.context {
  // width: size(470);
  margin: size(6) 0;
  text-align: left;
  margin-bottom: 30px;
  // padding-top: 10px;
}

.context-item {
  width: 100%;
  padding: 0 10px;
  margin-right: -5px;
  margin-bottom: 5px;

  img {
    width: 12px;
    margin-right: 5px;
    display: inline-block;
  }
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
  margin-bottom: size(5);
  margin-right: size(10);
  display: inline-block;
  white-space: nowrap;
  width:6.7em;
  &.context-title3{
  letter-spacing:0.32em;}
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
  white-space: nowrap;
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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
    height: size(107);
    left: size(75);
    top: size(461);
  }

  .ball2 {
    width: size(209);
    top: size(292);
    left: size(382);
  }

  .ball3 {
    width: size(42);
    left: size(636);
    top: size(305);
  }

  .ball4 {
    height: size(171);
    top: size(506);
    right: size(427);
    z-index: 1;
  }

  .ball5 {
    height: size(323);
    right: size(105);
    top: size(135);
  }

  .ball6 {
    height: size(65);
    right: size(279);
    top: size(589);
  }

  .smile {
    width: size(297);
    top: size(57);
    right: size(312);
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

  .relative {
    padding-bottom: size-m(62);
  }

  .m-content {
    width: 85%;
    margin: 0 auto;
    padding-top: size-m(140);
    margin-bottom: 30px;
  }

  .label {
    width: size-m(93);
    top: size-m(39);
    right: size-m(33);
    left: auto;
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
    white-space: nowrap;
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
    position: relative;
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
    padding-left: 20px;

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
    width: 100%;
    height: auto;
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
      height: size-m(157);
      left: size-m(-35);
      top: size-m(-20);
    }

    .ball2 {
      width: size-m(42);
      top: size-m(356);
      left: auto;
      right: size-m(16);
    }

    .ball3 {
      width: size-m(72);
      left: auto;
      right: size-m(39);
      top: size-m(424);
      z-index: 2;
    }

    .ball4 {
      height: size-m(117);
      top: size-m(454);
      right: size-m(-20);
    }

    .smile {
      width: size-m(165);
      top: size-m(518);
      right: size-m(-20);
      z-index: 2;
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
  name: 'section3',

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
        { src: require('./mo/3/1.jpg') },
        { src: require('./mo/3/2.jpg') },
        { src: require('./mo/3/3.jpg') },
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
