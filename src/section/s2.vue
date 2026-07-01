<template>
  <article class="s2" ref="s2">
    <div class="txt">
      <div class="subtitle" data-aos="fade-up" data-aos-delay="0">站前特區╳美麗島站</div>
      <div class="en font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">SUPERSTAR EFFECT</div>
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">世界級流量，世界級價值<br />璀璨亞灣，全球聚焦</h3>
      <p class="desc" data-aos="fade-up" data-aos-delay="0">雙港核心座標 國際門戶格局 話題熱搜流量擔當</p>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s2 {
  @apply relative flex flex-col;
  width: 100%;
   height: sizem(534);
  padding: 5.3em 0 3.8em 0;

  font-size: sizem(12);
  overflow: hidden;
  color: #FFF;
  background:#192C57 center bottom no-repeat;
    background-image: url("./s2/bgm.webp");
  background-size: 100% auto;
  /*background: url("./s2/bgm.jpg") center;
  background-size: cover;*/

  @media screen and (min-width: 768px) {
    background-image: url("./s2/bg.jpg");
  background-size: cover;
    height: size(1100);
  padding: 5.8em 0 2em 0;
    font-size: size(22);
  }

  .txt {
    text-align: center;

    .title {
    }

    .subtitle {color: #BD9365;
  // margin-bottom: 0em;
  @media screen and (min-width: 768px) {
  margin-bottom: 0em;
  }
    }
  .en{ 
  margin-bottom: 0.47em;}
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
    img: new URL("./s2/1.webp", import.meta.url).href,
    caption: "重陽橋"
  },
  {
    img: new URL("./s2/2.webp", import.meta.url).href,
    caption: "北環段捷運情境示意圖"
  },
  {
    img: new URL("./s2/3.webp", import.meta.url).href,
    caption: "新蘆線捷運徐匯中學站"
  },
]
</script>