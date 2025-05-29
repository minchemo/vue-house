<template>
  <article class="s1 relative" id="s1">
    <!-- <img src="./s1/mo.jpg" class="t0">
     <img src="./s1/pc.jpg" class="t0"> -->
    <img src="./s1/logooo.png" class="logooo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/logoen.svg" class="logot" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/t1.svg" class="t1" data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/35.svg" class="t2" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t3.svg" class="t3" data-aos="zoom-in" data-aos-delay="200">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 160%;top:0px;left: -30%; pointer-events: none;z-index: 9;opacity: .6;}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
  .s1 {
  // height:calc(100vh - 63px);
  height: sizem(667);
  background: url("./s1/bg.jpg") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  color: #fff;
  font-size: sizem(32);
  line-height: 1.3;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
    height: size(2130);
    padding: 0;
    font-size: size(56);
}
.logooo{
  width:sizem(253);
  margin: sizem(40) auto sizem(14);
}
.logot{
  width:sizem(245);
  margin: sizem(0) auto sizem(30) auto;
}
.t1{
  width:sizem(210);
  margin: 0 auto sizem(50);
}
.t2{
  width:sizem(135);
  margin: 0 auto sizem(20);
  background: url("./s1/35.webp");
  background-size: cover;
}
.t3{
  width:sizem(226);
  margin: 0 auto sizem(0);
}
@media screen and (min-width: 768px) {
.logooo{
  width:size(804);
  margin: size(120) auto size(50);
}
.logot{
  width:size(760);
  margin: size(0) auto size(100) auto;
}
.t1{
  width:size(580);
  margin: 0 auto size(260);
}
.t2{
  width:size(420);
  margin: 0 auto size(60);
}
.t3{
  width:size(720);
  margin: 0 auto size(35);
}

}

/*
.tree{
  position: absolute;bottom: 0;left:calc(50% - #{sizem(850 * .5)});width: sizem(850); 
  transform: skewX(-5deg);
  transform-origin: 50% 100%;
  animation: an 5s linear alternate infinite;
  filter:drop-shadow(0 0 .3vw #fff);
  @media screen and (min-width: 768px) {
    bottom: calc(20% + #{size(0 - 1080 * .2)});
    left:calc(50% - #{size(2280 * .5)});
    width: size(2280); 
  }
}

.t1{font-weight: 900;}
.hr{height: 1.5em;background: #fff;width: 1px;margin: .3em auto .4em auto;
}
.t2{width: 8.5em;margin: 0 auto 1em;position: relative;z-index: 5;

  @media screen and (min-width: 768px) {margin: 0 auto 2.3em;}
}

  .bg{position: absolute;
    top:0;left:0;
    height: 100%; transform: translateX(calc(-100% + 100vw));
    animation: an 20s linear alternate infinite;
    @media screen and (min-width: 768px) {
      height: auto;width:size(2300);top:calc(50% + #{size(0 - 1080 * .5)});
    }
  }
    */
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