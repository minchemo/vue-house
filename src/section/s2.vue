<template>
  <article class="s2">
    <div
      class="cloth3 absolute"
      data-aos="fade"
      data-aos-delay="400" v-if="!$isMobile()">
      <img
        src="@/section/s1/cloth.webp"
        alt="cloth"
      />
    </div>
    <div
      class="cloth2 absolute"
      data-aos="fade"
      data-aos-delay="0">
      <img
        src="@/section/s1/cloth.webp"
        alt="cloth"
      />
    </div>
    <div
      class="cloth1 absolute"
      data-aos="fade"
      data-aos-delay="0">
      <img
        src="@/section/s1/cloth.webp"
        alt="cloth"
      />
    </div>
    <div class="bg absolute">
    </div>
    <div class="t1" data-aos="fade-up" data-aos-delay="0">
      以感恩的心，突破並創新
    </div>
    <img
      class="t2"
      src="@/section/s2/t2.png"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <div class="t3"
      data-aos="fade-up"
      data-aos-delay="400">
      豐邑機構在台耕耘二十多年，身為不動產開發專業領導者，以愛為名穩紮穩打，在大台中、大新竹建構眾多精彩實績，嚴格講求安全為首，注重建築空間內涵，<br />
      <span>以溫暖的「豐生活」社區營造聞名，深受住戶好評！</span>
    </div>
    <img class="spn" src="@/section/s2/spn.png" alt=""
      data-aos="zoom-in"
      data-aos-delay="200" />
    <div class="t4" v-if="!isMobile"
      data-aos="fade-up"
      data-aos-delay="0">全國唯一連續23年，榮獲國家金質獎</div>
    <div class="t4 text-center" v-else
      data-aos="fade-up"
      data-aos-delay="0">
      全國唯一連續23年<br />榮獲國家金質獎
    </div>
    <div class="swiper-section">
      <div class="l">
        <div class="t">
          <div class="tt1" data-aos="fade-up" data-aos-delay="0">
            豐邑機構至2023年連續23年榮獲建築金質獎肯定，累積獲獎135座，其中有43座全國首獎、87座金質獎、5座特別獎(優質獎、鑽石金首獎、卓越金首獎、最佳創意設計。
          </div>
          <div class="tt2" data-aos="fade-up" data-aos-delay="200">
            豐邑匠心藝，國家的肯定
          </div>
          <div class="tt3"
      data-aos="fade-up"
      data-aos-delay="400">建築金質獎</div>
          <div class="tt4"
      data-aos="fade-up"
      data-aos-delay="600">
            建築金質獎、優質獎、鑽石金首獎、卓越金首獎
            <br v-if="isMobile" />特別獎/最佳創意設計
          </div>
          <div class="tt5"
      data-aos="fade-up"
      data-aos-delay="800">第十六屆國家優良建商及營造商認證標章</div>
        </div>
        <img class="gold" src="@/section/s2/gold.png" alt="" srcset=""
      data-aos="fade-up"
      data-aos-delay="1000" />
      </div>
      <div class="r"
      data-aos="fade-up"
      data-aos-delay="0">
        <div class="rt1">經典業績，永恆篇章</div>
        <div class="swiper-box">
          <Splide
            ref="splide"
            class="slide"
            :options="{
              arrows: false,
              autoplay: true,
              pagination: true,
              interval: 4000,
              gap: 10,
              type: 'loop',
              autoWidth: true,
            }"
            @splide:move="onMove"
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
        </div>
        <div class="timeline">
          <span v-if="!isMobile">2022</span>
          <span v-else>
            <template v-if="currentIdx == 4">2023</template>
            <template v-else>2022</template>
          </span>
          <div class="line"></div>
          <span v-if="!isMobile">2023</span>
          <span v-else>{{ imgs[currentIdx].caption }} </span>
          <div class="line" v-if="!isMobile"></div>
        </div>
        <div class="swiper-btns" v-if="!isMobile">
          <div
            class="item"
            v-for="(item, i) in imgs.map((i) => i.caption)"
            :key="i"
            :class="{ active: i === currentIdx }"
            @click="splide.go(i)"
          >
            {{ item }}
          </div>
        </div>
        <img class="en" src="@/section/s2/en.png" alt="" srcset="" />
      </div>
    </div>
    <div class="last-swiper">
      <div class="ttt1" 
      data-aos="fade-up"
      data-aos-delay="0" v-if="!isMobile">五星飯店標竿，將創立豐生活百貨</div>
      <div class="ttt1" 
      data-aos="fade-up"
      data-aos-delay="0" v-else>五星飯店標竿<br />將創立豐生活購物中心</div>
      <div class="ttt2" 
      data-aos="fade-up"
      data-aos-delay="200">
        跨足飯店事業注入軟實力，新竹五星級喜來登大飯店，奢華渡假美學標竿，台中逢甲商旅La
        Vida
        Hotel深耕在地觀光；引進國際品牌萬豪集團台灣首家Moxy飯店，打造全新FUNLIFE豐生活購物中心，以多元版圖豐美全方位悠享人生。
      </div>

      <div class="swiper-box" 
      data-aos="fade"
      data-aos-delay="0">
        <div class="swiper-wrapper">
          <Splide
            ref="splide2"
            class="slide"
            :options="{
              drag: isMobile,
              arrows: false,
              autoplay: isMobile,
              pagination: false,
              interval: 4000,
              gap: 10,
              type: 'loop',
              autoWidth: true,
            }"
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
        </div>
        <div class="mo-arrow" v-if="isMobile">
          <img
            class="prev"
            @click="splide2.go('<')"
            src="@/section/arrow.png"
            alt=""
            srcset=""
          />
          <img
            class="next"
            @click="splide2.go('>')"
            src="@/section/arrow.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply w-full relative text-white bg-cover;
  @apply flex flex-col items-center justify-start;
  height: size(3181);
background-image:linear-gradient(180deg, #45A0B2 0%, #75C2CA 25%, #82CBD1 44%);
 
  //background-image: url("@/section/s2/bg.jpg");
  padding-top: size(160);
  
  .cloth1{
    width: 89.9vw;
    top: -7vw;
    left: -69.4vw;
    transform: rotate(-10deg)translateX(-10%);
  img{width: 100%;transform: rotate(-163deg);opacity: 0.5;}
  }
  .cloth2{
    width: 87vw;
    bottom: 10vw;
    right: -33vw;
    transform: rotate(10deg)translateX(10%);
  img{width: 100%;
    transform: rotate(-29deg) scaleY(-1);}
  }

  .cloth3{
    width: 130vw;
    bottom: -5vw;
    right: -62vw;
    transform: rotate(-10deg)translateX(-10%);
  img{width: 100%;
    transform: rotate(195deg);opacity: 0.5;}
  }
  .bg{
    width:100%;
    height: size(1806);
    bottom:0;
    background: linear-gradient(180deg, rgba(3, 65, 80, 0.00) 3.34%, #034150 87.72%);
    left:0;
  }

  .t1 {
    font-size: size(48);
    font-weight: 700;
    letter-spacing: size(2.88);
  }
  .t2 {
    width: size(872.23);
    margin-top: size(15);
  }
  .t3 {
    @apply text-center;
    font-size: size(16);
    font-weight: 400;
    letter-spacing: size(1.44);
    margin-top: size(30);
    span {
      font-size: size(24);
    }
  }
  .spn {
    width: size(799);
    margin-top: size(30);
  }
  .t4 {
    font-size: size(48);
    font-weight: 700;
    letter-spacing: size(2.88);
    margin-top: size(5);
  }
  .swiper-section {
    @apply flex;
    gap: size(51);
    margin-top: size(33);
    .l {
      @apply flex flex-col items-end;
      .t {
        width: size(333);
        .tt1 {
          @apply text-justify;
          font-size: size(15);
          font-weight: 400;
          letter-spacing: size(0.9);
        }
        .tt2 {
          font-size: size(26);
          font-weight: 700;
          letter-spacing: size(0.52);
          margin-top: size(42);
        }
        .tt3 {
          @apply text-[#CEAF73] bg-[#034150] text-center;
          width: size(131);
          height: size(30);
          line-height: size(30);
          font-size: size(16);
          font-weight: 700;
          letter-spacing: size(0.96);
          border-radius: size(8) 0 size(8) 0;
          margin-top: size(21);
        }
        .tt4 {
          font-size: size(15);
          font-weight: 500;
          letter-spacing: size(0.9);
          margin-top: size(8);
        }
        .tt5 {
          @apply text-[#034150];
          font-size: size(16);
          font-weight: 700;
          letter-spacing: size(0.9);
          margin-top: size(25);
        }
      }
      .gold {
        margin-top: size(22);
        width: size(604);
      }
    }
    .r {
      border-left: 1px solid #fff;
      padding-left: size(21);
      .rt1 {
        font-size: size(26);
        font-weight: 700;
        letter-spacing: size(0.52);
        line-height: 1;
      }
      .swiper-box {
        width: size(755);
        height: size(518);
        margin-top: size(30);
        .slide-item {
          @apply bg-cover relative;
          width: size(755);
          height: size(518);
          .caption {
            @apply absolute;
            bottom: size(10);
            left: size(15);
            font-size: size(15);
            font-weight: 700;
          }
        }
      }
      .timeline {
        @apply flex items-center;
        gap: size(12);
        margin-bottom: size(5);
        margin-top: size(29);
        span {
          color: #034150;
          font-size: size(20);
          font-weight: 700;
          letter-spacing: size(1.2);
        }
        .line {
          @apply bg-[#034150];
          height: 0.5px;
          &:nth-child(2) {
            width: size(692);
          }
          &:nth-child(4) {
            width: size(117);
          }
        }
      }
      .swiper-btns {
        @apply flex whitespace-nowrap flex-wrap;
        @apply text-center;
        width: size(953);
        column-gap: size(5);
        row-gap: size(11);
        .item {
          @apply cursor-pointer;
          width: size(185);
          height: size(36);
          line-height: size(36);
          border: 1px solid #fff;
          font-size: size(15);
          &:nth-child(5) {
            margin-left: size(8);
          }
          &:nth-child(8) {
            font-size: size(13.37);
          }
          &.active {
            @apply bg-white text-[#83CCD2];
          }
          &:hover {
            @apply bg-white text-[#83CCD2];
          }
        }
      }
      .en {
        width: size(593.49);
        margin-top: size(37);
      }
    }
  }
  .last-swiper {
    @apply text-center;
    @apply flex flex-col items-center;
    margin-top: size(170);
    .ttt1 {
      font-size: size(48);
      font-weight: 700;
      letter-spacing: size(2.88);
    }
    .ttt2 {
      font-size: size(15);
      font-weight: 400;
      letter-spacing: size(0.9);
      width: size(886);
      margin-top: size(22);
    }
    .swiper-box {
      @apply bg-white relative;
      width: size(1782);
      height: size(749);
      padding: size(14) size(16);
      margin-top: size(40);
      .swiper-wrapper {
        @apply w-full h-full;
        .slide-item {
          @apply relative bg-cover;
          width: size(430);
          height: size(721);
          .caption {
            @apply absolute w-full;
            bottom: size(30);
            font-size: size(15);
            font-weight: 500;
            letter-spacing: size(0.15);
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
  .s2 {
    @apply w-full relative text-white bg-cover;
    @apply flex flex-col items-center justify-start;
    height: sizem(2339);
   // background-image: url("@/section/s2/bgm.jpg");
    padding-top: sizem(44);
  .cloth1{
        width: 127vw;
        top: 113vw;
        left: -78.4vw;
  }
  .cloth2{
    width: 303vw;
    bottom: -5vw;
    right: -194vw;
  }
  .bg{
    height: sizem(1200);
  }
    .t1 {
      font-size: sizem(25);
      font-weight: 700;
      letter-spacing: sizem(1.5);
    }
    .t2 {
      width: sizem(290);
      margin-top: sizem(8);
    }
    .t3 {
      @apply text-center;
      width: sizem(315);
      font-size: sizem(13);
      font-weight: 400;
      letter-spacing: sizem(0.78);
      margin-top: sizem(18.15);
      span {
        font-size: sizem(16);
      }
    }
    .spn {
      width: 90%;
      margin-top: sizem(25);
    }
    .t4 {
      font-size: sizem(25);
      font-weight: 700;
      letter-spacing: sizem(1.5);
      margin-top: sizem(35);
    }
    .swiper-section {
      @apply flex flex-col;
      gap: sizem(19);
      margin-top: sizem(32);
      .l {
        @apply flex flex-col items-end;
        .t {
          width: sizem(315);
          .tt1 {
            @apply text-justify;
            font-size: sizem(13);
            font-weight: 400;
            letter-spacing: sizem(0.78);
          }
          .tt2 {
            font-size: sizem(15);
            font-weight: 700;
            letter-spacing: sizem(0.9);
            margin-top: sizem(15);
          }
          .tt3 {
            @apply text-[#CEAF73] bg-[#034150] text-center;
            width: sizem(87);
            height: sizem(25);
            line-height: sizem(25);
            font-size: sizem(13);
            font-weight: 700;
            letter-spacing: sizem(0.78);
            border-radius: sizem(8) 0 sizem(8) 0;
            margin-top: sizem(13);
          }
          .tt4 {
            font-size: sizem(13);
            font-weight: 500;
            letter-spacing: sizem(0.9);
            margin-top: sizem(12);
            line-height: 1.5;
          }
          .tt5 {
            font-size: sizem(13);
            font-weight: 700;
            letter-spacing: sizem(0.78);
            margin-top: sizem(13);
          }
        }
        .gold {
          margin-top: sizem(13);
          width: sizem(301);
          margin-right: 5%;
        }
      }
      .r {
        border-left: 0;
        padding-left: 0;
        padding-top: sizem(25);
        border-top: 1px solid #fff;
        .rt1 {
          font-size: sizem(15);
          font-weight: 700;
          letter-spacing: sizem(0.9);
          line-height: 1;
        }
        .swiper-box {
          width: sizem(315);
          height: sizem(216.12);
          margin-top: sizem(14);
          .slide-item {
            width: sizem(315);
            height: sizem(216.12);
            .caption {
              @apply absolute;
              bottom: sizem(5);
              left: sizem(8);
              font-size: sizem(12);
              font-weight: 700;
            }
          }
        }
        .timeline {
          @apply flex items-center;
          gap: sizem(12);
          margin-bottom: sizem(9);
          margin-top: sizem(10);
          span {
            font-size: sizem(15);
            font-weight: 700;
            letter-spacing: auto;
          }
          .line {
            &:nth-child(2) {
              @apply grow;
              width: auto;
            }
          }
        }
        .en {
          width: sizem(315);
          margin-top: 0;
        }
      }
    }
    .last-swiper {
    }
    .last-swiper {
      margin-top: sizem(70);
      .ttt1 {
        font-size: sizem(25);
        font-weight: 700;
        letter-spacing: sizem(1.5);
      }
      .ttt2 {
        font-size: sizem(13);
        font-weight: 400;
        letter-spacing: sizem(0.78);
        width: sizem(315);
        margin-top: sizem(18);
      }
      .swiper-box {
        @apply bg-white;
        width: sizem(315);
        height: sizem(514);
        padding: sizem(12);
        margin-top: sizem(20);
        .swiper-wrapper {
          @apply w-full h-full;
          .slide-item {
            @apply relative bg-cover;
            width: sizem(292);
            height: sizem(489.61);
            .caption {
              @apply absolute w-full;
              bottom: sizem(13);
              font-size: sizem(13);
              font-weight: 500;
              letter-spacing: sizem(0.13);
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

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const currentIdx = ref(0)
const splide = ref()
const splide2 = ref()
const onMove = (val, val2) => {
  currentIdx.value = val2
}
const imgs = [
  {
    img: new URL("../section/s2/1.jpg", import.meta.url).href,
    caption: "浩瀚 森PARK 新竹",
  },
  {
    img: new URL("../section/s2/2.jpg", import.meta.url).href,
    caption: "豐邑GREEN IN桃園龜山",
  },
  {
    img: new URL("../section/s2/3.jpg", import.meta.url).href,
    caption: "豐邑氧森 森活 桃園龜山",
  },
  {
    img: new URL("../section/s2/4.jpg", import.meta.url).href,
    caption: "豐邑之森 新竹竹北",
  },
  {
    img: new URL("../section/s2/5.jpg", import.meta.url).href,
    caption: "浩瀚 景立方 台中北屯",
  },
  {
    img: new URL("../section/s2/6.jpg", import.meta.url).href,
    caption: "浩瀚創立方 台中北屯",
  },
  {
    img: new URL("../section/s2/7.jpg", import.meta.url).href,
    caption: "豐邑豐穗 台中北屯",
  },
  {
    img: new URL("../section/s2/8.jpg", import.meta.url).href,
    caption: "豐邑Park One 臺中市西屯區",
  },
  {
    img: new URL("../section/s2/9.jpg", import.meta.url).href,
    caption: "浩瀚無極 台南東區",
  },
]

const imgs2 = [
  {
    img: new URL("../section/s2/a1.jpg", import.meta.url).href,
    caption: "新竹喜來登大飯店",
  },
  {
    img: new URL("../section/s2/a2.jpg", import.meta.url).href,
    caption: "MOXY飯店",
  },
  {
    img: new URL("../section/s2/a3.jpg", import.meta.url).href,
    caption: "台中逢甲商旅La Vida Hotel",
  },
  {
    img: new URL("../section/s2/a4.jpg", import.meta.url).href,
    caption: "FUNLIFE豐生活購物中心",
  },
]
</script>
