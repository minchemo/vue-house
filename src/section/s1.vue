<template>
  <article class="s1 relative" id="s1">
    <!-- <picture>
      <source  srcset="./s1/mo.png" type="image/png" media="(max-width: 767px)">
      <img src="./s1/pc.png" class="t0"></picture>
      -->
    <div class="bg">
      <img src="./s1/bg-green-l.svg" class="bg-l">
      <img src="./s1/bg-green-r.svg" class="bg-r">
      <img src="./s1/bg.png" class="bg-o">
    </div>


    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/t2.svg" class="t2" data-aos="zoom-in" data-aos-delay="400">

    <div class="button" data-aos="zoom-in" data-aos-delay="600" @click="scrollTo('.order')">
      <img src="./s1/light.png" class="light" alt="light" />立即預約
    </div>
    <img src="./s1/img.png" class="img" data-aos="fade-up" data-aos-delay="0" data-aos-offset="-300">
    <div class="caption">3D外觀透視示意圖</div>
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

// .button 光芒：閃爍放大 + 微旋轉
@keyframes light-glint {

  0%,
  100% {
    opacity: .55;
    transform: scale(.8) rotate(0deg);
  }

  45% {
    opacity: 1;
    transform: scale(1.2) rotate(12deg);
  }

  55% {
    opacity: 1;
    transform: scale(1.1) rotate(8deg);
  }
}

.s1 {
  position: relative;
  height: sizem(667);
  //  height:sizem(667);
  /*  height:calc(100vh - 63px);
  min-height: sizem(604);
    max-height: sizem(750);
    */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100vh;
   // height: size(1070);
    min-height: size(900);
    max-height: size(1080);
    justify-content: space-between;
    padding: 0;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #006045 -7.92%, #009E4B 29.16%, #00B55A 78.59%, #00D26D 115.67%);

    .bg-l,
    .bg-r {
      height: 100vw;

      @media screen and (min-width: 768px) {
        height: 100%;
      }
    }


    .bg-l {
        float: left;
    }

    .bg-r {
        float: right;
    }

      @media screen and (max-width: 767px) {
    .bg-l {
    transform:translate(15%,-10%) rotate(90deg);
    }

    .bg-r {
    transform:translate(-15%,-10.5%) rotate(90deg);
    }
    }

    .bg-o {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: soft-light;
      opacity: .38;
    }
  }

  .logo {
    position: absolute;
    top: calc(50% + #{sizem(80 - 667 * .5)});
    left: sizem(32);
    width: sizem(312);

    @media screen and (min-width: 768px) {
      top: size(255);
      top: calc(50% + #{size(255 - 1070 * .5)});
      left: size(257);
      width: size(876);
    }
  }

  .t1 {
    position: absolute;
    top: calc(50% + #{sizem(205 - 667 * .5)});
    left: sizem(32);
    width: sizem(312);

    @media screen and (min-width: 768px) {
      top: size(555);
      top: calc(50% + #{size(555 - 1070 * .5)});
      left: size(257);
      width: size(876);
    }
  }

  .t2 {
    position: absolute;
    top: calc(50% + #{sizem(290 - 667 * .5)});
    left: sizem(32);
    width: sizem(312);

    @media screen and (min-width: 768px) {
      top: size(790);
      top: calc(50% + #{size(790 - 1070 * .5)});
      left: size(257);
      width: size(876);
    }
  }

  .img {
    position: absolute;
    width: sizem(290);
    z-index: 2;
    bottom: 0;
    right: sizem(40);

    @media screen and (min-width: 768px) {
      width: size(786);
    right:0;
    }
  }

  .button {
    position: absolute;
    top: calc(50% + #{sizem(332 - 667 * .5)});
    left: sizem(123);
    width: sizem(130);
    color: #F5F2CA;
    font-size: sizem(15);
    text-align: center;
    letter-spacing: 0.2em;
    line-height: 1.8;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.8);
    cursor: pointer;

    @media screen and (min-width: 768px) {
      font-size: size(30);
      top: size(875);
      top: calc(50% + #{size(875 - 1070 * .5)});
      left: size(567);
      width: size(253);
    }

    img {
      position: absolute;
      top: -92%;
      left: 37%;
      width: 28%;
      pointer-events: none;
      mix-blend-mode: screen;
      transform-origin: 50% 50%;
      animation: light-glint 3s ease-in-out infinite;
    }

    &::after,
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, #A7967100 0%, #F5F2CA99 54.9%, #D2BD9199 78.4%, #B6906100 100%);
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