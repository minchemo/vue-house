<template>
  <article class="s2" ref="s2">
    <div class="flower" data-aos="zoom-out">
      <div class="p2"><img src="./s1/s1p2.png" alt="flower" /></div>
      <div class="p1"><img src="./s1/s1p1.png" alt="flower" /></div>
    </div>
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">板南線上超低價 <br v-if="isMobile" /><b>8</b>大買點強運登場</h3>
    </div>
    <div class="oall font-['Noto_Sans_TC',sans-serif]">
      <div>
        <img src="./s2/o.svg" alt="o" class="o" />
        <span class="t">科技前線</span>
        <span>並肩鴻海<br>AI產業聚落</span>
      </div>
      <div>
        <img src="./s2/o.svg" alt="o" class="o" />
        <span class="t">雙捷站點</span>
        <span>板南線x三鶯線<br>頂埔站500米</span>
      </div>
      <div>
        <img src="./s2/o.svg" alt="o" class="o" />
        <span class="t">發展熱點</span>
        <span>7大都更案<br>重磅加持</span>
      </div>
      <div>
        <img src="./s2/o.svg" alt="o" class="o" />
        <span class="t">輕盈入手</span>
        <span>16坪2房<br>最強格局</span>
      </div>
      <div>
        <img src="./s2/o.svg" alt="o" class="o" />
        <span class="t">純靜安居</span>
        <span>公園森景<br>純靜住宅區</span>
      </div>
      <div>
        <img src="./s2/o.svg" alt="o" class="o" />
        <span class="t">職人建築</span>
        <span>耐震設計<br>智慧節能宅</span>
      </div>
      <div>
        <img src="./s2/o.svg" alt="o" class="o" />
        <span class="t">名品建材</span>
        <span>美日德韓<br>精裝建材</span>
      </div>
      <div>
        <img src="./s2/o.svg" alt="o" class="o" />
        <span class="t">安心工法</span>
        <span>5年防水保固<br>15年結構保固</span>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s2 {
  @apply relative flex justify-center flex-col;
  width: 100%;
  // height: sizem(863);
  padding: 3.8em 0 3.8em 0;
  font-size: sizem(16);
  overflow: hidden;
  background: linear-gradient(180deg, #CDA76C 5%, #EFD99D 75%, #DCBC80 100%);
  /*background: url("./s2/bgm.jpg") center;
  background-size: cover;*/

  @media screen and (min-width: 768px) {
    height: size(1080);
  padding: 3.2em 0 2em 0;
    font-size: size(20);
  }
  .flower {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div {
      position: absolute;
    }

    img {
      width: 100%;
    }
    .p1 {
      transform: rotate(5deg);
      transform-origin: 60% 0;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p2 {
      transform: rotate(5deg);
      transform-origin: 60% 50%;
      animation: an 5s ease-in-out infinite alternate;
    }
    @media screen and (max-width: 768px) {
      .p1 {
        top: sizem(50);
        right: sizem(-30);
        width: sizem(93);
        img {
          transform: rotate(85deg);
        }
      }    
      .p2 {
        top: sizem(-70);
        right: sizem(-20);
        width: sizem(150);
        img {
          transform: rotate(85deg);
        }
      }  
    }

    @media screen and (min-width: 768px) {
      .p1 {
        top: size(-70);
        right: size(155);
        width: size(240);
      }

      .p2 {
        top: size(-45);
        right: size(-115);
        width: size(350);
        img {
          transform: rotate(150deg);
        }
      }

    }
  }


  .txt {
    text-align: center;
    .title {
      margin-bottom: 1em;
      color: #663507;
    @media screen and (min-width: 768px) {
      font-size:size(63);
      margin-bottom: .8em;
      b{
        font-size: 1.5em;
        line-height: 1;
      }
    }
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
    font-size: sizem(13);
    line-height: 1.3;
    text-align: center;

    @media screen and (min-width: 768px) {
margin: 0 auto 3em auto;
      font-size: size(29);
    width: 86%;
    justify-content: space-around;
    }

    div {
      position: relative;
      width: sizem(166);
      aspect-ratio: 1/1;
      background: url("./s2/o.png");
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: .4em;
      @media screen and (min-width: 768px) {
        width: size(350);
      margin-bottom: .2em;
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
      font-weight: 500;
      margin-bottom: .3em;
      height: 1.8em;
      color: #333;

      @media screen and (min-width: 768px) {
     //   margin-bottom: .6em;
      }
    }

    .t {
      position: relative;
      z-index: 2;
      font-size: 1.2em;
      font-weight: 700;
      padding:0 0 .4em 0;
      height: auto;
      color: #76358F;
      border-bottom: 1px solid #76358F;

      @media screen and (min-width: 768px) {}
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