<template>
    <article class="s4">
        <div class="text z-[3]" data-aos="fade">
            <div class="title" data-aos="fade-up" data-aos-delay="0"><span class="font-bold">涵氧美境</span><br>
                綠意環繞交繪</div>
            <div class="desc font-['Noto_sans_tc']" data-aos="fade-up" data-aos-delay="0">
                仁和、文化、和平、崇善、文良五大公園為鄰，輕鬆享受綠意生活，悠享台南城市之肺，擁抱無價的健康能量，近萬坪文藝「巴克禮公園」，榮獲全國10大優良公園。</div>
        </div>
        <Slide :class="{ 'z-[10]': $isMobile(), 'z-[2]': $isMobile() }" :imgs="imgs" :w="1250" :h="823" :w_m="375"
            :h_m="246.9" :dot="true" :dot_size="11" :dot_color="$isMobile() ? '#C9A063' : '#055F76'" :dot_bottom="-35"
            :dot_bottom_m="-20" />

        <img class="decor1" data-aos-duration="1000" data-aos="leafIn" src="@/section/s4/decor1.png" alt="">
        <img class="decor2" data-aos-duration="1000" data-aos="leafIn" src="@/section/s4/decor2.png" alt="">
        <img class="decor3" data-aos-duration="1000" data-aos="leafIn" src="@/section/s4/decor3.png" alt="">
        <img class="bottom-decor" src="@/section/s4/bottom.png" alt="">
    </article>
</template>
  
  <style lang="scss">
  @import '@/assets/style/function.scss';
  
  .s4 {
      width: 100%;
      height: size(1080);
      background: url('@/section/s4/bg.png');
      background-size: cover;
      background-position: top;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      z-index: 2;
  
      .text {
          position: relative;
          background-color: #055F76;
          width: size(494);
          height: size(522);
          font-weight: 500;
          color: #fff;
          padding: size(57);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          margin-right: -#{size(85)};
          background-image: url('@/section/s4/textBg.png');
          background-position: bottom left;
          background-repeat: no-repeat;
          background-size: 100%;
  
          .title {
              font-size: size(60);
              line-height: size(70);
              text-align: center;
          }
  
          .desc {
              border-top: size(2) solid #fff;
              margin-top: size(40);
              padding-top: size(35);
              font-weight: 300;
              font-size: size(20);
              line-height: size(35);
              text-align: justify;
              letter-spacing: 0.03em;
          }
      }
  
      .decor1 {
          position: absolute;
          width: size(407);
          top: size(665);
          left: size(270);
          z-index: 4;
      }
  
      .decor2 {
          position: absolute;
          width: size(259);
          top: size(870);
          left: size(60);
          z-index: 5;
      }
  
      .decor3 {
          position: absolute;
          width: size(398);
          top: size(729);
          left: size(1736);
          z-index: 1;
      }
  
      .bottom-decor {
          position: absolute;
          width: size(2000);
          top: -#{size(28)};
          left: size(268.47);
          z-index: -1;
      }
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
  
      .s4 {
          width: 100%;
          height: size-m(667);
          background: url('@/section/s4/bg_m.jpg');
          background-position: bottom;
          background-size: cover;
          flex-direction: column-reverse;
          justify-content: flex-end;
          gap: 0;
          z-index: 2;
  
          .text {
              width: 100%;
              height: auto;
              padding: size-m(40) size-m(30);
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              margin-right: 0;
              background-image: url('@/section/s4/textBg_m.png');
  
              .title {
                  font-size: size-m(30);
                  line-height: 1.5;
                  letter-spacing: 0.07em;
              }
  
              .desc {
                  border-top: size-m(1) solid #fff;
                  margin-top: size-m(20);
                  padding-top: size-m(30);
                  line-height: 1.5;
                  font-size: size-m(15);
                  text-align: justify;
                  font-weight: 300;
              }
          }
  
          .decor1 {
              position: absolute;
              width: size-m(140);
              top: size-m(180);
              left: 0;
              z-index: 11;
              pointer-events: none;
          }
  
          .decor2 {
              position: absolute;
              width: size-m(120);
              top: size-m(260);
              left: unset;
              right: -#{size-m(15)};
              z-index: 5;
          }
  
          .decor3 {
              position: absolute;
              width: size-m(120);
              top: unset;
              bottom: 0;
              left: unset;
              right: 0;
              z-index: 1;
          }
  
          .bottom-decor {
              position: absolute;
              width: size(2000);
              top: -#{size(28)};
              left: size(268.47);
              z-index: 1;
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
        img: globals.$isMobile() ? new URL("../section/s4/1_m.jpg", import.meta.url).href : new URL("../section/s4/1.jpg", import.meta.url).href,
        caption: '巴克禮公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s4/2_m.jpg", import.meta.url).href : new URL("../section/s4/2.jpg", import.meta.url).href,
        caption: '文化公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s4/3_m.jpg", import.meta.url).href : new URL("../section/s4/3.jpg", import.meta.url).href,
        caption: '和平公園'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s4/4_m.jpg", import.meta.url).href : new URL("../section/s4/4.jpg", import.meta.url).href,
        caption: '實景拍攝'
    },
    {
        img: globals.$isMobile() ? new URL("../section/s4/5_m.jpg", import.meta.url).href : new URL("../section/s4/5.jpg", import.meta.url).href,
        caption: '實景拍攝'
    },
]
</script>
  