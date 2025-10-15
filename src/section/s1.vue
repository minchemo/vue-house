<template>
  <article class="s1 relative" id="s1">
    <!--  <img src="./s1/1.jpg" class="t0">  -->
      <div class="bg">
        <div><img src="./s1/bg1.jpg"><img src="./s1/bg1.jpg"></div>
      </div>
    <img src="./s1/slogo.svg" class="slogo" alt="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/logo.svg" class="logo" alt="logo" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/t1.svg" class="t1" alt="t1" data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/t2.svg" class="t2" alt="t2" data-aos="zoom-in" data-aos-delay="600">
    <img src="./s1/en.svg" class="en" alt="en" data-aos-offset="-100" data-aos="fade-up" data-aos-delay="0" >
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
  /*  */  
  background:#BAF0FC;// url("./s1/bgs1.jpg") no-repeat center bottom;
  // background-size: auto sizem(485);
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
    min-height: size(910);
    max-height: size(1186);
    padding: 0;
    font-size: size(40);
}
.bg{position: relative;height: 100%;
> div{position: absolute;height: 100%;top: 0;left: 0;
  transform: translateX(-50%);
  white-space:nowrap;
  animation: an 50s linear infinite reverse;
  img{height: 100%;}
}
&::after{content: "";display: block;
  position: absolute;width: 100%;height: 100%;
  left:0;right:0;z-index: 2;
  background:url("./s1/2.webp") no-repeat center bottom;
  background-size: auto sizem(485);
@media screen and (min-width: 768px) {
 background-position: 50% 90%;
 background-size: cover;

}

}

}
.slogo,
.logo,
.t1,
.t2,
.en{
  position: absolute;
  margin: auto;
  left:0;right:0;z-index: 5;
}
.slogo{
  width:sizem(156);
  top:sizem(45);
}
.logo{
  width:sizem(310);
  top:sizem(137);
}
.t1{
  width:sizem(308);
  top:sizem(290);
}
.t2{
  width:sizem(265);
  top:sizem(333);
}
.en{
  width:100%;
  bottom:sizem(0);
  z-index: 5;
}
@media screen and (min-width: 768px) {
  .slogo{
    width:size(250);
  top:calc(20% + #{size(70 - 1186 * .20)});
  }
  .logo{
    width:size(490);
  top:calc(28% + #{size(220 - 1186 * .28)});
  }
  .t1{
    width:size(509);
  top:calc(35% + #{size(465 - 1186 * .35)});
  }
  .t2{
    width:size(420);
  top:calc(35% + #{size(540 - 1186 * .35)});
  }
  .en{
    width:size(1753);
    bottom:size(0);
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