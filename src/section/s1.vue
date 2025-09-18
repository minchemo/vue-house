<template>
  <article class="s1 relative" id="s1">

	<!--  
		<img src="./s1/mo.jpg" class="t0">
		<img src="./s1/pc.jpg" class="t0"> -->
		<img src="./s1/oo.svg" class="oo1" alt="img">
		<img src="./s1/oo.svg" class="oo2" alt="img">
		<img src="./s1/logo.svg" class="logo" alt="logo">
		<img src="./s1/txt.svg" class="txt" alt="輕軌2-4房">
		<img src="./s1/logo_tl.svg" class="tl" alt="txt">
    <div class="rb font-['Noto_Serif_TC',serif]">上旺開發</div>
		<img src="./s1/en.svg" class="en">
    
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s1 {
 // @apply relative w-full h-screen;
  // height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  font-size:size(40);
  color: #FFF;
  line-height: 1.5;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  // overflow: hidden;
  // background: #0005;


  .t0{position: absolute;width: 100%;top: 0;left: 0; 
	pointer-events: none;opacity: 0.0;z-index: 50;}
  .oo1,.oo2{position: absolute;top: 0%;
  height: calc(100% * 1100 / 1080);
 }
  .oo1{left: 37%;
 }
  .oo2{right: 37%;transform: rotate(180deg);
 }
  .logo{ margin: 1em auto 1.6em auto ;height: calc(100% * 424 / 1080);}
  .txt{height: calc(100% * 102 / 1080);}
  .tl{position: absolute;top: 2.5em;left: 1em;height: 1.3em;}
  .rb{position: absolute;bottom: 0.5em;right: 1em;height: 1.3em;font-weight: 500;font-size: .6em;}
  
  .en{position: absolute;bottom: 1em;left: 0;right: 0;margin:0 auto;mix-blend-mode: overlay;
    width:87%;}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(604);
    font-size:sizem(23);
    .oo1,.oo2{top:calc(50% - #{sizem(140)});
  height: sizem(280);
 }
  .oo1{left:calc(50% - #{sizem(75)});
 }
  .oo2{right:calc(50% - #{sizem(75)});
 }
    .logo{height:auto;width:sizem(210);margin: -.5em auto .8em auto }
    .txt{height:auto;width:sizem(210);}
    .tl{top: .5em;left: .5em;}

    .en{width:300%;max-width: none;left: 100vw;bottom: 1.5em;
      animation: an1 20s linear infinite;
    }

    @keyframes an1{
      to{transform: translateX(calc(-100% - 100vw));}
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