<template>
  <article class="s7">
    <div class="item" v-for="item in images" v-if="!$isMobile()">
      <div class="t1" v-html="item.t1" data-aos="fade-up" data-aos-delay="0"></div>
      <div class="t2" v-html="item.t2" data-aos="fade-up" data-aos-delay="200"></div>
      <img :src="item.image" alt="" srcset="">
    </div>
    <div class="item" v-for="item in images" v-else>
      <div>
        <div class="t1" v-html="item.t1" data-aos="fade-up" data-aos-delay="0"></div>
        <div class="t2" v-html="item.t2" data-aos="fade-up" data-aos-delay="200"></div>
      </div>
      <img :src="item.image" alt="" srcset="">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  position: relative;
  width: 100%;
  height: size(874);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7BA9D3;
  gap: size(23);

  .item {
    width: size(524);
    height: size(663);
    padding: size(32) size(28.9);
    color: #fff;
    font-family: 'Noto Sans TC';
    display: flex;
    flex-direction: column;
    gap: size(30);
    border: size(1) solid #fff;

    .t1 {
      font-weight: 700;
      font-size: size(30);
      line-height: size(43);
      text-align: center;
    }

    .t2 {
      font-weight: 400;
      font-size: size(20);
      line-height: size(30);
      letter-spacing: 0.07em;
    }

    img {
      margin-bottom: 0;
      margin-top: auto;
      width: 100%;
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s7 {
    height: auto;
    flex-direction: column;
    gap: size-m(10);
    padding: size-m(10) 0;

    .item {
      width: size-m(316);
      height: auto;
      padding: size-m(10) 0;
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: size-m(8);
      border: size-m(1) solid #fff;

      .t1 {
        font-weight: 500;
        font-size: size-m(16);
        line-height: size-m(23.17);
        text-align: left;
        padding-left: size-m(10);
        letter-spacing: 0;
      }

      .t2 {
        font-size: size-m(12);
        line-height: size-m(17);
        padding-left: size-m(10);
        letter-spacing: 0;
        margin-top: size-m(5);
      }

      img {
        margin-bottom: 0;
        margin-top: 0;
        width: size-m(120);
      }

      &:nth-child(2) {
        flex-direction: row-reverse;

        .t1 {
          padding-right: size-m(10);
          padding-left: 0;
          white-space: nowrap;
        }

        .t2 {
          padding-right: size-m(10);
          padding-left: 0;
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
const images = [
  {
    image: isMobile ? new URL("../section/s7/1.jpg", import.meta.url).href : new URL("../section/s7/1_m.jpg", import.meta.url).href,
    t1: '新台17線打通北高雄<br/>15分鐘到美術館、農16',
    t2: '新台17線拍板執行！有助紓解楠梓至左營段車流量，從高大特區往南僅需15分鐘，就能連結大美術館園區！'
  },
  {
    image: isMobile ? new URL("../section/s7/2.jpg", import.meta.url).href : new URL("../section/s7/2_m.jpg", import.meta.url).href,
    t1: '後勁溪、左營海景雙風光<br/>水岸對望 拓境美感視界',
    t2: '前有眺望無遮擋的左營軍港海岸景觀，後倚後勁溪美景，左擁右抱雙倍水岸生活！'
  },
  {
    image: isMobile ? new URL("../section/s7/3.jpg", import.meta.url).href : new URL("../section/s7/3_m.jpg", import.meta.url).href,
    t1: '高雄大學 萬坪森林環擁<br/>學風靜地 孵育高質生活',
    t2: '高雄大學是台灣少數無圍牆的森林大學之一，校園佔地82公頃，沿途環繞綠樹、湖泊、綠意環境，宛如城市裡的大公園。'
  },
];
</script>
