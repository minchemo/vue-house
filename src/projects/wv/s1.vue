<template>
  <div class="s1" id="scene1">
    <div class="cloud"></div>
    <div class="bg"></div>
    <div class="cloud2"></div>
    <p class="caption" data-aos="fade">3D外觀合成圖</p>
    <div class="title" v-if="!isMobile">
      <div class="left">
        <img
          class="t1"
          src="@/projects/wv/s1/t1.svg"
          alt=""
          srcset=""
          data-aos="zoom-in"
        />
      </div>
      <div class="right">
        <div class="t1" data-aos="zoom-in" data-aos-offset="150">
          蘆洲捷運站5分鐘│水岸豪景2-3房｜總價998萬元起<span>須另購車位</span>
        </div>
        <div class="t2" data-aos="zoom-in" data-aos-delay="300">
          在大台北，只有一種美，始終不負期待，那是直面雙河，270°水天相連的豪景氣魄，是收藏新北大都會公園424公頃綠帶壯闊胸懷，是捷運蘆洲站5分鐘，F06站散步到的優雅節奏，是以最輕盈的心情，成就身心開闊的優沃姿態。在大台北，有一種實現你所有嚮往的水岸生活，叫做『伴月灣』
        </div>
      </div>
    </div>
    <div class="titlem" v-else>
      <img
        class="t1"
        src="@/projects/wv/s1/t1m.svg"
        alt=""
        srcset=""
        data-aos="zoom-in"
      />
      <div class="divider" data-aos="flip-up"></div>
      <div class="t2">
        <p data-aos="zoom-in" data-aos-offset="150">蘆洲捷運站5分鐘</p>
        <p data-aos="zoom-in" data-aos-delay="100" data-aos-offset="150">
          水岸豪景2-3房
        </p>
        <p data-aos="zoom-in" data-aos-delay="300" data-aos-offset="150">
          總價998萬元起
        </p>
        <p data-aos="zoom-in" data-aos-delay="500" data-aos-offset="150">
          須另購車位
        </p>
      </div>
      <div class="t3" data-aos="zoom-in" data-aos-delay="700">
        在大台北，只有一種美，始終不負期待，<br />
        那是直面雙河，<br />
        270°水天相連的豪景氣魄，<br />
        是收藏新北大都會公園424公頃綠帶壯闊胸懷，<br />
        是捷運蘆洲站5分鐘，<br />
        F06站散步到的優雅節奏，<br />
        是以最輕盈的心情，<br />
        成就身心開闊的優沃姿態。<br />
        在大台北，<br />
        有一種實現你所有嚮往的水岸生活，<br />
        叫做『伴月灣』
      </div>
    </div>
    <img
      class="arrow"
      v-if="!isMobile"
      src="@/projects/wv/s1/arrow.svg"
       v-scroll-to="{ element: `#scene2` }"
      alt=""
      srcset=""
    />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background: linear-gradient(to bottom, rgba(50,146,218,1) 0%,rgba(218,239,255,1) 50%,rgba(218,239,255,1) 100%);
  .arrow {
    position: absolute;
    z-index: 10;
    width: size(25);
    bottom: size(50);
    animation:move 1s ease-in-out infinite alternate;
    transform: translateY(50%);
  }
  .caption {
    position: absolute;
    right: size(24);
    bottom: size(18);
    font-size: size(12);
    color: #fff;
    z-index: 10;
  }
  .title {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: size(1520);
    height: size(300);
    position: absolute;
    bottom: size(240);
    bottom:calc(50% + (240 - 1080 *.5) * 100vw / 1920);
    left: 50%;
    transform: translate(-50%);
    z-index: 10;

    .left {
      .t1 {
        width: size(600);
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #fff;
      text-align: justify;
      margin-left: size(130);
      .t1 {
        font-size: size(30);
        font-weight: 700;
        margin-bottom: size(38);
        span {
          font-size: size(16);
        }
      }
      .t2 {
        font-size: size(20);
        font-family: "Noto Sans TC";
        line-height: 1.5;
        letter-spacing: 0.2em;
        font-weight:300;

      }
    }
  }
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-size: cover;
    &::after,
    &::before{
      content: "";
      display: block;
    width: 100%;
    height: 50%;
    background-size: cover;
    background-repeat: no-repeat;

    }
    &::before{
    background-image: url("~@/projects/wv/s1/bg_01.png");
    background-position: 50% 100%;}
    &::after{
    background-image: url("~@/projects/wv/s1/bg_02.jpg");
    background-position: 50% 0%;}

  }
  .cloud,
  .cloud2{
    width:size(2250);
    height: 50%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url("~@/projects/wv/s1/cloud.png");
    background-position: 50% 100%;
    background-size: 100% auto;
    animation:move 50s linear infinite;
    transform: translateX(-100%);

    &::after{
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
    background-image: url("~@/projects/wv/s1/cloud.png");
    background-position: 50% 100%;
    background-size: 100% auto;
      left: 100%;top: 0;
    }
  }
  .cloud2 {
    background-image: url("~@/projects/wv/s1/cloud2.png");
    background-position: 50% 0%;
    top: 55%;

    &::after{
    background-image: url("~@/projects/wv/s1/cloud2.png");
    background-position: 50% 0%;
    }
  }
}
    @keyframes move {
      to {
        transform: translateX(0);
      }
    }
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s1 {
    width: size-m(375);
    height: size-m(1244);
  min-height: size-m(1244);
  max-height: size-m(1244);
    .caption {
      right: size-m(24);
      bottom: unset;
      top: size-m(360);
      font-size: size-m(12);
    }

    .titlem {
      position: relative;
      z-index: 2;
      top: size-m(418);
      display: flex;
      flex-direction: column;
      align-items: center;
      .t1 {
        width: size-m(300);
      }
      .divider {
        width: 1px;
        height: size-m(129);
        background-color: #fff;
        margin-top: size-m(20);
        margin-bottom: size-m(35);
        transform-origin: 0 0;
      }
      .t2 {
        color: #fff;
        font-weight: 700;
        font-size: size-m(25);
        line-height: 1.6;
        p {
          &:last-child {
            font-size: size-m(12);
          }
        }
      }
      .t3 {
        margin-top: size-m(20);
        font-size: size-m(14);
        font-family: "Noto Sans TC";
        line-height: 2;
        font-weight: 600;
        color: #fff;
        font-weight:300;
      }
    }
    .bg {
    &::after,
    &::before{
    background-size: 100% auto;

    }
    &::before{
    background-image: url("~@/projects/wv/s1/bg_m_01.png");
    height: 25%;
    }
    &::after{
    background-image: url("~@/projects/wv/s1/bg_m_02.jpg");
    background-color: #004b6a;
    height: 75%;
    }
    }
  .cloud,
  .cloud2{
    width:348vw;
    height: 25%;
    }
  .cloud2 {
    top: 26%;}
  }
}
// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}
// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "s1",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
    };
  },
  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },
  mounted() { },
  created() { },
};
</script>