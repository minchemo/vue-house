<template>
  <article class="s1 relative" id="s1">
    <!--  <img src="./s1/pc.png" class="t0">  -->
    <div class="box" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="3000">
      <div class="flower">
        <img src="./s1/f01.webp" class="f01">
        <img src="./s1/f02.webp" class="f02">
        <img src="./s1/f03.webp" class="f03">
        <img src="./s1/f01.webp" class="f04">
        <img src="./s1/f03.webp" class="f05">
        <img src="./s1/f1.webp" class="f1">
        <img src="./s1/f2.webp" class="f2">
        <img src="./s1/f3.webp" class="f3">
      </div>
      <div class="t1" data-aos="zoom-in" data-aos-delay="0">在西城靜巷種下生活的香</div>
      <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="200">
      <div class="t2 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="400">地上權輕鬆買</div>
      <div class="t3 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="600">北市成家 溫暖首選</div>
      <div class="t4 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="800">敬<i />請<i />期<i />待</div>
      <img src="./s1/coming.svg" alt="coming soon" class="coming" data-aos="zoom-in" data-aos-delay="1000">
      <a :href="info.line" target="_blank"><img src="./s1/line.svg" alt="line" class="line" data-aos="zoom-in" data-aos-delay="1200">
    </a>
    </div>
    <div class="box2"></div>
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
  opacity: .5;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: sizem(11);

  @media screen and (min-width: 768px) {
    font-size: size(27);
    justify-content: space-between;
    padding: 0;

  }

  /**/
  .box {
    height: sizem(837);
    width: 100%;
    position: relative;

    @media screen and (min-width: 768px) {
      height: 100dvh;
      min-height: size(900);
      max-height: size(1200);

    }
  }

  $t-i: .85em;

  .t1 {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    top: sizem(175);
    letter-spacing: $t-i;
    text-indent: $t-i;
    color: #840000;
    font-weight: 500;
    font-size: 1.08em;

    @media screen and (min-width: 768px) {
      font-size: 1em;
      top:calc(50% + #{size(352 - 1200 * .5)});
    }
  }

  .logo {
    position: absolute;
    top: sizem(219);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: sizem(237);
    fill: #FFF;

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(460 - 1200 * .5)});
      width: 20em;
    }
  }

  $t-i2: .5em;

  .t2 {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    top: sizem(317);
    letter-spacing: $t-i2;
    text-indent: $t-i2;
    color: #BF1924;
    font-weight: 700;

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(680 - 1200 * .5)});
    }
  }

  $t-i3: .1em;

  .t3 {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    top: sizem(376);
    letter-spacing: $t-i3;
    text-indent: $t-i3;
    font-size: 1.444em;
    color: #fff;
    font-weight: 700;
    width: sizem(240);
    border-radius: 1em;
    line-height: 1.4;
    background: linear-gradient(270deg, #9C1A84, #E90F13, #FD4B13);

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(815 - 1200 * .5)});
      width: 14em;
      //     top: size(530);
      //    font-size: size(36);
    }
  }

  .t4 {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    top: sizem(435);
    font-size: 2.2em;
    color: #BF1924;
    font-weight: 700;
    width: 14em;
    border-radius: 1em;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(945 - 1200 * .5)});
      //     top: size(530);
      //    font-size: size(36);
    }

    i {
      display: inline-block;
      width: 1px;
      height: 1em;
      background: currentColor;
      margin: 0 .35em;
      vertical-align: -.13em;
    }
  }

  .coming {
    position: absolute;
    top: sizem(566);
    left: 0;
    right: 0;
    margin: 0 auto;
    fill: #FFF;
    width: sizem(255);

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(1114 - 1200 * .5)});
      width: size(1024);
    }
  }

  .line {
    position: absolute;
    top: sizem(777);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: sizem(163);
    fill: #FFF;

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(1610 - 1200 * .5)});
      width: size(156);
    }
  }

  &::after {
    content: "";
    width: 100%;
    display: block;
    pointer-events: none;
    height: clamp(#{size(622)},
      calc(#{size(622)} + (#{size(1200)} - 100dvh) * .5),
      #{size(772)});
  }

  .f1 {
    position: absolute;
    animation: an 6s ease-in-out infinite alternate;
    transform: rotate(5deg);
    top: sizem(-207);
    left: sizem(-73);
    width: sizem(357);

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(-447 - 1200 * .5)});
      left: size(404);
      width: size(770);
    }
  }

  .f2 {
    position: absolute;
    animation: an 4s ease-in-out infinite alternate;
    transform: rotate(5deg);
    top: sizem(209);
    left: sizem(279);
    width: sizem(322);
    @media screen and (min-width: 768px) {
    top:calc(50% + #{size(-4 - 1200 * .5)});
    left: size(1485);
    width: size(1020);
    }
  }

  .f3 {
    position: absolute;
    animation: an 5s ease-in-out infinite alternate;
    transform: rotate(5deg);
    top: sizem(187);
    left: sizem(-574);
    width: sizem(713);

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(338 - 1200 * .5)});
      left: size(-867);
      width: size(1535);
    }
  }

@keyframes f01 {
  0%{
    transform: translate(-20%, -400%)rotate(-180deg);
  }
  33%{
    transform: translate(50%, -200%)rotate(-20deg);
  }
  66%{
    transform: translate(0%, 0%)rotate(180deg);
  }
  100%{
    transform: translate(200%, 250%)rotate(300deg);
  }
}
  .f01 {
    position: absolute;
    top: sizem(279);
    left: sizem(279);
    width: sizem(136);
    animation: f01 12s linear infinite;
    transform-origin: 50% 50%;
    transform: rotate(180deg);

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(675 - 1200 * .5)});
      left: size(1275);
      width: size(292);
    }
  }

@keyframes f02 {
  0%{
    transform: translate(150%, -150%)rotate(-30deg);
  }
  40%{
    transform: translate(-20%, 0%)rotate(0deg);
  }
  100%{
    transform: translate(150%, 200%)rotate(30deg);
  }
}
  .f02 {
    position: absolute;
    top: sizem(45);
    left: sizem(284);
    width: sizem(89);
    animation: f02 5s linear infinite;

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(139 - 1200 * .5)});
      left: size(1303);
      width: size(191);
    }
  }

@keyframes f03 {
  0%{
    transform: translate(-150%, -350%)rotate(200deg);
  }
  40%{
    transform: translate(20%, 0%)rotate(160deg);
  }
  100%{
    transform: translate(-150%, 300%)rotate(180deg);
  }
}
  .f03 {
    position: absolute;
    top: sizem(214);
    left: sizem(-53);
    width: sizem(88);
    animation: f03 -5s 8s linear infinite;

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(460 - 1200 * .5)});
      left: size(448);
      width: size(190);
    }
  }
@keyframes f04 {
  0%{
    transform: translate(-100%, -150%)rotate(-180deg);opacity: 1;
  }
  60%{
    transform: translate(0%, 0%)rotate(0deg);opacity: 1;
  }
  100%{
    transform: translate(-50%, 200%)rotate(90deg);opacity: 0;
  }
}
  .f04 {
    position: absolute;
    top: sizem(801);
    left: sizem(-9);
    width: sizem(167);
    animation: f04 6s linear infinite;

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(1725 - 1200 * .5)});
      left: size(542);
      width: size(360);
    }
  }
@keyframes f05 {
  0%{
    transform: translate(150%, -300%)rotate(-180deg);opacity: 0;
  }
  60%{
    transform: translate(0%, 0%)rotate(0deg);opacity: 1;
  }
  100%{
    transform: translate(150%, 200%)rotate(90deg);opacity: 0;
  }
}
  .f05 {
    position: absolute;
    top: sizem(689);
    left: sizem(305);
    width: sizem(88);
    animation: f05 6s linear infinite;

    @media screen and (min-width: 768px) {
      top:calc(50% + #{size(1483 - 1200 * .5)});
      left: size(1413);
      width: size(190);
    }
  }
}
</style>
<script setup>
import info from "@/info"
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