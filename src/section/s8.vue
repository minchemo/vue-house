<template>
  <article class="s8 " ref="s8">
    <div class="main">
    <div class="txt">
      <div class="t1">
    <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">雙百貨核心 生活主角席</h3>
      <div class="en font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0"><img src="./s8/c.webp" alt="c">OLLECT</div></div>
      <div class="subtitle" data-aos="fade-up" data-aos-delay="0">明星光環自帶 全場鎂光聚焦，這一次換你當主角</div>
      <p class="desc" data-aos="fade-up" data-aos-delay="0">捷運一站近五福商圈，大立精品、漢神百貨優雅相迎，<br v-if="isMobile">兩站即達三多商圈，<br>
新光三越、SOGO、大遠百時尚加冕，<br v-if="isMobile">
樣樣吸睛、時時耀眼——每一天都是最華麗的出場！</p>
      </div>
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



.s8 {
  @apply relative flex items-center justify-center text-[#fff] ;
  width: 100%;
  height: auto;
  padding: 5.5em 0 ;
  font-size:size(22);
  gap: 2.3em;
  flex-wrap: wrap;
  //overflow: hidden;
  flex-direction:column;

  .txt{
    text-align: center;
    .t1{display: inline-block;margin: 0 0 .8em 14em;}
.title{text-align: left;line-height: 1.0;}
.en{text-align: left;
  line-height: 1.0;
img{position: absolute;bottom: -.3em;left: -2.1em;height: 2.4em;}
}

    
  // .en{position: absolute;top: size(760);left: calc(50% - 6.5em);}
  }




  .slider {
   // background: #fff;
    margin: 0;
    width: size(1500);
    height: size(550);
    overflow: hidden;
    border-radius: 0;
   // border: size(3) solid #7C519F;
  //  padding: size(10);

    .slide-item {
      @apply bg-cover;
      width: 100%;
    height: size(500);

    }

    .splide__pagination {
   //   left: calc(100% + 3em);
   bottom: -2.2em;
      justify-content:flex-start;
      color: #fff;
      z-index: 10;
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
    font-size: sizem(12);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;
  padding: 6em 0 0;
  .txt{margin-bottom: 3em;
    .t1{display: inline-block;margin: 0 0 1em 7em;}
  .title{font-size: 1.8em; margin-bottom: -.1em;}
  .en{font-size: 4.4em;
img{height: 2.2em;left: -1.9em;}}
  }


    .slider {
      height: auto;
      width: 100%;padding: 0;
      border: 0;
    border-radius:0;

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

const imgs = computed(() => [
  {
    img: isMobile.value ? new URL("./s8/1m.webp", import.meta.url).href :new URL("./s8/1.webp", import.meta.url).href,
    caption: "大立精品"
  },
  {
    img: isMobile.value ? new URL("./s8/2m.webp", import.meta.url).href :new URL("./s8/2.webp", import.meta.url).href,
    caption: "漢神百貨"
  },
  {
    img:isMobile.value ? new URL("./s8/3m.webp", import.meta.url).href :new URL("./s8/3.webp", import.meta.url).href,
    caption: "漢神百貨"
  },
]);
</script>