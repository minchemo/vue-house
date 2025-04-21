<template>
  <article class="s4">
   <!--   -->  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">桃園核心精華 <br v-if="isMobile">小檜溪重劃區</h3>
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">雙溪匯聚，五大主題公園，站前、中正藝文、大有三大商圈環抱</h4>   
      </div>
    <Fullview />
    <!--div class="caption">基地空拍實景經後製修飾</div-->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  @apply relative overflow-hidden bg-[#018ee4] text-[#fff];
  width: 100%;
  height: 100%;
  font-size:size(20);
  .txt {
    position: absolute;
    text-align: center;
    top:size(60);
    left: size(600);
    z-index: 3;
  
  .title{
   font-size: 2em;
   font-weight: 700;
  }
  .subtitle{font-size: 1.25em;margin-top: .4em;
      font-weight: 500;}
  }
  .viewbox{
    width: 100%;
    height: 100%;
    z-index: 2;
    //margin: 0 0 -5vw 0;
    //top: -5vw;
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
