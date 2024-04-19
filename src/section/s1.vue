<template>
  <article class="s1" id="s1">
	 <img src="./s1/housem.webp" class="house" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600" v-if="isMobile"> 
	 <img src="./s1/house.webp" class="house" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600" v-else> 
   <img src="./s1/llm.webp" class="style2" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" v-if="isMobile"> 
   <img src="./s1/ll.webp" class="style2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000" v-else> 
    <img src="./s1/txtm.svg" class="all" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" v-if="isMobile" /> 
    <img src="./s1/txt.svg" class="all" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" v-else />
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen ;
  background-image:url("../section/s1/bg.webp");
  background-position: center;
  background-size: cover;
  height: auto;
  
@media screen and (max-width: 767px) {
	background-image:url("../section/s1/bgm.webp");
}
  .t0{position: absolute;width: 100%;top: 0;left: 0; pointer-events: none;opacity: .3;}
  .all{width: 100%;position: relative;z-index: 10;}

  .house{
    position: absolute;
    right:0;
    bottom:0;
    background: transparent;
    z-index: 5;
@media screen and (min-width: 767px) {
  height: 100%;
}
@media screen and (max-width: 767px) {
  width: 100%;
  }
  }
  .style2{
    position: absolute;
    right:0;
    bottom:0;
    mix-blend-mode: screen;
@media screen and (min-width: 767px) {
  height: 100%;
}
@media screen and (max-width: 767px) {
  width: 100%;
  }
}
}

</style>
<script setup>
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