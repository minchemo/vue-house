s2<template>
  <article class="s2 relative" id="s2">
<!--   <picture>
      <source media="(max-width: 768px)" srcset="./s2/2m.jpg" />
      <img src="./s1/2.jpg" alt="" class="t0" />
    </picture>   -->
    
  <div class="hero-light-fx" aria-hidden="true">
    <span class="orb o1"></span>
    <span class="orb o2"></span>
    <span class="orb o3"></span>
    <span class="orb o4"></span>
  </div>
    <picture>
      <source media="(max-width: 768px)" srcset="./s2/bgm.jpg" />
      <img src="./s2/bg.jpg" alt="" class="bg" />
    </picture>
      <img src="./s2/t1.svg" alt="" class="t1"  data-aos="fade-up" data-aos-delay="0" />
<div class="t2"  data-aos="fade-up" data-aos-delay="200">住的是城心，佇的是自己<br><br>
美好的城市機能相間<br>
號召專屬的生活節奏回歸<br><br>
昌益在這裡，開啟鬆弛時光的邀約
      <div class="thread"></div></div>


      <button @click="scrollTo('#order')" class="scroll-down"></button>

    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.hero-light-fx {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;z-index:3;
}

.orb {
  position: absolute;
  bottom: -60px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  mix-blend-mode: soft-light;
  background: radial-gradient(
    circle,
    rgba(255, 224, 156, 0.7) 0%,
    rgba(255, 230, 190, 0.2) 45%,
    rgba(255, 230, 190, 0) 70%
  );
  opacity: 0;
}

.o1 { left: 15%; width: sizem(240);  animation: floatUp 9s  ease-in infinite; animation-delay: 0s;
  @media screen and (min-width: 768px) {left: 15%;width: size(240);}}
.o2 { left: 35%; width: sizem(360);  animation: floatUp 12s ease-in infinite; animation-delay: 3s; 
  @media screen and (min-width: 768px) {left: 45%;width: size(360);}}
.o3 { left: -10%; width: sizem(200);  animation: floatUp 10s ease-in infinite; animation-delay: 6s;
  @media screen and (min-width: 768px) {left: 70%;width: size(200);} }
.o4 { left: 50%; width: sizem(160);  animation: floatUp 11s ease-in infinite; animation-delay: 8s; 
  @media screen and (min-width: 768px) {left: 30%;width: size(160);}}

@keyframes floatUp {
  0%   { transform: translateY(0) translateX(0); opacity: 0; }
  15%  { opacity: 0.8; }
  50%  { transform: translateY(-150%) translateX(20%); }
  85%  { opacity: 0.4; }
  100% { transform: translateY(-320%) translateX(-15%); opacity: 0; }
}
.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: 9;
  opacity: .2;
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: sizem(10);
  background: #EB6120;
 // height: sizem(667);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    font-size: size(22);
    justify-content: space-between;
    padding: 0;
    height: 100vh;
    min-height: size(900);
    max-height: size(1060);

  }

  .bg {
    width: 100%;
    height: 100%;
  // position: absolute;
    bottom: sizem(-100);
    left: sizem(0);

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;

    }

    @media screen and (min-width: 768px) {
      width: 100%;
      top: 0;
     // bottom: calc(30% + #{size(-70 - 1080 * .3)});
      right: 0;
      left: auto;
    }

  }


  .t1 {
    position: absolute;
    top: sizem(485);
   //right: 0;
    left:sizem(35);
    margin: auto;
    width: sizem(220);

    @media screen and (min-width: 768px) {
      top: size(277);
     // top: calc(50% + #{size(238 - 1080 * .50)});
      margin: 0;
      left: size(285);
     // left: auto;
      width: size(590);

    }
  }
  .t2{
    position: absolute;
    top: sizem(520);
    left:sizem(35);
    width: sizem(200);
    color: #fff;
    line-height: 1.4;
    font-weight: 400;
    letter-spacing: 0.05em;

    @media screen and (min-width: 768px) {
      top: size(402);
     // top: calc(50% + #{size(569 - 1080 * .50)});
      margin: 0;
      left: size(285);
    line-height: 1.65;
     // left: auto;
      width: size(480);

      img{
        width: 100%;
      }
    }
  .thread{
    position: absolute;
    display: none;

    @media screen and (min-width: 768px) {
    display: block;
      bottom: -7em;
      margin: 0 0;
      left: -.1em;
      width: 32.5em;
      height: 5.5em;

      border: 1px solid #fff;
      border-width: 0px 0px 1px 1px;

    }
  }
  }
  .slogo{
    position: absolute;
    top: sizem(310);
    right: 0;
    left: 0;
    margin: auto;
    width: sizem(244);

    @media screen and (min-width: 768px) {
      top: size(810);
      top: calc(50% + #{size(810 - 1080 * .50)});
      margin: 0;
      right: size(468);
      left: auto;
      width: size(244);

    }
  }
  
  .scroll-down {
  position: absolute;
  right: 1em;
  bottom: 1em;
  width: 2em;
  height:2em;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before{content: "";width: 1em; height: 1em;border: 0px solid #fff;
  border-width: 0 3px 3px 0;
transform: rotate(45deg);
opacity: .7;
}
  &:hover:before {
opacity: 1;
  }
}


}
</style>
<script setup>
import info from "@/info"
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
const canPlayWebP = document.createElement('canvas')
  .toDataURL('image/webp')
  .startsWith('data:image/webp')

</script>