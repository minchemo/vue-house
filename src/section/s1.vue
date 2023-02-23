<template>
  <article class="s1">
    <img class="leaf l" v-if="!$isMobile()" src="@/section/s1/leaf_l.png" alt="" srcset="">
    <img class="leaf r" v-if="!$isMobile()" src="@/section/s1/leaf_r.png" alt="" srcset="">
    <img class="leaf mb" v-if="$isMobile()" src="@/section/s1/leaf_mb.png" alt="" srcset="">
    <img class="leaf b" v-if="!$isMobile()" src="@/section/s1/leaf_b.png" alt="" srcset="">
    <img class="leaf b" v-else src="@/section/s1/leaf_b_m.png" alt="" srcset="">
    <div class="main">
      <img data-aos="fade-up" src="@/section/s1/logo.svg" class="logo" alt="" srcset="">
      <p data-aos="fade-up" data-aos-delay="200" class="t1">轉身繁華 衷於回家</p>
      <p data-aos="fade-up" data-aos-delay="400" class="t2">四座公園<span>｜</span>眾樹之靜<span>｜</span>28-47坪</p>
      <div data-aos="fade-up" data-aos-delay="600" class="t3">
        <img src="@/section/s1/line.svg" alt="" srcset="">
        <p>02-2552-8888</p>
        <img src="@/section/s1/line.svg" alt="" srcset="">
      </div>
      <img data-aos="fade-up" data-aos-delay="800" v-if="!$isMobile()" class="order-btn" src="@/section/s1/order-btn.svg" alt="" srcset="" @click="scrollTo('.order')">
      <img data-aos="fade-up" data-aos-delay="1000" class="logo2" src="@/section/s1/logo2.png" alt="" srcset="">
      <img data-aos-delay="1700" data-aos="fade-right" class="leaf-small" src="@/section/s1/leaf_small.png" alt=""
        srcset="">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-image: url('@/section/s1/bg.jpg');

  .leaf {
    @apply select-none pointer-events-none absolute z-10;
    &.l {
      @apply mix-blend-multiply;
      width: size(423);
      top: -#{size(78)};
      left: -#{size(18)};
      animation: wave 3s alternate-reverse infinite ease-in-out;
      transform-origin: top left;
    }
    &.r {
      @apply mix-blend-multiply;
      width: size(423);
      top: -#{size(78)};
      right: -#{size(18)};
      animation: wave 3s alternate-reverse infinite ease-in-out;
      transform-origin: top right;
    }
    &.b {
      width: 110%;
      bottom: 0;
      left: 50%;
      margin-left: -55%;
      animation: wave2 3s alternate-reverse infinite ease-in-out;
      transform-origin: bottom center;
    }

    @keyframes wave {
      to {
        transform: skew(5deg, 1deg) rotate(-2deg)
      }
    }
    @keyframes wave2 {
      to {
        transform: skew(10deg, 0deg) rotate(0deg)
      }
    }

  }
  .main {
    @apply absolute w-full flex flex-col items-center text-white;
    bottom: size(155);
    .leaf-small {
      @apply absolute;
      width: size(69.54);
      right: size(627.03);
      top: size(149.91);
    }
    .logo {
      width: size(563.74);
    }
    .t1 {
      @apply relative;
      font-family: 'Noto Sans TC';
      font-weight: 700;
      font-size: size(37);
      letter-spacing: 0.79em;
      margin-right: -0.79em;
      margin-top: size(26.82);
      transform-style: preserve-3d;

      &::after {
        content: '';
        position: absolute;
        right: 7%;
        bottom: 0;
        width: size(184.71);
        height: size(76.92);
        background-size: contain;
        background-image: url('@/section/s1/style.png');
        transform: translateZ(-1px);
        animation: fadeIn 1s forwards;
        animation-delay: 1400ms;
        opacity: 0;

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        } 
      }
    }
    .t2 {
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(61);
      letter-spacing: 0.05em;
      margin-right: -0.05em;
      margin-top: size(55);
      span {
        color: #EAD690;
      }
    }
    .t3 {
      @apply flex justify-center items-center;
      gap: size(20);
      margin-top: size(29);
      p {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(50);
        letter-spacing: 0.05em;
        background: linear-gradient(90deg, #F3EC88 0%, #D19E33 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      img {
        width: size(241);
      }
    }
    .order-btn {
      @apply hover:opacity-60 cursor-pointer;
      width: size(268.97);
      margin-top: size(21.5);
    }
    .logo2 {
      margin-top: size(66.34);
      width: size(194);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: sizem(667);
    max-height: sizem(812);
    overflow: hidden;
    background-image: url('@/section/s1/bg_mb.jpg');
    

    .leaf {
      &.mb {
        @apply mix-blend-multiply w-full top-0 left-0;
      }
      &.b {
        width: sizem(536.64);
        bottom: -#{sizem(135.58)};
        left: -#{sizem(64.61)};
        margin-left: 0;
        animation: wave2 3s alternate-reverse infinite ease-in-out;
        transform-origin: bottom center;
      }
  }
  .main {
    @apply absolute w-full flex flex-col items-center text-white;
    bottom: sizem(169);
    .leaf-small {
      @apply absolute;
      width: sizem(27.84);
      right: sizem(62.4);
      top: sizem(49.2);
    }
    .logo {
      width: sizem(225.69);
    }
    .t1 {
      font-size: sizem(15);
      margin-top: sizem(10);

      &::after {
        width: sizem(73.95);
        height: sizem(30.79);
      }
    }
    .t2 {
      font-size: sizem(19);
      margin-top: sizem(36.67);
    }
    .t3 {
      gap: sizem(4.49);
      margin-top: sizem(18.89);
      p {
        font-size: sizem(20);
      }
      img {
        width: sizem(60);
        height: sizem(1);
      }
    }
    .logo2 {
      margin-top: sizem(57.56);
      width: sizem(119.17);
    }
  }
  }
}
</style>
<script setup>
import { inject, computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
    smoothScroll({
        scrollTo: document.querySelector(el)
    })
    menuOpen.value = !menuOpen.value;
}
</script>
