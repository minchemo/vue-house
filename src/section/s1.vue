<template>
  <article class="s1" id="s1">
	<!-- <img src="./s1/mo.jpg" class="t0">  -->
	<img src="./s1/1.png" class="img1" alt="" />
	<img src="./s1/2.png" class="img2" alt="" />
	<img src="./s1/3.png" class="img3" alt="" />
	
	<img src="./s1/logo.png" class="logo" alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1600"/>
	<div class="t1" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">十字軸心｜20-28坪</div>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
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
  .t0{position: absolute;width: 100%;top: 0;left: 0; pointer-events: none;opacity: .3;}

  .logo{
	position: absolute;
	top:size(280);
	left:size(675);
	top:calc(50% + #{size(280-(1080*.5))});
	width: size(556);
  }
  .t1{
	position: absolute;
	left:size(710);
	top:size(820);
	font-weight: 500;
	letter-spacing: .3em;
  }
@keyframes an1 {
	to{transform: scale(1);}
}

  .img1{
	position: absolute;
	top:size(-85);
	left:size(-10);
	width: size(521);
	transform: skewX(-10deg);
	transform-origin: 0 0;
	animation: an1 7s ease-in-out alternate infinite;
  }
  .img2{
	position: absolute;
	bottom:size(230);
	right:size(0);
	width: size(388);
  }
  .img3{
	position: absolute;
	bottom:size(-100);
	right:size(-134);
	width: size(737);
	transform: skewY(3deg);
	transform-origin: 100% 10%;
	animation: an1 3s ease-in-out alternate infinite;
  }
 
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    font-size:sizem(14);

	.logo{
		position: absolute;
		top:sizem(604);
		left:auto;right: auto;margin: auto;
		top:calc(50% + #{sizem(130-(604*.5))});
		width: sizem(271);
	}

	.t1{
	left:auto;right: auto;margin: auto;
	top:sizem(390);
	font-weight: 500;
	top:calc(50% + #{sizem(400-(604*.5))});
	letter-spacing: .3em;
	font-size: sizem(20);
  }
  .img1{
	top:sizem(-30);
	left:sizem(-45);
	width: sizem(250);
  }
  .img2{
	bottom:sizem(0);
	right:sizem(0);
	width: sizem(110);
  }
  .img3{
	bottom:sizem(-100);
	right:sizem(-60);
	width: sizem(240);
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