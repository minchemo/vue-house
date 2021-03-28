<template>
  <div class="section10">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s10/bg.jpg" alt class="img" />
        <img src="./s10/bg2.png" alt class="img" />
        <img src="./s10/stitlea.png" alt="金獎設計團隊規劃 全齡滿意最實用空間" class="img" />
        <img src="./s10/titlea.png" alt="九大公設" class="img" />
        <div :class="`slide`" data-aos="fade" data-aos-delay="200">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s51-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
          </div>
          <div class="slide-text">
              <div class="title">{{slideList[slideIndex].title}}</div>
            </div>
        </div>
        <div class="text">影音活動室、兒童遊戲室、健身房、瑜伽室<br />練琴室...等九大全齡公設規劃</div>
      </div>
      <div v-if="isMobile">
        <img src="./s10/mo/bg.jpg" alt class="img" />
        <img src="./s10/mo/bg2.png" alt class="img" />
        <img src="./s10/mo/stitlea.png" alt="金獎設計團隊規劃 全齡滿意最實用空間" class="img" />
        <img src="./s10/mo/titlea.png" alt="九大公設" class="img" />
        <div :class="`slide`" data-aos="fade" data-aos-delay="200">
          <div
            v-for="(slide, index) in slideList"
            :class="`slide-img ${slideIndex === index ? 'active' : ''}`"
            :key="`s51-slide-${index}`"
          >
            <img :class="`slide-img ${slideIndex === index ? 'active' : ''}`" :src="slide.src" alt />
            <div class="slide-text">
              <div class="title">{{slideList[slideIndex].title}}</div>
            </div>
          </div>
        </div>  
        <div class="text">影音活動室、兒童遊戲室、健身房、瑜伽室<br />練琴室...等九大全齡公設規劃</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}

.text {
  width: calc(100vw * 415 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #666666;
  right: calc(100vw * 155 / 1920);
  bottom: calc(100vw * 64 / 1920);
  position: absolute;
}

.slide-text {
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: right;
  color: #ffffff;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 2px 10px;
}

.slide {
  width: calc(100vw * 1225 / 1920);
  position: absolute;
  left: 0;
  top: calc(100vw * 108 / 1920);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 490 / 1920);
    right: calc(100vw * 75 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
    overflow: visible;
  }

  .img {
    &:nth-child(1) {
      position: relative;
      height: calc(100vw * 550 / 375);
    }
  }

  .text {
    width: calc(100vw * 241 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #666;
    left: calc(100vw * 37 / 375);
    top: calc(100vw * 220 / 375);
    bottom: auto;
    right: auto;
  }

  .slide {
    bottom: 0;
    width: 100vw;
    top: auto;
  }

  .slide-text {
    font-size: calc(100vw * 20 / 375);
    text-shadow: 0 0 1px #000;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section10',
  mixins: [slider],
  data() {
    return {
      isMobile,
      slideList: [
        {
          src: require('./s10/img1.jpg'),
          title: '3D參考示意圖',
        },
        {
          src: require('./s10/img2.jpg'),
          title: '3D參考示意圖',
        },
        {
          src: require('./s10/img3.jpg'),
          title: '3D參考示意圖',
        },
        {
          src: require('./s10/img4.jpg'),
          title: '3D參考示意圖',
        },
        {
          src: require('./s10/img5.jpg'),
          title: '3D參考示意圖',
        },
        {
          src: require('./s10/img6.jpg'),
          title: '3D參考示意圖',
        },
        {
          src: require('./s10/img7.jpg'),
          title: '3D參考示意圖',
        },
        {
          src: require('./s10/img8.jpg'),
          title: '3D參考示意圖',
        },
        {
          src: require('./s10/img9.jpg'),
          title: '3D參考示意圖',
        },
      ],
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
