<template>
  <article class="s2">
      <div class="txt">
    <h3 class="title font-['Noto_Serif_TC']" data-aos="zoom-in" data-aos-delay="200">傲視國際綠海 刷新長勝特區</h3>
      </div>
      <Fullview />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden ;
  width: 100%;
  height:auto;
  .title{
    @apply absolute z-10;
left: 0;right: 0;
color: #FFF;
text-align: center;
    font-size: size(90);
    margin: 1.2em auto .2em;
    line-height: 1.6;
    font-weight: 700;letter-spacing: .04em;

  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  .title{
    font-size: sizem(25);
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
