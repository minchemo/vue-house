<template>
  <article class="s1 relative" id="s1">

	<!--  
		<img src="./s1/mo.jpg" class="t0"> -->
		<img src="./s1/pc.jpg" class="t0">
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s1 {
 // @apply relative w-full h-screen;
  // height: size(1080);
  min-height: size(960);
  max-height: size(1080);
  height: 100vh;
  font-size:size(40);
  color: #FFF;
  line-height: 1.5;
  // overflow: hidden;
  // background: #0005;


  .t0{position: absolute;width: 100%;top: 0;left: 0; 
	pointer-events: none;opacity: .3;z-index: 50;}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(580);
    max-height: sizem(750);
    font-size:sizem(23);

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