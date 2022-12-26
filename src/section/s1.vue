<template>
  <article class="s1">
 <!-- 
   <img src="./s1/mo.jpg" class="t0" />
  --> 
   <img src="./s1/bg1.jpg" class="bg1" />
   <img src="./s1/gif.gif" class="bg2" />
   <div class="bg3"></div>
   <img src="./s1/bg0.png" class="bg4" />
<svg class="bird" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 346.5 415">
<pattern  x="325.2" y="-17.5" width="346.5" height="415" patternUnits="userSpaceOnUse" id="bird1" viewBox="324.5 -433 346.5 415" style="overflow:visible;">
		<image style="overflow:visible;" width="693" height="830" xlink:href="./s1/bird1.png"  transform="matrix(0.5 0 0 0.5 346.5 -415)">
		</image>		
		<image style="overflow:visible;" width="693" height="830" xlink:href="./s1/bird1.png"  transform="matrix(0.5 0 0 0.5 346.5 -830)">
		</image>
</pattern>
<pattern  x="325.2" y="-17.5" width="346.5" height="415" patternUnits="userSpaceOnUse" id="bird3" viewBox="324.5 -433 346.5 415" style="overflow:visible;">
		<image style="overflow:visible;" width="693" height="830" xlink:href="./s1/bird3.png"  transform="matrix(0.5 0 0 0.5 346.5 -415)">
		</image>
</pattern>
<pattern  x="325.2" y="-17.5" width="346.5" height="415" patternUnits="userSpaceOnUse" id="bird2" viewBox="324.5 -433 346.5 415" style="overflow:visible;">
		<image style="overflow:visible;" width="693" height="830" xlink:href="./s1/bird2.png"  transform="matrix(0.5 0 0 0.5 346.5 -415)">
		</image>
		<image style="overflow:visible;" width="693" height="830" xlink:href="./s1/bird2.png"  transform="matrix(0.5 0 0 0.5 0 -415)">
		</image>
</pattern>
<g class="st0">
<path class="an1" d="M257.7,92.4C109.6,123.2,63.6,348,255.6,377.8"/>
<path class="an2" d="M133,56.9c-50.6,25.6-95,63.7-124.7,133.6"/>
<path class="an3" d="M227.7,66.8C88.4,73.8,42.2,195.9,69.2,279.7"/>
<path class="an4" d="M264.5,65.2c50.6-6.8,25.4-74.6-39.1-23.5"/>
<path class="an5" d="M296.4,40.6c27,2,45.8,17,50.9,27.2"/>
<path class="an6" d="M189.4,132.5c-19.3,17.2-15.2,47.4,3.7,55.3"/>
<path class="an7" d="M198.2,210.9c7.8-5.7,25-7.4,29.7-7.4"/>
<path class="an8" d="M231.9,204.8c4.2,0.3,13.1,2.7,14.8,10.1"/>
<path class="an9" d="M229.9,208.8c5.7,2.1,13.1,5.7,14.8,13.1"/>
	</g>
</svg>





    <img src="./s1/logo.svg" data-aos="zoom-in" data-aos-delay="200" class="logo" srcset="" />
    <img src="./s1/text.svg" data-aos="zoom-in" data-aos-delay="400" class="text" srcset="" />
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;z-index: 5;}
.s1 {
  @apply relative w-full h-screen;// overflow-hidden;
  min-height: size(900);
  max-height: size(1080);
@keyframes wave{
  to {transform:translateX(0%);}
}
    .bg1{
      position: absolute;
      top: calc(50% + (0 - 1080 * .5) * 100vw / 1920);
      left: 0;
      width: size(1920);
    }
    .bg2{
      
    position: absolute;
    width: 150%;
    height: size(250);
      top: calc(50% + (870 - 1080 * .5) * 100vw / 1920);
  //  top: calc(50% + 9.53125vw);
    opacity: .5;
    left: 0;
    mix-blend-mode: soft-light;
    filter: blur(0.06vw);
    }
    .bg3{
      position: absolute;
      top: calc(50% + (0 - 1080 * .5) * 100vw / 1920);
      left: 0;
      width: 100%;
      height: size(870);
      background: linear-gradient(180deg, #CCCECD 0%, #CCCECD 31.77%, #C0C2BF 76.04%, #C0C2BF 90.21%, rgba(213, 215, 214, 0) 100%);
    }
    .bg4{
      position: absolute;
      left: size(140);
      top: calc(50% + (382 - 1080 * .5) * 100vw / 1920);
      width:  size(830);
    }
    .bird{
      position: absolute;
      top: calc(50% + (178 - 1080 * .5) * 100vw / 1920);
      left: size(350);
      width:  size(346);opacity: 1;
	.st0{fill:none;stroke-linecap:round;}
.an1{stroke:url(#bird1);stroke-width:96;stroke-dasharray:419;stroke-dashoffset:419;animation: letterDraw 0.7s 1s forwards;}
.an2{stroke:url(#bird1);stroke-width:65;stroke-dasharray:187;stroke-dashoffset:187;animation: letterDraw 0.3s 1.7s forwards;}
.an3{stroke:url(#bird2);stroke-width:75;stroke-dasharray:309;stroke-dashoffset:309;animation: letterDraw 0.5s 2s forwards;}
.an4{stroke:url(#bird3);stroke-width:46;stroke-dasharray:121;stroke-dashoffset:121;animation: letterDraw 0.3s 2.5s  forwards;}
.an5{stroke:url(#bird2);stroke-width:29;stroke-dasharray:60;stroke-dashoffset:60;animation: letterDraw 0.2s 2.8s  forwards;}
.an6{stroke:url(#bird3);stroke-width:37;stroke-dasharray:66;stroke-dashoffset:66;animation: letterDraw 0.2s 2.9s forwards;}
.an7{stroke:url(#bird3);stroke-width:13;stroke-dasharray:31;stroke-dashoffset:31;animation: letterDraw 0.05s 3.2s forwards;}
.an8{stroke:url(#bird3);stroke-width:7;stroke-dasharray:20;stroke-dashoffset:20;animation: letterDraw 0.03s 3.3s forwards;}
.an9{stroke:url(#bird3);stroke-width:7;stroke-dasharray:21;stroke-dashoffset:21;animation: letterDraw 0.03s 3.4s forwards;}
		@keyframes letterDraw {
    to {
        stroke-dashoffset: 0
    }
}
    }

    .logo{
      position: absolute;
      top: calc(50% + (148 - 1080 * .5) * 100vw / 1920);
      left:size(948);
      width:size(187);
    }
    .text{
      position: absolute;
      top: calc(50% + (148 - 1080 * .5) * 100vw / 1920);
      left:size(1232);
      width:size(497);
    }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height: calc(100vh - 63px);
    min-height: size-m(620);
    max-height: size-m(750);
    .bg1{
    top: auto;
    bottom: calc(5% + (-5 - 667 * .05) * 100vw / 375);
      width:  size-m(642);
    }
    .bg2{
    width: 150%;
    height: size-m(80);
    top: auto;
    bottom: calc(5% + (-18 - 667 * .05) * 100vw / 375);
    opacity: 1;
    }
    .bg3{
      top:0;
      height:calc(100% - #{size-m(65)});
      background: linear-gradient(180deg, #CCCECD 0%, #CCCECD 31.77%, #C0C2BF 76.04%, #C0C2BF 90.21%, rgba(213, 215, 214, 0) 100%);
    }
    .bg4{
      left: size-m(47);
    top: auto;
    bottom: calc(5% + (30 - 667 * .05) * 100vw / 375);
      width:  size-m(278);
    }

    .bird{
    top: auto;
    bottom: calc(5% + (160 - 667 * .05) * 100vw / 375);
    //bottom: size-m(163);
      left: size-m(118);
      width:  size-m(113);
    }

    .logo{
      top: calc(40% + (127 - 667 * .4) * 100vw / 375);
      left: size-m(53);
      width:  size-m(66);
    }
    .text{
      top: calc(40% + (36 - 667 * .4) * 100vw / 375);
      left: size-m(147);
      width:  size-m(177);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
