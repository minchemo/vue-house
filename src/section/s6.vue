<template>
  <article class="s6" ref="s6">
    <img src="./s6/bgm.webp" class="bg" alt="bg" v-if="isMobile">
    <img src="./s6/bg.webp" class="bg" alt="bg" v-else>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption  font-['LXGW_WenKai_Mono_TC'] ">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <img src="./s6/en.svg" class="en" alt="en">
    <div class="title absolute"><img src="./s3/titleicon.png">綠境</div>
    <div class="main">
      <div class="txt">
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">蘊綠蒔光 對話閒逸自然</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">10座公園環繞美好植感，綠在城與家之間綻放；水汴頭公園收藏水圳樹影，近擁都市森氧綠肺；創意特色傑克小路公園、音符公園，親子攜手同遊，寓教於樂遊憩親子時光。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s6 {
  @apply relative flex items-center text-[#fff] bg-[#000];
  width: 100%;
  height:auto;
  padding:0 0 0em 0;
  font-size:size(20);
  gap:0em;
  flex-wrap: wrap;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-end;
  .bg{position: absolute;bottom: 0;left: 0;width: 100%;
    height: 100%;z-index: 1;
  }
    .en{width: size(850);position: absolute;top: size(675);left: 0;right: 0;z-index: 2;}
  .img{position: absolute;bottom: 0;left: size(50);width: size(410);z-index: 3
  }

  .main {
    @apply flex;
    flex: 1;
    margin: 0 auto;
  flex-direction: column;z-index:2;
}
  .title{top: size(372);left:0em;z-index: 3;
    img{margin: 0 0 0 -1.7em}
    &::before{transform: rotate(180deg);}
  }
.txt{width: size(900);padding: 0 0 0 2.8em;
  text-align: center;

  .subtitle{text-align:center;margin: 1.9em auto 0 auto;
        display: inline-block;color:#fff;
    &::after{bottom: -.3em;left: -.15em;height: 2.1em;}
    &::before{left: -1.5em;width: 13em;}
  }
  .desc{
    margin: 1.5em 0 4.5em;
    text-align: justify;}
}



  .slider {
    margin: size(180) auto 0 auto;
    width: size(980);
    height:auto;z-index: 1;text-align: center;
    img{width: size(860);margin: auto;
    height:size(577);}
    .caption{width: 1em;text-align: center;top: 0;right: 0;line-height: 1.25;
  font-size:size(20);}
  &::after{content: "";display: block;position:absolute;top:size(-30);left: size(80);
  width: size(860);height: 100%;border: 4px solid #555c;}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s6 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(12);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
    .en{width: sizem(300);position: absolute;top:sizem(400);left: 0;right: 0;z-index: 2;}
  .img{top: sizem(38);left: 0;width: sizem(170);z-index: 2;
  }
.main {
  padding: 0 sizem(20);
  width: 100%;
}
.title{top: sizem(110);left:-5em;
  }

.txt {margin: 4.9em auto 0em;width: 100%;padding: 0;
  .subtitle{font-size: 1.65em;
    &::after,
    &::before{opacity: .5;}
    &::after{bottom: -.7em;height: 2.7em;}
    &::before{left:  -4.8em;width: 16em;}
  }
  .desc{
    margin: 1.5em 0 3em;}
}

.slider {
    margin: sizem(225) auto 0 auto;
    width: 100%;z-index: 2;
    height:auto;text-align: center;
    img{width: sizem(300);margin: auto;
    height:sizem(200);}
    .caption{width: 1em;text-align: center;top: 0;right:1.2em;line-height: 1.25;
  font-size:sizem(12);}
  &::after{top:sizem(-7);left: sizem(45);
  width: sizem(300);height: 100%;border: 2px solid #555c;}
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

