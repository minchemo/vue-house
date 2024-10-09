<template>
  <article class="s2">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">人生翻轉 雙車透天享闊綽</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">優勢地利第二環，前進南科好愜意，上班通勤不費力。下班靜享生活大空間，透天格局戶戶套房，三代同堂、多寶家庭都舒服，讓家人自在伸展開心生活，配備雙車位獨立空間，讓爸媽愛車都有家。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile && imgs.length > 1">
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

.s2 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:3.5em 0 8em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column-reverse;
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1500);
}

  .slider {
    margin: 0;
    flex-basis: size(840);
      height: size(844);
    width: size(1500);
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: size(1500);
      height: size(844);
      
    }

    .splide__pagination{
      justify-content: flex-end;
      bottom: -2em;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;
flex-direction:column-reverse;

  .main {
    padding: 0 sizem(30);
    width: 100%;
}
.txt {margin: 2em auto 6.5em;
  width: 100%;
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


const imgs = [
  {
    img:new URL("./s2/1.jpg", import.meta.url).href ,
    caption: "情境示意圖"
  },
]
const options = {
  rewind: false,
  arrows: false,
  pagination: imgs.length > 1,
  autoplay: imgs.length > 1,
  interval: 4000,
  gap: 10,
  type: 'loop',
  drag: imgs.length > 1
}
</script>

