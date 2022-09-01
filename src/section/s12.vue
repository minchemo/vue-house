<template>
    <article class="s12">
        <Fullview2 />
    </article>
</template>
  
  <style lang="scss" scoped>
  @import '@/assets/style/function.scss';
  
  .s12 {
      width: 100%;
      height: size(1080);
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
      .s12 {
          min-height: size-m(667);
          max-height: size-m(750);
      }
  }
  </style>
  <script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview2 from '../components/fullview2.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
  