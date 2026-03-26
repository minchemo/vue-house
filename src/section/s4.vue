<template>
  <article class="s4" ref="s4">
    <img src="./s4/bg.png" alt="bg" class="bg" />
    <div class="bub font-['Noto_Sans_TC',sans-serif]">
        <div>板南線<span>✕</span>三鶯線</div>
        <img src="./s4/bubbles.svg" alt="img" />
      </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">億萬產值對位南軟<br>
          板南雙捷鍍金起點</h3>
        <hr class="hr" data-aos="fade-up" data-aos-delay="400" />
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          下一座南軟在這裡。頂埔科技園區正中心，與鴻海、鼎創達總部並肩，加乘遠東通訊園區動能。一線直達板南線鍍金站點，就座AI趨勢最佳起點。</p>
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
  @apply relative flex justify-center;
  width: 100%;
  height: auto;
  padding: 6.9em 0 10.5em 0;
  font-size: size(24);
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;

.bg{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1;
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
  .bub {
      position: absolute;
      top: sizem(280);
        left:  sizem(170);
      //  right: sizem(20);
      font-size: sizem(18);
      line-height: 1.1;
      text-align: center;
      color: #493366;
      font-weight: 700;
      z-index: 3;
      animation: an 1.5s linear infinite alternate;
      transform: rotate(-5deg);
      transform-origin: -15% 190%;

    filter: drop-shadow(sizem(1) sizem(2) sizem(8) rgba(39, 13, 73, 0.92));

      @media screen and (min-width: 768px) {
        top: auto;
        bottom: size(330);
        left:  size(360);
        //   right: size(50);
        font-size: size(30);
        transform-origin: -15% 190%;
      filter: drop-shadow(size(2) size(2) size(15) rgba(39, 13, 73, 0.92));
      }

      span {
        display: block;
        font-size: .7em;
      }

      >div {
        animation: an 1.5s linear infinite alternate;
        transform: rotate(2deg);
      }

      img {
        width: 5.4em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -46%);
        transform-origin: 50% 46%;
        z-index: -1;

        //opacity: .5;
        @media screen and (min-width: 768px) {

          transform: translate(-50%, -46%);
        }
      }
    }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s4 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;

.bg{
  top:sizem(270);
  bottom: auto;
  left: sizem(-60);
  width: 310%;
}



    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 4em auto 18em;
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
    img: new URL("./s4/1.jpg", import.meta.url).href,
    caption: "頂埔科技園區"
  },
  {
    img: new URL("./s4/2.jpg", import.meta.url).href,
    caption: "捷運頂埔站"
  },
  {
    img: new URL("./s4/3.jpg", import.meta.url).href,
    caption: "捷運頂埔站"
  },
  {
    img: new URL("./s4/4.jpg", import.meta.url).href,
    caption: "國道三號土城交流道"
  },
  {
    img: new URL("./s4/5.jpg", import.meta.url).href,
    caption: "大暖路口公車站"
  },
  {
    img: new URL("./s4/6.jpg", import.meta.url).href,
    caption: "遠東通訊園區"
  },
]
</script>