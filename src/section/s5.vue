<template>
  <article class="s5">
    <div class="content text-center font-['noto_sans_tc']" data-aos="fade-up" data-aos-delay="0">
      懂生活的、懂空間的、懂建築的<br />
      <span>都會懂得泰嘉</span>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  position: relative;
  width: 100%;
  height: size(365);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/section/s5/bg.jpg');
  background-size: cover;

  .content {
    font-weight: 700;
    font-size: size(40);
    line-height: size(58);
    letter-spacing: 0.07em;
    color: #fff;
    span {
      color: #699DC4;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
  height: size-m(130);
  background-image: url('@/section/s5/bg_m.jpg');

  .content {
    font-size: size-m(20);
    line-height: 1.5;
  }
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
