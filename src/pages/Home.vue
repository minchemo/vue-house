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
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#591D00] text-[#000]">


    <!--
    <S1new />
    <S1new2 /> -->
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

.home {


}
</style>

<script setup>
import info from "@/info"
// 
// import S11 from "@/section/s11.vue"
/*  */
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
    duration: 2000,
    //  disableMutationObserver: false,
  })

  await nextTick()
  AOS.refreshHard()
})
</script>
