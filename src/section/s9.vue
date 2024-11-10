<template>
  <article class="s9 anchor10">
    <div
      class="t"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
      精挑世界品牌建材<br />置頂規格敬獻最愛
    </div>
    <img
      v-if="!isMobile"
      class="logos"
      src="@/section/s9/logos.jpg"
      alt=""
      srcset=""
    />
    <img v-else class="logos" src="@/section/s9/logos.png" alt="" srcset="" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s9 {
  @apply relative w-full;
  @apply flex items-center justify-center;
  gap: size(133);
  @apply text-white;
  height: size(744);
  background: linear-gradient(
    0deg,
    #714e39 0%,
    #654631 36%,
    #4a331e 60%,
    #36250f 84%,
    #2f200a 100%
  );

  .t {
    font-size: size(54);
    font-weight: 600;
  }

  .logos {
    width: size(943);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s9 {
    @apply relative w-full;
    @apply flex flex-col items-start justify-center;
    gap: sizem(19);
    @apply text-white;
    height: sizem(693);
    padding-left: sizem(32);

    .t {
      font-size: sizem(25);
    }

    .logos {
      width: sizem(320);
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
