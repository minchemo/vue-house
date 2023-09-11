<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h65.tw/img/loading_w.gif" alt="高大Σ計畫" srcset="">
  </div>
  <!--loading end-->
   <!-- <Nav v-if="config.showNav" /> -->
  <div class="home bg-[#000] overflow-hidden font-['Noto_Sans_TC',sans-serif]">
  
    <S1 />
  <S2 />
  <!--    <S1new />
    <S1new2 />
    <S3 /> -->
    <Order />
  </div>
</template>


<style lang="scss">

@media screen and (max-width: 767px) {
  
.bg{
  img{
    width: auto;
    height: 230vw;
    max-width: 900%;
    left: auto;
    top: 0;
    &:first-child{top: auto;left: 50%;transform: translate(-50%);}
&:nth-child(2){top: auto;left: 0;}
&:last-child{bottom: auto;right: 0;}
}
}
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
/* import S1new from "@/section/s1new.vue"
/* import S1new2 from "@/section/s1new2.vue"
/* import S3 from "@/section/s3.vue" */
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { computed, getCurrentInstance,onMounted, ref } from "vue"

import AOS from 'aos';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

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
