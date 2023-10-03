<template>
  <article class="s1" id="s1">
    <img class="bg" src="./s1/bg.png" alt="" srcset="">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
    <img src="./s1/t.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/tm.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="$isMobile()"/> -->
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
       <div class="txt" data-aos="zoom-out" data-aos-duration="1000">展示頁</div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
height: 100vh;
max-height:size(1080);
min-height:size(900);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(25);
.bg{width: 100%;position: fixed;top: 0;left: 0;opacity: .8;pointer-events: none;}
   .txt{font-weight: 900;
    text-align: center;
    line-height:1.1;
   position: relative;
   left: -.5em;
    color: #000;
    margin: auto;pointer-events: none;
  }

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
max-height:sizem(812);
min-height:sizem(604);
    font-size:sizem(20);
.bg{width:auto;left:50%;height:sizem(812);transform: translateX(-50%);}
   .txt{
    line-height:1.1;
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