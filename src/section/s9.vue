<template>
  <article class="s1" id="s1">
    <img src="./s9/t1.svg" data-aos="zoom-in" class="t1">
    <img src="./s9/t2.svg" data-aos="zoom-in" class="t2">
    <img src="./s9/bg.png" class="bg">


  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full ;
  overflow: hidden;
  background: linear-gradient(0deg, #308BA2 13%, #1C6E7E 39%, #094348 70%, #002F36 100%);;
  .bg{width: 100%;}
  .t1{width:size(750);margin:size(240) auto size(20);display: block;}
  .t2{width:size(450);margin:0 auto size(40);display: block;}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    .bg{width: 100%;height:sizem(70);object-fit: cover;}
  .t1{width:sizem(300);margin:sizem(80) auto sizem(10);display: block;}
  .t2{width:sizem(300);margin:0 auto sizem(20);display: block;}
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