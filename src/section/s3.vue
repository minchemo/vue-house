<template>
  <article class="s3">
    <div class="header">
      <img class="en" src="./s3/LIFE FUNCTION.png" alt="" srcset="">
      <div class="selection" v-bind:class="{ 'selected': selected == 0 }" @click="change(0)">快捷交通</div>
      <div class="selection" v-bind:class="{ 'selected': selected == 1 }" @click="change(1)">完善機能</div>
    </div>
    <div class="main">
      <div class="left" data-aos="fade-right">
        <div class="t1">到站就到家，<br />
          一線速抵北市核心</div>
        <div class="t2">步行50米竹圍捷運站，信義淡水一線直抵士林科學園區、中山南西百貨商圈、大安核心、信義101商圈，不用轉車，即刻擁抱全市心！</div>
      </div>
      <div class="right">
        <Splide :options="{ arrows: false, gap: 50, autoplay: true, interval: 4000, type: 'loop' }"
          ref="splide">
          <SplideSlide class="slide" v-for="slide in slides[selected]">
            <img :src="slide">
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <img src="./s3/ship.png" class="ship" alt="" srcset="">
    <img v-if="!$isMobile()" src="./s3/tree.png" class="tree" alt="" srcset="">
  </article>
</template>
  
<style lang="scss" >
  @import '@/assets/style/function.scss';
  
  .s3 {
      @apply relative;
    height: size(1080);
    background: #013755;
    background-image: url('./s3/bg.jpg');
    background-size: cover;
    padding-top: size(59);
    .header {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      
      gap: size(25);
      .en {
        width: size(736.16);
        margin: unset;
        margin-right: size(41.17);
      }
      .selection {
      width: size(440);
      height: size(42);
      text-align: right;
      font-size: size(22);
      background-size: cover;
      background-image: url('./s3/unselect.png');
      padding-right: size(29);
      color:#C9A063;
      &.selected {
        color:#fff;
        background-image: url('./s3/selected.png');
      }
      &:hover {
        cursor: pointer;
        color:#fff;
        background-image: url('./s3/selected.png');
      }
      }
    }
    
.tree {
  
  position: absolute;
    width: size(392);
    right: 0;
    bottom: size(1006);
}

  .ship {
    position: absolute;
    width: size(286);
    left: size(423);
    bottom: size(101);
    animation: wave2 3s alternate-reverse infinite ease-in-out;
    @keyframes wave2 {
      from {
        transform: translate(-4%, -1%) skewX(2deg);
      }
      to {

        transform: translate(4%, 1%) skewX(-2deg);
      }
    }
  }

  .main {
    @apply relative;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: size(112);
    margin-top: size(69);
    z-index: 1;
    .left{
        color: #FFFFFF;
        padding-bottom: size(145);
      .t1 {
        font-weight: 700;
        font-size: size(55);
        line-height: 122.7%;
        letter-spacing: 0.025em;
        margin-bottom: size(25);
      }
      .t2 {
        font-weight: 400;
        font-size: size(18);
        line-height: 180.7%;
        text-align: justify;
        letter-spacing: 0.165em;
        width: size(394);
      }
    }
    .right {
      width: size(1252);
      height: size(823);
      .slide {
        width: size(1252);
        img {
          width: 100%;
        }
      }
      .splide__pagination {
        gap: size(16);
        margin-top: size(25);
        button {
          height: size(14);
          width: size(14);
          background: rgba(217, 217, 217, 0.54);
          &.is-active {
            background: #C9A063;
          }
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
    height: sizem(667);
    background-image: url('./s3/bg_m.jpg');
    padding-top: sizem(28) !important;
    padding: 0 sizem(30);
    .header {      
      flex-wrap: wrap;
      justify-content: space-between;
      gap: size(25);
      .en {
        width: 100%;
        margin: unset;
        margin-right: 0;
        margin-bottom: sizem(24);
      }
      .selection {
        line-height: sizem(35.29);
        width: sizem(144);
        height: sizem(35.29);
        text-align: center;
        font-size: sizem(16);
        padding-right: 0;
        background-image: url('./s3/unselect_m.png');
        background-position: right bottom;
        &.selected {
          background-image: url('./s3/selected_m.png');
        }
        &:hover {
          background-image: url('./s3/selected_m.png');
        }
        }
    }
    
  .ship {
    width: sizem(173.11);
    left: sizem(195);
    bottom: size(16);
  }

  .main {
    flex-direction: column-reverse;
    gap: sizem(23);
    margin-top: sizem(44);
    .left{
        color: #FFFFFF;
        padding-bottom: size(145);
      .t1 {
        font-size: sizem(25);
        margin-bottom: sizem(12);
      }
      .t2 {
        font-size: sizem(13);
        width: 100%;
      }
    }
    .right {
      width: sizem(315);
      height: auto;
      .slide {
        width: 100%;
      }
      .splide__pagination {
        gap: sizem(10);
        margin-top: sizem(6);
        button {
          height: sizem(8);
          width: sizem(8);
        }
      }
    }
  }
  }
  
  }
  </style>
<script setup>
import { getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const selected = ref(0);
const splide = ref(null);
const change = (target) => {
  selected.value = target;
  splide.value.splide.go(0)
};

let suffix = globals.$isMobile() ? 'm': '';

const slides = [
  [
    new URL(`./s3/a1${suffix}.jpg`, import.meta.url).href,
    new URL(`./s3/a2${suffix}.jpg`, import.meta.url).href
  ],
  [
    new URL(`./s3/b1${suffix}.jpg`, import.meta.url).href,
    new URL(`./s3/b2${suffix}.jpg`, import.meta.url).href,
    new URL(`./s3/b3${suffix}.jpg`, import.meta.url).href]
]
</script>
  