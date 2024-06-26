<template>
  <article class="s10" ref="s10">
    <img src="./s10/bgm.svg" class="bg" alt="bg" v-if="isMobile">
    <img src="./s5/bg.svg" class="bg" alt="bg" v-else>
    <div class="slider" data-aos="fade-up" data-aos-delay="200">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <div><img :src="img.img" :alt="img.caption">
      <span class="caption">3D模擬示意圖</span></div>
      <span class="caption  font-['LXGW_WenKai_Mono_TC'] ">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <img src="./s10/en.svg" class="en user-n events-n" alt="en" data-aos="fade-up" data-aos-delay="0">
    <div class="title absolute" data-aos="fade-up" data-aos-delay="0"><img src="./s3/titleicon.png">空間</div>
    <div class="main">
      <div class="txt">
        <h3 class="subtitle" data-aos="fade-up" data-aos-delay="0">藝賞公設 沉浸悠居日常</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">公設是家的延伸、品味的實現，於輕奢時尚中安定身心，營造全齡極致體驗；與日本最大「紀伊國屋書店」攜手選冊，一心一藝打造書香社區，伴讀緻美閱享時光。</p>
    </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s10 {
  @apply relative flex items-center text-[#3E3A39] bg-[#000];
  width: 100%;
  height:auto;
  padding:0 0 0em 0;
  font-size:size(20);
  gap:0em;
  flex-wrap: wrap;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-end;
    background: url("./s10/bg.webp");
    background-size: cover;
  .bg{position: absolute;bottom: 0;left: 0;width: 100%;z-index: 1
  }
    .en{width: size(480);position: absolute;top: size(695);left: auto;right: size(215);z-index: 2;}
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

  .subtitle{text-align:center;margin: 2.2em auto 0 auto;
        display: inline-block;
    &::after,
    &::before{background: #958078;}
    &::after{bottom: -.3em;left: -0.15em;height: 2.1em;}
    &::before{left: -1.5em;width: 13em;}
  }
  .desc{
    font-weight: 400;
    margin: 1.5em 0 4.5em;}
}



  .slider {
    margin: size(165) auto 0 auto;
    width: size(950);
    height:auto;z-index: 1;text-align: center;
    img{width: 100%;
    height:size(577);}
    .slide-item{
    div{position: relative;width: size(860);margin: auto;}
    .caption{font-size:size(12);left: .5em;text-align: left;}
     > .caption{width: 1em;text-align: center;top: 0;right: .2em;left: auto;line-height: 1.25;
  font-size:size(20);color: #3E3A39;}
}
  .splide__pagination {
    bottom: -1.5em;
    justify-content: flex-start;left: 3em;
  }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


.s10 {
@apply flex-col;
  height: auto;
  padding: 0;
font-size:sizem(14);
flex-wrap:nowrap;
margin-bottom:0em;
gap:0em;
    .en{width: sizem(175);position: absolute;top:sizem(405);left:auto;right: sizem(35);z-index: 2;}
  .img{top: sizem(38);left: 0;width: sizem(170);z-index: 2;
  }
.main {
  padding: 0 sizem(20);
  width: 100%;
}
.title{top: sizem(105);left:-5em;
  }

.txt {margin: 3.5em auto 0em;width: 100%;padding: 0;
  .subtitle{
    &::after{bottom: -.7em;height: 2.7em;}
    &::before{left:  -4.8em;width: 16em;}
  }
  .desc{
    margin: 1.5em 0 3em;}
}

.slider {
    margin: sizem(210) auto 0 auto;
    width: 100%;z-index: 2;
    height:auto;text-align: center;
    img{height:sizem(200);}
  
  .slide-item{
    div{width: sizem(300);}
    .caption{font-size:sizem(11);}
     > .caption{font-size:sizem(12);width: 1em;text-align: center;top: 0;right:1.2em;line-height: 1.25;;}
}

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
  pagination:globals.$isMobile()?false:true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s10/1.jpg", import.meta.url).href ,
    caption: "迎賓大廳"
  },
  {
    img:new URL("./s10/2.jpg", import.meta.url).href ,
    caption: "交誼廳"
  },
  {
    img:new URL("./s10/3.jpg", import.meta.url).href ,
    caption: "閱覽室｜紀伊國屋選冊"
  },
  {
    img:new URL("./s10/4.jpg", import.meta.url).href ,
    caption: "健身房"
  },
  {
    img:new URL("./s10/5.jpg", import.meta.url).href ,
    caption: "兒童遊戲區"
  },
]
</script>

