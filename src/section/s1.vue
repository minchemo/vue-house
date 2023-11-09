<template>
  <article class="s1" id="s1">
   <!--  
   <img class="t0" src="./s1/mo.jpg" alt="" srcset="">  -->
<div class="bg">
  <img src="./s1/l1.svg" alt="l" class="l">
  <img src="./s1/tree2.png" alt="tree" class="tree2">
  <img src="./s1/l2.svg" alt="l" class="l">
  <img src="./s1/tree1.png" alt="tree" class="tree1">
  <img src="./s1/hill2.svg" alt="hill" class="hill2">
  <img src="./s1/hill3.svg" alt="hill" class="hill3">
  <img src="./s1/hill4.svg" alt="hill" class="hill4">
  <img src="./s1/hill1.svg" alt="hill" class="hill1">
</div>

    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/>
    <div class="t1"><span class="font-['Noto_serif_TC',serif]">29.5%</span>低公設｜光合 <span class="font-['Noto_serif_TC',serif]">2-4</span> 房｜全新落成</div>
    <div class="t2"><span>青雲路．青和街</span><button class="font-['Noto_serif_TC',serif]" @click="scrollTo('.order')">立即預約</button></div>
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an1 {
  to {
     transform: skewX(3deg)
  }
}
.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(35);
  background: #DEDBD4;letter-spacing: 0.09em;
  .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .3;z-index: 10;}
  .bg{position: absolute;top: 0;left: 0;width: 100%;height: 100%;
  img{position: absolute;}
  .hill1{width:size(854);bottom: 0;left:size(465);}
  .hill2{width:size(567);top:calc(60% + #{size(348 - 1080 * .6)});//size(348);
    right:size(39);}
  .hill3{width:size(469);bottom:size(192);left:size(-22);}
  .hill4{width:size(489);bottom:size(139);left:size(182);}
  .tree1{width:size(165);bottom:size(216);left:size(363);
     transform: skewX(-2deg);transform-origin: 50% 100%;
     animation: an1 5s ease-in-out alternate infinite;
    }
  .tree2{width:size(494);bottom:size(156);right:size(27);
     transform: skewX(-3deg);transform-origin: 50% 100%;
     animation: an1 5s ease-in-out alternate infinite;}
  .l{width:100%;bottom:size(-60);left: 0;}
  
  }
  .logo{position: relative;z-index: 3;
    width:size(715);
    margin: 0em auto .7em;
    }
  .t1{position: relative;z-index: 3;
  span{font-weight: 900;}
    }
  .t2{position: relative;z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:stretch;
    width:size(680);
    margin:.7em 0 6em;
    span{
      display:block;
      border: 2px solid #A77C22;
      border-width: 2px 0px 2px 0px;
      line-height: 1.9;
      padding: 0 .2em;
    }
    button{
      display:block;
  font-size:size(28);letter-spacing: 0.29em;background:#A77C22;color: #FFF;font-weight: 700;
  width: 12.7em;border-radius: .5em;
  transition:transform .5s ;
&:hover{transform: scale(1.1);}
}
    }

  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(812);
    font-size:sizem(14);

    
  .bg{
  .hill1{width:sizem(442);bottom:sizem(40);left: auto;right:sizem(-168);}
  .hill2{width:sizem(277);top:calc(60% + #{sizem(258 - 667 * .6)});//size(348);
    right:sizem(-109);}
  .hill3{width:sizem(219);bottom:sizem(188);left:sizem(-76);}
  .hill4{width:sizem(226);bottom:sizem(2);left:sizem(-106);}
  .tree1{width:sizem(79);bottom:sizem(20);left:sizem(3);
    }
  .tree2{width:sizem(280);bottom:sizem(90);right:sizem(-76);
  }
  .l{width:sizem(1100);bottom:sizem(-35);left:sizem(-630);}
  
  }
  .logo{
    width:sizem(287);
    margin: 0em auto 0em;
    }
  .t1{
    }
  .t2{
  flex-direction: column;
  font-size:sizem(18);
    width:auto;
    gap: 1.6em;
    margin:1.5em 0 9.5em;
    span{
      line-height: 1.5;
      padding: 0 .3em;
      letter-spacing: 0.25em;
    }
  
  button{
  font-size:sizem(18);
    width:auto;
      padding: .5em 0;
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