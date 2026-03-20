<template>
  <article class="s8" ref="s8">
    <div class="main">
      <div class="txt">
        <img src="./s8/school.svg" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="2000" class="s8-t3" alt="">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">校園咫尺為鄰 <br v-if="isMobile" />完整成長動能</h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">成長,就在校園環繞的日常之中, 東寧國小、內埔國中、美和高中、美和科大、 屏東科大等學府齊聚, 從啟蒙到深耕,
          陪伴孩子走過每一段重要學習歷程,為孩子的成長,奠定更好的背景與更寬廣的未來。</p>
      </div>
    </div>
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

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s8 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height: auto;
  padding: 5em 0 5em 0;
  font-size: size(19);
  gap: 3em;
  flex-wrap: wrap;
  flex-wrap: wrap;
  background: url("./s8/bg.png") 0% 0%;
  background-size: cover;
  flex-direction: row-reverse;

  .slider .splide__pagination li button.is-active {
    background: #be771a;
  }

  //slider btn active color

  .slider .slide-item img {
    border-radius: 0;
  }

  img.s8-t3 {
    width: size(630);
  }

  h3.title {
    width: 17em;
    color: #BE771A;
    font-family: Noto Serif TC;
  }

  p.desc {
    color: #5B5959;
    font-size: 1.5em;
  }

  .img {
    position: absolute;
    bottom: size(-30);
    left: size(-270);
    width: size(660);

    &::before {
      content: "";
      width: 120%;
      height: 20%;
      border-radius: 50%;
      background: #1691CF;
      display: block;
      position: absolute;
      bottom: -10%;
      left: -10%;
    }

    img {
      width: 100%;
      position: relative;
    }
  }

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
    flex-direction: column;
    text-align: justify;

    .txt img {
      width: size(450);
      margin-left: -1em;
    }
  }



  .slider {
    margin: 0;
    flex-basis: size(840);
    height: size(560);
    width: size(840);

    .slide-item {
      @apply bg-cover;
      flex-basis: size(840);
      height: size(560);

    }

    .splide__pagination {
      left: calc(100% + 3em);
      justify-content: flex-start;

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


  .s8 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;
    background: url("./s8/bg.png") 0% 0%;
    flex-direction: column-reverse;

    p.desc {
      font-size: 1.3em;
    }

    .slider .splide__pagination li button {
      background: #999999;
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

      .txt img {
        width: 41vw;
      }
    }

    .txt {
      margin: 3em auto 3em;
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
    img: new URL("./s8/S8-g1.jpg", import.meta.url).href,
    caption: "屏東科大實景拍攝"
  },
  {
    img: new URL("./s8/S8-g2.jpg", import.meta.url).href,
    caption: "內埔國中實景拍攝"
  },
  {
    img: new URL("./s8/S8-g3.jpg", import.meta.url).href,
    caption: "東寧國小實景拍攝"
  },
  {
    img: new URL("./s8/S8-g4.jpg", import.meta.url).href,
    caption: "美和科大實景拍攝"
  },
]
</script>
