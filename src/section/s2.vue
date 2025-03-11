<template>
  <article class="s2" id="s2">
    <img src="./s2/bgm.jpg" class="bg" v-if="isMobile"> 
    <img src="./s2/bg.jpg" class="bg" v-else> 
    <img src="./s1/gif.gif" class="gif"> 
    
    <div class="txt">
      <img src="./s2/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="0"> 
      <h2 class="t1" data-aos="zoom-in" data-aos-delay="200">預備展開新居式</h2>
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">蟬連台灣誠信建商品牌榮耀<br>
更擁多座國家級殊榮肯定<br>
建義建設以建築家的實力底蘊<br>
立地八里海灣城，預備開啟全新居家型態</div>
<div class="logo" data-aos="zoom-in" data-aos-delay="600"><img src="./s2/logobg.webp"><img src="./s2/logo.svg"></div>
<div class="t3" data-aos="zoom-in" data-aos-delay="800">
專寵菁英 敬獻知音 回歸嚮往
<img src="./s2/en.svg" class="en" data-aos="zoom-in" data-aos-delay="1000">
</div> 
</div>
   
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative; 
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  font-size:size(26);
  .bg{width: 100%;}
  .gif{width: 100%;position: absolute;bottom:0;height:size(500);mix-blend-mode: soft-light;transform: scaleY(-1);filter: blur(3px);}
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
  .txt{
    position: absolute;
    top: size(107);left: 0;right: 0;text-align: center;
  line-height: 1.7;
  .slogo{width: 16.7em;}
.t1{line-height: 1.4;letter-spacing: .06em;
  font-size: 2em;margin:1.4em auto .4em auto;font-weight: 500;
}
.t2{margin: auto;
  margin-bottom: 5.7em;
  &::before,&::after{content: "";
width: 3em;height: 1px; background: currentColor;display: block;margin:.8em auto;
}}

.logo{width: 12em;margin: auto;position: relative;
img{width: 100%;
&:last-child{margin: auto;width: 63.5%;position: absolute;top: 24%;left: 0;right: 0;}
&:first-child{position: relative;transform: rotate(-10deg);animation: an 5s linear infinite alternate;}
@keyframes an {
  to {
    transform: rotate(10deg);
  }
}
  
}
}
.t3{color: #fff;
  font-size: 1.3em;
  
  letter-spacing: 0.05em;margin:1.3em auto 0;line-height: 1.5;
}
.en{width: 11.8em;display: block;margin: 0.4em auto 0;}
}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s2 {
    font-size:sizem(14);
    
    .gif{height:sizem(240);filter: blur(2px);}
    .txt{
      top: sizem(80);
      .t1{
  font-size: 1.8em;
}
.t2{
  margin-bottom: 4.6em;}
.logo{width: 10.5em;margin: auto;position: relative;

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