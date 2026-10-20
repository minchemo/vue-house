s2<template>
  <article class="s5 relative" id="s5">
    <picture>
      <source media="(max-width: 768px)" srcset="./s5/bgm.jpg" />
      <img src="./s5/bg.jpg" alt="" class="bg" />
    </picture>

      <h3 class="title1" data-aos="fade-up">巨蛋<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l20 20M0 20L20 0" stroke="#13e000"/></svg>好市多商圈</h3>
      <div class="txt">
      <h4 class="title" data-aos="fade-up">軌道到哪 繁榮就到哪</h4>
<div class="subtitle">南台南副都心<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 20"><path d="M4 0V20" stroke="#13e000"/></svg>捷運藍線<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l20 20M0 20L20 0" stroke="#13e000"/></svg>雙鐵交匯</div>
<p>副都心小巨蛋計畫<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l20 20M0 20L20 0" stroke="#13e000"/></svg>三大龍頭好市多、全聯、統一萬家福<br>
同一個未來 唯一的答案</p>
      </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: sizem(10);
  background: #EB6120;
  height: sizem(604);
  overflow: hidden;
  text-align: center;

  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(1070);
    max-height: size(1070);

  }
  .bg {
    position: absolute;top: 0;left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;  
  }
  svg{height:.8em; display: inline-block;vertical-align: middle;margin: 0 .1em .2em;}
  .title1{position: relative; color: #fff;
    z-index: 2;
    font-size: sizem(20);
    font-weight: 400;
    margin: sizem(0) auto auto;
@media screen and (min-width: 768px){  
    font-size: size(100);
    margin: size(120) auto auto;
}
}
  .txt{position: relative; color: #fff;
    z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    margin: 0 auto size(45);
  .title{
    font-size: size(52);
    letter-spacing: .03em;
    font-weight: 500;}
  .subtitle{
    font-size: size(30);
    letter-spacing: .03em;
    font-weight: 500;}
  p{
    margin: 0.6em auto 0;
    font-size: size(21);
    letter-spacing: .1em;}

}
}
</style>
<script setup>
import info from "@/info"
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