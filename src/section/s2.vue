<template>
  <article class="s2">
   <!--   -->  <div class="txt">
   <ul class="desc">
    <li data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500">位居重陽特區30米集賢路第一排，</li>
    <li data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">臨環狀線Y22五華街站計畫位置，</li>
    <li data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1500">五泰輕軌相會、雙捷運交匯核心，</li>
    <li data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1500">家門前即是家樂福旗艦店，</li>
    <li data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1500">後迎銀河灣北側開發計畫，</li>
    <li data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1500">百年難得一見的超級三重地王，</li>
    <li data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="1500">「鼎藏豐碩」即將登場，佔盡地利優勢！</li>
   </ul>
      </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden;
 // height: size(1059);
  font-size:size(24);
  .txt {text-align: center;position: relative;z-index: 10;
    line-height: 2.6;
    padding: 3.5em 0;
  letter-spacing: .1em;
      font-weight: 500;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
   // height: sizem(550);
  font-size:sizem(16);

  .txt {
    padding: 7.5em 0;
  }


  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
