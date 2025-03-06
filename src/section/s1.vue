<template>
  <article class="s1 relative bg-[#FFF]" id="s1">
    <img src="./s1/banner-layer-1.png" alt="top" class="top" data-aos="fade-down-left">
    <img src="./s1/banner-layer-2.png" alt="bottom" class="bottom" data-aos="fade-up-right">
    <img src="./s1/logo.png" alt="logo" class="logo" data-aos="zoom-in">

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1 {
  min-height: size(900);
  max-height: size(1070);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(30);
  overflow: hidden;
  $ma:size(30);


  .top{position: absolute;top: 0;right: 0;width: size(844);}
  .bottom{position: absolute;bottom: 0;left: 0;width: size(775);}
  .logo{width: size(1076);}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(700);
   // height: sizem(650);
    font-size:sizem(16);
    justify-content:center;
  .top{width: sizem(422);right: sizem(-50);}
  .bottom{width: sizem(387);left: sizem(-50);}
  .logo{width:sizem(350);}
}
}
</style>
<script setup>
import Logo from "./s1/logo.vue"

import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>