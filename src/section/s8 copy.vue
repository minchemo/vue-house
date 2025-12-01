<template>
  <article class="s8" ref="s8">

    <img src="./s3/spot.png" class="spot">
    <div class="semicircle"></div>
    <img :src="currentData.en" class="en">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200" v-html="currentData.title"></h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0" v-html="currentData.subtitle"></h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="600" v-html="currentData.desc"></p>
        <img :src="currentData.t" alt="img" class="img" />
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
  @apply relative flex items-center justify-center bg-[#ddd];
  width: 100%;
  height: auto;
  padding: 11em 0 10em 0;
  font-size: size(20);
  gap: 4em;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  .en{
    position: absolute;
    top: sizem(0);
    left: sizem(0);
    width:100%;
    opacity: .53;
  @media screen and (min-width: 768px) {
    left: size(15);
    width: size(910);

  }
  }

  .spot {
    position: absolute;
    top: sizem(520);
    left: sizem(-50);
    width: sizem(188);
    transform: rotate(90deg);
    pointer-events: none;
    z-index: 2;

    @media screen and (min-width: 768px) {
      top: 0;
      left: auto;
      right: size(300);
      width: size(650);
    transform: rotate(180deg);
    }
  }

  .semicircle {
    position: absolute;
    top: sizem(-30);
    right: sizem(-300);
    aspect-ratio: 1/1;
    pointer-events: none;
    width: sizem(600);
   background: linear-gradient(180deg, #fbe4c000 45.90%, #ffdca566 100%);
    border-radius: 50%;
    z-index: 1;

    @media screen and (min-width: 768px) {
      top: auto;
      bottom: 0;
      left: size(-777);
      width: size(1554);
    }
  }

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(700);
    width: size(700);
    flex-direction: column;
    text-align: justify;
    position: relative;
    z-index: 3;
  }

  .txt {
    // margin: auto auto 3vw auto;
    padding:2.5em 0 0 0;
    text-align: center;

    
    .subtitle {
      font-weight: 300;
      font-size: 1.8em;
      letter-spacing: 0.3em;
      color: #e16a05;
      margin-bottom: 2em;
    }

    .img {
      margin-top: 4em;
      width: 100%;
    @media screen and (min-width: 768px) {
      width: 90%;
    }
    }
  }

  // size(110)

  .slider {
    margin: 0 0 0 0;
    flex-basis: size(792);
    width: size(792);
    height: size(755);

    .slide-item {
      @apply bg-cover;
      flex-basis: size(792);
      width: size(792);
      height: size(755);

    }

    .splide__pagination {
      right: calc(100% - 3em);
      bottom:-4em;
      justify-content: flex-end;
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
    padding: 0 0 2em;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;



    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      margin: 4em auto 2em;
      padding: 0;
    .subtitle {
      font-size: 1.3em;
      letter-spacing: 0.25em;
      margin-bottom: 1.5em;
    }
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
        flex-basis: auto;
        height: sizem(295);
        img{
          width: 82%;
          display: block;
          margin: auto;
        }

      }
  .arrows {
    .prev,
    .next {
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23666' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") ;
    }
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

const currentData = computed(() => imgs[currentSlideIndex.value]);

const moved = (splide, newIndex, oldIndex) => {
  currentSlideIndex.value = newIndex;
};

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
    title: "匠心建築 王正偉",
    subtitle: "城市策劃師 定義美學新風貌",
    desc: isMobile?
    "擅長以國際視野融合在地紋理，<br>將生活美學注入建築量體之中。<br>從立面語彙到空間留白，<br>每一筆都兼具場域精神與當代感，<br>讓建築成為人與城市之間最柔軟的對話。":
    "擅長以國際視野融合在地紋理，將生活美學注入建築量體之中。<br>從立面語彙到空間留白，每一筆都兼具場域精神與當代感，<br>讓建築成為人與城市之間最柔軟的對話。",
    en: new URL("./s8/en1.svg", import.meta.url).href,
    t: new URL("./s8/1.svg", import.meta.url).href,
    img: new URL("./s8/1.png", import.meta.url).href,
    caption: ""
  },
  {
    title: "名品公設 集藝設計",
    subtitle: "以空間書寫生活故事/詹易儒",
    desc: isMobile?
    "以人為本的空間設計，<br>帶入經典美學質材與考量實用功能，<br>打造出具有生命力的風格場域，<br>讓空間活出居者專屬的生活品味。<br> <br>":
    "以人為本的空間設計，帶入經典美學質材與考量實用功能，<br>打造出具有生命力的風格場域，<br>讓空間活出居者專屬的生活品味。",
    en: new URL("./s8/en2.svg", import.meta.url).href,
    t: new URL("./s8/2.svg", import.meta.url).href,
    img: new URL("./s8/2.png", import.meta.url).href,
    caption: ""
  },
  {
    title: "景觀設計 綠點景觀",
    subtitle: "四季綠景策展人/施仁人",
    desc: isMobile?
     "專注「藝術生活化、生活藝術化」理念，<br>將自然語彙注入城市肌理，<br>以綠意展演四季風景，風光水融入地景，<br>日常與綠意完美交融。<br> <br>":
     "專注「藝術生活化、生活藝術化」理念，<br>將自然語彙注入城市肌理，<br>以綠意展演四季風景，風光水融入地景，<br>日常與綠意完美交融。",
    en: new URL("./s8/en3.svg", import.meta.url).href,
    t: new URL("./s8/3.svg", import.meta.url).href,
    img: new URL("./s8/3.png", import.meta.url).href,
    caption: ""
  },
]
</script>