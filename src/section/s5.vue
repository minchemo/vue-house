<template>
  <article class="s5" ref="s5">  
    <div class="main">
      <div class="txt">
     
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0">光影流動的朗闊生活</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          每一扇窗都私藏一幅風景，在風與光共織的靜謐裡，綻放最具質感的日常美學，讓暖陽與微風成為空間的主角，客餐廳交織，映襯半開放廚房的通透視覺，間間皆能容納雙人床的餘裕，讓家不僅是起居，更是身心的歸屬，極致收納智慧完美隱於無形。
        </p>
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



.s5 {
  @apply relative flex items-center justify-center bg-[#84DBFF];
  width: 100%;
  height: auto;
  padding: 0em 0 10em 0;
  font-size: size(20);
  gap: 2em;
  flex-wrap: wrap;
  flex-direction: column;


   .txt  { 
      text-align: center;
      margin-top: 0;
      h4 {
      color:#000;
      padding-top: size(120); 
      }
      p{ 
      width: 75rem;
      }
    }
  .spot {
    position: absolute;
    top: sizem(120);
    right: sizem(-50);
    width: sizem(188);
    transform: rotate(-90deg);
    transform-origin: 100% 100%;
    pointer-events: none;
    z-index: 2;

    @media screen and (min-width: 768px) {
      top: size(290);
      right: size(-50);
      ;
      transform: rotate(0deg);
      width: size(600);
    }
  }

 

  .main {
    @apply flex;
    margin: 0;
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding: 0;

    .subtitle {
      font-weight: 400;
    }
  }

  // size(110)

  .slider {
    margin: 0 0 0 0;
    height: size(1080);
    width: size(1500);

    .slide-item {
      @apply bg-cover;
      width: 100%;
      flex-basis: size(1500);
      height: size(1080);
    }

    .splide__pagination {
      justify-content: flex-end;
      bottom: -2em;
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

    .img {
      bottom: auto;
      top: sizem(370);

      .oo1 {
        right: sizem(-260);
        width: sizem(480);
      }

      .bubble1 {
        right: sizem(-110);
        width: sizem(250);
        bottom: sizem(-35);
      }

      .g {
        right: sizem(30);
        width: sizem(100);
        bottom: sizem(40);
      }
    }

    .bubble2 {
      left: sizem(130);
      width: sizem(218);
      top: sizem(-170);
    }

    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 3em auto 2em;
      padding: 0;
    }


    .slider {
      height: auto;
      width: 100%;

      .caption {
        font-size: sizem(12);
        right: sizem(5);
        bottom: sizem(5);
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
    img: new URL("./s5/1.png", import.meta.url).href,
    caption: "3D外觀模擬示意圖"
  },
  {
    img: new URL("./s5/2.png", import.meta.url).href,
    caption: "3D外觀模擬示意圖"
  },
  {
    img: new URL("./s5/3.png", import.meta.url).href,
    caption: "3D外觀模擬示意圖"
  },
  {
    img: new URL("./s5/4.png", import.meta.url).href,
    caption: "3D外觀模擬示意圖"
  },
  {
    img: new URL("./s5/5.png", import.meta.url).href,
    caption: "3D外觀模擬示意圖"
  },
]
</script>