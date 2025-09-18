<template>
  <article class="s8" ref="s8">
		<img src="./s1/oo.svg" class="oo">
    <div class="main">
      <div class="txt">
        <h2 class="title" data-aos="fade-up" data-aos-delay="200">建築領航者<br>新世代指標</h2>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">城揚建設集團『高雄名宅˙建築首席』，創立於民國83年，陪伴這片土地走過30年的歲月，穩健前行的企業步伐，始終致力於土地和建築，為新世代家庭打造一座座的理想家園！</p>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index">
          <img :src="img.img" :alt="img.caption">
      <span class="caption" :class="'caption-' + index">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s8 {
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
      height: size(840);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(840);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
    
    .caption {
    right:.5em;
    top:.5em;
    &.caption-0 { color: #444;text-shadow: none;font-weight: 500; }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
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
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(375);
      
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
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: "城揚建設"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    caption: "2020御廳苑"
  },
  {
    img:new URL("./s8/3.jpg", import.meta.url).href ,
    caption: "2023珈柏麗"
  },
  {
    img:new URL("./s8/4.jpg", import.meta.url).href ,
    caption: "2023美廳苑"
  },
  {
    img:new URL("./s8/5.jpg", import.meta.url).href ,
    caption: "2024惟美術"
  },
]
</script>

