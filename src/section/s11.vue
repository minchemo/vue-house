<template>
  <div class="s11 relative bg-black" v-show="false">
    <div class="flex h-full w-full">
      <div class="left relative">
        <Splide ref="splide" :options="{
          rewind: true,
          autoWidth: true,
          arrows: false,
          type: 'loop',
          autoplay: true,
          interval: 4000,
        }" @splide:move="move" class="slide-box absolute z-10">
          <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
            <div class="caption z-10">{{ img.caption }}</div>
          </SplideSlide>
        </Splide>
        <div class="splide__arrows absolute z-20 w-full px-2 flex justify-between top-1/4 left-0">
          <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
            <img src="@/assets/prev.svg" alt="心仝聚" srcset="">
          </button>
          <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
            <img src="@/assets/next.svg" alt="心仝聚" srcset="">
          </button>
        </div>
        <div class="info z-20">
          <div class="t1 font-['Noto_serif_tc']" data-aos="fade" data-aos-delay="0">優質日系營造</div>
          <div class="t3" data-aos="fade" data-aos-delay="200">
            文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認(150字)
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  width: 100%;
  height: size(1080);
  background-color: #000;

  .left {
    flex-basis: size(1120);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: size(65);

    .slide-box {
      position: relative;
      width: size(660);
      height: size(450);

      .slide {
        width: size(660);
        height: size(450);
        background-size: cover;
        position: relative;

        .caption {
          position: absolute;
          font-size: size(12);
          font-weight: 350;
          color: #fff;
          bottom: size(10);
          left: size(20);
        }
      }

      .splide__pagination {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: size(20);
        z-index: 20;
        gap: size(7.5);

        li {
          height: size(20);
          margin-bottom: size(10);

          .splide__pagination__page {
            width: size(15);
            height: size(15);
            border-radius: 100%;
            background: rgba($color: #fff, $alpha: 0.5);

            &.is-active {
              background: rgba($color: #fff, $alpha: 1);
            }
          }
        }
      }
    }

    .splide__arrows {
      left: 50%;
      top: 35%;
      transform: translate(-50%, -50%);
      width: size(820);
    }

    .info {
      width: size(660);

      .t1 {
        font-weight: 800;
        font-size: size(40);
        line-height: 70%;
        color: #fff;
        margin-bottom: size(45);
        text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.8);
      }

      .t3 {
        font-weight: 400;
        width: size(660);
        font-size: size(20);
        line-height: 150%;
        letter-spacing: 0.2em;
        color: #fff;
      }
    }
  }

  .right {
    flex-basis: size(800);
    height: 100%;
    background-image: url('@/section/s11/large.jpg');
    background-size: cover;
    background-position: center;
  }
}


@media screen and (max-width:768px) {
  .s11 {
    width: size-m(375);
    height: size-m(600);
  }
}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();

const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}

const imgs = ref([
  {
    img: new URL("../section/s11/1.jpg", import.meta.url).href,
    caption: '保護文字'
  },
  {
    img: new URL("../section/s11/2.jpg", import.meta.url).href,
    caption: '保護文字'
  },
])
</script>
