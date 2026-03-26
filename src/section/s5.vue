<template>
  <article class="s5 " ref="s5">
    <div class="flower" v-if="!isMobile" data-aos="zoom-in">
      <div class="p2"><img src="./s5/2.png" alt="flower" /></div>
      <div class="p3"><img src="./s5/3.png" alt="flower" /></div>
      <div class="p1"><img src="./s1/s1p3.png" alt="flower" /></div>
    </div>
    <div class="slider">
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



.s5 {
  @apply relative flex flex-row-reverse items-center justify-center;
  width: 100%;
  height: auto;
  padding: 3.2em 0 ;
  font-size: size(20);
  gap: 4em;
  flex-wrap: wrap;
  //overflow: hidden;
  //flex-direction:row-reverse;




  .slider {
    background: #fff;
    margin: 0;
    width: size(860);
    height: size(860);
    border: size(3) solid #7C519F;
    padding: size(10);

    .slide-item {
      @apply bg-cover;
      width: 100%;
      height:100%;

    }

    .splide__pagination {
   //   left: calc(100% + 3em);
   bottom: -2.2em;
      justify-content:center;
      color: #7C519F;
    }
  }
  

  .flower {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div {
      position: absolute;
    }

    img {
      width: 100%;
    }
    
    .p1 {
      transform: rotate(5deg);
      transform-origin: 10% 10%;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p2 {
      transform: rotate(5deg);
      transform-origin: 100% 100%;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p3 {
      transform: rotate(3deg);
      transform-origin: 50% 100%;
      animation: an 5s ease-in-out infinite alternate;
    }

    @media screen and (min-width: 768px) {
      .p1 {
        bottom: size(25);
        right: size(290);
        width: size(480);
        img{
          transform: rotate(45deg);}
      }

      .p2 {
        bottom: size(240);
        left: size(370);
        width: size(280);
      }

      .p3 {
        bottom: size(50);
        left: size(285);
        width: size(1334);
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
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;


    .slider {
      height: auto;
      width: 100%;padding: 0;
      border: 0;

      .caption {
        font-size: sizem(12);
        right: sizem(5);
        bottom: sizem(5);
      }

      .slide-item {
        @apply bg-cover;
        width: 100%;
        flex-basis: auto;
       // height: sizem(250);

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
    img: new URL("./s5/1.jpg", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s5/2.jpg", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s5/3.jpg", import.meta.url).href,
    caption: ""
  },
]
</script>