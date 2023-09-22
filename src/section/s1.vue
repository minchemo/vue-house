<template>
  <article class="s1" id="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
    <img src="./s1/t.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/tm.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="$isMobile()"/> -->
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
       <!--div class="txt font-['noto_serif_tc']" data-aos="zoom-out" data-aos-duration="1000"><span class="t1">高鐵<br  v-if="$isMobile()"/>台積宅</span><span class="t2">2</span><span class="t3">字頭</span><span class="t4">THE GREEN ROAD</span></div-->
    <img src="./s1/t.svg" class="txt" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    <img src="./s1/woman.webp" class="love" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(25);
  overflow: hidden;

    .love{
    //z-index: 1;
    position: absolute;  
    width: size(786);
    left: size(-0);
    bottom: size(0);
    }

    .love1{
    z-index: 1;
    position: absolute;  
    width: size(315);
    right: size(605);
    bottom: size(55); 
    animation: an 3s ease-in-out infinite alternate-reverse;
     transform-origin: 0 100%;
     transform:translate(20px, 50px);
    }

    .love2{
    z-index: 1;
    position: absolute;  
    width: size(139);
    right: size(285);
    top: size(105); 
    animation: an 3s ease-in-out infinite alternate-reverse;
     transform-origin: 0 100%;
     transform:translate(20px, -20px);
    }

    @keyframes an {
  to {
     transform:translate(0px);
  }
}

 
   .txt{
    width: size(698);
    position: absolute;
    right: size(205);
    top: size(235);
  }
  .logo{
    position: absolute;
    width: size(627);
    z-index: 2;
    left: size(215);
    top: size(385);
    }

  

    

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(12);

   .txt{
    width: sizem(250);
    position: absolute;
    right: sizem(62);
    bottom: auto;
    top:sizem(45);
  }

  .love{ 
    width: sizem(315);
    left: sizem(52);
    bottom: sizem(-60);
    }

  .bg1{
      width: sizem(375);
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