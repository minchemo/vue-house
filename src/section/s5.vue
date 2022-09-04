<template>
    <article class="s5">
        <Slide class="z-[2]" :imgs="imgs" :w="1657" :h="767" :w_m="375" :h_m="367" :dot="true" :dot_size="11"
            :dot_color="'#C9A063'" :dot_bottom="20" :dot_bottom_m="10" :align_m="'flex-start'" />

        <div class="text" data-aos="fade-up" data-aos-delay="200">
            <div class="title">
                <span class="font-bold">南北暢行</span><br>
                城際移動版圖
            </div>
            <div class="desc font-['noto_sans_tc','serif']">
                近國道1號，轉至國道8號直達南科僅需約30分車程，86快速道路直達台南高鐵站只需約15分；展望2026捷運藍線新未來，生活、享樂、工作，暢行市心隨心切換。</div>
        </div>
    </article>
</template>
  
  <style lang="scss" scoped>
  @import '@/assets/style/function.scss';
  
  .s5 {
      width: 100%;
      height: size(1080);
      background: url('@/section/s5/bg.jpg');
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
              border-top: size(1) solid #055F76;
              border-bottom: size(1) solid #055F76;
              padding: size(8) size(20);
          }
      }
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
      .s5 {
          width: 100%;
          height: size-m(667);
          background: #F7F6F1;
          gap: size-m(20);
          justify-content: flex-start;
  
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
                  border-top: size-m(1) solid #055F76;
                  border-bottom: size-m(1) solid #055F76;
                  padding: size-m(15) 0;
              }
          }
      }
  }
  </style>
  <script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Slide from '../components/slide.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
const imgs = [
    {
        img: globals.$isMobile() ? new URL("../section/s5/1_m.jpg", import.meta.url).href : new URL("../section/s5/1.jpg", import.meta.url).href,
        caption: '情境示意圖'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s5/2_m.jpg", import.meta.url).href : new URL("../section/s5/2.jpg", import.meta.url).href,
        caption: '仁德交流道'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s5/3_m.jpg", import.meta.url).href : new URL("../section/s5/3.jpg", import.meta.url).href,
        caption: '86快速道路'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s5/4_m.jpg", import.meta.url).href : new URL("../section/s5/4.jpg", import.meta.url).href,
        caption: '情境示意圖'
    },
]
</script>
  