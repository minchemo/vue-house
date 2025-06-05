<template>
  <article class="s3">
    <img src="./s3/enm.svg" class="en" data-aos="zoom-in" data-aos-delay="0" v-if="isMobile">
    <img src="./s3/en.svg" class="en" data-aos="zoom-in" data-aos-delay="0" v-else>
    
    <div class="txt font-['Noto_Serif_TC',serif]">
      <span data-aos="zoom-in" data-aos-delay="0">在雙北市中心，匯聚新天地</span>
      <span data-aos="zoom-in" data-aos-delay="100">城市中有河岸、繁華中有綠意</span>
      <span data-aos="zoom-in" data-aos-delay="200">對坐北士科輝達AI科技大未來</span>
      <span data-aos="zoom-in" data-aos-delay="300">雙捷三重A2站，不再只是地理座標</span>
      <span data-aos="zoom-in" data-aos-delay="400">而是國際科技菁英行旅世界的指標</span><br>
      <span data-aos="zoom-in" data-aos-delay="500">從三重登場，到世界嚮往</span>
      <span data-aos="zoom-in" data-aos-delay="600">人生制高點，未來從此耀眼</span>
</div>
    <div class="viewbox">
      <fullview />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.s3 {
  @apply w-full relative;
  height: size(1081);
  padding-top: size(185);




  .txt{
    position: absolute;
    top: size(80);
    left: size(1150);
    line-height: 2;
    text-align: left;
    font-size:size(20);
    font-weight: 500;
    z-index: 99;
    color: #fff;

    span{display: block;}

  }
  .en{
    position: absolute;
    width: size(643);
    top: size(150);
    left: size(380);
    z-index: 99;
  }

  .viewbox {
    @apply w-full h-full absolute z-0;
    @apply left-0 top-0;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    @apply w-full relative;
    height: sizem(800);

  .txt{
    position: absolute;
    top: sizem(30);left: 0;right: 0;text-align: center;
    line-height: 1.8;
    letter-spacing: 0.06em;
    color: #fff;
    font-size:sizem(14);
    font-weight: 500;
    span{display: block;}
  }

  .en{
    width: sizem(200);
    top: sizem(250);
    left: sizem(90);
  }

  
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
