<template>
  <article class="s2">
    <div class="view">
      <fullview />
    </div>
    <div class="t">
      <div class="t1" v-if="!isMobile">國家級副都心 台灣政經中心</div>
      <div class="t1" v-else>國家級副都心<br />台灣政經中心</div>
      <div class="t2">
        超越信義計畫區規模，產官學攜手打造國家政經門戶，新莊副都心匯集國政、經濟、商業、交通與文教、生態共六大核心，打造台灣政經中心。<br />
        行政院合署辦公園區來了，16棟國際摩天商辦蓋好了，宏匯廣場、國賓影城開了，1.5公頃溪北轉運站動了，機場、環狀線雙捷運通了，吉得堡、昌平雙語學區有了，國家電影文化中心2期要蓋了，新北產業園區、知識產業園區成型了。
      </div>
      <div class="t3">
        國家級副都心，國政中心寰宇連線，世界級居住指標，低碳綠能示範城市，
        預約台灣國家政經中心增值大未來 。
      </div>
    </div>
    <!-- swiper -->
    <Splide
      v-if="isMobile"
      ref="splide"
      class="splide"
      :options="{
        drag: false,
        rewind: false,
        arrows: false,
        autoplay: false,
        interval: 4000,
        flickPower: 100,
        gap: 0,
        type: 'loop',
        perPage: 2,
        focus: 'center',
        perMove: 1,
        arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`,
      }"
      @splide:move="move"
    >
      <SplideSlide
        :style="{
          'background-image':
            activeLeaf == i
              ? `url(s2/leaf/${i}_.png)`
              : `url(s2/leaf/${i}.png)`,
        }"
        :data-bg="`s2/leaf/${i}.png`"
        :data-bg2="`s2/leaf/${i}_.png`"
        @click="splide.go(i)"
        :key="activeLeaf == i"
        v-for="i in 6"
      >
      </SplideSlide>
    </Splide>
    <img
      v-if="isMobile"
      class="leaf-img"
      :src="`s2/leaf/${activeLeaf}im.png`"
      alt=""
    />
    <div v-if="isMobile" class="gol" @click="splide.go('<')"></div>
    <div v-if="isMobile" class="gor" @click="splide.go('>')"></div>
    <img
      v-if="isMobile"
      class="leaf-arrow"
      :src="`s2/leaf/arrow.png`"
      alt=""
      @click="splide.go('>')"
    />
    <div v-else class="leaf-box">
      <div class="leafs">
        <div
          class="leaf"
          :style="{
            'background-image':
              activeLeaf == i
                ? `url(s2/leaf/${i}_.png)`
                : `url(s2/leaf/${i}.png)`,
          }"
          :data-bg="`s2/leaf/${i}.png`"
          :data-bg2="`s2/leaf/${i}_.png`"
          @mouseenter="replaceBg(true, $event, i)"
          @mouseleave="replaceBg(false, $event, i)"
          @click="activeLeaf = i"
          :key="i"
          v-for="i in 6"
        ></div>
      </div>
      <img class="leaf-img" :src="`s2/leaf/${activeLeaf}i.png`" alt="" />
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s2 {
  @apply relative w-full z-0;
  height: size(2085);
  background-image:linear-gradient(0deg, #093948 70%, rgba(15, 35, 81, 0) 100%);
  &::after {
    @apply absolute w-full h-full z-10;
    content: "";
   // background-image: url("@/section/s2/bg.png");
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .leaf-box {
    @apply left-1/2 -translate-x-1/2 top-0 z-20 absolute;
    top: size(640);
    .leafs {
      @apply flex;
      width: size(1594);
      height: size(326);
      .leaf {
        @apply relative flex-1 cursor-pointer;
        background-size: contain;
        background-repeat: no-repeat;
        &:nth-child(1) {
          bottom: size(40);
        }
        &:nth-child(2) {
          bottom: size(10);
        }
        &:nth-child(3) {
          bottom: size(100);
        }
        &:nth-child(4) {
          bottom: size(40);
        }
        &:nth-child(6) {
          bottom: size(30);
        }
      }
    }
    .leaf-img {
      @apply w-full;
      margin-top: -#{size(50)};
    }
  }

  .t {
    @apply absolute z-20 text-white;
    top: size(203);
    width: size(759);
    left: size(581);
    .t1 {
      @apply text-center;
      font-size: size(45);
      font-weight: 700;
      margin-bottom: size(32);
    }
    .t2 {
      @apply text-justify;
      font-size: size(16);
      font-weight: 400;
      width: size(751);
      margin-bottom: size(23);
    }
    .t3 {
      @apply text-center text-[#EBBF55];
      font-size: size(23);
      font-weight: 500;
    }
  }

  .view {
    @apply w-full absolute bottom-0 left-0 z-20;
    height: size(1187);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    height: sizem(1920);
    background-image:linear-gradient(0deg, #093948 75%, rgba(15, 35, 81, 0) 100%);
  
   // background: #1b527a;
    &::after {
      @apply absolute w-full h-full z-10;
      content: "";
    //  background-image: url("@/section/s2/bgm.jpg");
      background-position: top;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    .splide {
      @apply absolute w-full z-20;
      height: sizem(190);
      top: sizem(500);
      .splide__slide {
        @apply relative cursor-pointer;
        background-size: contain;
        background-repeat: no-repeat;
        height: sizem(190);
        width: sizem(190);
        &:nth-child(1) {
          bottom: size(40);
        }
        &:nth-child(2) {
          bottom: size(10);
        }
        &:nth-child(3) {
          bottom: size(100);
        }
        &:nth-child(4) {
          bottom: size(40);
        }
        &:nth-child(6) {
          bottom: size(30);
        }
      }
    }
    .leaf-img {
      @apply absolute z-20;
      width: sizem(330);
      top: sizem(700);
      left: sizem(22.5);
    }
    .leaf-arrow {
      @apply absolute z-20;
      top: sizem(950);
      right: sizem(22.5);
    }
    .gor,.gol{
      @apply absolute z-20;
      top: sizem(500);
      right: 0;
      width:  sizem(100);height:  sizem(750);
    }
    .gol{
      left: 0;height:  sizem(200);
    }

    .t {
      @apply absolute z-20 text-white;
      top: sizem(100);
      width: sizem(300);
      left: sizem(37.5);
      .t1 {
        font-size: sizem(30);
        margin-bottom: sizem(20);
      }
      .t2 {
        font-size: sizem(14);
        font-weight: 400;
        width: 100%;
        margin-bottom: sizem(20);
      }
      .t3 {
        font-size: sizem(16);
        font-weight: 500;
      }
    }

    .view {
      height: sizem(900);
    }
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const activeLeaf = ref(1)

const splide = ref()

const move = (idx1, idx2, dest) => {
  activeLeaf.value = idx2 + 1
}

const replaceBg = (isHover, event, index) => {
  const target = event.target
  const bgUrl = isHover
    ? target.getAttribute("data-bg2")
    : index == activeLeaf.value
    ? target.getAttribute("data-bg2")
    : target.getAttribute("data-bg")

  target.style.backgroundImage = `url(${bgUrl})`
}
</script>
