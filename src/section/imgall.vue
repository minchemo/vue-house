<template>
  <article class="imgall relative">
    <img src="./imgall/2.jpg" /><br />
    <img src="./imgall/3.jpg" /><br />
    <img src="./imgall/4.jpg" /><br />
    <img src="./imgall/5.jpg" /><br />
    <img src="./imgall/6.jpg" /><br />
    <img src="./imgall/7.jpg" />

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.imgall {
  width: 100%;
  background: #333;
  text-align: center;

img{
  width: 100%;
// max-width: 750px;
}

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
