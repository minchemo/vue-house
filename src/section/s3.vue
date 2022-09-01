<template>
    <article class="s3">
        <img class="decor" src="@/section/s3/decor.png" alt="" srcset="">
        <img class="main-img" v-if="!$isMobile()" src="@/section/s3/1.jpg" alt="">
        <img class="main-img" v-else src="@/section/s3/1_m.jpg" alt="">
        <div class="text" data-aos="fade-up" data-aos-delay="200">
            <div class="title">
                <span class="font-bold">府城最精華</span><br>
                都心最臻席
            </div>
            <div class="desc font-['noto_sans_tc','serif']">
                正東區地段之王，入主台南人口密度最高的行政區，商業發展熱絡，交通便捷，同時為台南的明星校區集中地，共學為鄰，都會精華生活一次到位。</div>
        </div>
    </article>
</template>
  
  <style lang="scss" scoped>
  @import '@/assets/style/function.scss';
  
  .s3 {
      width: 100%;
      height: size(1080);
      background: url('@/section/s3/bg.jpg');
      background-size: cover;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: size(50);
  
      .decor {
          position: absolute;
          width: size(560);
          top: -#{size(250)};
          right: -#{size(250)};
          z-index: 1;
          animation: rotate 10s infinite linear;
  
          @keyframes rotate {
              from {
                  transform: rotate(0deg);
              }
  
              to {
                  transform: rotate(360deg);
              }
          }
      }
  
      .main-img {
          width: size(1657);
      }
  
      .text {
          display: flex;
          align-items: center;
          gap: size(50);
  
          .title {
              font-size: size(60);
              font-weight: 500;
              line-height: size(70);
              color: #055F76;
          }
  
          .desc {
              width: size(648);
              line-height: size(35);
              font-size: size(20);
              font-weight: 400;
              border-top: size(2) solid #055F76;
              border-bottom: size(2) solid #055F76;
              padding: size(8) size(20);
          }
      }
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
  
      .s3 {
          width: 100%;
          height: size-m(667);
          background: #F7F6F1;
          gap: size-m(20);
          justify-content: flex-start;
  
          .decor {
              width: size-m(224);
              top: -#{size-m(100)};
              right: -#{size-m(100)};
          }
  
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
                  line-height: 1.5;
                  font-size: size-m(15);
                  border-top: size-m(2) solid #055F76;
                  border-bottom: size-m(2) solid #055F76;
                  padding: size-m(15) 0;
                  font-weight: 300;
                  letter-spacing: 0.03em;
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
  