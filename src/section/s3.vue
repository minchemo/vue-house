<template>
  <article class="s3">
    <div class="imgs">
      <img class="tree1" v-if="!isMobile" src="@/section/s3/tree1.webp" alt="" srcset="" />
      <img class="tree1" v-else src="@/section/s3/tree1m.webp" alt="" srcset="" />
      <img class="tree2" v-if="!isMobile" src="@/section/s3/tree2.webp" alt="" srcset="" />
      <img class="tree2" v-else src="@/section/s3/tree2m.webp" alt="" srcset="" />
      <img class="cloud1" src="@/section/s3/i1.png" alt="" srcset="" />
      <img class="cloud2" src="@/section/s3/i1.png" alt="" srcset="" />
      <img class="airplane" src="@/section/s3/i2.png" alt="" srcset="" />
      <img class="ballon1" src="@/section/s3/i3.png" alt="" srcset="" />
      <img class="ballon2" src="@/section/s3/i3.png" alt="" srcset="" />
    </div>
    <div class="content">
      <div class="section">
        <div class="t1"  data-aos="fade-up" data-aos-delay="0">世界AI＋之旭 <br v-if="isMobile" />落筆科技之詩</div>
        <div class="t2"  data-aos="fade-up" data-aos-delay="200">「新北國際AI+智慧園區」蓄勢待發</div>
        <div class="t3"  data-aos="fade-up" data-aos-delay="400">
          世界第一半導體設備商，ASML、NVIDIA、研華也紛紛到來。林口屹立科技時代浪尖，即將刻劃最具規模的AI產業生態系。
        </div>

        <div class="swiper-box1">
          <Splide
            ref="splide"
            class="slide"
            :options="{
              drag: isMobile,
              arrows: false,
              autoplay: isMobile,
              pagination: false,
              interval: 4000,
              gap: 0,
              type: 'loop',
              autoWidth: true,
              perPage: isMobile ? 1 : 3,
            }"
          >
            <SplideSlide
              class="slide-item"
              :key="i"
              v-for="i in imgs"
              :style="{ 'background-image': `url(${i.img})` }"
            >
              <div class="caption">
                {{ i.caption }}
              </div>
            </SplideSlide>
          </Splide>
          <div class="mo-arrow" v-if="isMobile">
            <img
              class="prev"
              @click="splide.go('<')"
              src="@/section/arrow2.png"
              alt=""
              srcset=""
            />
            <img
              class="next"
              @click="splide.go('>')"
              src="@/section/arrow2.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="en">
          <div class="line"></div>
          <span>Ａ LARGE-SCALE AI INDUSTRY ECOSYSTEM</span>
          <div class="line"></div>
        </div>
      </div>
      <div class="section">
        <div class="t1"  data-aos="fade-up" data-aos-delay="0">
          時代之旭 <br v-if="isMobile" />林口舊街共融摩登商場
        </div>
        <div class="en"  data-aos="fade-up" data-aos-delay="200"> 
          <span>THE FUSION OF FASHION AND TRADITION</span>
        </div>
        <div class="swiper-section">
          <div class="thumbnails" v-if="isMobile">
            <div
              class="item"
              :class="{ active: i === activeIdx2 }"
              v-for="(img, i) in imgs2"
              :key="i"
              @click="splide2.go(i)"
              :style="{ 'background-image': `url(${img.img})` }"
            >
              <div class="label" v-html="img.thumbnailsLabel"></div>
            </div>
          </div>
          <div class="swiper-box2">
            <Splide
              ref="splide2"
              class="slide"
              :options="{
                arrows: false,
                autoplay: true,
                pagination: false,
                interval: 4000,
                gap: 0,
                type: 'loop',
                autoWidth: true,
                perPage: 1,
              }"
              @splide:move="onMove2"
            >
              <SplideSlide
                class="slide-item"
                :key="i"
                v-for="i in imgs2"
                :style="{ 'background-image': `url(${i.img})` }"
              >
                <div class="caption">
                  {{ i.caption }}
                </div>
              </SplideSlide>
            </Splide>
            <div class="mo-arrow" v-if="isMobile">
              <img
                class="prev"
                @click="splide2.go('<')"
                src="@/section/arrow2.png"
                alt=""
                srcset=""
              />
              <img
                class="next"
                @click="splide2.go('>')"
                src="@/section/arrow2.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div class="info">
            <img
              class="person"
              v-if="!isMobile"
              src="@/section/s3/i4.png"
              alt=""
              srcset=""
            />
            <div class="t3"  data-aos="fade-up" data-aos-delay="0">
              林口三井OUTLET、昕境廣場，是台北人趨之若鶩的娛樂購物勝地，林口舊街挖掘探索，那是人文底蘊層疊，無可複製的深度風景。從家出發不用五分鐘的路程，拱形紅磚廊、三連棟紅磚厝，兒時熟悉的老餐廳都還熱著，是新型商場無法取代的人情風味。
            </div>
            <div class="thumbnails" v-if="!isMobile">
              <div
                class="item"
                :class="{ active: i === activeIdx2 }"
                v-for="(img, i) in imgs2"
                :key="i"
                @click="splide2.go(i)"
                :style="{ 'background-image': `url(${img.img})` }"
              >
                <div class="label" v-html="img.thumbnailsLabel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.s3 {
  @apply w-full relative bg-[#8FC31F] font-['Noto_Serif_TC'];
  height: size(2088);
  padding-top: size(217);

  .imgs {
    @apply absolute w-full h-full left-0 top-0;
    @apply pointer-events-none;
    img {
      @apply absolute;

      &.tree1 {
        width: size(814.8);
        right: 0;
        top: 0;
        animation: a1 3s ease-in-out infinite alternate-reverse;
        transform-origin: top right;

        @keyframes a1 {
          to {
            transform: skewX(6deg);
          }
        }
      }
      &.tree2 {
        width: size(2152);
        right: -#{size(50)};
        bottom: -#{size(85)};
        animation: a2 3s ease-in-out infinite alternate-reverse;
        transform-origin: bottom center;

        @keyframes a2 {
          from {
            transform: skewX(-3deg);
          }
          to {
            transform: skewX(3deg);
          }
        }
      }
      &.cloud1 {
        width: size(229);
        left: size(157);
        bottom: size(902);
        animation: a3 3s ease-in-out infinite alternate-reverse;
        transform-origin: bottom center;

        @keyframes a3 {
          from {
            transform: translateX(-10%) skew(-3deg);
          }
          to {
            transform: translateX(10%) skew(3deg);
          }
        }
      }
      &.cloud2 {
        width: size(168);
        left: size(1624);
        bottom: size(892);
        animation: a4 3s ease-in-out infinite alternate-reverse;
        transform-origin: bottom center;

        @keyframes a4 {
          from {
            transform: translateX(-10%) skew(-3deg);
          }
          to {
            transform: translateX(10%) skew(3deg);
          }
        }
      }
      &.airplane {
        width: size(418);
        left: size(386);
        bottom: size(902);
      }
      &.ballon1 {
        width: size(268);
        left: size(1427);
        bottom: size(870);
        animation: a 6s ease-in-out infinite alternate-reverse;
        transform-origin: bottom center;

        @keyframes a {
          from {
            transform: translateY(-10%) skew(-3deg);
          }
          to {
            transform: translateY(10%) skew(3deg);
          }
        }
      }
      &.ballon2 {
        width: size(129);
        left: size(1685);
        bottom: size(1037);
        animation: a 6s ease-in-out infinite alternate-reverse;
        transform-origin: bottom center;

        @keyframes a {
          from {
            transform: translateY(20%) skew(3deg);
          }
          to {
            transform: translateY(-20%) skew(-3deg);
          }
        }
      }
    }
  }

  .content {
    @apply relative z-10 text-center;
    @apply mx-auto;
    width: size(1595);
    .section {
      .t1 {
        @apply text-white;
        font-size: size(36);
        font-weight: 600;
        margin-bottom: size(12);
      }
      .t2 {
        @apply text-[#FFF100];
        font-size: size(24);
        font-weight: 700;
        margin-bottom: size(7);
      }
      .t3 {
        @apply text-white;
        font-size: size(16);
        font-weight: 600;
      }
      .en {
        @apply w-full whitespace-nowrap;
        @apply flex items-center justify-center;

        .line {
          @apply w-full h-[1px] bg-[#B8FA61];
          margin: 0 size(10);
        }
        span {
          @apply text-[#B8FA61] font-['Noto_Sans_TC'];
          font-size: size(36);
          font-weight: 300;
          letter-spacing: size(5.4);
        }
      }

      .swiper-box1 {
        margin-top: size(35);
        margin-bottom: size(22);
        @apply mx-auto w-full relative;
        .slide-item {
          @apply relative bg-cover h-full;
          width: size(517);
          height: size(387);
          margin-right: size(22);
        }
      }
      &:last-child {
        margin-top: size(163);
        .swiper-section {
          @apply flex items-end;
          gap: size(90);
          .swiper-box2 {
            @apply relative;
            width: size(1051);
            margin-top: size(34);

            .slide-item {
              @apply relative bg-cover h-full;
              width: size(1051);
              height: size(701);
              margin-right: size(22);
              .caption {
                @apply absolute text-white font-['Noto_Sans_TC'];
                bottom: size(15);
                right: size(20);
                font-size: size(15);
                font-weight: 400;
              }
            }
          }
          .info {
            @apply text-left;
            width: size(347);
            .person {
              width: size(83);
              margin-bottom: size(30);
            }
            .t3 {
              font-weight: 400;
            }
            .thumbnails {
              @apply flex flex-wrap;
              margin-top: size(30);
              gap: size(25);
              .item {
                @apply bg-black relative;
                @apply bg-cover bg-center cursor-pointer;
                width: size(152);
                height: size(144);
                .label {
                  @apply absolute w-full h-full left-0 top-0;
                  @apply flex items-center justify-center;
                  @apply text-center font-['Noto_Sans_TC'];
                  @apply bg-black/70 text-[#B8FA61];
                  font-size: size(20);
                  font-weight: 500;
                  letter-spacing: size(1.2);
                }

                &:hover,
                &.active {
                  .label {
                    @apply bg-black/50 text-white;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    @apply w-full relative bg-[#8FC31F] font-['Noto_Serif_TC'];
    height: sizem(1273);
    padding-top: sizem(54) !important;
    padding: 0 sizem(30);

    .imgs {
      @apply absolute w-full h-full left-0 top-0;
      @apply pointer-events-none;
      img {
        @apply absolute;

        &.tree1 {
          width: sizem(349);
          right: 0;
          top: 0;
          animation: a1 3s ease-in-out infinite alternate-reverse;
          transform-origin: top right;

          @keyframes a1 {
            to {
              transform: skewX(6deg);
            }
          }
        }
        &.tree2 {
          width: 105%;
          right: 0;
          bottom: -#{sizem(20)};
          animation: a2 3s ease-in-out infinite alternate-reverse;
          transform-origin: bottom center;

          @keyframes a2 {
            from {
              transform: skewX(-3deg);
            }
            to {
              transform: skewX(3deg);
            }
          }
        }
        &.cloud1 {
          @apply hidden;
        }
        &.cloud2 {
          width: sizem(41);
          left: sizem(240);
          bottom: sizem(708);
          animation: a4 3s ease-in-out infinite alternate-reverse;
          transform-origin: bottom center;

          @keyframes a4 {
            from {
              transform: translateX(-10%) skew(-3deg);
            }
            to {
              transform: translateX(10%) skew(3deg);
            }
          }
        }
        &.airplane {
          width: sizem(120);
          left: 0;
          bottom: sizem(641);
        }
        &.ballon1 {
          width: sizem(46);
          left: sizem(293);
          bottom: sizem(680);
          animation: a 6s ease-in-out infinite alternate-reverse;
          transform-origin: bottom center;

          @keyframes a {
            from {
              transform: translateY(-10%) skew(-3deg);
            }
            to {
              transform: translateY(10%) skew(3deg);
            }
          }
        }
        &.ballon2 {
          width: sizem(38);
          left: sizem(335);
          bottom: sizem(705);
          animation: a 6s ease-in-out infinite alternate-reverse;
          transform-origin: bottom center;

          @keyframes a {
            from {
              transform: translateY(20%) skew(3deg);
            }
            to {
              transform: translateY(-20%) skew(-3deg);
            }
          }
        }
      }
    }

    .content {
      @apply relative z-10 text-center;
      @apply mx-auto w-full;
      .section {
        @apply text-left;
        .t1 {
          @apply text-white;
          font-size: sizem(25);
          font-weight: 600;
          margin-bottom: sizem(10);
        }
        .t2 {
          @apply text-[#FFF100];
          font-size: sizem(18);
          font-weight: 700;
          margin-bottom: sizem(15);
        }
        .t3 {
          font-size: sizem(13);
          font-weight: 400;
        }
        .en {
          .line {
            @apply hidden;
          }
          span {
            font-size: sizem(13);
            font-weight: 300;
            letter-spacing: sizem(2);
            padding-bottom: sizem(5);
            border-bottom: 1px solid #b8fa61;
          }
        }

        .swiper-box1 {
          margin-top: sizem(18);
          margin-bottom: sizem(10);
          @apply mx-auto w-full relative;
          .slide-item {
            @apply relative bg-cover h-full;
            width: sizem(315);
            height: sizem(235);
            margin-right: sizem(5);
          }
        }
        &:last-child {
          @apply w-screen left-0;
          margin-left: -#{sizem(30)};

          @apply text-center;
          margin-top: sizem(35);
          .en {
            span {
              border: 0;
            }
          }
          .swiper-section {
            @apply flex flex-col-reverse items-center;
            gap: sizem(0);
            .swiper-box2 {
              width: 100vw;
              margin-top: sizem(25.32);

              .slide-item {
                @apply relative bg-cover h-full;
                width: sizem(375);
                height: sizem(250);
                margin-right: sizem(10);
                .caption {
                  @apply absolute text-white font-['Noto_Sans_TC'];
                  bottom: sizem(5);
                  right: sizem(10);
                  font-size: sizem(12);
                  font-weight: 400;
                }
              }
            }
            .info {
              @apply text-left w-full;
              .t3 {
                padding: 0 sizem(30);
                margin-top: sizem(23);
                font-weight: 400;
              }
            }
            .thumbnails {
              @apply flex flex-nowrap;
              margin-top: sizem(16.5);
              gap: sizem(5.2);
              .item {
                @apply bg-black relative;
                @apply bg-cover bg-center cursor-pointer;
                width: sizem(82.3);
                height: sizem(77.9);
                .label {
                  @apply absolute w-full h-full left-0 top-0;
                  @apply flex items-center justify-center;
                  @apply text-center font-['Noto_Sans_TC'];
                  @apply bg-black/70 text-[#B8FA61];
                  font-size: sizem(13);
                  font-weight: 500;
                  letter-spacing: sizem(0.78);
                }

                &:hover,
                &.active {
                  .label {
                    @apply bg-black/50 text-white;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const splide2 = ref()

const activeIdx2 = ref(0)
const onMove2 = (val, val2) => {
  activeIdx2.value = val2
}

const imgs = [
  {
    img: new URL("../section/s3/1.webp", import.meta.url).href,
    caption: "",
  },
  {
    img: new URL("../section/s3/2.webp", import.meta.url).href,
    caption: "",
  },
  {
    img: new URL("../section/s3/3.webp", import.meta.url).href,
    caption: "",
  },
]

const imgs2 = [
  {
    img: new URL("../section/s3/a1.webp", import.meta.url).href,
    caption: "三井OUTLET",
    thumbnailsLabel: "三井<br>OUTLET",
  },
  {
    img: new URL("../section/s3/a2.webp", import.meta.url).href,
    caption: "中正藝術商街",
    thumbnailsLabel: "中正<br>藝術商街",
  },
  {
    img: new URL("../section/s3/a3.webp", import.meta.url).href,
    caption: "夜市",
    thumbnailsLabel: "林口<br>在地夜市",
  },
  {
    img: new URL("../section/s3/a4.webp", import.meta.url).href,
    caption: "林口昕境廣場",
    thumbnailsLabel: "林口<br>昕境廣場",
  },
]
</script>
