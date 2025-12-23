<template>
  <article class="s5">
    <div class="bg">
      <img src="./s5/bg.webp" class="bg1" v-if="!isMobile">
      <img src="./s5/bgm.jpg" class="bg1" v-else>
<div class="caption">示意圖僅供參考</div>
    </div>
    <div class="main">
      <div class="txt">
        <p class="desc" data-aos="fade-left" data-aos-delay="0">區內5大主題公園，讓自然成為日常生活的一部分</p>
      </div>
      <img src="./s5/en.svg" class="en" data-aos="fade-left" data-aos-delay="500">
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative overflow-hidden flex justify-center text-[#FFF];
 /* min-height: size(1080);
  max-height: size(1080);*/
  background: #65632A;
  width: 100%;
  height: size(1080);
  //height: 480px;
  //padding:7em 0 7em 0;
  font-size: size(32);
  gap: 4.4em;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: flex-end;
  padding: 0;

  .bg {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    .bg1 {
      width: 100%;
      height: 100%;
    }
  }
  .caption{
    position: absolute;
    bottom:0.5em;
    right: .5em;
    font-size: size(14);
    color: #fff;
    z-index: 99;
  }


  .main {
    margin: 0;
    position: relative;
    padding-right: size(30);
    padding-bottom: size(50);

    .txt {
      text-align: justify
    }

    .en {
      width: size(680);
      z-index: 99;
      position: relative;
      margin-top: 0;
    }
  }

  .timg {
    @apply flex;
    flex-direction: column;
    width: size(735);
    height: auto;
    margin: .5em 0;
    text-align: center;
    justify-content: space-between;

    .t2 {
      width: size(735);
    }

    .t3 {
      width: size(588);
      margin: auto auto 0;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
  /*  height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(700);*/
    height: auto;
    padding: 0;
    font-size: sizem(14);
    margin-bottom: 0em;
    gap: 0;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: flex-end;


    .bg {
      position: relative;
     /* overflow: hidden;
      width: 100%;
      position: absolute;*/
      height: sizem(274);
     //top: 0;

      .bg1 {
        width: 100%;
      }
    }
  .caption{
    left:auto;
    right: .5em;
    font-size: sizem(12);
  }

    .main {
      width: auto;
      padding-right: sizem(30);
      padding-bottom: sizem(10);
      text-align: right;
    padding-right:sizem(20);

      .txt {
        line-height: 2.3;
    padding-top: sizem(30);
      }

      .en {
        width: sizem(300);
    margin: sizem(10) 0 sizem(40) auto;
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
  /*{
    img:new URL("./s4/0.jpg", import.meta.url).href ,
    caption: "中華西路接軌九份子重劃區、86快速道路"
  },*/
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>
