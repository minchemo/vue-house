<template>
  <article class="s4">
    <div class="t">
      <img class="t1" src="@/section/s4/t1.png" alt="" srcset="" />
      <div class="t2" v-if="isMobile">副都心的驚嘆號<br>新東方文華御邸</div>
      <div class="t2" v-else>副都心的驚嘆號 新東方文華御邸</div>
      <div class="t3">
        打開副都心富人特區生活之鑰，為你的未來而來。2023全台三大建商、大台北重劃推手攜手國際團隊，在國家政經中心，以珍稀小坪數2-3房規劃，雙面臨路黃金方正角地，用更輕盈的身段輕取副都心，定錨中原X中華雙大道十字星芒，一座耀眼建築，藏綠又藏富的永恆地標，現在逢低入主，豐贏未來。
      </div>
    </div>
    <div class="caption">3D建築外觀情境示意圖</div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  @apply relative w-full z-0 text-white;
  height: size(1080);
  background-image: url("@/section/s4/bg.webp");
  background-size: cover;
  .t {
    @apply absolute z-20;
    top: size(217);
    right: size(223);
    width: size(635);
    .t1 {
      @apply w-full;
    }
    .t2 {
      @apply whitespace-nowrap;
      font-size: size(45);
      font-weight: 700;
      margin-top: size(8);
    }
    .t3 {
      @apply text-justify;
      margin-top: size(18);
      font-size: size(16);
      font-weight: 400;
    }
  }
  .caption {
    @apply absolute;
    left: size(22);
    bottom: size(14);
    font-size: size(16);
    font-weight: 400;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s4 {
    @apply relative w-full z-0 text-white;
    height: sizem(750);
    background-image: url("@/section/s4/bgm.webp");
    .t {
      @apply absolute left-0 z-20 w-full;
      top: sizem(50);
      right: unset;
      padding: 0 sizem(27.5);
      .t1 {
        @apply w-full;
      }
      .t2 {
        font-size: sizem(25);
        margin-top: sizem(16);
      }
      .t3 {
        margin-top: sizem(18);
        font-size: sizem(14);
        font-weight: 400;
        line-height: 170%
      }
    }
    .caption {
      left: sizem(12);
      bottom: sizem(10);
      font-size: sizem(12);
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
