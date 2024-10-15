<template>
  <article class="s3" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <div class="t">
      <div class="t1"  data-aos="fade-right" data-aos-delay="0">全球看高雄 未來在亞灣</div>
      <div class="t2"  data-aos="fade" data-aos-delay="200">
        AI盛世 科技產業 全面盛勢 <br />
        台灣的曼哈頓 南高未來蓄勢待發
      </div>
      <div class="t3"  data-aos="fade" data-aos-delay="400">
        全球AI時代來臨，亞灣5GAIoT創新園區及亞灣2.0產業經濟發展，加上未來的AI研發設計中心，世界前100強企業進駐，亞灣一舉躍升世界級AI科技聚落，不只企業總部、大型購物中心進駐，亞灣最後一塊拼圖—205兵工廠搬遷後，更完整了高雄大亞灣3.0的願景，現在就看得到的未來，正從海陸空全面開展，城市能量蓄勢待發。
      </div>
    </div>
    <div class="img1">
      <div class="mask" data-aos="zoom-out"></div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
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
    background-image: url("@/section/s3/1.webp");
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
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    @apply relative w-full bg-black;
    @apply flex flex-col items-center justify-end;
    gap: sizem(37);
    height: sizem(644);
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
      height: sizem(332);
      background-image: url("@/section/s3/1m.webp");
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
