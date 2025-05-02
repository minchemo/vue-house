<template>
  <article class="s1 relative s1-section" id="s1" ref="s1">

    <img src="./s1/bgm.webp" class="bg" data-aos="fade" data-aos-delay="0" v-if="isMobile">
    <img src="./s1/bg.webp" class="bg" data-aos="fade" data-aos-delay="0" v-else>
    
    <div class="l1"></div>
    <h3 class="t1" data-aos="zoom-in-up" data-aos-delay="100">雙捷交鋒&ensp;新店之巔</h3>
    <h3 class="t2" data-aos="zoom-in" data-aos-delay="400">東基驕址．即將現身</h3>
    <div class="txt">區域空拍修飾</div>
    <img src="./s1/en.svg" class="en" data-aos="zoom-in" data-aos-delay="600">
    <img src="./s1/icon.svg" class="icon" data-aos="zoom-in" data-aos-delay="0">

    <!-- 
    <img src="./s1/mo.jpg" class="t0" >
    <img src="./s1/bg.webp" class="bg" data-aos="fade" data-aos-delay="0">
    <h3 class="t1" data-aos="zoom-in" data-aos-delay="0">超越南港<br>摩登時代</h3>
    <img src="./s1/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/logor.svg" class="logor absolute"> -->
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
.s1-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: transform 0.1s ease-out;
}
.s1 {
  min-height: size(920);
  max-height: size(950);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  font-size:size(36);
  overflow: hidden;
  

  .t0{position: absolute;width: 100%;top:0;left: 0; pointer-events: none;z-index: 9;opacity: 0.5;}
   .bg{position: absolute;width:100%;left:0;top:calc(50% + #{size(-60 - 1070 * .5)});
  }
  .l1{position: absolute;width:100%;left:0;top: 0;height: calc(100% + 22vw);
    background: 
    linear-gradient(to bottom right, #FFFC 0%, #fff0 50%) bottom right / 50% 50% no-repeat, 
    linear-gradient(to bottom left, #FFFC 0%, #fff0 50%) bottom left / 50% 50% no-repeat,
    linear-gradient(to top left, #FFF 0%, #fff0 50%) top left / 50% 50% no-repeat,
    linear-gradient(to top right, #FFF 0%, #fff0 50%) top right / 50% 50% no-repeat;
    mix-blend-mode:soft-light;
    animation: l1 5s ease-in-out infinite;
    transform: scale(1,0.001);opacity: 1;
  }
@keyframes l1 {
  40% {
    transform: scale(0.1,3);opacity:1;
  }
  100% {
    transform: scale(0.05,3.5);opacity:0;
  }
}

  .t1{position: relative;
    font-size:size(85);
    line-height: 1.13;
    letter-spacing: 0.14em;
    font-weight: 900;z-index: 3;color: #FFF;margin-top:size(58);
    }

  .en{
   position: relative;
   width: size(800); 
   margin-top:size(40);
  }  

  .icon{
    position: absolute;
    left: 0;
    top: 0;
    width: size(150);
  }

  .txt{
   position: absolute;
   bottom: size(10);
   left: size(10);
   font-size: size(12);
   color: #fff;
  }
    
  .t2{position: relative;
    font-size:size(42);
    line-height: 1.13;
    letter-spacing: 1.3em;
    text-indent: 1.18em;
    font-weight: 500;z-index: 3;color: #FFF;margin-top:size(10);
    }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
   /* height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);*/
   // height: sizem(650);
    height: sizem(660);
    min-height: 0;
    max-height: sizem(750);
    font-size:sizem(16);
  .bg{
  width:sizem(375);height:sizem(667);
  top:calc(50% + #{sizem(-30 - 604 * .5)})
  }
  .t1{
    font-size:sizem(28);margin-top:sizem(106);letter-spacing: 0.1em;
    white-space: nowrap;
    }
    .img{ width: sizem(245);margin-top:sizem(16);}
  .t2{
    font-size:sizem(14);margin-top:sizem(10);
    letter-spacing: 1.2em;
    text-indent: 1.08em;
    }

  .icon{
    width: sizem(80);
  }

  .en{
   width: sizem(275); 
   margin-top:sizem(20);
  } 

  .txt{
   bottom: sizem(10);
   left: sizem(10);
   font-size: sizem(12);
  }

 
    /*
    .slogo{ width: sizem(230);margin-top:sizem(30);
    margin-bottom:sizem(65);}
    .logor{right: sizem(20);bottom: sizem(20); width: sizem(130);}

    */
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject, onMounted, onUnmounted} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>