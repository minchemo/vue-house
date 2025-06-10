<template>
  <article class="s7" ref="s7">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">建設齊發<br v-if="isMobile"> 搶進增值第一排</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">北市一橋之隔，新店正轉型為雙北科技重鎮。寶高智慧園區已吸引特斯拉、鴻海、Garmin等國際企業進駐；榮工廠與開明校地華麗轉身，化身河岸繁星創新園區與百億級長照基地，產官共築新未來。十四張聯開案動能蓄勢待發，萬人就業紅利正快速集結。 <br>
          同時，捷運南環段正式啟動，一線直達信義區、板橋區，全面串連雙北14個行政區。與國際企業為鄰，與產業升級並行，現在，就是搶進建設紅利的黃金時機。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s7 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:11em 0 10em 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}
.txt{
 // margin: auto auto 3vw auto;
 padding: 0 0 0;
  .subtitle{font-weight: 400;}
}

  .slider {
    margin: 0;
    flex-basis: size(840);
    width: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
    @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(14);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {margin: 3em auto 2em;padding: 0;
}


  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(250);
      
    }
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
  {
    img:new URL("./s7/1.jpg", import.meta.url).href ,
    caption: "捷運環狀線南環段(示意圖)"
  },
  {
    img:new URL("./s7/2.jpg", import.meta.url).href ,
    caption: "寶高智慧園區(示意圖)"
  },
  {
    img:new URL("./s7/3.jpg", import.meta.url).href ,
    caption: "寶橋工業區"
  },
]
</script>

