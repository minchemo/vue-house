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
    <div class="bg">
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
      <img src="@/section/s1/bg.jpg" />
    </div>
    <div class="bg2">
      <img v-if="!$isMobile()" src="@/section/s1/bg2.jpg" alt="" />
      <img v-else src="@/section/s1/bg3m.jpg" alt="" />
    </div>
    <div class="bg3">
    <div class="aurora">
      <img src="@/section/s1/aurora.svg" />
    </div>
  </div>
    <S1 />
  <S2 />
  <!--    <S1new />
    <S1new2 />
    <S3 /> -->
    <Order />
  </div>
</template>


<style lang="scss">
.bg{width: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;
img{width: 100%;position:absolute;left: 0;
  animation: an 2s linear infinite alternate;
&:first-child{top:50%;transform: translateY(-50%);animation: none;}
&:nth-child(2){top:0;}
&:last-child{bottom:0;animation-delay: 2s;}
}
@keyframes an {
  to{opacity: 0;}
}
}
@keyframes hue {
   to {
      filter: hue-rotate(80deg);
   }
}
.bg2{position:absolute;overflow: hidden;width: 100%;top: 0%;left: 0%;
  opacity: .8;mix-blend-mode: screen;
  img{position: relative;width:120%;filter: blur(1px);margin: -5px;max-width: 120%;}
}
.bg3{position:absolute;left: 0;top: 0;width:100%;overflow: hidden;}
.aurora{position:relative;left: 0;width:130vw;height:130vw;top:0;
  transform: rotate(-20deg)translate(-24%,-23%);
  transform-origin: 0 0;
  img{width: 100%;height:100%;
   animation: hue 1.5s linear infinite alternate;
  filter: hue-rotate(0deg);
  transform: perspective(1.6em)rotateX(1deg);
}
}
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

.bg3{height:400vw;}
.aurora{width:420vw;height:200vw;
  transform: rotate(-95deg)translate(-100%,-45%);
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
