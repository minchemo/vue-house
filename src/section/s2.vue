<template>
  <article class="s2" id="s2">
    <img src="./s2/bgm.jpg" class="bg" v-if="isMobile"> 
    <img src="./s2/bg.jpg" class="bg" v-else> 
    
    <div class="txt">
      <span data-aos="zoom-in" data-aos-delay="0">和信義計劃區永結同心</span>
      <span data-aos="zoom-in" data-aos-delay="100">跟三捷三國道喜結連理</span>
      <span data-aos="zoom-in" data-aos-delay="200">與國家政經中心琴瑟和鳴</span>
      <span data-aos="zoom-in" data-aos-delay="300">同公園校園水花園百年好合</span>
      <span data-aos="zoom-in" data-aos-delay="400">兆元富都千億建設佳偶天成</span>
</div>
   
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative; 
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  font-size:sizem(14);
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size:size(32);
  }
  .bg{width: 100%;}
  .txt{
    position: absolute;
    top: sizem(85);left: 0;right: 0;text-align: center;
  line-height: 2.7;
  letter-spacing: 0.06em;
  span{display: block;}
  @media screen and (min-width: 768px) {
    top: size(190);
    line-height: 2;

  }
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