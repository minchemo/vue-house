<template>
  <article class="s1" id="s1">
	 <img src="./s1/house.webp" class="house" data-aos="fade-up" data-aos-delay="0"> 
   <div class="style2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1600"><img src="./s1/style2.svg"></div>
	<div class="txt">
		<img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1600"/>
		<img src="./s1/title.svg" class="title1" alt="" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1600"/>
    <img src="./s1/style.svg" class="style" alt="" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1600"/>
	</div>
  <div class="c" data-aos="fade-up" data-aos-delay="0" data-aos-offset="-700" >
    <img src="./s1/c.svg" alt="建築外觀3D示意圖，完工建物以實況為準"/></div>
	

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen ;
  background-image:url("../section/s1/bg.webp");
  background-size: cover;
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(40);
  color: #000;
  line-height: 1.3;
  font-weight: 700;
	overflow: hidden;
  .t0{position: absolute;width: 100%;top: 0;left: 0; pointer-events: none;opacity: .3;}

  .house{
    position: absolute;
    left:calc(75% - #{size(200)});
    bottom:3%;
    height:calc(100% - #{size(160)});
    background: transparent;
    z-index: 99;
  }
  .style2{
    position: absolute;
    height:110%;
    left:calc(75% - #{size(200)});
    bottom:-20%;
    mix-blend-mode: screen;
	img{height: 100%;transform: translateX(-36.7%);}
  }

  .txt{
	position: absolute;
  left: size(250);
	gap:size(120);
	display: flex;
	flex-direction: column;
  }

  .logo{
	width: size(650);
  z-index: 99;
  }
  .title1{
	width: size(650);
  z-index: 99;
  }

  .style{
    position: absolute;
    width: 85%;
    left: size(65);
    top: size(-20);
    mix-blend-mode: screen;
  }
  .c{
    position: absolute;
  width:size(17);
    left:calc(75% + #{size(220)});
    bottom:10%;
  
  }

 
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
	background-image:url("../section/s1/bgm.webp");
	background-size: cover;
    height:calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(812);
    font-size:sizem(14);


  .house{
    position: absolute;
    right:sizem(95);
    bottom:sizem(0);
    width: sizem(180);
	height: auto;
	left: auto;
  }  

  .style2{
    width: sizem(680);
    right:sizem(-155);
    bottom:sizem(-100);
	height: auto;
	left: auto;
	img{height: auto;width: 100%;transform: translateX(-0%);}
  }

	.txt{
	gap:0;
  left: 0;right: 0;margin: auto;
  top: sizem(40);
  top:calc(70% + #{sizem(40-667*.7)});


  .logo{
		width: sizem(218);margin: auto auto 3.5em auto;
	}
	.title1{
	width: sizem(225);
  }

  .style{
    width: 51%;
    left: sizem(96);
    top: sizem(-20);
  }
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
  .c{
    position: absolute;
  width:sizem(10);
  left: auto;
    right:sizem(75);
    bottom:6%;
  img{width: 100%;}
  
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