<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
   <!-- <Nav v-if="config.showNav" /> -->
  <div class="home bg-[#ccc] overflow-hidden font-['Noto_Sans_TC',serif]">
    <div class="bg">
    </div>
    <S1 />
  <!--    
    <div class="bg">
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
    </div>
    <S1new />
    <S1new2 />
  <S2 />
    <S3 /> -->
    <Order />
  </div>
</template>


<style lang="scss">
/* img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
} */
.bg{width: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;
  //background-image: url("@/section/s1/bg.jpg");background-size:calc(600 * 100vw / 1920) auto;
  background:#731620;
  .bg1{
  position: absolute;top: 0;right: 0;width:calc(1500 * 100vw / 1920); 
  height:65%;filter: blur(2px);
     animation: an 3s ease-in-out infinite alternate ;
     transform:skewX(5deg);
     transform-origin: 100% 0;
}
.bg2{
  position: absolute;bottom: 0;left: 0;width:calc(640 * 100vw / 1920);
  height:25%;filter: blur(2px);
     animation: an 3s ease-in-out infinite alternate-reverse;
     transform-origin: 0 100%;
     transform:skewX(10deg);
}
@keyframes an {
  to {
     transform:skewX(0);
  }
}

}

@media screen and (max-width: 767px) {
  .bg{
  background-size:calc(400 * 100vw / 375) auto;
 // background-image: url("@/section/s1/bgm.jpg");
 // background-size:100% auto;
 .bg1{
    width: 100%;
    height: 40%;
    right: -6%;filter: blur(1px);
}
.bg2{
    width: 60%;
    height: 19%;
    bottom: 63px;filter: blur(1px);
}
}
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
/* import S1new from "@/section/s1new.vue"
/* import S1new2 from "@/section/s1new2.vue"
/* 
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue" */
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

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
