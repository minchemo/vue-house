<template>
  <div class="s6 relative bg-white">
    <div class="content">
      <div class="t1 font-['Noto_Serif_TC']">遇見 跨世代的生活風貌</div>
      <div class="t2 font-['Noto_Serif_TC']">智慧健康x生技醫療x數位科技</div>
      <div class="t3">北投士林科技園區，串聯南軟、內科，是台北科技走廊上的矚目新星。融匯產業創新動能與人文環境底蘊，生產、生活、生態各面向兼具，實踐宜居永續的城市發展願景。
      </div>
    </div>
    <div class="w-full h-full absolute radar">
      <div data-aos="zoom-in" data-aos-delay="0" class="item">
        <div class="t1">士林北投</div>
        <div class="t2">科技園區計畫</div>
        <div class="t3">Beitou Shilin Technology</div>
        <div class="t4">
          研發設計/智慧生態<br>
          數位應用/創新產業<br>
          健康生活/共享經濟</div>
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
        <div class="t1">內科</div>
        <div class="t2">2.0計畫</div>
        <div class="t3">Neihu Technology Park Version 2.0</div>
        <div class="t4">
          資通訊/生計<br>
          新創跨域產業</div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="1000" class="item">
        <div class="t1">南港生技聚落</div>
        <div class="t2">東區門戶計畫</div>
        <div class="t3">Taipei East Gateway Explanatary Plan</div>
        <div class="t4">
          生計/流行/音樂<br>
          新創/軟體/會展產業</div>
      </div>
    </div>
  </div>
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
      color: #D47300;
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
      font-weight: 400;
      font-size: size(20);
      line-height: 100%;
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
      background: radial-gradient(50% 50% at 50% 50%, rgba(235, 151, 0, 0) 36.98%, rgba(235, 151, 0, 0.2) 100%);
      backdrop-filter: blur(10px);
      border-radius: 100%;

      .t1 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(30);
        line-height: 100%;
        margin-bottom: size(5);
      }

      .t2 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(20);
        line-height: 150%;
        letter-spacing: 0.2em;
      }

      .t3 {
        font-family: 'Noto Serif TC';
        font-weight: 700;
        font-size: size(15);
        margin: size(20) 0;
      }

      .t4 {
        font-weight: 400;
        font-size: size(20);
        line-height: 200%;
        letter-spacing: 0.2em;
        text-align: center;
      }

      &:nth-child(1) {
        left: size(177);
        top: size(60);
        width: size(458);
        height: size(458);
      }

      &:nth-child(2) {
        left: size(300);
        top: size(569);
        width: size(400);
        height: size(400);
      }

      &:nth-child(3) {
        left: size(1076);
        top: size(515);
        width: size(400);
        height: size(400);
      }

      &:nth-child(4) {
        left: size(1480);
        top: size(646);
        width: size(400);
        height: size(400);
      }

    }
  }
}


@media screen and (max-width:768px) {
  .s6 {
    width: size-m(375);
    height: size-m(580);
  }
}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();

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
