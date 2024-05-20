<template>
  <article class="s6" ref="s6">
    <div class="hr" v-if="!isMobile"></div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">書香名門  明星學風</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">忠孝國小.國中、鳳甲國中、鳳西國中、國立鳳新高級中學，皆在車程5分鐘內可達，「三井三錦」坐擁豐沛教育資源，是培養菁英下一代的最佳人生起點。</p>
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
  padding:8em 0 7em 0;
  font-size:size(19);
  gap:3em;
  flex-wrap: wrap;
.hr{position: absolute;left: 0;right: 0;bottom:size(-15);width:size(750);height: size(30);margin: 0 auto;background: radial-gradient(50% 50% at 50% 50%, #E8BE54 0%, rgba(232, 190, 84, 0.00) 100%);
  &::before{content: "";display: block;
  position: absolute;width:200%;background: linear-gradient(90deg, rgba(232, 190, 84, 0.00) 0%, #E8BE54 25%, #FFF 50%, #E8BE54 75%, rgba(232, 190, 84, 0.00) 100%);height:size(5);left: -50%;top:size(12.5);
}

}
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
    padding: 2em 0 0 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}

.txt {margin: 4.4em auto 1.3em;
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
    caption: "忠孝國小"
  },
  {
    img:new URL("./s6/2.jpg", import.meta.url).href ,
    caption: "鳳甲國中"
  },
  {
    img:new URL("./s6/3.jpg", import.meta.url).href ,
    caption: "鳳西國中"
  },
  {
    img:new URL("./s6/4.jpg", import.meta.url).href ,
    caption: "國立鳳新高級中學"
  },
]
</script>

