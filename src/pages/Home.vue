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
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#FFE8BD] text-[#000]">

    <img src="@/section/s1/joyofmissingout.svg" alt="" class="joyofmissingout" />
    <S1 />
    <S2 />
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

.joyofmissingout{
  position: fixed;
  display: none;
  z-index: 3;

  @media screen and (min-width: 768px) {
    bottom: size(55);
    left: size(53);
    width: size(22);
  display: block;

  }
}

}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
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
