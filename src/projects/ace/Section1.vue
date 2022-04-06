<template>
  <div>
    <div class="section1">
      <!--<img src="./s1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC">
   <img src="./mo/1/bg.png" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile">
      <img src="./mo/1/bg_1_m.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isMobile" data-aos="fade">
       <img src="./s1/title.png" :alt="`${info.caseName}_title`" class="title" data-aos="fade-up">
       <img src="./s1/p2.png" :alt="`${info.caseName}_p2`" class="p2" v-if="isPC" data-aos="zoom-in">
      <img src="./s1/bg_1.jpg" :alt="`${info.caseName}_bg`" class="bg-img" v-if="isPC" data-aos="fade">
      <img src="./s1/01.jpg" :alt="`${info.caseName}_bg`" class="img11" v-if="isPC"> -->
      <!-- <div class="img2" data-aos="fade">
        <img src="./s1/bg2.jpg" :alt="`${info.caseName}_bg`" />
      </div>
      <div class="img3" data-aos="fade">
        <img src="./s1/bg2.jpg" :alt="`${info.caseName}_bg`" />
      </div> -->
      <img
        src="./s1/top.png"
        :alt="`${info.caseName}_logo`"
        class="logo op"
        loading="lazy"
      />
      <img
        src="./s1/top.gif"
        :alt="`${info.caseName}_logo`"
        class="logo screen op"
        loading="lazy"
      />
      <img
        src="./s1/bottom.png"
        :alt="`${info.caseName}_title`"
        class="title op"
        loading="lazy"
      />
      <img
        src="./s1/bottom.gif"
        :alt="`${info.caseName}_title`"
        class="title screen op"
        loading="lazy"
      />
      <div class="overlay"></div>
      <video loading="lazy" preload autoplay muted loop playsinline poster="" id="video" v-if="!isMobile">
        <source src="https://h35.banner.tw/ace/bg_video.mp4" type="video/mp4" />
      </video>
      <video loading="lazy" preload autoplay muted loop playsinline poster="" id="video" v-if="isMobile">
        <source src="https://h35.banner.tw/ace/bg_750_1500.mp4" type="video/mp4" />
      </video>
      <!-- <img src="./s1/l.gif" data-aos="fade" :alt="`${info.caseName}_bg`" class="img4"> -->
      <!-- <img
        src="./s1/building.png"
        :alt="`${info.caseName}_p12`"
        class="p12"
        data-aos="fade-up"
      /> -->
      <!--  <img src="./mo/1/p2.png" :alt="`${info.caseName}_bg`" class="p2" v-if="isMobile" data-aos="zoom-in"> -->
      <div class="order-btn" v-scroll-to="{ element: `#contact` }">
        <span>預約鑑賞</span>
      </div>
      <!--<h1 class="title" data-aos="fade-up">
        不是王牌不出手<br />
        唯有贏家能擁有
      </h1>-->
      <!-- <img src="./s1/t2.png" alt="早鳥優惠驚喜價18-28坪" class="t2" data-aos="fade" data-aos-delay="800"> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.section1 {
  background: #000;
  width: size(1920);
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  overflow: hidden;
  position: relative;

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba($color: #000, $alpha: 0.5);
  }

  video {
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
}
.img11 {
  width: 100%;
  height: 100%;
  //min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
}
.img2 {
  width: 105vw;
  position: absolute;
  top: calc(50% - 45vw);
  left: -27vw;
  display: block;
  transform: rotate(-100deg);
  object-fit: cover;
  mix-blend-mode: screen;
  img {
    width: 100%;
    transform: rotate(180deg);
  }
}
.img3 {
  width: 142vw;
  position: absolute;
  top: calc(50% - 64vw);
  right: -34vw;
  display: block;
  transform: rotate(-100deg);
  object-fit: cover;
  mix-blend-mode: screen;
  img {
    width: 100%;
  }
}
.img4 {
  width: size(746);
  //min-height: 900px;
  position: absolute;
  top: calc(50% - 9.8vw);
  right: 20vw;
  display: block;
  object-fit: cover;
}
.bg-img {
  width: 100%;
  height: 100%;
  //min-height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  transform: scaleY(1.3) rotate(10deg);
  //   animation: flip 5s 0s ease-in-out alternate infinite;
}
@keyframes flip {
  to {
    transform: scale(1.05, 1.2) rotate(4deg);
  }
}
.op{
  animation: op 1s .2s forwards;opacity:0;
}


@keyframes op {
  to {opacity:1;transform: translate(0,0);
  }
}
.logo {
  @include img_r_pc(329.4, 240, 792);
  top: calc(50% - 15vw);transform: translateY(-10%);
  z-index: 5;
}
.screen {mix-blend-mode: screen;
}

.p2 {
  @include img_r_pc(202, 113, 806);
  top: calc(50% - 21vw);
}

.p12 {
  @include img_l_pc(460, 125, 250);
  top: calc(50% + (125 - 1080 * 0.5) * 100vw / 1920);
}

.order-btn {
  @include img_r_pc(45, 803, 69);
  cursor: pointer;
  top: auto;
  bottom: 1.5vw;
  transition: all 0.5s;
  font-size: size(24);
  line-height: 1.2;
  font-weight: 400;
  color: #c39f6d;
  text-align: center;
  span {
    width: 100%;
    display: inline-block;
    padding: 0.8em 0.2em;
    color: #fff;
    z-index: 10;
    background: #c39f6d;
    border-radius: 0.5em;
    position: relative;
  }
  &::before {
    content: "";
    width: 0.25em;
    height: 0.25em;
    border-radius: 50%;
    background: currentColor;
    display: inline-block;
    transform: translateY(-1.5em);
  }
  &::after {
    content: "";
    width: 0.08em;
    height: 100%;
    background: currentColor;
    position: absolute;
    left: calc(50% - 0.04em);
    top: 1em;
    transform: translateY(-1.5em);
    display: inline-block;
    z-index: 0;
  }
  &:hover:before,
  &:hover:after {
    animation: btn 0.5s ease-in-out infinite alternate;
  }
}
@keyframes btn {
  to {
    transform: translateY(-2.5em);
  }
}

.title {
  @include img_r_pc(292.35, 726, 814);
  top: calc(50% + 11vw);
  font-size: size(45);
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: center;
  color: #685335;
  white-space: nowrap;
  z-index: 5;transform: translateY(10%);
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
  .section1 {
    width: 100vw;
    min-height: auto;
    height: calc(100vh - 63px);
    min-height: sizem(750);
    max-height: sizem(750);
    background-size: cover;
    background-attachment: scroll;
    &::after,&::before{
      display: block;content:"";width: 100%;position: absolute;left: 0;
      height: 20vw;
      z-index: 2;
    }
    /*
    &::before{
      top:calc(50% - 81vw);
    background: linear-gradient(to bottom, rgba(0,0,0,1) 2%,rgba(0,0,0,0) 100%);
    }
    &::after{
      top:calc(50% + 61vw);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    }

    video {
     // left:0;
    //  transform: translateX(-50%);
    position: absolute;
    
    top: 50%;left: 0;
    transform: translateY(-50%);
    height:sizem(604);
    }
    */
  }
  .img2 {
    width: 109vw;
    top: -17vw;
    left: -15vw;
    img {
      transform: rotate(270deg);
    }
  }
  .img3 {
    width: 128vw;
    top: auto;
    bottom: -24vw;
    right: -14vw;
    img {
      transform: rotate(90deg);
    }
  }
  .img4 {
    width: 73.933333vw;
    top: calc(50% - 40.8vw);
    right: 13vw;
  }

  .bg-img {
    width: 100vw;
    height: 100%;
    //min-height: 900px;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    object-fit: cover;

    &:nth-child(1) {
      position: relative;
    }
  }

  .logo {
    width: size-m(181.36);
    top: size-m(168);
    left: size-m(97);
  }

  .p2 {
    @include img_r_m(91, 143, 0);
    top: calc(50% + ((100 - 302) * 0.266666vw));
  }

  .p12 {
    @include img_c_m(150, 333);
    top: auto;
    bottom: sizem(-1);
    width: auto;
    height: calc(50% - 10vw);
  }

  .order-btn {
    display: none;
  }

  .title {
    width: size-m(160.96);
    left: size-m(108);
    top: size-m(435);
  }
}
</style>
<script>
// @ is an alias to /src
import { isPC, isMobile, isTablet } from '@/utils'
import info from '@/info'

export default {
  name: 'section1',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  created() { },

  mounted() {
    $('body').on('click touchstart', function () {
      const videoElement = document.getElementById('video');
      if (videoElement.playing) {
      }
      else {
        videoElement.play();
      }
    });
  },

  computed: {},
}
</script>
