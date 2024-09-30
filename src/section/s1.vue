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
    </div>
    <div class="bubble1 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="./s1/bubble1.png" alt="bubble">
    </div>
    <div class="bubble2 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="0" >
      <img src="./s1/bubble1.png" alt="bubble">
    </div>
    <div class="bubble3 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <img src="./s1/bubble2.png" alt="bubble">
    </div>
    <div class="b absolute" data-aos="zoom-in" data-aos-easing="ease-out-back">
		<img src="./s1/b.png" alt="多會微笑">
  </div>
		<img src="./s1/img.png" class="img absolute" alt="李多慧" data-aos="fade-left">
		<img src="./s1/name.svg" class="name absolute" alt="李多慧簽名" data-aos="fade-left">

    <div class="txt absolute">
      <img src="./s1/logo.svg" alt="logo" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="0" class="logo">
      <img src="./s1/t1.svg" alt="藝術水岸園區" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="200" class="t1">
      <div class="t2" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="400">
        <span>早｜鳥｜預｜約</span>
      <img src="./s1/t2.svg" alt="05-5660588">
      </div>
    </div>
      <img src="./s1/t3.svg" alt="Coming_Soon" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="600" class="t3 absolute">
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s1 {
 // @apply relative w-full h-screen;
  // height: size(1080);
  min-height: size(900);
  max-height: size(1080);
  height: 100vh;
  font-size:size(40);
  color: #FFF;
  line-height: 1.5;
  // background: #0005;


  .t0{position: absolute;width: 100%;top: -2.2vw;left: 0; 
	pointer-events: none;opacity: .0;z-index: 50;}
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
    background: radial-gradient(ellipse at center,#CADFB6 2%, #aad1b8d4 11.4%, #118fc700 60%);
    &::before{content:url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");width: 100%;display: block;}
  }
  .oo1{right: size(-370);top:size(-539);width:size(1058);
    top: calc(10% + #{size(-539 - 1080 * .1)});
  }
  .oo2{left : size(-550);top:size(0);width:size(1058);
    top: calc(50% + #{size(0 - 1080 * .5)});
  }
  .oo3{right: size(-822);top:size(319);width:size(1466);
    top: calc(50% + #{size(319 - 1080 * .5)});
  }
  .oo4{right: size(-1196);top:size(887);width:size(1466);
    top: calc(50% + #{size(887 - 1080 * .5)});
  }
}
.bubble1{right: size(65);top:size(-128);width:size(317);
  top: calc(10% + #{size(-128 - 1080 * .1)});
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:translate(0,10%);}
}
.bubble2{left: size(-90);top:size(550);width:size(255);
  top: calc(50% + #{size(550 - 1080 * .5)});
  img{width: 100%;
    animation: bubble 4s ease-in-out alternate infinite;
    transform:translate(0,-10%);}
}
.bubble3{right: size(-83);bottom:size(-230);width:size(190);
  bottom: calc(50% + #{size(-230 - 1080 * .5)});
  img{width: 100%;
    animation: bubble 4s -2s ease-in-out alternate infinite;
    transform:translate(0,20%);}
}
@keyframes bubble {
  to {
	transform:translate(0);
  }
}
.b{
  right: size(432);top:size(334);width:size(277);
  top: calc(80% + #{size(334 - 1080 * .8)});
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
  right: size(229);top:size(395);width:size(453) ;
  top: calc(80% + #{size(395 - 1080 * .8)});
}
.name{
  right: size(50);top:size(905);width:size(240) ;
  top: calc(80% + #{size(905 - 1080 * .8)});
}

  .txt{
    left: size(275);top:size(240);
    top: calc(60% + #{size(240 - 1080 * .6)});
    //text-align: center;
    width:size(900);
    .logo{
      width:size(882);
    }
    .t1{
      width:size(882);
      margin: 1em auto .9em auto;
    }
    .t2{
      width: 100%;
      font-weight: 700;
      letter-spacing: .07em;
      display: flex;
      span{margin: auto auto .3em .2em;}
      img{width:size(553);}
    }
}
    .t3{
      left: size(275);bottom:size(70);
      bottom: calc(30% + #{size(70 - 1080 * .3)});
      width:size(637);
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
    font-size:sizem(15);

    .bg1{
  .oo1{right: sizem(-165);top:sizem(-220);width:sizem(446);
    top: calc(25% + #{sizem(-220 - 604 * .25)});
    }
  .oo2{left : sizem(-217);top:sizem(207);width:sizem(446);
    top: calc(70% + #{sizem(207 - 604 * .7)});
  }
  .oo3{right: sizem(-297);top:sizem(307);width:sizem(510);
    top: calc(50% + #{sizem(307 - 604 * .5)});
  }
  .oo4{right: sizem(-550);top:sizem(490);width:sizem(620);
    top: calc(50% + #{sizem(490 - 604 * .5)});
  }
}
.bubble1{right: sizem(19);top:sizem(-48);width:sizem(134);
  top: calc(25% + #{sizem(-48 - 604 * .25)});
}
.bubble2{left: sizem(-24);top:sizem(438);width:sizem(108);
  top: calc(70% + #{sizem(438 - 604 * .7)});
}
.bubble3{right: sizem(-40);bottom:sizem(-115);width:sizem(66);
  bottom: calc(10% + #{sizem(-115 - 604 * .1)});
}
.b{
  right: sizem(57);top:sizem(265);width:sizem(103);
  top: calc(75% + #{sizem(265 - 604 * .75)});
 }
.img{
  right: sizem(13);top:sizem(329);width:sizem(169);
  top: calc(82% + #{sizem(329 - 604 * .82)});
}
.name{
  right: sizem(171);top:sizem(539);width:sizem(89);
  top: calc(90% + #{sizem(539 - 604 * .9)});
}

.txt{
  left: 0;top:sizem(105);right: 0;margin: auto;
  top: calc(50% + #{sizem(105 - 604 * .5)});
  //text-align: center;
  width:sizem(311);
  .logo{
    width:sizem(311);
  }
  .t1{
    width:sizem(311);
    margin: 1em auto 2em auto;
  }
  .t2{
    flex-direction:column;
    img{width:sizem(161);
    margin: 0;}
  }
}
  .t3{
    left: sizem(34);bottom:sizem(200);
    bottom: calc(30% + #{sizem(200 - 604 * .3)});
    width:sizem(187);
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