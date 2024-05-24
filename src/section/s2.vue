<template>
  <article class="s2" ref="s2">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">
  <img src="./s2/title.svg" alt="title">富裕臻心</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0">專注共好 細膩求真</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">富裕臻集結一群身經百戰的夥伴，以專注態度行走建築市場多年，領略房產世界多變，深感實力至上的真理，專注鑽研自身厚度，認真走讀業主、市場及客戶端，整合地產行銷、企業包裝與個案規劃等專業，隨時為您蓄勢上場！<br><br>
持續與時俱進，根據客戶輪廓滾動調整行銷策略，創造面面俱到共贏選擇。對味建築知音，篩選理念相投的業主與客戶，各適其性，追求「不只會賣房子，還會過日子」的價值！
</p>
    </div>
<div class="img absolute">
  <img src="./s2/1.jpg" class="img1 absolute" alt="img1" data-aos="fade-down" data-aos-delay="0">
  <img src="./s2/2.jpg" class="img2 absolute" alt="img2" data-aos="fade-left" data-aos-delay="200">
  <img src="./s2/3.jpg" class="img3 absolute" alt="img3" data-aos="fade-up" data-aos-delay="400" v-if="!isMobile">
  <img src="./s2/3m.jpg" class="img3 absolute" alt="img3" data-aos="fade-up" data-aos-delay="400" v-else>
  <img src="./s2/en.svg" class="en absolute" alt="en" data-aos="fade-right" data-aos-delay="600">
</div>
  <img src="./s1/icon.svg" class="icon absolute" alt="icon">
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s2 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:19em 0 14em 0;
  font-size:size(17);
  gap:3em;
  flex-wrap: wrap;
.txt{width:size(500);margin: 0 size(880) 0 0;
  .title{
    position: relative;margin: 0 0 3em;
    img{height: 1.95em;display: inline-block;
      vertical-align: bottom;
      margin: 0 1em .3em 0;
    }
    &::before{
      content: "";
      position: absolute;
      top: .9em;
      left: -2em;
      width: 340%;height: 90%;border-left: 1px solid #B7A999;border-bottom: 1px solid #B7A999;
    }
  }
}
.img{top:size(164);left: size(858);
.img1{width:size(408);top: 0;left: 0;}
.img2{width:size(527);top: size(430);left:size(61);}
.img3{width:size(538);top:size(30);left: size(408);}
.en{width:size(136);top: size(90);left:  size(770);}
}
  .icon{
    right:size(900);
    bottom:size(0);
    width: size(107);transform: rotate(-130deg);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
    height: auto;
    padding: 3.3em 0 21em;
  font-size:sizem(14);
  flex-wrap:nowrap;
  gap:0em;

  .txt{
    width:sizem(314);margin: 0 auto 0 auto;
    .title{
      top: 0;
      left: 2em;
      margin: 0 0 2.5em;
    &::before{
      content: "";
      top: 0em;
      width: 150%;height: 150%;
    }

    }
  }
.img{top:sizem(410);left:sizem(31);

  .img1{width:sizem(117);top: 0;left: 0;}
.img2{width:sizem(182);top: sizem(134);left:0;}
.img3{width:sizem(210);top:sizem(56);left: sizem(135);}
.en{width:sizem(107);top: 0;left:  sizem(207);}
}
  .icon{
    right:auto;
    left:sizem(15);
    bottom:sizem(30);
    width: sizem(60);
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

</script>

