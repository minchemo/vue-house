<template>
  <article class="s1" id="s1">
<!-- 
<a href="https://lin.ee/jX9Xyhz" target="_blank" v-if="!isMobile">
<img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" /> 
</a> -->
	<!-- 
		<img src="./s1/mo.jpg" class="t0">  -->
		<img src="./s1/pc.jpg" class="t0">
  <div class="bg1 absolute">
		<img src="./s1/bg.webp"></div>
	<div class="txt">
		<img src="./s1/logo.svg" class="logo">
		<img src="./s1/txt.svg" class="t1">
    <div class="t2">繁華轉身 近擁南科</div>
	</div>


  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s1 {
  @apply relative w-full h-screen;
  min-height: size(1080);
  max-height: size(1080);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(40);
  color: #FFF;
  line-height: 1.3;
  font-weight: 700;
  /*
  background: url("./s1/bg.webp");
  background-size: cover;
  */
  .t0{position: absolute;width: 100%;top: 0;left: 0; 
	pointer-events: none;opacity: .3;z-index: 50;}
.lineicon{
  position: fixed;
  width: size(80);
  height: size(80);
  right: size(20);
  bottom: size(120);
  z-index: 99;
}
  .bg1{
    width: 136%;
    top: -6vw;
    left: -43%;
	pointer-events: none;
  //opacity: .5;
  z-index: 1;
  img{width: 100%;}
}
  .txt{
	position: absolute;
	left: 0;right: 0;margin: auto;
	top: calc(50% + #{size(320 - 1080 * .5)});
	text-align: center;
    width:size(700);
	
	.logo{position: relative;display: block;margin: auto;
    width:100%;z-index: 3;}
	.t1{position: relative;display: block;margin:5.5% auto -1.6% auto;
    width:73%;z-index: 3;}
	.t2{position: relative;left: .8%;z-index: 3;
    font-size: size(59);font-weight: 500;letter-spacing: 0.07em;}
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(14);
	background-position: center;
  background-size:170% 100%;


  .bg1{
        width: 300%;
        top: -124vw;
        left: -3%;
	pointer-events: none;
  //opacity: .5;
  z-index: 1;
  img{width: 100%;transform: rotate(90deg)scaleY(-1);
    transform-origin: 0 0;
  }
}


  .txt{left:0;
	top: calc(50% + #{sizem(222 - 667 * .5)});
    width:sizem(295);

	.t2{
    font-size: sizem(25);}

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