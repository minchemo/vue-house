<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="長耀加" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-white overflow-hidden font-['Noto_Sans_TC',serif]">
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
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}

.slider {
  @apply relative;
  .arrows{
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0 size(18); 
    .prev {
      width: size(31);
    }
    .next{
      width: size(31);
    }
    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: size(19);
    gap: size(6.9);
    li {
      button {
        @apply rounded-full  hover:opacity-50;
        width: size(62.84);
        height: size(9.4);
        border: size(1) solid #fff;

        &.is-active{
          @apply bg-white;
      }
      }
    }
  }
}

.decor.aos-animate {
  @apply relative;
  &::before {
    @apply absolute bg-contain bg-no-repeat;
    content: '';
    background-image: url('@/section/text-decor.png');
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 500ms;
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  }
  &::after {
    @apply absolute bg-contain bg-no-repeat;
    content: '';
    background-image: url('@/section/text-leaf.png');
    opacity: 0;
    transform: translateX(-100%);
    animation: fadeIn 1s forwards;
    animation-delay: 1000ms;
    @keyframes fadeIn {
      to {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
}

@media screen and (max-width: 767px) {

.slider {
  @apply relative;
  .arrows{
    @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
    padding: 0 sizem(6.5); 
    .prev {
      width: sizem(11);
    }
    .next{
      width: sizem(11);
    }
    img {
      margin: unset;
      @apply cursor-pointer hover:opacity-50;
    }
  }
  .splide__pagination {
    @apply absolute flex justify-center w-full;
    bottom: sizem(6.7);
    gap: sizem(2.5);
    li {
      button {
        @apply rounded-full  hover:opacity-50;
        width: sizem(22.3);
        height: sizem(3.34);
        border: sizem(1) solid #fff;

        &.is-active{
          @apply bg-white;
      }
      }
    }
  }
}}

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

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: false
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
