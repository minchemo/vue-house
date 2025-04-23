<template>
  <article class="s2 relative" id="s2">
    <img src="./s2/logo2.svg" class="logo" data-aos="fade-up" data-aos-delay="0">
    <img src="./s2/main.webp" class="main" data-aos="fade-up" data-aos-delay="200">
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