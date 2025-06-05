<template>
  <article class="s2" id="s2">
    <img src="./s2/bgm.webp" class="bg" v-if="isMobile"> 
    <img src="./s2/bg.webp" class="bg" v-else> 
    
    <div class="txt font-['Noto_Serif_TC',serif]">
      <h1>沒有國界  只有世界</h1>
      <h2>雙捷運三重A2站｜19-28坪世界觀</h2>
      <span data-aos="zoom-in" data-aos-delay="0">雙北市中心 三重新天地</span>
      <span data-aos="zoom-in" data-aos-delay="100">無國界建築計畫即刻啟動</span><br>

      <span data-aos="zoom-in" data-aos-delay="200">不是雙北兩市的交界</span>
      <span data-aos="zoom-in" data-aos-delay="300">而是亞洲門戶的視界</span><br>

      <span data-aos="zoom-in" data-aos-delay="400">開啟大台北科技新篇章</span>
      <span data-aos="zoom-in" data-aos-delay="500">一橋雙子星，一站市政廳</span>
      <span data-aos="zoom-in" data-aos-delay="600">九橋相迎、雙捷交匯</span>
      <span data-aos="zoom-in" data-aos-delay="700">三重A2早已預約世界級席位</span>
</div>
   
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative; 
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  color: #fff;

  .bg{width: 100%;}


  .txt{
    position: absolute;
    top: sizem(55);left: 0;right: 0;text-align: center;
    line-height: 2.0;
    letter-spacing: 0.06em;
    color: #3e3a39;
    font-size:sizem(14);
    font-weight: 500;
    span{display: block;}

    h1{
     font-size:sizem(30);
     margin-bottom: sizem(-10);

     
     @media screen and (min-width: 768px) {
      font-size:size(62);
      margin-bottom: size(-20);
     }
    }

    h2{
     font-size:sizem(20);
     margin-bottom: sizem(20);

     @media screen and (min-width: 768px) {
      font-size:size(32);
      margin-bottom: size(50);
     }
    }

    
  @media screen and (min-width: 768px) {
    top: size(190);
    line-height: 2;
    text-align: left;
    font-size:size(20);
    font-weight: 500;
    margin-left: size(290);

  }
}
}

</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>