<template>
  <article class="s1" id="s1">
    <!-- 

    <img src="./s1/mo.jpg" class="t0">
    <img src="./s1/pc.jpg" class="t0">

    -->

    <img src="./s1/img.svg" class="img">
    <div class="txt1">
    <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1500">
    <div class="t1" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">紀伊國屋書店</div>
    <div class="t2" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1500">嘉義首座<span></span>日系選冊宅</div>
    <div class="t3" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1500">湖子內｜2-3房</div>
    </div>


  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}


.s1 {
  
  @apply relative w-full h-screen;
  min-height: size(1080);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  //background: #E60012;
  background: url("./s1/bg.webp") center;

  background-size: cover;
  .t0{position: absolute;top: .5vw;left: 0;width: 100%;opacity: .3;z-index: 5;}

    .img{position: absolute;width: size(930);right:size(-5);
   // top:calc(50% + #{size(320 - 540)});
   bottom:size(0);
    z-index: 99;
    }
  

  .logo{position: relative;
    width: size(660);
    margin-bottom: .8em;
    left: -.2em;
  }


    .txt1{
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size:size(60);
  line-height:1.5;
.t1{
  letter-spacing:0.25em;
  font-size:1.31em;
  background:linear-gradient(98deg, #FAE09F 0%, #966D27 100%);
  width: 10.5em;margin: auto auto .7em auto;
  }

.t2{
  font-size:1.4em;
  letter-spacing:0.05em;
    margin-bottom: -.2em;
  span{
    position: relative;
    width: 1.2em;
    height:1.2em;
    margin:0 .2em;
    top: -.3em;
    display:inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    &::before,&::after{content:"";background: #FFF;height: 2px;width: 100%;display: block;}
    &::before{transform: rotate(45deg);margin-bottom:-2px;}
    &::after{transform: rotate(-45deg);}}
  }

  .t3{
  font-size:1.47em;
  font-weight: 700;
  &::before,&::after{
    content:"";
    position: relative;
    height: .8em;width: .6em;
    display: inline-block;
    margin: auto .3em;
    border: 1px solid #fff;
  }
  &::before{
    border-right: 0;}
  &::after{
    border-left: 0;
  }  
  }


}


  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(812);
    font-size:sizem(15);
    .img{position: absolute;width: sizem(455);right:sizem(-20);
   // top:calc(50% + #{size(320 - 540)});
   bottom:sizem(-15);
    z-index: 99;
    }


    .logo{
    width: sizem(260);
    margin-bottom: 1.3em;
  }


.txt1{
  font-size:sizem(23);
  margin-bottom: 4.8em;
.t1{ width: 10em;
  letter-spacing:0.2em;
  margin: auto auto .5em auto;
}
.t2{
  font-size:1.2em;
}

.t3{
  font-size:1.3em;
}


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