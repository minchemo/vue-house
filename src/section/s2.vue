<template>
  <article class="s2">
    <div class="txt">
      <h2 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="0">EVERYTHING <br /> IS PERFECT
      </h2>
      <div class="sub">地段決定身價,眼界決定境界。 <br /> 站在關埔的最核心,您的眼界,已領先一步 <br /> 時間醞釀的答卷,獻給懂完美的你。</div>
      <ul>
        <li data-aos="fade-up" data-aos-delay="100">完美的名字</li>
        <li data-aos="fade-up" data-aos-delay="200">昌益鉑翡 EVERYTHING IS PERFECT</li>
        <li data-aos="fade-up" data-aos-delay="300">限量早鳥!即將公開 <br /> 捷足先登 !現在開始</li>
        <li data-aos="fade-up" data-aos-delay="400"> 本圖片為AI情境模擬,以實際完工現況為準。</li>
      </ul>
    </div>
    <div class="caption"></div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden;
  width: 100%;
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  padding: 0;
  font-size: size(18);
  background: url("./s2/s2.png") 50% 40%;
  background-size: cover;

  .txt {
    z-index: 5;
    margin: 2em auto;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    font-size: size(20);
    color: #fff;

    .sub {
      color: #fff;
      margin: 0 0 .6em;
      text-align: center;
      font-size: size(20);
    }

    .title {
      font-size: 2em;
      margin: 0 0 .6em;
      line-height: 1.4;
      font-weight: 700;
      color: #CEA93C;
      text-align: center;

      &::after,
      &::before {
        content: "";
        width: 0 !important;
        height: 0 !important;
      }
    }
  }

  .st {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: size(60);
    height: size(740);
    bottom: calc(50% - 16vw);
    right: size(120);
    background-image: linear-gradient(180deg, #fff0 0%, #FFF 50%, #fff0 100%);

    img {
      width: 50%;
      margin: 0 0 2vw;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
    @apply flex-col;
    min-height: sizem(0);
    max-height: sizem(1080);
    height: sizem(667);
    font-size: sizem(14) !important;
    background: #1691CF url("./s2/bgm.webp") 50% 100% no-repeat;
    background-size: 100% auto;

    .txt {
      margin: 4em auto auto auto;
      font-size: sizem(14);

      .sub {
        font-size: sizem(18) !important;
      }

      .title {
        font-size: sizem(22) !important;
        font-weight: 700;
      }
    }

    .st {
      width: sizem(20);
      height: sizem(220);
      bottom: sizem(50);
      right: sizem(30);
    }

  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

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
</script>
