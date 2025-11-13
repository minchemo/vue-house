<template>
  <article class="s3" ref="s3">
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
          <img src="./s3/1.svg" alt="中科X產業園區X台中車站三角之心" class="t" />
        </div>
        <div>
          <img src="./s3/o.svg" alt="o" class="o" />
          <span>越住越富</span>
          <img src="./s3/1.svg" alt="600億UP國家級建設" class="t" />
        </div>
        <div>
          <img src="./s3/o.svg" alt="o" class="o" />
          <span>書香環境</span>
          <img src="./s3/1.svg" alt="逢甲X中國醫雙大學城" class="t" />
        </div>
        <div>
          <img src="./s3/o.svg" alt="o" class="o" />
          <span>綠海為鄰</span>
          <img src="./s3/1.svg" alt="中央公園20萬坪樹海當鄰居" class="t" />
        </div>
        <div>
          <img src="./s3/o.svg" alt="o" class="o" />
          <span>純靜居住</span>
          <img src="./s3/1.svg" alt="低密度住宅區純靜零店面" class="t" />
        </div>
        <div>
          <img src="./s3/o.svg" alt="o" class="o" />
          <span>超高坪效</span>
          <img src="./s3/1.svg" alt="挑高3米58放大收納空間" class="t" />
        </div>
        <div>
          <img src="./s3/o.svg" alt="o" class="o" />
          <span>安心品牌</span>
          <img src="./s3/1.svg" alt="麗寶集團半世紀建築深耕" class="t" />
        </div>
        <div>
          <img src="./s3/o.svg" alt="o" class="o" />
          <span>輕盈付款</span>
          <img src="./s3/1.svg" alt="全台首創微笑新輕安" class="t" />
        </div>
      </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex  justify-center bg-[#E6E6E6]  flex-col ;
  width: 100%;
  height:sizem(863);
  padding:3.2em 0 0 0;
  font-size:sizem(16);
  /*background: url("./s3/bgm.jpg") center;
  background-size: cover;*/

  @media screen and (min-width: 768px) {
  height:size(1080);
  padding:3.1em 0 0 0;
   /* background-image: url("./s3/bg.jpg");*/
    font-size:size(20);
  }

  .txt {text-align: center;
    .title{margin-bottom: .1em;}
    .subtitle{font-size: 1em;
      font-weight: 500;
      svg{height: 2em;display: inline-block;vertical-align: bottom;
      }
      
  @media screen and (min-width: 768px) {
    font-size: 1.25em;
  }
    }
  }
  .oall{position: relative;color: #603813;
    width:90%;margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    div{position: relative;width: size(312);height: size(312);
      background: url("./s3/o.png");background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

    }
    .o{position: absolute;width: 100%; height: 100%;top: 0;left: 0;}
    span{position: relative; z-index: 2;font-weight: 700;font-size: size(30);margin-bottom: .6em;
    }
    .t{position: relative; z-index: 2;}
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
    img:new URL("./s3/1.webp", import.meta.url).href ,
    caption: "重陽橋"
  },
  {
    img:new URL("./s3/2.webp", import.meta.url).href ,
    caption: "北環段捷運情境示意圖"
  },
  {
    img:new URL("./s3/3.webp", import.meta.url).href ,
    caption: "新蘆線捷運徐匯中學站"
  },
]
</script>