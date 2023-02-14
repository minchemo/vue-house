<template>
  <article class="s1">
    <div class="txt">
      <img class="logo" v-if="!$isMobile()" data-aos="zoom-in" data-aos-duration="800" src="./s1/logo.svg" alt="" srcset="">
      <img class="logo" v-else data-aos="zoom-in" data-aos-duration="800" src="./s1/logo_m.svg" alt="" srcset="">
      <div class="t1 font-['Noto_serif_TC',serif]" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800" >天之驕址 繁華匯聚</div>
      <div class="img">
        <div class="leaf leaf1"><img src="./s1/leaf.png" alt="leaf" /></div>
        <div class="leaf leafmo1" v-if="$isMobile()"><img src="./s1/leaf.png" alt="leaf" /></div>
        <div class="leaf leafmo2" v-if="$isMobile()"><img src="./s1/leaf.png" alt="leaf" /></div>
        <div class="leaf leaf2"><img src="./s1/leaf.png" alt="leaf" /></div>
        <div class="leaf leaf3"><img src="./s1/leaf.png" alt="leaf" /></div>
<div class="parrot">
  <img src="./s1/00.png" class="imgbg">
  <div class="body">
    <div class="img21">
      <img src="./s1/parrot11.png" class="wing">
    </div>

    <div class="head">
      <img src="./s1/parrot13.png" class="img4">
      <img src="./s1/parrot12.png" class="img3">
    </div>
    <img src="./s1/parrot14.png" class="img5">
    <img src="./s1/parrot11.png" class="img2 wing">
  </div>
  <img src="./s1/parrot15.png" class="img7">
  <img src="./s1/parrot15.png" class="img8">
</div>
        <img src="./s1/tree1.png" class="tree1" alt="tree" />
        <img src="./s1/tree2.png" class="tree2" alt="tree" />
        <div class="leaf leaf4"><img src="./s1/leaf.png" alt="leaf" /></div>
        <div class="leaf leaf5"><img src="./s1/leaf.png" alt="leaf" /></div>
        
<div class="parrot2">
  <img src="./s1/00.png" class="imgbg">
  <div class="body">
      <img src="./s1/parrot21.png" class="img1">
      <img src="./s1/parrot22.png" class="img2">
      <img src="./s1/parrot23.png" class="img3">
      <img src="./s1/parrot24.png" class="img4">
  </div>
</div>
<div class="butterfly01" v-if="!$isMobile()">
<div class="butterfly1">
  <img src="./s1/00.png" class="imgbg">
  <img src="./s1/2.png" class="fly2">
  <img src="./s1/1.png" class="fly1">
  <img src="./s1/1.png" class="fly3">
  <img src="./s1/2.png" class="fly4">
  <img src="./s1/3.png" class="fly5">
</div>
</div>
<div class="butterfly02">
<div class="butterfly1">
  <img src="./s1/00.png" class="imgbg">
  <img src="./s1/6.png" class="fly2">
  <img src="./s1/5.png" class="fly1">
  <img src="./s1/5.png" class="fly3">
  <img src="./s1/6.png" class="fly4">
  <img src="./s1/3.png" class="fly5">
</div>
</div>
<div class="butterfly03">
<div class="butterfly2">
  <img src="./s1/00.png" class="imgbg">
  <img src="./s1/1.png" class="fly1">
  <img src="./s1/2.png" class="fly2">
  <div class="w">
  <img src="./s1/1.png" class="fly1">
  <img src="./s1/2.png" class="fly2"></div>
  <img src="./s1/4.png" class="fly6">
</div>
</div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative overflow-hidden w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // background: url("./s1/1.jpg");
  // background-size: cover;
  background: url("./s1/bg.jpg");
  background-size: size(900) auto;
  .txt{
    margin: auto;
    width: size(304);
    font-size:size(25);
    color: #9B1E44;;
    text-align: center;
  }
  .logo {
    width: 100%;
    margin: .8em auto 1.3em auto
  }
  .t1 {
    border-width: 1px 0px;
    border-color: currentColor;
    letter-spacing: 0.36em;
    font-weight: 900;
    line-height: 1.8
  }
  .img {
    @apply absolute;

    width: 100%;height: 100%;
    left: 0;
    top: 0;
    // animation: fly 5s linear infinite alternate-reverse;  
    // transform: rotate(0);

  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
@keyframes an1 {
  60% {
    transform: translateX(0%);
  }
}
@keyframes an2 {
  20% {
    transform: translateX(0%);
  }
  80% {
    transform: translateX(0%);
  }
}

.leaf{
@apply absolute;
 animation: an 5s alternate infinite;
img{width: 100%;}
}

.leaf1{
width: size(742);
right:size(455);
top: calc(10% + (-242 - 1080 * .1) * 100vw / 1920);
transform: skewX(-3deg);
transform-origin: 50% -20%;
img{
transform: rotate(2.35deg);}
}
    .leaf2{
width:size(1174);
left: size(-480);
bottom: calc(20% + (115 - 1080 * .2) * 100vw / 1920);
transform: skewX(-5deg)rotate(-3deg);
transform-origin: 50% 57%;
img{transform: rotate(-165deg);}
}
    .leaf3{
width:size(1266);
right: size(-550);
top: calc(50% + (-165 - 1080 * .5) * 100vw / 1920);
transform: skewX(4deg)rotate(3deg);
transform-origin: 40% 60%;
img{transform: rotate(-165deg);}
}
    .leaf4{
width:size(1777);
left: size(-370);
bottom: calc(30% + (-690 - 1080 * .3) * 100vw / 1920);
transform: skewX(3deg)rotate(-2deg);
transform-origin: 50% 80%;
img{transform: rotate(-180deg);}
}
    .leaf5{
width: size(1528);
right: size(-1078);
bottom: calc(40% + (-80 - 1080 * .4) * 100vw / 1920);
transform: skewY(3deg);
transform-origin: 60% 50%;
img{
transform: rotate(2.35deg);}
}
    .tree1{
    @apply absolute;
width: size(272);
left: size(30);
bottom: calc(20% + (0 - 1080 * .2) * 100vw / 1920);
}
    .tree2{
    @apply absolute;
width: size(315);
right: size(50);
top: calc(50% + (190 - 1080 * .5) * 100vw / 1920);
}


.imgbg {
    width: 100%;
  }
.parrot {
  position: absolute;
  bottom: calc(20% + (355 - 1080 * .2) * 100vw / 1920);
  left: size(170);
  width: size(70);
  .img21 {
    position: absolute;
    top: 44%;
    left: 51%;
    width: 28%;
    transform: scaleX(-1) rotate(-8deg);
    img {
      width: 100%;
    }
  }
  .wing {
    transform: rotate(5deg) translateX(-20%);
    transform-origin: 50% 10%;
    animation: an2 2s alternate ease-in-out infinite;
  }
  .body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(8deg);
    transform-origin: 50% 90%;
    animation: an1 2s alternate ease-in-out infinite;
  }
  .head {
    position: absolute;
    top: 27.5%;
    left: 8%;
    width: 100%;
    height: 100%;
    transform: rotate(-22deg);
    transform-origin: 45% 16%;
    animation: an1 1s alternate ease-in-out infinite;
  }
  .img3 {
    position: relative;
    top: 0;
    left: 0;
    width: 63%;
  }
  .img4 {
    position: absolute;
    top: -28%;
    left: 25%;
    width: 69.6%;
    transform: rotate(-7deg);
    transform-origin: 60% 100%;
    animation: an1 1s alternate infinite;
  }
  .img5 {
    position: absolute;
    top: 41%;
    left: 1%;
    width: 77%;
    z-index: 4;
  }
  .img6 {
    position: absolute;
    top: 71%;
    left: 1%;
    width: 77%;
  }
  .img7 {
    position: absolute;
    top: 74%;
    left: 48%;
    width: 14.5%;
    z-index: 5;
    transform: rotate(-10deg) translate(50%, -10%);
    transform-origin: 25% 5%;
    animation: an1 2s ease-out infinite;
  }
  .img8 {
    position: absolute;
    top: 75%;
    left: 31%;
    width: 15.5%;
    z-index: 5;
    transform: rotate(-10deg) translate(0%, 10%);
    transform-origin: 25% 5%;
    animation: an1 2s ease-in-out infinite;
  }
  .img2 {
    position: absolute;
    top: 40.5%;
    left: 0;
    width: 28.5%;
    z-index: 4;
  }
}
.parrot2 {
  position: absolute;
  top: calc(50% + (200 - 1080 * .5) * 100vw / 1920);
  right: size(180);
  width:size(135);
  .body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-15deg);
    transform-origin: 50% 30%;
    animation: an 1s alternate ease-in-out infinite;
  }
  .img1 {
    position: absolute;
    top: 27%;
    left: 59%;
    width: 40.9%;
    transform: rotate(-15deg);
    transform-origin: -7% 22%;
    animation: an2 2s alternate ease-in-out infinite;
  }
  .img2 {
    position: absolute;
    top: 7.5%;
    left: 16%;
    width: 62%;
  }
  .img3 {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 41.5%;
    transform: rotate(16deg)translate(-5%,-10%);
    transform-origin: 55% 110%;
    animation: an 1s alternate ease-in-out infinite;
  }
  .img4 {
    position: absolute;
    top: 7%;
    left: 26%;
    width: 55.9%;
    transform: rotate(-10deg) translateX(10%);
    transform-origin: 20% 10%;
    animation: an2 2s alternate ease-in-out infinite;
  }
}
@keyframes butterfly01 {
  25% {
    transform:translate(-80%,0);
  }
  50% {
    transform: translate(-80%,-20%);
  }
  75% {
    transform:translate(0,-20%);
  }
}
.butterfly1 {
    transform: translate(0,0%);
    animation: butterfly01 3s linear infinite;
  .fly1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: rotate(3deg)scaleX(1.1);
    transform-origin: 100% 100%;
    animation: an .3s alternate ease-in-out infinite;}
  .fly2{
    position: absolute;
    top: 30%;
    left: 5%;
    width: 95%;
    transform: rotate(-3deg)scaleX(1.05);
    transform-origin: 100% 0%;
    animation: an .3s alternate ease-in-out infinite;
}
  .fly3{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: rotate(5deg)scaleX(.8);
    transform-origin: 100% 100%;
    animation: an .3s alternate ease-in-out infinite;}
  .fly4{
    position: absolute;
    top: 30%;
    left: 5%;
    width: 95%;
    transform: rotate(-5deg)scaleX(.7);
    transform-origin: 100% 0%;
    animation: an .3s alternate ease-in-out infinite;}
  .fly5{
    position: absolute;
    top: 21%;
    left: 98.5%;
    width: 16.5%;}
}
.butterfly2 {
    transform: translate(0,0%);
    animation: butterfly01 5s  1s linear infinite;
  .w{
    transform: scaleX(-.7);
    transform-origin: 103% 0%;
    position:absolute;
    top: 0;
    left: 0%;
    width: 100%;height: 100%;}
  .fly1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: rotate(6deg)scaleX(.8);
    transform-origin: 100% 100%;
    animation: an .3s alternate ease-in-out infinite;}
  .fly2{
    position: absolute;
    top: 30%;
    left: 5%;
    width: 95%;
    transform: rotate(-6deg)scaleX(.7);
    transform-origin: 100% 0%;
    animation: an .3s alternate ease-in-out infinite;}
  .fly6{
    position: absolute;
    top: 20%;
    left: 84%;
    width: 37%;}
}
.butterfly01 {
  position: absolute;
  bottom: calc(20% + (580 - 1080 * .2) * 100vw / 1920);
  left: size(480);
    transform: scaleX(-1)rotate(36deg);
  width:size(60);}
.butterfly02 {
  position: absolute;
  top: calc(20% + (200 - 1080 * .2) * 100vw / 1920);
  right: size(690);
    transform: scaleX(-1)rotate(50deg);
  width:size(40);
}
.butterfly03 {
  position: absolute;
  bottom: calc(30% + (20 - 1080 * .3) * 100vw / 1920);
  right: size(780);
  transform:rotate(55deg);
  width:size(100);
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: sizem(604);
    max-height: sizem(812);
  background-size: sizem(450) auto;
  .txt{
    width: sizem(130);
    font-size:sizem(12);
  }
  .logo {
    margin: 0em auto 1.3em auto
  }
  .t1 {
    letter-spacing: 0.28em;
    margin: 0em auto 2.5em auto
  }
.leaf1{
width: sizem(324);
right:sizem(65);
top: calc(20% + (-120 - 667 * .2) * 100vw / 375);
}
.leaf2{
width: sizem(352);
left:sizem(-165);
bottom: calc(30% + (65 - 667 * .3) * 100vw / 375);
}
.leaf3{
width: sizem(467);
right:sizem(-260);
top: calc(35% + (-100 - 667 * .35) * 100vw / 375);
img{transform: rotate(165deg);}
}
.leaf4{
width: sizem(529);
left:sizem(-130);
bottom: calc(20% + (-195 - 667 * .2) * 100vw / 375);
}
.leaf5{
width: sizem(430);
right:sizem(-282);
bottom: calc(40% + (30 - 667 * .4) * 100vw / 375);
}
.leafmo1{
width: sizem(279);
right:sizem(-215);
top: calc(50% + (130 - 667 * .5) * 100vw / 375);
transform: skewY(-3deg);
transform-origin: 80% 50%;
img{
transform: rotate(123deg);}
}
.leafmo2{
width: sizem(279);
left:sizem(-135);
bottom: calc(25% + (105 - 667 * .25) * 100vw / 375);
transform: skewX(-3deg)rotate(-3deg);
transform-origin: 50% 50%;
img{transform: rotate(86deg);}
}
.tree1{
width: sizem(107);
left: sizem(-10);
bottom: calc(30% + (-20 - 667 * .3) * 100vw / 375);
}

.tree2{
width: sizem(161);
right: sizem(-55);
top: calc(35% + (50 - 667 * .35) * 100vw / 375);
}
.parrot {
  bottom: calc(30% + (115 - 667 * .3) * 100vw / 375);
  left: sizem(40);
  width: sizem(35);
}
.parrot2 {
  top: calc(35% + (55 - 667 * .35) * 100vw / 375);
  right: sizem(18);
  width:sizem(65);
}
.butterfly02 {
  top: calc(50% + (90 - 667 * .5) * 100vw / 375);
  right: sizem(220);
  width:sizem(25);
    transform:rotate(50deg);}
.butterfly03 {
  bottom: calc(30% + (30 - 667 * .3) * 100vw / 375);
  right: sizem(90);
  transform:scaleX(-1)rotate(55deg);
  width:sizem(40);
}


  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
