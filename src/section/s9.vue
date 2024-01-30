<template>
  <article class="s9" ref="s9">
   <img class="gif" src="./s1/gif4.gif" alt="" srcset=""> 
    <div class="main">
	 <div class="txt">
	  <h3 class="title" data-aos="fade-up" data-aos-delay="0">自然之藝 風光水綠 </h3>
	  <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0">自然の芸術 優れた風景</h4>
    <hr data-aos="fade-up" data-aos-delay="100" />
	  <p class="desc" data-aos="fade-up" data-aos-delay="200">RiVER PARK將流動的自然從平面的律動延伸至整體外觀的垂直節奏，<br v-if="!$isMobile()">
輕盈的姿態妝點綠色跳躍，延伸新北大都會公園壯闊綠河，<br v-if="!$isMobile()">
現代框景美學，引景入室自然而居。</p>
		</div>
    </div>
    <img src="./s9/img.webp" alt="img" class="img" data-aos="fade-up" data-aos-delay="300">
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s9 {
  @apply relative flex items-center justify-center text-[#FFF];
  width: 100%;
  height:auto;
  padding:8em 0 9em 0;
  font-size:size(17);
  gap:5em;
  flex-wrap: wrap;
  background:url("./s9/bg.webp") center;
  background-size: cover;
  .gif{position: absolute;top: 0;left:-150%;width: 300%;height: 100%;
    mix-blend-mode: overlay;
    opacity: .2;}

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(550);
  flex-direction: column;
  text-align: justify;
}


.txt {
    text-align: center;
    text-shadow: 0 0 6px #00284e;
  .slogo{height:size(45);}
  .title{font-size: 2.8em;
    margin: 0;
    line-height: 1.3;
    text-align: center;
    font-weight: 300;
  }
  .subtitle{
  @apply font-['Noto_serif_TC',sans-serif];
    font-size: 1.1em;letter-spacing: 0.15em;
    margin: 0;
    text-align: center;}
  .desc{
    font-weight: 400;
  }
  hr{width: 23em;margin:1.7em auto;}
    
}

  .img {position: relative;
    margin: 0 -7.5em 0 0;top: 1em;
    flex-basis: size(826);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
  @apply flex-col;
    height: auto;
    padding:sizem(60) 0 sizem(60) 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
  }

  .txt {
    margin-bottom:0em;
  .title{font-size: 2em;margin: 0 0 0.2em;}
  hr{width: 17em;}
  }


  .img {
    width: sizem(330);margin: auto;left: .5em;
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
  gap: 10,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s9/531.jpg", import.meta.url).href ,
    caption: "CITY LINK情境示意"
  },
  {
    img:new URL("./s9/532.jpg", import.meta.url).href ,
    caption: "CITY LINK情境示意"
  },
  {
    img:new URL("./s9/533.jpg", import.meta.url).href ,
    caption: "CITY LINK情境示意"
  },
  {
    img:new URL("./s9/534.jpg", import.meta.url).href ,
    caption: "CITY LINK情境示意"
  },
]
</script>

