<template>
  <article class="s2">
      <div class="txt">
    <h3 class="title" data-aos="zoom-in" data-aos-delay="200">移居智富4大關鍵<br>
全方位國際建設</h3>
        <p class="desc" data-aos="zoom-in" data-aos-delay="400">台中版10大建設<b>Ｘ</b>八大集團插旗<b>Ｘ</b>
高科技產業聚落<b>Ｘ</b>百貨商場</p>
      </div>
    <Fullview />
    <div class="caption">空拍合成示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden bg-[#008DD5];
  width: 100%;
  height: size(1080);
  padding-top:size(100);
  font-size:size(18);
  .txt {
    @apply absolute z-10;
    top: 14em;
    left:0;right: 0;text-align: center;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.7;
    color: #fff;
    text-shadow: 0 0 5px #0075af, 0 0 10px #008DD5,0 0 15px #008DD5, 0 0 20px #008DD5;
  .title{
    font-size: 2.5em;
    margin: 0 0 .2em;
    line-height: 1.4;
    font-weight: 900;
	  border: 2px solid transparent;
    border-image: linear-gradient(70deg, #F6AD48 0%, #E96087 25%, #3551A1 50%, #49BBBC 100%);
	  border-image-slice: 1;
  }
  .desc{
    font-size: 1.5em;
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
    height: sizem(667);
  font-size:sizem(14);
  .txt {
    top: 8em;
  .title{
    font-size: 1.8em;
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
