<template>
  <article class="s3">
    <div class="main">
      <div class="caption" v-if="!$isMobile()">空拍實景</div>
      <div class="text-box">
        <div class="t1" data-aos="fade-up" data-aos-delay="0">60米大興西路X 30米正光路</div>
        <div class="t2" data-aos="fade-up" data-aos-delay="100">交通正十字軸心 光速暢遊</div>
        <div class="c-divider"></div>
        <div class="t3" data-aos="fade-up" data-aos-delay="200">交通繁榮城市，速度創造價值!<br />
          十字軸心串聯南桃園交流道銜接國道一、國道三號!<br />
          國道二號直抵機場捷運快速道，世界環遊；桃園車站10分鐘，捷運G013站咫尺距離，<br />
          隨心所欲移動效率，縱橫天地的一派輕鬆。</div>
      </div>
      <img v-if="!$isMobile()" class="large" src="@/section/s3/large.svg" alt="" srcset="" data-aos="fade-right" data-aos-delay="400">
      <img v-else class="large" src="@/section/s3/large_m.svg" alt="" srcset="" data-aos="fade-right" data-aos-delay="400">
      <div class="fullview" v-if="$isMobile()">

        <Fullview />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  width: 100%;
  height: size(1080);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .main {
    position: relative;
    width: size(1789);
    height: size(908);
    background-size: cover;
    background-image: url('@/section/s3/bg.jpg');
    padding-top: size(100);

    .large {
      position: absolute;
      width: size(34);
      left: -#{size(17)};
      top: 0;
      z-index: 1;
    }

    .caption {
      position: absolute;
      right: size(60);
      bottom: size(25);
      font-weight: 400;
      font-size: size(15);
      color: #FFFFFF;
      text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    }

    .text-box {
      margin: 0 auto;
      color: #fff;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

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
        width: size(510);
        height: size(2);
        background-color: #fff;
        margin: size(25) 0;
      }

      .t3 {
        font-family: 'Noto Serif SC';
        font-weight: 400;
        font-size: size(18);
        line-height: 178%;
        letter-spacing: 0.05em;
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s3 {
    width: 100%;
    height: size-m(667);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .main {
      width: 100%;
      height: 100%;
      background-image: unset;
      padding-top: 0;

      .fullview {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
      }

      .large {
        width: size-m(21.46);
        left: size-m(8.27);
        top: size-m(20);
        pointer-events: none;
      }

      .text-box {
        position: relative;
        margin: 0 auto;
        color: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
        padding-top: size-m(34);
        

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
          max-width: size-m(315);
          letter-spacing: -0.01em;
        }
      }
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
