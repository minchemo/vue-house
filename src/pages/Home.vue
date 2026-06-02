<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img/loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#04004D] text-[#000]">
    <S1 />
    <!--
    <S1new />
    <S1new2 /> -->
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';



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
.home {
  
  background:radial-gradient(79% 90% at 50% 19%, rgba(255, 249, 180, 0.30) 18%, rgba(255, 232, 150, 0.47) 31%, rgba(255, 213, 116, 0.66) 48%, rgba(255, 198, 90, 0.81) 63%, rgba(255, 187, 71, 0.91) 78%, rgba(255, 181, 60, 0.98) 90%, #FFB338 100%), url('@/section/s1/bg.jpg') center fixed  ;
  background-size:100% auto,100% auto;
  @media screen and (min-width: 768px) {
  background:radial-gradient(79% 150% at 50% 15%, rgba(255, 249, 180, 0.30) 18%, rgba(255, 232, 150, 0.47) 31%, rgba(255, 213, 116, 0.66) 48%, rgba(255, 198, 90, 0.81) 63%, rgba(255, 187, 71, 0.91) 78%, rgba(255, 181, 60, 0.98) 90%, #FFB338 100%), url('@/section/s1/bg.jpg') center fixed  ;
  background-size:100% auto,100% auto;
 //background-size:100% auto;
  }
}

</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
// 
// import S11 from "@/section/s11.vue"
/* 
import S2 from "@/section/s2.vue" */
import Order from "@/section/order.vue"
import { onMounted, nextTick, ref } from "vue"
import AOS from 'aos'
import 'aos/dist/aos.css'

const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = false

  await nextTick()

  AOS.init({
    once: true,
    duration: 1500,
  //  disableMutationObserver: false,
  })

  await nextTick()
  AOS.refreshHard()
})
</script>
