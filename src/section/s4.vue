s2<template>
  <article class="s4 relative" id="s4">
    <div class="tbox">
      <h3 class="title" data-aos="zoom-in" data-aos-delay="0">雙鐵交匯 黃金副都心</h3>
      <div class="txt" data-aos="fade-up" data-aos-delay="200">        
雙鐵匯聚、巨蛋擘劃、好市多商圈成形<br />
就在東區的崇聖路旁 昌益以18,000坪旗艦造鎮的壯闊闊擘劃<br />
預告南台南下一座全新都心的誕生
      </div>
    </div>
    <div class="caption">實景拍攝修飾</div>
    <Fullview />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: sizem(10);
  height: sizem(667);
  overflow: hidden;
  color: #fff;

  @media screen and (min-width: 768px) {
    height: auto;
   // height: 100vh;
    //min-height: auto;
    max-height: size(1075);

  }
  .tbox{
    position: absolute;top: 0;left: 0;right: 0;margin: auto;z-index: 11; }
  .title{ text-align: center;
    font-size: sizem(30);
    font-weight: 500;
    margin: sizem(20) auto sizem(14);
    letter-spacing: .06em;
  @media screen and (min-width: 768px) {
    font-size: size(90);
    font-weight: 600;
    margin: size(37) auto size(45);
    letter-spacing: .13em;
  }
  }
  .txt{
    text-align: center;
    font-size: sizem(12);
    letter-spacing: .06em;
  @media screen and (min-width: 768px) {
    font-size: size(20);
    margin:0 auto 0 size(145);
    letter-spacing: .06em;text-align: left;
  }
  }
  .viewbox{width: 100%;
    margin: 0 0 0 0;
  @media screen and (min-width: 768px) {
  .viewbox{height: sizem(667);
    margin:sizem(0) 0 0 0;
    top:0;}
  }}
  .caption{position: absolute;
    bottom: 0.5em;left: 0.5em;z-index: 2;font-size: sizem(8);
  
  @media screen and (min-width: 768px) {
    font-size: size(12);
  }}
}
</style>
<script setup>
import info from "@/info"
import Fullview from '@/components/fullview.vue';
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
const canPlayWebP = document.createElement('canvas')
  .toDataURL('image/webp')
  .startsWith('data:image/webp')

</script>