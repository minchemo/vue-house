<template>
  <article class="s1" id="s1">
	<!--  

   <img src="./s1/pc.jpg" class="t0">
   <img src="./s1/mo.jpg" class="t0">

   -->

   <div class="con flex">
    <img src="./s1/txt1.svg" alt="title" class="txt" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="0" v-if="!isMobile">
    <img src="./s1/txt1_m.svg" alt="title" class="txt" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="0" v-else>
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

.s1 {
  @apply relative w-full h-screen;
  min-height: size(1080);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  //background: #E60012;
  background: url("./s1/bg1.webp");

  background-size: cover;

.con{gap: size(60);margin: 0 0 size(70) 0;
  div{flex-direction:column;margin: 0;}}

.txt{
  width: size(900);
}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:sizem(667);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(15);
    background: url("./s1/bg1m.webp");

    .con{gap:0;margin: 0 0  sizem(0) 0;flex-direction:column;
  div{flex-direction:column;margin: 0;}}
  

.txt{
  width: sizem(275);
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