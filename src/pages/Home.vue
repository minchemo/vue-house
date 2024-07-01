<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div
    v-bind:class="{
      'opacity-0': !isLoading,
      'pointer-events-none': !isLoading,
    }"
    class="transition-all duration-500flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]"
  >
    <img class="w-32" src="@/assets/loading_w.gif" alt="鼎藏豐碩" srcset="" />
  </div>
  <!--loading end-->
  <Nav v-if="config.showNav" />
  <div
    class="home bg-[#fff] overflow-hidden font-['Noto_Serif_TC'] pb-[64px] md:pb-0"
  >
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <Order />
  </div>
</template>

<style>
@import "@/assets/style/custom-aos.css";
img {
  display: inline;
  max-width: unset;
  height: unset;
  /* margin: 0 auto; */
}

.home {
  background: #fff;
}

@media screen and (max-width: 768px) {
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from "aos"

const isLoading = ref(true)
const gtmNoScript = ref("")
const config = ref({
  showNav: false,
})

onMounted(async () => {
  if (preloadList.length === 0) {
    isLoading.value = false
  }

  preloadImages(preloadList, function () {
    console.log("all images loaded")
    isLoading.value = false
  })

  window.onload = function () {
    AOS.init({
      offset: 0,
      duration: 800,
    })
  }
})

/**
 * 預載圖片，直接帶入路徑，由上而下依序加載，完成後才會關閉loading畫面
 */
const preloadList = [
  // "s2/leaf/1_.png",
  // "s2/leaf/1.png",
  // "s2/leaf/1i.png",
  // "s2/leaf/1im.png",
  // "s2/leaf/2_.png",
  // "s2/leaf/2.png",
  // "s2/leaf/2i.png",
  // "s2/leaf/2im.png",
  // "s2/leaf/3_.png",
  // "s2/leaf/3.png",
  // "s2/leaf/3i.png",
  // "s2/leaf/3im.png",
  // "s2/leaf/4_.png",
  // "s2/leaf/4.png",
  // "s2/leaf/4i.png",
  // "s2/leaf/4im.png",
  // "s2/leaf/5_.png",
  // "s2/leaf/5.png",
  // "s2/leaf/5i.png",
  // "s2/leaf/5im.png",
  // "s2/leaf/6_.png",
  // "s2/leaf/6.png",
  // "s2/leaf/6i.png",
  // "s2/leaf/6im.png",
]
const preloadThreshold = 0.8

function preloadImages(urls, allImagesLoadedCallback) {
  var loadedCounter = 0
  var toBeLoadedNumber = urls.length
  urls.forEach(function (url) {
    preloadImage(url, function () {
      loadedCounter++

      console.log("loaded " + loadedCounter + " of " + toBeLoadedNumber)
      if (loadedCounter == toBeLoadedNumber) {
        allImagesLoadedCallback()
      }
    })
  })
  function preloadImage(url, anImageLoadedCallback) {
    var img = new Image()
    img.onload = anImageLoadedCallback
    img.src = url
  }
}
</script>
