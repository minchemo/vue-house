<template>
  <article class="s3">
    <div class="left" data-aos="fade">
      <div class="t1" data-aos="fade-down" >小港不1樣 國際航空城</div>
      <img class="en" data-aos="fade-down" data-aos-delay="200" src="@/section/s3/en.svg" alt="" srcset="">
      <div class="caption">以上皆小港機場3D示意圖(圖／民航局提供)</div>
    </div>
    <div class="right">
      <div class="t1" data-aos="fade-down" data-aos-delay="0">百億計畫 國際航空城</div>
      <div class="t2" data-aos="fade-down" data-aos-delay="200">「小港國際機場」將由國家挹注700多億改建整合<br />
        將以全新中央智慧處理式航廈大樓，造就高雄新國門<br />
        航空、觀光、商業、旅宿，未來，將與世界更靠近</div>
      <div class="boxes">
        <div class="box">
          <img  data-aos="fade" data-aos-delay="300" src="@/section/s3/1.jpg" alt="" srcset="">
          <p data-aos="fade-down" data-aos-delay="400">歷經10年整合、環評通過！「國道7號」願景啟動，總長約23公里，增設7個交流道，其中即包括小港，未來通聯國道約5min即刻上線，城際移動無往不利</p>
        </div>
        <div class="box">
          <img  data-aos="fade"  data-aos-delay="500" src="@/section/s3/2.jpg" alt="" srcset="">
          <p data-aos="fade-down" data-aos-delay="600">捷運紅線南向延伸「小港林園線」核定興建中，鄰近捷運R3小港站再增優勢、軌道經濟再提升，未來預計採高架捷運，7座車站，串聯高屏更便捷</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative overflow-hidden w-full bg-[#E7E7E7];
  height: size(900);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: size(116.97);

  .left {
    @apply h-full relative; 
    flex-basis: size(1140);
    background-image: url('@/section/s3/main.jpg');
    background-size: cover;

    .t1 {
      @apply absolute;
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(30);
      line-height: 150%;
      color: #fff;
      left: size(48.58);
      top: size(520);
    }
    .en {
      @apply absolute;
      width: size(795.42);
      left: size(47);
      bottom: size(163.94);
    }
    .caption {
      @apply absolute;
      right: size(26);
      bottom: size(10);
      font-weight: 400;
      font-size: size(12);
      color: #fff
    }
  }
  .right{
    @apply h-full;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #595758;
    .t1 {
      @apply w-full;
      font-family: 'Noto Serif TC';
      font-weight: 700;
      font-size: size(42);
      line-height: 150%;
      margin-bottom: size(15)
    }
    .t2 {
      @apply w-full;
      font-weight: 400;
      font-size: size(18);
      line-height: 170%;
    }

    .boxes {
      @apply flex; 
      gap: size(17.5);
      margin-top: size(56.7);
      .box {
        width: size(264.22);
        img {
          @apply w-full;
          margin-bottom: size(8)
        }
        p {
          font-weight: 400;
          font-size: size(18);
          line-height: 170%;
          text-align: justify;
        }
      }
    }
    
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  height: sizem(730);
  flex-direction: column;
  gap: sizem(40);

  .left {
    flex-basis: sizem(297);
    width: 100%;
    height: sizem(297);
    background-image: url('@/section/s3/main.jpg');
    background-size: cover;

    .t1 {
      font-size: sizem(12);
      line-height: 150%;
      left: sizem(18);
      top: sizem(170.5);
    }
    .en {
      @apply absolute;
      width: sizem(262);
      left: sizem(16);
      bottom: sizem(54);
    }
    .caption {
      right: sizem(11.8);
      bottom: unset;
      top: 100%;
      font-size: sizem(12);
      color: #595758
    }
  }
  .right{
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #595758;
    padding: 0 sizem(32.5);
    .t1 {
      font-size: sizem(19);
      margin-bottom: sizem(5)
    }
    .t2 {
      font-size: sizem(12);
    }

    .boxes {
      @apply flex; 
      gap: sizem(10);
      margin-top: sizem(35);
      .box {
        width: sizem(310);
        img {
          margin-bottom: sizem(5)
        }
        p {
          font-size: sizem(12);
        }
      }
    }
    
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
