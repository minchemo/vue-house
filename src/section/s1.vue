<template>
  <article class="s1" id="s1">
	<!--  
   <img src="./s1/m.jpg" class="t0">
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
.t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
.bg{position: absolute;width: 100%;height: 100%;
img{width: 100%;height: 100%;}
&::after{content: "";position: absolute;width: 100%;height: 100%;top: 0;left: 0;background: url("./s1/bg.webp") fixed;display: block;
background-size: auto size(40);
mix-blend-mode: multiply;}
}
.img{top:size(146);left:size(242);width:size(410);top: calc(50% + #{size(146 - 900 * .5)});}
.txt{top:size(276);right:size(290);width:size(740);top: calc(50% + #{size(276 - 900 * .5)});}
.reser{top:size(590);right:size(430);width:size(470);top: calc(50% + #{size(590 - 900 * .5)});
.ann{
   transform: translateX(-2.8%);
   animation:ann 1s ease-in-out alternate infinite ;
   animation-play-state:paused;
}
&:hover{
  .ann{
    animation-play-state:running;
}
}
}
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
    max-height: sizem(750);
    font-size:sizem(15);
.bg{
&::after{
background-size: auto sizem(28);}
}
.img{left:sizem(79);width:sizem(215);top: calc(50% + #{sizem(73 - 604 * .5)});}
.txt{right:sizem(67);width:sizem(245);top: calc(50% + #{sizem(419 - 604 * .5)});}
.reser{top:sizem(535);right:sizem(76);width:sizem(218);top: calc(50% + #{sizem(535 - 604 * .5)});

.ann{
  animation-play-state:running;
}
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