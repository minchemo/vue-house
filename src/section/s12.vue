<template>
  <article class="s12" ref="s12">
    <div class="main">
      <img src="./s12/logomap.png" alt="logo" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000"
        class="logo">
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';


.s12 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height: auto;
  padding: 6em 0 10em 0;
  font-size: size(19);
  gap: 3em;
  flex-wrap: wrap;
  background: url("./s12/s12bg.png") 0% 0%;
  background-size: cover;
  height: 52vw;


  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(650);
    flex-direction: column;
    text-align: justify;

    img {
      width: size(600);
    }

  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s12 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;

    .eggbg2 {
      top: sizem(-160);
      right: sizem(-80);
      width: sizem(280);
      transform: translateY(-10%);
    }

    .oo1 {
      top: sizem(30);
      height: sizem(20);
      left: auto;
      right: sizem(100);
    }

    .img {
      position: absolute;
      top: sizem(300);
      left: auto;
      right: sizem(-155);
      width: sizem(260);
      bottom: auto;
    }

    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 4.4em auto 1.3em;
    }

    h3.title {
      color: #BE771A;
      font-family: Noto Serif TC;
    }

    .slider {
      height: auto;
      width: 100%;

      .caption {
        color: #acff2d;
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
/* 
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
    img: new URL("./s12/s12-1.png", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s12/s12-2.png", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s12/s12-3.png", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s12/s12-4.png", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s12/s12-5.png", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s12/s12-6.png", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s12/s12-7.png", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s12/s12-8.png", import.meta.url).href,
    caption: ""
  },
]
*/
</script>
