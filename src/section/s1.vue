<template>
  <article class="s1" id="s1">
    <!-- 
    <img src="./s1/pc.jpg" class="t0" v-if="!isMobile" />
    <img src="./s1/mo.jpg" class="t0" v-else />
  -->

    <img src="./s1/smilecity.svg" alt="smilecity" class="smilecity" />
    <img src="./s1/logo.svg" class="logo" />
    <img src="./s1/t1.svg" class="t1" />
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
  background: center;
  background-image: url("./s1/bgm.png");
  background-size: cover;
  font-size: sizem(16);

  @media screen and (min-width: 768px) {
    height: 100vh;
    max-height: size(1130);
    min-height: size(1130);
    background-image: url("./s1/bg.png");
    font-size: size(50);
  }

  //background: #E60012;
  // padding-bottom: size(140);V
  // &::after{content: "";position: absolute;bottom: 0;height: 1px;width: size(1552);left: 0;right: 0;margin: auto;background: #0006;}

  .t0 {
    position: absolute;
    width: 100%;
    top: -14vw;
    left: 0;
    pointer-events: none;
    z-index: 10;
    opacity: .3;
  }

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
      top: size(153);
      width: size(188);
    }
  }

  .logo {
    width: sizem(256);
    margin: sizem(6) auto sizem(10) auto;

    @media screen and (min-width: 768px) {
      width: size(805);
      margin: size(25) auto;
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
  }
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