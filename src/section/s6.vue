<template>
  <article class="s6" id="s6">
    <img src="./s6/bg.jpg" class="bg">


  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s6 {
  @apply relative w-full ;
  .bg{width: 100%;}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
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