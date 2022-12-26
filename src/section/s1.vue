<template>
  <article class="s1">
 <!-- 
   <img src="./s1/pc.jpg" class="t0" />
  --> 
   <img src="./s1/bg1.jpg" class="bg1" />
   <img src="./s1/gif.gif" class="bg2" />
   <div class="bg3"></div>
   <img src="./s1/bg0.png" class="bg4" />
   <img src="./s1/bird.png" data-aos="zoom-in" data-aos-delay="0" class="bird" />
    <img src="./s1/logo.svg" data-aos="zoom-in" data-aos-delay="200" class="logo" srcset="" />
    <img src="./s1/text.svg" data-aos="zoom-in" data-aos-delay="400" class="text" srcset="" />
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;z-index: 5;}
.s1 {
  @apply relative w-full h-screen;// overflow-hidden;
  min-height: size(900);
  max-height: size(1080);
@keyframes wave{
  to {transform:translateX(0%);}
}
    .bg1{
      position: absolute;
      top: calc(50% + (0 - 1080 * .5) * 100vw / 1920);
      left: 0;
      width: size(1920);
    }
    .bg2{
      
    position: absolute;
    width: 150%;
    height: size(250);
      top: calc(50% + (870 - 1080 * .5) * 100vw / 1920);
  //  top: calc(50% + 9.53125vw);
    opacity: .5;
    left: 0;
    mix-blend-mode: soft-light;
    filter: blur(0.06vw);
    }
    .bg3{
      position: absolute;
      top: calc(50% + (0 - 1080 * .5) * 100vw / 1920);
      left: 0;
      width: 100%;
      height: size(870);
      background: linear-gradient(180deg, #CCCECD 0%, #CCCECD 31.77%, #C0C2BF 76.04%, #C0C2BF 90.21%, rgba(213, 215, 214, 0) 100%);
    }
    .bg4{
      position: absolute;
      left: size(140);
      top: calc(50% + (382 - 1080 * .5) * 100vw / 1920);
      width:  size(830);opacity: 1;
    }
    .bird{
      position: absolute;
      top: calc(50% + (178 - 1080 * .5) * 100vw / 1920);
      left: size(350);
      width:  size(346);opacity: 1;
    }

    .logo{
      position: absolute;
      top: calc(50% + (148 - 1080 * .5) * 100vw / 1920);
      left:size(948);
      width:size(187);
    }
    .text{
      position: absolute;
      top: calc(50% + (148 - 1080 * .5) * 100vw / 1920);
      left:size(1232);
      width:size(497);
    }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height: 100vh;
    min-height: size-m(667);
    max-height: size-m(750);

  .wave{
.shadow1{
    bottom:  size-m(-140);
  img{height: size-m(182);}
}

.shadow2{
    bottom:  size-m(28);
img{height: size-m(75);}
}

.shadow3{
    bottom:  size-m(23);
img{height: size-m(75);}
}
.l1{
    bottom:  size-m(-19);
img{height: size-m(75);}
}
.l2{
    bottom:  size-m(33);
img{height: size-m(75);}
}
.l3{
    bottom:  size-m(-47);
img{height: size-m(109);}
}

.light1{
  width:size-m(1071);
bottom:size-m(-47);}
}

  .txt{
    top:calc(50% + (119 - 667 * .5) * 100vw / 375);
    .logo{
      width:size-m(166);
    }
  }
  .img{
    bottom: size-m(30);
    img{
      width:size-m(204);
      margin: 0 0 size-m(-9);}
    .light{
      width:size-m(816);
      left: calc(50% - #{size-m(816 * .5)});
      height:size-m(42);}
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
