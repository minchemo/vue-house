<template>
  <article class="s1 relative s1-section" id="s1" ref="s1">
    
    <img class="t1" src="./s1/t1m.svg" v-if="isMobile" data-aos="zoom-in" data-aos-delay="0">
    <img class="t1" src="./s1/t1.svg" v-else  data-aos="zoom-in" data-aos-delay="0">

    <img class="pi" src="./s1/img.webp"  data-aos="zoom-in" data-aos-delay="200">
    <img class="logo" src="./s1/logo.svg" data-aos="zoom-in" data-aos-delay="400">
    <img class="t2" src="./s1/t2.svg" data-aos="zoom-in" data-aos-delay="600">

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
  max-height: size(1070);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
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
    width: size(865);
    margin-bottom: size(120);
    }

  .logo{
    position: relative;
    width: size(500);
    margin-bottom: size(30);
    margin-top: size(30);
    z-index: 99;
    filter: brightness(0) invert(1);
  }
  

  .t2{
    position: relative;
    width: size(506);
  }  
  
    .en1{ width: size(705);position: relative;z-index: 3;margin-top:size(73);}
    .img{ width: size(705);position: relative;z-index: 3;margin-top:size(34);mix-blend-mode: screen;
    img{width: 100%;
    &:last-child{position: absolute;top:0;left: 0;}
    }
    }
    
  .t2{position: relative;
    font-size:size(42);
    line-height: 1.13;
    letter-spacing: 0.46em;
    text-indent: 0.46em;
    font-weight: 300;z-index: 3;color: #FFF;margin-top:size(10);
    }
    .en2{ width: size(510);position: relative;z-index: 3;margin-top:size(22);mix-blend-mode: screen;}
    .en3{ width: size(510);position: relative;z-index: 3;margin-top:size(18);}
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
    justify-content:center;
  .bg{width:sizem(584);top:sizem(0);left:sizem(-104.5);height:sizem(805);
  top:calc(50% + #{sizem(-105 - 604 * .5)})
  }

  .t1{position: relative;
    width: sizem(101);
    margin-bottom: sizem(70);
    margin-top: sizem(-60);
    }

  .logo{
    position: relative;
    width: sizem(192);
    margin-bottom: sizem(20);
    margin-top: sizem(20);
  }  

  .t2{
    position: relative;
    width: sizem(192);
  } 
  .pi{
    width: sizem(220);
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