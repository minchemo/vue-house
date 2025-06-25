<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/01.jpg" alt="昕暉景寬，房價省百萬，永康市中心最好，公園名校2-3房" />
    <img src="./s1/02.jpg" alt="坐擁永大、大灣、大學、中山站前4大商圈" />
    <img src="./s1/03.jpg" alt="量少單純，風光之心，幸福扎根，傳承之心" />
    <img src="./s1/04.jpg" alt="國際精品，奢華之心，健康舒適，友善之心" />
    <img src="./s1/05.jpg" alt="昕暉建築，好宅之心，生活好好，不變初心" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
  .s1 {
    text-align: center;
    img{max-width: 100%;}
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