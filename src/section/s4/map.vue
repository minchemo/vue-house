<template>
  <div class="map-viewbox scroll-wrapper" ref="viewbox">
    <div class="scroll-content">
      <img
        class="view1 select-none"
        ref="viewImg"
        src="@/section/s4/map.webp"
        alt=""
        srcset=""
      />
      <img class="logo" src="@/section/s4/logo.png" alt="" srcset="" />
      <img class="line" src="@/section/s4/line.svg" alt="" srcset="" />
    </div>

    <div class="mask" v-bind:class="{ hide: swiped }" v-if="isMobile">
      <img src="@/section/s4/finger.png" alt="" srcset="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.map-viewbox {
  @apply relative left-0 top-0;

  .scroll-content {
    @apply relative aspect-[1920/1150] h-full w-auto select-none;
    .view1 {
      @apply absolute left-0 top-0 h-full min-w-full;
    }
    .logo {
      @apply absolute z-10;
      width: size(410);
      left: 4.5%;
      top: 4%;
    }
    .blue {
      @apply absolute z-[1] h-full min-w-full;
    }
    .line {
      @apply absolute z-[1] h-full min-w-full;
    }
    .orange {
      @apply absolute z-[1] h-full min-w-full;
    }

    img {
      height: auto;
      min-width: unset;
      max-width: unset;
    }
  }
}

@media screen and (max-width: 767px) {
  .map-viewbox {
    @apply relative;
    height: 100%;
    overflow: hidden;

    .scroll-content {
      @apply relative aspect-[1920/1150] h-full w-auto;
      .logo {
        width: sizem(176.5);
      }
    }

    .mask {
      @apply bg-[#555555]/50;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
      opacity: 1;
      transition: all 1s;

      img {
        min-width: unset;
        width: sizem(290);
        height: sizem(55.2);
      }

      &.hide {
        opacity: 0;
      }
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
import BScroll from "@better-scroll/core"

const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())
const viewbox = ref()
const viewImg = ref()

const swiped = ref(false)
const offsetRatio = 100 //調整此值設定X軸位置偏移參數

onMounted(() => {
  viewImg.value.addEventListener("load", () => {
    let scroll = new BScroll(viewbox.value, {
      probeType: 2,
      scrollX: globals.$isMobile() ? true : false,
      scrollY: true,
      disableTouch: false,
      disableMouse: false,
      bindToWrapper: true,
      eventPassthrough: "vertical",
      bounce: false,
    })

    scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500)
    setTimeout(() => {
      scroll.on("scroll", () => {
        swiped.value = true
      })
    }, 1000)
  })
})
</script>
