<template>
  <article class="s1">
    <div class="scrollbar" v-if="!$isMobile()">
      <div class="line"></div>
      <p class="clickable">SCROLL</p>
    </div>
    <video muted autoplay loop playsinline id="s1-video" class="video effect-zoom"></video>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply flex items-center;
  width: 100%;
  height: 100vh;

  .scrollbar {
    @apply flex flex-none flex-col items-center justify-center;
    flex-basis: size(160);
    height: 100%;
    background: linear-gradient(180.19deg, #304637 27.95%, #2E4E38 62.93%);
    padding-top: size(147);
    gap: size(36);
    .line {
      @apply relative;
      width: size(1.5);
      height: size(698.4);
      background-color: #C6A93E;
        overflow: hidden;
      &::after {
        @apply w-full absolute left-0 top-0;
        content: '';
        z-index: 1;
        height: 100%;
    background: linear-gradient(180.19deg, #304637 27.95%, #2E4E38 62.93%);
        animation: scrolling 2s forwards infinite;
        @keyframes scrolling {
          0% {
            transform: translate(0,-100%);
          }
          50% {
            transform: translate(0,0%);
          }
          100% {
            transform: translate(0,100%);
          }
        }
      }
    }
    p {
      font-family: 'noto sans tc';
      writing-mode: vertical-rl;
      color: #C6A93E;
      letter-spacing: size(2);
      font-size: size(10)
    }
    
  }
  .video {
    @apply grow h-full object-cover;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: size-m(667);
    max-height: size-m(750);
    position: relative;
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, onMounted, ref } from 'vue';
import { useGlobalStore } from "../store/global"

const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
const globalStore = useGlobalStore();

const videoLoader = () => {
  var video = document.getElementById('s1-video');
  video.src = 'https://h35.banner.tw/zongda/456.mp4';
  video.load();

  video.addEventListener('loadeddata', function () {
    globalStore.hideLoading();
  }, false);
}

onMounted(() => {
  videoLoader();
})
</script>
