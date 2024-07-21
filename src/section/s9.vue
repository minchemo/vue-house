<template>
  <article class="s9">
    <template v-for="(img, i) in imgs" :key="i">
      <section :style="{ 'background-image': `url(${img.bgImg})` }">
        <div class="l" :style="{ 'background-image': `url(${img.renderImg})` }">
          <div class="caption">
            {{ img.renderCaption }}
          </div>
          <img
            @click="openPopup('render', img.popupRenderImg)"
            class="view"
            src="@/section/s9/view.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="r">
          <div class="t">
            <div
              class="t1"
              v-html="img.t1"
              data-aos="fade-up"
              data-aos-delay="0"
            ></div>
            <div
              class="t2"
              v-html="img.t2"
              data-aos="fade-up"
              data-aos-delay="0"
            ></div>
          </div>
          <div
            class="plan"
            :style="{ 'background-image': `url(${img.planImg})` }"
          >
            <img
              @click="openPopup('plan', img.popupPlanImg)"
              class="view"
              src="@/section/s9/view.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <img class="hidden" :src="img.popupRenderImg" alt="" srcset="" />
        <img class="hidden" :src="img.popupPlanImg" alt="" srcset="" />
      </section>
    </template>
  </article>
  <div class="popup" :class="{ open: popupType != '' }">
    <template v-if="popupImg != '' && isMobile">
      <img class="finger" src="@/section/s9/finger.png" alt="" srcset="" />
      <div class="wrapper">
        <img class="i" :src="popupImg" />
      </div>
    </template>

    <template v-else-if="popupImg != ''">
      <img class="i" :src="popupImg" />
    </template>
    <img
      @click="closePopup()"
      class="close"
      src="@/section/s9/close.png"
      alt=""
      srcset=""
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s9 {
  @apply w-full relative bg-cover;

  section {
    @apply flex items-end;
    height: size(1080);
    gap: size(80);

    .l {
      @apply aspect-square bg-cover bg-no-repeat;
      @apply relative;
      width: size(960);
      .caption {
        @apply text-white absolute;
        right: size(10);
        bottom: size(10);
        text-shadow: 0.5px 0.5px 2px #000;
        font-size: size(12);
        font-weight: 400;
        letter-spacing: size(2.4);
      }
    }
    .r {
      @apply flex flex-col justify-between;
      height: size(960);
      width: size(772);
      @apply text-[#231815];
      .t {
        .t1 {
          font-size: size(40);
          font-weight: 700;
          letter-spacing: size(8);
        }
        .t2 {
          font-size: size(20);
          font-weight: 400;
          line-height: 170%;
          letter-spacing: size(4);
          margin-top: size(39);
        }
      }
      .plan {
        @apply relative bg-cover;
        width: size(772.4);
        height: size(633.92);
      }
    }

    .view {
      @apply absolute;
      @apply aspect-square;
      @apply hover:scale-90 cursor-pointer transition-all;
      width: size(76);
      right: size(20);
      top: size(20);
    }

    &:nth-child(2) {
      @apply flex-row-reverse;
    }
  }
}

.popup {
  @apply fixed top-0 left-0 w-full h-full z-[101];
  @apply bg-black/50;
  @apply translate-y-full transition-all;
  @apply flex items-center justify-center;
  gap: size(40);
  &.open {
    @apply translate-y-0;
  }
  .i {
    max-height: 90vh;
    min-height: size(763);
  }
  .close {
    @apply self-start cursor-pointer;
    @apply relative z-10;
    width: size(56);
    padding-top: size(50);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s9 {
    @apply w-full relative bg-cover;

    section {
      @apply flex flex-col items-start bg-cover;
      height: sizem(1073.99);
      gap: sizem(40);

      .l {
        width: sizem(375);
        .caption {
          @apply hidden;
        }
      }
      .r {
        @apply flex flex-col justify-between;
        height: auto;
        width: 100%;
        .t {
          padding: 0 sizem(32.5);
          margin-bottom: sizem(38);
          .t1 {
            font-size: sizem(25);
            letter-spacing: sizem(5);
          }
          .t2 {
            font-size: sizem(14);
            letter-spacing: sizem(2.8);
            margin-top: sizem(11);
          }
        }
        .plan {
          width: 100%;
          height: sizem(307.77);
        }
      }

      .view {
        @apply absolute;
        @apply aspect-square;
        @apply hover:scale-90 cursor-pointer transition-all;
        width: sizem(55);
        right: sizem(20);
        top: sizem(16);
      }

      &:nth-child(2) {
        @apply flex-col;
      }
    }
  }

  .popup {
    @apply fixed top-0 left-0 w-full h-full z-[99999999];
    @apply bg-black/50;
    @apply translate-y-full transition-all;
    @apply flex flex-col-reverse items-center justify-center;
    gap: size(40);
    padding-bottom: sizem(33);
    &.open {
      @apply translate-y-0;
    }
    .finger {
      width: sizem(290);
      margin-top: sizem(20);
    }
    .wrapper {
      @apply w-full overflow-x-scroll;
      .i {
        max-height: sizem(487);
        min-height: sizem(487);
      }
    }
    .close {
      @apply self-end cursor-pointer;
      @apply relative z-10;
      width: sizem(36);
      padding: 0;
      margin: sizem(33);
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())
const popupType = ref("")
const popupImg = ref("")

const openPopup = (type, img) => {
  popupType.value = type
  popupImg.value = img
}

const closePopup = () => {
  popupType.value = ""
  popupImg.value = ""
}

const imgs = [
  {
    t1: "A2戶型/時尚2房",
    t2: "格局規劃方正且雙面採光，規劃雙廁所，客廳結合開放式餐廳與廚房合為一體，做菜時與家人互動，讓每一餐都充滿愛與溫情，主臥套房空間寬敞明亮，享受獨立廁所，另設計有開放式客衛浴外洗手台，方便一回家就洗手，衛浴乾濕分離設計。",
    bgImg: globals.$isMobile()
      ? new URL("../section/s9/bg1m.jpg", import.meta.url).href
      : new URL("../section/s9/bg1.jpg", import.meta.url).href,
    renderImg: new URL("../section/s9/r1.jpg", import.meta.url).href,
    renderCaption: "樣品屋3D模擬示意",
    planImg: new URL("../section/s9/p1.jpg", import.meta.url).href,
    popupRenderImg: new URL("../section/s9/pr1.jpg", import.meta.url).href,
    popupPlanImg: new URL("../section/s9/pp1.jpg", import.meta.url).href,
  },
  {
    t1: "A6戶型/溫馨2房",
    t2: "格局規劃方正且雙面採光，規劃獨立玄關及雙廁所，客廳結合開放式餐廳與廚房合為一體，讓您在烹飪的同時與家人分享每一刻的愉悅，主臥套房空間寬敞明亮，享受獨立廁所及更衣間，客浴乾濕分離設計。",
    bgImg: globals.$isMobile()
      ? new URL("../section/s9/bg1m.jpg", import.meta.url).href
      : new URL("../section/s9/bg2.jpg", import.meta.url).href,
    renderImg: new URL("../section/s9/r2.jpg", import.meta.url).href,
    renderCaption: "樣品屋3D模擬示意",
    planImg: new URL("../section/s9/p2.jpg", import.meta.url).href,
    popupRenderImg: new URL("../section/s9/pr2.jpg", import.meta.url).href,
    popupPlanImg: new URL("../section/s9/pp2.jpg", import.meta.url).href,
  },
  {
    t1: "A1戶型/雍容3房",
    t2: "格局規劃方正且三面採光，規劃獨立玄關及廚房，客廳結合開闊的用餐空間，搭配前陽台採光通風，視線寬敞明亮，是家人間互動的場域，盡享美好時光，雙衛浴皆開窗採光，一主臥套房及兩間次臥，雍容的寢臥設計大採光，空間敞朗。",
    bgImg: globals.$isMobile()
      ? new URL("../section/s9/bg1m.jpg", import.meta.url).href
      : new URL("../section/s9/bg3.jpg", import.meta.url).href,
    renderImg: new URL("../section/s9/r3.jpg", import.meta.url).href,
    renderCaption: "樣品屋3D模擬示意",
    planImg: new URL("../section/s9/p3.jpg", import.meta.url).href,
    popupRenderImg: new URL("../section/s9/pr2.jpg", import.meta.url).href,
    popupPlanImg: new URL("../section/s9/pp2.jpg", import.meta.url).href,
  },
]
</script>
