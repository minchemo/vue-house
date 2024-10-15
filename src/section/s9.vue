<template>
  <article class="s9" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <div class="t">
      <div class="t1" data-aos="fade-right" data-aos-delay="0">
        入住地標 眺望國際<br />
        全球同步 國際輕豪宅
      </div>
      <div class="t2" data-aos="fade" data-aos-delay="200">
        慕光所及 登峰造極 住進世界 走近未來
      </div>
      <div class="t3" data-aos="fade" data-aos-delay="400">
        約5000多坪超大基地規模全面開發，承載高雄人金銀島共同的情感記憶；清景麟集團與三地集團以AI科技聚落為藍圖，耗時2年斥資4億整合總銷即高達420億元，將分二期推出；第一期約2551坪基地規模的「AI慕光城」，大器創作3棟24層帷幕建築地標，四面環景生態海洋盡收眼底，延請新加玻SCDA團隊精雕量體，註定成為高雄的名片，全台矚慕。
      </div>
    </div>
    <div class="img1">
      <div class="mask" data-aos="zoom-out"></div>
      <div class="caption">內容僅供參考，依現場圖說為準，建商有修改之權利</div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s9 {
  @apply relative w-full bg-black;
  @apply flex items-center justify-end;
  gap: size(57);
  height: size(900);
  .t {
    .t1 {
      @apply font-['Noto_serif_tc'] text-[#dd5510];
      font-size: size(41);
      font-weight: 700;
    }
    .t2 {
      @apply text-white;
      font-size: size(24);
      font-weight: 500;
      line-height: size(39);
      letter-spacing: size(0.72);
      margin-top: size(67);
    }
    .t3 {
      @apply text-white text-justify;
      font-size: size(17);
      font-weight: 500;
      line-height: size(31);
      margin-top: size(42);
      width: size(502);
    }
  }

  .img1 {
    @apply flex-shrink-0 bg-black bg-cover;
    @apply relative;
    width: size(1226);
    height: size(900);
    background-image: url("@/section/s9/1.webp");
    .mask {
      @apply absolute h-full;
      width: size(300);
      left: 0;
      top: 0;
      background: linear-gradient(
        90deg,
        #040000 0%,
        #040000 14%,
        rgba(4, 0, 0, 0) 100%
      );
      transform-origin: 0 0;
    }
    .caption {
      @apply absolute;
      @apply text-white;
      font-size: size(15);
      font-weight: 400;
      right: size(60);
      bottom: size(34);
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s9 {
    @apply relative w-full bg-black;
    @apply flex flex-col items-center justify-end;
    gap: sizem(53);
    height: sizem(598);
    .t {
      @apply flex flex-col items-center text-center;
      .t1 {
        @apply font-['Noto_serif_tc'] text-[#dd5510];
        font-size: sizem(26);
        font-weight: 700;
      }
      .t2 {
        @apply text-white;
        font-size: sizem(15);
        font-weight: 500;
        line-height: normal;
        letter-spacing: normal;
        margin-top: sizem(13);
      }
      .t3 {
        @apply text-white text-center;
        padding: 0 sizem(39);
        font-size: sizem(12);
        font-weight: 500;
        line-height: sizem(20);
        margin-top: sizem(19);
        width: 100%;
      }
    }

    .img1 {
      @apply flex-shrink-0 bg-black bg-cover;
      @apply relative;
      width: sizem(375);
      height: sizem(267);
      background-image: url("@/section/s9/1m.webp");
      .mask {
        @apply hidden;
      }
      .caption {
        @apply absolute;
        @apply text-white;
        font-size: sizem(9);
        font-weight: 400;
        right: sizem(4);
        bottom: 0;
      }
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
