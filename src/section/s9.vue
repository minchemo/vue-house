<template>
  <article class="s9">
    <template v-for="(img, i) in imgs" :key="i">
      <section>
        <div class="l swiper-box">
          <Splide
            :options="sConfig"
            ref="splide"
            class="slide"
          >
            <SplideSlide
              class="slide-item"
              :key="index"
              v-for="(image, index) in img.renderImg"
              :style="{ 'background-image': `url(${image})` }"
            >
              <div class="caption absolute">
                {{ img.renderCaption[index] }}
              </div>
              <img
                @click="openPopup('render', image)"
                class="view"
                src="./s9/view.png"
                alt=""
                srcset=""
              />
            </SplideSlide>
          </Splide>
          
          <div class="arrows">
            <img
              @click="goPrev(i)"
              class="prev cursor-pointer"
              src="@/section/arrow.png"
              alt="r"
              srcset=""
            />
            <img
              @click="goNext(i)"
              class="next cursor-pointer"
              src="@/section/arrow.png"
              alt="r"
              srcset=""
            />
          </div>
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
        <img class="hidden" :src="img.renderImg" alt="" srcset="" />
        <img class="hidden" :src="img.popupPlanImg" alt="" srcset="" />
      </section>
    </template>
    <img
      class="bg"
      src="./s9/bg.png" alt="bg" v-if="!$isMobile()"
    />
    <img
      class="bg"
      src="./s9/bgm1.png" alt="bg" v-else
    />
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
  padding: size(210) 0 0 0;
.bg{position: absolute;top:size(-430);left: 0;width: 100%;z-index:2;
  user-select: none;
  pointer-events: none;}

  section {
    @apply flex items-end relative z-10;
    height: size(1075);
    gap: size(80);

    .l {
      @apply aspect-square bg-cover bg-no-repeat;
      @apply relative;
      width: size(960);
      .caption {
        right: size(10);
        color: #fff;
        bottom: size(10);
        text-shadow: 0.5px 0.5px 2px #000;
        font-size: size(12);
        font-weight: 400;
        letter-spacing: size(2.4);
      }  
      .slide-item {
        width: size(960);
        height: size(960);
        background-size: cover
      }
      .arrows {
        @apply absolute w-full flex items-center justify-between top-1/2 -translate-y-1/2;
        padding: 0 size(20) 0 size(10);
        img {
          width: size(20);
        }
        .prev {
        }

        .next {
          @apply -scale-x-100;
        }
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
        width: size(772);
        height: size(634);
        border-radius: size(30);
        overflow: hidden;
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
.bg{top:sizem(230);}

    section {
      @apply flex flex-col items-start bg-cover;
      height: sizem(1073.99);
      gap: sizem(40);

      .l {
        width: sizem(375);
      .slide-item {
        position: relative;
        width: sizem(375);
        height: sizem(375);
      }
      .caption{font-size: sizem(8);}
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
import { computed, getCurrentInstance, ref, onMounted, nextTick } from "vue";

const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
const popupType = ref("");
const popupImg = ref("");

const openPopup = (type, img) => {
  popupType.value = type;
  popupImg.value = img;
};

const closePopup = () => {
  popupType.value = "";
  popupImg.value = "";
};

const splide = ref([]);
const sConfig = {
  autoWidth: true,
  arrows: false,
  autoplay: true,
  pagination: false,
  gap: 0,
  type: "loop",
};

const goPrev = (refIdx) => {
    splide.value[refIdx].go("<");
};

const goNext = (refIdx) => {
    splide.value[refIdx].go(">");
};

onMounted(async () => {
  await nextTick();  // 确保 DOM 渲染完成
});


const imgs = [
  {
    t1: "A2戶型/時尚簡約2房",
    t2: "格局規劃方正且雙面採光，規劃雙廁所，客廳結合開放式餐廳與廚房合為一體，做菜時與家人互動，讓每一餐都充滿愛與溫情，主臥套房空間寬敞明亮，享受獨立廁所，另設計有開放式客衛浴外洗手台，方便一回家就洗手，衛浴乾濕分離設計。",
    renderImg:[
      new URL("../section/s9/r11.jpg", import.meta.url).href,
      new URL("../section/s9/r12.jpg", import.meta.url).href,
    ],
    renderCaption:[
       "本模擬示意圖僅供參考，格局規劃及建材設備以核准之使用執照竣工圖及實際現場為準。",
       "本模擬示意圖僅供參考，格局規劃及建材設備以核准之使用執照竣工圖及實際現場為準。"
    ],
    planImg: new URL("../section/s9/p1.webp", import.meta.url).href,
    popupPlanImg: new URL("../section/s9/pp1.jpg", import.meta.url).href,
  },
  {
    t1: "A6戶型/溫馨人文2房",
    t2: "格局規劃方正且雙面採光，規劃獨立玄關及雙廁所，客廳結合開放式餐廳與廚房合為一體，讓您在烹飪的同時與家人分享每一刻的愉悅，主臥套房空間寬敞明亮，享受獨立廁所及更衣間，客浴乾濕分離設計。",
    renderImg:[
      new URL("../section/s9/r21.jpg", import.meta.url).href,
      new URL("../section/s9/r22.jpg", import.meta.url).href,
    ],
    renderCaption:[
       "本模擬示意圖僅供參考，格局規劃及建材設備以核准之使用執照竣工圖及實際現場為準。",
       "本模擬示意圖僅供參考，格局規劃及建材設備以核准之使用執照竣工圖及實際現場為準。"
    ],
    planImg: new URL("../section/s9/p2.webp", import.meta.url).href,
    popupPlanImg: new URL("../section/s9/pp2.jpg", import.meta.url).href,
  },
  {
    t1: "A1戶型/美式現代3房",
    t2: "格局規劃方正且三面採光，規劃獨立玄關及廚房，客廳結合開闊的用餐空間，搭配前陽台採光通風，視線寬敞明亮，是家人間互動的場域，盡享美好時光，雙衛浴皆開窗採光，一主臥套房及兩間次臥，雍容的寢臥設計大採光，空間敞朗。",
    renderImg:[
      new URL("../section/s9/r31.jpg", import.meta.url).href,
      new URL("../section/s9/r32.jpg", import.meta.url).href,
    ],
    renderCaption:[
       "本模擬示意圖僅供參考，格局規劃及建材設備以核准之使用執照竣工圖及實際現場為準。",
       "本模擬示意圖僅供參考，格局規劃及建材設備以核准之使用執照竣工圖及實際現場為準。"
    ],
    planImg: new URL("../section/s9/p3.webp", import.meta.url).href,
    popupPlanImg: new URL("../section/s9/pp2.jpg", import.meta.url).href,
  },
]
</script>
