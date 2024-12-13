<template>
  <article class="s1 relative" id="s1">
    <img src="./s1/logo.webp" class="logo" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/txt.svg" class="txt" data-aos="zoom-in" data-aos-delay="200">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  min-height: size(900);
  max-height: size(1070);
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  font-size:size(36);
  padding: 0 size(200);
  background:url("@/section/s1/bg.webp");

  .logo{width: size(518);position: relative;z-index: 3;}
  .txt{width: size(728);position: relative;z-index: 3;}

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(667);
    height: sizem(604);
    font-size:sizem(16);
    flex-direction: column;
    padding: 0;
    gap: sizem(50);
    background:url("@/section/s1/bgm.webp");
    background-size: cover;

    .logo{width: sizem(215);}
    .txt{width: sizem(268);}
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