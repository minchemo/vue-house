<template>
  <article class="s1" id="s1">
       <div class="bg"><img src="./s1/bg.svg" alt="bg"></div>
       <img src="./s1/img.webp" class="img absolute" alt="img" data-aos="zoom-in" data-aos-delay="0">
       <img src="./s1/txt.svg" class="txt absolute" alt="txt" data-aos="zoom-in" data-aos-delay="200">
       <svg viewBox="0 0 470 39" fill="#FFF" xmlns="http://www.w3.org/2000/svg" class="reser absolute" data-aos="zoom-in" data-aos-delay="400" @click="scrollTo('.order')">
<path class="ann" d="M449.1,10V0.7L470,10"/>
<path d="M190.3,10V7h259.3v3"/>
<path d="M38.2,34.6v1.3H0.3v-1.3h12.6c-1.4-8-3.1-15.6-5.2-22.8H2.2v-1.3h16.7c-0.7-2.4-1.6-4.5-2.5-6.4l1.5-0.2
	c0.9,1.9,1.6,4.1,2.4,6.6h16v1.3h-5.6c-1.5,8.6-3.5,16.2-5.8,22.8H38.2L38.2,34.6z M9.1,11.7c1.9,6.8,3.6,14.4,5.2,22.8h9.1
	c2.2-6.1,4.1-13.7,5.8-22.8H9.1z M44.3,36.1c0.5-0.1,0.8-0.5,0.8-0.8V5.6H60v16.8H46.6v13.1c4.7-1.1,8.7-2.4,12.1-3.7
	c-1.1-1.7-2.2-3.4-3.5-5.2l1.1-0.6c2.8,3.9,4.9,7.2,6.3,10.1l-1.1,0.7c-0.6-1.3-1.3-2.5-2.1-3.8c-4.2,1.6-9.1,3.1-14.6,4.3
	L44.3,36.1L44.3,36.1z M58.6,6.9h-12v6.4h12V6.9z M46.6,21.2h12v-6.7h-12V21.2z M71.4,33.3L71,31.9l4.4,0c1.2,0,1.8-0.5,1.8-1.6V6.9
	h-9.7v31.6H66V5.6h12.6v25c0,1.7-0.9,2.6-2.7,2.6L71.4,33.3L71.4,33.3z M91.7,13.8c2.1-2,4-4.3,5.6-6.8H85.9V5.8h13v1
	c-1.9,3-4,5.6-6.3,7.8c1,1,1.8,1.9,2.6,2.8h5.1v0.8c-0.7,3.1-1.5,5.5-2.4,7.2L96.7,25c0.9-1.7,1.7-3.8,2.2-6.3h-6.2v17.5
	c0,2.5-1.3,2.3-6.4,2.3l-0.3-1.2c4.1,0.3,5.3,0.3,5.3-1.4V18.7h-6.9v-1.3h9.1c-1.8-2-4-4.1-6.6-6.4l1.1-0.6
	C89.3,11.6,90.6,12.7,91.7,13.8L91.7,13.8z M110.2,32.8c-2.3,2.2-5,4.1-8.3,5.8l-0.8-1c3.3-1.6,6-3.5,8.2-5.6L110.2,32.8L110.2,32.8
	z M110,11.3c0.7-1.3,1.1-2.8,1.4-4.3H102V5.8h20.4V7h-9.5c-0.3,1.5-0.9,2.9-1.4,4.3h9.2v19.5h-16.8V11.3H110L110,11.3z M119.2,17.3
	v-4.8h-14v4.8H119.2z M119.2,23.4v-4.9h-14v4.9H119.2z M119.2,24.6h-14v5.1h14V24.6z M122.9,37.5l-1,0.8c-1.9-1.8-4.3-3.7-7.4-5.6
	l0.9-0.8C118.4,33.8,120.9,35.6,122.9,37.5L122.9,37.5z M131.2,29.3c-0.3,3.4-1,6.5-2.1,9.1l-1.3-0.3c1.1-2.6,1.8-5.5,2.1-8.9
	L131.2,29.3L131.2,29.3z M143.2,27.1l-1.3,0.3c-0.2-0.8-0.5-1.5-0.8-2.3c-4.4,1-8.6,1.7-12.7,2.1l-0.4-1.2c3.2-2,5.6-5.3,9.2-10.1
	c-3.1,0.5-6.1,0.8-9,1.2l-0.3-1.2c3.3-3.2,5.8-7.3,8.1-12l1.3,0.5c-2.5,4.9-5.1,8.7-7.6,11.4c2.8-0.2,5.5-0.6,8.4-1.1
	c1.1-1.5,2.2-3.2,3.3-5l1.3,0.5c-5.2,7.8-9.3,13-12.5,15.7c3.6-0.5,7.2-1.1,10.6-1.9c-0.6-1.6-1.3-3.2-2-4.7l1.3-0.4
	C141.2,21.3,142.3,24,143.2,27.1L143.2,27.1z M137.8,37.3l-1.4,0.3c-0.3-3.1-0.8-5.9-1.4-8.3l1.3-0.3
	C136.8,31.5,137.3,34.3,137.8,37.3L137.8,37.3z M143.6,35.1l-1.2,0.5c-0.8-2.7-1.7-5-2.6-7l1.2-0.3
	C141.9,30.4,142.8,32.7,143.6,35.1L143.6,35.1z M151.4,3.9c-0.6,2.4-1.4,4.7-2.4,6.8h14.3c0,29,0,27.2-10.5,27.4l-0.4-1.2
	c9.4-0.3,9.6,1.6,9.5-24.8h-13.6c-1.4,2.5-3.1,4.8-5.1,6.9l-0.9-1.1c3.7-3.8,6.3-8.5,7.6-14.1L151.4,3.9L151.4,3.9z M156.1,27.6
	l-1.1,0.8c-1.8-2.6-4.3-5.5-7.5-8.7l1.1-0.6C151.9,22.3,154.4,25.2,156.1,27.6L156.1,27.6z M227.3,35.4v1h-8.7V25.3h8.4v1h-7.1v4
	h6.4v1h-6.4v4.1H227.3L227.3,35.4z M243.2,35.1l0.5-0.9c2.5,2,7.3,1.8,7.3-0.6c0-3.1-7.6-1.1-7.6-5.3c0-3.4,5.4-3.8,8.3-2.1
	l-0.4,0.9c-2.3-1.4-6.6-1.3-6.6,1.1c0,3.1,7.6,1.2,7.6,5.3C252.3,37.1,245.9,37.4,243.2,35.1z M277.9,35.4v1h-8.7V25.3h8.4v1h-7.1v4
	h6.4v1h-6.4v4.1H277.9L277.9,35.4z M303.4,36.4l-2.8-3.6c-0.7,0.1-3.6,0-4.3,0v3.5H295V25.3h4.6c6.4,0,6.1,6.4,2.2,7.3l3,3.8
	L303.4,36.4L303.4,36.4z M299.9,26.3h-3.6v5.6h3.6C304.4,31.9,304.4,26.3,299.9,26.3z M200.3,36.4l-2.8-3.6c-0.7,0.1-3.6,0-4.3,0
	v3.5h-1.3V25.3h4.6c6.4,0,6.1,6.4,2.2,7.3l3,3.8L200.3,36.4L200.3,36.4z M196.8,26.3h-3.6v5.6h3.6C201.3,31.9,201.3,26.3,196.8,26.3
	z M331.9,25.3l-5.4,11.2h-1.3l-5.4-11.2h1.4l4.7,9.7l4.7-9.7H331.9z M355.1,33.5h-6.8l-1.5,3h-1.4l5.6-11.2h1.3l5.6,11.2h-1.4
	L355.1,33.5z M351.6,26.5l-3,6h5.9L351.6,26.5z M371.4,26.3v-1h9.9v1H377v10.1h-1.3V26.3H371.4z M397.5,25.3h1.3v11.2h-1.3V25.3z
	 M422.2,25.2c8.6,0,8.6,11.3,0,11.3C413.6,36.5,413.6,25.2,422.2,25.2z M422.2,26.2c-6.9,0-6.9,9.3,0,9.3
	C429,35.5,429,26.2,422.2,26.2z M455.8,25.3v11.2h-1.1l-7.9-9.1v9.1h-1.3V25.3h1.1l7.9,9.1v-9.1H455.8z"/>
</svg>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  font-size:size(36);
.t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
.bg{position: absolute;width: 100%;height: 100%;
img{width: 100%;height: 100%;}
&::after{content: "";position: absolute;width: 100%;height: 100%;top: 0;left: 0;background: url("./s1/bg.webp") fixed;display: block;
background-size: auto size(40);
mix-blend-mode: multiply;}
}
.img{top:size(146);left:size(242);width:size(410);top: calc(50% + #{size(146 - 900 * .5)});}
.txt{top:size(276);right:size(290);width:size(740);top: calc(50% + #{size(276 - 900 * .5)});}
.reser{top:size(590);right:size(430);width:size(470);top: calc(50% + #{size(590 - 900 * .5)});
.ann{
   transform: translateX(-2.8%);
   animation:ann 1s ease-in-out alternate infinite ;
   animation-play-state:paused;
}
&:hover{
  .ann{
    animation-play-state:running;
}
}
}
}
@keyframes ann {
  to {
    transform: translateX(0%);
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


 // .gif{width:100%;height:70%;left: 0;}

  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    font-size:sizem(15);
.bg{
&::after{
background-size: auto sizem(28);}
}
.img{left:sizem(79);width:sizem(215);top: calc(50% + #{sizem(73 - 604 * .5)});}
.txt{right:sizem(67);width:sizem(245);top: calc(50% + #{sizem(419 - 604 * .5)});}
.reser{top:sizem(535);right:sizem(76);width:sizem(218);top: calc(50% + #{sizem(535 - 604 * .5)});

.ann{
  animation-play-state:running;
}
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