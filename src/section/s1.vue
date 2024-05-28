<template>
  <article class="s1" id="s1">
  <!--  <img src="./s1/01.jpg" class="t0" alt=""> --> 
	 <img src="./s1/housem.webp" class="house" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600" v-if="isMobile"> 
	 <img src="./s1/house.webp" class="house" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600" v-else> 
   <img src="./s1/llm.webp" class="style2" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" v-if="isMobile"> 
   <img src="./s1/ll.webp" class="style2" data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000" v-else>  
    <img src="./s1/logo.svg" class="logo absolute" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" />
    <img src="./s1/slogo1.svg" class="slogo1 absolute" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" />
    <img src="./s1/slogo2.svg" class="slogo2 absolute" alt="" data-aos="zoom-in" data-aos-offset="-200" data-aos-delay="0" data-aos-duration="1000"/>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen ;
  background-image:url("../section/s1/bg.webp");
  background-position: center;
  background-size: cover;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  // height: auto;  
  @media screen and (max-width: 767px) {
  height:  calc(100vh - 63px);
  min-height: sizem(604);
  max-height: sizem(750);
    background-image:url("../section/s1/bgm.webp");
  }
  .t0{position: absolute;width: 100%;top: 0;left: 0; pointer-events: none;opacity: .3;}
  .all{width: 100%;position: relative;z-index: 10;}
  .logo{
    top: calc(50% + #{size(310 - 1080 * .5)});
    left: size(282);width: size(770);
@media screen and (max-width: 767px) {left: 0;right: 0;
  margin: auto;
  width:sizem(230);
  top: calc(50% + #{sizem(67 - 604 * .5)});
  }
  }

  .house{
    position: absolute;
    right:0;
    bottom:0;
    background: transparent;
    z-index: 5;
@media screen and (min-width: 767px) {
  height: 100%;
}
@media screen and (max-width: 767px) {
  width: 100%;
  }
  }
  .style2{
    position: absolute;
    right:0;
    bottom:0;
    mix-blend-mode: screen;
@media screen and (min-width: 767px) {
  height: 100%;
}
@media screen and (max-width: 767px) {
  width: 100%;
  }
}
  .slogo1{top: size(74);left: size(23);height: size(74);}
  .slogo2{bottom:size(14);right: size(15);height: size(40);}
  @media screen and (max-width: 767px) {
  .slogo1{top: sizem(15);left: sizem(16);height: sizem(32);}
  .slogo2{bottom:sizem(5);right: sizem(10);height: sizem(27);}
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