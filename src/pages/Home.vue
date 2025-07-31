<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img//loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
<!--
  'Noto_Serif_TC',serif
  'Noto_Sans_TC',sans-serif
  -->

  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#C8E1D4] text-[#3E3A39]">
    <h1 class="absolute opacity-0 pointer-events-none">{{ info.caseName }}</h1>
    <S1 />
  <!--
    <S2 />
    <S1new />
    <S1new2 /> -->
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an1 {
  to {
     transform:scale(1);opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
.home{
  position: relative;
/*  &::before{content: "";display: block;position: fixed;top: 0;left: 0;width: 100%;bottom: 0;right: 0;
background: url("@/section/s1/bg.jpg") top center;
background-size: cover;

}*/
}
// 字體
/*
@font-face {
  font-family: 'com4f';
  src: local("COM4tFine"),local("COM4t Fine Regular"),
  url('@/section/form/com4f.ttf') format("opentype"),
}
  */

</style>

<script setup>
import info from "@/info"
// import S2v from "@/section/s2v.vue"
// import S11 from "@/section/s11.vue"

import S1 from "@/section/s1.vue" 
import Order from "@/section/order.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 2000
    });
  };

})
</script>
