<template>
  <article class="s8">
    <div class="slide-box-i">
      <Splide
        ref="splide2"
        :options="{
          arrows: isMobile?true:false,
          autoplay: true,
          pagination: isMobile?false:true,
          interval: 4000,
          gap: isMobile ?10:0,
          type: 'loop',
          focus:isMobile ? 'center':'left',
          autoWidth: true,
          perPage: isMobile ? 1 : 'auto'
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs2"
        >
        <img :src="i.img" :alt="i.caption">
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        茂德建設品牌 職人工藝再現經典
      </div>
      <div class="t2" v-if="!isMobile" data-aos="fade-up" data-aos-delay="200">
        家，是永恆幸福的承諾。<br />
        因為有承諾，所以更堅持以職人工藝，一磚一瓦細心雕琢，<br />
        手感打造家的溫暖美學。為每個愛家的人，獻上一生的信念！
      </div>
      <div class="t2" v-else data-aos="fade-up" data-aos-delay="200">
        家，是永恆幸福的承諾。<br />
        因為有承諾，所以更堅持以職人工藝，一磚一瓦細心雕琢，手感打造家的溫暖美學。為每個愛家的人，獻上一生的信念！
      </div>
    </div>
    <div class="en2">
      <div class="en2-t" data-aos="fade-up" data-aos-delay="0">
        工藝品味之選 輕奢訂製享受生活
      </div>
      <img
        class="en2-i"
        data-aos="fade-up"
        data-aos-delay="200"
        src="@/section/s8/en2.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="slide-box">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: true,
          interval: 4000,
          gap: 20,
          type: 'loop',
          drag: 'free',
          snap: true,
          arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
          :style="{ 'background-image': `url(${i.img})` }"
        >
        </SplideSlide>
      </Splide>
    </div>
    <div class="arrows" v-if="isMobile">
      <img
        src="@/section/arrow.png"
        class="arrow prev"
        alt=""
        srcset=""
        @click="splide.go('<')"
      />
      <img
        src="@/section/arrow.png"
        class="arrow next"
        alt=""
        srcset=""
        @click="splide.go('>')"
      />
    </div>
    <img
      class="en"
      src="@/section/s8/en.svg"
      alt=""
      srcset=""
      v-if="!isMobile"
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <img
      class="en"
      src="@/section/s8/enm.svg"
      alt=""
      srcset=""
      v-else
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <div class="c" data-aos="fade" data-aos-delay="600"></div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  @apply w-full relative flex flex-col items-center text-white;
  height: size(2162);
  padding-top: size(224);

  .slide-box-i {
    @apply relative w-full;
    height: size(496);
    margin-bottom: size(20);
    .slide-item {
      .caption {
        left: .5em;
        top: .5em;
      }
    }
  }

  .t {
    @apply w-full;
    .t1 {
      @apply text-center;
      margin: size(43) 0;
    }
    .t2 {
      @apply text-center;
      font-size: size(24);
    }
  }

  .en2 {
    @apply relative w-full flex items-center justify-center z-10;
    gap: size(182);
    margin-top: size(151);
    margin-bottom: size(62);
    .en2-t {
      color: #e89213;
      font-size: size(51);
      font-weight: 700;
      line-height: 126.7%;
      letter-spacing: size(4.08);
    }
    .en2-i {
      width: size(795);
    }
  }

  .slide {
    width: size(1009);
    height: size(682.74);
  }

  .en {
    @apply absolute;
    height: size(146.5);
    top: size(23);
    left: size(4);
  }

  .c {
    @apply rounded-full absolute z-0 select-none;
    width: size(91);
    height: size(91);
    top: size(1168);
    left: size(809);
    border: 1px solid #fff;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s8 {
    height: sizem(1334);
    padding-top: sizem(97);

    .c {
      display: none;
    }

    .slide-box-i {
      height: sizem(331);
      margin-bottom: 0;
      .slide-item {
        height: sizem(331);
      .caption {
        left: calc(50% - 14.5em);
      }
      }
    }

    .t {
      padding: 0 sizem(30);
    .t1 {
      margin: 1em 0 0;
    }
      .t2 {
        font-size: sizem(13);
      }
    }

    .en2 {
      @apply flex-col-reverse;
      gap: sizem(9);
      margin-top: sizem(100);
      margin-bottom: sizem(40);
      .en2-t {
        font-size: sizem(20);
        font-weight: 700;
        line-height: 126.7%;
        letter-spacing: sizem(1.6);
      }
      .en2-i {
        width: sizem(301);
      }
    }

    .slide {
      width: sizem(270);
      height: sizem(417.59);
      .slide-item {
        width: sizem(270);
        height: sizem(417.59);
      }
      .splide__pagination {
        @apply hidden;
      }
    }

    .arrows {
      @apply absolute z-20 w-full flex justify-between;
      bottom: sizem(300);
      padding: 0 sizem(5);

      .arrow {
        @apply cursor-pointer;
        width: sizem(12.8);
        height: sizem(22.86);
        &.prev {
          transform: scaleX(-1);
        }
      }
    }
    .en {
      @apply absolute;
      height: sizem(58.95);
      top: sizem(16);
      left: 0;
    }

    .c {
      @apply rounded-full absolute z-10 select-none;
      width: size(91);
      height: size(91);
      top: size(1168);
      left: size(809);
      border: 1px solid #fff;
    }
  }
}
</style>

<script setup> 
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const splide2 = ref()

const imgs = [
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/1m.webp", import.meta.url).href
      : new URL("../section/s8/1.webp", import.meta.url).href,
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/2m.webp", import.meta.url).href
      : new URL("../section/s8/2.webp", import.meta.url).href,
  },
]



 const imgs2 = [
       {
        img: new URL("../section/s8/slider/1.jpg", import.meta.url).href,
         caption: "仁仁河",
       },
       {
        img: new URL("../section/s8/slider/2.jpg", import.meta.url).href,
         caption: "江翠ONE",
       },
       {
        img: new URL("../section/s8/slider/3.jpg", import.meta.url).href,
         caption: "希望城市",
       },
       {
        img: new URL("../section/s8/slider/4.jpg", import.meta.url).href,
         caption: "江翠park",
       },
       {
        img: new URL("../section/s8/slider/5.jpg", import.meta.url).href,
         caption: "江匯life",
       },
       {
        img: new URL("../section/s8/slider/6.jpg", import.meta.url).href,
         caption: "公園66",
       },
       {
        img: new URL("../section/s8/slider/7.jpg", import.meta.url).href,
         caption: "頂溪大苑",
       },
       {
        img: new URL("../section/s8/slider/8.jpg", import.meta.url).href,
         caption: "金城舞5",
       },
       {
        img: new URL("../section/s8/slider/9.jpg", import.meta.url).href,
         caption: "都廳大院",
       },
       {
        img: new URL("../section/s8/slider/10.jpg", import.meta.url).href,
         caption: "晴空大地",
       },
       {
        img: new URL("../section/s8/slider/11.jpg", import.meta.url).href,
         caption: "自由綠洲",
       },
     ]
// 下一張滑塊
const goNext = () => {
  splide2.value?.go(">");
};

// 組件掛載後執行一次 `goNext`
onMounted(() => {
  setTimeout(() => {
    if (splide2.value) {
      goNext(); // 執行一次 goNext
    }
  }, 100); // 確保 Splide 初始化完成
});
</script>
