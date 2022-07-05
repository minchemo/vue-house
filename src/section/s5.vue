<template>
  <div class="s5 relative bg-black">
    <div class="flex flex-col md:flex-row justify-between h-full">
      <lazy-component class="img">
        <img v-if="$isMobile()" class="absolute bottom-0 w-full" src="@/section/s5/man_m.jpg" alt="心仝聚" srcset="" />
        <img v-else class="w-full h-full" src="@/section/s5/man.jpg" alt="心仝聚" srcset="" />
        <div class="img-info flex flex-col items-center justify-start md:justify-center">
          <div class="t1 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="0">從心 從家 從城</div>
          <div class="t2 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="200">揚起一陣藝文的家風</div>
          <div class="t3" data-aos="fade" data-aos-delay="400">大稻埕，承載百年歷史風華，不同族群、產業、文化共存，擁有深厚人文藝術底蘊，是隆遠品牌的發跡之地。<br><br>
            復古中藏有新穎，鄰里間互助相親，情感真摯敦厚，自幼生長於大稻埕的莊子華董事長，盼將這樣藝文薰陶、生意盎然、暖意環繞的生活氛圍，透過建築，忠實再現。
          </div>
          <div class="t4 flex flex-col items-center justify-center" data-aos="fade" data-aos-delay="400">
            <span :class="{ selected: currentIdx == 0 }" data-aos="fade" data-aos-delay="0">2021 光里蘊</span>
            <span :class="{ selected: currentIdx == 1 }" data-aos="fade" data-aos-delay="50">2021 山沺藏</span>
            <span :class="{ selected: currentIdx == 2 }" data-aos="fade" data-aos-delay="100">2017 富樂恬</span>
            <span :class="{ selected: currentIdx == 3 }" data-aos="fade" data-aos-delay="150">2017 森沺藏</span>
            <span :class="{ selected: currentIdx == 4 }" data-aos="fade" data-aos-delay="200">2016 花沺藏</span>
            <span :class="{ selected: currentIdx == 5 }" data-aos="fade" data-aos-delay="250">2014 景上河</span>
            <span :class="{ selected: currentIdx == 6 }" data-aos="fade" data-aos-delay="300">2012 索蘭朵</span>
          </div>
          <img class="absolute icon" data-aos="fade" data-aos-delay="400" src="@/section/s5/icon.png" alt="心仝聚"
            srcset="">
        </div>
      </lazy-component>

      <Splide ref="splide" :options="{
        rewind: true,
        autoWidth: true,
        arrows: false,
        type: 'fade',
        autoplay: true,
        interval: 4000,
      }" @splide:move="move" class="slide-box absolute z-10">
        <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
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
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  width: 100%;
  height: size(1080);

  .img {
    position: relative;
    flex-basis: size(1120);

    .img-info {
      position: absolute;
      right: 0;
      top: 0;
      width: size(570);
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.2);
      backdrop-filter: blur(10px);
      padding: 0 size(78);

      &::before {
        content: '';
        position: absolute;
        width: size(500);
        height: size(1040);
        border: 1px solid #D47300;
      }

      .t1 {
        color: #D47300;
        font-size: size(40);
        font-weight: 800;
        line-height: 70%;
        margin-bottom: size(15);
      }

      .t2 {
        color: #fff;
        font-size: size(30);
        font-weight: 800;
        line-height: 100%;
        margin-bottom: size(58);
      }

      .t3 {
        color: #FCFAE1;
        font-size: size(20);
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.2em;
        margin-bottom: size(140);
        text-align: justify;
      }

      .t4 {
        span {
          position: relative;
          font-weight: 400;
          font-size: size(20);
          letter-spacing: 0.2em;
          display: inline-block;
          color: #fff;
          margin-bottom: size(20);

          &.selected {
            &::after {
              content: '';
              width: size(50);
              height: size(50);
              background-image: url('@/section/s5/small_icon.png');
              background-size: contain;
              position: absolute;
              left: -#{size(50)};
              bottom: 0;
              top: 50%;
              transform: translateY(-50%);
              animation: zoomIn .5s;
            }

            &::before {
              content: '';
              width: size(50);
              height: size(50);
              background-image: url('@/section/s5/small_icon.png');
              background-size: contain;
              position: absolute;
              right: -#{size(50)};
              bottom: 0;
              top: 50%;
              transform: translateY(-50%);
              animation: zoomIn .5s;
            }

            @keyframes zoomIn {
              from {
                transform: translateY(-50%) scale(0);
              }

              to {
                transform: translateY(-50%) scale(1);
              }
            }
          }
        }
      }

      .icon {
        width: size(120);
        bottom: size(450);
        right: size(70);
      }
    }
  }

  .slide-box {
    flex-basis: size(800);
    height: size(1080);

    .splide__track {
      z-index: 10;
    }

    .slide {
      width: size(800);
      height: size(1080);
      background-size: cover;

      .caption {
        background: rgba($color: #000000, $alpha: 0.5);
        font-size: size(15);
        line-height: size(24);
        color: #fff;
        border-radius: size(6) size(6) 0 0;
        padding: 0 size(8) 0 size(8);
        bottom: 0;
        left: size(150);
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
    left: unset;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: size(800);
  }
}


@media screen and (max-width:768px) {

  .s5 {
    width: 100%;
    height: size-m(1037);

    .img {
      position: relative;
      flex-basis: 100%;
      height: 100%;

      .img-info {
        position: absolute;
        right: 0;
        top: 0;
        width: size-m(375);
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.2);
        background-color:#0000;
        backdrop-filter: blur(0px);
        padding: size-m(35) size-m(35);

        &::before {
          content: '';
          position: absolute;
          width: size-m(340);
          height: size-m(652);
          border: 1px solid #D47300;
        }

        &::after {
          content: '';
          position: absolute;
          width: size-m(330);
          height: size-m(20);
          top: 50%;
          transform: translateY(-50%);
        }

        .t1 {
          font-size: size-m(25);
          line-height: 160%;
          margin-bottom: size-m(0);
          margin-top: size-m(15);
        }

        .t2 {
          font-size: size-m(19);
          font-weight: 700;
          line-height: 160%;
          margin-bottom: size-m(20);
        }

        .t3 {
          font-size: size-m(15);
          line-height: 160%;
          letter-spacing: 0;
          margin-bottom: size-m(80);
        }

        .t4 {
          position: absolute;
          bottom: size-m(70);
          right: size-m(70);

          span {
            position: relative;
            font-size: size-m(15);
            letter-spacing: 0;
            display: inline-block;
            margin-bottom: size-m(5);

            &.selected {
              &::after {
                display: none;
              }

              &::before {
                content: '';
                width: size-m(20);
                height: size-m(20);
                right: -#{size-m(20)};
              }

              @keyframes zoomIn {
                from {
                  transform: translateY(-50%) scale(0);
                }

                to {
                  transform: translateY(-50%) scale(1);
                }
              }
            }
          }
        }

        .icon {
          width: size-m(90);
          bottom: size-m(270);
          right: size-m(60);
        }
      }
    }


    .slide-box {
      flex-basis: size-m(310);
      height: auto;
      width: 100%;

      .splide__track {
        z-index: 10;
      }

      .slide {
        width: size-m(375);
        height: size-m(310);
      }

      .splide__pagination {
        display: none;
      }
    }

    .splide__arrows {
      left: unset;
      right: 0;
      top: 85%;
      transform: translateY(-50%);
      width: size-m(375);
    }
  }

}
</style>

<script setup>
import { ref, getCurrentInstance } from "vue"
const splide = ref();

const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}


const globals = getCurrentInstance().appContext.config.globalProperties;

const imgs = ref([
  {
    img: globals.$isMobile() ? new URL("../section/s5/1_m.jpg", import.meta.url).href : new URL("../section/s5/1.jpg", import.meta.url).href,
  },
  {
    img: globals.$isMobile() ? new URL("../section/s5/2_m.jpg", import.meta.url).href : new URL("../section/s5/2.jpg", import.meta.url).href,
  },
  {
    img: globals.$isMobile() ? new URL("../section/s5/3_m.jpg", import.meta.url).href : new URL("../section/s5/3.jpg", import.meta.url).href,
  },
  {
    img: globals.$isMobile() ? new URL("../section/s5/4_m.jpg", import.meta.url).href : new URL("../section/s5/4.jpg", import.meta.url).href,
  },
])
</script>
