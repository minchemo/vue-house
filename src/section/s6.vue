<template>
  <article class="s6" ref="s6">
		<img src="./s1/oo.svg" class="oo">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">人文學風鼎盛<br>理想成長起點</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">鼎金國小、鼎金國中、高雄高工、高雄科大，培養出無數菁英，近在咫尺的距離，輕鬆上下學，給孩子一個睡飽的早晨，擁有完善的教育資源，是給下一代最好的成長動能。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
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

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s6 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:11em 0 10em 0;
  font-size:size(20);
  gap:3em;
  flex-wrap: wrap;
  .oo{position: absolute;top: calc(50% - #{size(550)});right: calc(50% - #{size(190)});width: size(1100);
  transform: scaleX(-1);}

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}
.txt{
 // margin: auto auto 3vw auto;
 padding: 0 0 0 6vw;
  .subtitle{font-weight: 400;}
}

  .slider {
    margin: 0;
    flex-basis: size(840);
    width: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
    @apply flex-col-reverse;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;
  .oo{bottom: sizem(-50);top: auto;
left: calc(50% - #{sizem(330)});
width: sizem(660);transform: rotate(90deg);
 }

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {margin: 2em auto 6em;padding: 0;
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
    img:new URL("./s6/1.jpg", import.meta.url).href ,
    caption: "鼎金國小"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "鼎金國中"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
    caption: "高雄高工"
  },
  {
    img:new URL("./s6/4.jpg", import.meta.url).href ,
    caption: "高雄科大"
  },
  {
    img:new URL("./s6/5.jpg", import.meta.url).href ,
    caption: "高雄醫大"
  },
]
</script>

