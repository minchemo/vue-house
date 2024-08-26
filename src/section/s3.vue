<template>
  <article class="s3 relative" id="s3">
    <img src="./s3/bg.webp" alt="bg" class="bg">
    <h3 class="t1" data-aos="zoom-in" data-aos-delay="0">五大巨擘攜手 核心最強心動<br>
      <img src="./s3/logoall.svg" alt="logoall" class="logoall" data-aos="zoom-in" data-aos-delay="200"></h3>
    <img src="./s2/line.svg" alt="line" class="line">
    <div class="txt absolute">
      <h4 data-aos="fade-up" data-aos-delay="0">住宅Ｘ商場Ｘ辦公Ｘ飯店Ｘ綠軸</h4>
      <p data-aos="fade-up" data-aos-delay="0">國泰人壽、三商美邦人壽、華泰大飯店、國泰建設、國泰商旅，五大品牌，史詩鉅獻<br>
        讓回家是五大風格之旅，驚艷東區門戶的時尚漫遊，刷新南港國際高度，躬逢・必擁</p>
      <img src="./s2/bottom.webp" class="bottom absolute">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s3 {
 height: size(1070);
 overflow: hidden;
  //min-height: size(900);
 // max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(36);
  .bg{position: absolute;width:100%;top:0;left:0%;}
  .t1{position: absolute;
    left: 0;right: 0;margin: auto;text-align: center;
    font-size:size(62);
    line-height: 1.13;
    letter-spacing: 0.07em;
    font-weight: 900;z-index: 3;top:size(172);color: #fff;
    }
    .logoall{width: size(807);position: relative;top:size(-10);}
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

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s3 {
   /* height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);*/
    height: sizem(740);
    font-size:sizem(16);
    background-size: 340% auto;
    .bg{position: absolute;width:295%;top:sizem(-70);left:-90%;}
  .t1{font-size:sizem(25);top:sizem(86);
    }
    .logoall{width: sizem(327);}
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