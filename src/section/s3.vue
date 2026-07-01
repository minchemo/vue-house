<template>
  <article class="s3" ref="s3">
    <div class="txt">
      <div class="en font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">Bright Future</div>
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">新站啟程
未來到站</h3>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="0">高雄百億新站特區
城市榮景全面升級
</div>
      <p class="desc" data-aos="fade-up" data-aos-delay="0">
        「亞灣2.0」聯動海空雙港優勢，<br v-if="isMobile" />高鐵南延共構三鐵未來，<br />
引領高雄車站第一環大翻轉，<br v-if="isMobile" />城市核心榮耀全面升等！</p>
    </div>
    <div class="caption">圖中為開發模擬示意圖。圖/高雄市政府都發局</div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex flex-col;
  width: 100%;
  height: sizem(444);
  padding: 5.3em 0 3.8em 0;
  font-size: sizem(12);
  overflow: hidden;
  color: #FFF;
  background:#328FED center bottom;
    background-image: url("./s3/bgm.webp");
  background-size: 100% auto;
  /*background: url("./s3/bgm.jpg") center;
  background-size: cover;*/

  @media screen and (min-width: 768px) {
    background-image: url("./s3/bg.jpg");
  background-size: cover;
    height: size(1080);
  padding: 3.5em 0 2em 0;
    font-size: size(22);
  }

  .txt {
    text-align: center;

    .title {
    }

    .subtitle {


      @media screen and (min-width: 768px) {
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
]
</script>