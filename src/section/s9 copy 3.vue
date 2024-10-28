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
                @click="openPopup('render', image,true,index,i)"
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
              @click="openPopup('plan', img.popupPlanImg,false)"
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
    
    <div class="inkbg absolute">
    <div
      class="ink1 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink2 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink3 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink9 absolute" data-aos="fade" data-aos-delay="0" v-if="$isMobile()">>
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink10 absolute" data-aos="fade" data-aos-delay="0" v-if="$isMobile()">>
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink4 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink2.png" alt="ink"
      />
    </div>
    <div
      class="ink5 absolute" data-aos="fade" data-aos-delay="0" v-if="!$isMobile()">
      <img
        src="./s1/ink1.webp" alt="ink"
      />
    </div>
    <div
      class="ink6 absolute" data-aos="fade" data-aos-delay="0">
      <img
        src="./s1/ink1.webp" alt="ink"
      />
    </div>
    <div
      class="ink7 absolute" data-aos="fade" data-aos-delay="500">
      <img
        src="./s1/ink3.png" alt="ink"
      />
    </div>
    <div
      class="ink8 absolute" data-aos="fade" data-aos-delay="500">
      <img
        src="./s1/ink3.png" alt="ink"
      />
    </div>
    </div>
  </article>
  <div class="popup" :class="{ open: popupType != '' }">
    <template v-if="popupImg != '' && isMobile">
      <img class="finger" src="@/section/s9/finger.png" alt="" srcset="" />
      <div class="wrapper">
        <img class="i" :src="popupImg" />
      </div>
      <div class="arrows" v-if="showArrows">
            <img
              class="prev cursor-pointer"
              src="@/section/arrow.png"
              alt="r"
      @click="gonn"
            />
            <img
              class="next cursor-pointer"
              src="@/section/arrow.png"
              alt="r"
      @click="gonn"
            />
          </div>
    </template>

    <template v-else-if="popupImg != ''">
      <img class="i" :src="popupImg" />
      <div class="arrows" v-if="showArrows">
            <img
              class="prev cursor-pointer"
              src="@/section/arrow.png"
              alt="r"
      @click="gonn"
            />
            <img
              class="next cursor-pointer"
              src="@/section/arrow.png"
              alt="r"
      @click="gonn"
            />
          </div>
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
.inkbg{top: 0;left: 0;width: 100%;z-index:3;
  user-select: none;
  pointer-events: none;

}
  .ink1{top: size(250);left:size(-850);width:size(2610);height:size(1545);
    img{width: 100%;height: 100%;
      transform: rotate(-0deg);//opacity: .3;
   filter:invert(86%) sepia(4%) saturate(1113%) hue-rotate(319deg) brightness(111%) contrast(98%);
  }
}
  .ink2{top: size(-257);left:size(-100);width:size(2310);height:size(1020);
    img{width: 100%;height: 100%;//opacity: .3;
      transform: rotate(-8.6deg);
     filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);
  }
}
  .ink3{top: size(2000);left:size(-390);width:size(2610);height:size(1545);
    img{width: 100%;height: 100%;
      transform: rotate(-0deg);//opacity: .3;
    filter:invert(86%) sepia(4%) saturate(1113%) hue-rotate(319deg) brightness(111%) contrast(98%);
  }
}
  .ink4{top: size(1645);left:size(-25);width:size(2310);height:size(1020);
    img{width: 100%;height: 100%;//opacity: .3;
      transform: rotate(-8.6deg);
    filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);
  }
}
  .ink5{top: size(585);left:size(265);width:size(2000);
    transform: rotate(-5deg)translateX(10%);
    img{width: 100%;//opacity: .3;
    }
  }
  .ink6{top: size(2450);left:size(280);width:size(2000);
    transform: rotate(-5deg)translateX(10%);
    img{width: 100%; //opacity: .3;
      transform: rotate(180deg);
    }
  }
  .ink7{top: size(1150);left:size(-1100);width:size(2000);height:size(500);
    transform: translate(-10%,-10%);
   img{width: 100%;height: 100%; //opacity: .3;
    transform: perspective(5vw)rotate(-20deg)rotateX(-5deg)rotateY(3deg);
    filter:invert(79%) sepia(17%) saturate(537%) hue-rotate(358deg) brightness(98%) contrast(89%);
  }
  }
  .ink8{top: size(2170);right:size(-500);width:size(1300);height:size(450);
    transform: translate(-10%,-10%);
   img{width: 100%;height: 100%; //opacity: .3;
    transform: perspective(5vw)rotate(-22deg)rotateX(-5deg)rotateY(2deg);
    filter:invert(79%) sepia(17%) saturate(537%) hue-rotate(358deg) brightness(98%) contrast(89%);
  }
  }
  section {
    @apply flex items-end relative z-10;
    height: size(1075); // opacity: 0;
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
        box-shadow: 0 0 size(20) #9669;
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
    max-width: calc(100% - #{size(150)});
  }
  .close {
    @apply self-start cursor-pointer;
    @apply relative z-10;
    width: size(56);
    padding-top: size(50);
  }
  .arrows{
    @apply absolute w-full flex items-center justify-between;
    padding:0 size(20);
  
    .next {
          @apply -scale-x-100;
        }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s9 {
    @apply w-full relative bg-cover;
    padding: 0;

.ink1{top: sizem(650);left:sizem(-390);width:sizem(890);height:sizem(525);
    img{
      transform: rotate(-15deg);
  }
}
.ink2{top: sizem(230);left:sizem(-530);width:sizem(1100);height:sizem(478);
    img{
      transform: rotate(-0deg);
  }
}
.ink3{top: sizem(1190);left:sizem(-295);width:sizem(910);height:sizem(400);
    img{
      transform: rotate(0deg);filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);
  }
}
.ink4{top: sizem(1290);left:sizem(-435);width:sizem(910);height:sizem(520);
    img{
      transform: rotate(0deg);
      filter:invert(86%) sepia(4%) saturate(1113%) hue-rotate(319deg) brightness(111%) contrast(98%);
  }
}
.ink5{top: sizem(475);left:sizem(55);width:sizem(400);
    transform: rotate(-5deg)translateX(10%);
    img{
      transform: rotate(180deg);
    }
  }
.ink6{top: sizem(2565);left:sizem(-258);width:sizem(1110);
    transform: rotate(-5deg)translateX(10%);
    img{
      transform: rotate(180deg);
    }
  }
.ink7{top: sizem(2385);left:sizem(-60);width:sizem(750);height:sizem(210);
   img{
    transform: rotate(-25deg);
  }
  }
.ink8{top: sizem(1668);left:sizem(120);width:sizem(315);height:sizem(90);
   img{
    transform: rotate(-25deg);
  }
  }
.ink9{top: sizem(1750);left:sizem(-360);width:sizem(910);height:sizem(404);
    img{width: 100%;height: 100%;
      transform: rotate(-0deg);
      filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);
  }
}
.ink10{top: sizem(2440);left:sizem(-395);width:sizem(920);height:sizem(520);
    img{width: 100%;height: 100%;
      transform: rotate(-14deg);
      filter:invert(86%) sepia(4%) saturate(1113%) hue-rotate(319deg) brightness(111%) contrast(98%);
  }
}


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
        max-width:none;
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
const showArrows = ref(false);
const currentImgIndex = ref(0); // 追踪當前顯示的 renderImg 索引
const currentGroup = ref(null); // 追踪當前顯示的 img 組

const openPopup = (type, img, arr, index,i) => {
  popupType.value = type;
  popupImg.value = img;
  showArrows.value = arr; 
  currentImgIndex.value = index; // renderImg 索引
  currentGroup.value = i; // img 組
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

const gonn = () => {
  if (currentImgIndex.value > 0) {
    currentImgIndex.value--;
  } else {
    currentImgIndex.value = imgs[currentGroup.value].renderImg.length - 1;
  }
  updatePopupImg();
};
const updatePopupImg = () => {
  popupImg.value = imgs[currentGroup.value].renderImg[currentImgIndex.value];
  
};

onMounted(async () => {
  await nextTick();  // 确保 DOM 渲染完成
});


const imgs = [
  {
    t1: "A2戶型/時尚簡約2房",
    t2: "格局規劃方正且正面採光，規劃雙衛廁，客廳結合開放式餐廳與廚房合為一體，做菜時與家人互動，讓每一餐都充滿愛與溫情，主臥套房空間寬敞明亮，享受獨立衛廁，另設計有開放式客衛浴外洗手台，方便回家清潔防疫，衛浴乾濕分離設計。",
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
    t2: "格局規劃方正且雙面採光，規劃獨立玄關，雙衛廁皆有對外窗，客廳結合開放式餐廳與廚房合為一體，讓您在烹飪的同時與家人分享每一刻的愉悅，主臥套房空間彈性運用更衣間，享受獨立衛廁，客浴乾溼分離設計。",
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
    t2: "格局規劃方正且邊間採光，規劃獨立玄關及廚房，客廳結合開闊的用餐空間，搭配前陽台採光通風，視線寬敞明亮，是家人間互動的場域，盡享美好時光，雙衛浴皆開窗採光，一主臥套房及兩間次臥，雍容的寢臥設計大採光，空間敞朗。",
    renderImg:[
      new URL("../section/s9/r31.jpg", import.meta.url).href,
      new URL("../section/s9/r32.jpg", import.meta.url).href,
    ],
    renderCaption:[
       "本模擬示意圖僅供參考，格局規劃及建材設備以核准之使用執照竣工圖及實際現場為準。",
       "本模擬示意圖僅供參考，格局規劃及建材設備以核准之使用執照竣工圖及實際現場為準。"
    ],
    planImg: new URL("../section/s9/p3.webp", import.meta.url).href,
    popupPlanImg: new URL("../section/s9/pp3.jpg", import.meta.url).href,
  },
]



</script>
