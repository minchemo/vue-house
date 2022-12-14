<template>
  <article class="s1">
 <!-- 
   <img src="./s1/mo.jpg" class="t0" />
  --> 

   <div class="wave">
    <div class="shadow1"><img src="./s1/1.png" srcset="" /><img src="./s1/1.png" srcset="" />
    </div>
    <div class="shadow2"><img src="./s1/2.png" srcset="" /><img src="./s1/2.png" srcset="" /></div>
    <div class="shadow3"><img src="./s1/2.png" srcset="" /><img src="./s1/2.png" srcset="" /></div>
    <div class="l1"><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /></div>
    <div class="l2"><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /><img src="./s1/l1.svg" srcset="" /></div>
    <div class="l3"><img src="./s1/l2.svg" srcset="" /><img src="./s1/l2.svg" srcset="" /><img src="./s1/l2.svg" srcset="" /></div>
    <img src="./s1/light.png" class="light1" srcset="" />
  </div>

  <div class="img" data-aos="zoom-in" data-aos-duration="1000">
    <img src="./s1/img.svg" srcset="" data-aos="zoom-in" data-aos-duration="800" />
    <div class="light" data-aos="zoom-in" data-aos-duration="1500" ></div></div>

    <div class="txt" data-aos="zoom-in">
    <img src="./s1/logo.svg" v-if="!$isMobile()" class="logo" srcset="" />
    <img src="./s1/logo_m.svg" v-else class="logo" srcset="" />
    </div>
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;z-index: 5;}
.s1 {
  @apply relative w-full h-screen;// overflow-hidden;
  min-height: size(900);
  max-height: size(1080);
  $mar:size(35);
  &::before{content: "";background: #E95513;position: absolute;
  top:$mar;bottom:$mar;left:$mar;right:$mar;
}
  .wave{
    position: absolute;bottom:$mar;left:$mar;right:$mar;top:$mar;
    overflow: hidden;
.shadow1{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(-300);
    transform: rotate(5deg);

  img{height: size(390);
  animation: wave 9s linear infinite;transform:translateX(-100%);}
}

.shadow2{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(60);
    transform: rotate(-3deg);
img{height: size(161);
  animation: wave 7s linear infinite reverse;transform:translateX(-100%);}
}

.shadow3{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(50);
    transform: rotate(3deg);
img{height: size(161);
  animation: wave 5s linear infinite;transform:translateX(-100%);}
}
.l1{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(-40);
    transform: rotate(3deg);
img{height: size(161);
  animation: wave 6s linear infinite reverse;transform:translateX(-100%);}
}
.l2{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(70);
    transform: rotate(-3deg);
img{height: size(161);
  animation: wave 8s linear infinite;transform:translateX(-100%);}
}
.l3{
  white-space: nowrap;
    position: absolute;
    left: 0;
    bottom:  size(-100);
    transform: rotate(1deg);
img{height: size(233);
  animation: wave 10s linear infinite reverse;transform:translateX(-100%);}
}
@keyframes wave{
  to {transform:translateX(0%);}
}
.light1{position: absolute;
  width:size(2296);opacity: .7;
left: size(0);
bottom:size(-100);}
}
  .txt{
    text-align: center;
    top:calc(50% + (251 - 540) * 100vw / 1920);
    position: relative;
    .logo{
      width:size(1012);
    position: relative;z-index: 2;
    }

  }
  .img{
    position: absolute;left: 0;width: 100%;bottom: size(75);
    text-align: center;
    &::before{content: "";position: absolute;z-index: 1;width:size(900);
    height:size(650);display: block;bottom:size(-40);
    left:0;right: 0;margin: auto;
    background: radial-gradient(ellipse at center, rgba(233,85,19,1) 0%,rgba(233,85,19,0) 90%);
  }
    img{
      width:size(436);
    position: relative;
      margin: 0 0 size(-25);z-index: 2;}
    .light{
      width:size(1747);
    position: relative;margin: auto;
      height:size(90);z-index: 1;
background: radial-gradient(50.01% 50.51% at 50.01% 42.02%, #FFF4E2 0%, rgba(255, 240, 214, 0.9) 6%, rgba(255, 233, 189, 0.66) 21%, rgba(255, 227, 167, 0.46) 36%, rgba(255, 222, 149, 0.29) 50%, rgba(255, 218, 135, 0.17) 64%, rgba(255, 216, 125, 0.07) 77%, rgba(255, 214, 119, 0.02) 89%, rgba(255, 214, 117, 0) 100%);}

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
  $mar: size-m(10);
  &::before{top:$mar;bottom:$mar;left:$mar;right:$mar;}

  .wave{
    bottom:$mar;left:$mar;right:$mar;top:$mar;
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
