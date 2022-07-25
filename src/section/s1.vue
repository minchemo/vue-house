<template>
  <article class="s1 font-['noto_serif_tc','serif']">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  background-size: contain;
  width: 100%;
  height: size(1080);
  position: relative;
  background-color: #FFEF00;
}

@media screen and (max-width: 767px) {
  .s1 {
    min-height: size-m(667);
    max-height: size-m(750);
    overflow: hidden;
    background-size: contain;
  }
}
</style>
<script setup>
import { ref } from 'vue';
</script>
