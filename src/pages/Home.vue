<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h65.tw/img/loading_w.gif" alt="loading" srcset="">
  </div>
  <!-- loading end
   <Nav v-if="config.showNav" /> -->
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif_TC]">
     <div class="bg">
    <S1 />
    <Order />
    </div>
  <!--
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <S1new />
    <S1new2 /> -->
    
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';
.home{
  background: linear-gradient(to bottom, #40210D, #000);
  > .bg{
  //background:url("@/section/s1/bg1.webp") top center;
  //background-size: 100%;
  }
}
img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
@media screen and (max-width: 767px) {
.home{
  
  > .bg{
  //background-image:url("@/section/s1/bg1m.jpg");
  background-repeat: no-repeat;
  }
}
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
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
      duration: 800
    });
  };

})
</script>
