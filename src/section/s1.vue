<template>
  <article class="s1 relative" id="s1">
    <!-- <img src="./s1/1.jpg" class="t0"> -->
      <div class="bg" data-aos="zoom-out" data-aos-delay="600">
    <picture>
      <source srcset="./s1/1m.png" media="(max-width: 768px)">
      <img src="./s1/1.png" alt="" class="img">
    </picture>
      <img src="./s1/logos.svg" alt="" class="logos" />
      <img src="./s1/light.svg" alt="" class="light" />
      <img src="./s1/light.svg" alt="" class="light2" />
</div>
    <picture>
      <source srcset="./s1/logom.svg" media="(max-width: 768px)">
      <img src="./s1/logo.svg" alt="" class="logo" data-aos="zoom-in" data-aos-delay="600">
    </picture>
    <picture>
      <source srcset="./s1/t1m.svg" media="(max-width: 768px)">
      <img src="./s1/t1.svg" alt="" class="t1" data-aos="zoom-in" data-aos-delay="600">
    </picture>
    <!-- <img src="./s1/en.svg" alt="luxurious" class="en" data-aos="zoom-in">
    <div class="logo" data-aos="zoom-in" data-aos-delay="400">
      <img src="./s1/diamond.webp" alt="" class="p1" >
      <img src="./s1/logo.svg" alt="logo" class="p2">
      <img src="./s1/l.webp" alt="logo" class="p3">
      <img src="./s1/l.webp" alt="logo" class="p4">
      <img src="./s1/l.webp" alt="logo" class="p5">
    </div>
    
    <img src="./s1/t2.svg" alt="" class="coming" data-aos="zoom-in" data-aos-delay="800">


-->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: 9;
  opacity: .3;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  height: calc(100dvh - #{sizem(63)});
  min-height: sizem(750);
  max-height: sizem(750);
  background: linear-gradient(0deg, #009536 4.26%, #020 51.06%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100dvh;
    // height: size(1070);
    min-height: size(1070);
    max-height: size(1070);
    justify-content: space-between;
    padding: 0;
  }

  .bg {
    position: absolute;
    width: 124%;
    height: auto;
    bottom: 0;
    left: -12%;
    object-fit: cover;
    z-index: 1;

    @media screen and (min-width: 768px) {
      bottom: -6%;
      width: auto;
      height: 111%;
      left: 0%;

    }
    .img {
    width: 100%;
    height: auto;
    @media screen and (min-width: 768px) {
    width: auto;
    height: 100%;
    }
    }
  }
  .logos {
    position: absolute;
    width: 14.5%;
    height: auto;
    bottom: 32.5%;
    left: 0; right: 0;
    margin: 0 auto;
    object-fit: cover;
    z-index: 1;

    @media screen and (min-width: 768px) {
      bottom: 35%;
      width: auto;
      height: 25.8%;
      left: 28%;right: auto;

    }
  }
@keyframes shimmer {
  0%, 100% { opacity: 0.5; transform: rotate(0deg) scale(1); }
  40%       { opacity: 1;   transform: rotate(180deg) scale(.3); }
}

  .light{
    position: absolute;;
    width: 10.5%;
    top: 25%;
    left: 38%;
  animation: shimmer 3s ease-in-out infinite;

    @media screen and (min-width: 768px) {
        width: 27%;
        top: 27%;
        left: 18%;

    }
  }
  .light2{
    position: absolute;display: none;
  animation: shimmer 3s ease-in-out infinite;

    @media screen and (min-width: 768px) {
      display: block;
        width: 27%;
        top: 56%;
        left: 46%;

    }
  }

  .logo {
    position: absolute;
    left: 0;
    right: 0;
    top: sizem(130);
    //  top:calc(55% + #{sizem(220 - 750 * .55)});
    margin: 0 auto 0;
    width: sizem(230);

    @media screen and (min-width: 768px) {
      width: size(864);
      top: size(306);
      left: size(345);
      // top:calc(50% + #{size(325 - 1080 * .5)});
    }
  }
  .t1 {
    position: absolute;
    left: 0;
    right: 0;
    top: sizem(335);
    //  top:calc(55% + #{sizem(220 - 750 * .55)});
    margin: 0 auto 0;
    width: sizem(225);

    @media screen and (min-width: 768px) {
      width: size(835);
      top: size(630);
      left: size(353);
      // top:calc(50% + #{size(325 - 1080 * .5)});
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