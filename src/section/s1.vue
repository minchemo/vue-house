<template>
  <article class="s1" id="s1">
	<!--  

   <img src="./s1/mo.jpg" class="t0">

   -->
   <img src="./s1/bg.webp" class="bgh" v-if="!$isMobile()">
       <img src="./s1/bgm.webp" class="bgh" v-else>	<!--  
       <img src="@/section/s1/1.gif" class="gif">
       <img src="./s1/txt.svg" class="txt1" v-if="!$isMobile()" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="0">
       <img src="./s1/txtm.svg" class="txt1" v-else data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="0"> -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
/*
@keyframes op {
  50% {
     opacity: 0;
  }
}*/
 .bgh{position: absolute;width: 100%;height:100%;top:0;left: 0;object-fit: cover;
}
 .gif{position: absolute;width:100%;height:70%;bottom:0;left: 0;
mix-blend-mode: overlay;opacity: .8;
}
.s1 {
  @apply relative w-full h-screen;
  min-height: size(1000);
  max-height: size(1080);
  font-size:size(36);
  //  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
  .txt1{position: absolute;
    width: size(1310);left:0;right: 0;margin: auto;
    top: size(184);
    top:calc(50% + #{size(184 - 1080*.5)});
  }

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


 .gif{width:100%;height:70%;left: 0;}

  .s1 {
    min-height: sizem(667);
    max-height: sizem(812);
    font-size:sizem(15);
  .txt1{
    width: sizem(328);
    top: sizem(77);
    top:calc(50% + #{sizem(77-667*.5)});
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