<template>
  <article class="s1" id="s1">
    <div class="bg relative">
      <img src="./s1/bg.jpg" class="bg1">
    <img src="./s1/en.svg" class="en absolute" data-aos="fade-up" data-aos-delay="400">
      <img src="./s1/img.webp" class="img absolute" data-aos="fade-left" data-aos-delay="0">
    </div>
    <img src="./s1/logo.svg" class="logo absolute" data-aos="zoom-in" data-aos-delay="200">
	<!--  
    <img src="./s1/02.jpg" class="t0">
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
  @apply relative w-full h-screen bg-[#FFF];
  min-height: size(900);
  max-height: size(1080);
  font-size:size(36);
  padding: size(20);

.t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
.bg{overflow: hidden;width: 100%;height: 100%;
  .bg1{width: 100%;height: 113%;object-fit: cover;
  transform: skewY(-3deg);transform-origin: 0 0%;
  animation: ann 3s ease-in-out alternate infinite;
  }
}
.img{bottom:0;right:size(70);height: size(1020);max-height: 99%;}
.logo{top:size(310);left:size(160);width:size(878);top: calc(50% + #{size(310-1080*.5)});}
.en{top:size(40);right:size(40);width:size(18);}
}
@keyframes ann {
  to {
    transform: translateX(0%);
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


 // .gif{width:100%;height:70%;left: 0;}

  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(700);
    font-size:sizem(15);
    padding: sizem(10);
    
.bg{
  .bg1{width: 140%;height: 113%;object-fit: cover;
  transform: skewY(-10deg);
  }
}
.img{bottom:0;right:sizem(10);height: sizem(380);max-height: 55%;}
.logo{top:sizem(125);left:sizem(40);width:sizem(270);top: calc(20% + #{sizem(125-604*.2)});}
.en{top:sizem(20);right:sizem(20);width:sizem(9);}


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