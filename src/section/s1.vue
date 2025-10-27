<template>
  <article class="s1 relative" id="s1">
    <!--  <img src="./s1/1.jpg" class="t0">
      <img src="./s1/0.jpg" class="t0">  -->
      <img src="./s1/ll.png" class="ll">
      <img src="./s1/img.png" class="img">
      <img src="./s1/o.png" class="o" data-aos="zoom-out" data-aos-delay="0">
      <img src="./s1/logo.png" class="logo" data-aos="zoom-out" data-aos-delay="0">
      <img src="./s1/t1.svg" class="t1" data-aos="zoom-out" data-aos-delay="200">
     
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;
    top:0px;left: 0;right: 0;margin: auto; pointer-events: none;z-index: 9;opacity: .50;}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}

  .s1 {
   // height:  sizem(604);
  //  height:sizem(667);
  /* 
  background: url("./s1/bg.jpg") no-repeat center center;
  background-size: cover;  */ 
  height:sizem(604);
  min-height: sizem(604);
    max-height: sizem(604);
  
  color: #fff;
  font-size: sizem(17);
  line-height: 1.3;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
 // background-image: url("./s1/bgs1.jpg");
 // background-position: 50% 90%;
 // background-size: cover;
    height:100vh;
    min-height: size(900);
    max-height: size(1080);
    padding: 0;
    font-size: size(40);
}
.ll{
  position: absolute;
  left: 0;right: 0;
  width:sizem(600);
  top:sizem(100);
@media screen and (min-width: 768px) {
  width:size(1860);
// top:size(85);
   top:calc(50% + #{size(85 - 1080 * .5)} );

}
}
.o{
  position: absolute;
  left: 0;right: 0;
  width:sizem(305);
  top:sizem(222);
@media screen and (min-width: 768px) {
  width:size(1860);
 //top:size(312);
   top:calc(50% + #{size(375 - 1080 * .5)} );

}
}
.logo{
  position: absolute;
  left: sizem(10);right: 0;
  width:sizem(360);
  top:sizem(137);
@media screen and (min-width: 768px) {
  left: size(40);
  width:size(1020);
  // top:size(205);
  top:calc(50% + #{size(205 - 1080 * .5)} );

}
}
.t1{
  position: absolute;
  left: 0;right: 0;
  width:sizem(305);
  top:sizem(285);
@media screen and (min-width: 768px) {
  width:size(696);
  // top:size(590);
  top:calc(50% + #{size(590 - 1080 * .5)} );

}
}
&::before{
content: "";
display: block;
position: absolute;
top: 0;left: 0;
width: 100%;height:sizem(6);
background: linear-gradient(90deg, #875414 0%, #C7A453 17.62%, #FFDB79 29.37%, #956E2A 64.56%, #7D4500 100.01%);
@media screen and (min-width: 768px) {
height:size(6);
}
}

.img{
  position: absolute;
  bottom: sizem(-50);
  left: -75%;right: 0;
  width: 250%;
@media screen and (min-width: 768px) {
  width: 100%;  
  left: 0;
  bottom: size(-249);
  bottom:calc(50% + #{size(-249 - 1080 * .5)} );
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