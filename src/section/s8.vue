<template>
  <article class="s8" id="s8">
  <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
  <div class="t1 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="200">2500坪鶯歌地王</div>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s8 {
  @apply relative w-full h-screen;
 // min-height: size(950);
 // max-height: size(1140);
 // height: 100vh;
 height: sizem(450);
  font-size:sizem(33);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  color: #FFF;
  line-height: 1.7;
  font-weight: 700;
  z-index: 2;

  @media screen and (min-width: 768px) {
 height: size(900);
  font-size:size(53);
  }

  .logo{width:sizem(246);
  @media screen and (min-width: 768px) {
    width:size(424);
  }
}
  .t1{margin-top: .8em;text-align: center;
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