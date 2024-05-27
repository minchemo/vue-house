<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 z-[10000] bg-[#fff]">
    <img class="w-32" src="//h65.tw/img/loading_w.gif" alt="loading" srcset="">
  </div>
  <!-- loading end -->
  <!--  --> 
  <Nav></Nav>
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#000]">
  
    <S1 :inside="1" />
    <S5 :maxImages="0" />
    <Order />
  <!--
    <S10 />
    <div class="bg">
    </div>
    <S6 />
    <S7 />
    <S1new />
    <S1new2 /> -->
    
  </div>
</template>



<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an {
  to {
	transform: translate(0)
  }
}

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
.bg{background: linear-gradient(135deg, #3F94CA 0%, #3F94CA 20%, #71A3A5 25%, #E0C663 33%, #E1A843 40%, #E1A843 50%,#E0C663 57%, #71A3A5 63%,#3F94CA 65%,#3F94CA 67%, #71A3A5 72%,#E0C663 78%,#E1A843 83%,#E1A843 85%,#E0C663 90%, #71A3A5 95%);}
*/
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
      color: #FFF;z-index: 3;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);}


      .txt {
    position: relative;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.9;
    width: 100%;letter-spacing: 0.06em;
    text-align:justify;
  .title{
    font-size:1.65em;
    margin:0 auto 0.35em;
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: 0.45em;
  }
  .subtitle{
    font-size: 1.41em;
    letter-spacing: 0.3em;
    font-weight: 400;
    margin:0 auto 0.55em;
    line-height: 1.5;
  }
  .desc{
    margin: 0 0 0;
  }
  }
.slider {
  @apply relative;
  z-index: 2;
  .slide-item{
  img{width: 100%;height: 100%;}
  
  }
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
    gap:.6em;
    color: #fff;
    li {
      button {
        @apply rounded-full;
        width: 1em;
        height: 1em;
        border: 3px solid currentColor;
         // background:currentColor;
      transition: transform .5s;
      &:hover{
          //transform: scale(.8);
        border: 3px solid #FDD118;
        }

        &.is-active{
          //transform: scale(1.5);
        border: 3px solid #FDD118;
      }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  

.home > .bgh{width: 250%;
  top: 0;left: 0;
}
  .caption{
      font-size: sizem(12);}

      .txt {line-height: 1.6;letter-spacing: 0.01em;
  .title{
    font-size: 1.1em;
  }
  .subtitle{
    font-size: 1.4em;
  }
  }
.slider {
  @apply relative;
  .slide-item{
  img{border-radius:0em;}
  
  }
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
import S5 from "@/section/s5.vue"
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
