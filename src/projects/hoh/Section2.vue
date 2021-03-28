<template>
  <div class="section2">
    <div :class="`dialog ${isShowDialog ? 'show' : ''}`"
        @click="closeDialog">
      <img
        src="../../assets/img/close.png"
        alt=""
        class="close"
      >
      <img
        :src="slideList[imgIndex]"
        alt=""
        class="dialog-img"
      >
    </div>
    <div class="bg relative">
      <img
        :src="`${isMobile ? require('./s2/txt_m.png') : require('./s2/txt.png')}`"
        alt=""
        class="txt"
        data-aos="fade"
        data-aos-delay="300"
      >
      <img
        src="./s1/ball/r.png"
        class="ball6"
        data-aos="fade"
        data-aos-delay="300"
      >

      <div
        class="txt1"
        data-aos="fade"
        data-aos-delay="600"
      >飛越洲子洋 看見最精彩</div>
      <div
        class="txt2"
        data-aos="fade"
        data-aos-delay="1200"
      >用台北蛋白的便利，享受洲子洋蛋黃的勝利</div>
      <div class="ball-container">
        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball1"
        >

        <img
          src="./s1/ball/ball.png"
          alt=""
          class="ball ball2"
        >

        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball3"
        >

        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball4"
        >

        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball5"
        >
        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball7"
        >
        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball8"
        >
        <img
          src="./s1/ball/ball.png"
          alt=""
          class="ball ball9"
        >
        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball10"
        >
        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball11"
        >
        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball12"
        >
        <img
          src="./s1/ball/bright.png"
          alt=""
          class="ball ball13"
        >
      </div>
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        class="swiper"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide"
          class="item"
        >
          <img
            :src="slide"
            @click="showDialog(index)"
            :class="`item-img`"
          />
        </swiper-slide>
      </swiper>
      <div
        class="relative"
        v-if="!isMobile"
      >
        <img
          src="./event/event1.png"
          alt="DYSON TP00 氣流倍增器，DYSON V7 無線吸塵器，簽約在送神秘大禮"
          class="bg-img"
        >
        <img
          src="./event/event2.png"
          alt="早鳥預約神助攻 贈神秘大禮"
          class="bg-img"
        >
        <img
          src="./event/30.png"
          alt="限量前30戶"
          class="red-bubble absolute"
          data-aos="zoom-in-down"
          data-aos-delay="300"
        >
        <img
          src="./event/l.png"
          alt=""
          class="big-smile absolute"
        >
      </div>
      <div
        class="relative"
        v-else
      >
        <img
          src="./event_mo/event1.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./event_mo/event2.png"
          alt=""
          class="bg-img"
        >
        <img
          src="./event_mo/l.png"
          alt=""
          class="big-smile absolute"
        >
      </div>
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

.txt {
  position: relative;
  width: size(1580);
  margin: 0 auto;
  z-index: 3;
}
.txt1 {
  position: relative;
  margin: 0 auto;
  z-index: 2;
  margin: 1em 0 1em 0.2em;
  color: #000;
  font-size: size(49);
  letter-spacing: 0.4em;
  font-weight: 900;
}
.txt2 {
  position: relative;
  margin: 0 auto;
  z-index: 2;
  margin: 0em auto;
  color: #333;
  font-size: size(23);
  display: inline-flex;
  letter-spacing: 0.3em;
  &::after,
  &::before {
    content: '';
    display: inline-block;
    width: 2em;
    height: 0.6em;
    border: 1px solid #333;
    margin: 0.3em 0.5em 0 0.5em;
  }
  &::after {
    border-left: 0px;
  }
  &::before {
    border-right: 0px;
  }
}

.ball {
  position: absolute;
  animation: an 2s infinite alternate;
}

.ball1 {
  left: size(80);
  top: size(380);
  height: size(513);
  transform: translateY(-15%);
  animation-delay: 1s;
}

.ball2 {
  left: size(20);
  top: size(830);
  height: size(240);
  animation-delay: 1s;
  transform: translateY(-15%);
}

.ball3 {
  right: size(80);
  top: size(250);
  height: size(730);
  animation-delay: 2s;
  transform: translateY(-5%);
  animation-delay: 1s;
  opacity: 0.6;
}

.ball4 {
  right: size(780);
  top: size(1050);
  height: size(95);
  animation-delay: 1s;
  transform: translateY(-15%);
  animation-delay: 1s;
}

.ball5 {
  right: size(80);
  top: size(1010);
  height: size(400);
  transform: translateY(-8%);
  z-index: 2;
  animation-delay: 1s;
}

.ball7 {
  left: size(80);
  top: size(1150);
  height: size(300);
  transform: translateY(-13%);
  z-index: 2;
}
.ball8 {
  right: size(-550);
  top: size(1550);
  height: size(850);
  transform: translateY(-5%);
  animation-delay: 1s;
}
.ball9 {
  left: size(-500);
  top: size(1800);
  height: size(900);
  transform: translateY(-9%);
}
.ball10 {
  left: size(150);
  top: size(1800);
  height: size(100);
  transform: translateY(-16%);
  animation-delay: 1s;
}
.ball11 {
  left: size(1450);
  top: size(2200);
  height: size(200);
  transform: translateY(-8%);
}
.ball12 {
  right: size(-550);
  top: size(2850);
  height: size(1000);
  transform: translateY(-5%);
  animation-delay: 1s;
}
.ball13 {
  right: size(500);
  top: size(2500);
  height: size(500);
  transform: translateY(-9%);
}

.ball6 {
  position: absolute;
  height: size(222);
  left: size(365);
  top: size(15);
  transform: translateY(-5%) rotate(-5deg);
  animation: an2 1.5s infinite alternate;
  z-index: 3;
}
.ball-container {
  width: 100vw;
  height: 100vh;
  // min-height: size(400);
  top: 0;
  //z-index: 1;
  position: absolute;
  //position: fixed !important;
}
.swiper {
  width: size(1200);
  margin: size(100) auto 0;
  border-radius: 9vw;
}
.swiper-slide{width:calc(33.33% - 10px);}
.item-img {
  width: size(330);
  cursor: pointer;
}

.bg-img {
  width: 100vw;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  &:nth-child(1) {
    position: relative;
    z-index: 1;
    margin-bottom: size(-300);
  }
}

.red-bubble {
  top: size(484);
  right: size(384);
  width: size(323);
  z-index: 2;
}

.big-smile {
  top: size(834);
  right: size(382);
  width: size(390);
  animation: an2 2s 1s infinite alternate;
  transform: translateY(5%) rotate(-5deg);
  z-index: 2;
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

.dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s;
  display: none;

  &.show {
    display: block;
    z-index: 210;
    opacity: 1;
  }

  .dialog-img {
    //width: 50vw;
    height: auto;
    width: auto;
    max-height: 96vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }

  .close {
    position: absolute;
    cursor: pointer;
    right: 35px;
    top: 25px;
    width: 40px;
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

  .swiper {
    width: 100%;
    margin:size-m(20) 0 0 0 ;
    border-radius: 0;
  }

.swiper-slide{width:size-m(200);}
  .item-img {
    width: size-m(180);
  }

  .ball1 {
    left: size-m(80);
    top: size-m(-180);
    height: size-m(143);
    transform: translateY(-15%);
  }

  .ball2 {
    left: size-m(0);
    top: size-m(80);
    height: size-m(50);
    transform: translateY(-15%);
  }

  .ball3 {
    left: size-m(40);
    top: size-m(-40);
    height: size-m(90);
    transform: translateY(-5%);
    z-index: 0;
  }

  .ball4 {
    right: size-m(0);
    top: size-m(-50);
    height: size-m(130);
    transform: translateY(-15%);
    z-index: 0;
  }

  .ball5 {
    right: size-m(-30);
    top: size-m(380);
    height: size-m(100);
  }

  .ball7 {
    left: size-m(-45);
    top: size-m(420);
    height: size-m(70);
  }
  .ball8 {
    right: size-m(130);
    top: size-m(150);
    height: size-m(220);
  }
  .ball9 {
    left: size-m(-40);
    top: size-m(480);
    height: size-m(100);
  }
  .ball10 {
    right: size-m(-40);
    top: size-m(730);
    height: size-m(150);
  }
  .ball11 {
    right: size-m(-100);
    top: size-m(580);
    height: size-m(200);
  }
  .ball12 {
    right: size-m(-80);
    top: size-m(930);
    height: size-m(150);
  }
  .ball13 {
    left: size-m(-40);
    top: size-m(1080);
    height: size-m(200);
  }
  .ball6 {
    left: size-m(73);
    top: size-m(0);
    height: size-m(45);
    z-index: 5;
    transform: translateY(-10%) rotate(-5deg);
  }
  .txt1 {
    font-size: size-m(18);
  }
  .txt2 {
    font-size: size-m(12);
    letter-spacing: 0em;
  }

  .big-smile {
    top: size-m(405);
    right: size-m(-20);
    width: size-m(140);
    z-index: 2;
  }

  .dialog {
    .dialog-img {
      width: 95vw;
      height: auto;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }

    .close {
      position: absolute;
      cursor: pointer;
      right: 35px;
      top: 25px;
      width: 40px;
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
        slidesPerView:"auto",
        centeredSlides: true,
        spaceBetween: isTablet ? 20 : 10,
        slidesPerColumn: isMobile ? 1 : 1,

        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      slideList: [
        require('./s2/1.png'),
        require('./s2/2.png'),
        require('./s2/3.png'),
        require('./s2/4.png'),
        require('./s2/5.png'),
        require('./s2/6.png'),
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    showDialog(index) {
      this.imgIndex = index
      this.isShowDialog = true
    },
    closeDialog() {
      this.isShowDialog = false
    },
  },

  created() {},
  mounted() {},
}
</script>
