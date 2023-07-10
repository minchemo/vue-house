<template>
  <article class="s2" id="s2">
    <img class="bg1" src="./s2/bg.jpg" alt="" srcset="">
    <img class="bg2" src="./s2/bg2.png" alt="" srcset="">
    <div class="txt">
    <h4 class="subtitle font-['noto_serif_tc']" data-aos="zoom-in">SMILE EUROPE</h4>
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in" data-aos-delay="300">邂逅歐式別墅心生活</h3></div>
    <div class="caption">情境示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden w-full bg-[#F27200];
  height: size(1236);
  display: flex;
  align-items: center;
  justify-content:flex-start;
  flex-direction: column;
  font-size:size(25);
  padding: size(98) 0;
  gap:size(10);
   .bg1{position: absolute;top:-5vw;left: 0;width: 100%;}
   .bg2{position: absolute;bottom:0;left: 0;width: 100%;}
   .txt{
    position: relative;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.8;
    color: #FFF;}
  .title{
    font-size: 1.7em;
  }
  .subtitle{
    font-size: .9em;
  }
    .caption {
      @apply absolute;
      right:3em;
      bottom: 5em;
      font-weight: 500;
      font-size: size(15);
      color: #FFFFFF;
      text-shadow: 0px size(2) size(2) rgba(0, 0, 0, 0.8);
    }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */

// @media screen and (max-width: 767px) { 平常我們手機的設定

@media screen and (max-width: 767px) {
  .s2 {
font-size:sizem(15);
  height: sizem(667);
  flex-direction: column;
  gap:0;
  padding: 0;
   .bg1{position: absolute;top:0;
    left: -30%;
    width: 240%;max-width: 900%;}
   .bg2{position: absolute;bottom:0;left: -10%;width: 230%;max-width: 900%;}
   .txt{
    margin: 3em auto 0;
   }
    .caption {
      right:1em;
      bottom: 13em;
      font-size: sizem(12);
    }

}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
