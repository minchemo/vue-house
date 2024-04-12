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
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif]">
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
    <Order />
  <!--
    <S9 />
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

.home{
  &::before{content: "";position: fixed;
  top: 0;left: 0;right: 0;bottom: 0;
  background: url("@/section/s1/bg2.webp");

}
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
      font-weight: 400;
      font-size: size(15);
      color: #FFF;z-index: 3;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);}


      .txt {
    position: relative;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.8;
    width: 100%;letter-spacing: 0.03em;
    text-align:justify;
  .title{
    @apply font-['Noto_serif_TC',serif];
    font-size: 1.1em;
    margin:0 auto 5.2em 2.6em;
    line-height: 1.3;
    font-weight: 900;letter-spacing: 0.3em;
    b{margin-right: .1em;}
    .icon{background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 47 47' fill='%2322491B' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='23.5' cy='23.5' r='23.5'/%3E%3Cpath stroke='%23FFF' stroke-width='5' d='M7,23.5h33 M23.5,7v33'/%3E%3C/svg%3E");
  width: 1em;height: 1em;display: inline-block;position: relative;top: -.3em;margin-right: .1em;
    font-size:1.6em;
  }
  .title_c{
    font-size:3.5em;}
    .en{letter-spacing: 0.11em;;display: block;margin-left: 1.4em;}
    &::after,
    &::before{content: "";z-index: -1;
    position: absolute;}
    &::before{background: #c6884e3d;height: 3em;width: 150%;
    top: 3em;left: 1em;
    }

    &::after{
      background-image: url("data:image/svg+xml,%3Csvg stroke='%23b77f6138' fill='none' stroke-width='2' viewBox='0 0 261 261' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M178.7,81.7l-48.5-19.9L81.8,82l-20,48.5L82,178.9l48.5,19.9l48.4-20.2l19.9-48.5L178.7,81.7z M141,203.1l23.8,9.8l9.8-23.8L141,203.1z M86.4,189.4l10,23.8l23.8-9.9L86.4,189.4z M47.5,96.3l10,23.8l13.9-33.7L47.5,96.3z M71.6,174.6l-14.1-33.7l-9.8,23.9L71.6,174.6z M95.9,47.7l-9.8,23.8l33.6-14L95.9,47.7z M164.4,47.5l-23.8,9.9l33.7,13.8L164.4,47.5z M189.2,86l14,33.6l9.8-23.8L189.2,86z M189.4,174.3l23.8-9.9l-9.9-23.8L189.4,174.3z M53.1,130.5l-12.5-29.9L3.4,130.7l37.5,29.7L53.1,130.5z M219.9,100.1l-12.3,30l12.5,29.8l37.3-30.1L219.9,100.1z M172.3,45.6l12.5,30l29.9,12.3l5.1-47.7L172.3,45.6z M130.1,53.1l29.9-12.5L129.9,3.2l-29.8,37.5L130.1,53.1z M40.3,40.8l5.5,47.6l29.9-12.5l12.3-30L40.3,40.8z M45.9,172.7l-5.1,47.7l47.5-5.5l-12.4-29.8L45.9,172.7z M130.6,207.5L100.7,220l30.1,37.2l29.7-37.4L130.6,207.5z M220.5,219.8l-5.5-47.5l-29.9,12.5l-12.3,29.9L220.5,219.8z M251.2,84.1l-25.3,10.5l33.5,26.6C258.6,108.7,255.8,96.2,251.2,84.1L251.2,84.1z M222.8,87.3l25.3-10.6c-5.3-11.7-12.2-22.5-20.7-32.1L222.8,87.3z M172.8,37.5l42.4-4.8c-9.6-8.3-20.4-15.2-32.1-20.4L172.8,37.5z M175.8,9.2c-12-4.5-24.6-7.2-37.3-8l26.9,33.3L175.8,9.2z M94.8,34.6l26.5-33.4c-12.5,0.9-25,3.6-37,8.2L94.8,34.6z M44.8,33.2l42.6,4.5L76.9,12.5C65.2,17.8,54.4,24.8,44.8,33.2z M12.4,77.4l25.2,10.4l-4.8-42.4C24.4,55.1,17.5,65.9,12.4,77.4L12.4,77.4z M1.3,122.1l33.2-26.9L9.3,84.8C4.8,96.8,2.1,109.4,1.3,122.1L1.3,122.1z M9.5,176.3l25.3-10.6L1.3,139.3C2.2,151.9,4.9,164.4,9.5,176.3z M37.8,173.1l-25.3,10.6c5.3,11.8,12.3,22.6,20.7,32L37.8,173.1L37.8,173.1z M87.9,223l-42.4,4.9c9.7,8.4,20.4,15.2,32,20.4L87.9,223L87.9,223z M122.2,259.4l-27-33.4l-10.4,25.3C97,255.9,109.5,258.6,122.2,259.4z M165.9,225.8l-26.6,33.6c12.7-0.9,25.2-3.6,37.2-8.2L165.9,225.8z M216,227.3l-42.8-4.6l10.6,25.3C195.6,242.8,206.4,235.8,216,227.3z M248.4,183.1l-25.4-10.4l4.9,42.6C236.4,205.6,243.3,194.8,248.4,183.1L248.4,183.1z M259.6,138.3l-33.5,27l25.4,10.4C256,163.6,258.8,151,259.6,138.3z'/%3E%3C/svg%3E");
      width: 9.1em;height: 9.1em;top:-1.5em;left: 2.5em;
      
    }


  }
  .subtitle{
    @apply font-['Noto_serif_TC',serif];
    font-size: 2.4em;
    font-weight: 700;
    margin:0 auto 0.3em;
    line-height: 1.2;letter-spacing: 0.03em;
  }
  .hr{
    width:100%;height: .4em;
    border-top: 2px solid currentColor;
    border-bottom: 1px solid currentColor;
    margin: auto auto .5em auto;
  }
  .desc{
      color: #000;
  }
  }
.slider {
  @apply relative;
  z-index: 2;
  .slide-item{
  img{width: 100%;height: 100%;object-fit: cover}
  
  }
  .arrows{
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0; 
    height: 100%;
    pointer-events: none;
    left: -8%;
    width: 116%;
    .prev,
    .next{
      width:5%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;
      
  justify-content: center;
  align-items:center;
    background:url("data:image/svg+xml,%3Csvg stroke='%23000' stroke-width='5' stroke-linecap='round' width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s ;
    &:hover{
      //background-color: #0003;
    }
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
    bottom: -2em;
    gap: .5em;
    color: #B4B4B4;
      justify-content: center;
    li {
      button {
        @apply rounded-full;
        width: 1em;
        height: 1em;
          background:currentColor;
      transition: transform .5s;
      &:hover{
    color: #808080;}

        &.is-active{
    color: #22491B;
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

      .txt {
  .title{
    font-size: 1em;
    margin:0 auto 2.5em 3em;
    &::before{left: .6em;
    }
  }
  .subtitle{
    font-size: 2em;
  }
  .hr{
    margin: auto auto .7em auto;}
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
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import S10 from "@/section/s10.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';
import s4 from "../section/s4.vue"

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
