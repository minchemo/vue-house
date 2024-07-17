<template>
  <article class="s1" id="s1">
	<!--  

   <img src="./s1/mo.jpg" class="t0">

   -->
       <img src="@/section/s1/bg.webp" class="bgh" v-if="!$isMobile()">
       <img src="@/section/s1/bgm.webp" class="bgh" v-else>
       <!--img src="@/section/s1/gif2.gif" class="gif"-->
<!--div class="logo" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="0">
  <img src="./s1/logo.svg" alt="logo">
  <div class="earth">
  <img src="./s1/e.jpg" alt="earth" >
  <img src="./s1/e.jpg" alt="earth" ></div>
</div-->
<!--img src="./s1/t1.svg" alt="title" class="t1" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200" v-if="!$isMobile()">
<img src="./s1/t1m.svg" alt="title" class="t1" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="400" v-else>
<img src="./s1/coming.svg" alt="coming" class="coming" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="600"-->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
 .bgh{position: absolute;width: 100%;height:auto;top:0;left: 0;
top:calc(50% + #{size(-1080*.5)});
}
 .gif{position: fixed;width:size(1920);height:size(2000);top:0;left: 0;
//mix-blend-mode: lighten;
opacity: .2;
}


.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  //background: #E60012;
 // background: url("./s1/bg.webp");

  background-size: cover;
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}

.hr{position: absolute;bottom: calc(50% + #{size(-1080*.5)});left: 0;right: 0;margin: auto;opacity: .7;
    width: size(1410);height: 1px;background: #D9E021;}

  .logo{position: relative;
    width: size(844);
    margin-top:7vw;
    margin-bottom:2vw;
    img{width: 100%;
    }
      .earth{position: absolute;
        top:2vw;left: 0;right: 0;margin: auto;
        width:size(100);height:size(100);
        border-radius: 50%;overflow: hidden;
       // filter:drop-shadow(0 0 .8vw #FFF) drop-shadow(0 0 .2vw #FFF9);
       box-shadow: 0 0 .9vw #FFF, 0 0 .2vw #FFF;
       transform: rotate(10deg);
       white-space: nowrap;
    img{position: relative;top:-10%;
      opacity: 1;transform: translateX(-100%);height: 120%;width: auto;
      animation:earth 7s linear infinite reverse  ;
    }
    &::after{content: "";position: absolute;display: block;top: 0;left: 0;width: 100%;height: 100%;background: radial-gradient(100% 84% at 40% 90%, #000 0%, rgba(0, 0, 0, 0.24) 26.74%, rgba(0, 0, 0, 0.00) 60%, rgba(255, 255, 255, 0.00) 70%, rgba(255, 255, 255, 0.50) 100%);}
      }
@keyframes earth {
  to {
    transform: translateX(0%);
  }
}
    
  }
  .t1{
    width: size(1242);
    margin-bottom:5.2vw;
  }
  .coming{
    width: size(507);
  }
    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    font-size:sizem(15);

 .bgh{
top:0;
}
 .gif{width: sizem(800);height:sizem(800);
}

    
  .logo{
    width: sizem(320);
    margin-top:4vw;
    margin-bottom:3.5vw;
      .earth{
        top:4vw; width:size(210);height:size(210);
        box-shadow: 0 0 2vw #FFF, 0 0 1vw #FFF;
       

      }
  }
  .t1{
    width: sizem(297);
    margin-bottom:16.5vw;
  }
  .coming{
    width: sizem(224);
  }
.hr{bottom: -1px;}
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