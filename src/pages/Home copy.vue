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
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#FFF] text-[#000] home-section">
    <img src="@/section/s1/bg1.jpg" class="bg1" data-aos="fade" data-aos-delay="0">
    <div ref="s0Ref" v-if="isMobile"><S0 /></div>
    <div ref="s1Ref"><S1 /></div>
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

.home-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: transform 0.1s ease-out;
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


const s0Ref = ref(null);
const s1Ref = ref(null);
const s0Height = ref(0);
const s1Height = ref(0);
const isParallaxActive = ref(false);

const handleScroll = () => {
  const scrollY = window.scrollY;
  if (s0Ref.value) {
    s0Height.value = s0Ref.value.offsetHeight; // 取得 S0 高度
  }

  if (scrollY >= s0Height.value) {
    console.log("S0 高度:", s0Height.value);
  console.log("啟動視差", s1Height.value);
  // isParallaxActive.value = true; // 滾過 S0 高度後啟動視差
  } else {
  // isParallaxActive.value = false;S
  }
}

  onMounted(() => {
  if (s0Ref.value) {
    s0Height.value = s0Ref.value.offsetHeight; // 初始化 S0 高度
  }
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>
