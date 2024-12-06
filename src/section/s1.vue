<template>
  <article class="s1" id="s1">
<!-- 
<a href="https://lin.ee/jX9Xyhz" target="_blank" v-if="!isMobile">
<img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" /> 
</a>  -->
	<!-- 
		<img src="./s1/pc.jpg" class="t0"> 
		<img src="./s1/mo.jpg" class="t0"> -->
    
    
    
    <!-- 
	<div class="txt">
		<img src="./s1/bg3.webp" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="2000" class="eggbg" alt="蛋黃"><img src="./s1/logo.svg" alt="logo" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" class="logo"><img src="./s1/txt.svg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" alt="txt" class="txt1">
	</div>
	<div class="img"><img src="./s1/b.webp" alt="多會微笑!"><img src="./s1/img.webp" alt="李多慧"><img src="./s1/mark.svg" alt="李多慧"></div>
	<img src="./s1/oo.svg" alt="oo" class="oo1">
	<div class="oo2"><img src="./s1/oo.svg" alt="oo"></div> -->
  <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
  <div class="t1 font-['Noto_Serif_TC',serif]" v-if="isMobile" data-aos="zoom-in" data-aos-delay="200">2500坪鶯歌地王<br>25~34坪市心地標</div>
  <div class="t1 font-['Noto_Serif_TC',serif]" v-else  data-aos="zoom-in" data-aos-delay="200">2500坪鶯歌地王｜25~34坪市心地標</div>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s1 {
  @apply relative w-full h-screen;
 // min-height: size(950);
 // max-height: size(1140);
 // height: 100vh;
 height: sizem(667);
  min-height: sizem(604);
  max-height: sizem(750);
  height: calc(100vh - 63px);
  font-size:sizem(33);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: #FFF;
  line-height: 1.7;
  font-weight: 700;

  @media screen and (min-width: 768px) {
 // height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  font-size:size(53);
  }

  .t0{position: absolute;width: 100%;top: 0;left: 0; 
	pointer-events: none;opacity: .3;z-index: 50;}
  .logo{width:sizem(246);
  @media screen and (min-width: 768px) {
    width:size(424);
  }
}
  .t1{margin-top: .8em;text-align: center;
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