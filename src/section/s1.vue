<template>
  <article class="s1">
    <img class="logo" v-if="!$isMobile()" src="@/section/s1/logo.png" alt="" data-aos="fade-up">
    <img class="logo" v-else src="@/section/s1/logo_m.png" alt="" data-aos="fade-up">
    <img class="title" v-if="!$isMobile()" src="@/section/s1/title.png" alt="" data-aos="fade-up" data-aos-delay="200">
    <img class="title" v-else src="@/section/s1/title_m.png" alt="" data-aos="fade-up" data-aos-delay="200">
    <img class="light" v-if="!$isMobile()" src="@/section/s1/light.png" alt="" srcset="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background: url('@/section/s1/bg.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: size(30);

  .light {
    position: absolute;
    bottom: 0;
    left: 0;
    width: size(1200);
    animation: flash .8s alternate-reverse infinite;

    @keyframes flash {
      from {
        opacity: 50%;
      }

      to {
        opacity: 100%;
      }
    }
  }

  .logo {
    width: size(550);
  }

  .title {
    width: size(909);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: size-m(667);
    max-height: size-m(750);
    background: url('@/section/s1/bg_m.jpg');
    background-size: cover;
    gap: size-m(35);


    .logo {
      width: size-m(279);
    }

    .title {
      width: size-m(315);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
