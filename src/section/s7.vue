<template>
  <article class="s7">
    <div class="title font-['noto_serif_tc']" data-aos="zoom-in">台中港2.0 計劃 雙港特區就位</div>
    <Fullview />
    <div class="caption">空拍示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  @apply relative overflow-hidden bg-[#008DD5];
  width: 100%;
  height: size(1380);
  padding-top: size(300);
  .title {
    @apply absolute z-10;
    font-size:3em;
    left:0;right: 0;text-align: center;
    color: #FFF;
  }
  .caption{
      @apply absolute;
      right:1em;
      bottom: 1em;
      font-weight: 500;
      font-size: size(15);
      color: #FFF;
      text-shadow: 0px size(2) size(2) rgba(0, 0, 0, 0.8);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
    height: sizem(667);
      font-size: size(14);
  .title {
    font-size: sizem(25);
    top: 3.5em;
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
