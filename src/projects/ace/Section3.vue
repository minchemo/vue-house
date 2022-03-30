<template>
  <div class="section3">
    <img src="./s3/bg.png" :alt="`${info.caseName}_雙和買房`" class="bg" v-if="isPC">
    <!--<img src="./mo/b.png" :alt="`${info.caseName}_bg`" class="bg" v-if="isMobile"> -->
    <div class="bg" v-if="isMobile"></div>
    <img src="./s3/img_r.png" :alt="`${info.caseName}_雙和買房`" class="img_r" data-aos="fade-down" data-aos-delay="100" @click="showDialog">
    <div class="icon" @click="showDialog"></div>
    <div class="txt">
    <div class="title" data-aos="fade-down" data-aos-delay="100">
      地段王牌
    </div>
    <h1 class="subtitle" data-aos="fade-down" data-aos-delay="200">
      雙和正中心‧享受富饒生活
    </h1>
    <div class="desc flex-c" data-aos="fade-down" data-aos-delay="300">
      富貴線正中心 一高二捷三快五商圈六大橋
    </div>
    <img src="./s3/img_l.jpg" :alt="`${info.caseName}_img_l`" class="img_l" data-aos="fade-down" data-aos-delay="400">
    </div>
    <transition name="swipe-fade" mode="out-in">
      <div class="dialog" v-if="isDialog">
        <img class="close" @click="isDialog = false" src="./all/close.png" alt="close">
        <img src="./s3/img_r.png" :alt="`${info.caseName}_img_r`" class="dialog-map" data-aos="fade-down" data-aos-delay="100">
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section3 {
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg {
  @include img_r_pc(1843, 0, 0);
  height: 100%;
}

.img_r {
  @include img_r_pc(1015, 79, 128);
  top: calc(50% - 25vw);
}

.img_l {
  width: size(518);
  margin: 0.8em auto 0 0;
  float:right;
}

.txt{
  @include img_l_pc(580, 239, 186);
  top: calc(50% - 12.5vw);
  font-size: size(30);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: justify;
  line-height: 1.4;
}
.title {
  font-size:1.5em;
  color: #285065;
  white-space: nowrap;
}

.subtitle {
  font-size:1.6em;
  font-weight: 900;
  color: #685335;
  margin: 0.1em 0 0.33em 0;
}

.desc {
  font-size:1em;
  letter-spacing:-0.04em;
  color: #ffffff;
  background-color: #685335;
  line-height: 1.5;
  padding: 0.2em 0.7em;

}

@media only screen and (max-width: 1440px) {
}
@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section3 {
    width: 100vw;
    height:auto;
    min-height: sizem(600);
    max-height: sizem(900);
    overflow-x: scroll;
  }

  .bg {
    @include img_r_m(375, 0, 0);
    left: 50%;transform: translateX(-50%);
    background: #fff;
    height: 100%;
  }

  .img_r {
    @include img_r_m(375, 20, 0);
    position: relative;
    margin: 0 0  sizem(-50) 0;
  }

  .img_l {
    width: 100%;
    //@include img_l_m(310, 447, 33);
  margin-bottom: sizem(30);
  }
  .icon {
    @include img_r_m(45, 250,290);
    height: sizem(45);
    background: #68533599;
    border-radius: 50%;

    &::before,
    &::after {
      content: '';
      width: 60%;
      display: block;
      position: absolute;
      top: 50%;
      height: sizem(3);
      transform: translateY(-50%);
      left: 20%;
      background: #fff;
      transform-origin: 50% 50%;
    }
    &::before {
      transform: translateY(-50%) rotate(90deg);
    }
  }
  
.txt{
  position: relative;
  width:  sizem(310);
  font-size: sizem(15);
}

  .dialog {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: scroll;

    .slide-content {
      left: 0;
    }

    .dialog-map {
      width: auto;
      height: 100vh;
      background-color: #fff;
    }

    .close {
      width: 35px;
      background: rgba(0, 0, 0, 0.7);
      padding: 5px;
      position: fixed;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section3',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },
  methods: {
    showDialog() {
      if (this.isMobile) {
        this.isDialog = true
      }
    }
  },

  created() {},

  mounted() {},

  computed: {},
}
</script>
