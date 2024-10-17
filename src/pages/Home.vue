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
  <!--loading end-->
   <Nav v-if="info.navList.length > 0" />
    <!-- 主字體 3選1
     font-['Noto_Serif_TC',serif]
     font-['Noto_Sans_TC',sans-serif]
     font-['LXGW_WenKai_Mono_TC',monospace]
    -->
  <div class="home overflow-hidden font-['Noto_Serif_TC',serif] bg-[#001256] text-[#FFF]">
    <S1 />
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

// 字體
@font-face {
  font-family: 'com4f';
  src: local("COM4tFine"),local("COM4t Fine Regular"),
  url('@/section/form/com4f.ttf') format("opentype"),
}

</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
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
