<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="高大Σ計畫" srcset="">
  </div>
  <!--loading end-->
   <!-- <Nav v-if="config.showNav" /> -->
  <div class="home bg-[#000E29] overflow-hidden font-['Noto_Sans_TC',serif]">
    <S1 />
  <!--  <S2 />
    <S3 /> -->
    <Order />
  </div>
</template>


<style>
img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
/* import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue" */
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: true
})

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
