<template>
  <article class="s5">
    <div class="swiper-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: false,
          interval: 4000,
          gap: 0,
          type: 'loop',
          autoWidth: true,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
          :style="{ 'background-image': `url(${i.img}) !important` }"
        >
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="t">
      <div class="t1" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0">
        匯繁華精彩
      </div>
      <div class="t1"  data-aos="fade-up" data-aos-delay="0" v-else>
        匯繁華精彩 禮日常身段
      </div>
      <img
        class="en"
        data-aos="fade-up"
        data-aos-delay="200"
        src="@/section/s5/en.png"
        alt=""
        srcset=""
      />
      <div class="t1" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0" >禮日常身段</div>
      <div class="tlist">
        <div
          class="tl"
          v-for="(t, i) in tlist"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 200"
        >
          <div class="tt1" v-html="t.a"></div>
          <div class="tt2" v-html="t.b"></div>
        </div>
      </div>
      <div class="arrows">
        <img
          class="prev"
          @click="splide.go('<')"
          src="@/section/s3/arrow.png"
          alt=""
          srcset=""
        />
        <img
          class="next"
          @click="splide.go('>')"
          src="@/section/s3/arrow.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s5 {
  @apply w-full relative;
  @apply flex items-end justify-center;
  height: size(957);
  gap: size(38);
  padding-bottom: size(54);

  .swiper-box {
    width: size(1306);
    height: size(805);
    .slide-item {
      @apply bg-cover;
      width: size(1306);
      height: size(805);
      .caption {
        @apply absolute text-white;
        font-size: size(14);
        font-weight: 400;
        letter-spacing: size(0.84);
        right: size(20);
        bottom: size(20);
      }
    }
  }
  .t {
    @apply text-[#034150];
    .t1 {
      font-size: size(48);
      font-weight: 700;
      letter-spacing: size(2.88);
    }
    .en {
      width: size(413);
    }
    .tlist {
      margin-top: size(55);
      .tl {
        padding-left: size(18);
        margin-top: size(20);
        .tt1 {
          @apply relative;
          font-size: size(26);
          font-weight: 700;
          letter-spacing: size(0.52);
          &:before {
            @apply absolute rounded-full bg-[#83CCD2];
            @apply top-1/2 -translate-y-1/2;
            content: "";
            width: size(11);
            height: size(11);
            right: 102%;
          }
        }
        .tt2 {
          width: size(395);
          margin-top: size(10);
          font-size: size(15);
          letter-spacing: size(0.9);
        }
      }
    }
    .arrows {
      @apply relative;
      @apply flex items-center justify-start pointer-events-none;
      margin-top: size(90);
      gap: size(90);
      .prev {
        @apply -scale-x-100;
      }

      img {
        @apply cursor-pointer pointer-events-auto;
        width: size(36);
      }
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {
    @apply w-full relative;
    @apply flex flex-col-reverse items-center justify-center;
    height: sizem(742);
    gap: sizem(29);
    padding-bottom: sizem(56.78);

    .swiper-box {
      width: sizem(315);
      height: sizem(206);
      .slide-item {
        width: sizem(315);
        height: sizem(206);
        .caption {
          @apply absolute text-white;
          font-size: sizem(12);
          font-weight: 400;
          letter-spacing: 1.5px;
          right: sizem(10);
          bottom: sizem(5);
        }
      }
    }
    .t {
      @apply text-[#034150] text-center;
      .t1 {
        font-size: sizem(25);
        font-weight: 700;
        letter-spacing: 1.5px;
      }
      .en {
        width: sizem(271);
      }
      .tlist {
        margin-top: sizem(30);
        .tl {
          @apply text-left;
          padding-left: 0;
          margin-top: sizem(19);
          .tt1 {
            @apply relative;
            font-size: sizem(15);
            font-weight: 700;
            letter-spacing: size(0.52);
            &:before {
              @apply absolute rounded-full bg-[#83CCD2];
              @apply top-1/2 -translate-y-1/2;
              content: "";
              width: sizem(6);
              height: sizem(6);
              right: 103%;
            }
          }
          .tt2 {
            width: sizem(315);
            margin-top: sizem(10);
            font-size: sizem(13);
            letter-spacing: 0.78px;
          }
        }
      }
      .arrows {
        @apply absolute;
        @apply flex items-center justify-between pointer-events-none;
        margin-top: size(90);
        gap: 0;
        left: 0;
        width: sizem(375);
        bottom: sizem(170);
        padding: 0 sizem(10);
        img {
          @apply cursor-pointer pointer-events-auto;
          width: sizem(35.5);
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
const imgs = [
  {
    img: new URL("../section/s5/1.webp", import.meta.url).href,
    caption: "國家歌劇院",
  },
  {
    img: new URL("../section/s5/2.webp", import.meta.url).href,
    caption: "台中市政府",
  },
  {
    img: new URL("../section/s5/3.webp", import.meta.url).href,
    caption: "誠品",
  },
  {
    img: new URL("../section/s5/4.webp", import.meta.url).href,
    caption: "秀泰生活",
  },
  {
    img: new URL("../section/s5/5.webp", import.meta.url).href,
    caption: "大遠百",
  },
  {
    img: new URL("../section/s5/6.webp", import.meta.url).href,
    caption: "新光三越",
  },
  {
    img: new URL("../section/s5/7.webp", import.meta.url).href,
    caption: "TAIGER CITY",
  },
  {
    img: new URL("../section/s5/8.webp", import.meta.url).href,
    caption: "星巴克",
  },
  {
    img: new URL("../section/s5/9.webp", import.meta.url).href,
    caption: "IKEA",
  },
  {
    img: new URL("../section/s5/10.webp", import.meta.url).href,
    caption: "COSTCO",
  },
  {
    img: new URL("../section/s5/11.webp", import.meta.url).href,
    caption: "台中第二市場",
  },
]

const tlist = [
  {
    a: "七期市政都心 被知識優雅環繞之地",
    b: "台中市政府、國家歌劇院、台中市議會、台中警察總局..等，匯聚文教領袖、名流菁英，以最藝文的區段，禮遇您的日常身段",
  },
  {
    a: "七期百貨核心，國際百貨零時差串接",
    b: "家樂福、好市多、IKEA，從百貨購物到日常生活購物，隨時隨地擁有，以富人的角度為您準備好您所需要的頂級生活感",
  },
  {
    a: "公益路商圈 奢華名店料理環伺",
    b: "輕井澤、屋馬、森森燒肉、不葷主義…等，即刻享受台中一級戰區的美食好料，以最好的區段，款待您的每一個夜晚日常",
  },
]
</script>
