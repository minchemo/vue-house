<template>
  <article class="video">
    <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FETtoday%2Fvideos%2F892915162943300%2F&show_text=false&height=560&width=1000&t=0" 
    width="1000" height="560" 
    style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"
    class="ifr"
    ></iframe>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.video {
  @apply relative w-full z-0;
  height: auto;
  //background-image:linear-gradient(0deg, #093948 70%, rgba(15, 35, 81, 0) 100%);
 .ifr{margin: auto;}
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .video {
   //height: sizem(1920);
   // background-image:linear-gradient(0deg, #093948 75%, rgba(15, 35, 81, 0) 100%);



  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const activeLeaf = ref(1)

const splide = ref()

const move = (idx1, idx2, dest) => {
  activeLeaf.value = idx2 + 1
}

const replaceBg = (isHover, event, index) => {
  const target = event.target
  const bgUrl = isHover
    ? target.getAttribute("data-bg2")
    : index == activeLeaf.value
    ? target.getAttribute("data-bg2")
    : target.getAttribute("data-bg")

  target.style.backgroundImage = `url(${bgUrl})`
}
</script>
