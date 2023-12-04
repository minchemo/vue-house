

<template>
  <article class="s9">
  <!--div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">嚴選建材</h3>
  </div-->
    <div class="main">
      <div class="txt"  v-if="!$isMobile()">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">職人團隊 匠心質作</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">
          獨到眼光 前瞻城市<br>
          呂信坤 / 國鉅機構董事長<br>
          「建築的價值來自於地段的願景未來。」<br><br>

          紐約上城 當代經典<br>
          黃永興 / 黃永興建築師事務所<br>
          「講究建築的原創性，融入風光水綠與環境共生。」<br><br>

          安全頂規 抗震專利<br>
          戴雲發 /中力建築系統團隊 總經理<br>
          「執行全台使用Alfa Safe耐震系統工法建案超過400例。」<br><br>

          大地工程 永恆之奧<br>
          楊永豐 / 豐立工程顧問<br>
          「安全，永遠是家唯一的價值。」<br><br>
        </p>
      </div>


      <div class="txt" data-aos="zoom-in" v-else>
        <transition name="fade" mode="out-in">
          <h4 class="subtitle" :key="currentImg.title" v-html="currentImg.title"></h4>
        </transition>
        <transition name="fade" mode="out-in">
        <p class="desc" :key="currentImg.desc" v-html="currentImg.desc"></p>
        </transition>
      </div>


    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
          
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index" v-lazy:background-image="img.img">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s9 {
  @apply relative overflow-hidden flex items-center justify-end text-[#fff] bg-[#000];
  width: 100%;
  height:size(900);
  padding:0 0 7em 0;
  font-size:size(18);
  gap:8em;
  flex-direction: row-reverse;
  flex-wrap: wrap;

.img{position: absolute;bottom:0;right:size(50);width:size(795);
img{width: 100%;position: relative;}}

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}
.txt {
.title{
&::after,
&::before{
background: #C9A063;
}
}
.subtitle{color: #fff;}
}


  .slider {
    left: 0 !important;
    margin: 0;
    flex-basis: size(959);
      height: size(900);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(959);
      height: size(900);
      
    }
    .splide__pagination{
      left: calc(100% + 8em);
      bottom: size(80);
      justify-content: flex-start;
    color: #C5C5C5; 
    li button.is-active{
      color: #B78E63;
    }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
  @apply flex-col;
  height: auto;
  padding: 0;
  height: sizem(520);  
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap: 2em;

.img{bottom:sizem(230);right:sizem(-30);width:sizem(250);}

 .txt{text-align: center; padding-top:3em;

  .subtitle{
    text-align: center;
    
    &::before,
    &::after
    {
        content: "";
        width: sizem(69);
        height: 1.5px;
        background: #Fff;
        display: inline-block;
        vertical-align: middle;
        
    }
    &::before{
      margin: auto 1em auto 0;
    }
    &::after{
      margin: auto 0 auto 1em;
    }

  }
 
  .desc{
    margin: 0;
  }
 }

  .main {
    padding: 0 sizem(30);
    width: 100%;
}
  .slider {
    height: sizem(350);
    width: 100%;

    .caption {
    font-size:sizem(12); 
    right:sizem(5);
    bottom:sizem(5); 
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(350);
      
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

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
    img:new URL("./s9/1.webp", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s3/1_m.webp", import.meta.url).href : new URL("./s3/1.webp", import.meta.url).href,
    caption: "北外環實景拍攝",
    title:"職人團隊 匠心質作",
    desc:"獨到眼光 前瞻城市<br>呂信坤 / 國鉅機構董事長<br>「建築的價值來自於地段的願景未來。」",
  },
  {
    img:new URL("./s9/2.webp", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s3/1_m.webp", import.meta.url).href : new URL("./s3/1.webp", import.meta.url).href,
    caption: "北外環實景拍攝",
    title:"職人團隊 匠心質作",
    desc:"紐約上城 當代經典<br>黃永興 / 黃永興建築師事務所<br>「講究建築的原創性，融入風光水綠與環境共生。」",
  },
  {
    img:new URL("./s9/3.webp", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s3/1_m.webp", import.meta.url).href : new URL("./s3/1.webp", import.meta.url).href,
    caption: "北外環實景拍攝",
    title:"職人團隊 匠心質作",
    desc:"安全頂規 抗震專利<br>戴雲發 /中力建築系統團隊 總經理<br>「執行全台使用Alfa Safe耐震系統工法建案超過400例。」",
  },
  {
    img:new URL("./s9/4.webp", import.meta.url).href ,
    //img: globals.$isMobile() ? new URL("./s3/1_m.webp", import.meta.url).href : new URL("./s3/1.webp", import.meta.url).href,
    caption: "北外環實景拍攝",
    title:"職人團隊 匠心質作",
    desc:"大地工程 永恆之奧<br>楊永豐 / 豐立工程顧問<br>「安全，永遠是家唯一的價值。」",
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

