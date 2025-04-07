<template>
  <article class="s1" id="s1">

   
  <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
  <img src="./s1/t1.svg" alt="title" class="t1" data-aos="zoom-in" data-aos-delay="100">
  <img src="./s1/t2.svg" alt="title" class="t2" data-aos="zoom-in" data-aos-delay="300">

  <img src="./s1/leaf.webp" alt="leaf" class="leaf" data-aos="zoom-in" data-aos-delay="0">
  <img src="./s1/tree.webp" alt="tree" class="tree" data-aos="zoom-in" data-aos-delay="0">
  <img src="./s1/main.webp" alt="main" class="main" data-aos="zoom-in" data-aos-delay="100">
  <img src="./s1/cloud.webp" alt="cloud" class="cloud" data-aos="zoom-in" data-aos-delay="200">
  <img src="./s1/city.webp" alt="city" class="city" data-aos="zoom-in" data-aos-delay="300">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}

.s1 {
  @apply relative w-full h-screen;
  min-height: size(1080);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  //background: #E60012;
  background: url("./s1/bg.webp");

  background-size: cover;
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}

  .leaf{
    position: absolute;
    left: size(-20);
    top: size(-20);
    width: size(749);
    z-index: 1;
  }
  .main{
    position: absolute;
    left: size(0);
    top: size(0);
    bottom: size(0);
    width: size(1920);
    top: auto;
    z-index: 1;
  }
  .tree{
    position: absolute;
    left: size(0);
    top: size(0);
    bottom: size(0);
    width: size(1920);
    top: auto;
    z-index: 2;
  }
  .city{
    position: absolute;
    right:size(0);
    bottom: size(0);
    top: auto;
    width: size(1150);
    z-index: 0;
    mix-blend-mode: overlay;
  }

  .cloud{
    position: absolute;
    left: size(0);
    top: size(0);
    width: size(1284);
    z-index: 0;
  }

  .logo{
    position: absolute;
    width: size(337);
    right: size(915);
    top: size(209);
    z-index: 99;
    }

  .t1{
    position: absolute;
    width: size(565);
    right: size(262);
    top: size(170);
    z-index: 99;
    }
  .t2{
    position: absolute;
    width: size(565);
    right: size(262);
    top: size(308);
    z-index: 99;
  }

}
  
 


  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:sizem(667);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(15);
    background: url("./s1/bgm.webp");
    background-size: cover;
    background-position: bottom;


   
  .logo{
    width: sizem(217);
    right: sizem(79);
    top: sizem(294);
    }

  .t1{
    width: sizem(217);
    right: sizem(79);
    top: sizem(230);
    }
  .t2{
    width: sizem(217);
    right: sizem(79);
    top: sizem(173);
  }

  .main{
    width: sizem(514);
    left: sizem(-66);
    bottom: sizem(30);
  }

  .tree{
    width: sizem(921);
    left: sizem(-144);
    bottom: sizem(0);
  }

  .leaf{
    width: sizem(287);
    left: auto;
    right: sizem(-25);
    top: sizem(-18);
    transform:scaleX(-1) !important;
  }

  .city{
    right:sizem(22);
    bottom: sizem(102);
    width: sizem(331);
  }

  .cloud{
    left: sizem(0);
    top: sizem(0);
    width: sizem(375);
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