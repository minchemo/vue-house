<template>
  <article class="s7" ref="s7">
    <div class="slider" data-aos="fade">
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="100">簡約立面  奢雅生活序曲</h3>
        <p class="desc" data-aos="fade-up">以俐落線條與光影比例，勾勒當代簡約建築立面。公設融合石紋美學、溫潤木質與自然光景，規劃挑高迎賓大廳、綠意交誼閱讀區、私廚宴客廚藝室與精品活力健身房，讓回家、交流與休閒都有舒適尺度。
        </p>
      </div>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s7 {
  @apply relative flex justify-center;
  background: #659EC4;
  width: 100%;
  height: auto;
  padding:0 0 sizem(20) 0;
  gap: 0;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  color: #FFF;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  padding: 6em 0 6em 0;
 //   padding: 6.9em 0 6.9em 0;
    flex-wrap: wrap;
  gap: 1.5em;
    background-size: size(113) auto;
  }

  .main {
    @apply flex;
    padding: 0 sizem(32.5);
    width: 100%;
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;

    @media screen and (min-width: 768px) {
      padding: 0;
      width: size(1500);
    }
  }

  .txt {
      display: flex;
      flex-wrap: wrap;
  align-items: center;
  justify-content: center;
    padding: sizem(40) 0 sizem(40);
      .t1{margin: auto 1.5em auto 1em;}
      .title{
        margin: auto ;
    //  font-size: 2em;

      }
      .desc{
      span{color: #BC8518; white-space: nowrap;}}
    @media screen and (max-width: 767px) {
      .desc{margin: 1.5em 0 0;
        li{display: flex;margin: .2em auto;}
      }

    }
    @media screen and (min-width: 768px) {
//width: 100%;
    padding:0 0 0;
      .t1{margin: auto 2.5em auto 3.4em;}
      .title{
        margin: auto ;
        letter-spacing: 0.03em;

      }
      .desc{
        letter-spacing: 0.01em;
      }
    }

  }

  // size(110)

  .slider {
    margin:0;
      width:100%;
      height: auto;
      @media screen and (min-width: 768px) {
    width: size(1500);
      }

    .slide-item {
      @apply bg-cover;
        width: 100%;
        height: sizem(211);
      @media screen and (min-width: 768px) {
      height: size(844);

      }

    }

    .splide__pagination {
      left: calc(100% + 6em);
      justify-content: flex-start;
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

const splide = ref()

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  autoplay: false,
  interval: 4000,
  gap: 0,
//  drag: false
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s7/1.jpg", import.meta.url).href,
    caption: "建築日景外觀3D示意圖"
  },
  {
    img: new URL("./s7/2.jpg", import.meta.url).href,
    caption: "建築夜景外觀3D示意圖"
  },
  {
    img: new URL("./s7/3.jpg", import.meta.url).href,
    caption: "挑高迎賓大廳3D示意圖"
  },
  {
    img: new URL("./s7/4.jpg", import.meta.url).href,
    caption: "挑高迎賓大廳3D示意圖"
  },
  {
    img: new URL("./s7/5.jpg", import.meta.url).href,
    caption: "綠意交誼閱讀區3D示意圖"
  },
  {
    img: new URL("./s7/6.jpg", import.meta.url).href,
    caption: "綠意交誼閱讀區3D示意圖"
  },
  {
    img: new URL("./s7/7.jpg", import.meta.url).href,
    caption: "廚藝教室3D示意圖"
  },
  {
    img: new URL("./s7/8.jpg", import.meta.url).href,
    caption: "精品活力健身房3D示意圖"
  },
]
</script>