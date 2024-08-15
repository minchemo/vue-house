<template>
  <!--loading
  <div
    v-bind:class="{
      'opacity-0': !isLoading,
      'pointer-events-none': !isLoading,
    }"
    class="transition-all duration-500flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]"
  >
    <img class="w-32" src="//h65.tw/img/loading_w.gif" alt="loading" srcset="" />
  </div>-->
  <!--loading end
  <Nav v-if="config.showNav" /> -->
  <div
    class="home bg-[#F8F8F8] overflow-hidden font-['Noto_Serif_TC']"
  >
    <S1 />
    <!-- 
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <Order />
     -->
  </div>
</template>


<script setup>
import S1 from "@/section/s1.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 1000
    });
  };
})
</script>
