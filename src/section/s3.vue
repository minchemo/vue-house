<template>
  <article class="s3">
      <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">淡水正核心 贏接市中心</h3>
      </div>
    <Fullview />
    <div class="caption">空拍合成示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative overflow-hidden bg-[#008DD5];
  width: 100%;
  height: size(1032);
  padding-top:0;
  font-size:size(18);
  .txt {
    @apply absolute z-10;
    top: 4em;
    left:0;right: 0;text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    color: #fff;
    //text-shadow: 0 0 5px
  .title{
    font-size: 2em;
    margin: 0 0 .2em;
    line-height: 1.4;
    font-weight: 700;
    &::after,
    &::before{
      content: "";
      width: 11.3em;
      height: 1px;
      background: currentColor;
      display: inline-block;
      vertical-align: middle;
      margin: auto .5em;
    }
  }
  .desc{
    font-size: 1.5em;
    letter-spacing: .1em;
  }
  }
  .caption{
      @apply absolute;
      right:1em;
      bottom: 1em;
      font-weight: 500;
      font-size: size(15);
      color: #FFF;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
    height: sizem(667);
  font-size:sizem(14);
  .txt {
    top: 4em;
  .title{
    font-size: 1.8em;
    &::after,
    &::before{
      width: 1em;}
  }
  .desc{
    font-size: 1.1em;
    letter-spacing: .1em;
  }
  }
  .caption {
    font-size: sizem(12);
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
