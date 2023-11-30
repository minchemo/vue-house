<template>
  <article class="s2">
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">北台灣最大最美 興新莊特區</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">397公頃整體開發新泰城中城，翻轉未來創新都心，新北門戶國際宜居典範。</p>
      </div>
    </div>
    <Fullview />
    <div class="caption">空拍合成示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden flex flex-col items-center justify-between text-[#000] bg-[#fff];
  width: 100%;
  height: size(900);
  //padding:0 0 5em 0;
  font-size:size(30);
  gap:size(5);
  flex-wrap:nowrap;
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}
.subtitle{font-size:size(30); color: #3E3A39; font-weight: 500;}
.desc{font-size:size(18);}

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s2 {
  height: sizem(640);
  font-size:sizem(14);

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
  .txt {
    top: 3em;
  .subtitle{
    font-size:sizem(18);
    &::before,
    &::after
    {
        content: "";
        width: sizem(35);
        height: 1.5px;
        background: #F4A000;
        display: inline-block;
        vertical-align: middle;
        
    }
    &::before{
      margin: auto 0.5em auto 0;
    }
    &::after{
      margin: auto 0 auto 0.5em;
    }
    }
  .desc{font-size:sizem(13); text-align: left;}
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
