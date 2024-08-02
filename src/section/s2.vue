

<template>
  <article class="s2">
      <ul class="txt">
        <li data-aos="fade-down" data-aos-delay="0">摩天豪邸的高調炫耀</li>
        <li data-aos="fade-down" data-aos-delay="100">彷彿日正當中的刺眼</li>
        <li data-aos="fade-down" data-aos-delay="200">大鳴大放，無所潛藏之爭逐</li>
        <li>&nbsp;</li>
        <li data-aos="fade-down" data-aos-delay="300">當財富已達巔峰，夜深人靜時</li>
        <li data-aos="fade-down" data-aos-delay="400">回盼初心隱現的森林</li>
        <li data-aos="fade-down" data-aos-delay="500">理想境界是一半山林一半城</li>
      </ul>
      <ul class="txt">
        <li data-aos="fade-down" data-aos-delay="600">放慢腳步，最好的品味是內斂自在</li>
        <li data-aos="fade-down" data-aos-delay="700">國際林口之東，俯仰天地之墅</li>
        <li data-aos="fade-down" data-aos-delay="800">讓浩瀚的綠海溫柔包覆</li>
        <li data-aos="fade-down" data-aos-delay="900">洗滌塵囂浮華，撕去社會賦予的標籤</li>
        <li data-aos="fade-down" data-aos-delay="1000">低調富裕的謙隱，像甫上山頭的旭日</li>
        <li data-aos="fade-down" data-aos-delay="1100">海納天地而不喧</li>
        <li data-aos="fade-down" data-aos-delay="1200">世界的風景，你早已收藏心底</li>
      </ul>
      <ul class="txt">
        <li data-aos="fade-down" data-aos-delay="1300">紐約帝國大廈的日出</li>
        <li data-aos="fade-down" data-aos-delay="1400">巴黎聖心堂的晨曦</li>
        <li data-aos="fade-down" data-aos-delay="1500">全世界的時區，都在腦中顯影</li>
        <li data-aos="fade-down" data-aos-delay="1600">永恆，彷彿在此凝泊…</li>
        <li v-if="$isMobile()">&nbsp;</li>
        <li data-aos="fade-down" data-aos-delay="1700">大安豪宅精工品牌 興富謙30鉅獻</li>
        <li v-if="$isMobile()">&nbsp;</li>
        <li data-aos="fade-down" data-aos-delay="1800">國際林口之東 康橋雙語名人聚落</li>
        <li data-aos="fade-down" data-aos-delay="1900">造局者人生新旭 有天有地有院落</li>
      </ul>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex font-['LXGW_WenKai_Mono_TC',monospace] justify-center text-[#000];
  padding:size(55) 0;
  font-size:size(25);
  line-height: 1.83;
.txt{margin:auto size(34) auto size(62);font-weight:400;}

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
  padding:sizem(20) 0;
  text-align: center;
  font-size:sizem(14);


  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  /*{
    img:new URL("./s4/0.jpg", import.meta.url).href ,
    caption: "中華西路接軌九份子重劃區、86快速道路"
  },*/
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

