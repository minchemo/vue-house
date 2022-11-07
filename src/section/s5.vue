<template>
  <article class="s5">
    <Splide ref="splide" :options="{
      rewind: true,
      autoWidth: true,
      arrows: false,
      autoplay: false,
      interval: 4000,
      type: $isMobile() ? 'fade': 'slide',
      drag: $isMobile() ? true: false,
      perPage: $isMobile() ? 1: 2
    }" @splide:move="move" class="slide-box absolute z-10">
      <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
        <div class="caption">{{img.caption}}</div>
      </SplideSlide>
      <img v-if="!$isMobile()" class="prev cursor-pointer" @click="splide.splide.go('<')" src="@/section/prev.svg"
        alt="">
      <div v-if="$isMobile()" class="mo-arrows">
        <img @click="splide.splide.go('<')" src="@/section/prev_m.png" alt="">
        <img @click="splide.splide.go('>')" src="@/section/next_m.png" alt="">
      </div>
    </Splide>
    <div class="text-box">
      <div v-if="!$isMobile()" class="t2" data-aos="fade-right" data-aos-delay="0">絕美<span>24</span>層天際線<br />
        華麗出雲
      </div>
      <div v-else class="t2" data-aos="fade-right" data-aos-delay="0">
        華麗出雲 絕美24層天際線
      </div>
      <div class="c-divider"></div>
      <div class="t3" data-aos="fade-right" data-aos-delay="100">「耑悦」以現代建築語彙優化古典建築美學，<br v-if="!$isMobile()" />典雅厚實的石材基座、深窗金屬格柵內斂質感、<br v-if="!$isMobile()" />雙塔建築宏觀羽翼，振翅飛越成就天際線。
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  width: 100%;
  height: size(1080);
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  gap: size(62);
  background-size: cover;
  background-image: url('@/section/s5/bg.jpg');

  .slide-box {
    position: relative;
    width: size(1350);
    height: size(819);

    .slide {
      width: size(675);
      height: size(819);
      background-size: cover;

      .caption {
        position: absolute;
        right: size(12);
        bottom: size(16);
        font-weight: 400;
        font-size: size(18);
        color: #FFFFFF;
        text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
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
  }

  .text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .t2 {
      font-weight: 500;
      font-size: size(64);
      line-height: 125%;
      letter-spacing: 0.03em;
      writing-mode: vertical-lr;

      span {
        writing-mode: horizontal-tb;
      }
    }

    .c-divider {
      width: size(456);
      height: size(2);
      background-color: #000;
      margin: size(25) 0;
    }

    .t3 {
      font-family: 'Noto Serif SC';
      font-weight: 400;
      font-size: size(18);
      line-height: 178%;
      text-align: center;
      max-width: size(457);
    }

    .thumbnails {
      display: flex;
      align-items: center;
      gap: size(4);
      margin-top: size(27);

      .item {
        width: size(226.16);
        height: size(150.6);
        background-size: cover;
        position: relative;
        color: #fff;
        cursor: pointer;

        .caption {
          position: absolute;
          right: size(10);
          bottom: size(5);
          font-weight: 400;
          font-size: size(15);
        }
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
    height: size-m(667);
    flex-direction: column;
    justify-content: flex-start;
    gap: size-m(20);
    background-image: url('@/section/s5/bg_m.jpg');

    .slide-box {
      position: relative;
      width: 100%;
      height: size-m(464);

      .slide {
        width: 100%;
        height: size-m(464);

        .caption {
          right: size-m(8);
          bottom: size-m(5);
          font-size: size-m(16);
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
      padding-right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: size-m(5);

      .t2 {
        font-size: size-m(25);
        line-height: 148%;
        writing-mode: horizontal-tb;
      }

      .c-divider {
        width: size-m(315);
        height: size-m(2);
        margin: size-m(10) 0;
        background-color: #fff;
      }

      .t3 {
        font-size: size-m(14);
        max-width: size-m(315);
        text-align: left;
      }
    }
  }

}
</style>
<script setup>
import { getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const splide = ref();
const currentIdx = ref(0)
const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}

const imgs = ref([
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: '外觀3D示意圖'
  },
  {
    img: new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: '外觀3D示意圖'
  },
])
</script>
