<template>
  <div class="section5">
    <div v-if="!isMobile">
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
              v-for="index in 6"
              :key="`slide1-ball${index}`"
            >
          </div>
        </div>
        <div class="content flex-c">
          <div
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >
            國際設計金獎<br />建築神手強強聯手
          </div>
          <div class="context">
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="600"
            >
              美國Muse、義大利A’Design設計金獎等四大國際級建築團隊領銜<br />以世界級都市計劃宏觀角度，合奏大台北水岸建築世紀絕唱
            </div>
          </div>
        </div>
        <div
          class="person-list flex-c"
          data-aos="fade"
          data-aos-delay="800"
        >
          <div
            class="person flex-c wrap"
            v-for="(slide, index) in slideList"
            :index="index"
            :key="slide.src"
          >
            <img
              :src="slide.icon"
              alt=""
              class="icon"
              v-if="slide.icon"
            >
            <img
              :src="slide.src"
              alt=""
            >
            <div
              class="person-title"
              v-html="slide.title"
            ></div>
            <div
              class="person-subtitle"
              v-html="slide.subtitle"
            ></div>
            <div
              class="person-desc"
              v-html="slide.desc"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="relative"
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
          國際設計金獎<br />建築神手強強聯手
        </div>
        <div
          class="desc"
          data-aos="fade"
          data-aos-delay="600"
        >
          美國Muse、義大利A’Design設計金獎等四大國際級建築團隊領銜，以世界級都市計劃宏觀角度，合奏大台北水岸建築世紀絕唱
        </div>
      </div>
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="800"
      >
        <swiper-slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="item"
        >
          <img
            :src="slide.icon"
            alt=""
            class="icon"
            v-if="slide.icon"
          >
          <img
            :src="slide.src"
            :class="`item-img`"
          />
          <div class="person">
            <div
              class="person-title"
              v-html="slide.title"
            ></div>
            <div
              class="person-subtitle"
              v-html="slide.subtitle"
            ></div>
            <div
              class="person-desc"
              v-html="slide.desc"
            ></div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
@import '~@/assets/style/function.scss';
.swiper-pagination {
  bottom: size(26);
  right: size(162);
  width: auto;
}
.swiper-pagination-bullet {
  background-color: #ffffff;
  // box-shadow: inset 0 0 0 1px #c0c1c1;
  width: 15px;
  height: 15px;
  opacity: 0.4;
}
.swiper-pagination-bullet-active {
  background-color: #3c2723;
  opacity: 0.7;
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  // position: relative;
  // z-index: 5;
  background-color: #fddb3e;
}

.container {
  padding-top: size(150);
  padding-bottom: size(142);
}

.label {
  width: size(113);
  top: size(140);
  left: size(221);
}

.content {
  width: size(1200);
  margin-left: size(280);
}

.title {
  font-size: size(48);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: normal;
  text-align: right;
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
}

.img {
  width: size(362);
}

.person-list {
  width: size(1662);
  margin: 0 auto;
}

.person {
  width: size(554);
  position: relative;
  img {
    width: 100%;
    margin-bottom: size(26);
  }
  .icon {
    width: size(123);
    position: absolute;
    top: size(586);
    left: 0;
  }
  > div {
    width: size(280);
  }
}

.person-title {
  font-family: Arial;
  font-size: size(20);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 2px;
  text-align: left;
  color: #3d2824;
}

.person-subtitle {
  font-size: size(15);
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: #3d2824;
}

.person-desc {
  font-size: size(15);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.87;
  letter-spacing: normal;
  text-align: left;
  color: #3d2824;
  white-space: nowrap;
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
    height: size(137);
    left: size(528);
    top: size(-50);
  }

  .ball2 {
    width: size(73);
    top: size(65);
    left: size(1166);
  }
  .ball3 {
    width: size(422);
    top: size(-200);
    right: size(30);
  }
  .ball4 {
    width: size(149);
    top: size(184);
    right: size(35);
  }
  .ball5 {
    width: size(117);
    top: size(768);
    right: size(610);
  }
  .ball6 {
    height: size(234);
    bottom: size(-80);
    left: size(-60);
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
    padding-top: size-m(42);
    padding-bottom: size-m(134);
    overflow: hidden;
  }

  .m-content {
    width: 85%;
    margin: 0 auto;
    // padding-top: size-m(140);
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

  .item {
    position: relative;
    .icon {
      width: size-m(43);
      position: absolute;
      top: size-m(340);
      left: 0;
    }
  }

  .person {
    width: 100%;
    margin-top: 20px;
    > div {
      width: size-m(211);
      margin: 0 auto;
    }

    .icon {
      width: size(123);
      position: absolute;
      top: size(586);
      left: 0;
    }
  }

  .person-title {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 1.2px;
    text-align: left;
    color: #3d2824;
  }

  .person-subtitle {
    font-size: 12px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: #3d2824;
  }

  .person-desc {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: normal;
    text-align: left;
    color: #3d2824;
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
      height: size-m(165);
      left: size-m(-55);
      top: size-m(-80);
    }

    .ball2 {
      width: auto;
      height: size-m(234);
      top: size-m(630);
      left: size-m(-100);
      right: auto;
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
  name: 'section5',

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
        spaceBetween: isMobile ? -20 : 30,
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
          icon: require('./s6/icon1.png'),
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
