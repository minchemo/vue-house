<template>
  <div class="section4">
    <div v-if="!isMobile">
      <div class="container relative">
        <img
          src="./s4/title.png"
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
              v-for="index in 9"
              :key="`slide1-ball${index}`"
            >
          </div>
        </div>
        <div class="title-block absolute flex">
          <div
            class="title"
            data-aos="fade"
            data-aos-delay="400"
          >
            1分鐘前台北開會<br />15分鐘後在家耍廢
          </div>
          <div
            class="desc"
            data-aos="fade"
            data-aos-delay="600"
          >
            快速路網大集合<br />
            車行約5分鐘直上中山高、約15分鐘快速直達台北市<br />
            南來北往隨時正常發揮<br />
            在這裡不止重新定義時間<br />
            更懂得快意生活就該如此隨心奔馳
          </div>
        </div>
        <img
          src="./s4/map.jpg"
          alt=""
          class="map-bg"
        >
        <div class="imgs flex wrap flex-jb flex-ab">
          <img
            src="./s4/1.jpg"
            alt=""
            class="img"
            data-aos="fade"
            data-aos-delay="600"
          >
          <img
            src="./s4/2.jpg"
            alt=""
            class="img"
            data-aos="fade"
            data-aos-delay="700"
          >
          <img
            src="./s4/3.jpg"
            alt=""
            class="img"
            data-aos="fade"
            data-aos-delay="800"
          >
        </div>
        <div
          class="context absolute"
          data-aos="fade"
          data-aos-delay="900"
        >
          <div class="context-item flex-ac">
            <img
              src="./ball/bright.png"
              alt=""
            >
            <div class="context-title">
              3高
            </div>
            <div class="context-desc">
              中山高+汐五高+五楊高
            </div>
          </div>
          <div class="context-item flex-ac">
            <img
              src="./ball/bright.png"
              alt=""
            >
            <div class="context-title">
              3捷
            </div>
            <div class="context-desc">
              機捷+蘆洲線+五泰輕軌
            </div>
          </div>
          <div class="context-item flex-ac">
            <img
              src="./ball/bright.png"
              alt=""
            >
            <div class="context-title">
              4特快
            </div>
            <div class="context-desc">
              台64線+台65線+台1線+新北環快
            </div>
          </div>
          <div class="context-item flex-ac">
            <img
              src="./ball/bright.png"
              alt=""
            >
            <div class="context-title">
              公車站
            </div>
            <div class="context-desc">
              10線公車，約8分鐘直達蘆洲捷運站
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isMobile"
      class="relative"
    >
      <Map
        :hand="require('./arrow.png')"
        :bgSrc="require('./mo/4/map.jpg')"
      ></Map>
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
      <img
        src="./s4/title.png"
        alt=""
        class="label absolute"
        data-aos="fade"
        data-aos-delay="1000"
      >
      <div class="title-block absolute">
        <div
          class="title"
          data-aos="fade"
          data-aos-delay="400"
        >
          1分鐘前台北開會<br />15分鐘後在家耍廢
        </div>
        <div
          class="desc"
          data-aos="fade"
          data-aos-delay="500"
        >
          快速路網大集合<br />
          車行約5分鐘直上中山高<br />
          約15分鐘快速直達台北市<br />
          南來北往隨時正常發揮<br />
          在這裡不止重新定義時間<br />
          更懂得快意生活就該如此隨心奔馳
        </div>
      </div>
      <div class="context absolute">
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
            3高
          </div>
          <div class="context-desc">
            中山高+汐五高+五楊高
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
            3捷
          </div>
          <div class="context-desc">
            機捷+蘆洲線+五泰輕軌
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
          <div class="context-title">
            4特快
          </div>
          <div class="context-desc">
            台64線+台65線+台1線+新北環快
          </div>
        </div>
        <div
          class="context-item flex-ac"
          data-aos="fade"
          data-aos-delay="900"
        >
          <img
            src="./ball/bright.png"
            alt=""
          >
          <div class="context-title">
            公車站
          </div>
          <div class="context-desc">
            10線公車，約8分鐘直達蘆洲捷運站
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

.label {
  width: size(133);
  top: size(55);
  left: size(137);
}

.title-block {
  top: size(86);
  left: size(327);
  width: size(950);

  .title {
    font-size: size(48);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.26;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;
    margin-right: size(35);
    white-space: nowrap;
  }

  .desc {
    font-size: size(25);
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    white-space: nowrap;
  }
}

.map-bg {
  width: 100vw;
  object-fit: cover;
}

.imgs {
  width: size(886);
  margin: 0 auto;
  margin-top: size(-130);

  .img {
    object-fit: cover;
    &:nth-child(1) {
      width: size(481);
      height: size(412);
    }

    &:nth-child(2) {
      width: size(396);
      height: size(277);
    }
    &:nth-child(3) {
      width: size(398);
      margin-left: size(240);
      margin-top: size(5);
    }
  }
}

.context {
  top: size(1820);
  left: size(1160);
}

.context-item {
  width: 100%;
  padding: 0 10px;
  margin-right: -5px;
  margin-bottom: 5px;
justify-content: flex-start;

  img {
    width: 12px;
    margin-right: 5px;
    display: inline-block;
  }
    &:nth-child(1) .context-title,
    &:nth-child(2) .context-title{
  letter-spacing: 1.5em;

    }
    &:nth-child(3) .context-title{

  letter-spacing: 0.25em;
    }
}

.context-title {
  flex:0 0 auto ;
  background-color: #fff;
  border-radius: 20px / 20px;
  padding: 3px 15px;
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
  width: 4.7em;overflow: hidden;
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
  z-index: 1;
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
    height: size(130);
    left: size(50);
    top: size(267);
  }

  .ball2 {
    width: size(80);
    top: size(23);
    right: size(653);
  }

  .ball3 {
    width: size(234);
    right: size(52);
    top: size(72);
  }

  .ball4 {
    height: size(68);
    top: size(1700);
    left: size(332);
  }

  .ball5 {
    height: size(302);
    right: size(-80);
    top: size(1499);
  }

  .ball6 {
    height: size(105);
    right: size(317);
    top: size(1799);
  }

  .ball7 {
    width: size(384);
    top: size(1899);
    left: size(59);
  }

  .ball8 {
    width: size(76);
    top: size(2250);
    left: size(578);
  }

  .ball9 {
    width: size(181);
    top: size(2150);
    right: size(85);
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

  .label {
    width: size-m(97);
    top: size-m(27);
    left: size-m(30);
    z-index: 1;
  }

  .title-block {
    top: size-m(121);
    left: size-m(26);
    width: size-m(300);
    z-index: 2;

    .title {
      font-size: size-m(36);
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.26;
      letter-spacing: normal;
      text-align: right;
      color: #ffffff;
      margin-right: 0;
      margin-bottom: size-m(15);
    }

    .desc {
      font-size: size-m(15);
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;
    }
  }

  .context {
    top: size-m(973);
    left: size-m(23);
    z-index: 1;
  }

  .context-item {
    width: 100%;
    padding: 0 0;
    text-align: left;
    margin-bottom: size-m(15);
  }

  .context-title {
    background-color: #fff;
    border-radius: 20px / 20px;
    padding: 3px 15px;
    font-size: size-m(20);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: #3d2824;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: size-m(10);
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
    color: #fff;
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

  .swiper-container {
    margin-top: size-m(-250);
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
      height: size-m(125);
      left: size-m(293);
      top: size-m(-30);
    }

    .ball2 {
      width: size-m(59);
      top: size-m(316);
      right: size-m(19);
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
import Map from '@/components/Map.vue'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section4',

  mixins: [slider],
  components: {
    swiper,
    swiperSlide,
    Map,
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
        { src: require('./mo/4/1.jpg') },
        { src: require('./mo/4/2.jpg') },
        { src: require('./mo/4/3.jpg') },
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
