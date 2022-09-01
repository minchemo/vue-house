<template>
    <article class="s8">
        <img class="main-img" v-if="!$isMobile()" src="@/section/s8/1.jpg" alt="">
        <img class="main-img" v-else src="@/section/s8/1_m.jpg" alt="">
        <div class="text" data-aos="fade-up" data-aos-delay="0">
            <div class="title">
                <span class="font-bold">精研工藝</span><br>
                最美大器建築
            </div>
            <div class="desc font-['noto_sans_tc','serif']">
                運用沉穩的黑白基調，雕刻出簡單不繁複的建築外觀，演繹輝煌東區的新地標，與鄰近公園綠意豐景相輝映，刻劃城市中最美的建築。</div>
        </div>
    </article>
</template>
  
  <style lang="scss" scoped>
  @import '@/assets/style/function.scss';
  
  .s8 {
      width: 100%;
      height: size(1080);
      background: url('@/section/s8/bg.jpg');
      background-size: cover;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: size(50);
  
      .main-img {
          width: size(1657);
      }
  
      .text {
          display: flex;
          align-items: center;
          gap: size(30);
  
          .title {
              font-size: size(60);
              font-weight: 400;
              line-height: size(70);
              color: #E7BA65;
          }
  
          .desc {
              width: size(648);
              line-height: size(35);
              font-size: size(20);
              font-weight: 400;
              border-top: size(2) solid #fff;
              border-bottom: size(2) solid #fff;
              padding: size(25) 0;
              color: #fff;
          }
      }
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
      .s8 {
          width: 100%;
          height: size-m(667);
          background: url('@/section/s8/bg_m.jpg');
          background-size: cover;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: size-m(20);
  
          .main-img {
              width: 100%;
          }
  
          .text {
              flex-direction: column;
              align-items: flex-start;
              gap: size-m(15);
              margin: 0 auto;
  
              .title {
                  font-size: size-m(30);
                  line-height: 1.5;
              }
  
              .desc {
                  width: size-m(315);
                  line-height: 2;
                  font-size: size-m(15);
                  border-top: size-m(1) solid #fff;
                  border-bottom: size-m(1) solid #fff;
                  padding: size-m(15) 0;
                  letter-spacing: 0.03em;
                  font-weight: 300;
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
  