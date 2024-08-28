<template>
  <article class="s4 relative" id="s4">
    <div class="txt">
      <p data-aos="fade-up" data-aos-delay="0">興連城開發團隊潛心掘拾樸真土地，以手感孵化美學底蘊，人本思維嚴守工程品質，精實工法扎根基底，細琢空間與質選建材嵌合建築內蘊，以微知著每一處細節，凝鍊真粹，兼及知人、知宅、知築心。</p>
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">善良<span>｜</span>正直<span>｜</span>誠信</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="0">正當做事 蓋出價值</h4>
    </div>
    <img src="./s3/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="200">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {

  background: #F0F0F0;
 // background: #000;
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
        }
        .subtitle{
          font-size:sizem(12);
          text-align: center;
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:sizem(6) 0 sizem(23);}
      }
        .slogo{
          width: sizem(175);margin:sizem(18) auto sizem(38);}


}

/*
@keyframes an1 {
  0% {
    transform:rotate(-70deg);opacity: .8;
  }
  20% {
    transform:rotate(110deg);opacity: 0;
  }
  80% {
    transform:rotate(110deg);opacity: 0;
  }
  100% {
    transform:rotate(290deg);opacity: .8;
  }
}
.s4 {
 height: size(1070);
 overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(36);
  .bg{position: absolute;width:100%;top:size(-332);left:0%;}
  .bubble{position: absolute;left:0;right:size(12);top:size(512);margin: auto;width:size(307);
    mix-blend-mode: overlay;
   // background: #0003;
    img{width: 100%;
 //  transform: rotate(180deg);opacity: 0;
  animation: an1 2s linear infinite reverse;
 }
  }

  .t1{position: absolute;
    left: 0;right: 0;margin: auto;text-align: center;
    font-size:size(62);
    line-height: 1.13;
    letter-spacing: 0.07em;
    font-weight: 900;z-index: 3;top:size(172);
    
    }
  .line{ width: 102%;left: -1%;
      position: absolute;z-index: 3;top:size(345);}
  .txt{left: 0;bottom: 0; width:100%;background: #fff;
  display: flex;
  justify-content:center;
  align-items:center;height: size(130);padding-bottom: size(17);
  letter-spacing: 0.04em;
    h4{font-size:size(36); border-right:1px solid currentColor;font-weight: 600;
      padding: .15em .8em .15em 0;margin-right: .8em;}
    p{font-size:size(24);}
  }
  .bottom{left: 0;bottom: 0; width:100%;z-index: 3;height:size(16);}
}
*/
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

/*

  .s4 {
    height: sizem(740);
    font-size:sizem(16);
    background-size: 340% auto;
    .bg{position: absolute;width:330%;top:sizem(-335);left:-115%;}
    
  .bubble{left:0;right:sizem(12);top:sizem(215);margin: auto;width:sizem(198);//background: #000;
  }

  .t1{font-size:sizem(25);top:sizem(86);
    }
  .line{ width: sizem(400);left:sizem(-22);top:sizem(164);}
  .txt{height:auto;padding: sizem(35) 0 sizem(62) 0;
    flex-direction: column;
  letter-spacing: 0.04em;
    h4{font-size:sizem(20); border-right:0px solid currentColor; border-bottom:1px solid currentColor;font-weight: 600;
      padding: 0 0 .6em 0;margin: auto auto .6em auto;width: sizem(310);text-align: center;}
    p{font-size:sizem(15);line-height: 1.7;
      margin: auto;width: sizem(310);text-align: justify;}
  }
  .bottom{height:sizem(16);}
  
}*/
}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

</script>