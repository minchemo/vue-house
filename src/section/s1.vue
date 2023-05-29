<template>
  <article class="s1" id="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
    <img src="./s1/t.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/tm.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="$isMobile()"/> -->
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
       <div class="txt font-['noto_serif_tc']" data-aos="zoom-out" data-aos-duration="1000"><span class="t1">高鐵<br  v-if="$isMobile()"/>台積宅</span><span class="t2">2</span><span class="t3">字頭</span><span class="t4">THE GREEN ROAD</span></div>
    <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>

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

   .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .2;z-index: 2;}
   .t12{width: size(1223);position: absolute;top:15.5%;left: 0;right: 0;margin: auto;filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8));}
   .txt{font-weight: 900;
    text-align: center;
    line-height:1.1;
   position: relative;
   left: -.5em;
    color: #FFF;
    margin: 0 auto 5.3em auto;filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8));
    .t1{font-size: 7.2em;display: inline-block;transform: scaleX(.96);
    text-align: left;letter-spacing: .05em;}
    .t2{font-size: 14.4em;position: relative;top: .03em;left: -.04em;margin: auto -0.01em;    color: #FFF000;
    }
    .t3{font-size: 3.84em;display: inline-block;width: 1em;line-height: 1;position: relative;top: .1em;}
  .t4{display:block;margin: .6em auto 0 auto;letter-spacing:1.61em;text-indent: 2.7em;font-weight:700;
  }
  }
  .logo{width: size(420);filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.8));margin: 0 auto 3.5em auto;}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(625);
    max-height: sizem(770);
    font-size:sizem(12);
   .t12{width:sizem(306);top: 25.8%;}
   .txt{
    line-height:1.1;
  .t1{font-size: 5.35em;}
  .t2{font-size: 11em;}
  .t3{font-size: 3em}
  .t4{letter-spacing:1.1em;text-indent: 2.1em;
  }
   }
  .logo{width: sizem(153);margin: 2.5em auto 1em auto;}
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