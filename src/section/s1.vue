<template>
  <article class="s1" id="s1">
    <div class="bg"><img src="./s1/bg.png" alt="bg"></div>
    <div class="bg bg2"><img src="./s1/bg.png" alt="bg"></div>
    
      
    <div class="txt"><img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000"/>
      <div class="t1 font-[Arial,'Noto_Sans_TC',sans-serif]" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">絕版<span>2</span>字頭</div>
      
      <div class="t2" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">錨定台中港特定區</div>
      <div class="hr" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000"></div>
      <div class="t3" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">國際港灣｜文化商圈｜5分鐘生活圈</div>
    </div>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  min-height: size(800);
  max-height: size(1080);overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(35);
  color: #42167B;
  line-height: 1.3;
  font-weight: 700;
  background: linear-gradient(180deg, #8086C0 0%, #FFF 51%, #FFF 77%, #EFCEE2 100%);
  
  .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;}
  .bg{position: absolute;bottom:calc(40% + (-22 - 1080 * .4) * 100vw / 1920);right: 0;width:94.89%;height:size(548);
  img{width: 100%;height: 100%;transform-origin: 100% 0;
  animation: an1 6s linear infinite;
  }
  }
  .bg2{
  img{
  animation-delay:-3s;
  }
  }
@keyframes an1 {
   0% {
    transform: scaleX(1.2)translateX(140%);
    opacity: 0;
   }
   25% {
    transform:scaleX(1)translateX(105%);
    opacity: 0;
   }
   75% {
    transform:scaleX(1)translateX(35%);
    opacity: 1;
   }
   100% {
    transform:scaleX(1.2)translateX(0%);
    opacity: 0;

   }
}
@keyframes an0 {
   to {
    transform:translateY(0);
   }
}
.txt{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 0em auto 6.2em auto;
    .logo{width:7.5em;margin: 0 auto .9em;}
    .t1{font-size:3em;font-weight: 900;
      line-height: 1;
      span{font-size: 1.3em;display: inline-block;position: relative;top: .06em;}
    }
    .t2{font-size: 1.85em;font-weight: 900;
      span{font-size: .85em;}
    }
    .hr{background: linear-gradient(90deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);width: 95%;height:0.114em;margin: .4em auto;}
    .t3{font-size: 1em;color: #004EA2;transform: scaleX(.95);
    }
}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(812);
    font-size:sizem(19);
  .bg{position: absolute;bottom:0;right: 0;width:95%;height:calc(45% - 5vw);
  img{width: 100%;height: 100%;
  transform: scaleX(1)translateX(0%);transform-origin: 100% 0;
   // animation:none;
  }
  }
    .txt{
      margin: 0em auto 9em;
    .logo{margin: 0 auto 2.5em;}
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