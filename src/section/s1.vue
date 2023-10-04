<template>
  <article class="s1" id="s1">
    <img src="./s1/bgm.jpg" class="bg" v-if="isMobile">
    <img src="./s1/bg.jpg" class="bg" v-else>
    <img src="./s1/t.svg" data-aos="zoom-in" class="t">


  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full ;
  .bg{width: 100%;}
  .t{position: absolute;top: 0;right: 7%;height: 100%;}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
  .t{top: 7%;right:0;height:auto;width: 100%;}}
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