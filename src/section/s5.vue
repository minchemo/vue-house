<template>
  <article class="s5">
    <div class="main">
      <div class="txt">
        <div class="t1" data-aos="fade-right">專業職人建築<br v-if="!$isMobile()">
          構築美好生活</div>
        <div class="t2" data-aos="fade-right">三十年甲級營造－鐵冠建設、昌譽營造，抱持誠懇、用心的專業服務原則，以卓越施工品質、工程實力，認真看待看得見與看不見的細節，打造適合人居的完美建築。
        </div>
        <div class="badge1" data-aos="fade-right">業績</div>
        <div class="t3" data-aos="fade-right">Hi台北、中山直美、翠松園、墨清院、漫活時代</div>
      </div>
      <div class="work">
        <div class="slider">
          <Splide
            :options="{ type: 'loop', arrows: false, gap: 10, perPage: $isMobile() ? 1 : 3, autoplay: true, interval: 4000, focus: 'center' }"
            ref="splide">
            <SplideSlide class="slide" v-for="slide, i in slides">
              <img :src="slide">
              <div class="caption">{{ captions[i] }}</div>
            </SplideSlide>
          </Splide>
          <div v-if="$isMobile()" class="arrows">
            <img @click="splide.splide.go('<')" class="prev" src="@/section/s5/prev.png" alt="" srcset="">
            <img @click="splide.splide.go('>')" class="next" src="@/section/s5/next.png" alt="" srcset="">
          </div>
        </div>
        <div class="en-box">
          <img data-aos="fade-up" src="@/section/s5/BUILDING MATERIALS.png" alt="" srcset="">
          <div v-if="!$isMobile()" class="line"></div>
        </div>
        <img v-if="!$isMobile()" class="arrow" @click="splide.splide.go('>')" src="@/section/s5/arrow.png" alt="" srcset="">
      </div>
    </div>
  </article>
</template>
  
<style lang="scss">
  @import '@/assets/style/function.scss';
  
  .s5 {
    @apply relative;
    height: size(900);
    background-image: url('@/section/s5/bg.jpg');
    background-size: cover;
    .main {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      gap: size(104);
      .txt {
        padding-bottom: size(50);
        .t1 {
          font-weight: 700;
          font-size: size(55);
          line-height: 122.7%;
          letter-spacing: 0.025em;
          color: #013755;
          margin-bottom: size(42);
        }
        .t2 {
          width: size(394);
          font-weight: 400;
          font-size: size(18);
          line-height: 180.7%;                  
          text-align: justify;
          letter-spacing: 0.16em;
          color: #666666;
          margin-bottom: size(17);
        }
        .t3 {
          font-weight: 700;
          font-size: size(18);
          line-height: 151.7%;
          text-align: justify;
          letter-spacing: 0.035em;
          color: #666666;
          
        }
        .badge1 {
          width: size(60);
          height: size(33);
          font-size: size(18);
          text-align: center;
          line-height: size(33);
          color: #fff;
          background-color: #666666;
          margin-bottom: size(3);
        }
      }
      .work {
        @apply relative;
        width: size(1267);
        height: size(572.39);
        margin-right: size(50);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .slider {
          width: 100%;
          height: size(516);
          
          .slide {
            img {
              width: size(413);
            }
        .caption {
          
      @apply absolute;
      right: size(10);
      bottom: size(5);
      font-weight: 400;
      font-size: size(16);
      color: #FFFFFF;
        }
          }
        }
        .en-box{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            width: size(889.56);
            margin: unset;
          }
          .line {
            width: size(353);
            height: size(2);
            background-color: #C9A063;
          }
        }
        &::after {
          @apply absolute;
          width: size(13);
          height: size(277);
          background-color: #C9A063;
          top: size(51);
          left: -#{size(6.5)};
          content: '';
        }
        .arrow {
          position: absolute;
          width: size(12);
          right: -#{size(20)};
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }
    }
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {

  .s5 {
    height: sizem(667);
    background-image: url('@/section/s5/bgm.jpg');
    .main {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: sizem(25);
      padding-top: sizem(52) !important;
      padding: 0 sizem(30);
      .txt {
        padding-bottom: size(50);
        .t1 {
          font-size: sizem(25);
          margin-bottom: sizem(12);
        }
        .t2 {
          width: 100%;
          font-size: sizem(13);
          margin-bottom: sizem(12);
          padding-right: sizem(20);
        }
        .t3 {
          font-size: sizem(12);
        }
        .badge1 {
          width: sizem(47);
          height: sizem(23);
          font-size: sizem(12);
          line-height: sizem(23);
          margin-bottom: sizem(5);
        }
      }
      .work {
        @apply relative;
        width: sizem(315);
        height: sizem(320);
        margin-right: size(0);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .slider {
          margin: 0 auto;
          width: sizem(256.12);
          height: sizem(320);
          
          .slide {
            img {
              width: sizem(256.12);
            }
      .caption {
        right: sizem(10);
        bottom: sizem(5);
        font-size: sizem(12);
      }
          }

          .arrows {
            @apply absolute;
            top: 50%;
            left: 0;
            width: 100%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: space-between;
            .prev{

            }
            .next{

            }
            img {
              margin: unset;
            }
          }
        }
        .en-box{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: sizem(21);
          img {
            width: 100%;
            margin: unset;
          }
        }
        &::after {
          @apply absolute;
          width: sizem(170);
          height: sizem(5);
          top: -#{sizem(2.5)};
          left: sizem(30);
          content: '';
        }
        .arrow {
          position: absolute;
          width: size(12);
          right: -#{size(20)};
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }
    }
  }
  }
  </style>
<script setup>

import { ref } from 'vue';
const splide = ref(null);
const slides =
  [
    new URL(`./s5/1.jpg`, import.meta.url).href,
    new URL(`./s5/2.jpg`, import.meta.url).href,
    new URL(`./s5/3.jpg`, import.meta.url).href,
    new URL(`./s5/4.jpg`, import.meta.url).href,
    new URL(`./s5/5.jpg`, import.meta.url).href,
  ];

const captions = ["Hi台北", "中山直美", "翠松園", "墨清院", "漫活時代"]
</script>
  