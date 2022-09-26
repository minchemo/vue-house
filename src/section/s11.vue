<template>
  <article class="s11" data-aos="fade-up" data-aos-delay="0">
    <p class="hidden">07
      360-0033
      高大特區 雙景觀 2-3 房 援中路398號
      悦揚國際 上嘉行銷 此篇皆為3D與情境示意圖</p>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s11 {
  position: relative;
  width: 100%;
  height: size(365);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/section/s11/bg.jpg');
  background-size: cover;
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s11 {
    height: size-m(143);
    background-image: url('@/section/s11/bg_m.jpg');
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
