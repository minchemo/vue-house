<template>
  <article class="s1" id="s1">
  <!--  
    <img src="./s1/logo.svg" class="logo" alt="img" srcset="">
    <img class="t0 events-n" src="./s1/pc.jpg" alt="" srcset="">
    <img class="t0 events-n" src="./s1/mo.jpg" alt="" srcset="">
    -->
    <div class="bg absolute">
    <img src="./s1/bg1m.jpg" alt="bg" srcset="" v-if="isMobile">
    <img src="./s1/bg1.jpg" alt="bg" srcset="" v-else></div>
    <div class="w">
    <img src="./s1/2.webp" alt="水" srcset=""></div>
    <img src="./s1/t1.svg" class="t1" alt="醇萃 為了相聚" srcset="" data-aos="zoom-out-down" data-aos-delay="0" data-aos-duration="1500">
    <img src="./s1/img.webp" class="img" alt="茶具" srcset="" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="1500">
    <img src="./s1/t2.svg" class="t2" alt="竹北高鐵畔 #菁英的新團員學" srcset="" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500">
    <div class="t3" data-aos="zoom-out" data-aos-delay="600" data-aos-duration="1500">
      <span>即</span>
      <span>將</span>
      <span>相</span>
      <span>見</span>
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
      <div class="line5"></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
     transform: translateY(0);
  }
}

.s1 {  
  @apply relative w-full h-screen text-[#fff];
  min-height: size(900);
  max-height: size(1070);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  // overflow: hidden;
  // z-index: 2;
  img.t0{position: absolute;top:0;
    width: 100%;opacity: .3;z-index: 2;height: auto;
  }
  .bg{position: absolute;width: 100%;bottom: 0;left: 0%;height: 100%;
   img{width: 100%;height: 100%;object-fit: cover;}
  }
@keyframes w {
  0% {
     transform:scale(0.5);opacity: 0;
  }
  60% {
     transform:scale(0.5);opacity: 0;
  }
  80%{
     transform:scale(1.3);opacity: .5;}
  100% {
     transform:scale(2);opacity: 0;
  }
}
  .w{
    @apply absolute;
  z-index: 3; height: 38.9%;
  bottom: 24%;left: auto;right: auto;
  //background: #0006;
  border-radius: 50%;
  mix-blend-mode: soft-light;
  overflow: hidden;
  img{height: 100%;position: relative;top: 10%;
  animation: w 5s linear infinite;
  }
}
  .t1{
    @apply relative;
  z-index: 5; 
    height: 46.5%;top:  -19.5%;
}
.img{
      @apply absolute;
    height: 23%;
    bottom: 31%;
    left: 47.5%;
    }
.t2{
  @apply absolute;bottom: 4%;left: 0;right: 0;margin: auto;height: 3.75%;
  z-index: 5; 
}
.t3{
  @apply absolute;top: 0;left: 0;width: 100%;height:99%;
  font-size:size(145);
  font-weight:100;
  line-height: 1.25;
  z-index: 3; 
span{
  @apply absolute;
  &:nth-child(1){top: 0;left: .2em;}
  &:nth-child(2){top: 0;right: .2em;}
  &:nth-child(3){bottom: 0;left: .2em;}
  &:nth-child(4){bottom: 0;right: .2em;}
}
div{
  @apply absolute;
  background: #FFF;
}
$line-pa:size(50);//線離邊間距
$line-tb:size(230);//上下線跟文字距離
$line-lr:size(200);//左右線跟文字距離
.line1{height: 1px;width: calc(100% - $line-tb * 2);left: $line-tb;top:$line-pa;}
.line2{width: 1px;height:calc(100% - $line-lr * 2);top: $line-lr;left:$line-pa;}
.line3{width: 1px;height: calc(100% - $line-lr * 2);top: $line-lr;right: $line-pa;}
.line4{height: 1px;width: calc(50% - $line-tb * 2 - 5vw);left: $line-tb;bottom: $line-pa;}
.line5{height: 1px;width: calc(50% - $line-tb * 2 - 5vw);right: $line-tb;bottom: $line-pa;}
}

}
/* PC
@media screen and (min-width: 767px) {
  .s1 {



  }
}
   */
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    font-size:sizem(15);
   &::after{
  @apply absolute;
  content:"";
  display: block;top: 0;left: 0;height: sizem(225);width: 100%;background: linear-gradient(180deg, rgba(239, 178, 135, 0.50) 0%, rgba(250, 214, 189, 0.00) 100%);mix-blend-mode: multiply;
  z-index: 2;
}
  .bg{height:auto;//opacity: .4;
   img{height: auto;}
  }
  .w{
 height: auto;width: sizem(240);
  bottom: sizem(110);left: auto;right: auto;
  img{height:auto;width: 100%;
  }
}
  
  

  .t1{
    width:sizem(35);top: sizem(-82);height: auto;
  }
.img{
      @apply absolute;
    height:  auto;
    bottom: sizem(156);
    width: sizem(106);
    left: calc(50% - #{sizem(31)});
    }
  .t2{
    bottom:sizem(15);height: auto;
    width:sizem(230);
  }
  .t3{
    font-size:sizem(55);
$line-pa:sizem(23);//線離邊間距
$line-tb:sizem(80);//上下線跟文字距離
$line-lr:sizem(80);//左右線跟文字距離
.line1{height: 1px;width: calc(100% - $line-tb * 2);left: $line-tb;top:$line-pa;}
.line2{width: 1px;height:calc(100% - $line-lr * 2);top: $line-lr;left:$line-pa;}
.line3{width: 1px;height: calc(100% - $line-lr * 2);top: $line-lr;right: $line-pa;}
.line4,
.line5{display: none;}
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