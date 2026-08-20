<template>
  <article class="s12">
    <Fullview
      :mapImage="mapImage"
      :offsetRatio="8"
    />
    <div class="caption">空拍實景經電腦後製</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s12 {
  @apply relative overflow-hidden bg-[#005890] text-[#fff];
  width: 100%;
 // height: size(1059);
  font-size:size(20);
  .txt {text-align: center;position: absolute;
    top: 0;left: 0;right: 0;margin: auto;

  padding-top:3em;z-index: 10;//margin-bottom:-6.3em ;
  
  .subtitle{font-size: 1.4em;margin-top: .2em;letter-spacing: 0.4em;font-weight: 300;}
  }
  .viewbox{z-index: 2;
    margin: 0 0 0 0;
   // top: -5vw;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s12 {
   // height: sizem(550);
  font-size:sizem(15);
/*
  .txt {//text-align: justify;
  padding-top:3.5em;width:sizem(310);margin:auto auto -4.3em auto;
  .subtitle{font-size: 1em;letter-spacing: 0.05em;
      }
  }
      */
  .viewbox{height: sizem(435);
    margin:sizem(0) 0 0 0;
    top:0;}


  }
}
</style>

<script setup>
import { computed, getCurrentInstance } from 'vue';
import Fullview from '../components/fullview.vue';
import mapImage from '@/section/s12/map.webp';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
</script>