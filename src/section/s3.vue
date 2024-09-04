<template>
  <article class="s3" id="s3">
    <img src="./s1/appearance.png" class="appearance absolute" data-aos="fade-up" data-aos-delay="0">
    <img src="./s1/t2.svg" class="t1 absolute" data-aos="zoom-in" data-aos-delay="0">
	<!-- 
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
.s3 {
  @apply relative w-full h-screen;
  height: size(690);
  /*
  min-height: size(940);
  max-height: size(940);*/
  font-size:size(36);
  
  background: #8fc31f;

.appearance{top:size(57);right:size(297);width:size(760);
  filter: brightness(0) invert(1);}
.img5{top:size(325);left:size(-5);width:size(269);}
.img6{top:size(535);right:size(920);width:size(579);transform: translateX(10%);animation: ann 5s ease-in-out alternate infinite;}
.tree3{top:size(410);left:size(440);width:size(95);} 
.tree2{top:size(360);left:size(512);width:size(130);}
.tree1{top:size(385);right:size(202);width:size(158);}
.img7{top:size(335);right:size(0);width:size(1600);}
.img1{top:size(515);right:size(-1233);width:size(1700);}
.img8{top:size(578);right:size(-232);width:size(915);transform: translateX(10%);animation: ann 5s 2s ease-in-out alternate infinite;}
.img2{top:size(395);left:size(-690);width:size(914);transform: translateX(10%);animation: ann 5s ease-in-out alternate infinite;}
.t1{top:size(60);left:size(320);width:size(455);}

}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s3 {
    height: sizem(375);
    font-size:sizem(15);
    .appearance{top:sizem(12);right:0;left: 0;
      margin: auto;width:sizem(205);}
      .img6{top:sizem(135);right:sizem(170);width:sizem(180);}
.tree3{top:sizem(106);left:sizem(50);width:sizem(24);}
.tree2{top:sizem(95);left:sizem(68);width:sizem(30);}
.tree1{top:sizem(78);right:sizem(67);width:sizem(55);}
.img7{top:sizem(90);right:sizem(-10);width:sizem(385);}
.img1{top:sizem(120);right:sizem(-460);width:sizem(620);}
.img8{top:sizem(150);right:sizem(-60);width:sizem(210);}
.t1{top:sizem(198);right:0;left: 0;
  margin: auto;width:sizem(230);}
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