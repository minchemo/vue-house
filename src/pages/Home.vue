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
  <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#000] text-[#fff]">
    <div class="light-h light1"></div>
    <div class="light-h light2"></div>
    <div class="light-h light3"></div>
    <S1 />
    <!-- 
    <S9 />
    <S2v /> -->
    <!--
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
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

.home {
  width: 100%;
  font-size: sizem(13);
  line-height: 1.7;

  @media screen and (min-width: 768px) {
    font-size: size(22);
  }

  &::before {
    content: "";
    background: url("@/section/s1/bgm.jpg");
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 768px) {
      background-image: url("@/section/s1/bg.jpg");
    }
  }

  .light-h {
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    font-size: size(1470);
    &::before,
    &::after{
      content: "";
      display: block;
    position: absolute;
      width: 100%;
      height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
    mix-blend-mode: overlay;
   // background: #fff;
    }
     &::after{
opacity: 0.7;
background: radial-gradient(50% 50% at 50% 50%, rgba(152, 228, 255, 0.50) 0%, rgba(152, 228, 255, 0.00) 100%);
mix-blend-mode: plus-lighter;}
  }
  .light1{
    top:size(-716);
    left:size(-840);
  }
  .light2{
    top:size(364);
    right:size(-788);
  }
  .light3{
    top:size(1444);
    left:size(-840);
  }
}


.caption {
  @apply absolute;
  right: 1em;
  bottom: .5em;
  font-weight: 300;
  font-size: sizem(9);
  color: #FFF;
  z-index: 3;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);

  @media screen and (min-width: 768px) {
    font-size: size(15);
  }
}

.txt {
  position: relative;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6;
  width: 100%;
  letter-spacing: 0em;
  text-align: center;
  z-index: 3;

  @media screen and (min-width: 768px) {
    // text-align: justify;
  }

  .title {
    font-size: 1.9em;
    margin: 0em auto 0.5em;
    line-height: 1.38;
    font-weight: 700;
    letter-spacing: 0em;

    // Font-family: 'Noto Serif TC',serif;
    b {
      font-size: 1.2em;
      line-height: 1;
    }

    @media screen and (min-width: 768px) {
      font-size: 2.25em;
      margin: 0em auto 0.3em;

    }
  }

  .subtitle {
    font-size: 1.2em;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0em;
    margin-bottom: 0.4em;

    @media screen and (min-width: 768px) {
      font-size: 1.1em;

    }
  }

  .icon {
    width: 1.7em;
    margin: 1.2em auto;
  }

  .en {
    height: 6em;
    margin: 0 auto 1em;

    @media screen and (min-width: 768px) {
      // height: 6em;
      //  font-size: 5em;
    }
  }

  .t1 {
    height: 5.4em;
    margin: 0 auto 1em;

    @media screen and (min-width: 768px) {
      height: 4.5em;
      // height: 6em;
      //  font-size: 5em;
    }
  }

  .hr {
    width: 9em;
    margin: auto;
    margin: 1em auto;

    @media screen and (min-width: 768px) {
      width: 10em;

    }
  }

}

.slider {
  @apply relative;
  z-index: 2;

  .slide-item {
    img {
      width: 100%;
      height: 100%;
      border-radius: 0;
      object-fit: cover
    }

  }

  .arrows {
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0;
    height: 100%;
    pointer-events: none;
    filter: drop-shadow(0em 0.2em 0.2em rgba(0, 0, 0, .5));
    overflow: hidden;

    .prev,
    .next {
      position: relative;
      width: 5%;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;

      justify-content: center;
      align-items: center;
      background: url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
      background-size: 50% auto;
      transition: background-color .5s;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0003;
        transform: translateX(100%);
        transition: transform .2s;
        filter: none;
        overflow: hidden;
      }

      @media screen and (min-width: 768px) {
        &:hover:before {
          transform: translateX(0%);
          //  
        }
      }
    }

    .prev {
      transform: scaleX(-1);
    }

    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }

  .splide__pagination {
    @apply absolute flex justify-center w-full;
    font-size: size(15);
    bottom: 0;
    gap: .5em;
    color: #CCC;

    @media screen and (max-width: 767px) {
      display: none;
    }

    li {
      button {
        @apply rounded-full relative;
        width: 1em;
        height: 1em;
        display: block;
        background: transparent;
        transition: transform .5s;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          display: block;
          //   background-color: currentColor;
          border-radius: 50%;
          //    opacity: .5;
          left: 0;
          top: 0;
          transform: scale(1);
          transition: transform .5s, opacity .5s;
          border: 3px solid currentColor;
        }

        &:hover {
          transform: scale(1);
          opacity: 1;
        }

        &.is-active {
          color: #FFF;

          &::before {
            transform: scale(1);
            opacity: 1;
          }
        }
      }
    }
  }
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
/* import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"  */
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref, provide } from "vue"

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
const modalOpen = ref(false)
const modalType = ref('')

provide('contactModal', {
  modalOpen,
  modalType
})
</script>
