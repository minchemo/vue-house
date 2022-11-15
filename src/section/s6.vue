<template>
  <article class="s6 pointer-events-none">
    <img  data-aos="fade-up" data-aos-duration="800" v-if="$isMobile()" class="bg" src="@/section/s6/bg_m.svg" alt="" srcset="">
    <img  data-aos="fade-up" data-aos-duration="800" v-else class="bg" src="@/section/s6/bg.svg" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  @apply relative flex items-end justify-center;
  width: 100%;
  height: 100vh;
  background-color: #304730;

  .bg {
    width: size(1131);
  }
}

@media screen and (max-width: 767px) {
.s6 {
  height: size-m(488);

  .bg {
    width: size-m(333.5);
  }
}
}
</style>
<script setup>
</script>
