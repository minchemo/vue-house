<template>
  <article class="s8" id="s8">
	<div class="txt">
		<img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1600"/>
    <img src="./s1/style.svg" class="style" alt="" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1600"/>
    <div class="title0" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1600"><span class="title1">鳳山真地王．傳家最上品</span>
      <span class="title2">3-4房</span><span class="title3">即將公開</span>
    <!-- <img src="./s1/slogom.svg" class="slogo" v-if="isMobile" alt=""/>
    <img src="./s1/slogo.svg" class="slogo" v-else alt=""/> --></div>
    <img src="./s8/slogo1.svg" class="slogo1" alt=""/>
    <img src="./s8/slogo2.svg" class="slogo2" alt=""/>
	</div>

	
    <div class="txt2">CROWN THE CITY</div>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s8 {
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
  font-size:size(54);
  color: #000;
  line-height: 1.7;
  font-weight: 700;

  .txt{
	position: absolute;
  left:0;right: 0;width:size(800);
  top: size(130);
  margin: auto;
	display: flex;
	flex-direction: column;
  font-weight: 700;
  text-shadow:none;
  }

  .logo{
	width: size(650);
  z-index: 99;
  margin: 0 auto 1.8em;
  }
  .title0{
    position: relative;
  z-index: 99;text-align: center;
  }
  .title1{
    display: block;
    padding:0.2em 0;letter-spacing: 0.05em;
  }
  .title2{
  &::after{content: "";position: relative;height: 1px;background: #000;width: 2em;display: inline-block;vertical-align: middle;margin: 0 0.2em;top: -.1em;}
  }
  .slogo{
    height:1.05em;margin: 0 0 0 .5em;vertical-align: middle;
  }
  .slogo1,.slogo2{height:size(50) ;}
  .slogo1{position: absolute;  
  top: 0;left: 0;transform: translate(-280%,-200%);}
  .slogo2{position: absolute;right: 0;bottom: 0;transform: translate(280%,200%);}

  .style{
    position: absolute;
    width: 68%;
    left:size(145);
    top: size(-30);
    mix-blend-mode: screen;
  }

  .txt2{
  @apply font-[Cardo] ;

    background: #000;
    width: 100%;position: absolute;
    bottom: 0;left: 0;
text-align: center;
padding:3em 0;color: #9B7C52;
  font-size:size(26);
    letter-spacing: 3em;text-indent: 3em;
    font-weight: 400;
  }

 
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s8 {
	background-image:url("../section/s1/bgm.webp");
  background-position: center;
	background-size: cover;
    height: sizem(470);
    min-height: sizem(470);
    max-height: sizem(470);
    font-size:sizem(22);



	.txt{
	gap:0;
  left: sizem(0);
  top: sizem(85);width: sizem(260);

  .logo{
		width: sizem(218);
	}
  .title0{
    position: relative;
  z-index: 99;text-align: center;letter-spacing: 0.05em;
  }
	.title1{
	//width: sizem(280);
    font-size:sizem(19);letter-spacing: 0.0em;
  }
  .slogo{
    height:1.05em;margin: 0 auto 0 auto;
  }
  .slogo1,.slogo2{height:sizem(25) ;}
  .slogo1{transform: translate(-55%,-300%);}
  .slogo2{transform: translate(55%,300%);}

  .style{
    width: 72%;
    left: sizem(42);
    top: sizem(-15);
  }
  }


.txt2{
padding:1.5em 0;
font-size:sizem(15);
  letter-spacing:.6em;text-indent: .6em;
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