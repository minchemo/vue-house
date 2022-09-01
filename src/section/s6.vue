<template>
    <article class="s6">
        <div class="text z-[3]" data-aos="fade" data-aos-delay="0">
            <div class="title" data-aos="fade-up" data-aos-delay="200"><span class="font-bold">樂遊饗市心</span><br>
                跨界購物圈</div>
            <div class="desc font-['Noto_sans_tc']" data-aos="fade-up" data-aos-delay="200">
                坐擁仁和、崇德、中華東、東門四大商圈，台南最大家樂福、宜得利、迪卡儂量販賣場齊聚，日常所需應有盡有，南紡夢時代、
                國賓影城時尚生活圈，所有需求一次擁有。</div>
        </div>
        <Slide :class="{ 'z-[10]': $isMobile(), 'z-[2]': $isMobile() }" :imgs="imgs" :w="1250" :h="823" :w_m="375"
            :h_m="246.9" :dot="true" :dot_size="11" :dot_color="$isMobile() ? '#C9A063' : '#055F76'" :dot_bottom="-35"
            :dot_bottom_m="-20" />

        <img class="bottom-decor" src="@/section/s6/bottom.png" alt="">
    </article>
</template>
  
  <style lang="scss">
  @import '@/assets/style/function.scss';
  
  .s6 {
      width: 100%;
      height: size(1080);
      background: url('@/section/s6/bg.png');
      background-size: cover;
      background-position: top;
      position: relative;
      display: flex;
      flex-direction: row-reverse;
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
          margin-left: -#{size(85)};
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
              font-weight: 400;
              font-size: size(20);
              line-height: size(35);
              text-align: justify;
              letter-spacing: 0.03em;
          }
      }
  
      .bottom-decor {
          position: absolute;
          width: size(2000);
          top: -#{size(28)};
          left: size(268.47);
          z-index: 1;
      }
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
      .s6 {
          height: size-m(667);
          background: url('@/section/s6/bg_m.jpg');
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
              margin-left: 0;
              background-image: url('@/section/s4/textBg_m.png');
  
              .title {
                  font-size: size-m(30);
                  line-height: 1.5;
                  letter-spacing: 0.07em;
              }
  
              .desc {
                  border-top: size-m(1) solid #fff;
                  margin-top: size-m(20);
                  padding-top: size-m(20);
                  line-height: 1.5;
                  font-size: size-m(15);
                  text-align: justify;
                  font-weight: 300;
              }
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
        img: isMobile ? new URL("../section/s6/1_m.jpg", import.meta.url).href : new URL("../section/s6/1.jpg", import.meta.url).href,
        caption: '南紡夢時代'
    },
    {
        img: isMobile ? new URL("../section/s6/2_m.jpg", import.meta.url).href : new URL("../section/s6/2.jpg", import.meta.url).href,
        caption: '家樂福仁德店'
    },
    {
        img: isMobile ? new URL("../section/s6/3_m.jpg", import.meta.url).href : new URL("../section/s6/3.jpg", import.meta.url).href,
        caption: '崇德路商圈'
    },
]
</script>
  