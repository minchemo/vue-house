<template>
  <article class="s2" ref="s2">
    <div class="bg">
      <img src="./s1/i1.webp" alt="i1">
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">捷運國華站450米<br>
高效率雙軌通勤圈</h3>
       <!--  <hr class="hr" data-aos="fade-up" data-aos-delay="400" /> -->
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          三鶯線正式通車，縮短到市區通勤時間，串聯板南線高含金量科技聚落；捷運+台鐵雙軌生活圈，「國華綻」2站至鶯歌車站，板橋12分鐘、北車22分鐘，吸引更多雙北人口移入鶯歌，優雅移動慢享生活。</p>
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


.s2 {
  @apply relative flex justify-center bg-[#FFE8BD];
  width: 100%;
  height: auto;
  padding: 6.9em 0 6.9em 0;
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;



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
  //  width: size(455);
      color: #666;

    .title {
      color: #EB6120;
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
      right: calc(100% + 6em);
      justify-content: flex-end;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s2 {
    height: auto;
    padding: 0;
    font-size: sizem(13);
    flex-wrap: nowrap;
    margin-bottom: 0em;
  flex-direction: column-reverse;
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
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s2/1.jpg", import.meta.url).href,
    caption: "國華站"
  },
  {
    img: new URL("./s2/2.jpg", import.meta.url).href,
    caption: "鶯歌車站"
  },
]
</script>