<template>
  <article class="s1 relative" id="s1">

    <a href="https://lin.ee/jX9Xyhz" target="_blank" v-if="!isMobile">
    <img src="./s1/lineicon.png" class="lineicon" data-aos="zoom-in" data-aos-delay="200" /> 
    </a>
	<!--  
		<img src="./s1/mo.jpg" class="t0">
		<img src="./s1/pc.jpg" class="t0"> -->
    <div class="bg1" data-aos="fade" data-aos-delay="0" >
      <div class="oo1"></div>
      <div class="oo2"></div>
      <div class="oo3"></div>
      <div class="oo4"></div>
      <div class="oo5" v-if="!isMobile"></div>
    </div>
    <div class="bubble1 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="./s1/bubble1.png" alt="bubble">
    </div>
    <div class="bubble2 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="0" >
      <img src="./s1/bubble4.png" alt="bubble">
    </div>
    <div class="bubble3 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble3.png" alt="bubble">
    </div>
    <div class="bubble4 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble1.png" alt="bubble">
    </div>
    <div class="bubble5 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble5.png" alt="bubble">
    </div>
    <div class="bubble6 absolute" v-if="!isMobile" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble5.png" alt="bubble">
    </div>
    <div class="bubble7 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble1.png" alt="bubble">
    </div>
    <div class="bubble8 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble1.png" alt="bubble">
    </div>
    <div class="b absolute" data-aos="zoom-in" data-aos-easing="ease-out-back">
      <img src="./s1/b.png" alt="多會微笑">
    </div>
		<img src="./s1/img.png" class="img absolute" alt="李多慧" data-aos="fade-left">
		<img src="./s1/name.svg" class="name absolute" alt="李多慧簽名" data-aos="fade-left">

    <div class="txt absolute" v-if="isMobile">
      <img src="./s1/logom.svg" alt="logo" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="0" class="logo">
      <img src="./s1/t1m.svg" alt="藝術水岸園區" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="200" class="t1">
    </div>
    <div class="txt absolute" v-else>
      <img src="./s1/logo.svg" alt="logo" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="0" class="logo">
      <img src="./s1/t1.svg" alt="藝術水岸園區" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="200" class="t1">
    </div>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s1 {
 // @apply relative w-full h-screen;
  // height: size(1080);
  min-height: size(960);
  max-height: size(1080);
  height: 100vh;
  font-size:size(40);
  color: #FFF;
  line-height: 1.5;
  // overflow: hidden;
  // background: #0005;


  .t0{position: absolute;width: 100%;top: -2.2vw;left: 0; 
	pointer-events: none;opacity: .32;z-index: 50;}
.lineicon{
  position: fixed;
  width: size(80);
  height: size(80);
  right: size(20);
  bottom: size(120);
  z-index: 99;
}
.bg1{position: absolute;top:0;left: 0;width: 100%;height: 100%;
  div{position: absolute;
    background: radial-gradient(ellipse at center,#F8D8A9 0%, #aad1b8dd 15%,#aad1b8aa 20%, #118fc700 60%);
    &::before{content:url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");width: 100%;display: block;}
  }
  .oo1{right: size(-370);top:size(-539);width:size(1058);
    top: calc(10% + #{size(-539 - 1080 * .1)});
  }
  .oo2{left : size(-620);top:size(0);width:size(1058);
    top: calc(50% + #{size(0 - 1080 * .5)});
  }
  .oo3{right: size(-822);top:size(319);width:size(1466);
    top: calc(50% + #{size(319 - 1080 * .5)});
  }
  .oo4{left: size(0);width:size(1300);
    top: calc(50% + #{size(460 - 1080 * .5)});
  }
  .oo5{left: size(590);width:size(1600);
    top: calc(50% + #{size(180 - 1080 * .5)});
  }
}
.bubble1{right: size(65);width:size(317);
  top: calc(10% + #{size(-128 - 1080 * .1)});
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:translate(0,10%);}
}
.bubble2{left:size(650);width:size(1040);
  top: calc(70% + #{size(730 - 1080 * .7)});
  img{width: 100%;
    transform: rotate(5deg)translateX(5%);
  animation: bubble 10s ease-in-out alternate infinite;
}
}
.bubble3{left:size(28);width:size(1020);
  top: calc(80% + #{size(820 - 1080 * .8)});
  img{width: 100%;
    transform: rotate(5deg)translateX(5%);
  animation: bubble 10s -2s ease-in-out alternate infinite;
}
}
.bubble4{left: size(-120);width:size(360);
  top: calc(80% + #{size(890 - 1080 * .8)});
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:translate(0,-10%);
 }
}
.bubble5{left: size(70);width:size(470);
  top: calc(80% + #{size(900 - 1080 * .8)});
  img{width: 100%;}
}
.bubble6{left: size(1070);width:size(430);
  top: calc(80% + #{size(860 - 1080 * .8)});
  img{width: 100%;}
}
.bubble7{left: size(1140);width:size(190);
  top: calc(90% + #{size(980 - 1080 * .9)});
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:translate(0,-10%);
 }
}
.bubble8{right: size(10);width:size(310);
  top: calc(70% + #{size(780 - 1080 * .7)});
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:translate(-3%,-5%);
 }
}


@keyframes bubble {
  to {
	transform:translate(0);
  }
}
.b{
  right: size(432);width:size(277);
  top: calc(70% + #{size(280 - 1080 * .70)});
  transform-origin: 200% 90%;
  img{
    width: 100%;
    animation: an_b 2s ease-in-out alternate infinite;
    transform: rotate(-6deg);
    transform-origin: 70% 110%;
  }
}
@keyframes an_b {
  to {
	transform:rotate(4deg);
  }
}
.img{
  right: size(229);width:size(453) ;
  top: calc(80% + #{size(340 - 1080 * .8)});
}
.name{
  right: size(50);width:size(240) ;
  top: calc(80% + #{size(865 - 1080 * .8)});
}

  .txt{
    left: size(275);
    top: calc(65% + #{size(300 - 1080 * .65)});
    width:size(882);
    .logo{
      width:100%;
    }
    .t1{
      width:100%;
      margin: 1em auto 0 auto;
    }
}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(580);
    max-height: sizem(750);
    font-size:sizem(23);

    .bg1{
      .oo1{right: sizem(-165);width:sizem(446);
        top: calc(25% + #{sizem(-220 - 604 * .25)});
        }
      .oo2{left: sizem(-73);width:sizem(446);
        top: calc(70% + #{sizem(315 - 604 * .7)});
      }
      .oo3{right: sizem(-270);width:sizem(510);
        top: calc(50% + #{sizem(370 - 604 * .5)});
      }
      .oo4{left: sizem(180);width:sizem(800);
        top: calc(50% + #{sizem(240 - 604 * .5)});
      }
    }
.bubble1{right: sizem(19);width:sizem(134);
  top: calc(25% + #{sizem(-48 - 604 * .25)});
}
.bubble2{left: sizem(160);width:sizem(396);
  top: calc(70% + #{sizem(410 - 604 * .7)});
}
.bubble3{left: sizem(-45);width:sizem(470);
  top: calc(90% + #{sizem(520 - 604 * .9)});
}
.bubble4{left: sizem(-90);width:sizem(150);
  top: calc(90% + #{sizem(410 - 604 * .9)});
}
.bubble5{left: sizem(-110);width:sizem(215);
  top: calc(90% + #{sizem(430 - 604 * .9)});
}
.bubble7{left: sizem(11);width:sizem(48);
  top: calc(90% + #{sizem(390 - 604 * .9)});
}
.bubble8{right: sizem(150);width:sizem(140);
  top: calc(90% + #{sizem(475 - 604 * .9)});
}
.b{
  right: sizem(57);width:sizem(105);
  top: calc(75% + #{sizem(140 - 604 * .75)});
 }
.img{
  right: sizem(13);width:sizem(174);
  top: calc(82% + #{sizem(210 - 604 * .82)});
}
.name{
  right: sizem(172);width:sizem(94);
  top: calc(90% + #{sizem(515 - 604 * .9)});
}
.txt{
  left: sizem(43);
  top: calc(50% + #{sizem(105 - 604 * .5)});
  width:sizem(145);
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