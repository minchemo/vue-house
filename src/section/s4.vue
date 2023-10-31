<template>
  <article class="s4" ref="s4">
    <div class="main"><h3 class="title font-['Jost']" data-aos="fade-up" data-aos-delay="0">NEW TAINAN<span><span>T.S.MALL</span></span></h3>
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">平實大局 總和渴望</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">台南東區平實正核心，無以撼動的繁華簇擁<br>
南紡商圈、國賓商圈、後甲市場、裕農商圈的環抱青睞<br>
鄰近平實轉運站，通達仁德、大灣交流道，轉高鐵、接南科<br>
映射時尚、人文、綠意、風格的富饒光譜</p>
      </div>
    </div>
    <div class="slider" data-aos="fade"><div class="box" v-if="imgs.length > 1"></div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
      <div class="arrows" v-if="imgs.length > 1">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <span class="current-slide" v-if="imgs.length > 1">IMAGES {{ currentSlideIndex + 1 }}/{{ imgs.length }}</span>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s4 {
  @apply relative flex items-center text-[#000];
  width: 100%;
  height:auto;
  padding:0;
  font-size:size(14);justify-content:space-between;
  //gap:3em;
  //flex-wrap: wrap;
  background: url("./s4/024.jpg");
  background-size: 100% auto;
  background: #fff;
  border-bottom: 1px solid #000;

  .main {
    @apply flex;
    margin: 0;
    flex: 1 1 auto;
      height: size(1070);
  flex-direction: column;
  text-align: justify;
  justify-content:space-between;
  border-right: 1px solid #000;
  padding: 0 0em 0 5em;
  .title{font-size:size(53);margin: .6em 0 0 0;
    letter-spacing: 0.03em;
    font-weight: 500;
  span{display:block;
    span{font-size:size(16);
      border: 1px solid #000;padding: .1em .5em;
      border-radius: .7em;
  margin: 0;
float: left;
}
}
  }
.txt{padding:0 0 6em 0;line-height: 1.7;}
.subtitle{font-size:size(28);font-weight: 700;margin-bottom: .3em;letter-spacing: 0.2em;}
.desc{color: #666;font-weight: 500;}
}

  .slider {
    margin: 0 0 0em;
    flex-basis: 73%;
    .box{height: 1.5em;}
    .slide-item {
      @apply bg-cover;
      height: size(976);
      width: size(1414) ;
  background-color: #CCC;
      
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0;

  .main {
    padding: 0 sizem(32.5);
    width: calc(100% - 1em);
  border-right: 0px solid #000;
  border-left: 1px solid #000;
      height:auto;
  padding: 0 1em;
  margin-left: 1em;
  .title{font-size:sizem(28);
    margin: 1.3em 0 2.2em 0;
  span{
    span{font-size:sizem(12);}
}
  }
.txt{padding:0 0 2em 0;}
.subtitle{font-size:sizem(20);}


}
  .slider {
  border-left: 1px solid #000;
    margin: 0 0 0 1em;
    height: auto;
    width: calc(100% - 1em);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(250);
      
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
const imgs = [
  {
    img:new URL("./s4/1.jpg", import.meta.url).href ,
    caption: "實景拍攝經電腦輔助處理"
  },
]

const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  autoplay: imgs.length > 1,
  interval: 5000,
  gap: 0,
  type:  (imgs.length > 1)?'loop':'fade'
}

</script>

