<template>
  <article class="s1" id="s1">
   <!--  
   <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
   <img class="t0" src="./s1/pc.jpg" alt="" srcset="">  -->

    <img src="./s1/txt.svg" class="logo" alt="" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000"/>
    <div class="t1">
    <img src="./s1/slogo1.svg" class="slogo" alt="" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"/>
    <img src="./s1/slogo2.svg" class="slogo" alt="" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"/></div>
    
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an1 {
  to {
     transform: skewX(3deg)
  }
}
.s1 {
  @apply relative w-full h-screen;
 // min-height: size(900);
 // max-height: size(1080);
  height: size(2118);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(35);
  gap: 44vw;
  background:url("./s1/bg1.jpg");
  background-size: cover;
  letter-spacing: 0.09em;
  .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .3;z-index: 10;}
  .logo{position: relative;z-index: 3;
    width:size(922);
    margin: 0em auto 0;left: .6vw;
    }
  .t1{position: relative;z-index: 3;
  display: flex;
  justify-content: center;
  align-items:center;
  gap:2vw;
  margin-bottom: 5.5vw;
  img{height:size(70);}
    }

  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:sizem(564);
    font-size:sizem(14);
  gap: 53vw;
  background-image: url("./s1/bg1m.jpg");

    
  .logo{
    width:sizem(290);
    left: 2.2vw;
    }
  .t1{
  flex-direction: column;
  gap:5vw;
    margin-bottom: 1.5vw;
  img{height:sizem(21);}
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