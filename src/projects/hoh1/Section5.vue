<template>
  <div class="section5">
    <div v-if="!isMobile">
      <div class="container relative">
        <img
          src="./s5/title.png"
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
              v-for="index in 2"
              :key="`slide1-ball${index}`"
            >
          </div>
        </div>
        <div class="content flex">
          <div
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >
            別人的是房 自己的才是家
          </div>
          <div class="context">
            <div
              class="desc"
              data-aos="fade"
              data-aos-delay="500"
            >
              自己的最好！換裝潢、開伙上菜、養寵物‥<br />
              租房子不能做的，在這裡都由你<br />
              精品飯店式休閒會館<br />
              不用出門就能健身、高歌、交朋友<br />
              在家玩樂有裏子，親友來訪有面子<br />
              有自己的家每一天都神采飛揚
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
                精品飯店式休閒會館
              </div>
              <div class="context-desc">
                在家玩樂有裏子，親友來訪有面子
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
              <div class="context-title context-title1">
                元氣滿滿 16-33坪
              </div>
              <div class="context-desc">
                2房精巧小飯店、3房自由式空間
              </div>
            </div>
          </div>
        </div>
      </div>
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        data-aos="fade"
        data-aos-delay="900"
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
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>

    <div
      v-if="isMobile"
      class="relative"
    >
      <div class="m-content">
        <img
          src="./s5/title.png"
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
          別人的是房<br />自己的才是家
        </div>
        <div
          class="desc"
          data-aos="fade"
          data-aos-delay="600"
        >
          自己的最好！換裝潢、開伙上菜、養寵物‥<br />
          租房子不能做的，在這裡都由你<br />
          精品飯店式休閒會館<br />
          不用出門就能健身、高歌、交朋友<br />
          在家玩樂有裏子，親友來訪有面子<br />
          有自己的家每一天都神采飛揚
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
              精品飯店式休閒會館
            </div>
          </div>

          <div class="context-desc">
            在家玩樂有裏子，親友來訪有面子
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
            <div class="context-title context-title1">
              元氣滿滿 16-33坪
            </div>
          </div>
          <div class="context-desc">
            2房精巧小飯店、3房自由式空間
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
  min-height: 100vh;
  background-color: #fddb3e;
}

.container {
  padding-top: size(150);
  padding-bottom: size(42);
  overflow: hidden;
}

.label {
  width: size(113);
  top: size(140);
  left: size(221);
  z-index:3;
}

.content {
  width: size(1094);
  margin-left: size(364);
  z-index: 3;
  position: relative;
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
  &.context-title1{
  letter-spacing:0.12em;}
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
    height: size(76);
    right: size(385);
    top: size(180);
  }

  .ball2 {
    width: size(496);
    bottom: size(-300);
    left: size(60);
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
    padding-bottom: 0;
  }

  .m-content {
    width: 85%;
    margin: 0 auto;
    padding-top: size-m(140);
    margin-bottom: 30px;
  }

  .label {
    width: size-m(95);
    top: size-m(109);
    right: auto;
    left: size-m(24);
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
    margin-top: size-m(-20);
    margin-left: size-m(110);
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
      left: size-m(-55);
      top: size-m(-60);
    }

    .ball2 {
      width: auto;
      height: size-m(422);
      top: size-m(271);
      left: auto;
      right: size-m(-320);
    }

    .ball3 {
      width: size-m(72);
      left: auto;
      right: size-m(39);
      top: size-m(424);
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
        spaceBetween: isMobile ? 15 : 30,
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
          src: this.isMobile ? require('./mo/5/1.jpg') : require('./s5/1.jpg'),
        },
        {
          src: this.isMobile ? require('./mo/5/2.jpg') : require('./s5/2.jpg'),
        },
        {
          src: this.isMobile ? require('./mo/5/3.jpg') : require('./s5/3.jpg'),
        },
        {
          src: this.isMobile ? require('./mo/5/4.jpg') : require('./s5/4.jpg'),
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
