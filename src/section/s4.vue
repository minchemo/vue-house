<template>
  <article class="s4" id="s4">
    <img src="./s4/bg.jpg" class="bg">
    <img src="./s4/t.svg" data-aos="zoom-in" class="t">


  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s4 {
  @apply relative w-full ;
  .bg{width: 100%;height:100vh;
  max-height: size(1070);
  min-height: size(900);
  object-fit: cover;
}
  .t{position: absolute;top:calc(50% - #{size(400)});width:size(970);left: 0;right: 0;margin: auto;}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  .bg{width: 100%;height:sizem(280);
  max-height:unset;
  min-height:0;
  object-fit: cover;
}
  .t{top:calc(50% - #{sizem(120)});right:0;height:auto;width:85%;}}
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