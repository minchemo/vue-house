<template>
  <div class="s6 relative bg-white">
    <div class="content">
      <div class="t1 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="0">遇見 跨世代的生活風貌</div>
      <div class="t2 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="200">智慧健康x生技醫療x數位科技</div>
      <div class="t3 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="400">
        北投士林科技園區，串聯南軟、內科，是台北科技走廊上的矚目新星。融匯產業創新動能與人文環境底蘊，生產、生活、生態各面向兼具，實踐宜居永續的城市發展願景。
      </div>
    </div>
    <div class="w-full h-full absolute radar" v-if="!$isMobile()">
      <div data-aos="zoom-in" data-aos-delay="0" class="item">
        <div class="t2-o">北士科計畫</div>
        <div class="t3-o">Beitou Shilin Technology Park</div>
        <div class="t4-o">
          研發設計/智慧生態<br>
          數位應用/創新產業<br>
          健康生活/共享經濟</div>
          <div class="tlogo"><img src="@/section/s6/logo1.svg" alt="心仝聚" srcset=""></div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="300" class="item">
        <div class="t1">圓山</div>
        <div class="t2">新創聚落</div>
        <div class="t3">Expo Taipei</div>
        <div class="t4">
          新創產業/會展<br>
          流行時尚/自造者</div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="700" class="item">
        <div class="t2">內科2.0計畫</div>
        <div class="t3">Neihu Technology Park Version 2.0</div>
        <div class="t4">
          資通訊/生技<br>
          新創跨域產業</div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="1000" class="item">
        <div class="t1">南港生技聚落</div>
        <div class="t2">東區門戶計畫</div>
        <div class="t3">Taipei East Gateway Explanatary Plan</div>
        <div class="t4">
          生技/流行/音樂<br>
          新創/軟體/會展產業</div>
      </div>
    </div>
    <div class="touch-zoom" v-if="$isMobile()" @click="mapOpened = !mapOpened">
      <img src="@/section/s6/zoom.png" alt="心仝聚" srcset="">
    </div>
  </div>
  <div class="view-box" v-if="$isMobile()" v-bind:class="{ 'open': mapOpened }">
    <img src="@/section/s6/map.jpg" alt="心仝聚" srcset="">
  </div>
  <div class="close" data-aos="fade-up" data-aos-delay="500" v-if="mapOpened && $isMobile()"
    @click="mapOpened = !mapOpened">返回</div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  width: 100%;
  height: size(1080);
  background-image: url('@/section/s6/map.svg');
  background-size: cover;

  .content {
    position: absolute;
    right: size(192);
    top: size(143);
    width: size(424);

    .t1 {
      font-weight: 800;
      font-size: size(40);
      line-height: 70%;
      color: #B36649;
      margin-bottom: size(20);
    }

    .t2 {
      font-weight: 700;
      font-size: size(30);
      line-height: 100%;
      color: #000;
      margin-bottom: size(60);
    }

    .t3 {
      font-weight: 500;
      font-size: size(20);
      line-height: 150%;
      text-align: justify;
      letter-spacing: 0.2em;
      color: #000;
    }
  }

  .radar {
    .item {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      
      
      border-radius: 100%;

      .t2-o{
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(28);
        margin-right: 130px;
        margin-top: 30px;
        }
      .t3-o{
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(12);
        margin-right: 130px;
        -webkit-transform: scale(0.8);
        text-align: center;
        } 
      .t4-o{
        font-weight: 700;
        font-size: size(13);
        line-height: 150%;
        letter-spacing: 0.2em;
        text-align: center;
        margin-right: 130px;
        margin-top: 10px;
        }  


      .t1 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(22);
        line-height: 100%;
        margin-bottom: size(5);
      }

      .t2 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(22);
        line-height: 100%;
        letter-spacing: 0.2em;
      }

      .t3 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(12);
        margin: size(10) 0;
        -webkit-transform: scale(0.8);
      }

      .t4 {
        font-weight: 700;
        font-size: size(13);
        line-height: 150%;
        letter-spacing: 0.2em;
        text-align: center;
      }

      .tlogo {
        left: size(234);
        top: size(93);
        width: size(56);
        height: size(177);
        position: absolute;
      }

      &:nth-child(1) {
        left: size(246);
        top: size(198);
        width: size(399);
        height: size(399);
        background: radial-gradient(50% 50% at 50% 50%, rgba(206, 123, 95, 0.5) 36.98%, rgba(206, 123, 95, 0.8) 100%);
      }

      &:nth-child(2) {
        left: size(602);
        top: size(632);
        width: size(237);
        height: size(237);
        backdrop-filter: blur(5px);
        background: radial-gradient(50% 50% at 50% 50%, rgba(223, 223, 223, 0.1) 36.98%, rgba(223, 223, 223, 1) 100%);
      }

      &:nth-child(3) {
        left: size(1116);
        top: size(438);
        width: size(281);
        height: size(281);
        backdrop-filter: blur(5px);
        background: radial-gradient(50% 50% at 50% 50%, rgba(223, 223, 223, 0.1) 36.98%, rgba(223, 223, 223, 1) 100%);
      }

      &:nth-child(4) {
        left: size(1417);
        top: size(506);
        width: size(366);
        height: size(366);
        backdrop-filter: blur(5px);
        background: radial-gradient(50% 50% at 50% 50%, rgba(223, 223, 223, 0.1) 36.98%, rgba(223, 223, 223, 1) 100%);
      }

    }
  }
}

@media screen and (max-width:768px) {

  .s6 {
    width: 100%;
    height: size-m(605);
    background-image: url('@/section/s6/bg.svg');
    background-size: cover;

    .content {
      position: absolute;
      right: 50%;
      top: size-m(50);
      width: size-m(310);
      transform: translateX(50%);
      text-align: center;

      .t1 {
        font-size: size-m(25);
        line-height: 160%;
        margin-bottom: 0;
        font-weight: bold;
      }

      .t2 {
        font-size: size-m(19);
        line-height: 160%;
        margin-bottom: size-m(10);
      }

      .t3 {
        font-size: size-m(15);
        line-height: 160%;
        letter-spacing: 0;
      }
    }

    .touch-zoom {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10%;
      width: size-m(269);
      height: size-m(258);
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(2px);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: size-m(71.3);
      }
    }
  }

  .view-box {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: #000;
    overflow-y: hidden;
    overflow-x: scroll;
    top: 0;
    left: 0;
    transform: translateY(200%);
    transition: all .5s;

    img {
      height: 100%;
      width: auto !important;
      max-width: unset;
    }

    &.open {
      transform: translateY(0%);
    }
  }

  .close {
    position: fixed;
    width: size-m(100);
    height: size-m(30);
    bottom: size-m(30);
    left: 50%;
    margin-left: -#{size-m(50)};
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 1000px;
    color: #fff;
    text-align: center;
    line-height: size-m(30);
    z-index: 1000;
  }

}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();

const mapOpened = ref(false);
const imgs = ref([
  {
    img: new URL("../section/s6/1.jpg", import.meta.url).href,
    caption: "業績：光禾墅",
  },
  {
    img: new URL("../section/s6/2.jpg", import.meta.url).href,
    caption: "業績：斗六恆星 德安恆星 ",
  },
  {
    img: new URL("../section/s6/3.jpg", import.meta.url).href,
    caption: "業績：台北內湖  輕山敘",
  },
])
</script>
