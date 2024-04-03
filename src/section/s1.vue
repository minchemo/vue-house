<template>
  <article class="s1" id="s1">
	 <img src="./s1/house.webp" class="house"> 
   <img src="./s1/style2.svg" class="style2">   
	<div class="txt">
		<img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1600"/>
		<img src="./s1/title.svg" class="title" alt="" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1600"/>
    <img src="./s1/style.svg" class="style" alt="" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1600"/>
	</div>
  <div class="c" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1600">
    <img src="./s1/c.svg" alt="建築外觀3D示意圖，完工建物以實況為準"/></div>
	

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen ;
  background-image:url("../section/s1/bg.webp");
  background-size: cover;
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
  .t0{position: absolute;width: 100%;top: 0;left: 0; pointer-events: none;opacity: .3;}

  .house{
    position: absolute;
    right:size(210);
    bottom:size(30);
    width: size(520);
    background: transparent;
    z-index: 99;
  }
  .style2{
    position: absolute;
    width: size(1900);
    right:size(-480);
    bottom:size(-273);
    mix-blend-mode: screen;
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
  .title{
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
    right:size(180);
    bottom:size(80);
  
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
    max-height: sizem(667);
    font-size:sizem(14);


  .house{
    position: absolute;
    right:sizem(95);
    bottom:sizem(10);
    width: sizem(180);
  }  

  .style2{
    width: sizem(850);
    right:sizem(-235);
    bottom:sizem(-121);
  }

	.txt{
	gap:sizem(40);
  left: sizem(48);
  top: sizem(20);


  .logo{
		width: sizem(280);
	}
	.title{
	width: sizem(280);
  }

  .style{
    width: 85%;
    left: sizem(28);
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