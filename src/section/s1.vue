<template>
  <article class="s1" id="s1">
    <!-- 
    <img class="t0" src="./s1/mo.jpg" alt="" srcset=""> -->
    <img src="./s1/logo.svg" class="t1" alt="" data-aos="zoom-out-down" v-if="!$isMobile()"/>
    <img src="./s1/logom.svg" class="t1" alt="" data-aos="zoom-out-down" v-else />
       <!--  <div class="slide" @click="scrollTo('#s2')" data-aos="zoom-out" data-aos-delay="800">SLIDE</div> -->
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
  font-size:size(43);

   .t0{position: absolute;top: 0;left: 0;width: 100%;opacity: .2;z-index: 2;}
   .t1{width: size(1223)}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(625);
    max-height: sizem(770);
    font-size:sizem(30);
   .t1{width: sizem(306)}
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