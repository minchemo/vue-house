<template>
  <article class="s1 font-['noto_serif_tc']" id="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
    <img src="./s1/t.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/tm.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="$isMobile()"/> -->
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
    <img src="./s1/logo.svg" class="en" alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000"/>
     
        <span class="t1" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">平實特區</span>
        <span class="t2" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">夢想預約中</span>
        <span class="t3" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000"><img src="./s1/l.png" alt="" /></span>
        <span class="t4" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">2-3房｜COMING SOON</span>


  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  min-height: size(800);
  max-height: size(1080);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(45);
  color: #FFF;
  line-height: 1.3;
  font-weight: 700;
  
@keyframes light1 {
   0%{     
    transform: scale(0,1);opacity: 1;
   }
   80% {
     transform: scale(1);opacity: 1;
   }
   100% {
    transform: scale(5,2);opacity: 0;
   }
}
  .en{width: 17.42em;margin: 0 0 -.8em 0;}

    .t1{font-size:4em;letter-spacing: .1em;}
    .t2{font-size: 2.1em;letter-spacing: .13em;}
    .t3{width: 26em;margin: .4em 0;
     img{width: 100%;
    animation:light1 5s infinite;}
    }
    .t4{font-size: 1em;letter-spacing: .18em;}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(660);
    max-height: sizem(770);
    font-size:sizem(16);
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