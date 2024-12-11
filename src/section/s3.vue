<template>
  <article class="s3">
    <div class="t">
      <div class="t1">台南核心</div>
      <div class="t2">
        北區精華強勢要津<br />
        奢華日常極限量爭藏席
      </div>
    </div>
    <div class="swiper-box" v-if="!isMobile">
      <template v-for="(img, i) in imgs" :key="i">
        <div class="splide-box">
          <Splide
            ref="splide"
            class="slide"
            :options="{
              autoWidth: false,
              arrows: false,
              autoplay: true,
              pagination: true,
              gap: 20,
              type: 'loop',
              perPage: 1,
            }"
          >
            <SplideSlide
              class="slide-item"
              :key="i"
              v-for="(imgurl, i) in img.img"
              :style="{ 'background-image': `url(${imgurl})` }"
            >
              <div class="caption">
                {{ img.caption[i] }}
              </div>
            </SplideSlide>
          </Splide>

          <p>{{ img.title }}</p>
          <div class="arrow" v-if="isMobile" @click="splide[i].go('>')">
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.63878 1.02773C2.1018 0.490757 1.2312 0.490757 0.694232 1.02773C0.157261 1.5647 0.157261 2.4353 0.694232 2.97227L9.72196 12L0.694232 21.0277C0.157261 21.5647 0.157261 22.4353 0.694232 22.9723C1.2312 23.5092 2.1018 23.5092 2.63878 22.9723L12.6388 12.9723C13.1757 12.4353 13.1757 11.5647 12.6388 11.0277L2.63878 1.02773Z"
                fill="#20575A"
              />
            </svg>
          </div>
        </div>
      </template>
    </div>
    <div class="swiper-box" v-else>
      <template v-for="(img, i) in imgs" :key="i">
        <div class="splide-box">
          <Splide
            ref="splide"
            class="slide"
            :options="{
              autoWidth: false,
              arrows: false,
              autoplay: true,
              pagination: true,
              gap: 20,
              type: 'loop',
              perPage: 1,
            }"
          >
            <SplideSlide
              class="slide-item"
              :key="i"
              v-for="(imgurl, i) in img.img"
              :style="{ 'background-image': `url(${imgurl})` }"
            >
              <div class="caption">
                {{ img.caption[i] }}
              </div>
            </SplideSlide>
          </Splide>
          <div class="arrows" v-if="isMobile">
            <img
              @click="splide[i].go('<')"
              src="@/section/arrow.png"
              class="arrow prev"
              alt=""
              srcset=""
            />
            <img
              @click="splide[i].go('>')"
              src="@/section/arrow.png"
              class="arrow next"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </template>
    </div>
    <div class="desc-box">
      <div
        class="desc"
        v-for="(desc, i) in desc"
        :key="i"
        data-aos="fade-up"
        data-aos-duration="1000"
        :data-aos-delay="200 * i"
      >
        <div class="title">{{ desc.title }}</div>
        <div class="content">{{ desc.content }}</div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s3 {
  @apply relative w-full;
  @apply flex flex-col items-center justify-center;
  @apply bg-bottom bg-cover;
  height: size(1080);
  background-image: url("@/section/s3/bg.webp");

  .t {
    @apply flex items-center;
    gap: size(27);
    margin-bottom: size(43);
    .t1 {
      font-family: "Noto Serif TC";
      font-size: size(63);
      font-weight: 700;
      letter-spacing: size(6.3);
    }

    .t2 {
      font-family: "Noto Sans TC";
      font-size: size(20);
      font-weight: 500;
      line-height: 170%;
      letter-spacing: size(2);
    }
  }

  .swiper-box {
    @apply flex;
    gap: size(70);
    .splide-box {
      @apply flex flex-col;
      .splide {
        @apply relative;
        width: size(475);
        .slide-item {
          @apply relative bg-cover;
          width: size(475);
          height: size(500);
          .caption {
            @apply absolute text-white;
            font-family: "Noto Sans TC";
            font-size: size(15);
            font-weight: 700;
            line-height: 170%;
            letter-spacing: size(0.75);
            left: size(25);
            top: size(15);
            filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
          }
        }

        ::v-deep(.splide__pagination) {
          @apply absolute;
          gap: size(6);
          right: size(25);
          top: size(15);

          button {
            @apply rounded-full;
            width: size(10);
            height: size(10);
            border: 1px solid #fff;

            &.is-active {
              @apply bg-white;
            }
          }
        }
      }
      p {
        color: #103438;
        text-align: center;
        font-family: "Noto Sans TC";
        font-size: size(40);
        font-weight: 900;
        line-height: 170%;
        letter-spacing: size(2);
      }
    }
  }

  .desc-box {
    @apply flex flex-col;
    gap: size(22);
    margin-top: size(52);
    .desc {
      @apply flex items-center font-['Noto_Sans_TC'];
      gap: size(21);
      .title {
        @apply bg-[#20575A] inline-block text-white;
        padding: size(5) size(15);
        border-radius: size(15);
        font-size: size(22);
        font-weight: 700;
        letter-spacing: size(1.1);
      }
      .content {
        @apply text-black;
        font-size: size(20);
        font-weight: 500;
        letter-spacing: size(1.4);
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
    @apply relative w-full;
    @apply flex flex-col items-center justify-center;
    @apply bg-bottom bg-cover;
    height: sizem(664);
    background-image: url("@/section/s3/bgm.webp");

    .t {
      @apply flex items-center;
      gap: sizem(12);
      margin-bottom: sizem(20);
      .t1 {
        font-size: sizem(36);
        letter-spacing: sizem(1.8);
      }

      .t2 {
        font-size: sizem(13);
        letter-spacing: sizem(1.3);
      }
    }

    .swiper-box {
      @apply flex flex-col;
      gap: sizem(20);
      margin-left: 0;
      .splide-box {
        @apply flex flex-col relative;
        .splide {
          @apply relative;
          width: sizem(336);
          .slide-item {
            @apply relative bg-cover bg-center;
            width: sizem(336);
            height: sizem(315);
            border-radius: 0;
            .caption {
              font-size: sizem(16);
              font-weight: 700;
              line-height: 170%;
              letter-spacing: sizem(0.8);
              left: sizem(16.5);
              top: sizem(8.5);
              filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
            }
          }

          ::v-deep(.splide__pagination) {
            @apply hidden;
          }
        }
        .arrows {
          @apply absolute w-full;
          @apply flex justify-between;
          @apply top-1/2 -translate-y-1/2;
          @apply px-4 pointer-events-none;

          .prev {
            @apply -scale-x-100;
          }
          img {
            @apply pointer-events-auto;
            @apply w-4 opacity-90;
            filter: drop-shadow(1px 4px 3px rgba(0, 0, 0, 0.8));
          }
        }
      }
    }

    .desc-box {
      @apply flex flex-col;
      gap: sizem(4);
      margin-top: sizem(20);
      .desc {
        @apply flex items-center font-['Noto_Sans_TC'];
        gap: sizem(6);
        .title {
          @apply bg-[#20575A] inline-block text-white;
          padding: sizem(6) sizem(10);
          border-radius: sizem(10);
          font-size: sizem(13);
          font-weight: 700;
          letter-spacing: sizem(1.1);
          line-height: 1;
        }
        .content {
          @apply text-black;
          font-size: sizem(13);
          font-weight: 500;
          letter-spacing: auto;
        }
      }
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const imgs = globals.$isMobile()
  ? [
      {
        img: [
          new URL("../section/s3/a1.webp", import.meta.url).href,
          new URL("../section/s3/a2.webp", import.meta.url).href,
          new URL("../section/s3/a3.webp", import.meta.url).href,
          new URL("../section/s3/b1.webp", import.meta.url).href,
          new URL("../section/s3/b2.webp", import.meta.url).href,
          new URL("../section/s3/b3.webp", import.meta.url).href,
          new URL("../section/s3/b4.webp", import.meta.url).href,
          new URL("../section/s3/c1.webp", import.meta.url).href,
          new URL("../section/s3/c2.webp", import.meta.url).href,
          new URL("../section/s3/c3.webp", import.meta.url).href,
        ],
        caption: [
          "新光三越 台南新天地",
          "林百貨",
          "好市多",
          "臺南第一高級中等學校",
          "文賢國民中學",
          "立人國民小學",
          "國立成功大學",
          "成大醫院",
          "奇美醫院",
          "郭綜合醫院",
        ],
      },
    ]
  : [
      {
        img: [
          new URL("../section/s3/a1.webp", import.meta.url).href,
          new URL("../section/s3/a2.webp", import.meta.url).href,
          new URL("../section/s3/a3.webp", import.meta.url).href,
        ],
        caption: ["新光三越 台南新天地", "林百貨", "好市多"],
        title: "STORE",
      },
      {
        img: [
          new URL("../section/s3/b1.webp", import.meta.url).href,
          new URL("../section/s3/b2.webp", import.meta.url).href,
          new URL("../section/s3/b3.webp", import.meta.url).href,
          new URL("../section/s3/b4.webp", import.meta.url).href,
        ],
        caption: [
          "臺南第一高級中等學校",
          "文賢國民中學",
          "立人國民小學",
          "國立成功大學",
        ],
        title: "SCHOOL",
      },
      {
        img: [
          new URL("../section/s3/c1.webp", import.meta.url).href,
          new URL("../section/s3/c2.webp", import.meta.url).href,
          new URL("../section/s3/c3.webp", import.meta.url).href,
        ],
        caption: ["成大醫院", "奇美醫院", "郭綜合醫院"],
        title: "HOSPITAL",
      },
    ]

const desc = [
  {
    title: "生活機能",
    content: "商圈、百貨、學區、醫療俱全，便利又完善",
  },
  {
    title: "交通網路",
    content: "北外環建設在即，市心市郊暢意穿梭大台南",
  },
  {
    title: "靜巷獨院",
    content: "文賢路X成功路繁華大道旁，謐巷尊榮宅院 ",
  },
]
</script>
