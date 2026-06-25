<template>
  <article class="s3 relative" id="s3">
   <picture>
  <source
    media="(max-width: 768px)"
    srcset="./s1/s3m.jpg"
  />
  <img
    src="./s1/s3.jpg"
    alt="000"
  />
</picture>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

  .s3{
img{width: 100%;height: 100%;object-fit:cover;}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>