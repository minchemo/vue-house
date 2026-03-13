<template>
  <article class="s5" ref="s5">
    <div class="main">
      <div class="txt">
        <img src="./s5/s5-t3.png" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="2000" class="s5-t3" alt="">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">
          義大健康園區 <br v-if="isMobile" />全新醫療聚落
        </h3>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">
          未來集醫療、娛樂、百貨於一身的生活聚落,不僅提供完善醫療資源, 也承載未來的退休照護,結合百貨商城,所帶來的不只有便利, 更是源源不絕的人口紅利與錢潮動能,讓世代安居之際, 同步擁抱店舖的無限潛力。</p>
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


.s5 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height: auto;
  padding: 5em 0 5em 0;
  font-size: size(19);
  gap: 3em;
  flex-wrap: wrap;
  background: url("./s5/s5bg.png") 0% 0%;
  background-size: cover;

  .slider .splide__pagination li button.is-active {
    background: #be771a;
  }

  //slider btn active color

  .slider .slide-item img {
    border-radius: 0;
  }

  img.s5-t3 {
    width: size(500);
  }

  h3.title {
    color: #BE771A;
    font-family: Noto Serif TC;
  }

  p.desc {
    color: #5B5959;
    font-size: 1.5em;
  }

  .slider .splide__pagination li button {
    background: #999999;

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
  }

  .slider {
    margin: 0;
    flex-basis: size(840);
    width: size(840);
    height: size(560);

    .slide-item {
      @apply bg-cover;
      flex-basis: size(840);
      height: size(560);

    }

    .splide__pagination {
      right: calc(100% + 3em);
      justify-content: flex-end;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(15);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 0em;

    flex-direction: column-reverse;
    background-image: url("./s5/s5bg-mo.png");

    //滿版撐開 避免簡寫覆蓋
    background-size: cover;

    p.desc {
      font-size: 1.3em;
    }

    .splide__track {
      padding-top: 50px;
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
    img: new URL("./s5/s41.png", import.meta.url).href,
    caption: "情境示意圖"
  },
  {
    img: new URL("./s5/s42.png", import.meta.url).href,
    caption: "情境示意圖"
  },
]
</script>
