<template>
  <article class="s6">
  
    <div class="main">
      <div class="txt">
    <h3 class="title"  data-aos="fade-up" data-aos-delay="0">公設饗宴</h3>
    <img class="en" src="./s6/en.svg">
  </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  @apply relative flex flex-col items-center justify-center;
  width: 100%;
  background:url("@/section/s6/bg.webp") 50%;
  background-size: cover;
  // height: size(800);
  padding:0 0 7em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;

  .main {
    @apply flex;
    margin: 0;
    flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  text-align: center;position: relative;
  padding-top:1.8em;z-index: 10;padding-bottom:1.8em;
  color: #fff;
.title{
&::after,
&::before{
background: #fff;
width: 7.3em;
}
}
.title{
    font-size: 2em;
    font-weight: 700;
  }

  .en{
    margin-top: size(20);
  }

}

  .slider {
    margin: 0;
    flex-basis: size(840);
    height: size(812);
    width: size(1682);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1682);
      height: size(812);
      
    }
    .arrows .prev, .arrows .next{
      width:3%;
    }

    .splide__pagination{
      bottom: .5em;
    }
    .caption{
      position: absolute;
      color: #3a3a3a;
      font-size: 1em;
      bottom: size(10);
      right: size(10);
    }

    
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
  gap:2em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {
.title{
&::after,
&::before{
width:0em;
}
}
.title{
    font-size: 2em;
    font-weight: 700;
  }

  .en{
    margin-top: sizem(10);
    width: sizem(300);
  }

}
  .slider {
    height: auto;
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
      height: sizem(210);
      
    }
    .arrows .prev, .arrows .next{
      width:8%;
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
    img:new URL("./s6/7.webp", import.meta.url).href ,
    caption: "迎賓大廳現場實景拍攝"
  },
  {
    img:new URL("./s6/2.webp", import.meta.url).href ,
    caption: "信箱區現場實景拍攝"
  },
  {
    img:new URL("./s6/3.webp", import.meta.url).href ,
    caption: "後門聽現場實景拍攝"
  },
  {
    img:new URL("./s6/4.webp", import.meta.url).href ,
    caption: "健身房現場實景拍攝"
  },
  {
    img:new URL("./s6/5.webp", import.meta.url).href ,
    caption: "韻律室現場實景拍攝"
  },
  {
    img:new URL("./s6/6.webp", import.meta.url).href ,
    caption: "撞球室現場實景拍攝"
  },
  {
    img:new URL("./s6/7.webp", import.meta.url).href ,
    caption: "閱覽交誼廳現場實景拍攝"
  },
]　
/*
const imgs = [
  {
    img: getImg('s6/1'),
    caption: "內湖 豁達達禮"
  },
  {
    img: getImg('s6/2'),
    caption: "林口 長耀PARK"
  },
  {
    img: getImg('s6/3'),
    caption: "林口 長耀初"
  },
  {
    img: getImg('s6/4'),
    caption: "林口 長耀里"
  },
]
*/
</script>

