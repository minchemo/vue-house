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
  <div class="home bg-[#000] overflow-hidden font-['Noto_Sans_TC',sans-serif] text-[#000]">
     <!--  <img src="@/section/s1/bg0.jpg" class="bgh">
    <div class="bg">
      <img src="@/section/s1/bg1.png" class="bg1" />
      <img src="@/section/s1/bg2.png" class="bg2" />
    </div> -->
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <S10 />
    <!-- <S2v /> -->
  <!--
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
.user-n{
  user-select: none;
}
.events-n{
  pointer-events: none;
}

.home{
  &::before{content: "";
  position: fixed;
  top: 0;left: 0;right: 0;bottom: 0;
    width: 100%;
    background: url("@/section/s1/bg.jpg");
    background-size: 100% auto;
}
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

  .caption{
    position: absolute;
    right:1em;
    bottom: .5em;
    font-weight: 300;
    font-size: size(15);
    color: #FFF;
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
  }

  .title{
  @apply font-['LXGW_WenKai_Mono_TC'];
    font-size: 1em;
    margin: 0;
    line-height: 1.4;
    font-weight: 400;
    color:#fff;
    text-align: center;
    padding: 0.3em 0;width: 21.3em;z-index: 2;
    img{height: 2.4em;vertical-align: bottom;margin: 0 0 0 1.7em}
    &::before{content: "";display: block;z-index: -1;
      position: absolute;top: 0;left: 0;width: 100%;height: 100%;
    background: url("@/section/s3/title.jpg") center;
    background-size: cover;}
  }

    .txt {
    position: relative;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.8;
    width: 100%;
  .subtitle{
    @apply relative font-['LXGW_WenKai_Mono_TC'];
    font-size: 2em;
    font-weight: 400;
    margin: 0;
    color:#958078;
    line-height: 1.25;
    &::after,
    &::before{content: "";background: #fff9;position: absolute;bottom: 0;right: -.15em;opacity: .8;}
    &::after{width: 1px;height: 3.9em;}
    &::before{width: 12em;height: 1px;}
  }
  .desc{
    margin: 2em 0 0.5em;
    text-align: justify;
    b{color:#C9A063;}
  }
  }
.slider {
  @apply relative;
  .arrows{
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0; 
    height: 100%;
    pointer-events: none;
    .prev,
    .next{
      width:5%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;
      
  justify-content: center;
  align-items:center;
    background:url("data:image/svg+xml,%3Csvg viewBox='0 0 30 14' fill='none' stroke='%23FFF' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='17,1 28,13 0,13'/%3E%3C/svg%3E") no-repeat center;
    background-size: 60% auto;
    background-position: 50% 100%;
    transition:background-color .5s ;
    //&:hover{background-color: #0003;}
    }
    .prev{transform: scaleX(-1);
    }
    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: 0;
    gap: .5em;
    color: #fff;
    li {
      button {
        @apply rounded-full  hover:opacity-50;
        width: 1em;
        height: 1em;
        border: 2px solid currentColor;

        &.is-active{
          background:currentColor;
      }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  
.home{
  &::before{content: "";
   // background-image: url("@/section/s1/bgm.webp");
}
}

  .caption{
      font-size: sizem(11);}

      .txt {
  .title{
 //   font-size: 1em;
    &::after,
    &::before{
      width: 2.6em;}
  }
  .subtitle{
    font-size: 1.5em;
  }
  }
.slider {
  @apply relative;
  .arrows{
    .prev,
    .next{
      width: 10%;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    display: none;
    bottom: sizem(6.7);
    gap: sizem(2.5);
    li {
      button {
        @apply rounded-full  hover:opacity-50;
        width: sizem(10.3);
        height: sizem(3.34);
        border: sizem(1) solid #fff;

        &.is-active{
          @apply bg-white;
      }
      }
    }
  }
}
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import S10 from "@/section/s10.vue"
/* 
 */
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import {computed, getCurrentInstance, onMounted, ref } from "vue"

import AOS from 'aos';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const isLoading = ref(true)
const gtmNoScript = ref('')
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
