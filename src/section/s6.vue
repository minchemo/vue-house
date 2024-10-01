<template>
  <article class="s6" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <div class="t">
      <div class="t1" data-aos="fade-left" data-aos-delay="0">
        新加坡建築巨擘SCDA<br />
        極簡永恆 建築盛宴
      </div>
      <div class="t2"  data-aos="fade" data-aos-delay="200">SCDA再締亞灣奇蹟</div>
      <div class="t3"  data-aos="fade" data-aos-delay="400">
        SCDA國際知名建築事務所，1995年創立於新加坡，擅將建築與景觀融合環境自然，這一次SCDA對亞灣未來發展潛力的深刻洞察，從外觀、燈光、景觀到公設，全部由SCDA國際建築團隊親自設計操刀，讓「AI慕光城」成為台灣先驅項目、刷新國際觀點，恢宏視野格局領先世界大城，與亞灣AI盛世共舞。
      </div>
      <div class="t2" v-if="isMobile"></div>
      <div class="t2"  data-aos="fade" data-aos-delay="600">
        新加坡國際級設計大師<br />
        SCDA創辦人- Soo K. Chan曾仕乾
      </div>
      <div class="t3"  data-aos="fade" data-aos-delay="800">
        首屆新加坡總統設計獎、2006年新加坡年度設計師獎、SIA-Getz
        亞洲新銳建築獎、美國建築師學會（AIA）、英國皇家建築師協會（RIBA）等國際大獎得主。
      </div>
    </div>
    <div class="img1">
      <div class="mask" data-aos="zoom-out"></div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  @apply relative w-full bg-black;
  @apply flex flex-row-reverse items-center justify-end;
  gap: size(57);
  height: size(900);
  .t {
    @apply flex flex-col justify-center;
    img {
      width: size(263.91);
    }
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
      margin-top: size(25);
      width: size(502);
    }
  }

  .img1 {
    @apply flex-shrink-0 bg-black bg-cover;
    @apply relative;
    width: size(1195);
    height: size(900);
    background-image: url("@/section/s6/1.jpg");
    .mask {
      @apply absolute h-full;
      width: size(300);
      right: 0;
      top: 0;
      background: linear-gradient(
        -90deg,
        #040000 0%,
        #040000 14%,
        rgba(4, 0, 0, 0) 100%
      );
      transform-origin: 0 0;
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s6 {
    @apply relative w-full bg-black;
    @apply flex flex-col items-center justify-end;
    gap: sizem(0);
    height: sizem(736);
    .t {
      @apply absolute z-10;
      @apply flex flex-col items-center text-center;
      top: sizem(28);
      img {
        width: sizem(256);
      }
      .t1 {
        @apply font-['Noto_serif_tc'] text-[#dd5510];
        font-size: sizem(26);
        font-weight: 700;
        margin-top: sizem(0);
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
      height: sizem(351);
      background-image: url("@/section/s6/1m.jpg");
      .mask {
        @apply absolute h-full;
        width: sizem(375);
        height: sizem(108);
        left: 0;
        top: 0;
        background: linear-gradient(
          180deg,
          #040000 0%,
          #040000 14%,
          rgba(4, 0, 0, 0) 100%
        );
        transform-origin: 0 0;
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
