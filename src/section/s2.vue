<template>
  <article class="s2 relative" id="s2">
    <div class="t1 font-['Noto_Serif_TC',serif]">前瞻眼界 看見世界<span>洞悉先機與未來同行</span>
</div>
<div class="t2">從信義計畫區、南港軟體園區、內湖科學園區一步步寫下輝煌過去，你曾錯過的城市高光時刻
如今，於大南港完美演繹中</div>
      <img src="./s2/imgm.png" class="img" alt="梓園" v-if="isMobile">
      <img src="./s2/img.png" class="img" alt="梓園" v-else>
    <div class="txt">
      
      <div class="t3">What,s NEXT</div>
      <div class="t4 font-['Noto_Serif_TC',serif]"><span>全方位價值湧</span>現啟程 正是時候</div>
    </div>
 <!--   <img src="./s1/MO.jpg" class="t0">
    <div class="w01"></div>
    <div class="w02"></div>
    <img src="./s1/w3.webp" class="w03" alt="w3">
    <img src="./s1/logo.svg" class="logo" alt="雲禾月logo" data-aos="zoom-in">
    <div class="txt font-['Noto_Serif_TC',serif]">
      <div class="t1" data-aos="zoom-in-right" data-aos-delay="300">幸福從禾來</div>
      <div class="t2" data-aos="zoom-in-right" data-aos-delay="400">城市與自然<span>左右逢源</span>康健宜居</div>
      <div class="t3 font-['EB_Garamond']" data-aos="zoom-in-right" data-aos-delay="600">EMBRACING THE VIBRANT LIFE<br>OF CITY AND NATURE.</div>
    </div>  -->
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
   // height:  sizem(604);
  //  height:sizem(667);
  /*  */  
  background: center;
  background-size: cover;
  height:sizem(750);
  min-height: sizem(750);
    max-height: sizem(750);
  
  color: #036eb5;
  font-size: sizem(17);
  line-height: 1.3;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
 // background-image: url("./s1/bg.jpg");
    height:100vh;
    min-height: size(900);
    max-height: size(1080);
    padding: 0;
    font-size: size(40);
}
.t1{
 //position: absolute;
 // left:0;right: 0;margin: auto;
//  display: flex;align-items:center;
  top:sizem(25);
  width: sizem(305);

  font-weight: 700;
  font-size: 1.2em;
  letter-spacing: 0.06em;
  margin-bottom: 1.05em;
 // .line{flex: 1;display: block;border-top: 1px solid #FFF;height: 1px;margin: 0 .5em;}
@media screen and (min-width: 768px) {
  top:calc(30% + #{size(70 - 1080 * .3)});
  width: size(1685);
  font-weight: 500;
  letter-spacing: .2em;

}
}
.t2{font-weight:500; letter-spacing: 0.01em;
  font-size: 1.25em;margin: 1.1em 0 0em 0em;color: #727171;
  @media screen and (min-width: 768px) {   
font-size: 1.65em;margin: .62em 0 0em 0em;
  }
}

.txt{
  position: absolute;
  display: flex;
  flex-direction:column;
  align-items:center;
  left:0;right: 0;margin: auto;
  top:sizem(89);
  width:sizem(260);
 
  @media screen and (min-width: 768px) {   
  left: size(565);
  top:calc(50% + #{size(265 - 1080 * .5)});
  width: size(783);
    
  }
}
.logo{
  width:sizem(62);
  @media screen and (min-width: 768px) {   
  width:100%;
  }
}

.t3{font-size: 1em;  font-weight: 400;letter-spacing: .05em;
  span{font-size: 1.1em;font-weight: 500;  margin: 0 .5em 0 0;letter-spacing: -.05em;}
  
  @media screen and (min-width: 768px) {   
    font-size: 1.3em;
  }
}
.t4{font-size: 1.3em;  font-weight: 600;color: #fff690;
border-top:1px solid #fff;
border-bottom:1px solid #fff;
text-align: center;width: 100%;margin: .4em 0 0em 0em;padding: .16em 0;

  @media screen and (min-width: 768px) {   
    font-size:1em;width: 85%;margin: 1.2em 0 0em 0em;
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