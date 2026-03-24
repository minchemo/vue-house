<template>
  <article class="s3 relative flex flex-col items-center justify-center text-[#fff];">
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs">
          <img :src="img.img" :alt="img.caption">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">一間店舖 <br v-if="isMobile">一棟電梯墅 </h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">
          繼日出莊園系列別墅後，百春陽回到內埔，再推全新鉅作「春陽沄集」，稀有透天電梯店墅。樓下全能金店，樓上三代共享的豪宅雙富規劃，跳脫老街舊屋框架，以現代簡約揉合大器石材，
          形塑聚客門面，成就一棟傳家、傳富、傳承世代的別墅。</p>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s3 {
  //@apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding: 10em 0 1em 0;
  font-size: size(18);
  gap: 1.5em;
  flex-wrap: nowrap;

  flex-wrap: wrap;
  background: url("./s3/bg.png") 0% 0%;
  background-size: cover;

  .slider .slide-item img {
    border-radius: 0;
  }


  h3.title {
    color: #BE771A;
    font-family: Noto Serif TC;
  }

  p.desc {
    color: #5B5959;
    font-size: 1.5em;
  }



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
    margin-left: 5em;
  }

  .slider {
    margin: 0 auto;
    //flex-basis: size(840);
    height: size(793);
    width: size(1725);

    .splide__slide img {
      width: 100%;
    }

    .slide-item {
      @apply bg-cover;
      width: 100%;

      height: size(793);

    }

    .splide__pagination {
      visibility: hidden;
      justify-content: flex-end;
      bottom: -2em;

      li button {
        background: #999999;

      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    gap: 0em;
    background: url("./s3/bg.png") 0% 0%;

    p.desc {
      font-size: 1.3em;
    }

    .eggbg1 {
      top: sizem(50);
      left: sizem(100);
      width: sizem(400);
    }

    .oo1 {
      top: sizem(20);
      height: sizem(20);
      left: sizem(10);
      right: auto;
    }

    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 3em auto 3em;
    }

    .slider {
      height: auto;
      width: 100%;
      //height: sizem(793);
      //width: sizem(1725);
      margin: 0 auto;
      .arrows {
          visibility: hidden; 
        }

      .caption {
        font-size: sizem(12);
        right: sizem(5);
        bottom: sizem(5);
      }

      .slide-item {
        @apply bg-cover;
        width: 100%;
        // width: size(1725);
        flex-basis: auto;
        height: sizem(155);

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
  interval: 0,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s3/S3-2.jpg", import.meta.url).href,
    caption: "外觀3D數位影像合成示意圖、情境示意圖"
  },
]
</script>
