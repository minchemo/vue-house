<template>
  <article class="s1" id="s1">
 <!--  <img src="./s1/mo.jpg" class="t0">  -->
    <img src="./s1/light.png" class="light absolute" data-aos="zoom-in" data-aos-delay="500">
    <div class="t1 absolute" data-aos="fade" data-aos-delay="0">逐鹿新光田<br />運動公園首排</div>
    <div class="t2 absolute" data-aos="fade" data-aos-delay="0"><span>近距中科 全雙衛<span>2-3</span>房</span></div>
    <img src="./s1/coming.svg" class="coming absolute" data-aos="zoom-in" data-aos-delay="1000">
   <img src="./s1/logo.svg" class="logo absolute" data-aos="fade" data-aos-delay="1200">
    <div class="t3 absolute" data-aos="fade" data-aos-delay="1200">｜新案即將公開｜</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
/*
@keyframes op {
  50% {
     opacity: 0;
  }
}
 .bgh{position: absolute;width: 100%;height:100%;top:0;left: 0;object-fit: cover;
}
 .gif{position: absolute;width:100%;height:70%;bottom:0;left: 0;
mix-blend-mode: overlay;opacity: .8;
}
*/
.s1 {
  @apply relative w-full h-screen text-[#000];
  min-height: size(1080);
  max-height: size(1080);
  font-size:size(36);
  background:linear-gradient(-90deg, #FFF000 0%, #FBD600 1%, #F5AE01 3%, #F18E02 5%, #ED7503 7%, #EB6303 10%, #E95803 12%, #E95504 15%, #E95504 35%, #EC6B03 44%, #F4A601 64%, #FFF000 86%);
  //padding: size(20);

.t0{position: absolute;width: 100%;top:0vw;left: 0;
  pointer-events: none;z-index: 10;opacity: .2;}
.light{width:size(1305);bottom: 0;right: size(-205);}
.t1{font-size: size(146);font-weight: 900;top: size(87);left: size(95);line-height: 1.18;transform: translateX(-20vw);}
.t2{font-size: size(92);font-weight: 900;
  top: size(453);left: size(95);line-height: 1.18;transform: translateX(-20vw);
  span{
    transform: scaleX(.93);transform-origin: 0 0;display: inline-block;
    span{
      display: inline-block;color: #C30D23;font-size:1.25em;vertical-align: -0.1em;transform: scaleY(.93);transform-origin: 0 0;
    }
  }
}
.coming{width:size(703);top:size(280);right: size(100);
  filter: drop-shadow(size(8) size(6) 0 #C30D23);
}
.logo{width:size(466);top:size(750);left: size(124);transform: translateX(-20vw);
}
.t3{
  color: #fff;
  font-size: size(120);font-weight: 500;top: size(790);left: size(620);
  line-height: 1.18;letter-spacing: .05em;
  text-shadow:7px 7px 10px #000C;transform: translateX(-20vw);
}
/*
.bg{overflow: hidden;width: 100%;height: 100%;
  .bg1{width: 100%;height: 113%;object-fit: cover;
  transform: skewY(-3deg);transform-origin: 0 0%;
  animation: ann 3s ease-in-out alternate infinite;
  }
}
.img{bottom:0;right:size(70);height: size(1020);max-height: 99%;}
.logo{top:size(310);left:size(160);width:size(878);top: calc(50% + #{size(310-1080*.5)});}
.en{top:size(40);right:size(40);width:size(18);}

*/
}
@keyframes ann {
  to {
    transform: translateX(0%);
  }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


 // .gif{width:100%;height:70%;left: 0;}

  .s1 {
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(15);
    padding: sizem(10);
    background:linear-gradient(0deg, #FFF000 6%, #E95504 35%, #E95504 58%, #EA5E03 62%, #EE7903 69%, #F4A501 77%, #FCE000 87%, #FFF000 89%);
    
.light{width:sizem(455);bottom:auto;right: sizem(-40);top: sizem(83);}

.t1{font-size: sizem(51);top: sizem(45);left: 0;right: 0;transform: translate(0,-5vw);text-align: center;}

.t2{font-size: sizem(30);font-weight: 900;text-align: center;
  top: sizem(543);left: 0;right: 0;transform: translate(0,-5vw);
  
  span{transform-origin: 50% 0;
    span{
      transform-origin: 50% 0;
    }
  }
}
.coming{width:sizem(250);top:sizem(255);left: 0;right: 0;margin: auto;
  filter: drop-shadow(sizem(3) sizem(2) 0 #C30D23);
}
.logo{width:sizem(162);top:sizem(443);left: 0;right: 0;margin: auto;
  transform: translate(0,-5vw);
}
.t3{
  color: #C30D23;
  font-size: sizem(36);top: sizem(590);left: 0;right: 0;text-align: center;
  text-shadow:none;transform: translate(0,-5vw);
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