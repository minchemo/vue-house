<template>
  <article class="s1 relative" id="s1">
    <!--  <img src="./s1/pc.jpg" class="t0">  -->
    <img src="./s1/logo.svg" class="logo" alt="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/t1.svg" class="t1" alt="t1" data-aos="zoom-in" data-aos-delay="200">
    <img src="./s1/t2.svg" class="t2" alt="t2" data-aos="zoom-in" data-aos-delay="400">
    <img src="./s1/en.svg" class="en" alt="en" data-aos="fade-up" data-aos-delay="0" >
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .t0{position: absolute;width: 100%;
    top:-0px;left: 0; pointer-events: none;z-index: 9;opacity: .10;}

  .s1 {
   // height:  sizem(604);
  //  height:sizem(667);
  /*  */  
  background:#BAF0FC url("./s1/bgs1.jpg") no-repeat center bottom;
  background-size: auto sizem(485);
  height:sizem(604);
  min-height: sizem(604);
    max-height: sizem(604);
  
  color: #fff;
  font-size: sizem(17);
  line-height: 1.3;
 // overflow: hidden;
  
@media screen and (min-width: 768px) {
 // background-image: url("./s1/bgs1.jpg");
 background-position: 50% 90%;
  background-size: cover;
    height:100vh;
    min-height: size(900);
    max-height: size(1186);
    padding: 0;
    font-size: size(40);
}
.logo,
.t1,
.t2,
.en{
  position: absolute;
  margin: auto;
  left:0;right:0;
}
.logo{
  width:sizem(170);
  top:sizem(120);
}
.t1{
  width:sizem(308);
  top:sizem(238);
}
.t2{
  width:sizem(245);
  top:sizem(285);
}
.en{
  width:100%;
  bottom:sizem(0);
}
@media screen and (min-width: 768px) {
  .logo{
    width:size(335);
    top:size(138);
  top:calc(25% + #{size(138 - 1186 * .25)});
  }
  .t1{
    width:size(609);
    top:size(371);
  top:calc(45% + #{size(371 - 1186 * .45)});
  }
  .t2{
    width:size(484);
    top:size(464);
  top:calc(45% + #{size(464 - 1186 * .45)});
  }
  .en{
    width:size(1753);
    bottom:size(0);
  }
}

/*
.t1{
  position: absolute;
  left:0;right: 0;margin: auto;
  display: flex;align-items:center;
  top:sizem(25);
  width: sizem(305);

  font-weight: 700;
  font-size: 1.2em;
  letter-spacing: 0.06em;
  margin-bottom: 1.05em;
  .line{flex: 1;display: block;border-top: 1px solid #FFF;height: 1px;margin: 0 .5em;}
@media screen and (min-width: 768px) {
  top:calc(30% + #{size(70 - 1080 * .3)});
  width: size(1685);
  letter-spacing: .2em;

}
}

.txt{
  position: absolute;
  display: flex;
  flex-direction:column;
  align-items:center;
  left:0;right: 0;margin: auto;
  top:sizem(89);
  width:sizem(260);
 
  @media screen and (min-width: 768px) {   
  left: size(565);
  top:calc(50% + #{size(265 - 1080 * .5)});
  width: size(783);
    
  }
}
.logo{
  width:sizem(62);
  @media screen and (min-width: 768px) {   
  width:100%;
  }
}
.t2{font-weight: 900; letter-spacing: 0.01em;
  font-size: 1.25em;margin: 1.1em 0 0em 0em;
  @media screen and (min-width: 768px) {   
font-size: 1.65em;margin: .62em 0 0em 0em;
  }
}

.t3{font-size: 1em;  font-weight: 400;letter-spacing: .05em;
  span{font-size: 1.1em;font-weight: 500;  margin: 0 .5em 0 0;letter-spacing: -.05em;}
  
  @media screen and (min-width: 768px) {   
    font-size: 1.3em;
  }
}
.t4{font-size: 1.3em;  font-weight: 600;color: #fff690;
border-top:1px solid #fff;
border-bottom:1px solid #fff;
text-align: center;width: 100%;margin: .4em 0 0em 0em;padding: .16em 0;

  @media screen and (min-width: 768px) {   
    font-size:1em;width: 85%;margin: 1.2em 0 0em 0em;
  }
}*/
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