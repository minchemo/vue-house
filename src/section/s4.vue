<template>
  <article class="s4 relative" id="s4">
   <picture>
  <source
    media="(max-width: 768px)"
    srcset="./s1/s4m.jpg"
  />
  <img
    src="./s1/s4.jpg"
    alt="000"
  />
</picture>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

  .s4{margin-bottom: sizem(-370);
img{width: 100%;height: 100%;object-fit:cover;}

@media screen and (min-width:768px) {

  margin-bottom: size(-270);
}

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