<template>
  <article class="s1" id="s1">
	<!--  

   <img src="./s1/mo.jpg" class="t0">

   <img src="./s1/bg.jpg" class="bgh" v-if="!$isMobile()">
       <img src="./s1/bgm.jpg" class="bgh" v-else>
       <img src="@/section/s1/1.gif" class="gif">
       <img src="./s1/txt.svg" class="txt1" v-if="!$isMobile()" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="0">
       <img src="./s1/txtm.svg" class="txt1" v-else data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="0">   -->

       <div class="bg"><img src="./s1/bg.svg" alt="bg"></div>
       <img src="./s1/img.png" class="img absolute" alt="img" data-aos="zoom-in" data-aos-delay="0">
       <img src="./s1/txt.svg" class="txt absolute" alt="txt" data-aos="zoom-in" data-aos-delay="200">
       <img src="./s1/reser.svg" class="reser absolute" alt="reser" data-aos="zoom-in" data-aos-delay="400">
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
  max-height: size(900);
  font-size:size(36);
.t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
.bg{position: absolute;width: 100%;height: 100%;
img{width: 100%;height: 100%;}
&::after{content: "";position: absolute;width: 100%;height: 100%;top: 0;left: 0;background: url("./s1/bg.webp") fixed;display: block;
background-size: auto size(40);
mix-blend-mode: multiply;}
}
.img{top:size(146);left:size(242);width:size(403);}
.txt{top:size(276);right:size(260);width:size(799);}
.reser{top:size(590);right:size(430);width:size(458);}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


 // .gif{width:100%;height:70%;left: 0;}

  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(604);
    font-size:sizem(15);
.bg{
&::after{
background-size: auto sizem(28);}
}
.img{top:sizem(76);left:sizem(86);width:sizem(200);}
.txt{top:sizem(415);right:sizem(47);width:sizem(280);}
.reser{top:sizem(535);right:sizem(76);width:sizem(218);}
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