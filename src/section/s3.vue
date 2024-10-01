<template>
  <article class="s3" ref="s3">
    <div class="slider" data-aos="fade-up" data-aos-delay="400">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
      <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">住岡山市心 享站前商圈</h3>
    <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">S科技廊帶效應 重大建設集結岡山</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="200">「岡山車站TOD聯開案」延伸線捷運紅線，全方位強化北高交通動脈<br>
「岡山87期重劃」未來隱富聚落，比肩美術館特區，更勝高雄農16<br>
區域利多集合，引領北高經濟量能，岡山未來蓄勢待發。</p>
      </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex  flex-col bg-[#0D3A79] text-[#fff];
  width: 100%;
  height:size(1070);
  padding:1em 0 6em 0;
  font-size:size(24);
 // gap:6em;
  flex-wrap: wrap;
  

.txt {
  position: relative;
  z-index: 3;
  text-align: center;
    font-weight: 400;pointer-events: none;
    .title{display: inline-block;
      font-size:size(82);
      font-weight: 700;letter-spacing: 0.1em;
      border-bottom: 1px solid #fff;
    }
    /*
  .slogo{height:size(45);}
  .title{
    margin: .9em 0 0.3em;//color: #9A6A28;
  }
  .desc{
    margin: 0 0 2.4em;
  }*/
}

  .slider {
    position: absolute;
    top: 0;left: 0;
    margin: 0;
    width: 100%;
      height:100%;
    .slide-item {
      @apply bg-cover;
    flex-basis:100%;
      height: 100%;
      img{height: 100%; width: 100%;}
      .caption{position: absolute;left: 0;bottom: 0;}
    }
    .splide__pagination{
    //  right: calc(100% + 3em);
      justify-content: flex-end;
    color: #C5C5C5; 
    li button.is-active{
      color: #C9A063;
    }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  @apply flex-col;
  height:sizem(604);
    padding:sizem(60) 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
  }

  .txt {
    .slogo{height:sizem(29);}
  }
  .slider {
    height: auto;
    width: sizem(775);
    left:sizem(-200);
    top: auto;
    bottom: 0;
    }

/*
  .slider {
    height: auto;
    width: sizem(310);

    .caption {
    font-size:sizem(7);  
    right:sizem(5);
    bottom:sizem(5);text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.8);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(208);
      
    }
  }*/
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
    img:new URL("./s3/01.webp", import.meta.url).href ,
    caption: "0"
  },
  {
    img:new URL("./s3/02.webp", import.meta.url).href ,
    caption: "0"
  },
  {
    img:new URL("./s3/03.webp", import.meta.url).href ,
    caption: "0"
  },
  {
    img:new URL("./s3/04.webp", import.meta.url).href ,
    caption: "0"
  },
  {
    img:new URL("./s3/05.webp", import.meta.url).href ,
    caption: "0"
  },
  {
    img:new URL("./s3/06.webp", import.meta.url).href ,
    caption: "0"
  },
]
</script>

