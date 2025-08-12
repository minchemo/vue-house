<template>
  <article class="s2 relative" id="s2">
      <img src="./s2/bm.svg" class="b" alt="鳥" data-aos="zoom-in" data-aos-delay="600" v-if="isMobile">
      <img src="./s2/b.svg" class="b" alt="鳥" data-aos="zoom-in" data-aos-delay="600" v-else>
    <div class="t1 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="0">前瞻眼界 看見世界<span>洞悉先機與未來同行</span></div>
    <div class="t2"  data-aos="zoom-in" data-aos-delay="200">從信義計畫區、南港軟體園區、內湖科學園區一步步寫下輝煌過去，你曾錯過的城市高光時刻如今，於大南港完美演繹中</div>
    <div class="t3" data-aos="zoom-in" data-aos-delay="400">收藏．城市軸線上的永恆光芒</div>
      <img src="./s2/imgm.png" class="img" alt="梓園" data-aos="zoom-in" data-aos-delay="600" v-if="isMobile">
      <img src="./s2/img.png" class="img" alt="梓園" data-aos="zoom-in" data-aos-delay="600" v-else>
      
      <img src="./s2/hr1.png" class="hr1" data-aos="fade-right" data-aos-delay="200" alt="梓園">
      <img src="./s2/hr2.png" class="hr2" data-aos="fade-left" data-aos-delay="200" alt="梓園">
      <div class="t4 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="800">What,s NEXT</div>
      <div class="t5" data-aos="zoom-in" data-aos-delay="1000"><span>全方位價值湧現</span>啟程 正是時候</div>
      <div class="line"></div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;top:0px;left: 0; pointer-events: none;z-index: 9;opacity: .2;}
@keyframes an {
  20% {
    transform: scale(2,.3);opacity: .3;
  }
  30% {
    transform: scale(6,.5);opacity: 0;
  }
  40% {
    transform: scale(.03,.01);opacity: 0;
  }
  100% {
    opacity: 1;
  }

}
  .s2 {
  color: #036eb5;
  font-size: sizem(13);
  line-height: 1.7;
  background: linear-gradient(to right, #fff0 ,#fff); 
  padding:sizem(53) 0 sizem(40) 0;

 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    padding:size(105) 0 0 0;
    font-size: size(26);
}

.b{
  position: absolute;
  left:sizem(50);
  top:sizem(-40);
  width: sizem(120);
@media screen and (min-width: 768px) {
  top:size(270);
  left:size(50);
  width: size(360);

}
}
.t1{
 width: 100%;
  font-weight: 700;
  font-size: 2.3em;
  letter-spacing: 0.06em;
  margin-bottom: .4em;
  text-align: center;
  line-height: 1.3;
@media screen and (min-width: 768px) {
  font-weight: 700;font-size: 2.51em;
  margin-bottom: .2em;
  line-height: 1.7;

}
span{display: block;
  
@media screen and (min-width: 768px) {margin-left: .8em;display: inline-block;}
}
}
.t2{font-weight:500; letter-spacing: 0.01em;
  font-size: 1em;margin:1em auto 0em auto;
  width:sizem(310);
  color: #727171;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin: 0em auto 0em auto;width:size(1100);
  }
}
.t3{font-weight:600; letter-spacing: 0.01em;
  font-size: 1.25em;margin: 1em 0 0em 0em;
  text-align: center;
  @media screen and (min-width: 768px) {   
font-size: 1.06em;margin: 2.4em auto 0em auto;width:size(1100);
  }
}
.img{
  width:sizem(250);margin:sizem(10) auto auto auto;display: block;
  @media screen and (min-width: 768px) {   
    width:size(1470);margin:size(55) auto auto auto;
  }
}
.hr1{
  position: absolute;
  bottom:sizem(115);
  width: sizem(110);
  height: sizem(30);
  left: 0;
  @media screen and (min-width: 768px) {  
  bottom:size(170);
  width: size(605);
  height: auto;
  }
}
.hr2{
  position: absolute;
  bottom:sizem(115);
  width: sizem(115);
  height: sizem(30);
  right: 0;
  @media screen and (min-width: 768px) {  
  bottom:size(170);
  width: size(650);
  height: auto;
  }
}

.t4{font-size: 1.3em;  font-weight: 600;
text-align: center;width: 100%;margin: 1.2em 0 0em 0em;padding: 0;

  @media screen and (min-width: 768px) {   
    font-size:1.4em;margin: 2.9em 0 0em 0em;
  }
}
.t5{font-size: 1.3em;  font-weight: 400;
text-align: center;width: 100%;margin: .2em 0 0em 0em;padding: .16em 0;

  @media screen and (min-width: 768px) {   
    font-size:1.1em;
  }
  span{display: block;font-size:1.15em;}
}

.line{height:sizem(60);width: 1px;background: #036eb5;margin:sizem(5) auto sizem(-60) auto;position: relative;z-index: 3;
  @media screen and (min-width: 768px) {   height:size(50);margin:size(5) auto 0 auto;
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