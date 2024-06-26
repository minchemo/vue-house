<template>
  <article class="s8" ref="s8">
    <img src="./s8/bgm.webp" class="bg" alt="bg" v-if="isMobile">
    <img src="./s8/bg.webp" class="bg" alt="bg" v-else>
    <img src="./s8/img.webp" class="img user-n events-n" alt="外觀" data-aos="fade-up" data-aos-delay="200">>
    <div class="caption">3D外觀模擬示意圖</div>
    <div class="main">
      <div class="txt">
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">建築規劃</h3>
        <h4 class="name" data-aos="fade-up" data-aos-delay="0"><span class="font-['Noto_Serif_TC']">曾聰憲</span>建築師</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">專精於千坪以上大器鉅鑄，與天際對話、共鳴於家的風景；洞見名宅底蘊，思考土地與建築的更多可能性，豪宅名家手筆不同凡想。</p>
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">空間規劃</h3>
        <h4 class="name" data-aos="fade-up" data-aos-delay="0"><span class="font-['Noto_Serif_TC']">潘冠榮</span>總監</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">將空間視為藝術，繁簡兼容演繹質感；台北豪宅御用大師，與連年榮獲TID台灣室內設計大獎，以及日本JCD大賞等亞太國際獎項殊榮。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s8 {
  @apply relative flex items-center text-[#fff] bg-[#000];
  width: 100%;
  height:auto;
  padding:6em 0 5.5em 0; 
  font-size:size(20);
  gap:0em;
  flex-wrap: wrap;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-end;
  .bg{position: absolute;bottom: 0;left: 0;width: 100%;z-index: 1;height: 100%;object-fit: cover;
  }
    .en{width: size(850);position: absolute;top: size(675);left: 0;right: 0;z-index: 2;}

  .main {
    @apply flex;
    flex: 1;
    margin: 0 0 0 auto;
  flex-direction: column;z-index:2;
}
  .title{top: size(372);left:0em;z-index: 3;
  }
.txt{width: size(1370);padding: 2.2em 0 1em 5.4em;
  background:linear-gradient(to left, #7A6A5600 10%,#7A6A56 100%);
 // text-align: center;

  .subtitle{text-align:center;margin: 1.9em auto 0 auto;
        display: inline-block;color:#fff;
    &::after{bottom: -.3em;left: -.15em;height: 1.9em;}
    &::before{left: -1.8em;width: 7.5em;}
  }
  .name{font-size: 1.25em;margin: .7em 0 0 0;
  span{font-size: 1.3em;margin: 0 .5em 0 0;}
  }
  .desc{
    margin: 0em 0 4em;
    width: size(570);
 // text-align: center;
}
}
    .caption{z-index: 3;}
  .img{position: absolute;bottom:0;right:0;width: size(690);z-index: 3
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s8 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
    .en{width: sizem(300);position: absolute;top:sizem(400);left: 0;right: 0;z-index: 2;}
.main {
  padding: 0 0;
  width: 100%;
}
.title{top: sizem(110);left:-5em;
  }

.txt {margin: 3em auto 3em;width: 100%;padding: 0 0 12em 2em;
  background: linear-gradient(135deg, #7A6A5699 50%,#7A6A5600 100%);
  .subtitle{margin: 2.4em auto 0 2em;
    &::after{bottom: -.7em;height: 2.7em;}
    &::before{left:  -4.8em;width: 16em;}
  }
  .name{margin: 1.8em 0 0 0;font-size: 1.1em;}
  .desc{
    width: 90%;
    margin: 0em 0 1em;}
}
  .img{width: sizem(260);
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
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    caption: "康乃薾美國學校"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    caption: "康乃薾實驗高中"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    caption: "文興幼兒園"
  },
]
</script>

