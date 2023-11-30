<template>
  <article class="s4">
    <div class="main">
      <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">大道縱橫 預見未來</h4>
        <p class="desc" data-aos="fade-up" data-aos-delay="400">縱橫新泰核心30米莊泰大道及新北大道，65快速道路迅速連結國道一號、64快速道路串聯國道三號，以及台一線速達北車特區如風馳騁。
</p>
      </div>
    </div>
    <Fullview3 />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  @apply relative overflow-hidden flex flex-col items-center justify-between text-[#000] bg-[#fff];
  width: 100%;
  height: size(1262);
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

  .s4 {
  height: sizem(667);
  font-size:sizem(14);

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
  .txt {
    top: 2em;
  .subtitle{font-size:sizem(18);
  
  &::before,
    &::after
    {
        content: "";
        width: sizem(60);
        height: 1.5px;
        background: #F4A000;
        display: inline-block;
        vertical-align: middle;
        
    }
    &::before{
      margin: auto 1em auto 0;
    }
    &::after{
      margin: auto 0 auto 1em;
    }
  
  }
  .desc{font-size:sizem(13); }
  }
  .caption {
    font-size: sizem(12);
  }
  
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview3 from '../components/fullview3.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
