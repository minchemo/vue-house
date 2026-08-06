<template>
  <article class="s1 relative" id="s1">
    <!-- <img src="./s1/pc.jpg" class="t0"> -->
    <div class="bg">
      <img src="./s1/i2.webp" alt="i2">
      <img src="./s1/i1.webp" alt="i1">
    </div>
    <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/t1.svg" alt="logo" class="t1" data-aos="zoom-in" data-aos-delay="200">
    
    <img v-if="canPlayWebP" src="./s1/0607.webp" class="unicorn" alt="unicorn">
<img v-else src="./s1/0609.png" class="unicorn" alt="unicorn">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: sizem(11);
  background: #EB6120;
  height: sizem(667);   // 給不支援 svh 的舊瀏覽器當 fallback
  height: 100svh;  // 手機工具列跳動问题的正解，數值固定不受工具列影響
    min-height: sizem(667);
    max-height: sizem(812);
  @media screen and (min-width: 768px) {
    font-size: size(27);
    justify-content: space-between;
    padding: 0;
    height: 100vh;
    min-height: size(900);
    max-height: size(1080);

  }

  .bg {
    width: 253%;
    height: 100%;
    position: absolute;
    bottom: sizem(-20);
    left: sizem(0);

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;

      &:nth-child(1) {
        width: 106.5%;
        transform: translateX(2%);
        transform-origin: 0 100%;
        animation: an 10s linear infinite alternate;
      }


    }

    @media screen and (min-width: 768px) {
      width: 100%;
      bottom: calc(30% + #{size(-70 - 1080 * .3)});
      right: 0;
      left: auto;
    }

  }

  .unicorn {
    position: absolute;
    bottom: sizem(45);
    left: sizem(18);
    width: sizem(320);
    display: block;
    aspect-ratio: 1/1;

    @media screen and (min-width: 768px) {
      top: size(204);
      top: calc(50% + #{size(204 - 1080 * .5)});
      left: size(103);
      width: size(822);

    }
  }

  .logo {
    position: absolute;
    top: sizem(76);
      top: calc(55% + #{sizem(76 - 667 * .55)});

    right: sizem(46);
    width: sizem(280);
    margin: 0;

    @media screen and (min-width: 768px) {
      top: size(159);
      top: calc(50% + #{size(159 - 1080 * .50)});
      right: size(230);
      width: size(714);

    }
  }

  .t1 {
    position: absolute;
    top: sizem(260);
      top: calc(50% + #{sizem(260 - 667 * .50)});
    right: 0;
    left: 0;
    margin: auto;
    width: sizem(244);

    @media screen and (min-width: 768px) {
      top: size(610);
      top: calc(55% + #{size(610 - 1080 * .55)});
      margin: 0;
      right: size(234);
      left: auto;
      width: size(710);

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
const canPlayWebP = document.createElement('canvas')
  .toDataURL('image/webp')
  .startsWith('data:image/webp')

</script>