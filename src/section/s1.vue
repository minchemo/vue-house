<template>
  <article class="s1" id="s1">
 <!--  <img src="./s1/mo.jpg" class="t0" v-if="isMobile">
    <img src="./s1/pc.jpg" class="t0" v-else>  --> 
    <img src="./s1/bg.png" class="bg" data-aos="zoom-in" data-aos-delay="0">
    <div class="cover"></div>
    <img src="./s1/logo.svg" class="logo" alt="logo" data-aos="zoom-in" data-aos-delay="500">
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

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
  height:calc(100vh - #{sizem(63)});
  min-height: sizem(604);
  max-height: sizem(750);
  // background: #d62051;
  background: url("./s1/bg.jpg");
  background-size: auto 100%;
  background-position: 50% 0%;
  color: #FFF;
  font-size: sizem(14);

  @media screen and (min-width: 768px) {
    background-position: 50% 50%;
  background-size:cover;
    height: 100dvh;
    min-height: size(900);
    max-height: size(1080);
    font-size: size(35);
  }
  .t0 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .3;
    pointer-events: none;user-select:none;
    z-index: 99;
  }
  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;left: 0;
    z-index: 1;
    transform-origin: 50% 20%;
  }
  .cover {
    position: absolute;
    top: 50%;left: 0;right: 0;margin: auto;
    width: 100%;height: 100%;
    background: linear-gradient(0deg,#089EFB00,#089EFB 50%,#089EFBcc 70%,#089EFB00);
   z-index: 1;
    pointer-events: none;user-select:none;
    @media screen and (min-width: 768px) {
    top: 20%;height: 160%;
    }
  }
  .logo {
    width: sizem(246);
    position: absolute;
    top: sizem(372);
      top:calc(50% + #{sizem(372 - 604 * .5)});
    left: 0;right: 0;margin: auto; z-index: 2;

    @media screen and (min-width: 768px) {
      width: size(663);
      top: size(525);
      top:calc(60% + #{size(520 - 1080 * .6)});
    }
  }
/*
  .train {
    width: 177%;
    position: absolute;
    bottom: 0;
    left: -57%;
    // opacity: .3;

    @media screen and (min-width: 768px) {
      width: 100%;
      bottom: 0;
      left: 0;
    }
  }

  .light {
    width: sizem(568);
    position: absolute;
    bottom: sizem(45);
    left: sizem(-180);
    mix-blend-mode: screen;

    @media screen and (min-width: 768px) {
      width: size(1635);
      bottom: size(118);
      left: size(100);
    }
  }

  .tl {
    width: sizem(94);
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (min-width: 768px) {
      width: size(280);
    }
  }

  .slogo {
    width: sizem(36);
    position: absolute;
    top: sizem(12);
    right: sizem(15);

    pointer-events: none;user-select:none;
    @media screen and (min-width: 768px) {
      width: size(105);
      top: size(52);
      right: size(75);
    }
  }


  .t1 {
    width: sizem(218);
    position: absolute;
    top: sizem(197);
    left: sizem(33);
    filter: drop-shadow(0 0 sizem(8) rgba(39, 13, 73, 0.92));

    pointer-events: none;user-select:none;
    @media screen and (min-width: 768px) {
      width: size(610);
      top: size(215);
      left: size(775);
      filter: drop-shadow(0 0 size(12) rgba(39, 13, 73, 0.92));
    }
  }

  .t2 {
    width: sizem(229);
    position: absolute;
    top: sizem(276);
    left: sizem(36);
    filter: drop-shadow(0 0 sizem(8) rgba(39, 13, 73, 0.6));

    pointer-events: none;user-select:none;
    @media screen and (min-width: 768px) {
      width: size(895);
      top: size(382);
      left: size(338);
      filter: drop-shadow(0 0 size(12) rgba(39, 13, 73, 0.92));
    }
  }

  .t3 {
    width: sizem(169);
    position: absolute;
    top: sizem(385);
    left: sizem(44);
    filter: drop-shadow(0 0 sizem(4) rgba(39, 13, 73, 0.92));

    pointer-events: none;user-select:none;
    @media screen and (min-width: 768px) {
      width: size(370);
      top: size(655);
      left: size(590);
      filter: drop-shadow(0 0 size(8) rgba(39, 13, 73, 0.92));
    }
  }

  .img {
    width: sizem(215);
    position: absolute;
    top: sizem(240);
    right: sizem(0);

    pointer-events: none;user-select:none;
    @media screen and (min-width: 768px) {
      width: size(370);
      top: size(380);
      right: size(455);
    }

    .people {
      width: sizem(232);

      @media screen and (min-width: 768px) {
        width: size(556);
      }
    }

    .bub {
      position: absolute;
      top: sizem(-81);
      right: sizem(33);
      //  right: sizem(20);
      font-size: sizem(18);
      line-height: 1.1;
      text-align: center;
      color: #493366;
      font-weight: 700;
      z-index: 3;
      animation: an 1.5s linear infinite alternate;
      transform: rotate(-5deg);
      transform-origin: -15% 190%;

    filter: drop-shadow(sizem(1) sizem(2) sizem(8) rgba(39, 13, 73, 0.92));

      @media screen and (min-width: 768px) {
        top: size(-115);
        right: size(-240);
        //   right: size(50);
        font-size: size(50);
        transform-origin: -15% 190%;
      filter: drop-shadow(size(2) size(2) size(15) rgba(39, 13, 73, 0.92));
      }

      span {
        display: block;
        font-size: .7em;
      }

      >div {
        animation: an 1.5s linear infinite alternate;
        transform: rotate(2deg);
      }

      img {
        width: 5.4em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -46%)rotate(-47deg);
        transform-origin: 50% 46%;
        z-index: -1;

        //opacity: .5;
        @media screen and (min-width: 768px) {

          transform: translate(-50%, -46%);
        }
      }
    }
  }
*/

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