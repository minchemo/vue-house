<template>
  <article class="s9" id="s9">
    <div class="img">
    <img src="./s1/img.webp" data-aos="zoom-in-right"></div>
  <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
  <div class="t1 font-['Noto_Serif_TC',serif]" data-aos="zoom-in" data-aos-delay="200">2500坪鶯歌地王</div>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';



.s9 {
  @apply relative w-full h-screen;
 // min-height: size(950);
 // max-height: size(1140);
 // height: 100vh;
 height: sizem(350);
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
  .img{
  left: auto;
  transform: scaleX(-1);
  right: 0;top:size(-200);
  @media screen and (max-width: 767px) {
    transform: rotate(0deg) translate(0%, 0%) scaleX(-1);
    transform-origin: 50% 50%;top:sizem(-200);
      right:-10vw;
    bottom: 0vw;
  }
}

  .logo{width:sizem(246);
    margin: sizem(50) auto 0 auto;
  @media screen and (min-width: 768px) {
    width:size(424);
    margin: 0 auto 0 auto;
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