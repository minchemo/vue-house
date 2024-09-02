<template>
  <article class="s1 relative" id="s1">
    <!-- <img src="./s1/mo.jpg" class="t0"> -->
    <img src="./s1/bg.webp" class="bg">
    
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/building.webp" class="building" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/bottom.svg" class="bottom" data-aos="zoom-in" data-aos-delay="200">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;top:0px;left: 0; pointer-events: none;z-index: 9;opacity: .3;}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
  .s1 {
    height:calc(100vh - 63px);
  //  height:sizem(667);
    min-height: sizem(604);
    max-height: sizem(750);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  overflow: hidden;
  
@media screen and (min-width: 768px) {
    height:100vh;
    // height: size(1070);
    min-height: size(900);
    max-height: size(1080);
    justify-content:space-between;
    padding: 0 size(650) 0 0;
}
  .bg{position: absolute;
    top:0;left:0;
    height: 100%; transform: translateX(calc(-100% + 100vw));
    animation: an 20s linear alternate infinite;
    @media screen and (min-width: 768px) {
      height: auto;width:size(2300);top:calc(50% + #{size(0 - 1080 * .5)});
    }
  }
  .logo{width:sizem(270);margin:sizem(37) auto sizem(47);
    @media screen and (min-width: 768px) {
      position: relative;top:calc(20% - #{size(150)});
      width:size(566);margin:auto;}
  }
  .building{
    width:sizem(78);transform-origin: 50% 100%;
    @media screen and (min-width: 768px) {width:size(208);}
  }
  .bottom{
    width:sizem(330);transform-origin: 50% 0%;background: url("./s1/bottom.webp");background-size: cover;
    @media screen and (min-width: 768px) {position: absolute;bottom:0;right:0;
      width:size(658);}
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