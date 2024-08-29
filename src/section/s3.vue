<template>
  <article class="s3 relative" id="s3">
    <div class="txt">
      <h3 class="title" data-aos="fade" data-aos-delay="0">職人匠心恆持初心<br>
        留白哲思細琢鑑築</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">Art of architecture</h4>
        <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
    </div>
        <img src="./s3/img.webp" class="img" data-aos="zoom-in" data-aos-delay="600">
        <img src="./s3/w.webp" class="w" data-aos="zoom-in" data-aos-delay="0">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
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
        width: sizem(251);
        margin: sizem(0) auto sizem(20) auto;
        padding: sizem(16) 0 sizem(20) 0;
        text-align: justify;
        @media screen and (min-width: 768px) {
        width: size(962);
        margin: 0  size(733) 0 auto;
        padding: 0;
        }
      }
        .title{
          font-size:sizem(26);
          color: #A30C24;
          line-height: 1.2;
          margin-top:sizem(28);
          letter-spacing: 0.03em;
          transform: translateY(sizem(100));
        @media screen and (min-width: 768px) {
          font-size:size(40);
          margin-top:size(135);
          transform: translateX(size(-100));
          
        }
        }
        .subtitle{
          font-size:sizem(20);
          transform: translateY(sizem(100));
        @media screen and (min-width: 768px) {
          font-size:size(30);
          margin-top:size(40);
          transform: translateX(size(-100));
        }
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:sizem(6) 0 sizem(23);
          transform: translateY(sizem(100));
        @media screen and (min-width: 768px) {
          margin:size(-70) 0 0;
          transform: translateX(size(-100)) scaleX(.2);
          transform-origin: 0 50%;
        }
      }
        .img{
          width: sizem(280);margin: auto;
        @media screen and (min-width: 768px) {
          position: absolute;
          right: size(130);
          top: size(90);
          width: size(533);
        }
      }
        .w{
          width: sizem(346);
          margin:sizem(60) auto auto auto;transform-origin: 50% 100%;
          @media screen and (min-width: 768px) {
          width: size(820);
          margin:size(240) auto auto auto;
        }
        }


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
.s3 {
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

  .s3 {
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