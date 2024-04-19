<template>
  <article class="s1" id="s1">
  <!--  
    <img src="./s1/logo.svg" class="logo" alt="img" srcset="">
    -->
    <img class="t0" src="./s1/pc.jpg" alt="" srcset="">
    <img src="./s1/bg1.jpg" class="bg" alt="bg" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
     transform: translateY(0);
  }
}


.s1 {
  
  @apply relative w-full h-screen text-[#fff];
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  background: #E5005C;
 // background: #994b6a;
  .t0{position: absolute;top: 0;
    width: 100%;opacity: .2;
  }
  .img{position: absolute;
    left:size(270);width:size(438);
  top:calc(85% + #{size(490 - 1080 * .85)});
}
  .tl{position: absolute;
  top: size(240);left:size(249);
  top:calc(80% + #{size(240 - 1080 * .8)});
    font-size:size(82);
  div{
  top: 2.44em;left: 0.43em;
  transform: translateY(-100%);
  animation: an 3s alternate ease-in-out infinite;
  animation-delay: 0.5s;
    &:nth-child(1){
    font-size:0.85em;
    top: 1.64em;left:2.91em;
    animation-delay: 1.5s;
}
    &:nth-child(2){
    font-size:0.76em;
  top: 0;left:2.1em;
animation-delay: 0s;}
    &:nth-child(3){
    font-size:0.62em;
  top: 1.31em;left:0;
animation-delay: 1s;}
  }
  }
  .br{position: absolute;
  bottom: size(40);right:size(25);
    font-size:size(100);
  div{
    bottom:1.82em;right:0.6em;
  transform: translateY(-100%);
  animation: an 3s alternate ease-in-out infinite;
animation-delay: 0s;
    &:nth-child(1){
    font-size:0.58em;
    bottom: 0;right:0;
animation-delay: 1.5s;}
    &:nth-child(2){
    font-size:0.5em;
    bottom:2.06em;right:1.4em;
animation-delay: 1s;}
    &:nth-child(3){
    font-size:0.84em;
    bottom:0.18em;right:1.73em;
animation-delay: 0.5s;}
  }
  }
  .style{position: absolute;
    width:size(500);
    height:size(16);
    left:size(590);
  top:calc(85% + #{size(950 - 1080 * .85)});
  background: linear-gradient(90deg, #D96816 0%, #90C21F 33.3%, #3CACC8 33.4%, #E9E535 66.5%, #E77C57 66.6%, #DA1982 74.15%, #B81F85 100%);
  }
  .txt{margin: auto size(335) auto auto;text-align: center;
    width: auto;
.logo{width: size(590);}
.t1{font-weight: 900;
  font-size:size(97);
letter-spacing: 0.05em;margin: 0.08em 0 0 0;}
.t2{font-weight: 900;
  font-size:size(63);
letter-spacing: 0.02em;position:relative;
vertical-align: middle;margin: -.7em 0 -0.1em 0;
i{letter-spacing: -0.03em;font-style: normal;}
span{font-size:1.54em;letter-spacing:-0.05em;color: #F6E761;line-height: 1;display: inline-block;position:relative;top: 0.15em;margin: 0 0.08em 0 0;}
}
.t3{
  font-weight:700;font-size:size(54);letter-spacing: -0.01em;
  span{border: 1px solid currentColor;padding: 0 0.6em 0.1em 0.6em;font-size:0.518em;vertical-align: middle; margin: 0 0.4em 0 0;position: relative;top: -.2em;}
}
  }

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(600);
    max-height: sizem(812);
    font-size:sizem(15);
  .img{
    left:sizem(95);width:sizem(186);
    // top:sizem(409);
    top:calc(88% + #{sizem(409 - 667 * .88)});
}
  .tl{
    left:sizem(18);
    font-size:sizem(35);
    top:calc(50% + #{sizem(360 - 667 * .50)});
  }
  .br{
  bottom: sizem(15);right:sizem(11);
    font-size:sizem(35);
  }
  .style{
    width:100%;
    height:sizem(12);
    left:0;
  top:auto;
  bottom: 0;
  }



    .txt{position: absolute;top:sizem(65);width: 100%;left: 0;
    top:calc(40% + #{sizem(65 - 667 * .40)});
      .logo{width: sizem(278);}
      .t1{
        font-size:sizem(44);}
      .t2{
        font-size:sizem(29);}
      .t3{font-size:sizem(24.5);margin: auto auto 9em auto;}
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