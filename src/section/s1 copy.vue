<template>
  <article class="s1" id="s1">
    <!--  
    <img class="t0" src="./s1/mo.jpg" alt="" srcset=""> --> 
    <div class="bg-box">
    <div class="bg">
      <img src="./s1/2.png" alt="moon" class="moon" data-aos="fade-up" data-aos-delay="500"  data-aos-duration="2000">
      <div class="cloud1"><img src="./s1/cloud1.png" alt="cloud"><img src="./s1/cloud1.png" alt="cloud"></div>
      <div class="cloud2"><img src="./s1/cloud2.png" alt="cloud"><img src="./s1/cloud2.png" alt="cloud"></div>
      <img src="./s1/3.png" alt="ground" class="ground">
    </div>
    </div>
    <div class="bubble" data-aos="fade-down" data-aos-delay="0" data-aos-offset="-300"  data-aos-duration="3000">
      <img src="./s1/bubble.png" alt="bubble">
      <img src="./s1/bubble.png" alt="bubble">
      <img src="./s1/bubble.png" alt="bubble">
      <img src="./s1/bubble.png" alt="bubble">
      <img src="./s1/bubble.png" alt="bubble">
      <img src="./s1/bubble.png" alt="bubble">
      <img src="./s1/bubble.png" alt="bubble">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
      <img src="./s1/bubble.png" alt="bubble" v-if="!$isMobile()">
    </div>
     <!--
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/>
    <img src="./s1/t1.svg" class="t1" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>  -->
    <div class="t1 font-['Noto_serif_JP',sans-serif]">完美的顚覆</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
@keyframes an{
  to {
     transform: scale(1);opacity: 1;
  }
}
@keyframes an2{
  0% {
     transform: scale(1)rotate(0deg);
  }
  25% {
     transform: scale(3)rotate(45deg);
  }
  50% {
     transform: scale(4)rotate(90deg);
  }
  75% {
     transform: scale(3)rotate(135deg);
  }
  100% {
     transform: scale(1)rotate(180deg);
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
  font-size:size(25);
  // background: #012876 url("./s1/01.jpg") center;
  // background-size: cover;
  &::after{
    content: "";
    display: block;
    width: 100%;
    height:size(400);
    position: absolute;
    bottom:calc(50% + #{size(-400-1080*.5)});
    background: linear-gradient(to bottom, #01287600 0%,#01287699 17%,#012876cc 30%,#012876cc 30%,#012876ee 38%, #012876 50%,#01287600 100%);z-index: 2;
  }
  .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .2;z-index: 10;}
  .bg-box{position: absolute;top:calc(50% - #{size(1080*.5)});left: 0;width: 100%;height: size(1280);overflow: hidden;z-index: 2;}
  .bg{position: absolute;top:0;left: 0;width: 100%;height:100%;height: size(1080);
  background: linear-gradient(0deg, #A9E3FF 0%, #3CC2FF 20%, #0073D4 40%, #00429D 70%, #012876 90%);
  animation:an2 2s 4s linear both;
.cloud1{position: absolute;bottom:calc(40% + #{size(-0-1080*.4)});left: 0;white-space: nowrap;
  animation:an 30s linear infinite;
  transform: translateX(-50%);
  img{width: 100vw;height:size(400);}
}
.cloud2{position: absolute;bottom:calc(30% + #{size(40-1080*.3)});left: 0;white-space: nowrap;
  animation:an 20s linear infinite;
  transform: translateX(-50%);
  img{width: size(2254);height:size(283);}
}
.moon{position: absolute;width:size(1653);bottom:size(-60);left: calc(50% - #{size(1653)} * .5);mix-blend-mode: screen;}
.ground{position: absolute;width:100%;bottom:size(-200);left: 0;z-index: 2;}
  }
  .bubble{position: absolute;top:size(-50);left: 0;z-index: 3;
    mix-blend-mode: screen;
img{position: absolute;left: 0;top: 0;
  animation:an 16s linear infinite reverse;
  transform: translateY(size(3900));
  &:hover{}
  &:nth-child(1){width:size(25);left:size(28);
    animation-duration:19s;animation-delay:-4s}
  &:nth-child(2){width:size(52);left:size(114);
    animation-duration:25s;animation-delay:-22s}
  &:nth-child(3){width:size(84);left:size(129);
    animation-duration:30s;animation-delay:-1s}
  &:nth-child(4){width:size(25);left:size(145);
    animation-duration:28s;animation-delay:-10s}
  &:nth-child(5){width:size(84);left:size(320);
    animation-duration:23s;animation-delay:0s}
  &:nth-child(6){width:size(47);left:size(320);
    animation-duration:20s;animation-delay:-7s}
  &:nth-child(7){width:size(53);left:size(483);
    animation-duration:27s;animation-delay:-2s}
  &:nth-child(8){width:size(46);left:size(913);
    animation-duration:28s;animation-delay:-5s}
  &:nth-child(9){width:size(23);left:size(1155);
    animation-duration:18s;animation-delay:-9s}
  &:nth-child(10){width:size(20);left:size(609);
    animation-duration:22s;animation-delay:-20s}
  &:nth-child(11){width:size(30);left:size(1148);
    animation-duration:30s;animation-delay:-2s}
  &:nth-child(12){width:size(54);left:size(1414);
    animation-duration:25s;animation-delay:0s}
  &:nth-child(13){width:size(44);left:size(1512);
    animation-duration:19s;animation-delay:-10s}
  &:nth-child(14){width:size(30);left:size(1647);
    animation-duration:29s;animation-delay:-14s}
  &:nth-child(15){width:size(16);left:size(1700);
    animation-duration:22s;animation-delay:-3s}
  &:nth-child(16){width:size(45);left:size(1732);
    animation-duration:26s;animation-delay:0s}
  &:nth-child(17){width:size(50);left:size(1831);
    animation-duration:32s;animation-delay:-30s}
}
  }
  .t1{
  font-size:size(54);letter-spacing: 1.1em;
    color:#fff;position: relative;z-index: 2;font-weight: 300;
    text-shadow: 0 0 .6em #0369;
    text-indent: 1.1em;
    transform: scale(.5);opacity: 0;
  animation:an .8s 6.5s both;
    }

  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(700);
    font-size:sizem(13);
    &::after{
    height:sizem(200);
    bottom:calc(50% + #{sizem(-200-604*.5)});
  }
  .bg-box{top:0;height:calc(100% + #{sizem(100)});}
  .bg{top:0;height:calc(100% - #{sizem(100)});
.cloud1{bottom:sizem(30);
  img{height:sizem(150);}
}
.cloud2{bottom:sizem(80);
  img{width: sizem(1000);height:sizem(100);}
}
.moon{width:sizem(700);bottom:calc(70% - #{sizem(580)} * .7);left: calc(50% - #{sizem(700)} * .5);}
.ground{width:260%;left: -70%;bottom:sizem(-100);}
  }

  
  .bubble{
    top:sizem(-40);
img{
  transform: translateY(sizem(1700));
  &:nth-child(1){width:sizem(40);left:sizem(-5);}
  &:nth-child(2){width:sizem(14);left:sizem(20);}
  &:nth-child(3){width:sizem(53);left:sizem(30);}
  &:nth-child(4){width:sizem(30);left:sizem(130);}
  &:nth-child(5){width:sizem(14);left:sizem(306);}
  &:nth-child(6){width:sizem(10);left:sizem(340);}
  &:nth-child(7){width:sizem(40);left:sizem(320);}

}


  }
  .t1{font-size:sizem(24);
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