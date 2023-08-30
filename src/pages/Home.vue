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
      <div>
      <img src="@/section/s1/gif2.gif" alt="" />
      </div>
    </div>
    </div>

      <!-- 
    <div class="bg3">
    <div class="aurora">
      <div>
      <img src="@/section/s1/aurora.png" alt="" />
      <img src="@/section/s1/aurora.png" alt="" />
      </div>
    </div>
    </div>
-->

   <!-- <div class="bg3">
    <div class="aurora">
      <div>
        <img src="@/section/s1/aurora.svg" />
      </div>
    </div>
  </div> -->
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
      filter: hue-rotate(-30deg);// 變色
   }
}
@keyframes aurora {
  0%{transform: translateX(0);}
  50%{transform:translateX(-50%)scaleY(.8);}
  100%{transform:translateX(-100%);}
}
.bg2{position:absolute;overflow: hidden;width: 100%;top: 0%;left: 0%;
  opacity: .8;mix-blend-mode: screen;
  img{position: relative;width:120%;filter: blur(1px);margin: -5px;max-width: 120%;}
}
.bg3{position:absolute;left: 0;top: 0;width:100%;height: 140vw;
  overflow: hidden;mix-blend-mode: screen;
   animation: hue 1.5s linear infinite alternate;filter: hue-rotate(50deg);
.aurora{width:100%;
  transform: rotate(-5deg)translate(-25%,-10%);
  transform-origin: 0 0; 
 div{width: 100%;
  transform: perspective(1.3em)rotateX(.5deg);
  transform-origin: 50% 50%;
}
img{width:150%;filter:blur(3px);max-width: 900%;}
}
}
/*
.bg3{position:absolute;left: 0;top: 0;width:100%;overflow: hidden;
    height: 140vw;
   animation: hue 1.5s linear infinite alternate;filter: hue-rotate(50deg);
.aurora{width:250vw;height:400vw;position:relative;overflow: hidden;
   transform: rotate(-16deg)translate(-35%,-40%);
  transform-origin: 0 0; 
div{white-space: nowrap;width:100%;height: 100%;
 transform: perspective(50px)rotateX(3deg);
  transform-origin: 50% 50%;
img{display: inline-block;width:100%;height: 70%;animation: aurora 30s linear infinite reverse;filter:blur(1vw);}
}
}
}*/
/*
.bg3{position:absolute;left: 0;top: 0;width:100%;overflow: hidden;}
.aurora{position:relative;left: 0;width:130vw;height:130vw;top:0;
  transform: rotate(-15deg)translate(-25%,-20%);
  transform-origin: 0 0; filter: hue-rotate(0deg);
   animation: hue 1.5s linear infinite alternate;
 div{width: 100%;height:100%;
 transform: perspective(40px)rotateX(3deg);
  transform: perspective(1.3em)rotateX(1deg);
  transform-origin: 50% 50%;
}
  img{width: 100%;height:100%;
    filter:blur(.8vw);
  transform:scaleY(8);
  transform-origin: 50% 0;
}
}
*/
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
}/*
.bg3{height:400vw;
.aurora{width:420vw;height:400vw;
  transform: rotate(-100deg)translate(-100%, -35%);
  img{ filter:blur(3vw);}
}
}*/
/*
*/
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
