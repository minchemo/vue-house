<template>
  <article class="s2">
    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">國際林口 造局者人生新旭</div>
      <div class="t2"  data-aos="fade-up" data-aos-delay="200">INTERNATIONAL CITY<span class="divi"></span>LINKOU</div>
    </div>
    <div class="viewbox">
      <fullview />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.s2 {
  @apply w-full relative;
  height: size(1362);
  padding-top: size(185);

  .t {
    @apply flex flex-col items-center;
    @apply z-[1] relative;
    font-size: size(36);
    .t1 {
      @apply font-['Noto_Serif_TC'] text-white;
      font-weight: 600;
    }
    .t2 {
      @apply text-[#B8FA61];
      @apply flex items-center;
      color: #b8fa61;
      font-weight: 300;
      letter-spacing: size(5.4);
      .divi {
        @apply inline-block bg-[#b8fa61];
        width: size(24);
        height: 1px;
        margin: 0 size(10);
        margin-bottom: -#{size(6)};
      }
    }
  }

  .viewbox {
    @apply w-full h-full absolute z-0;
    @apply left-0 top-0;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    @apply w-full relative;
    height: sizem(667);
    padding-top: sizem(49);

    .t {
      @apply flex flex-col items-center;
      @apply z-[1] relative;
      .t1 {
        font-size: sizem(25);
      }
      .t2 {
        font-size: sizem(18);
        letter-spacing: sizem(2.7);
        .divi {
          @apply inline-block bg-[#b8fa61];
          width: sizem(14);
          height: 1px;
          margin: 0 sizem(4);
          margin-bottom: -#{sizem(2)};
        }
      }
    }

  
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
