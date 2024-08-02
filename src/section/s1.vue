<template>
  <article class="s1" id="s1">
    <div data-aos="fade-left">
    <img src="./s1/tree.png" class="tree2 absolute" v-if="!$isMobile()">
    <img src="./s1/img2.webp" class="img2 absolute">
    <img src="./s1/img5.webp" class="img6 absolute" v-if="$isMobile()">
    <img src="./s1/img3.webp" class="img3 absolute">

    </div>
    <div data-aos="fade-right">
    <img src="./s1/img3.webp" class="img4 absolute">
    <img src="./s1/img4.webp" class="img5 absolute" v-if="$isMobile()">
    <img src="./s1/tree.png" class="tree1 absolute">
    <img src="./s1/img1.webp" class="img1 absolute">
    </div>
    <img src="./s1/txtm.svg" class="t1 absolute" data-aos="fade-down" data-aos-delay="0" v-if="$isMobile()">
    <img src="./s1/txt.svg" class="t1 absolute" data-aos="fade-down" data-aos-delay="0" v-else>
    <img src="./s1/logo.svg" class="logo absolute" data-aos="zoom-in" data-aos-delay="400">
    
	<!--  
    <img src="./s1/mo.jpg" class="t0">
    <img src="./s1/02.jpg" class="t0">
       <div class="bg"><img src="./s1/bg.svg" alt="bg"></div>
       <img src="./s1/img.webp" class="img absolute" alt="img" data-aos="zoom-in" data-aos-delay="0">
       <img src="./s1/txt.svg" class="txt absolute" alt="txt" data-aos="zoom-in" data-aos-delay="200">
   -->


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@keyframes ann {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  @apply relative w-full h-screen;
  height: size(940);
  /*
  min-height: size(940);
  max-height: size(940);*/
  font-size:size(36);

.t0{position: absolute;width: 100%;top:0;left: 0; pointer-events: none;z-index: 10;opacity:.5;mix-blend-mode: multiply;
}
.t1{top:size(190);left:0;right: 0;margin: auto;width:size(1014);}
.logo{top:size(320);left:0;right: 0;margin: auto;width:size(596);}
.img1{top:size(710);left:size(-540);width:size(1760);transform: translateX(4%);animation: ann 10s ease-in-out alternate infinite;}
.img2{top:size(574);right:size(-172);width:size(1050);transform: translateX(-2%);animation: ann 10s ease-in-out alternate-reverse infinite;}
.img3{top:size(695);right:size(-830);width:size(1327);transform: translateX(5%);animation: ann 5s ease-in-out alternate infinite;}
.img4{top:size(550);left:size(-860);width:size(1327);transform: translateX(5%);animation: ann 5s ease-in-out alternate infinite;}
.tree1{top:size(567);left:size(260);width:size(196);}
.tree2{top:size(535);right:size(275);width:size(95);}

}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height: sizem(570);
   /* min-height: sizem(604);
    max-height: sizem(700);*/
    font-size:sizem(15);
    .t1{top:sizem(175);width:sizem(59);}
    .logo{top:sizem(58);width:sizem(191);}
    .img1{top:sizem(500);left:sizem(-245);width:sizem(610);}
    .img2{top:sizem(455);right:sizem(-125);width:sizem(370);}
    .img3{top:sizem(475);right:sizem(-620);width:sizem(850);}
    .img4{top:sizem(405);left:sizem(-350);width:sizem(450);}
    .img5{top:sizem(380);left:sizem(-5);width:sizem(130);transform: translateX(-10%);animation: ann 5s ease-in-out alternate infinite;}
    .img6{top:sizem(480);right:sizem(135);width:sizem(130);transform: translateX(10%);animation: ann 7s ease-in-out alternate infinite;}
.tree1{top:sizem(457);left:sizem(57);width:sizem(65);}
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