<template>
  <article class="s2 relative" id="s2">
    <h2 data-aos="fade-in" data-aos-delay="200">
      <img src="./s2/20min竹科.png" alt="20min竹科生活圈 圓夢關鍵密碼 有房沒房很有關西">
    </h2>
    <h3 data-aos="fade-up" data-aos-delay="400">世界級健康藝術原鄉 順勢崛起</h3>
  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';
.s2 {
  background: url("./s2/bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  //20min竹科
  h2{
    img{
      width: 100%;
    }
  }
  //世界
  h3{
    color: #FFF;
    font-size: size(52);
    position: absolute;
    bottom:calc(20% + #{size(352 - 1080 * .5)});
    left: calc(30% + #{size(450 - 1080 * .5)});
    letter-spacing: size(20);
    text-shadow: #00000030 3px 3px;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
/* 手機尺寸 */
@media screen and (max-width: 767px) {
  .s2 {
  //世界
  h3{
    font-size: size(52);
    }
}}
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