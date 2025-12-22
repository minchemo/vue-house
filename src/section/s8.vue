<template>
  <article class="s8">
    <div class="slider" data-aos="fade">
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" v-lazy:background-image="img.img">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s8 {
  @apply relative flex flex-col items-center justify-center;
  width: 100%;
  background: #C6E2E2;
  background-size: cover;
  // height: size(800);
  padding: 0 0 0 0;
  font-size: size(18);
  gap: 1.5em;
  flex-wrap: nowrap;
  font-family: Noto Serif TC;

  .main {
    @apply flex;
    margin: 0;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }

  .txt {
    text-align: center;
    position: relative;
    padding-top: 1.8em;
    z-index: 10;
    padding-bottom: 1.8em;
    color: #fff;

    .title {

      &::after,
      &::before {
        background: #fff;
        width: 7.3em;
      }
    }

    .title {
      font-size: 2em;
      font-weight: 700;
    }

    .en {
      margin-top: size(20);
    }

  }

  .slider {
    @apply relative;
    margin: 0 0 0 0;
    //flex-basis: size(812);
    height: size(812);
    width: 100%;

    .slide-item {
      @apply bg-cover;
      width: 100%;
      //flex-basis: size(1682);
      height: size(812);

    }

    .arrows .prev,
    .arrows .next {
      width: 3%;
    }

    .splide__pagination {
      bottom: .5em;
    }

    .caption {
      position: absolute;
      color: #3a3a3a;
      font-size: 1em;
      bottom: size(10);
      right: size(10);
    }



    .arrows {
      @apply absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2;
      padding: 0;
      height: 100%;
      pointer-events: none;

      .prev,
      .next {
        width: 3%;
        display: flex;
        pointer-events: stroke;
        cursor: pointer;

        justify-content: center;
        align-items: center;
        background: url("data:image/svg+xml,%3Csvg width='30' height='51' viewBox='0 0 30 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline stroke='%23FFF' stroke-width='4' points='3.7,2.8 26.3,25.5 3.7,48.2 '/%3E%3C/svg%3E") no-repeat center;
        background-size: 50% auto;
        transition: background-color .5s;

        &:hover {
          background-color: #0003;
        }
      }

      .prev {
        transform: scaleX(-1);
      }

      img {
        margin: unset;
        @apply cursor-pointer hover:opacity-50;
      }
    }

    .splide__pagination {
      @apply absolute flex justify-center w-full;
      bottom: 2%;
      gap: .5em;
      color: #fff;

      li {
        button {
          @apply rounded-full hover:opacity-50;
          width: 1em;
          height: 1em;
          border: 2px solid currentColor;

          &.is-active {
            background: currentColor;
          }
        }
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s12 {
    @apply flex-col;
    height: auto;
    padding: 0;
    font-size: sizem(12);
    flex-wrap: nowrap;
    margin-bottom: 0em;
    gap: 2em;

    .main {
      padding: 0 sizem(32.5);
      width: 100%;
    }

    .txt {
      .title {

        &::after,
        &::before {
          width: 0em;
        }
      }

      .title {
        font-size: 2em;
        font-weight: 700;
      }

      .en {
        margin-top: sizem(10);
        width: sizem(300);
      }

    }

    .slider {
      @apply relative;
      height: auto;
      width: 100%;

      .caption {
        font-size: sizem(12);
        right: sizem(5);
        bottom: sizem(5);
      }

      .slide-item {
        @apply bg-cover;
        width: 100%;
        flex-basis: auto;
        height: sizem(210);

      }

      .arrows .prev,
      .arrows .next {
        width: 8%;
      }


      .arrows {

        .prev,
        .next {
          width: 8%;
        }
      }

      .splide__pagination {
        @apply absolute flex justify-center w-full;
        display: none;
        bottom: sizem(6.7);
        gap: sizem(2.5);

        li {
          button {
            @apply rounded-full hover:opacity-50;
            width: sizem(10.3);
            height: sizem(3.34);
            border: sizem(1) solid #fff;

            &.is-active {
              @apply bg-white;
            }
          }
        }
      }
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img: new URL("./s8/s8-1.png", import.meta.url).href,
    caption: ""
  },
  {
    img: new URL("./s8/s8-2.png", import.meta.url).href,
    caption: " "
  },
] 
</script>
