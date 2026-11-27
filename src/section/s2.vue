<template>
  <article class="s2">
    <Fullview :mapImage="mapImage" :bgImage="bgImage" :offsetRatio="2.4" />
    <div class="img">
      <img src="./s1/img.png">
    </div>

    <div class="txt">
      <h2 class="title" data-aos="fade-up" data-aos-delay="100">中央公園第一排 首席身段第一景</h2>
      <p data-aos="fade-up" data-aos-delay="200">
        「PARK
        32」正對南北向中央綠帶的中段。往北銜接小東路與平實轉運門戶，往南連結平實路與南紡商圈。在平實，能同時佔據公園中段與首排的基地，本就難得，城市的中央公園、首排景觀的價值，會隨著樹木密植成長、公共建設完工而持續放大，保值抗跌、傳承家業，站上第一排就有話語權。
      </p>

    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s2 {
  @apply relative text-[#fff];
  width: 100%;
  font-size: sizem(12);
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: size(16);
    margin-top: size(150);
  }
  .img {
    position: absolute;
    width: sizem(480);
      top: sizem(500);
      left:  sizem(-30);
      transform: rotate(-90deg)scale(-1 ,1.3);
      transform-origin: 0% -8%;
      img{width: 100%;
      transform: skewX(-8deg)translateX(-3%);
      transform-origin: 0 0;
      animation: an 6s linear infinite alternate;}

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  // height: size(1059);
  .txt {
    text-align: center;
    // position: absolute;
    margin: sizem(20) auto;
    width: sizem(350);
    padding: sizem(40) sizem(20);
    letter-spacing: 0.04em;
    z-index: 10; //margin-bottom:-6.3em ;
    color: #595757;
    background: #fff9;

    @media screen and (min-width: 768px) {
      position: absolute;
      text-align: justify;
      width: size(620);
      top: 6.7em;
      left: auto;
      margin: 0;
      right: size(150);
      color: #fff;
      padding: 0;
      background: transparent;
      text-shadow: 0 0 8px #0369;
    }


    .title {
      font-size: 1.6em;
      margin: 0em auto 0.7em;
      line-height: 1.38;
      font-weight: 700;
      letter-spacing: 0.03em;
      font-family: 'Noto Serif TC', serif;
      color: #133C36;

      @media screen and (min-width: 768px) {
        font-size: 2.6em;
        margin: 0em auto 0.7em;
        letter-spacing: 0.04em;
        white-space: nowrap;
        color: #fff;

      }
    }

    // .subtitle{font-size: 1.4em;margin-top: .2em;letter-spacing: 0.4em;font-weight: 300;}
  }

  .viewbox {
    z-index: 2;
    margin: 0 auto 0 auto;
    width: size(1794);
    //height: sizem(880);

    @media screen and (max-width: 767px) {
      height: sizem(550);
      width: 100%;
      top: 0;
    }
  }

}
</style>

<script setup>
import { computed, getCurrentInstance } from 'vue';
import Fullview from '../components/fullview.vue';
import mapImage from '@/section/s2/map.svg';
import bgImage from '@/section/s2/map.jpg';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
</script>