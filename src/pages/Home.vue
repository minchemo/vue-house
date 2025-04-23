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
  <!--loading end-->
  <!-- font-['Noto_Serif_TC',serif] -->
  <!-- font-['Noto_Sans_TC',sans-serif] -->
   <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#FFE600] text-[#000]">
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
  <!--
    <S3 />
     -->
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
.home{
background: linear-gradient(254deg, #EBF7F6 , #A3D1D5 , #8BBFD9 , #A3D1D5, #EBF7F6);
}
img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
.slider {
  @apply relative;
  z-index: 2;
  .slide-item{object-fit: cover;
    background-size: cover;
  img{width: 100%;height: 100%;object-fit: cover}
  
  }
  .splide{height: 100%;
  .splide__track {height: 100%;}
  }
  .splide__arrows{
    @apply absolute z-10 flex justify-between top-1/2 -translate-y-1/2;
    width: 95%;
    left: 0;right: 0;
    margin: auto;
    padding: 0; 
    height: 100%;
    pointer-events: none; 
    // filter:drop-shadow(0em 0.2em 0.2em rgba(0, 0, 0, .5));
    .splide__arrow{
      width:9%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;
      justify-content: center;
      align-items:center;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle fill='%23fff' stroke='%23000' cx='10' cy='10' r='9'/%3E%3C/svg%3E") no-repeat center;
    // background:url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
     background-size: 100% auto;
    transition:background-color .5s ;
    svg{width: 70%;}
    &:hover{background-color: #0000;}
    }
    .splide__arrow--prev{transform: scaleX(-1);
    }
    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: 0.5em;
    gap: 1.2em;
    color: #fff9;
    li {
      button {
        @apply rounded-full;
        width: 1em;
        height: 1em;
        background:currentColor;
        transition: background .5s, transform .5s;
        &:hover{
          transform: scale(.8);
        }
        &.is-active{
          background:#fff;
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
//import S3 from "@/section/s3.vue"
// import S2v from "@/section/s2v.vue"
// import S11 from "@/section/s11.vue"
/* 
import S2 from "@/section/s2.vue" */
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
      duration: 2000
    });
  };

})
</script>
