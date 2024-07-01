<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div
    v-bind:class="{
      'opacity-0': !isLoading,
      'pointer-events-none': !isLoading,
    }"
    class="transition-all duration-500flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]"
  >
    <img class="w-32" src="@/assets/loading_w.gif" alt="loading" srcset="" />
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div
    class="home bg-[#fff] overflow-hidden font-['Noto_Serif_TC'] pb-[64px] md:pb-0"
  >
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <Order />
  </div>
</template>

<style>
@import "@/assets/style/custom-aos.css";
img {
  display: inline;
  max-width: unset;
  height: unset;
  /* margin: 0 auto; */
}

.home {
  background: url("@/section/s2/bg.jpg") fixed;
}

@media screen and (max-width: 768px) {
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';


const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: false
})

onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 1500,
    })
  };

})
</script>