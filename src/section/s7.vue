<template>
  <article class="s7">
    <div class="main">
      <Splide ref="splide" :options="{
        rewind: true,
        autoWidth: true,
        arrows: false,
        type: 'fade',
        autoplay: true,
        pagination: $isMobile() ? false : true,
        interval: 4000,
      }" @splide:move="move" class="slide-box absolute z-10">
        <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
          <div class="caption">{{img.caption}}</div>
        </SplideSlide>
        <div v-if="$isMobile()" class="mo-arrows">
          <img @click="splide.splide.go('<')" src="@/section/prev_m.png" alt="">
          <img @click="splide.splide.go('>')" src="@/section/next_m.png" alt="">
        </div>
      </Splide>
      <div class="text-box">
        <div class="t2" v-html="imgs[currentIdx].t2"  data-aos="fade-left" data-aos-delay="0"> </div>
        <div class="t1" v-html="imgs[currentIdx].t1"  data-aos="fade-left" data-aos-delay="100"></div>
        <div class="c-divider"></div>
        <div class="t3" v-html="imgs[currentIdx].t3"  data-aos="fade-left" data-aos-delay="200"></div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s7 {
  width: 100%;
  height: size(1080);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-size: cover;
    background-image: url('@/section/s7/bg.jpg');
    width: size(1794);
    height: size(908);
    gap: size(70);

    .slide-box {
      position: relative;
      width: size(1262.5);
      height: size(908);


      .slide {
        width: size(1262.5);
        height: size(908);
        background-size: cover;

        .caption {
          position: absolute;
          right: size(17);
          top: size(17);
          font-weight: 400;
          font-size: size(15);
          color: #FFFFFF;
          text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
        }
      }

      .prev {
        z-index: 1;
        position: absolute;
        width: size(30);
        left: size(33);
        top: 50%;
        transform: translateY(-50%);
      }

      .splide__pagination {
        width: size(1794);
        margin-top: size(30);
        gap: size(8);

        li {
          line-height: 0;

          button {
            width: size(11);
            height: size(11);
            background-color: #D9D9D9;

            &.is-active {
              background-color: #727171;
            }
          }
        }
      }
    }

    .text-box {

      .t1 {
        font-style: normal;
        font-weight: 100;
        font-size: size(34);
        letter-spacing: 0.05em;
      }

      .t2 {
        font-weight: 500;
        font-size: size(64);
        line-height: 125%;
        letter-spacing: 0.03em;
      }

      .c-divider {
        width: 150%;
        height: size(2);
        background-color: #fff;
        margin: size(25) 0;
      }

      .t3 {
        font-family: 'Noto Serif SC';
        font-weight: 400;
        font-size: size(18);
        line-height: 178%;
        max-width: size(420);
      }

    }
  }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
    height: auto;
    margin-bottom: size-m(30);
    .main {
      flex-direction: column;
      background-position: bottom;
      background-size: 100%;
      background-image: url('@/section/s7/bg_m.jpg');
      height: size-m(577);
      gap: size-m(30);
      width: 100%;

      .slide-box {
        position: relative;
        width: 100%;
        height: size-m(267);


        .slide {
          width: 100%;
          height: size-m(267);

          .caption {
            right: size-m(10);
            top: size-m(10);
            font-size: size-m(15);
          }
        }

        .mo-arrows {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 size-m(15);

          img {
            margin: unset;
            width: size-m(16);
          }
        }
      }

      .text-box {
        position: relative;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        z-index: 1;
        width: size-m(315);

        .t1 {
          font-size: size-m(16);
        }

        .t2 {
          font-size: size-m(25);
          line-height: 148%;
        }

        .c-divider {
          width: size-m(315);
          height: size-m(2);
          margin: size-m(15) 0;
        }

        .t3 {
          font-size: size-m(14);
          max-width: 100%;
          text-align: left;
          line-height: 2;

        }
      }
    }

  }
}
</style>
<script setup>
import { getCurrentInstance, ref } from 'vue';
import AOS from 'aos';
const globals = getCurrentInstance().appContext.config.globalProperties;

const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
  AOS.refresh();
}

const imgs = [
  {
    img: globals.$isMobile() ? new URL("../section/s7/1_m.jpg", import.meta.url).href : new URL("../section/s7/1.jpg", import.meta.url).href,
    caption: '大廳3D示意圖',
    t1: '',
    t2: globals.$isMobile() ? '迎賓門廳 大器天成' : '迎賓門廳<br/>大器天成',
    t3: '若您走進中悦建築裡，<br/>會深刻感受到走進美學的細節裡。<br/>舉凡大廳藝術作品、燈飾、桌椅陳列角度，<br/>蘊含著黃金比例的藝術巧思。'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/2_m.jpg", import.meta.url).href : new URL("../section/s7/2.jpg", import.meta.url).href,
    caption: '泳池3D示意圖',
    t1: '頂級銅銀離子抗菌設備',
    t2: globals.$isMobile() ? '超豪邸 藝術游池' : '超豪邸<br/>藝術游池',
    t3: globals.$isMobile() ? '中悦建設引進現代最新活水系統--銅銀離子抗菌系統，以最先進的殺菌系統淨化水質，無氯胺、無化學藥劑，提供自然、無味、軟性、不刺激皮膚的水質。讓您縱身一躍，快樂如魚得水！' : '中悦建設引進現代最新活水系統--銅銀離子抗菌系統，以最先進的殺菌系統淨化水質，無氯胺、無化學藥劑，提供自然、無味、軟性、不刺激皮膚的水質。<br/>讓您縱身一躍，快樂如魚得水！'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/3_m.jpg", import.meta.url).href : new URL("../section/s7/3.jpg", import.meta.url).href,
    caption: '交誼廳 3D 示意圖',
    t1: '',
    t2: globals.$isMobile() ? '層峰相見的 閒敘時刻' : '層峰相見的<br/>閒敘時刻',
    t3: '中悦精心佈置的頂尖社交場域，<br/>以沉穩基調石材色澤，重現輝煌時代的風光聚首。<br/>質感雅緻、舒適溫潤、距離有度的交誼廳，<br/>讓您在此鞏固親友情誼、商場友誼。'
  },
]
</script>
