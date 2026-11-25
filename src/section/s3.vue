<template>
  <article class="s3">
    <Fullview :mapImage="mapImage" :bgImage="bgImage" :offsetRatio="1.58" />
    <div class="txt">
      <div class="en" data-aos="fade-up" data-aos-delay="0">MASTER YOUR OWN TIMEZONE</div>
      <h2 class="title" data-aos="fade-up" data-aos-delay="100">下樓即享18倍大安森林綠意 轉身遇見CITYLINK繁華</h2>
      <p class="subtitle" data-aos="fade-up" data-aos-delay="200">
       立足成功二街靜巷<br> 漫步424公頃綠動公園與集美明星學區
      </p>

    </div>
    <div class="caption">空拍實景經合成修飾示意</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative overflow-hidden bg-[#005890] text-[#fff];
  width: 100%;
  font-size: sizem(12);
  @media screen and (min-width: 768px) {
  font-size: size(18);}

  // height: size(1059);
  .txt {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding-top: 6.2em;
    z-index: 10; //margin-bottom:-6.3em ;
  @media screen and (min-width: 768px) {
    padding-top: 7.7em;}


    .en {
      color: #EB5B1A;
      font-size: 1.3em;
  @media screen and (min-width: 768px) {
      font-size: 1.7em;
  }
    }

    .subtitle {
      display: block;
      font-family: 'Noto Serif TC', serif;
      font-size: 1.5em;
      letter-spacing: 0.1em;
      margin: 0.2em auto 0.3em;
  @media screen and (min-width: 768px) {
      font-size: 1.7em;}
    }

    // .subtitle{font-size: 1.4em;margin-top: .2em;letter-spacing: 0.4em;font-weight: 300;}
  }

  .viewbox {
    z-index: 2;
    margin: 0 0 0 0;

    @media screen and (max-width: 767px) {
      height: sizem(880);
      top: 0;
    }
  }

}
</style>

<script setup>
import { computed, getCurrentInstance } from 'vue';
import Fullview from '../components/fullview.vue';
import mapImage from '@/section/s3/map.svg';
import bgImage from '@/section/s3/map.jpg';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
</script>