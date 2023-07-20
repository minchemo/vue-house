<template>
  <article class="s1" id="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
    <img src="./s1/t.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/tm.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="$isMobile()"/> -->
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
    <img class="bg" src="./s1/bg.jpg" alt="" srcset="">
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000"/>
       <div class="txt" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
        <span class="t1">實坪電梯別墅｜樂享花園會館</span><span class="t2">64-74坪｜大器落成｜正式公開</span>
      </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  min-height: size(1000);
  max-height: size(1180);
  height: calc(100vh + 100vw * 100 /1920);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  font-size:size(25);

   .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .5;z-index: 2;}
   .bg{position: absolute;bottom:0;left: 0;width: 100%;}
   .txt{
    text-align: center;
    line-height:1.5;
   position: relative;
   left: -.5em;
    color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
    margin: 0 10em 4.8em 2em;font-size:1.28em;
    .t1{font-size:1.1em;display: inline-block;transform: scaleX(.96);
      font-weight: 700;margin: 0;
    text-align: left;letter-spacing: .05em;  color: #171C60;}
    .t2{font-size: 1em;position: relative;top: .03em;left: -.04em;margin: auto -0.01em;  background: linear-gradient(180deg, #E48726 0%, #E27E26 10.00%, #DE6929 41.00%, #DB5C2A 72.00%, #DB582B 100%);padding: 0.3em;
    }
  }
  .logo{width: size(503);margin: -2em 0 0 0;}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(660);
    max-height: sizem(770);
    font-size:sizem(21);
  flex-direction: column;
   .bg{left: -20%;width: 120%;max-width: 900%;}
   .txt{
    margin: 0 auto 7.5em auto;
    font-size:1em;
   left: 0em;
   }
  .logo{width: sizem(300);margin: 0em auto 1em auto;}
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