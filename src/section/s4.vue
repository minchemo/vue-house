<template>
  <article class="s4">
    <Splide ref="splide" :options="{
      rewind: true,
      autoWidth: true,
      arrows: false,
      type: 'fade',
      autoplay: true,
      interval: 4000,
    }" @splide:move="move" class="slide-box absolute z-10">
      <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
        <div class="caption">{{img.caption}}</div>
      </SplideSlide>
      <img v-if="!$isMobile()" class="prev cursor-pointer" @click="splide.splide.go('<')" src="@/section/prev.svg" alt="">
      <div v-if="$isMobile()" class="mo-arrows">
        <img @click="splide.splide.go('<')" src="@/section/prev_m.png" alt="">
        <img @click="splide.splide.go('>')" src="@/section/next_m.png" alt="">
      </div>
    </Splide>
    <div class="text-box">
      <div class="t1" data-aos="fade-left" data-aos-delay="0">蘊藏生命力的森態 </div>
      <div class="t2" data-aos="fade-left" data-aos-delay="100">20公頃<br />
        綠金樹海特區<br v-if="!$isMobile()"/>
        奢藏</div>
      <div class="c-divider"></div>
      <div class="t3" data-aos="fade-left" data-aos-delay="200">萬坪風禾公園、2座千坪向陽公園、水秀公園、6座兒童公園…..走進中路特區約20公頃綠海，<br v-if="!$isMobile()" />
        500公尺內隨心親近自然，城市綠鑽難得可貴</div>
      <div class="thumbnails" v-if="!$isMobile()">
        <template v-for="img, i in imgs">
          <div data-aos="fade" class="item" @click="splide.splide.go(i)" v-if="i != currentIdx"
            :style="{backgroundImage: `url('${img.img}')`}">
            <div class="caption">{{img.caption}}</div>
          </div>
        </template>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  width: 100%;
  height: size(1080);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: size(70);
  background-size: cover;
  background-image: url('@/section/s4/bg.jpg');


  .large {
    position: absolute;
    width: size(34);
    left: -#{size(17)};
    top: 0;
    z-index: 1;
  }

  .slide-box {
    position: relative;
    width: size(1337);
    height: size(820);


    .slide {
      width: size(1337);
      height: size(820);
      background-size: cover;

      .caption {
        position: absolute;
        right: size(17);
        top: size(17);
        font-weight: 400;
        font-size: size(15);
        color: #FFFFFF;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
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

  .s4 {
    height: size-m(556);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: size-m(20);
    background-image: url('@/section/s4/bg_m.jpg');
    padding-top: size-m(36);


    .slide-box {
      position: relative;
      width: 100%;
      height: size-m(230);

      .slide {
        width: 100%;
        height: size-m(230);

        .caption {
          right: size-m(10);
          top: size-m(10);
          font-size: size-m(15);
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
      align-items: flex-start;
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
        width: size-m(315);
        height: size-m(2);
        margin: size-m(10) 0;
      }

      .t3 {
        font-size: size-m(14);
        max-width: size-m(315);
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
    img: globals.$isMobile() ? new URL("../section/s4/1_m.jpg", import.meta.url).href : new URL("../section/s4/1.jpg", import.meta.url).href,
    caption: '風禾公園'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s4/2_m.jpg", import.meta.url).href : new URL("../section/s4/2.jpg", import.meta.url).href,
    caption: '水秀公園'
  },
  {
    img: globals.$isMobile() ? new URL("../section/s4/3_m.jpg", import.meta.url).href : new URL("../section/s4/3.jpg", import.meta.url).href,
    caption: '向陽公園'
  },
])
</script>
