<template>
  <article class="s1" id="s1">
	<!-- <img src="./s1/mo.jpg" class="t0">  -->
	<img src="./s1/1.svg" class="img1" alt="" />
	<img src="./s1/2.webp" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1600" class="img2" alt="" />
	<img src="./s1/mark.svg" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1600"  class="mark" alt="" />
	<img src="./s1/smile.svg" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1600"  class="smile" alt="" />
	
	<img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1600"/>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(990);
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
	top:size(320);
	left:size(300);
	top:calc(50% + #{size(270-(900*.5))});
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
	top:size(35);
	top:calc(50% + #{size(25-(900*.5))});
	left:size(180);
	width: size(821);
	transform: skew(-5deg, 5deg);
	transform-origin: 0 0;
	animation: an1 7s ease-in-out alternate infinite;
  }
  .img2{
	position: absolute;
	bottom:size(-20);
	right:size(180);
	width: size(550);
  }
  .mark{
	position: absolute;
	width: size(250);
	bottom:size(130);
	right:size(650);
  }
  .smile{
	position: absolute;
	width: size(250);
	top:size(50);
	right:size(510);
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

	.logo{
		position: absolute;
		top:sizem(604);
		left:auto;right: auto;margin: auto;
		top:calc(50% + #{sizem(130-(760*.5))});
		width: sizem(250);
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
	top:sizem(15);
	left:sizem(25);
	width: sizem(330);
  }
  .img2{
	bottom:sizem(-30);
	right:sizem(65);
	width: sizem(250);
  }
  .smile{
	top:sizem(350);
	top:calc(50% + #{sizem(130-(350*.5))});
	right:auto;
	left:sizem(30);
	width: sizem(120);
  }
  .mark{
	bottom:sizem(50);
	right:auto;
	right:sizem(20);
	width: sizem(120);
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