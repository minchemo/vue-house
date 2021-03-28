<template>
  <div class="section2">
    <div class="bg relaive">
      <img
        v-if="!isMobile"
        src="./s2/title.png"
        data-aos="fade-down"
        data-aos-delay="200"
        alt="豪禮六選一"
        class="title"
      />
      <img
        v-if="!isMobile"
        src="./s2/txt1.png"
        data-aos="fade-down"
        data-aos-delay="400"
        alt="六大建材重量級鉅獻!"
        class="txt1"
      />
      <!-- <img
        v-if="!isMobile"
        src="./s2/txt2.png"
        data-aos="fade-down"
        data-aos-delay="600"
        alt="限定前50戶幸運兒"
        class="txt2"
      /> -->
      <img
        v-if="isMobile"
        src="./s2/mo/title.png"
        data-aos="fade-down"
        data-aos-delay="200"
        alt="豪禮六選一"
        class="title"
      />
      <img
        v-if="isMobile"
        src="./s2/mo/txt1.png"
        data-aos="fade-down"
        data-aos-delay="400"
        alt="六大建材重量級鉅獻!"
        class="txt1"
      />
      <!-- <img
        v-if="isMobile"
        src="./s2/mo/txt2.png"
        data-aos="fade-down"
        data-aos-delay="600"
        alt="限定前50戶幸運兒"
        class="txt2"
      /> -->
      <img src="./s2/框.png" alt class="frame" data-aos="fade-down" data-aos-delay="800" />
      <img src="./s2/icon1.png" alt class="icon" data-aos="fade-down" data-aos-delay="1000" />
      <carousel-3d
        ref="mycarousel"
        :width="imgWidth"
        :height="imgHeight"
        :autoplay="true"
        :autoplayTimeout="5000"
        :autoplayHoverPause="true"
        :perspective="0"
        :disable3d="isMobile ? true : false"
        :border="0"
        :display="isMobile ? 1 : 3"
        :space="isMobile ? 'auto' : 'auto'"
        @after-slide-change="onAfterSlideChange"
      >
        <slide
          v-for="(slide, index) in slideList"
          :index="index"
          :key="slide.img"
          class="carousel-3d-item"
        >
          <img :src="slide.img" :class="`carousel-3d-img`" :alt="slide.alt" />
        </slide>
      </carousel-3d>
      <div class="indigator-group">
        <span v-for="(slide, index) in slideList" :key="slide.img">
          <img
            v-show="index === currentIndex"
            src="./s2/點1.png"
            alt
            class="indigator"
            @click="goToSlide(index)"
          />
          <img
            v-show="index !== currentIndex"
            src="./s2/點2.png"
            alt
            class="indigator"
            @click="goToSlide(index)"
          />
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  position: relative;
}

.carousel-3d-slide {
  background-color: transparent;
}

.title {
  width: calc(100vw * (1589 / 1920));
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 3;
}

.txt1 {
  width: calc(100vw * (826 / 1920));
  display: block;
  margin: 0 auto;
  margin-top: calc(-100vw * (126 / 1920));
  position: relative;
  z-index: 3;
}

.txt2 {
  width: calc(100vw * (694 / 1920));
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 3;
}

.frame {
  width: calc(100vw * (982 / 1920));
  display: block;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(-100vw * (200 / 1920));
  z-index: 2;
}

.icon {
  width: calc(100vw * (52 / 1920));
  display: block;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100vw * (580 / 1920));
  z-index: 2;
}

.carousel-3d-container {
  z-index: 3 !important;
  margin-top: 100px !important;
}

.indigator-group {
  margin: 0 auto;

  .indigator {
    margin: 0 10px;
    cursor: pointer;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .fullscreen {
    height: auto !important;
  }

  .title {
    width: 100vw;
  }

  .txt1 {
    width: 80vw;
  }

  .txt2 {
    width: 65vw;
  }

  .frame {
    width: 100vw;
    top: calc(-100vw * (200 / 750));
  }

  .icon {
    width: 20px;
    top: calc(100vw * (420 / 750));
  }

  .carousel-3d-container {
    z-index: 3;
    margin-top: 30px !important;
  }

  .indigator-group {
    margin: 0 auto;

    .indigator {
      width: 25px;
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  name: 'section2',
  mixins: [slider],

  components: {
    Carousel3d,
    Slide,
  },

  data() {
    return {
      isMobile,
      slideList: [
        {
          img: require('./s2/1.png'),
          alt: '豪禮1 日本原裝CLEANUP'
        },
        {
          img: require('./s2/2.png'),
          alt: '豪禮2 全熱交換器'
        },
        {
          img: require('./s2/3.png'),
          alt: '豪禮3 3M全戶淨水器'
        },
        {
          img: require('./s2/4.png'),
          alt: '豪禮4 3M廚下型冷熱飲水機'
        },
        {
          img: require('./s2/5.png'),
          alt: '豪禮5 全室進口木地板'
        },
        {
          img: require('./s2/6.png'),
          alt: '豪禮6 全室超級馬桶'
        },
        // {
        //   img: require('./s2/7.png'),
        //   alt: '豪禮7 全室暖風機'
        // },
      ],
      currentIndex: 0,
      imgWidth: 920,
      imgHeight: 720,
    }
  },

  mounted() {
    if (this.isTablet) {
      this.imgWidth = 800
      this.imgHeight = 650
    }
    if (this.isMobile) {
      this.imgWidth = window.screen.width
      this.imgHeight = window.screen.width * (570 / 750)
    }
  },

  methods: {
    goToSlide(index) {
      this.currentIndex = index
      this.$refs.mycarousel.goSlide(index)
    },
    onAfterSlideChange(index) {
      this.currentIndex = index
    },
  },
}
</script>
