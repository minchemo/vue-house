
<template>
    <div
      class="viewbox"
      ref="viewbox"
    >
        <img ref="viewImg" :src="mapImage" alt="" srcset=""
      :style="viewboxStyle">
        <div class="mask" v-bind:class="{ hide: swiped }" v-if="$isMobile()">
            <img src="@/components/fullview/finger.png" alt="" srcset="">
        </div>
    </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox {
    position: relative;
    height: 100%;
    overflow: hidden;
    text-align: center;

    > img {
        width: auto;
        height: 100%;
        max-width: unset;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    }
}

@media screen and (max-width: 767px) {
    .viewbox {
        height: 100%;
        overflow: hidden;

        img {
            width: auto;
            height: 100%;
        }

        .mask {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            opacity: 1;
            transition: all 1s;
            background-color: rgba($color: #008DD5, $alpha: 0.5);

            img {
                height: 47px;
            }

            &.hide {
                opacity: 0;
            }
        }
    }
}
</style>
<script setup>
import BScroll from '@better-scroll/core';
import { onMounted, ref, computed, getCurrentInstance } from 'vue';

const props = defineProps({
  mapImage: {
    type: String,
    required: true,
  },
  bgImage: {
    type: String,
    default: '', // 沒有就不套用
  },
  offsetRatio: {
    type: Number,
    default: 1.98,
  },
});

const viewboxStyle = computed(() => {
  return props.bgImage
    ? { backgroundImage: `url(${props.bgImage})` }
    : {};
});

const viewbox = ref();
const viewImg = ref();
const swiped = ref(false);

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

onMounted(() => {
  viewImg.value.addEventListener('load', () => {
    if (isMobile.value) {
      let scroll = new BScroll(viewbox.value, {
        probeType: 2,
        scrollX: true,
        scrollY: true,
        disableTouch: false,
        disableMouse: false,
        bindToWrapper: true,
        eventPassthrough: "vertical",
        bounce: false,
      });

      scroll.scrollTo(scroll.maxScrollX / props.offsetRatio, 500);
      setTimeout(() => {
        scroll.on("scroll", () => {
          swiped.value = true;
        });
      }, 1000);
    }
  });
});
</script>