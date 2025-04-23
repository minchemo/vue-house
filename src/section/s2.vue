<template>
  <article class="s2 relative" id="s2">
    <!-- <img src="./s1/mo.jpg" class="t0" >
    <img src="./s1/bg.svg" class="bg" data-aos="zoom-out" data-aos-delay="0" >
    <div class="box"><span></span></div>
    <Logo data-aos="zoom-in" data-aos-delay="500" />
    <div class="t1" data-aos="zoom-in" data-aos-delay="1000"><span>百貨群聚</span><span>機能齊聚</span><span>雙軌相聚</span></div>
    <img src="./s1/en.svg" class="en" data-aos="zoom-in" data-aos-delay="1000" >
    <div class="t2" data-aos="zoom-in" data-aos-delay="1000">2-3房</div> -->
    <img src="./s2/logo2.svg" class="logo">
    <img src="./s2/main.webp" class="main">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s2 {
  height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(30);
  overflow: hidden;
  padding:size(50) 0 0 0 ;

  .main{margin: 0 auto 0 auto;width: size(338);}

  .logo{position: relative;z-index: 3;margin: auto;
    width:size(470);}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s2 {
    height: sizem(560);
    padding:sizem(50) 0 0 0 ;
    .main{width: sizem(150);}
  .logo{
    width:sizem(190);}
}
}
</style>
<script setup>
// import Logo from "./s1/logo.vue"

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