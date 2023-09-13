<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="@/assets/loading_w.gif" alt="泰嘉拓真" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div class="home bg-[#fff] overflow-hidden font-['Noto_Sans_TC'] pb-[64px] md:pb-0">
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 v-if="false" />
    <S9 />
    <Order />
  </div>
</template>


<style>
img {
  display: inline;
  max-width: unset;
  height: unset;
  /* margin: 0 auto; */
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
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
const config = ref({
  showNav: true
})



onMounted(async () => {


  preloadImages(preloadList, function () {
    console.log('all images loaded');
    isLoading.value = false
  });

  window.onload = function () {
    AOS.init({
      offset: 0,
      duration: 800
    });
  };

})


/**
 * 預載圖片，直接帶入路徑，由上而下依序加載，完成後才會關閉loading畫面
 */
const preloadList = [
  new URL("../section/anim/01/02.webp", import.meta.url).href,
  new URL("../section/anim/01/03.webp", import.meta.url).href,
  new URL("../section/anim/01/04.webp", import.meta.url).href,
  new URL("../section/anim/01/05.webp", import.meta.url).href,
  new URL("../section/anim/01/06.webp", import.meta.url).href,
  new URL("../section/s3/cloud.webp", import.meta.url).href,
  new URL("../section/s3/cloud_m.webp", import.meta.url).href,
]

function preloadImages(urls, allImagesLoadedCallback) {
  var loadedCounter = 0;
  var toBeLoadedNumber = urls.length;
  urls.forEach(function (url) {
    preloadImage(url, function () {
      loadedCounter++;

      console.log('loaded ' + loadedCounter + ' of ' + toBeLoadedNumber);
      if (loadedCounter == toBeLoadedNumber) {
        allImagesLoadedCallback();
      }
    });
  });
  function preloadImage(url, anImageLoadedCallback) {
    var img = new Image();
    img.onload = anImageLoadedCallback;
    img.src = url;
  }
}



</script>
