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
  <!-- loading end -->
   <Nav />
  <div class="home overflow-hidden font-['Noto_Serif_TC',serif] bg-[#40210D]">
    <div class="bg">
      <img src="@/section/s2/bg1.jpg" />
      <img src="@/section/s2/bg2.jpg" />
      <img src="@/section/s2/bg3.jpg" />
    </div>
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <div class="bg1">
    <S6 />
    <S7 />
    </div>
    <S8 />
    <Order />
  <!--
    <S9 />
    <S1new />
    <S1new2 /> -->
    
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes bg_l {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
.home > .bg{position: fixed;top: 0;left: 0;width: 100%;
  right: 0;mix-blend-mode: screen;
  img{position: absolute;top: 0;left: 0;width: 100%;
  animation: bg_l 6s infinite alternate;opacity: 0;
  &:nth-child(1){animation-delay: -3s;}
  &:nth-child(2){animation-delay: 3s;}
  &:nth-child(3){animation-delay: 0s;}
  }
}
.home > .bg1{background: url("@/section/s2/bg4.webp");
background-size: cover;
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
.caption{
      @apply absolute;
      right: 0;
      bottom: 0;
      font-weight: 300;
      font-size: size(15);
      padding: 5em 1em .5em 0;
      width: 100%;
      color: #FFF;
      text-align: right;
      background:linear-gradient(-3deg,#000c 10%,#0009 20%,#0003 50%,#0000 69%);
      text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.5),0px 0px 3px rgba(0, 0, 0, 1);
    }


      .txt {
    position: relative;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.7;
    text-shadow:0 0 10px #40210D,0 0 5px #40210D;
   // width: 100%;
  .title{
    font-size: 2.2em;
    margin: 2em 0 0em;
    line-height: 1.4;
    font-weight: 900;
    color:#C9A063;
    text-align: center;
    &::after,
    &::before{
      content: "";
      width: 15.7em;
      height: 1px;
      background: #C9A063;
      display: inline-block;
      vertical-align: middle;
      margin: auto 1em;
    }
  }
  .subtitle{
    font-size: 1.65em;
    font-weight: 700;
    margin: 0 0 .8em;
    color:#C9A063;
    line-height: 1.5;
  }
  .desc{
    margin: 0 0 1em;
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
    background:url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s ;
    &:hover{background-color: #0003;}
    }
    .prev{transform: scaleX(-1);
    }
    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }
  .slide-item img{width: 100%;height: 100%;
  object-fit: cover}
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
  
.home > .bg{
  img{left: -60%;width: 300%;
  }
}
  .caption{
      font-size: sizem(12);}

      .txt {
  .title{
    font-size: 2.3em;
    &::after,
    &::before{
      width: 3em;}
  }
  .subtitle{
    font-size: 1.4em;
  }
  }
.slider {
  @apply relative;
  .arrows{
    .prev,
    .next{
      width: 8%;
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
      duration: 800
    });
  };

})
</script>
