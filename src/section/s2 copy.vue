

<template>
  <article class="s2">

    <ul class="txt" v-if="$isMobile()">
        <li data-aos="fade-down" data-aos-delay="0"><img src="./s1/t2.svg"></li>
        <li data-aos="fade-down" data-aos-delay="100">什麼是永恒？是時間的邊界，或者心境的無界？</li>
        <li data-aos="fade-down" data-aos-delay="200">半輩子崢嶸歲月，是未曾停歇的征程</li>
        <li data-aos="fade-down" data-aos-delay="300">如果說經典，是無畏時間淘洗，是幾經流轉</li>
        <li data-aos="fade-down" data-aos-delay="400">愈發醇厚的風景，那麼忘卻時間線性</li>
        <li data-aos="fade-down" data-aos-delay="500">韶華裡自在旋舞，或為人生換募，慢下腳步</li>
        <li data-aos="fade-down" data-aos-delay="600">像冉冉升起的旭日，海納天地而不喧</li>
        <li data-aos="fade-down" data-aos-delay="700">全世界的時區，都在腦中顯影，永恆，彷彿在此凝泊⋯</li>
        <li>&nbsp;</li>
        <li data-aos="fade-down" data-aos-delay="800">下半場在別墅過，天開地闊大院落</li>
        <li data-aos="fade-down" data-aos-delay="900">大安豪宅品牌興富謙首獻林口，一座TIMELESS VILLA</li>
        <li data-aos="fade-down" data-aos-delay="1000">請您慢慢活，人生更快活，沉浸永恆賦予的意境長流</li>
        <li class="t2" data-aos="fade-down" data-aos-delay="1100">大安豪宅精工品牌興富謙30<br />首獻林口逸墅之作，靜候早鳥名流雍容開卷</li>
      </ul>
      <ul class="txt" v-else>
        <li data-aos="fade-down" data-aos-delay="0"><img src="./s1/t2.svg"></li>
        <li data-aos="fade-down" data-aos-delay="100">什麼是永恒？是時間的邊界，或者心境的無界？</li>
        <li data-aos="fade-down" data-aos-delay="200">半輩子崢嶸歲月，是未曾停歇的征程</li>
        <li data-aos="fade-down" data-aos-delay="300">如果說經典，是無畏時間淘洗，是幾經流轉，愈發醇厚的風景</li>
        <li data-aos="fade-down" data-aos-delay="400">那麼忘卻時間線性，韶華裡自在旋舞，或為人生換募，慢下腳步，像冉冉升起的旭日，海納天地而不喧</li>
        <li data-aos="fade-down" data-aos-delay="500">全世界的時區，都在腦中顯影，永恆，彷彿在此凝泊⋯</li>
        <li>&nbsp;</li>
        <li data-aos="fade-down" data-aos-delay="600">下半場在別墅過，天開地闊大院落，大安豪宅品牌興富謙首獻林口</li>
        <li data-aos="fade-down" data-aos-delay="700">一座TIMELESS VILLA，請您慢慢活，人生更快活，沉浸永恆賦予的意境長流</li>
        <li class="t2" data-aos="fade-down" data-aos-delay="800">大安豪宅精工品牌興富謙30，首獻林口逸墅之作，靜候早鳥名流雍容開卷</li>
      </ul>
      
      
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex font-['Noto_Sans_TC',sans-serif] justify-center text-[#FFF];
  // font-['LXGW_WenKai_Mono_TC',monospace]
  padding:size(120) 0 size(30) 0;
  font-size:size(22);
  line-height: 1.8;
  background: #8fc31f;
.txt{margin:auto;font-weight:400;text-align: center;
img{width: size(860);margin-bottom:size(40) ;}
.t2{margin: size(21) auto;font-weight: 700;color: #ff0;font-size: 1.27em;}
}


}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
  padding:sizem(70) 0 sizem(30) 0;
  text-align: center;
  font-size:sizem(14);
.txt{margin:auto;font-weight:400;text-align: center;
img{width: sizem(300);margin-bottom:sizem(30) ;}
.t2{margin: sizem(25) auto;font-weight: 700;color: #ff0;font-size: 1.27em;}
}


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

