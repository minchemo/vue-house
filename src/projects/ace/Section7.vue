<template>
  <div class="section7">
    <img loading="lazy" src="./s7/bg.png" :alt="`${info.caseName}_bgimg`" class="bg-img" v-if="isPC">
    <!-- <img src="./mo/w2.png" :alt="`${info.caseName}_bgimg`" class="bg" v-if="isMobile"> -->
    <div class="bg" v-if="isMobile"></div>
    <div class="txt1" v-if="isPC">
      <h3 class="title">全棟鋼骨結構</h3>
      <svg version="1.1" id="svgbg1" class="svgbg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 963 704">
<path fill="#BC926249" d="M926.9,703.9H141.1c-19.5,0-35.3-15.8-35.3-35.3L0.5,35.4c0-19.5,15.8-35.3,35.3-35.3h891.4 c19.5,0,35.3,15.8,35.3,35.3v633.2C962.5,688.1,946.4,703.9,926.9,703.9z"/>
</svg>
      <img loading="lazy" src="./s7/1.png" :alt="`${info.caseName}_img1`" class="img1" data-aos="fade" data-aos-delay="100">
      <img loading="lazy" src="./s7/2.png" :alt="`${info.caseName}_img2`" class="img2" data-aos="fade" data-aos-delay="300">
      <img loading="lazy" src="./s7/3.png" :alt="`${info.caseName}_img3`" class="img3" data-aos="fade" data-aos-delay="500">
      <div data-aos="fade" data-aos-delay="700" class="img4">
      <img loading="lazy" src="./s7/4.png" :alt="`${info.caseName}_img4`"></div>
      <img loading="lazy" src="./s7/5.png" :alt="`${info.caseName}_img5`" class="img5" data-aos="fade" data-aos-delay="900">
    </div>
    <div class="txt1" v-if="isMobile">
      <h3 class="title">全棟鋼骨結構</h3>
      <img loading="lazy" src="./s7/1m.png" :alt="`${info.caseName}_img1`" class="img1" data-aos="fade" data-aos-delay="100">
    </div>
    <div class="txt2">
      <h3 class="title">內外柱灌漿</h3>
      <svg v-if="isPC" version="1.1" id="svgbg2" class="svgbg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 599 704">
<path fill="#BC926249" d="M467.5,703.9H35.8c-19.5,0-35.3-15.8-35.3-35.3V35.4c0-19.5,15.8-35.3,35.3-35.3h527.4 c19.5,0,35.3,15.8,35.3,35.3l-95.7,633.2C502.8,688.1,487,703.9,467.5,703.9z"/>
</svg>
      <img loading="lazy" src="./s7/6.png" :alt="`${info.caseName}_img6`" class="img6" data-aos="fade" data-aos-delay="1100">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.section7 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  font-size: size(30);
  line-height: 1.4;
  .title{
  font-size:1.5em;
  text-align: justify;
  margin: 0 0 0 0.5em;
  font-weight: 700;
  color: #685335;}
}

.bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: initial;

  &:nth-child(1) {
    position: relative;
  }
}
.txt1{
  @include img_l_pc(962, 80, 130);
  top:calc(50% + 100vw * (150 - 540) / 1920);
.svgbg{width: 100%;}
}
.txt2{
  @include img_r_pc(599, 80, 130);
  top:calc(50% + 100vw * (150 - 540) / 1920);
.svgbg{width: 100%;}
}


.img1 {
  @include img_l_pc(294, 110, 110);
  //(540 - 124)*100 / 1920
}

.img2 {
  @include img_l_pc(78, 390, 330);
}

.img3 {
  @include img_l_pc(90, 250, 460);
}

.img4 {
  @include img_l_pc(78, 405, 600);
  img{width: 100%;}
}

.img5 {
  @include img_l_pc(248, 150, 590);
}

.img6 {
  @include img_l_pc(250, 111, 130);
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
  .section7 {
    width: 100vw;
    height: sizem(1067);
    min-height: sizem(1067);
  font-size: sizem(15);
  .title{
    position: absolute;
  font-size:1.6em;
  margin:0 auto 0 auto;
  width: 100%;
  top: -1.5em;
  text-align: center}
  }

  .bg {
    @include img_r_m(375, 0, 0);
    left: 50%;transform: translateX(-50%);
    background: #fff;
    height: 100%;
  }
.txt1,
.txt2{
 position: relative;
 width: sizem(353);
 top: 4em;
 left: auto;
 right: auto;
  margin: auto;
  background: #BC926249;
  border-radius: 2em;
  height:sizem(310);
}
.txt2{
  margin: 5.5em auto 0;
  height:sizem(553);
  }
  .img1 {
    @include img_c_m(334, 29);
  }
  .img6 {
    @include img_c_m(210, 29);
  }
/*
  .img1 {
    @include img_l_m(153, 29, 53);
  }

  .img2 {
    @include img_l_m(31, 186, 172);
  }

  .img3 {
    @include img_l_m(45, 83, 233);
  }

  .img4 {
    @include img_l_m(31, 346, 172);
    img{transform: rotate(90deg);}
  }

  .img5 {
    @include img_l_m(116, 396,  33);
  }

  .img6 {
    @include img_r_m(145, 396, 51);
  }
  */
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section7',

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
