<template>
  <article class="s2">
      <div class="txt">
    <h3 class="title" data-aos="zoom-in" data-aos-delay="200">移居智富4大關鍵<br>
全方位國際建設</h3>
        <p class="desc" data-aos="zoom-in" data-aos-delay="400">台中版10大建設<b>Ｘ</b>八大集團插旗<b>Ｘ</b><br v-if="$isMobile()">
高科技產業聚落<b>Ｘ</b>百貨商場</p>
      </div>
      <Fullview />
   <!--   -->
    <div class="caption">空拍環境情境示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden bg-[#0d4f96];
  width: 100%;
  height:auto;
  padding-top:size(0);
  font-size:size(20);
  .t1{width: 100%;position: absolute;left: 0;top: 0;}
  .txt {
    @apply absolute z-10;
    top: 2.3em;
    left:0;right: 0;text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.5;
    color: #fff;
  .title{
    font-size: 2em;
    margin: 0 auto .2em;
    line-height: 1.4;
    font-weight: 900;
	  border: 4px solid transparent;
    border-image: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
	  border-image-slice: 1;
    width: 10em;
    padding: .1em 0;

  }
  .desc{
    font-size: 1em;
    letter-spacing: .1em;
    b{color: #ff0}
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

  .s2 {
  //  height: sizem(667);
  font-size:sizem(14);
  .txt {
    position: relative;
    top: 6em;
    margin: auto auto -3em auto;
  .title{
    font-size: 2.2em;
  }
  .desc{
    font-size: 1.36em;
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
