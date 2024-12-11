<template>
  <div class="swipe-modal" v-if="opened">
    <div class="close" @click="close">
      <svg
        width="36"
        height="34"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2.70711"
          y1="1.29289"
          x2="34.7071"
          y2="33.2929"
          stroke="white"
          stroke-width="2"
        />
        <line
          y1="-1"
          x2="45.2548"
          y2="-1"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 34 2)"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
    <div class="img-box">
        <img :src="imgSrc" alt="" srcset="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.swipe-modal {
  @apply fixed left-0 top-0 w-full h-full;
  @apply bg-black;
  @apply z-[10000];
  transform: translateX(100%);
  animation: swipeIn 0.3s ease-in-out forwards;

  .img-box {
    @apply w-full h-full overflow-x-scroll overflow-y-hidden;
    img {
        @apply h-full w-auto;
    }
  }
  .close {
    @apply absolute right-0 top-0;
    margin: sizem(20);
  }

  @keyframes swipeIn {
    to {
      transform: translateX(0%);
    }
  }
}
</style>

<script setup>
import { getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties

const opened = ref(false)
const imgSrc = ref("")

const open = (img) => {
    if (!globals.$isMobile()) return    
    imgSrc.value = img
    opened.value = true
}

const close = () => {
    opened.value = false
    imgSrc.value = ''
}

defineExpose({
    open,
})


</script>
