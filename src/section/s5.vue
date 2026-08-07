<template>
  <article class="s5" ref="s5">
    <div class="bg">
      <img src="./s1/c3.png" alt="i2">
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">國鉅機構全球榮耀<br>
世界級設計殊榮</h3>
       <!--  <hr class="hr" data-aos="fade-up" data-aos-delay="400" /> -->
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          【國華綻】榮獲 2025 MUSE Design Awards<br>
美國繆思設計大獎 建築外觀設計金獎殊榮<br>
【國華綻】營造團隊-德川營造<br>
榮獲國家優良營造商認證標章 第一品牌<br>&nbsp;
</p>
        <div class="subtitle" data-aos="fade-up" data-aos-delay="200">防水保固五年 購屋十八大保證</div>
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          國鉅機構深耕大台北，從新莊、三峽、中和、五股到八里、鶯歌，精選潛力地段，擘劃城市未來。從建築美學到營建品質，贏得世界級大賞與國家品質認證，完善售服與保固，讓家成為品味人生的豐盛收藏。<br>&nbsp;
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
@keyframes an {
  to {
    transform: translateX(0%);
  }
}


.s5 {
  @apply relative flex justify-center bg-[#FFE8BD];
  width: 100%;
  height: auto;
  padding: 6.9em 0 6.9em 0;
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;


  .bg {
    width: 253%;
    height: 100%;
    position: absolute;
    bottom: sizem(-100);
      right: 0;
      transform: scaleX(-1);

    img {
      position: absolute;
      bottom: 0;
      right: 0;
        width: 100%;
        transform: translateX(-2%);
        transform-origin: 0 100%;
        animation: an 5s linear infinite alternate;


    }

    @media screen and (min-width: 768px) {
      width: 35%;
      bottom: 0;
      left: auto;
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
      left: calc(100% + 6em);
      justify-content: flex-start;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s5 {
  flex-direction: column-reverse;
    height: auto;
    padding: 0;
    font-size: sizem(13);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;

.bg{
  // top:sizem(270);
  bottom: sizem(0);
  width: 70%;
}



    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 4em auto 7em;
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
    .splide__pagination {
      display: none;
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
    caption: "國華站"
  },
  {
    img: new URL("./s5/2.jpg", import.meta.url).href,
    caption: "鶯歌車站"
  },
]
</script>