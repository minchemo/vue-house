<template>
  <article class="s1" id="s1">
	<!-- 
		<img src="./s1/pc.jpg" class="t0">
		<img src="./s1/mo.jpg" class="t0">  -->
	<div class="txt">
    <Logo class="logo" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500" />
		<img src="./s1/logo.svg">
		<img src="./s1/s5title.svg">
		<h3 class="t1" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">Y22雙捷運 五華街站</h3>
    <div class="hr" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1500"></div>
    <h4 class="t2" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1500">百年一遇 三重地王</h4>
    <div class="t3" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1500">2-3房  即將公開</div>
		
	</div>
	<div class="to"  @click="scrollTo('.s2')" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1500" >
		<img src="./s1/to.webp">
	</div>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1140);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(30);
  line-height: 1.3;
  font-weight: 700;
  .t0{position: absolute;width: 100%;top: 0;left: 0; 
	pointer-events: none;opacity: .3;z-index: 50;}
  .txt{
	position: absolute;
	left: 0;right: 0;margin: auto;top:size(240);
	top: calc(50% + #{size(240 - 900 * .5)});
	text-align: center;
    width:size(726);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  letter-spacing: .1em;
    line-height: 1.7;
    font-weight: 800;
  }
  .logo{width:size(695);}
  // .logo{width:size(1295);}
  .t1{font-size: 1.133em; margin:1.7em auto 0.2em auto ;}
  .hr{background:currentColor;height: 1px;width: 11.4em;}
  .t2{font-size: 1.267em;}
  .t3{color: #fff;background: #888;width: 11.4em;margin-top: 0.4em;}
  .to{
	position: absolute;width:size(45);
	left: 0;right: 0;margin: auto;bottom:size(85);
	bottom: calc(20% + #{size(85 - 900 * .2)});
img{width: 100%;
  transform: translateY(50%);
animation: an 2s ease-in-out alternate infinite;}
}
}

@keyframes an {
  to {
	transform: translate(0)
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(821);
    font-size:sizem(20);
	background-position: center;
  background-size:170% 100%;

  .txt{top:sizem(160);
	// top: calc(50% + #{sizem(246 - 604 * .5)});
    width:100%;

  }
  .logo{
    width:sizem(270);}
  .t1{font-size: 1.27em; margin:1.7em auto 0.2em auto ;}
  .hr{width: 13.5em;}
  .t2{font-size: 1.45em;}
  .t3{width: 13.5em;margin-top: 1em;
    line-height: 2;}
  .to{width:sizem(45);bottom:sizem(60);}

    
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
import Logo from "@/section/logo.vue"
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>