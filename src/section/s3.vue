<template>
  <article class="s3" id="s3">
    <img class="bg1" src="./s3/img.png" alt="" srcset="" v-if="!$isMobile()">
    <img class="bg1" src="./s3/img_m.png" alt="" srcset="" v-else>
    <img class="bg2" src="./s3/bg2.png" alt="" srcset="">
    <div class="txt">
    <h3 class="title font-['noto_serif_tc']" data-aos="zoom-in">微笑生活的10種方式</h3></div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative overflow-hidden w-full bg-[#F27200];
  height: size(760);
  display: flex;
  align-items: center;
  justify-content:flex-start;
  flex-direction: column;
  font-size:size(25);
  padding:0 0 size(98) 0;
  gap:size(10);
   .bg1{position: absolute;top:-7em;left: 0;width: 100%;}
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
  .s3 {
font-size:sizem(15);
  height: sizem(550);
  flex-direction: column;
  gap:0;
  padding: 0;
   .bg1{position: absolute;top:15%;
    left: 0%;
    width: 100%;}
   .bg2{position: absolute;bottom:0;left: -10%;width: 230%;}
   .txt{
    margin: 3em auto 0;
   }

}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
