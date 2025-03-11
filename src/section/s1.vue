<template>
  <article class="s1" id="s1">
   <!-- <img src="./s1/mo.jpg" class="t0">  -->
    <img src="./s1/s1bgm.jpg" class="bg" v-if="isMobile"> 
    <img src="./s1/s1bg.jpg" class="bg" v-else> 
    <div class="txt">
      <h2 class="t1" data-aos="zoom-in" data-aos-delay="0">在這裡<br>發現布魯克林</h2>
      <div class="t2" data-aos="zoom-in" data-aos-delay="200">紐約曼哈頓，為布魯克林而美麗<br>
台灣的布魯克林，驚喜發現在八里<br>
同步匯集智慧、綠意、人文城市於一身</div>
<div class="t3" data-aos="zoom-in" data-aos-delay="400">國際心跳 矚目之光<span>蓄勢待發</span></div>
<img src="./s1/en.svg" class="en" data-aos="zoom-in" data-aos-delay="600"> 
    </div>
   
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  @apply relative; 
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  font-size:size(26);
  //background: #E60012;
// padding-bottom: size(140);
 // &::after{content: "";position: absolute;bottom: 0;height: 1px;width: size(1552);left: 0;right: 0;margin: auto;background: #0006;}

  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
 .bg{width: 100%;}
 
  .txt{
    position: absolute;
    top: size(154);left: 0;right: 0;text-align: center;
  line-height: 1.7;
.t1{color: #FFF;line-height: 1.4;
  font-size: 2em;margin-bottom:.45em;
&::before{content: url("./s1/6537.svg");position: absolute;top: 0.3em;
width: 8.8em;left: calc(50% - 8.8em * .5);}
}
.t3{letter-spacing: 0.05em;margin:2.65em auto;line-height: 1.5;
span{display: block;font-size: 1.5em;}
  &::before,&::after{content: "";
width: 3em;height: 1px; background: currentColor;display: block;margin:.7em auto;
}
}
.en{width: 24em;}
}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s1 {
    font-size:sizem(14);
    .txt{
    top: sizem(85);
    .en{width: 18em;}
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