<template>
  <article class="s1">
    <img src="./s1/pc_bg.jpg" alt="bg" class="bg-img" v-if="!$isMobile()">
    <img src="./s1/m_bg.jpg" alt="bg"  class="bg-img" v-else>
    <img src="./s1/logo1.svg" class="logo" data-aos="fade-up" data-aos-delay="0">
    <div class="line"></div>
      
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: #000E29;

  .bg-img {
  width: 100%;
  height:auto;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
.logo {width: size(390);position: relative;z-index: 2;
}
.line{position: relative;z-index: 2;
  color: #fff;
  background:currentColor;
  font-size:size(20);
  width:2px;height: 18em;margin:5em auto -10em auto;
  &::after{content: "";display: block;width:1em;height:1em;
  background:currentColor;border-radius: 50%;margin: -.5em auto auto -.5em;top:0;left:50%;position: absolute;
     animation: an 2s linear infinite ;}

}
@keyframes an {
  0% {
    top: 0%;opacity: 0;
  }
  10% {
    top: 10%;opacity: 1;
  }
  90% {
    top: 90%;opacity: 1;
  }
  100% {
    top: 100%;opacity: 0;
  }
}
}

/* 螢幕尺寸標準 */
@media screen and (max-width: 767px) {
  .s1 {
    height: sizem(667);
.logo {width: sizem(176);
}
.line{margin:5em auto -15em auto;
  font-size:sizem(12);height: 22em;
  }
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>
