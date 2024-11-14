<template>
  <article class="s5" ref="s5">
    <div class="bg" v-if="!$isMobile()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  <div class="txt">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0"><span>知覺｜</span>未來生活的實在感</h3>
  </div>
    <div class="main">
      <div class="txt font-['Noto_Serif_TC',serif]">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">觸摸到未來居住的安全感，大園觀音不容錯過！ </h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">桃園航空城計劃、大園客運轉運站、青埔高鐵特區等重大建設穩步落地，讓這裡成為房市穩健升值的區域。無論是未來的產業機會，還是居住的便利生活，這裡的每一處都充滿未來感。居住在此，您將切實感受到穩定的生活品質和長期投資潛力的雙重保障！</p>
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



.s5 {
  @apply relative flex items-center justify-center text-[#fff];
  background: url("./left_bg.jpg") 50% 50%;
  background-size: cover;
  width: 100%;
  height:auto;
  padding:0 0 7em 0;
  font-size:size(18);
  gap:3em;
  flex-wrap: wrap;
  .bg{
    span{
      &:nth-child(1){
      top:size(26);left: 0;
  font-size:size(120);
}
      &:nth-child(2){
      top: size(147);left: size(110);
  font-size:size(27);
}
      &:nth-child(3){
      top: size(20);right:size(80);
  font-size:size(75);}
    }
  }

  .img{position: absolute;bottom:size(-30);left:size(-270);width:size(660);
  &::before{content: "";width:120%;
  height: 20%;border-radius: 50%;background: #1691CF;display: block;
  position: absolute;bottom: -10%;left: -10%;
}
  img{width: 100%;position: relative;}}
  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}




  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
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

  .s5 {
  @apply flex-col;
  background: url("./bg_m.jpg") 50% 50%;
  background-size: cover;
    height: auto;
    padding: 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:1.5em;
  .img{position: absolute;top:sizem(300);left: auto;
    right:sizem(-155);width:sizem(260);bottom: auto;}

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {
  .title{
    &::after,
    &::before{
      width: 2em;
    }
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
      height: sizem(250);
      
    }
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
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s5/1.webp", import.meta.url).href ,
    caption: "草漯商圈街景"
  },
  {
    img:new URL("./s5/2.webp", import.meta.url).href ,
    caption: "草漯商圈街景"
  },
  {
    img:new URL("./s5/3.webp", import.meta.url).href ,
    caption: "草漯商圈街景"
  },
  {
    img:new URL("./s5/4.webp", import.meta.url).href ,
    caption: "大園商圈街景"
  },
  {
    img:new URL("./s5/5.webp", import.meta.url).href ,
    caption: "大園商圈街景"
  },
  {
    img:new URL("./s5/6.webp", import.meta.url).href ,
    caption: "大園商圈街景"
  },
]
</script>

