<template>
  <article class="s1" id="s1">
   <!--  <img class="t0" src="./s1/pc.jpg" alt="" srcset="">  -->
    <div class="t1 font-['Noto_Serif_TC',serif]" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="1000" v-if="!isMobile">你的時代，就是北台灣千億未來</div>
    <div class="t1 font-['Noto_Serif_TC',serif]" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="1000" v-else>你的時代<br>就是北台灣千億未來</div>
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="0" data-aos-duration="1000"/>
    <div class="t2 font-['Noto_Serif_TC',serif]" data-aos="zoom-out" data-aos-delay="400" data-aos-duration="1000">桃園CBD新站特區｜搶佔明日C位</div>
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
  background: url("./s1/bg.webp") 50% 50%;
  background-size: cover;
  .t0{position: absolute;top: -92px;left: 0;width: 100%;opacity: .5;z-index: 10;}

  .logo{
    width:size(728);
    margin: 2em auto 2em;
    }
  .t1{
    font-size:size(40);
    color:#fff;
    font-weight: 700;
    position: relative;
    z-index: 2;


    }
  .t2{
    font-size:size(40);
    letter-spacing: -.05em;
    color:#fff;
    position: relative;
    z-index: 2;
    font-weight: 700;
    margin-bottom: 3em;
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
    background: url("./s1/bgm.webp") 50% 50%;
    background-size: cover;

  .logo{
    width: sizem(272);
    margin: 2em auto 2em;
    }
  .t1{
    font-size: sizem(25);
    text-align: center;
    }

  .t2{
    font-size: sizem(20);
    text-align: center;
    line-height: 1.4;
    span{display: block;}
    margin-bottom: 3em;
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