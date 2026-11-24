<template>
  <article class="s1 relative" id="s1">
    <picture>
      <source  srcset="./s1/mo.png" type="image/png" media="(max-width: 767px)">
      <img src="./s1/pc.png" class="t0"></picture>
<div class="bg">
  <img src="./s1/bg-green-r.svg" class="bg-r">
  <img src="./s1/bg-green-l.svg" class="bg-l">
  <img src="./s1/bg.png" class="bg-o">
</div>

    
    <img src="./s1/logo.svg" class="logo" data-aos="zoom-in" data-aos-delay="0">
 <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="0">
 <img src="./s1/t2.svg" class="t2" data-aos="zoom-in" data-aos-delay="0">
 <img src="./s1/button.svg" class="button" data-aos="zoom-in" data-aos-delay="0">
 <img src="./s1/img.png" class="img" data-aos="zoom-in" data-aos-delay="0">
  <div class="caption">3D外觀透視示意圖</div>
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
  position: relative;
    height:  sizem(604);
  //  height:sizem(667);
  /*  height:calc(100vh - 63px);
  min-height: sizem(604);
    max-height: sizem(750);
    */
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    height:100vh;
     height: size(1070);
    min-height: size(900);
    max-height: size(1080);
    justify-content:space-between;
    padding: 0;
}
.bg{
  position: absolute;
  top:0;left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #006045 -7.92%, #009E4B 29.16%, #00B55A 78.59%, #00D26D 115.67%);
 .bg-l,
 .bg-r{
  height: 100%;


 } .bg-l{float: left;}
 .bg-r{float: right;}
 .bg-o{
  position: absolute;
  top:0;left:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: soft-light;
  opacity: .38;
}
}
  .logo{position: absolute;width:sizem(290);
    z-index: 2;
    @media screen and (min-width: 768px) {
      top: size(257);
      left: size(257);
      width:size(876);}
  }
  .t1{position: absolute;width:sizem(290);
    z-index: 2;
    @media screen and (min-width: 768px) {
      top: size(559);
      left: size(257);
      width:size(876);}
  }
  .t2{position: absolute;width:sizem(290);
    z-index: 2;
    @media screen and (min-width: 768px) {
      top: size(794);
      left: size(257);
      width:size(876);}
  }
  .button{position: absolute;width:sizem(290);
    z-index: 2;
    @media screen and (min-width: 768px) {
      top: size(317);
      left: size(257);
      width:size(876);}
  }
  .img{position: absolute;width:sizem(290);
    z-index: 2;
    @media screen and (min-width: 768px) {
      bottom: 0;
      right: 0;
      width:size(786);}
  }
/*
  .bg{position: absolute;
    top:0;left:0;
    height: 100%; transform: translateX(calc(-100% + 100vw));
    animation: an 20s linear alternate infinite;
    @media screen and (min-width: 768px) {
      height: auto;width:size(2300);top:calc(50% + #{size(0 - 1080 * .5)});
    }
  }
  .logo{width:sizem(290);margin:sizem(110) auto sizem(67);
    @media screen and (min-width: 768px) {
      position: relative;top:calc(20% - #{size(180)});
      width:size(608);margin:auto;}
  }
  .building{
    width:sizem(110);transform-origin: 50% 100%;
    @media screen and (min-width: 768px) {width:size(208);}
  }
  .bottom{
    width:sizem(330);transform-origin: 50% 0%;background: url("./s1/bottom.webp");background-size: cover;
    @media screen and (min-width: 768px) {position: absolute;bottom:0;right:0;
      width:size(658);}
  }
      */
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