<template>
  <article class="s4">
    <img
      class="bg"
      src="@/section/s4/bg.png" alt="bg" v-if="!$isMobile()"
    />
    <img
      class="bg"
      src="@/section/s4/bgm.png" alt="bg" v-else
    />
    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        雙大道直通北市 <br v-if="isMobile" />一瞬千里的交通力
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="0">
        走集賢路，開車六分鐘過重陽橋連結大台北；<br />
        走三和路，開車六分鐘上中山高連結全台灣，<br />
        雙北核心圈一瞬千里的交通力。
      </div>
    </div>
    <div class="map">
      <Map />
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  @apply w-full relative bg-cover;
  height: size(1410);
  margin-bottom: size(0);
.bg{position: absolute;top: size(-123);left: 0;width: 100%;z-index:3;
  user-select: none;
  pointer-events: none;}
  .t {
    @apply relative z-[5] w-full bg-cover text-white text-center;
    @apply flex flex-col items-center justify-center;
    gap: size(20);
  //  height: size(267);
    padding: size(240) 0 0;
   // background-image: url("@/section/s4/topbg.jpg");
    .t1 {
      font-size: size(40);
      font-weight: 700;
      letter-spacing: size(8);
    }
    .t2 {
      @apply relative;
      font-size: size(20);
      font-weight: 400;
      line-height: 150%;
      letter-spacing: size(4);
      margin-bottom: size(60);

      &::after {
        @apply absolute left-1/2 -translate-x-1/2;
        bottom: -#{size(40)};
        content: "";
        width: size(860);
        height: 2px;
        background: #fcee21;
      }
    }
  }
  .map {
    @apply relative w-full z-[5];
    height: auto;
    width: size(1764);
    border-radius: size(130);
    margin: auto;overflow: hidden;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s4 {
    @apply w-full relative bg-cover;
    height: sizem(737);
.bg{top: sizem(35);}
    .t {
      @apply relative w-full bg-cover text-center;
      @apply flex flex-col items-center justify-center;
      gap: sizem(14);
      height: sizem(306);
     // background-image: url("@/section/s4/topbgm.jpg");
      .t1 {
        font-size: sizem(25);
        letter-spacing: sizem(5);
      }
      .t2 {
        @apply text-left;
        font-size: sizem(14);
        font-weight: 400;
        line-height: 150%;
        letter-spacing: sizem(1.4);

        &::after {
          bottom: -#{sizem(31)};
          width: sizem(310);
        }
      }
    }
    .map {
      @apply relative w-full;
      height: sizem(430);
      border-radius:0;
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
import Map from "@/section/s4/map.vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())
</script>
