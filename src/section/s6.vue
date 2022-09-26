<template>
  <article class="s6">
    <div class="title text-center font-['noto_sans_tc']" data-aos="fade-up" data-aos-delay="0">
      台積流域 高大領域 價值守恆
    </div>
    <img class="ring1" src="@/section/ring2.svg" alt="">
    <div class="info" >
      <img class="left" src="@/section/s6/a.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="200">
      <img class="right" src="@/section/s6/2.jpg" alt="" srcset="" data-aos="fade-up" data-aos-delay="400">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  position: relative;
  width: 100%;
  height: size(1080);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #7BA9D3;

  .title {
    font-weight: 700;
    font-size: size(40);
    line-height: size(58);
    letter-spacing: 0.07em;
    color: #fff;
  }

  .ring1 {
    width: size(48);
    margin-top: size(20);
    margin-bottom: size(60);
  }

  .info {
    display: flex;
    align-items: flex-end;
    gap: size(118);

    .left {
      width: size(790);
    }

    .right {
      width: size(712);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #7BA9D3;
    padding-top: size-m(40);

    .title {
      font-size: size-m(20);
      line-height: 1;
    }

    .ring1 {
      width: size-m(18);
      margin-top: size-m(15);
      margin-bottom: size-m(20);
    }

    .info {
      flex-direction: column;
      gap: size-m(8);

      .left {
        width: size-m(314);
      }

      .right {
        width: size-m(314);
      }
    }
  }

}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
