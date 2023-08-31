<template>
  <article class="s1">
    <video muted autoplay loop playsinline id="s1-video" class="video effect-zoom"></video>
  </article>
</template>
<script setup>
import { computed, getCurrentInstance, onMounted, ref } from 'vue';
import { useGlobalStore } from "../store/global"
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const globalStore = useGlobalStore();

const videoLoader = () => {
  var video = document.getElementById('s1-video');
  video.src = globals.$isMobile() ? 'https://h35.banner.tw/zongda/yama_m.mp4' : 'https://h35.banner.tw/zongda/yama_pc.mp4';
  video.load();

  video.addEventListener('loadeddata', function () {
    globalStore.hideLoading();
  }, false);
}

onMounted(() => {
  videoLoader();
})
</script>
