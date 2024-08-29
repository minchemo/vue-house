<template>
  <article class="s4 relative" id="s4">
    <div class="txt">
      <p data-aos="fade-up" data-aos-delay="0">興連城開發團隊潛心掘拾樸真土地，以手感孵化美學底蘊，人本思維嚴守工程品質，精實工法扎根基底，細琢空間與質選建材嵌合建築內蘊，以微知著每一處細節，凝鍊真粹，兼及知人、知宅、知築心。</p>
      <h3 class="title" data-aos="fade-up" data-aos-delay="200">善良<span>｜</span>正直<span>｜</span>誠信</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="400">正當做事 蓋出價值</h4>
    </div>
    <img src="./s3/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="200">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  background: #F0F0F0;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
      .txt{
        position: relative;
        color: #000;
        font-size:sizem(14);
        line-height: 1.8; 
        width: 100%;
        margin: sizem(0) auto sizem(20) auto;
        padding: sizem(76) sizem(62) sizem(62);
        text-align: justify;
        background: #E0E0E0;
        @media screen and (min-width: 768px) {
          font-size:size(22);
          padding:size(123) size(450) size(85) size(450);
          margin: auto;        
        }
        .title{
          font-size:sizem(21);
          color: #000;
          line-height: 1.2;
          margin-top:sizem(58);
          margin-bottom:sizem(17);
          letter-spacing: 0.03em;
          text-align: center;
          span{
            color: #A30C24;}
          @media screen and (min-width: 768px) {
            font-size:size(40);
          margin-top:size(130);
          margin-bottom:size(17);
          }
        }
        .subtitle{
          font-size:sizem(12);
          text-align: center;
          @media screen and (min-width: 768px) {
            font-size:size(20);
          }
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:sizem(6) 0 sizem(23);}
      }
        .slogo{
          width: sizem(175);margin:sizem(18) auto sizem(38);
          @media screen and (min-width: 768px) {
            width:size(347);margin:size(70) auto size(80);
          }}


}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

</script>