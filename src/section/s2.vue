<template>
  <article class="s2 relative" id="s2">
    <div class="t1 font-['Noto_Serif_TC',serif]">前瞻眼界 看見世界<span>洞悉先機與未來同行</span></div>
    <div class="t2">從信義計畫區、南港軟體園區、內湖科學園區一步步寫下輝煌過去，你曾錯過的城市高光時刻如今，於大南港完美演繹中</div>
    <div class="t3">收藏．城市軸線上的永恆光芒</div>
      <img src="./s2/imgm.png" class="img" alt="梓園" v-if="isMobile">
      <img src="./s2/img.png" class="img" alt="梓園" v-else>
      
      <img src="./s2/hr1.png" class="hr1" alt="梓園">
      <img src="./s2/hr2.png" class="hr2" alt="梓園">
      <div class="t4 font-['Noto_Serif_TC',serif]">What,s NEXT</div>
      <div class="t5"><span>全方位價值湧現</span>啟程 正是時候</div>
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
  font-size: sizem(17);
  line-height: 1.7;
  background: linear-gradient(to right, #fff0 ,#fff); 

 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    padding:size(105) 0 size(55) 0;
    font-size: size(26);
    background: u;
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
 // top:calc(30% + #{size(70 - 1080 * .3)});
 // width: size(1685);
 width: 100%;
  font-weight: 700;
  letter-spacing: .06em;
  text-align: center;font-size: 2.51em;
  margin-bottom: .2em;

}
span{margin-left: .8em;}
}
.t2{font-weight:500; letter-spacing: 0.01em;
  font-size: 1.25em;margin: 1.1em 0 0em 0em;color: #727171;
  @media screen and (min-width: 768px) {   
font-size: 1em;margin: 0em auto 0em auto;width:size(1100);
  text-align: center;
  }
}
.t3{font-weight:600; letter-spacing: 0.01em;
  font-size: 1.25em;margin: 1.1em 0 0em 0em;
  @media screen and (min-width: 768px) {   
font-size: 1.06em;margin: 2.4em auto 0em auto;width:size(1100);
  text-align: center;
  }
}
.img{
  width:size(1470);margin:size(55) auto auto auto;display: block;
}
.hr1{
  position: absolute;
  bottom:size(170);
  width: size(605);
  height: auto;
  left: 0;
}
.hr2{
  position: absolute;
  bottom:size(170);
  width: size(650);
  height: auto;
  right: 0;
}

.t4{font-size: 1.3em;  font-weight: 600;
text-align: center;width: 100%;margin: 4em 0 0em 0em;padding: 0;

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