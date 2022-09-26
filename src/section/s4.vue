<template>
  <article class="s4">
    <div class="item">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">六大創新 拓展建築 美的造極</div>
      <img src="@/section/ring.svg" alt="" srcset="">
      <div class="t2" data-aos="fade-up" data-aos-delay="200">高雄的好朋友泰嘉，踏行楠梓高雄大學特區，<br />
        首創六大創新服務，開拓南台灣建築大道上的典範。
      </div>
    </div>
    <div class="images grid grid-cols-3 font-['Noto_Sans_TC']">
      <div class="image" v-for="image in images">
        <div class="img" :style="{backgroundImage: `url('${image.image}')`}"></div>
        <div class="flex items-center justify-center md:justify-between w-full">
          <p v-html="image.text" data-aos="fade-up" data-aos-delay="400"></p>
          <img v-if="!$isMobile()" class="ml-auto mr-0" :src="image.icon" alt="" srcset="">
        </div>
      </div>

    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  position: relative;
  width: 100%;
  height: size(1080);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: size(180);

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


  .images {
    position: relative;
    column-gap: size(31.8);
    row-gap: size(53);

    .image {
      position: relative;
      width: size(280.32);
      height: auto;

      .img {
        position: relative;
        width: size(268.64);
        height: size(192.72);
        background-size: cover;
        transform-style: preserve-3d;
        margin-bottom: size(20);

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          right: -#{size(11.68)};
          bottom: -#{size(11.68)};
          background-color: #699DC4;
          transform: translateZ(-1px);
        }
      }

      p {
        padding-left: size(9);
        font-weight: 400;
        font-size: size(20);
      }

      img {
        height: size(45);
        max-width: size(70);
      }
    }
  }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
    flex-direction: column;
    height: size-m(522);
    gap: size-m(28);

    .item {
      gap: size-m(10);
      z-index: 1;

      .t1 {
        font-size: size-m(20);
      }

      img {
        width: size-m(18);
      }

      .t2 {
        margin-top: size-m(10);
        font-size: size-m(12);
      }
    }


    .images {
      column-gap: size-m(26);
      row-gap: size-m(24);

      .image {
        width: size-m(96);

        .img {
          width: size-m(92);
          height: size-m(66);
          margin-bottom: size-m(10);

          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            right: -#{size-m(5)};
            bottom: -#{size-m(5)};
            background-color: #699DC4;
            transform: translateZ(-1px);
          }
        }

        p {
          text-align: center;
          padding-left: 0;
          white-space: nowrap;
          font-size: size-m(12);
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
    image: new URL("../section/s4/1.jpg", import.meta.url).href,
    icon: new URL("../section/s4/i1.svg", import.meta.url).href,
    text: '好住先於快銷<br/>LIVING 宜居比例'
  },
  {
    image: new URL("../section/s4/2.jpg", import.meta.url).href,
    icon: new URL("../section/s4/i2.svg", import.meta.url).href,
    text: '本土先於世界<br/>VIEW跨界眼界'
  },
  {
    image: new URL("../section/s4/3.jpg", import.meta.url).href,
    icon: new URL("../section/s4/i3.svg", import.meta.url).href,
    text: '專業先於廣告<br/>SGS檢測證'
  },
  {
    image: new URL("../section/s4/4.jpg", import.meta.url).href,
    icon: new URL("../section/s4/i4.svg", import.meta.url).href,
    text: '關心先於官網<br/>CARE雲端APP'
  },
  {
    image: new URL("../section/s4/5.jpg", import.meta.url).href,
    icon: new URL("../section/s4/i5.svg", import.meta.url).href,
    text: '主動先於客訴<br/>PROACTIVE社區健檢'
  },
  {
    image: new URL("../section/s4/6.jpg", import.meta.url).href,
    icon: new URL("../section/s4/i6.svg", import.meta.url).href,
    text: '客服先於售價<br/>SERVICE董座親轄'
  },
];
</script>
