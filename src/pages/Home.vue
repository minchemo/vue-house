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
   <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#FFF] text-[#000] ">
    <img src="@/section/s1/bg.webp" class="bg1" data-aos="fade" data-aos-delay="0">
    <!--S0 v-if="isMobile" /-->
    <S1 />
    <S2 />
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
.bg1{
  position: fixed;top: 0;left: 0;width: 100%;object-fit: fill;
  height: 100vh;
  min-height: size(900);
 // max-height: size(1080);
}

@media screen and (max-width: 767px) {
.home-section {
  position: relative;
  width: 100%;
  overflow: visible; /* 使視差元素不會被隱藏 */
  transition: transform 0.2s linear;
}
}
</style>

<script setup>
import info from "@/info"

import S0 from "@/section/s0.vue"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted,computed,  getCurrentInstance, ref } from "vue"

import AOS from 'aos';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const isLoading = ref(true)
const gtmNoScript = ref('')

// **初始化 AOS**
onMounted(() => {
  window.onload = () => {
    isLoading.value = false;
    AOS.init({
      offset: 0,
      duration: 2000,
    });
  };
});

</script>
