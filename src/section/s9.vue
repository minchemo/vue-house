<template>
  <article class="s9" ref="s9">
    <div class="box"></div>
    <div class="logo"><img src="./s9/icon1.svg" alt="icon"><img src="./s9/icon2.svg" alt="icon"></div>
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
    <div class="title absolute"><img src="./s3/titleicon.png">精工</div>
    <div class="main">
      <div class="txt">
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">世界選品<br v-if="!isMobile">構築恆久安居</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">匯聚全球頂尖品牌，嚴選逸品塑造安適居家；以人為原點，生活為本質細膩體驗，訂製奢華新高度，成就家的恆久美學。</p>
    </div>
    </div>
    <img src="./s9/en.svg" class="en" alt="en">

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s9 {
  @apply relative flex items-center text-[#fff] bg-[#000];
  width: 100%;
  height:auto;
  padding: 8.2em 0 3em 0;
  font-size:size(20);
  gap:0em;
  flex-wrap: wrap;
    flex-direction:row;
    justify-content:flex-start;
    align-items: flex-end;
 .box{position: absolute;height: 100%;width: .5em;top: 0;left: 3em;
background: linear-gradient(to bottom, #7A6A56cc 0%,#7A6A5600 100%); }
.logo{text-align: center;width: 100%;
  img{height:size(82);margin: 0 1.7em;}
}
    .en{width: size(1150);margin: auto auto auto size(30);}
  .main {
    @apply flex;
    flex: 1;
    margin: 0 auto;
  flex-direction: column;z-index:2;
}
  .title{top: size(372);right:0em;z-index: 3;
  }
.txt{width: size(690);padding: 0 0 0 10.5em;
  text-align: right;

  .subtitle{text-align:right;margin: 1.9em auto .4em auto;
        display: inline-block;
    &::after{bottom: -.3em;height: 3.5em;}
    &::before{right: -4.5em;width: 12em;}
  }
  .desc{
    margin: 1.5em 0 3.5em;}
}



  .slider {
    margin: size(125) auto 0 size(270);
    width: size(670);
    height:auto;z-index: 1;text-align: center;
    img{width:100%;margin: auto;
    height:size(440);}
    .caption{position: relative;display: block;
      text-align: left;bottom:0;width: 100%;margin: 1.2em 0;
      right: 0;line-height: 1.25;  font-size:size(20);}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s9 {
@apply flex-col;
  height: auto;
  padding:10em 0 0 0;
font-size:sizem(12);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
.box{width: .5em;top: 0;left: 1.3em;}
.logo{
  img{height:sizem(35);margin:.3em 0;}
}

    .en{width: sizem(360);position: absolute;top:sizem(482);left: 0;right: 0;margin: auto;}

.main {
  padding: 0 sizem(20);
  width: 100%;
}
.title{top: sizem(50);right:-5em;
  }

.txt {margin: 1.9em auto 0em;width: 100%;padding: 0;text-align: center;
  .subtitle{font-size: 1.65em;
        display: inline-block; 
    &::after{bottom: -.7em;height: 2.7em;}
    &::before{right:  -4.8em;width: 16em;}
  }
  .desc{
    margin: 1.5em 0 3em;}
}

.slider {
    margin: sizem(35) auto 0 auto;
    width: 100%;
    img{width: sizem(300);margin: auto;
    height:sizem(200);}
    .caption{  font-size:sizem(12);margin: 1.2em 3em;}
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

