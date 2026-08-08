<template>
  <article class="s4" ref="s4">
    <div class="bg">
      <img src="./s1/i1.webp" alt="i1">
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">成熟商圈 共享繁華</h3>
       <!--  <hr class="hr" data-aos="fade-up" data-aos-delay="400" /> -->
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          坐擁市心便利機能，南雅、建國商圈、陶瓷老街、五福市場、鶯歌市場，寶雅超市與生活品牌；公八、兒一公園親子遊憩、鶯歌國中昌福國小學區完善，成熟機能完美融入日常生活節奏。</p>
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
@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s4 {
  @apply relative flex justify-center bg-[#EB6120];
  width: 100%;
  height: auto;
  padding: 6.9em 0 6.9em 0;
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
      color: #FFF;



  .bg {
    width: 253%;
    height: 100%;
    position: absolute;
    bottom: sizem(-100);
    left: sizem(0);

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;


    }

    @media screen and (min-width: 768px) {
  
      bottom:size(-250);
      left: auto;
        width: 120%;
        right: -19%;
        transform: rotate(-3deg);
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
      right: calc(100% + 6em);
      justify-content: flex-end;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s4 {
  flex-direction: column-reverse;
    height: auto;
    padding: 0;
    font-size: sizem(13);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;


.bg{
 // top:sizem(270);
  bottom: sizem(-110);
  left: sizem(-385);
  width: 290%;
  transform: rotate(-3deg);
}



    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 4em auto 8em;
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
  autoplay: false,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s4/1.jpg", import.meta.url).href,
    caption: "鶯歌陶瓷老街"
  },
  {
    img: new URL("./s4/2.jpg", import.meta.url).href,
    caption: "新北市立美術館"
  },
  {
    img: new URL("./s4/3.jpg", import.meta.url).href,
    caption: "陶瓷博物館"
  },
]
</script>