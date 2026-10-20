s2<template>
  <article class="s4 relative" id="s4">
    <picture>
      <source media="(max-width: 768px)" srcset="./s2/bg.webp" />
      <img src="./s2/bg.webp" alt="" class="bg" />
    </picture>

    <img src="./s2/logo.svg" alt="" class="logo" />
    <img src="./s2/t1.svg" alt="" class="t1" />
雙鐵交匯 黃金副都心
雙鐵匯聚、巨蛋擘劃、好市多商圈成形
就在東區的崇聖路旁 昌益以18,000坪旗艦造鎮的壯闊闊擘劃
預告南台南下一座全新都心的誕生
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: sizem(10);
  background: #EB6120;
  height: sizem(604);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(1070);
    max-height: size(1070);

  }
  .bg {
    position: absolute;top: 0;left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  
  }
  .logo{ position: relative;
    width: sizem(244);
    z-index: 2;
    margin: sizem(0) auto sizem(60);
  @media screen and (min-width: 768px) {
    width: size(610);
    margin: size(100) auto size(100);
  }
  }
  .t1{position: relative;
    width: sizem(296);
    z-index: 2;
    filter: drop-shadow(size(2.8) size(2.8) size(3.8) rgba(20, 40, 102, 0.75));
  @media screen and (min-width: 768px) {
    width: size(980); 
    filter: drop-shadow(size(2.5) size(2.5) size(2) rgba(20, 40, 102, .8));
    
    margin: 0 auto;
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