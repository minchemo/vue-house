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
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#78B9CD]">
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <!-- <S2v /> -->
  <!--
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



      .txt {
    position: relative;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.6;
    width: 100%;
  .desc{
  }
  }
  
  .caption{
      @apply absolute;
      left:1em;
      bottom: .5em;
      font-weight: 300;
      font-size: size(15);
      color: #FFF;z-index: 3;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);}
  .arrows{
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0; 
    height: 100%;
    pointer-events: none;
    .prev,
    .next{
      width:3%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;
      
  justify-content: center;
  align-items:center;
    background:url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s;
    transition:transform .5s;
    &:hover{transform: translateX(10%);}
   // &:hover{background-color: #0003;}
    }
    .prev{transform: scaleX(-1);
      &:hover{transform: scaleX(-1)translateX(10%);}
    }
    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }
  .slider {
    height:100%;
    .slide{
      width: 100%;height:100%;
    > div{height:100%;}
    }
    .slide-item{//height:100%;
      img{height: 100%; width: 100%;}
    }

  }


@media screen and (max-width: 767px) {
  
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
//import S2 from "@/section/s2.vue"
// import S2v from "@/section/s2v.vue"
// import S11 from "@/section/s11.vue"
/* 
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
