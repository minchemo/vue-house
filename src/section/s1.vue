<template>
  <article class="s1" id="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
    <img src="./s1/t.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/tm.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="$isMobile()"/> -->
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
       <!--div class="txt font-['noto_serif_tc']" data-aos="zoom-out" data-aos-duration="1000"><span class="t1">高鐵<br  v-if="$isMobile()"/>台積宅</span><span class="t2">2</span><span class="t3">字頭</span><span class="t4">THE GREEN ROAD</span></div-->
    <img src="./s1/t.svg" class="txt" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    <img src="./s1/love.png" class="love" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    <img src="./s1/love1.png" v-if="!$isMobile()" class="love1" alt="">
    <img src="./s1/love2.png" v-if="!$isMobile()" class="love2" alt="">
    <img src="./s1/bg1.png" v-if="!$isMobile()" class="bg1" alt=""/>
    <img src="./s1/bg2.png" v-if="!$isMobile()" class="bg2" alt=""/>
    <img src="./s1/bg_m.png" v-if="$isMobile()" class="bg1" alt=""/>
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

    .love{
    z-index: 1;
    position: absolute;  
    width: size(850);
    left: size(105);
    top: size(115);
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

    .bg1{
     z-index: 0;
    position: absolute;
    bottom:size(0);
    }

    .bg2{
    z-index: 2;
    position: absolute;
    bottom:size(0);
    }
   .txt{
    width: size(698);
    position: absolute;
    right: size(115);
    top: size(285);
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
    min-height: sizem(766);
    max-height: sizem(766);
    font-size:sizem(12);

   .txt{
    width: sizem(324);
    position: absolute;
    right: sizem(25);
    bottom: sizem(185);
    top:auto;
  }
  .logo{
    width: sizem(302);
    left: sizem(36.2);
    top: sizem(153);
    }

  .love{ 
    width: sizem(350);
    left: sizem(12);
    top: sizem(59);
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