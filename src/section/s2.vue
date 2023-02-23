<template>
  <article class="s2">
    <div class="t1" data-aos="fade-up">千億投資 愛在林口</div>
    <Fullview />
    <div class="caption">空拍示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden;
  width: 100%;
  height: size(1080);
  .t1 {
    @apply absolute z-10;
    font-family: 'Noto Serif TC';
    font-weight: 700;
    font-size: size(61);
    letter-spacing: 0.05em;
    color: #FFFFFF;
    top: size(104);
    left: size(696);
  }
  .caption {
    @apply absolute;
    left: size(10);
    bottom: size(10);
    font-weight: 700;
    font-size: size(12);
    color: #FFFFFF;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
    height: sizem(667);
  .t1 {
    font-size: sizem(25);
    top: sizem(50);
    left: sizem(79);
  }
  .caption {
    left: sizem(305);
    bottom: sizem(10);
    font-size: sizem(12);
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
