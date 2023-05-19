<template>
  <article class="s1" id="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset=""> -->
    <div class="bg" v-if="!$isMobile()" data-aos="fade" data-aos-delay="1200"></div>
    <img src="./s1/t1.svg" class="t1" alt="" data-aos="zoom-out-down" />
    <div class="t2" data-aos="zoom-out-down" data-aos-delay="300"><img src="./s1/t2.svg" alt="" /><br v-if="$isMobile()" /><img src="./s1/t3.svg" alt="" /></div>
    <div data-aos="zoom-out" data-aos-delay="600" class="img"><img src="./s1/img.png" alt="" /> </div> 
    <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(43);

   .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .2;z-index: 2;}
   .bg{position: absolute;top: 0;left: 0;width: 100%;height: 100%;
mix-blend-mode: screen;
  &::before,&::after{content: "";display: block;height: size(960);width: size(960);position: absolute;bottom: 0;}
  &::before{
mix-blend-mode: screen;background: radial-gradient(80% 80% at 0% 108.75%, #FF3EA1CC 0%, #FF3EA100 99.97%);left: 0;}
  &::after{
mix-blend-mode: screen;background: radial-gradient(80% 80% at 100% 108.75%, #713effCC 0%, #ff3eff44 65%, #FF3EA100 99.97%);right: 0;}
  }
   .t1{width: size(409);margin-bottom: .7em;}
   .t2{text-align: center;
    img{display: inline-block; height: 1em;margin: 0 .25em;}}
    .img{width:size(360);margin: 1.2em auto .3em;padding: 0 0 0 size(45);
      img{width: 100%;
      transform-origin:90% 90%;
      animation: an 3s ease-in-out infinite alternate;
      transform: rotate(6deg);
    }
    }
    @keyframes an {
      to{transform: rotate(0);}
}
   .slide{margin:auto;text-align: center;position: absolute;bottom:2em;left: auto;right: auto;
    color: #fff;font-size:12px;
    font-weight: 300;
    letter-spacing: .2em;z-index: 2;
    cursor: pointer;
  &::before{
    content: "";
    border:2px solid #FF3EA1;width: 3.5em; height: 3.5em;display: block;
    border-color: #0000 #0000 #FF3EA1 #FF3EA1;
    transform: rotate(-45deg);margin: auto auto 1em auto;
     animation: an2 1s ease-in-out infinite alternate ;
  }}
    @keyframes an2 {
      to{transform: rotate(-45deg) translate(20%,-20%);}
}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(625);
    max-height: sizem(770);
    font-size:sizem(30);
   .t1{width: sizem(297);margin-bottom: .4em;}
    .t2{
    line-height: 1.3;}
    .img{width:auto;margin: 1.2em auto 0em;padding: 0 sizem(7) 0 0;height:calc(48vh - 10vw);
      max-height:sizem(375);min-height:sizem(280);
      img{width: auto;height: 100%;}
    }

  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>