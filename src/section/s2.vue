<template>
  <article class="s2" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <div class="t">
      <div>
        <div class="t1" data-aos="fade-up" data-aos-delay="0">榮耀高雄 翻轉台灣</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="200">台灣頭 在高雄 世界矚慕地標 國際港灣城市</div>
      </div>
      <div  data-aos="fade-up" data-aos-delay="400">
        <div class="t3" v-if="!isMobile">
          新加坡濱海灣花園，填海造林，將新加坡花園城市意象推向最高峰！<br />
          香港維多利亞港灣，馳名世界的天際線，東方之珠魅力無可取代！<br />
          紐約哈德遜河，大河之畔的都會生活，孕育曼哈頓金色文明！<br />
          高雄亞洲新灣區，文化經貿科技全面到位，高流音樂中心音浪築港、世界各大企業競逐未來，<br />正遵循全球國際港灣城市的建設腳步，展開屬於這座城市的輝煌新頁！
        </div>
        <div class="t3" v-else>
          新加坡濱海灣花園，填海造林，將新加坡花園城市意象推向最高峰！香港維多利亞港灣，馳名世界的天際線，東方之珠魅力無可取代！紐約哈德遜河，大河之畔的都會生活，孕育曼哈頓金色文明！
          高雄亞洲新灣區，文化經貿科技全面到位，高流音樂中心音浪築港、世界各大企業競逐未來，正遵循全球國際港灣城市的建設腳步，展開屬於這座城市的輝煌新頁！
        </div>
      </div>
    </div>
    <div class="mask" v-if="isMobile"></div>
    <div class="mask2" v-if="isMobile"></div>
    <img loading="lazy" 
      v-if="!isMobile"
      data-aos="airplane"
      data-aos-duration="3000"
      data-aos-delay="200"
      src="@/section/s2/airplane.webp"
      class="airplane fadejs"
      alt=""
      srcset=""
    />
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  @apply relative w-full bg-cover bg-center;
  height: size(900);
  background-image: url("@/section/s2/bg.webp");
  padding-top: size(104);
  padding-left: size(137);
  .t {
    @apply flex;
    gap: size(135);
    z-index: 99;
    position: relative;
    div {
      @apply text-white;
      &:nth-child(1) {
        font-weight: 500;
        .t1 {
          @apply font-['Noto_serif_tc'];
          font-size: size(41);
          margin-bottom: size(15);
        }
        .t2 {
          font-size: size(24);
        }
      }
      &:nth-child(2) {
        .t3 {
          font-size: size(17);
          line-height: size(29);
        }
      }
    }
  }
  .airplane {
    @apply absolute;
    width: size(224);
    top: size(147);
    left: size(1546);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    @apply relative w-full bg-contain bg-bottom bg-no-repeat bg-black;
    height: sizem(554);
    background-image: url("@/section/s2/bgm.webp");
    padding-top: 0;
    padding-left: 0;
    .t {
      @apply flex flex-col justify-center items-center;
      @apply relative z-[10];
      gap: 0;
      padding-top: sizem(27);
      div {
        @apply text-white text-center;
        &:nth-child(1) {
          font-weight: 500;
          .t1 {
            @apply text-[#DD5510];
            font-size: sizem(26);
            margin-bottom: sizem(11);
            font-weight: 700;
          }
          .t2 {
            font-size: sizem(15);
            margin-bottom: sizem(16);
          }
        }
        &:nth-child(2) {
          .t3 {
            @apply text-justify;
            padding: 0 sizem(40);
            font-size: sizem(12);
            line-height: sizem(20);
          }
        }
      }
    }
    .mask {
      @apply absolute;
      width: 100%;
      height: sizem(105);
      top: sizem(240);
      left: 0;
      background: linear-gradient(
        -180deg,
        #040000 0%,
        #040000 14%,
        rgba(4, 0, 0, 0) 100%
      );
    }
    .mask2 {
      @apply absolute;
      width: 100%;
      height: sizem(105);
      bottom: 100%;
      left: 0;
      background: linear-gradient(
        0deg,
        #040000 0%,
        #040000 14%,
        rgba(4, 0, 0, 0) 100%
      );
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
