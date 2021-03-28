<template>
  <div class="bg">
    <div v-if="!isMobile">
      <img
        src="./s7/bg.jpg"
        alt=""
        class="bg-img"
      >
      <div class="container relative">
        <!-- <img
          src="./s5/title.png"
          alt=""
          class="label absolute"
        > -->
        <div :class="`animate-slide`">
          <div class="balls">
            <img
              src="./ball/bright.png"
              alt=""
              :class="`ball${index} absolute`"
              v-for="index in 3"
              :key="`slide7-ball${index}`"
            >
          </div>
        </div>
        <div class="content">
          <div
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >
            鐫刻新古典建築光華
            <br />鑲嵌洲子洋地表鉅作
          </div>
          <div class="context">
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="600"
            >
              新古典藝術風情掀起都會美學新浪潮<br />
              雕琢工藝鑲嵌不凡品味格調<br />
              別緻線條刻劃傳世藝術經典<br />
              引領世紀巔峰美學<br />
              歐風人文饗宴在神采飛洋綻放
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="relative"
    >
      <img
        src="./mo/7/bg.jpg"
        alt=""
        class="bg-img"
      >
      <div class="m-content">
        <!-- <img
          src="./s3/title2.png"
          alt=""
          class="label absolute"
        > -->
        <div :class="`animate-slide`">
          <div class="balls">
            <img
              src="./ball/bright.png"
              alt=""
              :class="`ball${index} absolute`"
              v-for="index in 2"
              :key="`slide1-ball${index}`"
            >
          </div>
        </div>
        <div
          class="title"
          data-aos="fade"
          data-aos-delay="400"
        >
          鐫刻新古典建築光華
          <br />鑲嵌洲子洋地表鉅作
        </div>
        <div
          class="desc"
          data-aos="fade"
          data-aos-delay="600"
        >
          新古典藝術風情掀起都會美學新浪潮<br />
          雕琢工藝鑲嵌不凡品味格調<br />
          別緻線條刻劃傳世藝術經典<br />
          引領世紀巔峰美學<br />
          歐風人文饗宴在神采飛洋綻放
        </div>
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

.container {
  padding-top: size(187);
  padding-bottom: size(142);
  position: relative;
  z-index: 1;
}

.bg-img {
  width: 100vw;
  min-height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
}

.content {
  width: size(1200);
  margin-left: size(221);
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
    height: size(117);
    left: size(913);
    top: size(35);
  }

  .ball2 {
    width: size(73);
    top: size(354);
    left: size(670);
  }
  .ball3 {
    width: size(366);
    top: size(675);
    left: size(168);
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
    position: relative;
    z-index: 2;
  }

  .relative {
    min-height: size-m(750);
    padding-top: 0;
    padding-bottom: size-m(62);
    overflow: hidden;
  }

  .bg-img {
    width: 100vw;
    min-height: size-m(750);
  }

  .m-content {
    width: 85%;
    margin: 0 auto;
    padding-top: size-m(98);
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
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
    text-align: right;
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

  .item-img {
    height: auto;
    width: 100%;
    object-fit: cover;
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
      height: size-m(63);
      left: size-m(267);
      top: size-m(20);
    }

    .ball2 {
      width: auto;
      height: size-m(110);
      top: size-m(650);
      bottom: auto;
      left: auto;
      right: size-m(-40);
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
  name: 'section7',

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
        slidesPerView: isMobile ? 1.4 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? -10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        effect: isMobile ? '' : 'fade',

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },

      slideList: [
        {
          src: require('./s6/1.png'),
          title: 'INTERIOR SPACE',
          subtitle: '國際一線美學，名門傲氣優雅',
          desc: '代表作品∣頤海大院．台中帝寶．開璽吾界． SKY1',
        },
        {
          src: require('./s6/2.png'),
          title: 'ARCHITECTURE',
          subtitle: '動感琴鍵協奏，定義奢華高度',
          desc: '代表作品∣波爾多．江翠ONE．金城舞2',
        },
        {
          src: require('./s6/3.png'),
          title: 'LANDSCAPE',
          subtitle: '環境人文思考，都會繁花盛放',
          desc: '代表作品∣維多利亞酒店．碧波白',
        },
      ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  created() {},
  mounted() {},
}
</script>
