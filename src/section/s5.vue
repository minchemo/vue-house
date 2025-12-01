<template>
  <article class="s5" ref="s5">

    <img src="./s3/spot.png" class="spot">
    <div class="semicircle"></div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">繁華捷運都心<br>
          豐盛生活全就位</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0">Life in Full Motion</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          家門外的超市百貨，腳步可及的熱鬧商圈，採買、休閒等生活機能全部到位。捷運綠線與國道一號並行，無論日常通勤或遠行，都能從容出發。</p>
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
  @apply relative flex items-center justify-center bg-[#FAE3BF];
  width: 100%;
  height: auto;
  padding: 11em 0 10em 0;
  font-size: size(20);
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row;

  .spot {
    position: absolute;
    top: sizem(120);
    right:sizem(-50);
    width: sizem(188); 
    transform: rotate(-90deg);
    transform-origin: 100% 100%;
    pointer-events: none;
    z-index: 2;
  @media screen and (min-width: 768px) {
    top: size(-520);
    right:0;
    width: size(760); }
  }

  .semicircle {
    position: absolute;
    top: sizem(-80);
    left: sizem(-375);
    aspect-ratio: 1/1;
    pointer-events: none;
    width: sizem(750);
    background: linear-gradient(180deg, #de680866 0%, #DF6A0700 70%);
    border-radius: 50%;
    z-index: 1;
  @media screen and (min-width: 768px) {
    top: size(-200);
    left: size(-777);
    width: size(1554);}
  }

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
    width: size(590);
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
    flex-basis: size(840);
    width: size(840);
    height: size(560);

    .slide-item {
      @apply bg-cover;
      flex-basis: size(840);
      width: size(840);
      height: size(560);

    }

    .splide__pagination {
      right: calc(100% + 3em);
      justify-content: flex-end;
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
      padding: 0 ;
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
    img: new URL("./s5/1.jpg", import.meta.url).href,
    caption: "文華高中站/現場實景"
  },
  {
    img: new URL("./s5/2.jpg", import.meta.url).href,
    caption: "愛買水湳店/現場實景"
  },
  {
    img: new URL("./s5/3.jpg", import.meta.url).href,
    caption: "家樂福水湳店/現場實景"
  },
  {
    img: new URL("./s5/4.jpg", import.meta.url).href,
    caption: "中清路商圈/現場實景"
  },
  {
    img: new URL("./s5/5.jpg", import.meta.url).href,
    caption: "逢甲商圈/現場實景"
  },
  {
    img: new URL("./s5/6.jpg", import.meta.url).href,
    caption: "全聯/現場實景"
  },
]
</script>