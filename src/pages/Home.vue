<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img//loading_w.gif" alt="loading" srcset="">
  </div>
  <!-- loading end -->
   <Nav v-if="config.showNav" />
  <div class="home bg-[#340000] overflow-hidden font-['Noto_Sans_TC',sans-serif]">
    <div class="bgh">
      <img src="@/section/s1/light2.svg" class="light bg-pc"/>
      <img src="@/section/s1/light2.svg" class="light bg-pc"/>
      <img src="@/section/s1/light2m.svg" class="light bg-mo"/>
    </div>
    <!--
    <img src="@/section/s1/bg.webp" class="bgh bg-pc">
    <img src="@/section/s1/bgm.webp" class="bgh bg-mo">
  -->
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
  <!--
  
    <S10 />
    <S11 />
    <S1new />
    <S1new2 /> -->
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';
  .bgh{position: fixed;width: 100%;top:0;left: 0;bottom: 0;right: 0;
  background: url("@/section/s1/bg.webp");
  background-size: 100% auto;
  .light{width: 100%;}
  }
/*
@keyframes an1 {
  to {
     transform:scale(1);opacity: 1;
  }
}

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

  .bgh{
    opacity: .3;
  }
*/

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/*
.home > .bgh{position: fixed;width: 100%;
  top: 0;left: 0;
}
*/
.bg-mo{
  display: none;
}
img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

  .caption{
      @apply absolute;
      right:1em;
      bottom: .5em;
      font-weight: 300;
      font-size: size(15);
      color: #FFF;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);}


      .txt {
    position: relative;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.7;
    width: 100%;
  .title{
    font-size: size(42);
    margin: 0em;
    line-height: 1.4;
    font-weight: 700;
    color: #E1A86C;
    text-align: left;
    &::after{
      content: "";
      width: 8.7em;
      margin: auto .0em auto .3em;
      height: 1px;
      background: #fff;
      display: inline-block;
      vertical-align: middle;
    }
    margin-bottom: size(53);
  }


  .subtitle{
    font-size: size(30); 
    font-weight: 700;
    margin: 0 0 .8em;
    color:#E1A86C;
    line-height: 1.5;
  }
  .desc{
    margin: 0 0 1em;
    font-size: size(20); 
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
  
  .bgh{
  background-image: url("@/section/s1/bgm.webp");
  background-size: 100% auto;
  .light{width: 100%;}
  }
/*
.home > .bgh{width: 100%;
  top: 0;left: 0;
  opacity: .3;
}
  */
.bg-mo{display: block;}
.bg-pc{display: none;}
  .caption{
      font-size: sizem(12);}

  .txt {
  .title{
    font-size: sizem(20);
  margin-bottom: sizem(20);
    text-align: center;
    &::before,
    &::after{
      content: "";
      width: 4.2em !important;
      height: 1px;
      background: #fff;
      display: inline-block;
      vertical-align: middle;
    }
    &::before{margin-right: 1em; margin-left: 0;}
    &::after{margin-left: 1em; margin-right: 0;}
  }
  .subtitle{
    font-size: sizem(15);
    text-align: center;
  }
  .desc{
    font-size: sizem(12);
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
// import S2v from "@/section/s2v.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
//import S10 from "@/section/s10.vue"
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
