<template>
  <div ref="gtmNoScript" />
  <img src="https://jrty.tw/favicon.png" class="oq">
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
  <div class="home overflow-hidden font-['Noto_sans_tc',sans-serif] bg-[#BB581D]">
    <S1 />
   <!-- <S2 />
     <S2v />
  
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <S10 />
    <S11 />
    <div class="bg">
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
    </div>
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
.oq{position: absolute;top: 0;left: 0;width: 0;}
/*
  .bg{position: absolute;width: 100%;height: 0;top:0;left: 0;
    span{
      position: absolute;
      display: block;width: 1em;height: 1em;
      background: radial-gradient(ellipse at center, #fff 0%,#fff6 20%,#fff3 30%,#fff0 50%);
   transform: scale(.5);opacity: 0;
   animation: an1 2s ease-in-out infinite alternate;
      &:nth-child(2){animation-delay: 1s;}
      &:nth-child(3){animation-delay: 1.5s;}
    }
  }
  */


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


/*
      .txt {
    position: relative;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.85;
    width: 100%;
  .desc{
  }
  }
@media screen and (max-width: 767px) {
  
}
*/
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
//import S2 from "@/section/s2.vue"
// import S2v from "@/section/s2v.vue"
// import S11 from "@/section/s11.vue"
/* 
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue" */
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
      duration: 1500
    });
  };

})
</script>
