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
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#E0E0E0] text-[#000]">
  <!--
    <S1 />
    <S1new />
    <S1new2 /> -->
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

</style>

<script setup>
import info from "@/info"
// import S2v from "@/section/s2v.vue"
// import S11 from "@/section/s11.vue"
/* 
import S2 from "@/section/s2.vue" */
import Nav from "@/layout/navbar.vue"
import Order from "@/section/order.vue"
import { onMounted, ref, provide } from "vue"



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
const modalOpen = ref(false)
const modalType = ref('')

provide('contactModal', {
  modalOpen,
  modalType
})
</script>