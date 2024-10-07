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
        <p v-if="isMobile" class="desc" data-aos="fade-up" data-aos-delay="200">「岡山車站TOD聯開案」延伸線捷運紅線，全方位強化北高交通動脈，「岡山87期重劃」未來隱富聚落，比肩美術館特區，更勝高雄農16區域利多集合，引領北高經濟量能，岡山未來蓄勢待發。</p>
<p v-else class="desc" data-aos="fade-up" data-aos-delay="200">「岡山車站TOD聯開案」延伸線捷運紅線，全方位強化北高交通動脈<br>
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
  height:size(1040);
  padding:0;
  font-size:size(24);
 // gap:6em;
  flex-wrap: wrap;
  

.txt {
  position: relative;
  z-index: 3;
  text-align: center;
    font-weight: 400;pointer-events: none;
    padding:1.9em 0 0 0;
    .title{display: inline-block;
      font-size:size(82);
      font-weight: 700;letter-spacing: 0.1em;
      border-bottom: 1px solid #fff;
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .6em auto .3em;
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
  &::before{content: "";position: absolute;top: 0;left: 0;z-index: 1;pointer-events: none;
  width: 100%;height: 40vw;background: linear-gradient(180deg, #0D3B79 0%, #0D3B7944 50%, #0D3B7900 100%);}

  .slide-item {
      @apply bg-cover;
    // flex-basis:100%;
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
  height:sizem(520);
    padding:3em 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .txt {
    width:sizem(310);
    margin:0 auto;
    .title{
      font-size:sizem(25);}
    .subtitle{
      font-size:sizem(15);}
  }
  .slider {
    height: 100%;
    width: sizem(805);
    left:sizem(-215);
    &::before{height: 70vw;top: sizem(60);}
    .slide-item {
      width: 100%;
      display: flex;
      align-items:flex-end;
      .caption{left: sizem(220);}
      img{height: auto; width: 100%;}
    }
    #splide01-slide05{width:sizem(375);}
    #splide01-slide06{width:sizem(375);}
    .splide__list{align-items:stretch;}
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
  autoWidth: true,
  focus    : 'center',
  omitEnd  : true,
 // autoplay: true,
  interval: 5000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s3/01.webp", import.meta.url).href ,
    caption: "3D鳥瞰環境合成示意圖，僅供參考"
  },
  {
    img:new URL("./s3/02.webp", import.meta.url).href ,
    caption: "岡山新行政中心模擬圖圖/高雄市府發展局"
  },
  {
    img:new URL("./s3/03.webp", import.meta.url).href ,
    caption: "第87期市地重劃區。圖/高雄市府地政局"
  },
  {
    img:new URL("./s3/04.webp", import.meta.url).href ,
    caption: "RK1站西基地案模擬圖。圖/高雄市政府捷運工程局"
  },
  {
    img:globals.$isMobile()? new URL("./s3/05m.jpg", import.meta.url).href : new URL("./s3/05.webp", import.meta.url).href ,
    caption: "麥當勞"
  },
  {
    img:globals.$isMobile()? new URL("./s3/06m.jpg", import.meta.url).href : new URL("./s3/06.webp", import.meta.url).href ,
    caption: "星巴克"
  },
]
</script>

