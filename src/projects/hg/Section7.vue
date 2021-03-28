<template>
  <div class="bg">
    <div v-if="!isMobile">
      <img src="./s1/logo.png" alt="" class="logo">
      <img src="./s1/t.png" alt="" class="t">
      <parallax breakpoint="(min-width: 68px)" :speed-factor="0.3" direction="up">
        <div class="order-btn flex-c" v-scroll-to="{element: '#contact'}">
          <div>
            <div>立即預約</div>
            <img src="./s1/botton.png" alt="" class="botton">
          </div>
        </div>
      </parallax>
      <!-- <parallax :class="`animate-slide`" breakpoint="(min-width: 68px)" :speed-factor="0.5" direction="down"> -->
      <div class="animate-slide">
        <img src="./s1/1.png" alt="" class="left1" data-parallax="0">
        <!-- <img src="./s1/2.png" alt="" class="left2">
        <img src="./s1/4.png" alt="" class="left3"> -->
        <img src="./s1/pc1.png" alt="" class="pc1" data-parallax="1">
        <img src="./s1/pc2.png" alt="" class="pc2" data-parallax="2">
        <img src="./s1/pc3.png" alt="" class="pc3" data-parallax="3">
        <img src="./s1/pc4.png" alt="" class="pc4" data-parallax="4">
      </div>
      <!-- </parallax> -->
    </div>

    <div v-if="isMobile" class="relative">
      <div class="order-btn flex-c" v-scroll-to="{element: '#contact'}">
        <div>
          <div>立即預約</div>
          <img src="./s1/botton.png" alt="" class="botton">
        </div>
      </div>
      <!-- <parallax :class="`animate-slide`" breakpoint="(min-width: 68px)" :speed-factor="0.5" direction="down"> -->
      <div class="animate-slide">
        <img src="./s1/1.png" alt="" class="left1" data-parallax="0">
        <!-- <img src="./s1/2.png" alt="" class="left2">
        <img src="./s1/4.png" alt="" class="left3"> -->
        <img src="./s1/mo1.png" alt="" class="mo1" data-parallax="1">
        <img src="./s1/mo2.png" alt="" class="mo2" data-parallax="2">
        <img src="./s1/mo3.png" alt="" class="mo3" data-parallax="3">
      </div>
      <!-- </parallax> -->
      <img src="./s1/logo.png" alt="" class="logo">
      <img src="./s1/t.png" alt="" class="t">
    </div>
  </div>
</template>
<style lang="scss">
.Masthead,
.Masthead__image {
  height: auto;
  min-height: 73.875rem;
  z-index: 3;
}
.Masthead__image > img {
  height: auto;
  min-height: auto;
  object-fit: contain;
}

.Masthead__image.is-parallax > img {
  height: auto;
  min-height: auto;
}
.is-parallax {
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .Masthead,
  .Masthead__image {
    height: auto !important;
    min-height: 12.875rem;
  }
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.bg {
  background-size: cover;
  // position: relative;
  // z-index: 5;
  height: size(1132);
  min-height: size(1132);
  background-color: #2d73ab;
}

.bg-img {
  width: 100vw;
  min-height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
}

.logo {
  @include img_c_pc(583, 353);
}

.t {
  @include img_c_pc(574, 577);
}

.order-btn {
  @include img_c_pc(310, 822);
  z-index: 10;
  height: size(310);
  background-color: #ff6855;
  border-radius: 999px;
  font-size: size(54.2);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(5.96);
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  > div {
    width: 100%;
    cursor: pointer;
  }
}

.botton {
  width: size(32);
  margin: 0 auto 0;
  cursor: pointer;
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .left1 {
    @include img_l_pc(314, 417, 0);
  }

  .left2 {
    @include img_l_pc(240, -150, 220);
    transform: rotate(30deg) !important;
    animation: none !important;
  }

  .left3 {
    @include img_l_pc(18, 654, 235);
  }

  .pc1 {
    @include img_r_pc(1706, 0, 114);
  }

  .pc2 {
    @include img_r_pc(1962, 52, -44);
  }

  .pc3 {
    @include img_r_pc(1994, 400, -44);
  }

  .pc4 {
    @include img_r_pc(1599, 630, 297);
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
    width: 100vw;
    background-size: cover;
    margin: 0;
    height: sizem(172 + 576);
    position: relative;
    z-index: 2;
    overflow-x: hidden;
  }

  .relative {
    min-height: size-m(750);
    padding-top: 0;
    // padding-bottom: size-m(62);
    overflow: hidden;
  }

  .bg-img {
    width: 100vw;
    min-height: size-m(750);
  }

  .logo {
    @include img_c_m(300, 212);
  }

  .t {
    @include img_c_m(292, 327);
  }

  .order-btn {
    @include img_c_m(172, 546);
    z-index: 10;
    height: sizem(172);
    background-color: #ff6855;
    border-radius: 999px;
    font-size: sizem(30.3);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(3.33);
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    > div {
      width: 100%;
      cursor: pointer;
    }
  }

  .botton {
    width: sizem(22);
    margin: 0 auto 0;
    cursor: pointer;
  }

  .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    > img {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 3;
        &:nth-child(#{$i}) {
          transform: translateY((random(10) - 50) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }

    .left1 {
      // @include img_l_pc(314, 417, 0);
      display: none;
    }

    .left2 {
      // @include img_l_pc(240, -150, 220);
      // transform: rotate(30deg) !important;
      // animation: none !important;
      display: none;
    }

    .left3 {
      // @include img_l_pc(18, 654, 235);
      display: none;
    }

    .mo1 {
      @include img_r_m(375, 50, 0);
    }

    .mo2 {
      @include img_l_m(375, 0, -24);
    }

    .mo3 {
      @include img_r_m(200, 44, -24);
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
import Parallax from '@/components/Parallax.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section7',

  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    Parallax,
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
