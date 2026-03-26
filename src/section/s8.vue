<template>
  <article class="s8" ref="s8">
    <div class="flower" data-aos="zoom-out">
      <div class="p1"><img src="./s1/s1p3.png" alt="flower" /></div>
      <div class="p2"><img src="./s5/2.png" alt="flower" /></div>
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">摩登山巒意象<br>型塑城市新風貌</h3>
        <hr class="hr" data-aos="fade-up" data-aos-delay="400" />
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          「天好運3」以名宅規格打造耐震、智慧、節能建築。外觀融入山巒意象，型塑城市最美端景。純粹81席以挑高3米4室內空間的餘裕，讓生活風格在此自由開展。</p>
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



.s8 {
  @apply relative flex flex-row-reverse items-center justify-center bg-[#7D51A0];
  width: 100%;
  height: auto;
  padding: 5.5em 0;
  font-size: size(24);
  gap: 4em;
  flex-wrap: wrap;
  color: #fff;
  overflow: hidden;
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
      transform-origin: 50% 50%;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p2 {
      transform: rotate(3deg);
      transform-origin: 50% 50%;
      animation: an 5s ease-in-out infinite alternate;
    }


    @media screen and (max-width: 768px) {
      .p1 {
        top: sizem(-120);
        right: sizem(30);
        width: sizem(170);
        img {
          transform: rotate(0deg);
        }
      }
      .p2 {
        top: sizem(-50);
        right: sizem(-40);
        width: sizem(120);
        img {
          transform: rotate(-100deg);
        }
      }
    }

    @media screen and (min-width: 768px) {
      .p1 {
        bottom: size(-200);
        right: size(70);
        width: size(377);
        img {
          transform: rotate(45deg);
        }
      }

      .p2 {
        bottom: size(-70);
        right: size(-80);
        width: size(300);
        img {
          transform: rotate(50deg);
        }
      }
      
    }
  }

  .main {
    @apply flex;
    margin: 0;
    width: size(590);
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
    align-items: flex-end;
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding: 0 0 0 0;
    width: size(485);
    .title {
      color: #fff;
    }

    .hr {
      color: #fff;
    }


    .subtitle {
      font-weight: 400;
    }
  }


  .slider {
    margin: 0;
    width: size(840);
    height: size(690);

    .slide-item {
      @apply bg-cover;
      height: size(690);

    }

    .splide__pagination {
      left: calc(100% + 3em);
      justify-content: flex-start;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s8 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;

    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 4em auto 3em;
      padding: 0;
      width: auto;
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
        height: sizem(308);

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
    img: new URL("./s8/1.jpg", import.meta.url).href,
    caption: "外觀日景3D示意"
  },
  {
    img: new URL("./s8/2.jpg", import.meta.url).href,
    caption: "外觀夜景3D示意"
  },
]
</script>