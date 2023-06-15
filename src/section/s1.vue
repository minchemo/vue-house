<template>
  <article class="s1" id="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset="">
    <img src="./s1/t.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/tm.svg" class="t12" alt="" data-aos="zoom-out-down" v-if="$isMobile()"/> -->
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
       <div class="txt font-['noto_serif_tc']" data-aos="zoom-out" data-aos-duration="1000">測試用</div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
height: size(300);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(25);

   .txt{font-weight: 900;
    text-align: center;
    line-height:1.1;
   position: relative;
   left: -.5em;
    color: #000;
    margin: auto;
  }

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    height: sizem(100);
    font-size:sizem(12);
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