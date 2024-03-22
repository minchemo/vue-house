<template>
  <article class="s1" id="s1">
	<!-- 
		<img src="./s1/pc.jpg" class="t0">
		<img src="./s1/mo.jpg" class="t0">  -->
	<div class="txt">
		<img src="./s1/bg3.webp" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="2000" class="eggbg" alt="蛋黃"><img src="./s1/logo.svg" alt="logo" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" class="logo"><img src="./s1/txt.svg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" alt="txt" class="txt1">
	</div>
	<div class="img"><img src="./s1/b.webp" alt="多會微笑!"><img src="./s1/img.webp" alt="李多慧"><img src="./s1/mark.svg" alt="李多慧"></div>
	<img src="./s1/oo.svg" alt="oo" class="oo1">
	<div class="oo2"><img src="./s1/oo.svg" alt="oo"></div>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s1 {
  @apply relative w-full h-screen;
  min-height: size(950);
  max-height: size(1140);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(40);
  color: #FFF;
  line-height: 1.3;
  font-weight: 700;
  background: url("./s1/bg.webp");
  background-size: cover;
  .t0{position: absolute;width: 100%;top: 0;left: 0; 
	pointer-events: none;opacity: .3;z-index: 50;}

  .img{
	position: absolute;
	top: size(190);
	left:size(1343);
	//height: size(992);
	height: 87%;
	img{position: relative;
	&:first-child{position: absolute;
		transform: rotate(-3deg);
		transform-origin: 90% 150%;
		animation: an 2s ease-in-out infinite alternate;
    top: -12.5%;
    width: 70%;
    left: -20%;}
	&:last-child{position: absolute;
    top: 29%;
    width: 46%;
    left: 70%;}
	&:nth-child(2){height:100%;
		transform: rotate(1deg);
		transform-origin: 30% 90%;
		animation: an 2s ease-in-out infinite alternate-reverse;}
	}


  }
  .txt{
	position: absolute;
	left: 0;right: 0;margin: auto;top:size(357);
	top: calc(50% + #{size(357 - 1140 * .5)});
	text-align: center;
    width:size(726);
	
	.eggbg{position: absolute;
    top: -44%;
    display: block;
    width: 196%;
    left: -48%;}
	.logo{position: relative;display: block;margin: auto;
    width:100%;z-index: 3;}
	.txt1{position: relative;display: block;margin:4% auto auto auto;
    width:99.2%;left: 1.8%;z-index: 3;}
  }
  .oo1{position: absolute;top:size(225);height:size(50);left:size(260);
	top: calc(50% + #{size(225 - 1140 * .5)});
		transform: translateX(20%);
		animation: an 3s ease-in-out infinite alternate;}
  .oo2{position: absolute;top: size(970);height:size(50);right:size(-100);
	top: calc(50% + #{size(970 - 1140 * .5)});
		transform: translateX(-15%);
		animation: an 2s ease-in-out infinite alternate-reverse;
img{height: 100%;transform: scaleX(-1);}}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(821);
    font-size:sizem(14);
	background-position: center;
  background-size:170% 100%;

	.img{
	position: absolute;
	top: sizem(135);
	top: calc(35% + #{sizem(135 - 604 * .35)});
	left:sizem(232);
	min-height: sizem(430);
	height:60%;
	img{
	&:first-child{
	top: -15%;
    width: 79%;
    left: -28%;}
	&:last-child{
    top: 82%;
    width: 61%;
    left: -34%;}
}
}
  .txt{top:sizem(246);left:sizem(-90);
	top: calc(50% + #{sizem(246 - 604 * .5)});
    width:sizem(224);
	.eggbg{
    top: -49%;
    width: 163%;
    left: -32%;}

  }
  .oo1{top:sizem(140);height:sizem(20);left:sizem(-20);
	top: calc(50% + #{sizem(140 - 604 * .5)});}
  .oo2{top:sizem(490);height:sizem(20);right:sizem(-65);
	top: calc(50% + #{sizem(490 - 604 * .5)});}

    
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