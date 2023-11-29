<template>
  <article class="s1" id="s1">
   <!--  <img class="t0" src="./s1/pc.jpg" alt="" srcset="">  -->
    <div class="bg"></div>
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/>
    <img src="./s1/t1.svg" class="t1" alt="" data-aos="zoom-out" data-aos-delay="200" data-aos-duration="1000"/>
    <div class="main">
      <img src="./s1/c4.png"  alt="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000"/>
      <img src="./s1/c3.png"  alt="" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"/>
      <img src="./s1/c2.png"  alt="" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000"/>
      <img src="./s1/c1.png"  alt="" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000"/>
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
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(25);
  background: #fff;
  .t0{position: absolute;top: -92px;left: 0;width: 100%;opacity: .5;z-index: 10;}

  .logo{
    width:size(568);
    position: absolute;
    left: size(165);
    top: size(204);
    }

  .t1{
    width:size(239);
    position: absolute;
    left: size(197);
    top: size(574);
    }
  .t2{font-size: 5.4em;letter-spacing: -.05em;
    color:#EF8200;position: relative;z-index: 2;font-weight: 300;
    text-shadow: 0 0 .1em #006;
    span:last-child{font-weight: 900;color:#fff;}
    }

  .main{
      position: absolute;
      width: size(998);
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: size(8);
      right: size(108);
      bottom: size(100);

      img{
        width: size(242);
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