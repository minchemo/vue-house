<template>
  <article class="s1" id="s1">
	<!-- 
  <img src="./s1/pc.jpg" class="t0">
  <img src="./s1/mo.jpg" class="t0">
    -->
  <img src="./s1/wave.gif" class="wave absolute" alt="wave">
  <div class="t1 absolute" data-aos="fade-up" data-aos-delay="0"><b>THE FIRST,</b><br>THE INTERNATIONAL</div>
  <img src="./s1/t2m.svg" class="t2 absolute" alt="logo" data-aos="fade-up" data-aos-delay="200" v-if="isMobile">
  <img src="./s1/t2.svg" class="t2 absolute" alt="logo" data-aos="fade-up" data-aos-delay="200" v-else>
  <img src="./s1/icon.svg" class="icon absolute" alt="icon" data-aos="fade-up" data-aos-delay="400">


  	<!--
  <img src="./s1/logoicon.svg" class="logoicon" alt="" data-aos="zoom-in" data-aos-delay="400">
	<div class="txt">
		<img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1600"/>
		<img src="./s1/title.svg" class="title" alt="" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1600"/>
	</div>  -->
	

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen ;
  background-image:url("../section/s1/bg.jpg");
  background-size: cover;
  min-height: size(976);
  max-height: size(976);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(40);
  color: #FFF;
  line-height: 1.3;
  font-weight: 700;
  padding:0;
  margin: size(60) 0 0 0;
  .t0{position: absolute;width: 100%;top:calc( -2.3vw - #{size(60)});left: 0;
  pointer-events: none;opacity: .3;z-index: 10;}
  .wave{bottom: 0;
    left: 0;
    width: 100%;height:size(205);mix-blend-mode:overlay;opacity: .6;
  }

  .t1{
   // font-family: Inter;
    left:size(314);
    top:size(315);
    font-weight: 200;
    letter-spacing: .03em;
    b{
    font-weight: 600;
    letter-spacing: 0em;}
  }
  .t2{
    left:size(580);
    top:size(127);
    width: size(1023);
  }
  .icon{
    right:size(40);
    bottom:size(45);
    width: size(107);
  }


 
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
	background-image:url("../section/s1/bgm.jpg");
	background-size: cover;
    height:calc(100vh - 63px);
    min-height: sizem(578);
    max-height: sizem(578);
    font-size:sizem(18);
  margin: sizem(60) 0 0 0;
  .wave{height:sizem(62);
  }

  .t0{top:sizem(-90);}
  .t1{
    left:sizem(46);
    top:sizem(37);
  }
  .t2{
    left:sizem(46);
    top:sizem(106);
    width: sizem(273);
  }
  .icon{
    right:sizem(12);
    bottom:sizem(12);
    width: sizem(70);
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