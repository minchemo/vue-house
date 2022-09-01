<template>
    <article class="s2">
        <Fullview />
    </article>
</template>
  
  <style lang="scss" scoped>
  @import '@/assets/style/function.scss';
  
  .s2 {
      width: 100%;
      height: size(1209);
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
      .s2 {
          min-height: size-m(667);
          max-height: size-m(750);
      }
  }
  </style>
  <script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
  