<template>
  <article class="s5" ref="s5">
    <img src="./s5/bgm.svg" class="bg" alt="bg" v-if="isMobile">
    <img src="./s5/bg.svg" class="bg" alt="bg" v-else>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <div class="splide__pagination"></div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption font-['LXGW_WenKai_Mono_TC'] ">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <img src="./s5/enm.svg" class="en user-n events-n" alt="en" v-if="isMobile">
    <img src="./s5/en.svg" class="en user-n events-n" alt="en" v-else>
    <img src="./s5/img.webp" class="img user-n events-n" alt="高鐵示意圖">
    <div class="title absolute"><img src="./s3/titleicon.png">文風</div>
    <div class="main">
      <div class="txt">
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">國際學府 未來菁英養成</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">6所卓越雙語學府—康乃薾國中小、美國學校、實驗國小，以卓越全球化思維涵養教育，把世界帶到孩子眼前；文興國小114學年度預定招生，完整學制培育棟樑，散步上學輕鬆就學。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s5 {
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
  .bg{position: absolute;bottom: 0;left: 0;width: 100%;z-index: 1;opacity: .54;
  }
    .en{width: size(1800);position: absolute;top: size(680);left: 0;right: 0;z-index: 5;filter:drop-shadow(0px 0px 15px rgba(0,0,0,1)) ;}
  .img{position: absolute;bottom: 0;left: size(50);width: size(410);z-index: 5
  }

  .main {
    @apply flex;
    flex: 1;
    margin: 0 auto;
  flex-direction: column;z-index:2;
}
  .title{top: size(372);right:0em;
  }
.txt{width: size(900);padding: 0 0 0 2.8em;
  text-align: center;

  .subtitle{text-align:center;margin: 1.9em auto 0 auto;
        display: inline-block;
    &::after{bottom: -.3em;left: -.15em;height: 2.1em;}
    &::before{left: -1.5em;width: 13em;}
  }
  .desc{
    margin: 1.5em 0 4.5em;
    text-align: justify;}
}



  .slider {
    margin: size(180) auto 0 auto;
    width: size(946);
    height:auto;z-index: 1;text-align: center;
    img{width: size(860);margin: auto;
    height:size(577);}
    .caption{width: 1em;text-align: center;top: 0;right: 0;line-height: 1.25;
  font-size:size(20);}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s5 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
    .en{width: sizem(360);position: absolute;top:sizem(395);left: 0;right: 0;}
  .img{top: sizem(38);left: 0;width: sizem(170);z-index: 2;
  }
.main {
  padding: 0 sizem(20);
  width: 100%;
}
.title{top: sizem(110);right:-6em;
  }

.txt {margin: 6.3em auto 0em;width: 100%;padding: 0;
  .subtitle{
    &::after{bottom: -.7em;right: -.15em;left: auto;height: 2.7em;}
    &::before{right:  -4.8em;left: auto;width: 16em;}
  }
  .desc{
    margin: 1.5em 0 3em;text-align: justify;}
}

.slider {
    margin: sizem(205) auto 0 auto;
    width: 100%;z-index: 3;
    height:auto;text-align: center;
    img{width: sizem(300);margin: auto;
    height:sizem(200);}
    .caption{width: 1em;text-align: center;top: 0;right:1.5em;line-height: 1.25;
  font-size:sizem(12);}
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

