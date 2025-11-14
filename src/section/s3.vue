<template>
  <article class="s3" ref="s3">
    <img src="./s3/spot.png" class="spot">
    <div class="semicircle"></div>
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">十大關鍵價值登場 <br v-if="isMobile">台中置產最想解答</h3>
    </div>
    <div class=" oall">
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>小資必看</span>
        <img src="./s3/1.svg" alt="經貿特區 最低總價" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>捷運當道</span>
        <img src="./s3/2.svg" alt="橘線O10站350米(預定地)" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>城心極點</span>
        <img src="./s3/3.svg" alt="中科X產業園區X台中車站三角之心" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>越住越富</span>
        <img src="./s3/4.svg" alt="600億UP國家級建設" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>書香環境</span>
        <img src="./s3/5.svg" alt="逢甲X中國醫雙大學城" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>綠海為鄰</span>
        <img src="./s3/6.svg" alt="中央公園20萬坪樹海當鄰居" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>純靜居住</span>
        <img src="./s3/7.svg" alt="低密度住宅區純靜零店面" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>超高坪效</span>
        <img src="./s3/8.svg" alt="挑高3米58放大收納空間" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>安心品牌</span>
        <img src="./s3/9.svg" alt="麗寶集團半世紀建築深耕" class="t" />
      </div>
      <div>
        <img src="./s3/o.svg" alt="o" class="o" />
        <span>輕盈付款</span>
        <img src="./s3/10.svg" alt="全台首創微笑新輕安" class="t" />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex justify-center bg-[#E6E6E6] flex-col;
  width: 100%;
  // height: sizem(863);
  padding: 3.2em 0 2em 0;
  font-size: sizem(16);
  overflow: hidden;
  /*background: url("./s3/bgm.jpg") center;
  background-size: cover;*/

  @media screen and (min-width: 768px) {
    height: size(1080);
    padding: 3.1em 0 0 0;
    /* background-image: url("./s3/bg.jpg");*/
    font-size: size(20);
  }

  .spot {
    position: absolute;
    top: sizem(-100);
    left: sizem(0);
    width: sizem(290);
    pointer-events: none;
    transform: rotate(90deg);
    transform-origin: 0 100%;
    z-index: 2;

    @media screen and (min-width: 768px) {

      top: 0;
      left: auto;
      right: size(360);
      width: size(616);
      transform: scaleY(-1);
      transform-origin: 50% 50%;
    }
  }

  .semicircle {
    position: absolute;
    bottom: 0;
    right: sizem(-300);
    aspect-ratio: 1/1;
    width: sizem(600);
    background: linear-gradient(180deg, #fbe4c000 45.90%, #ffdca566 100%);
    border-radius: 50%;
    pointer-events: none;

    @media screen and (min-width: 768px) {
      left: size(-777);
      right: auto;
      width: size(1554);

    }
  }

  .txt {
    text-align: center;


    .title {
      margin-bottom: .1em;
    }

    .subtitle {
      font-size: 1em;
      font-weight: 500;

      svg {
        height: 2em;
        display: inline-block;
        vertical-align: bottom;
      }

      @media screen and (min-width: 768px) {
        font-size: 1.25em;
      }
    }
  }

  .oall {
    position: relative;
    color: #603813;
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 3;

    div {
      position: relative;
      width: sizem(160);
      height: sizem(160);
      background: url("./s3/o.png");
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        width: size(312);
        height: size(312);
      }

    }

    .o {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    span {
      position: relative;
      z-index: 2;
      font-weight: 700;
      font-size: sizem(17);
      margin-bottom: .3em;

      @media screen and (min-width: 768px) {
        margin-bottom: .6em;
        font-size: size(30);
      }
    }

    .t {
      position: relative;
      z-index: 2;
      height: sizem(26);

      @media screen and (min-width: 768px) {
        font-size: size(50);
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
    img: new URL("./s3/1.webp", import.meta.url).href,
    caption: "重陽橋"
  },
  {
    img: new URL("./s3/2.webp", import.meta.url).href,
    caption: "北環段捷運情境示意圖"
  },
  {
    img: new URL("./s3/3.webp", import.meta.url).href,
    caption: "新蘆線捷運徐匯中學站"
  },
]
</script>