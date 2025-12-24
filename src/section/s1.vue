<template>
  <article class="s1" id="s1">
 <!--  <img src="./s1/mo.jpg" class="t0" v-if="isMobile">
    <img src="./s1/pc.jpg" class="t0" v-else> -->  

    <img src="./s1/train.png" class="train" alt="train" data-aos="fade-left" data-aos-duration="3000">
    <img src="./s1/light.png" class="light" alt="light" data-aos="fade-left" data-aos-delay="200"
      data-aos-duration="1000">
    <img src="./s1/tl.svg" class="tl" alt="tl" data-aos="fade-down" data-aos-delay="200">
    <img src="./s1/slogo.svg" class="slogo" alt="slogo" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/logo.svg" class="logo" alt="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t1.svg" class="t1" alt="t1" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/t2m.svg" class="t2" alt="t2" v-if="isMobile" data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/t2.svg" class="t2" alt="t2" v-else data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/t3.svg" class="t3" alt="t3" data-aos="zoom-in" data-aos-delay="600">
    <div class="img" data-aos="fade-left" data-aos-duration="3000">
      <img src="./s1/img.png" alt="img" class="people" />
      <div class="bub">
        <div>板南線<span>✕</span>三鶯線</div>
        <img src="./s1/bubbles.svg" alt="img" />
      </div>
    </div>



    <!--   <img src="./s1/bgm.svg" class="bg" v-if="isMobile">
    <img src="./s1/bg.svg" class="bg" v-else>
    <div class="txt">
      <img src="./s1/logo.svg" class="logo" alt="曼谷青玉" data-aos="zoom-in" data-aos-delay="0">
      <img src="./s1/t1.svg" class="t1" alt="曼谷新都心 置產新標地" data-aos="zoom-in" data-aos-delay="400">
      <div class="t2" data-aos="zoom-in" data-aos-delay="400"><span>7.5坪-15坪　室內輕裝</span><b>海外買房一站式服務</b></div>
    </div>
  <img src="./s1/mo.jpg" class="t0">
    <img src="./s1/mo.jpg" class="t0">
    <div class="txt">
      <div class="t1" data-aos="fade-right" data-aos-delay="0">市心<b>2</b>字頭<img src="./s1/logo.svg" class="logo" data-aos="fade-right" data-aos-delay="200" /></div>
      <div class="t2" data-aos="fade-right" data-aos-delay="400">日系選冊宅<b>2-4</b>房&ensp;北外環<b>5</b><span>分鐘</span></div>
      <div class="t3" data-aos="fade-right" data-aos-delay="600">THE LANDMARK<span>262-8888</span></div>
  </div>  -->
    <!--  <div class="caption" data-aos="fade-up" data-aos-delay="800" data-aos-offset="-200">佳展建設✕燿鴻廣告</div>
  <img src="./s1/img.webp" class="img" data-aos="fade-up" data-aos-delay="700" data-aos-offset="-200">  -->
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
  height:calc(100vh - #{sizem(63)});
  max-height: sizem(604);
  min-height: sizem(604);
  // background: #d62051;
  background: url("./s1/bgm.jpg") center bottom;
  background-size: 100% auto;
  color: #FFF;
  font-size: sizem(14);

  @media screen and (min-width: 768px) {
    background-image: url("./s1/bg.jpg");
    height: 100vh;
    max-height: size(1295);
    min-height: size(1295);
    font-size: size(35);
  }

  //background: #E60012;
  // padding-bottom: size(140);V
  // &::after{content: "";position: absolute;bottom: 0;height: 1px;width: size(1552);left: 0;right: 0;margin: auto;background: #0006;}
  .t0 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .3;
    pointer-events: none;user-select:none;
  }

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

  .logo {
    width: sizem(182);
    position: absolute;
    top: sizem(129);
    left: sizem(40);
    filter: drop-shadow(0 0 sizem(8) rgba(39, 13, 73, 0.92));

    @media screen and (min-width: 768px) {
      width: size(398);
      top: size(231);
      left: size(355);
      filter: drop-shadow(0 0 size(12) rgba(39, 13, 73, 0.92));
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

  /*
 .bg{position: absolute; top: 0;left: 0;width: 100%;height: 100%;object-fit: cover;pointer-events: none;user-select: none;}

.txt{font-weight: 500; line-height: 1.7;width: auto;position: relative;user-select: none;text-align: center;pointer-events: none;
padding:0;display: block;
  @media screen and (min-width: 768px) {padding:2em 0 0 0;}
}
.logo{width: sizem(305);display: block;
  @media screen and (min-width: 768px) {width: size(760);}
}
.t1{width: sizem(335);margin:3.1em auto .3em;
  @media screen and (min-width: 768px) {width: size(830);}
}
.t2{
  span{
    display: inline-block;
    font-weight: 500;margin: 0 0.6em 0 0;
    border: 1px solid #fff;
    border-width: 1px 0;letter-spacing: .06em;
    padding:0em 0 0.04em 0;
  }
  b{
    font-weight: 500;font-size: 1.37em;color: #EFEF92;letter-spacing: .01em;}
}
*/
  /*
 .txt{font-weight: 500; line-height: 1.3;width: auto;position: relative;user-select: none;
  b{font-weight: 400;letter-spacing: 0;}
}
 .t1{font-size: 5.3em;font-weight: 600;letter-spacing: -.06em;
  filter:drop-shadow(0.042em 0.035em 0.015em #000);
  b{font-size: 1.4em;margin: auto .01em auto .04em;vertical-align: -.03em;}
  @media screen and (min-width: 768px) {
font-size: 4.4em;
  }
 }
 .logo{display: block;width: 2.52em;margin: -.1em -.1em auto .0em;
  @media screen and (min-width: 768px) {
    display: inline-block;width: 2.52em;margin: -.3em -.1em auto .36em;}
}
 .t2{font-size: 2em;letter-spacing: -.04em;margin:.7em auto auto auto;
  b{font-size: 1.2em;margin: auto .0em auto .08em;vertical-align: -.03em;}
  span{display: inline-block;width: 1em;line-height: 1.05;font-size: .44em;}
  @media screen and (min-width: 768px) {
    margin:-.35em auto auto auto;
  }
}
 .t3{color: #c3ad7b;margin:.6em auto 8.6em .5em;letter-spacing:0.03em;
  span{display: block;font-size: 3.4em;margin:-.17em auto auto -.05em;letter-spacing: -.03em;}
  @media screen and (min-width: 768px) {
    margin:.6em auto 1em .5em;
  }
}
 .caption{position: absolute; bottom:.6em;left:1.3em;font-size: .7em;user-select: none;
  @media screen and (min-width: 768px) {
    font-size: .65em;
  }
}
 .img{position: absolute; bottom: sizem(-115);right: sizem(-60);width: sizem(330);
  @media screen and (min-width: 768px) {
    bottom: size(-280);right: size(60);width: size(830);
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