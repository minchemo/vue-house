<template>
  <div class="section6">
    <img loading="lazy" src="./s6/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img" v-if="isPC">
    <!-- <img src="./mo/b.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isMobile"> -->
    <div class="bg" v-if="isMobile"></div>
    <img loading="lazy" src="./s6/img.jpg" :alt="`${info.caseName}_img`" class="img">
    <div class="txt">
    <div class="title" data-aos="fade-down" data-aos-delay="100">
      結構王牌
    </div>
    <h1 class="subtitle" data-aos="fade-down" data-aos-delay="200">
      強度比肩台北101<br />ACE級雙制震建築
    </h1>
    <ul class="desc">
      <li data-aos="fade-down" data-aos-delay="300">柱內萬磅灌漿 101同級制震</li>
      <li data-aos="fade-down" data-aos-delay="400">SC鋼骨 SN耐震鋼材 雙S級抗震高標準</li>
      <li data-aos="fade-down" data-aos-delay="500">全建築144支BRB制震器 層層降震保平安</li>
      <li data-aos="fade-down" data-aos-delay="600">業界領導品牌加持 101同級萬磅混凝土</li>
      <li data-aos="fade-down" data-aos-delay="700">地基深扎岩盤 達到最佳耐震力</li>
    </ul>
    <img loading="lazy" src="./s6/logoall.png" :alt="`${info.caseName}_logoall`" class="logoall" data-aos="fade-down" data-aos-delay="800">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section6 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 101%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: initial;
}

.txt{
  @include img_l_pc(540, 168, 679);
  left: calc(50% + 5vw);
  top: calc(50% - 19vw);
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
  font-size:0.9em;
  line-height: 1.5;
  color: #284e62;
  padding-bottom:1em;
  li{position: relative;
  padding:0.32em 0 0.32em 1em;}
  li::before{
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 9' fill='%23c7a578'%3E%3Crect x='0' y='0' width='5' height='5' transform='translate(4 0) rotate(45)'/%3E%3C/svg%3E");
    width: 0.7em;height: 0.7em;
    display: inline-block;
    margin: 0 0.3em 0 -1em;position: relative
  }

}

.img {
  @include img_l_pc(646, 0, 328);
  width:auto;
  height: 90%;
  top: 5%;
  left: auto;
  right: 49%;
  max-height: size(968.5);
}

.logoall {
  width: size(384);
  /* @include img_l_pc(384, 743, 478);
  left: calc(50% + 5vw);
  top: calc(50% + 11vw);*/
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
  .section6 {
    width: 100vw;
    height:auto;
    min-height: sizem(990);
    max-height: sizem(2000);
  }
/*
  .bg {
    @include img_r_m(375, 0, 0);
    transform: skewX(0.5deg);
    transform-origin: bottom;
    height: sizem(992);
  } */
  .bg {
    @include img_r_m(375, 0, 0);
    left: 50%;transform: translateX(-50%);
    background: #fff;
    height: 100%;
  }

.txt{
  position: relative;
  width:  sizem(310);
  font-size: sizem(15);
  top: auto;
  left: auto;
  margin: auto;
}

  .desc {
    font-size: 1.06em;
    padding-bottom: 1.8em;
  }

  .img {
    @include img_c_m(310, 0);
    position: relative;
    margin:  sizem(35) 0 sizem(30) 0;
  height:auto;
  max-height: sizem(2000);
  }

  .logoall {
    width:sizem(310);
    padding-bottom: 1.8em;
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section6',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
      isDialog: false,
    }
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {},
}
</script>
