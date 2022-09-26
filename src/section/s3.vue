<template>
  <article class="s3">
    <div class="item">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">坐在泰嘉的肩上 引以為傲</div>
      <img src="@/section/ring.svg" alt="" srcset="">
      <div class="t2" data-aos="fade-up" data-aos-delay="200">放眼台灣，泰嘉以絕藏獨到細節<br />
        茁長出六大創新服務行囊<br />
        楠梓將又一次<br />
        無可超越的，河海韻律日常<br />
        無以複製的，泰嘉生活美學<br />
        總比需求出現前走快了一步<br />
        讓日後得以放慢腳步、提煉生活深度<br />
        住進泰嘉拓真，成為永恆驕傲
      </div>
    </div>
    <!-- round-->
    <div class="o">
      <div></div>
    </div>

    <!--wave-->
    <div class="w wave1">
      <div class="w4"><img src="@/section/s3/wave4.svg" /><img src="@/section/s3/wave4.svg" /></div>
      <div class="w3"><img src="@/section/s3/wave3.svg" /><img src="@/section/s3/wave3.svg" /></div>
      <div class="w2"><img src="@/section/s3/wave2.svg" /><img src="@/section/s3/wave2.svg" /></div>
      <div class="w1"><img src="@/section/s3/wave1.svg" /><img src="@/section/s3/wave1.svg" /></div>
    </div>
    <!--wave2-->
    <div class="w wave2" v-if="!$isMobile()">
      <div class="w4"><img src="@/section/s3/wave4.svg" /><img src="@/section/s3/wave4.svg" /></div>
      <div class="w3"><img src="@/section/s3/wave3.svg" /><img src="@/section/s3/wave3.svg" /></div>
      <div class="w2"><img src="@/section/s3/wave2.svg" /><img src="@/section/s3/wave2.svg" /></div>
      <div class="w1"><img src="@/section/s3/wave1.svg" /><img src="@/section/s3/wave1.svg" /></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  position: relative;
  width: 100%;
  height: size(1080);
  background-color: #DCDCDD;
  display: flex;
  align-items: center;
  justify-content: center;

  .item {
    font-family: 'Noto Sans TC';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: size(30);
    z-index: 1;

    .t1 {
      font-weight: 700;
      font-size: size(40);
      letter-spacing: 0.07em;
      color: #699DC4;
    }

    img {
      width: size(48);
    }

    .t2 {
      font-weight: 400;
      font-size: size(20);
      line-height: 1.8;
      letter-spacing: 0.07em;
    }
  }

  .w {
    width: 100%;
    overflow: hidden;
    height: size(228);
    position: absolute;
    left: 0;
    pointer-events: none;

    &.wave1 {
      bottom: 0;
    }

    &.wave2 {
      top: 0;
    }

    .w1 {
      position: absolute;
      top: 5vw;
      left: 0;
      // transform: rotate(3deg);
      white-space: nowrap;

      img {
        width: 200%;
        transform: translateX(-100%);
        animation: light1 6s linear infinite;
      }
    }

    .w2 {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.7;
      // transform: rotate(-3deg) scaleX(-1);
      white-space: nowrap;

      img {
        width: 200%;
        transform: translateX(-100%);
        animation: light1 8s linear infinite reverse;
      }
    }

    .w3 {
      position: absolute;
      top: 0;
      left: 0;
      // transform: rotate(-10deg);
      white-space: nowrap;

      img {
        width: 200%;
        transform: translateX(-100%);
        animation: light1 7s linear infinite;
      }
    }

    .w4 {
      position: absolute;
      top: 0;
      left: 0;
      // transform: rotate(-10deg);
      white-space: nowrap;

      img {
        width: 200%;
        transform: translateX(-100%);
        animation: light1 9s linear infinite;
      }
    }

    @keyframes light1 {
      to {
        transform: translateX(0);
      }
    }
  }

  .o {
    border: 1px solid #fff;
    width: size(416);
    height: size(416);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -#{size(208)};
    margin-top: -#{size(208)};
    transform: rotate(30deg) scaleX(.8);

    div {
      width: 10px;
      height: 10px;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      top: -5px;
      left: calc(50% - 5px);
      animation: light1 10s linear infinite;
      transform-origin: 50% size(211);
    }
  }

  @keyframes light1 {
    to {
      transform: rotate(360deg);
    }
  }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
    height: size-m(464);

    .item {
      gap: size-m(20);
      .t1 {
        font-size: size-m(20);
      }

      img {
        width: size-m(18);
      }

      .t2 {
        font-size: size-m(12);
      }
    }

    .w {
      height: size-m(60);
    }

    .o {
      width: size-m(300);
      height: size-m(300);
      margin-left: -#{size-m(150)};
      margin-top: -#{size-m(150)};
      div {
        transform-origin: 50% size-m(154);
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
