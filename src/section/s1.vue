<template>
  <article class="s1" id="s1">
    <!--  
    <img src="./s1/pc.png" class="t0" v-if="!isMobile" />
    <img src="./s1/mo.jpg" class="t0" v-else /> -->
    <div class="flower" data-aos="zoom-out">
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
  height: sizem(604);
  background: #7C519F center;

  font-size: sizem(16);

  @media screen and (min-width: 768px) {
    height: 100vh;
    max-height: size(1070);
    min-height: size(900);
    font-size: size(50);
  }

  .t0 {
    position: absolute;
    width: 100%;
    top: -85px;
    left: 0;
    pointer-events: none;
    z-index: 10;
    opacity: .5;
  }

  .flower {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div {
      position: absolute;
    }

    img {
      width: 100%;
    }
    .p1 {
      transform: rotate(5deg);
      transform-origin: 60% 0;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p2 {
      transform: rotate(5deg);
      transform-origin: 60% 50%;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p3 {
      transform: rotate(5deg);
      transform-origin: 60% 50%;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p4 {
      transform: rotate(5deg);
      transform-origin: 100% 80%;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p5 {
      transform: rotate(3deg);
      transform-origin: 100% 100%;
      animation: an 5s ease-in-out infinite alternate;
    }

    .p6 {
      transform: rotate(3deg);
      transform-origin: 0% 100%;
      animation: an 5s ease-in-out infinite alternate;
    }

    .p7 {
      transform: rotate(5deg);
      transform-origin: 0% 100%;
      animation: an 5s ease-in-out infinite alternate;
    }

    .p8 {
      transform: rotate(3deg);
      transform-origin: 50% 100%;
      animation: an 5s ease-in-out infinite alternate;
    }


    @media screen and (max-width: 768px) {
      .p1 {
        top: sizem(-20);
        right: sizem(78);
        width: sizem(93);
      }


      .p3 {
        top: sizem(-100);
        right: sizem(-116);
        width: sizem(218);
      }

      .p4 {
      }

      .p5 {
        top: sizem(65);
        right: sizem(-105);
        width: sizem(157);
        img {
          transform: rotate(-15deg);
        }
      }

      .p6 {
        bottom: sizem(51);
        left: sizem(-86);
        width: sizem(175);
        img {
          transform: rotate(-21deg);
        }
      }

      .p7 {
        bottom: sizem(4);
        left: sizem(-57);
        width: sizem(121);
      }
      .p8 {
        bottom: sizem(-170);
        left: sizem(-53);
        width: sizem(223);

        img {
          transform: rotate(-50.5deg);
        }
      }
    }

    @media screen and (min-width: 768px) {
      .p1 {
        top: size(-94);
        right: size(54);
        width: size(377);
      }

      .p2 {
        top: size(-18);
        right: size(-283);
        width: size(494);
      }

      .p3 {
        top: size(246);
        right: size(-356);
        width: size(514);
      }

      .p4 {
        bottom: size(82);
        right: size(-115);
        width: size(453);
      }

      .p5 {
        bottom: size(-330);
        right: size(-170);
        width: size(369);
      }

      .p6 {
        bottom: size(127);
        left: size(-139);
        width: size(428);
      }

      .p7 {
        bottom: size(-42);
        left: size(-127);
        width: size(443);
      }

      .p8 {
        bottom: size(-315);
        left: size(-5);
        width: size(494);

        img {
          transform: rotate(-50.5deg);
        }
      }
    }
  }

  .tl {
    width: sizem(94);
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (min-width: 768px) {
      width: size(280);
      top: size(60);
    }
  }

  .logo {
    position: absolute;
    top: sizem(105);
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(250);

    @media screen and (min-width: 768px) {
      top: size(144);
      top: calc(45% + #{size(144 - 1070 * .45)});
      width: size(620);
    }
  }

  .t1 {
    position: absolute;
    top: sizem(321);
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(200);

    @media screen and (min-width: 768px) {
      top: size(668);
      top: calc(45% + #{size(668 - 1070 * .45)});
      width: size(486);
    }
  }

  .t2 {
    position: absolute;
    top: sizem(375);
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(250);

    @media screen and (min-width: 768px) {
      top: size(758);
      top: calc(45% + #{size(758 - 1070 * .45)});
      width: size(907);
    }
  }

  .slogo {
    position: absolute;
    top: sizem(532);
    left: 0;
    right: 0;
    margin: auto;
    width: sizem(243);

    @media screen and (min-width: 768px) {
      top: size(985);
      top: calc(75% + #{size(985 - 1070 * .75)});
      width: size(420);
    }
  }

  /*

  .bg {
    width: 100%;
  }

  .smilecity {
    position: absolute;
    left: sizem(31);
    top: sizem(53);
    width: sizem(65);

    @media screen and (min-width: 768px) {
      left: size(106);
      // top: size(153);
      top: calc(20% + #{size(153 - 1100 * .2)});
      width: size(188);
    }
  }


  .t1 {
    width: sizem(343);

    @media screen and (min-width: 768px) {
      width: size(1070);
    }
  }

  .t01 {
    font-weight: 500;
    font-size: 1.55em;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: sizem(92);
    z-index: 3;

    @media screen and (min-width: 768px) {
      font-size: 1.15em;
      top: calc(50% + #{size(150 - 1100 * .5)});
    }
  }*/
}


/* 螢幕尺寸標準 */
/* 平板尺寸 */
/*
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s1 {
    font-size:sizem(14);
    .txt{
    top: sizem(85);
    .en{width: 18em;}
  }
}
}
*/
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