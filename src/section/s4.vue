<template>
  <article class="s4">
   <!--   -->  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">作夢想不到!豪宅地段<br v-if="isMobile">用小資價輕鬆拿下</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">藝術水岸園區 ✕ 國民運動中心<br v-if="isMobile"> 每個人都想住的新名宅特區</h4>   
      </div>
    <Fullview />
    <div class="caption">基地空拍實景經後製修飾</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  @apply relative overflow-hidden bg-[#005890] text-[#fff];
  width: 100%;
 // height: size(1059);
  font-size:size(20);
  .txt {text-align: center;position: relative;
  padding-top:1.8em;z-index: 10;margin-bottom:-6.3em ;
  
  .subtitle{font-size: 1.25em;margin-top: .4em;
      font-weight: 500;}
  }
  .viewbox{z-index: 2;
    margin: 0 0 -5vw 0;
    top: -5vw;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
   // height: sizem(550);
  font-size:sizem(15);

  .txt {//text-align: justify;
  padding-top:3.5em;width:sizem(310);margin:auto auto -4.3em auto;
  .subtitle{font-size: 1em;
      font-weight: 400;}
  }
  .viewbox{height: sizem(550);
    margin: 0;
    top:0;}


  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
