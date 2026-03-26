<template>
  <article class="s7" ref="s7">
    <div class="flower" data-aos="zoom-out">
      <div class="p1"><img src="./s1/1.png" alt="flower" /></div>
      <div class="p2"><img src="./s1/s1p4.png" alt="flower" /></div>
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">繁華城心山水相伴<br>一種全新生活方式
</h3>
        <hr class="hr" data-aos="fade-up" data-aos-delay="400" />
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          走進健康樂活趨勢，住進水岸與翠綠群山裡。國小至高中在地就學、市立醫院就近醫療，心血來潮就到後院走走山間小徑呼吸清新空氣，現在即是最好時光。</p>
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



.s7 {
  @apply relative flex justify-center;
  width: 100%;
  height: auto;
  padding: 6.9em 0;
  font-size: size(24);
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;

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
      transform: rotate(6deg);
      transform-origin: 50% 50%;
      animation: an 5s ease-in-out infinite alternate;
    }

    @media screen and (max-width: 768px) {
      .p1 {
        top: sizem(0);
        right: sizem(-30);
        width: sizem(130); 
        img {
          transform: rotate(-90deg);
        }
      }
      .p2 {
        top: sizem(230);
        right: sizem(-20);
        width: sizem(90);
      }

    }

    @media screen and (min-width: 768px) {
      .p1 {
        bottom: size(-90);
        left: size(-30);
        width: size(377);
      }

      .p2 {
        bottom: size(-140);
        left: size(0);
        width: size(220);        
        img {
          transform: rotate(130deg);
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
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding: 0;
    width: size(455);

    .title {
      color: #7C519F;
    }

    .hr {
      color: #7C519F;
    }

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
      color: #7C519F;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s7 {
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
    img: new URL("./s7/1.jpg", import.meta.url).href,
    caption: "永福公園"
  },
  {
    img: new URL("./s7/2.jpg", import.meta.url).href,
    caption: "頂埔國小"
  },
  {
    img: new URL("./s7/3.jpg", import.meta.url).href,
    caption: "裕德雙語高中"
  },
  {
    img: new URL("./s7/4.jpg", import.meta.url).href,
    caption: "媽祖田河濱公園"
  },
  {
    img: new URL("./s7/5.jpg", import.meta.url).href,
    caption: "新北市立土城醫院"
  },
  {
    img: new URL("./s7/6.jpg", import.meta.url).href,
    caption: "蝴蝶步道"
  },
]
</script>