<template>
  <article class="s1" id="s1">
   <!--  
   <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
   <img class="t0" src="./s1/pc.jpg" alt="" srcset="">  -->
   <!--img class="bg1" src="./s1/bg2.jpg" alt="" srcset=""-->  

   <img src="./s1/logo.svg" class="logo" alt="" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" v-if="!$isMobile()" />
   <img src="./s1/logom.svg" class="logo" alt="" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" v-else />
    
    <div class="t1">
    <img src="./s1/t2.svg" class="t2" alt="" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"/>

    <div class="t3" data-aos="fade-up" v-if="$isMobile()">即將公開</div>
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
@keyframes an1 {
  to {
     transform: translate(0)
  }
}
.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1180);
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(35);
  gap: 6vw;
  letter-spacing: 0.09em;
  .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .3;z-index: 10;}
  .bg1{position: absolute;top: 0;left: 0;width: 135.4%;height: 100%;
    transform: translateX(calc(-100% + 100vw));
    animation: an1 50s alternate linear infinite;}
  .gif{position: absolute;top: 0;left:-150%;width: 300%;height: 100%;
    mix-blend-mode: overlay;
    opacity: .2;}
  .logo{position: relative;z-index: 3;
    width:size(1028);
    margin: 7.2em auto 0;left: .6vw;
    filter:drop-shadow(0 0 size(15) #142C67cc);
    //142C67
    }
  .t1{position: relative;z-index: 3;
  display: flex;
  justify-content: center;
  align-items:center;
  margin-bottom: 5.5vw;

  .t2{
    width: size(653);
  }

  


  
    }
  
  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
  min-height:sizem(568);
  max-height: sizem(812);
    height: calc(100vh - 62px);
    font-size:sizem(14);
  gap: 0;
  .bg1{
    width: 240%;
    height: 100%;
    animation: an1 60s alternate linear infinite;
    //left: -90%;
  }

    
  .logo{
    width:sizem(206);
    left: auto;
    margin: 3em auto 4em auto;
    }
  .t1{
  flex-direction: column;
  gap:5vw;
   // margin-bottom: 1.5vw;
  
  .t2{
    width: sizem(243);
  }

  .t3{
    font-size: sizem(18);
    color: #fff;
    margin-top: 4em;
    letter-spacing:.5em;
    
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