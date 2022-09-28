<template>
  <article class="s2">
    <div class="main">
      <div class="img-box">
        <div class="caption">司法公園示意圖 圖片來源：桃園市政府網站</div>
      </div>
      <div class="text-box" >
        <div class="t1" data-aos="fade-left" data-aos-delay="0">中路正核心‧繁榮一森青</div>
        <div class="t2" data-aos="fade-left" data-aos-delay="100">中路司法特區<br />
          獨有榮華氣韻</div>
        <div class="c-divider"></div>
        <div class="t3" data-aos="fade-left" data-aos-delay="200">桃園中路司法特區，完整國際街廓與綠海文教氣息，鄰近藝文特區、市府特區，左右逢源的高素質住宅區。<br />
          環境自成榮華氣韻，醇釀成雍容富足的生活氛圍，「耑悦」繁華藏靜，名門首選！</div>
      </div>
      <img v-if="!$isMobile()" class="large" src="@/section/s2/large.svg" alt="" srcset="" data-aos="fade-right" data-aos-delay="400">
      <img v-else class="large" src="@/section/s2/large_m.svg" alt="" srcset="" data-aos="fade-right" data-aos-delay="400">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-size: cover;
    background-image: url('@/section/s2/bg.jpg');

    .large {
      position: absolute;
      width: size(34);
      left: -#{size(17)};
      top: 0;
      z-index: 1;
    }

    .img-box {
      position: relative;
      background-size: cover;
      background-image: url('@/section/s2/1.jpg');
      width: size(1259);
      height: size(908);

      .caption {
        position: absolute;
        right: size(12);
        top: size(16);
        font-weight: 400;
        font-size: size(15);
        color: #FFFFFF;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
      }
    }

    .text-box {
      padding-right: size(68);

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
        text-align: justify;
        max-width: size(389.05);
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {


  .s2 {
    height: size-m(667);

    .main {
      position: relative;
      width: size-m(315);
      height: size-m(621);
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-image: url('@/section/s2/bg_m.jpg');
      gap: size-m(20);

      .large {
        position: absolute;
        width: size-m(21.46);
        left: unset;
        right: 100%;
        top: 0;
        z-index: 1;
      }

      .img-box {
        width: 100%;
        height: size-m(227.18);

        .caption {
          right: size-m(8);
          top: size-m(5);
          font-size: size-m(12);
        }
      }

      .text-box {
        padding-right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: size-m(5);

        .t1 {
          font-size: size-m(16);
        }

        .t2 {
          font-size: size-m(25);
          line-height: 148%;
        }

        .c-divider {
          width: size-m(278);
          height: size-m(2);
          margin: size-m(15) 0;
        }

        .t3 {
          font-size: size-m(14);
          max-width: size-m(278);
        }
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
