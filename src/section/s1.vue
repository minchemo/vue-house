<template>
  <article class="s1" id="s1">
    <img src="./s1/pc.jpg" class="t0">
    <img src="./s1/img1.webp" class="img1 absolute">
    <img src="./s1/appearance.png" class="appearance absolute">
    <img src="./s1/img2.webp" class="img2 absolute">
    <div class="txt absolute">
      <img src="./s1/logo.svg" class="logo">
      <img src="./s1/t1m.svg" class="t1" v-if="$isMobile()">
      <img src="./s1/t1.svg" class="t1" v-else>
    </div>
    
	<!--  
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
  height: size(1080);
  /*
  min-height: size(940);
  max-height: size(940);*/
  font-size:size(36);

.t0{position: absolute;width: 78%;top:0px;left: 11%; pointer-events: none;z-index: 10;opacity:.3;//mix-blend-mode: multiply;
}

.txt{top:size(295);left:0;right: 0;margin: auto;width:100%;display: flex; justify-content:center;align-items:center;

  .t1{width:size(530);margin: size(60) 0 0 size(50);}
.logo{width:size(330);margin: 0;}
}
.img1{top: 0;right: 0;transform:skewY(3deg);transform-origin:100% 0;animation: ann 10s ease-in-out alternate-reverse infinite;}
.img2{bottom: 0;right: 0;width: 105%;transform:skewX(-3deg);transform-origin:50% 100%;animation: ann 10s ease-in-out alternate-reverse infinite;}
.appearance{bottom: size(170);right: 0;left: 0;margin: auto;width:size(500);}
/*
.t1{top:size(190);left:0;right: 0;margin: auto;width:size(1014);}
.logo{top:size(320);left:0;right: 0;margin: auto;width:size(596);}*/
/*
.img1{top:size(710);left:size(-540);width:size(1760);transform: translateX(4%);animation: ann 10s ease-in-out alternate infinite;}
.img2{top:size(574);right:size(-172);width:size(1050);transform: translateX(-2%);animation: ann 10s ease-in-out alternate-reverse infinite;}
.img3{top:size(695);right:size(-830);width:size(1327);transform: translateX(5%);animation: ann 5s ease-in-out alternate infinite;}
.img4{top:size(550);left:size(-860);width:size(1327);transform: translateX(5%);animation: ann 5s ease-in-out alternate infinite;}
.tree1{top:size(567);left:size(260);width:size(196);}
.tree2{top:size(535);right:size(275);width:size(95);}
*/
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