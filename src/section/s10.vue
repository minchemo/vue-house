<template>
  <article class="s10" ref="s10">
    <div class="shine-row">
      <div class="shine-dot dot-iri">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-y">
        <div class="shine-inner"></div>
      </div>
    </div>
    <div class="main">
      <div class="txt">
        <img src="./s10/t1.svg" alt="en" class="t1" data-aos="fade-up" data-aos-delay="0">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">迎向全球ESG浪潮<br>
傲立台中新商辦</h3>
        <img src="./s2/icon.svg" alt="icon" class="icon" data-aos="fade-up" data-aos-delay="400">
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          以國際級眼光打造，美國TITAN金獎實力肯定，<br>
          全方位對接永續標竿的王牌總部大樓。<br><br>

19樓玻璃帷幕地標，於站前門戶璀璨立足。<br>
低碳綠能系統和空中綠洲，搭配充電車位及極速網路，<br>
為頂尖企業打造極致高效的發展基石。</p>
        <img src="./s10/awards.png" alt="awards" class="awards" data-aos="fade-up" data-aos-delay="400">
      </div>
    </div>
          <span class="caption">外觀實景電腦修飾</span>
	
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s10 {
  @apply relative flex;
  width: 100%;
  height: sizem(940);
  padding: sizem(20) 0 0 0;
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #FFF;
    background: url("./s10/bgm.webp") center bottom;

    background-size: 100% auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  height: auto;
    padding: 0 0 0 50.5em;
 //   padding: 6.9em 0 6.9em 0;
    flex-wrap: wrap;
    gap:0em;
    background-image: url("./s10/bg.jpg");
    background-size: cover;

  }

  .main {
    @apply flex;
    padding: 0 sizem(30);
    width: 100%;
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;

    @media screen and (min-width: 768px) {
      padding: size(200) 0 size(100) 0;
      width: size(590);
      background: linear-gradient(180deg, #316ca833 0%, #001b3780 100%);
backdrop-filter: blur(2px);
    }
  }

  .txt {
    padding: sizem(40) 0 sizem(40);
    @media screen and (min-width: 768px) {
      padding: 0;
      .title{
      font-size: 2.2em;

      }
    }
    .awards{width: 9em;margin-top: 2em;
    @media screen and (min-width: 768px) {width: 12em;margin-top: 2em;}
  }

  }

  // size(110)

  .slider {
    margin:0;
      width:100%;
      height: auto;
      @media screen and (min-width: 768px) {
    width: size(840);
      }

    .slide-item {
      @apply bg-cover;
        width: 100%;
        height: sizem(250);
      @media screen and (min-width: 768px) {
      width: size(840);
      height: size(560);

      }

    }

    .splide__pagination {
      left: calc(100% + 6em);
      justify-content: flex-start;
    }
  }
  .shine-row {
    top: 12em;
    left: -.5em;
    @media screen and (min-width: 768px) {
    top: 2.5em;
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

const splide = ref()

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  autoplay: false,
  interval: 4000,
  gap: 0,
//  drag: false
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s10/1.webp", import.meta.url).href,
    caption: "外觀實景電腦修飾",
  },
]
</script>