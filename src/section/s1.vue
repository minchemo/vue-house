<template>
  <article class="s1" id="s1">
    <!--  
    <img src="./s1/pc.jpg" class="t0" v-if="!isMobile" />
    <img src="./s1/mo.jpg" class="t0" v-else />  -->
    <img src="./s1/bg.jpg" class="bg" />
    <img src="./s1/top.png" class="top" alt="top" data-aos="fade" data-aos-delay="200">
    <div class="img" data-aos="fade-right" data-aos-delay="200">
    <img src="./s1/img.webp" alt="img"></div>
    <img src="./s1/logo.svg" class="logo" />
    <div class="t1 font-['Noto_Serif_TC',serif]">城市C位 3亮登場！<br>訂簽3％、捷運3分鐘、完美3房</div>
    <!-- <div class="flower" data-aos="zoom-out">
      <div class="p1"><img src="./s1/s1p1.png" alt="flower" /></div>
      <div class="p2" v-if="!isMobile"><img src="./s1/s1p2.png" alt="flower" /></div>
      <div class="p3"><img src="./s1/s1p3.png" alt="flower" /></div>
      <div class="p4" v-if="!isMobile"><img src="./s1/s1p4.png" alt="flower" /></div>
      <div class="p5"><img src="./s1/s1p5.png" alt="flower" /></div>
      <div class="p6"><img src="./s1/s1p6.png" alt="flower" /></div>
      <div class="p7"><img src="./s1/s1p7.png" alt="flower" /></div>
      <div class="p8"><img src="./s1/s1p2.png" alt="flower" /></div>
    </div>
    <img src="./s1/tl.svg" class="tl" alt="tl" data-aos="fade-right" data-aos-delay="200">
    <img src="./s1/logo.svg" class="logo" alt="logo" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/t1.svg" class="t1" alt="雙捷加持 天生好運" data-aos="fade-up" data-aos-delay="200">
    <img src="./s1/t2.svg" v-if="!isMobile" class="t2" alt="板南三鶯雙捷運" data-aos="fade-up" data-aos-delay="400">
    <img src="./s1/t2m.svg" v-else class="t2" alt="板南三鶯雙捷運" data-aos="fade-up" data-aos-delay="400">
    <img src="./s1/slogo.svg" class="slogo" alt="slogo" data-aos="fade-up" data-aos-delay="600">
  -->
    <!-- 
    <img src="./s1/smilecity.svg" alt="smilecity" class="smilecity" />
    <img src="./s1/logo.svg" class="logo" />
    <img src="./s1/t1.svg" class="t1" />  -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
    opacity: 0;
  }
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  @apply relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    height: calc(100dvh - sizem(63));
    min-height: sizem(604);
    max-height: sizem(750);
  background: #192C57;
  /* background: url("./s1/bg.jpg") center center;
  background-size: cover; */


  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(900);
    max-height: size(1070);
  }

  .t0 {
    position: absolute;
    width: 100%;
   top: 0;
    left: 0;
    pointer-events: none;
    z-index: 10;
    opacity: .2;
  }
  .bg{
    position: absolute;
    left: 0;
    top:  sizem(-40);
    width: 100%;
    object-fit: cover;
    height: calc(100% - sizem(165));
    @media screen and (min-width: 768px) {
    left: 0;
    top: calc(80% + #{size(0 - 1080 * .80)});
    width: 100%;
    height: auto;

    }
  
  }
  .top{
    position: absolute;
    left:sizem(-194);
    top: 0;
    width: sizem(764);
    @media screen and (min-width: 768px) {
    top: calc(30% + #{size(0 - 1080 * .30)});
    left: 0;
    width: 100%;
    }
  
  }
  .img{
    position: absolute;
    left:30%;
    top:  sizem(31);
//background: #0006;
   //top: calc(50% + #{size(81 - 1080 * .50)});
    width: auto;
    height:calc(100% - #{sizem(255)}) ;
    img{height: 100%;transform: translateX(-68%);}
    @media screen and (min-width: 768px) {
    left:50%;
    top:  size(81);
      height:calc(100% - #{size(130)}) ;
    img{transform: translateX(-118%);}

    }
  
  }


  .logo {
    position: absolute;
    left:sizem(32);
    width: sizem(309);
    top: auto;
    bottom:sizem(100);

    @media screen and (min-width: 768px) {
    bottom:auto;
    left:  size(928);
    top: calc(30% + #{size(240 - 1080 * .30)});
    width: size(590);
    }
  }

  .t1 {
    position: absolute;
    bottom: sizem(45);
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
  font-size: sizem(22);
  text-shadow: 0 0.02em 0.37em #00165E;

    @media screen and (min-width: 768px) {
    bottom:auto;
    top: calc(50% + #{size(528 - 1080 * .50)});
    left: size(615);
     // top: calc(45% + #{size(668 - 1070 * .45)});
   //   width: size(486);
      font-size: size(46);
      line-height: 1.4;
      font-weight: 700;
    }
  }


}

</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>