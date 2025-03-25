<template>
  <article class="s1" id="s1">
    <img src="./s1/mo.jpg" class="t0">
    <img src="./s1/t1m1.svg" class="t1" data-aos="flip-up" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t12.svg" class="t1" data-aos="flip-up" data-aos-delay="400" v-else>
    <img src="./s1/t1m2.svg" class="t1" data-aos="flip-down" data-aos-delay="400" v-if="isMobile">
    <img src="./s1/t11.svg" class="t1" data-aos="flip-down" data-aos-delay="400" v-else>
    <img src="./s1/img.png" class="img" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t2.svg" class="t2" data-aos="fade-up" data-aos-delay="800">
    
	<!--  
    <img src="./s1/pc.jpg" class="t0">
    <div class="bg">
      <img src="./s1/bg.webp" class="bg1">
    </div>
    <div class="main relative">
    <img src="./s1/logo.svg" class="logo" data-aos="fade-up" data-aos-delay="100" v-if="!isMobile">
    <img src="./s1/logom.svg" class="logo" data-aos="fade-up" data-aos-delay="100" v-else>
    <img src="./s1/title.svg" class="title" data-aos="zoom-in" data-aos-delay="200">
    </div>
    <img src="./s1/comingsoon.svg" class="comingsoon" data-aos="zoom-in" data-aos-delay="500">
       <div class="bg"><img src="./s1/bg.svg" alt="bg"></div>
       <img src="./s1/img.webp" class="img absolute" alt="img" data-aos="zoom-in" data-aos-delay="0">
       <img src="./s1/txt.svg" class="txt absolute" alt="txt" data-aos="zoom-in" data-aos-delay="200">
   -->


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
/*
@keyframes op {
  50% {
     opacity: 0;
  }
}
 .bgh{position: absolute;width: 100%;height:100%;top:0;left: 0;object-fit: cover;
}
 .gif{position: absolute;width:100%;height:70%;bottom:0;left: 0;
mix-blend-mode: overlay;opacity: .8;
}
*/
.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  font-size:size(36);
  background: linear-gradient(124.8deg, #eee5df 41.3%,#c3ab9f 41.4%);
  //padding: size(20);
  
@media screen and (max-width: 767px) {
    height: calc(100vh - 63px);
    min-height: sizem(450);
    max-height: sizem(667);
    font-size:sizem(15);
    background: linear-gradient(135deg, #eee5df 41.3%,#c3ab9f 41.4%);

}
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .0;
    height: 100%;
  }
  .t1{position: absolute;left: 0;right: 0;margin: auto;width: size(1600);top: calc(50% - #{size(250)});
  @media screen and (max-width: 767px) {
    width: sizem(340);
    top: calc(50% - #{sizem(140)});  
  }
}
  .img{position: absolute;left: 0;right:size(370);margin: auto;width: size(560);top: calc(50% - #{size(370)});
  filter:drop-shadow(size(10) size(12) size(10) #000C);
  @media screen and (max-width: 767px) {
    right:sizem(-30);width: sizem(165);
    top: calc(50% - #{sizem(180)});
    filter:drop-shadow(sizem(5) sizem(6) sizem(5) #000C);
  }
}
  .t2{position: absolute;left:  calc(50% + #{size(50)});margin: auto;width: size(745);top: calc(50% + #{size(135)});
  @media screen and (max-width: 767px) {
    left: 0;right: 0;width: sizem(270);top: calc(50% + #{sizem(95)});
  }
}

  /*
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    gap: size(50);

  .logo{width: size(1068);}
  .title{width: size(869);}
}
.comingsoon{width: size(243);position: absolute; bottom: size(50);left: size(839);}


.bg{overflow: hidden;width: 100%;height: 100%;position: absolute;
  .bg1{width: 100%;height: 113%;object-fit: cover;
  transform: skewY(-3deg);transform-origin: 0 0%;
  animation: ann 3s ease-in-out alternate infinite;
  }
}


.en{top:size(40);right:size(40);width:size(18);}
*/
}
@keyframes ann {
  to {
    transform: translateX(0%);
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
/*
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


 // .gif{width:100%;height:70%;left: 0;}

  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(700);
    font-size:sizem(15);
    //padding: sizem(10);
    
.bg{
  .bg1{width: 140%;height: 113%;object-fit: cover;
  transform: skewY(-10deg);
  }
}

.main{
    width: 100%;
    height: 100%;
    gap: sizem(50);

  .logo{width: sizem(290);}
  .title{width: sizem(290);}
}
.comingsoon{width: sizem(136);position: absolute; bottom: sizem(30);left: sizem(120);}


}

  
}
*/
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