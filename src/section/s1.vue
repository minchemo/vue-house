<template>
  <article class="s1" id="s1">
   <!--  <img class="t0" src="./s1/pc.jpg" alt="" srcset="">  -->
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/>
    <img src="./s1/t1.svg" class="t1" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <img src="./s1/t2.svg" class="t2" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    
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
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(25);
  background: #DEDBD4;
  .t0{position: absolute;top: -92px;left: 0;width: 100%;opacity: .5;z-index: 10;}
  .bg{position: absolute;top: 0;left: 0;width: 100%;height: 100%;
  background: url("./s1/bg1.jpg") 50% 50%;
  background-size: auto 100%;
  &::before,&::after{content: "";display: block;
    position: absolute;top: 0;left: 0;width: 100%;height: 100%;
  background: url("./s1/bg1.jpg");
  background-size: auto 100%;
  animation: op 5s linear infinite alternate;
  }
  &::before{background-position: -20vw 50%;}
  &::after{background-position: 20vw 50%; animation-delay: 2.5s;}
  }
  .logo{
    width:size(758);
    margin: 5.8em auto 1.2em;
    }
  .t1{
    width:size(730);
    margin: 0 auto 3.5em;
    }
  .t2{
    width:size(730);
    margin: 0 auto 3.5em;
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
    font-size:sizem(12);
  .logo{
    width:sizem(96);
    margin: 0em auto 1.2em;
    }
  .t1{
    width:sizem(204);
    }
  .t2{font-size: 3.9em;text-align: center;
    line-height: 1.4;
    span{display: block;}
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