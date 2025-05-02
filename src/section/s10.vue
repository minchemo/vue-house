<template>
  <article class="s10">
    <div class="en2">
      <div class="en2-t" data-aos="fade-up" data-aos-delay="0">
        國際精品匯聚 升等名流品味
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
      arrows: isMobile ? true : false,
      autoplay: true,
      pagination: isMobile ? false : true,
      interval: 8000,
      gap: 10,
      type: 'loop',
    }"
  >
    <SplideSlide
      class="slide-item"
      v-for="(i, index) in imgs"
      :key="index"
      :style="{ 'background-image': `url(${i.img})` }"
    >
      <div class="caption">
        {{ i.caption }}
      </div>
    </SplideSlide>
  </Splide>
      <div class="t">
        
        <div class="t2" v-if="currentSlide === 0" data-aos="fade-up" data-aos-delay="200">
          <b>全面用心 滴水不漏 大信防水</b>
大信防水攜手國際百年大廠W.R.Grace&Co.，軍規「格雷盾」高檔防水塗料，美國原裝進口，無接縫、一體成形；高抗裂、高耐化，提供最高等級防水保護。

<b>NASA等級 防疫系統 STUDOR</b>
依據歐盟排水技術法規，率先採用最新設計排水系統，與NASA、雪梨歌劇院、歐盟總部等世界知名建築同步，有效預防臭味、防止病毒垂直傳染。

<b>醫療等級 空氣淨化 SHARP</b>
領先全球獨創Plasmacluster自動除菌離子技術，以離子消除懸浮於空氣中的過敏原、黴菌、病毒與異味，打造最清淨的電梯，讓回家更安心。 

<b>主動抗菌 健康守護 GreenWeb</b>
GreenWeb防霾紗窗是全台唯一使用銀離子抗菌技術紗網，透過杜邦奈米技術的銀離子塗層使菌體失去活性達到抑菌效果，經SGS認證抗菌率高於99.9％。

<b>德國第一 百年精品 太格木地板</b>
全球規模最大德國原裝進口木地板品牌。獨家專利超智慧半月型-雙鎖扣技術，領先世界。100%原樹林材選用，在歐洲最早榮獲德國藍天使標章最高標準。

<b>帆船飯店 皇家御用 RAK</b>
世界級帆船飯店御用義大利精品磁磚RAK，超過 160 個國家和地區銷售及代理地標，全球第一家專業磁磚工廠。

        </div>
        <div class="t2" v-else-if="currentSlide === 1" data-aos="fade-up" data-aos-delay="200">
<b>靜謐空間 美好生活 錦鋐氣密窗</b>
錦鋐氣密窗，榮獲經濟部中央標準局五項正字標記。具備高隔音、高水密、高氣密、高耐蝕、高耐候…皆較一般氟碳烤漆以及粉體塗裝效果佳。

<b>歐洲進口 廚具美學 Svago</b>
svago源自歐洲的廚電美學品牌，為義大利文「享樂」之意，體驗歐洲獨有的慢活風尚，讓您享受廚房烹飪樂趣的最佳承諾。

<b>MID品牌 永久服務 櫻花廚具</b>
四大永久免費服務，蟬聯36年獲頒理想品牌冠軍寶座，成為實實在在無人可比的理想品牌三冠王。讓廚房與生活完美結合，為世界級系統廚具的領導品牌。<br>
不僅連續27年蟬連消費者管理品牌的第一名，與客製化設計，打破傳統封閉空間形式，讓廚房與生活完美結合，為世界級系統廚具的領導品牌。

<b>台灣精品 智能居家 APD</b>
台灣頂尖團隊製造．鎖界精品，設計精密、安全性高，安心、用心，嚴密守護家人居家安全性與便利性。

<b>日本第一 精品衛浴 TOTO</b>
日本第一TOTO全自動馬桶，結合智慧洗淨、高能節水、水力發電、自動感應、龍捲噴式洗淨、奈米防污抗菌等十大智能尖端科技，居家享受全面升級。

        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  @apply w-full relative flex text-white;
 // height: size(1080);
 // padding-top: size(323);
  //padding-left: 0;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom:size(90);

  .slide-box {
    @apply flex;
    justify-content: center;

    gap: size(70);
    .slide {
      width: size(850);
      height: size(750);
      .slide-item{
        background: none;
        background-size: cover
      }
    }
    .splide__pagination {
        @apply justify-start;
    }
  }
    .t {
      width: size(720);
      margin-top: -1.5em;
    }
    .t1 {
      margin-bottom: .8em;
      padding-bottom: .8em;//width: 100%;
    }
    .t2 {
      font-size: size(18);
      b{font-size: 1.3em;
        display: flex;
        align-items: center;
        color: #f4e827;
      margin:1.2em auto .2em;
    &::after{content: "";flex: 1;height: 1px;background: #f4e827;margin-left: .5em}
    }
    }

  .en {
    @apply absolute;
    height: size(146.34);
    top: size(23);
    right: size(4);
  }
  .en2 {
    @apply relative w-full flex items-center justify-center z-10;
    gap: size(182);
    margin-top: size(80);
    margin-bottom: size(50);
    .en2-t {
      color: #f4e827;
      font-size: size(51);
      font-weight: 700;
      line-height: 1.27;
      letter-spacing:0.08em;
    }
    .en2-i {
      width: size(795);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s10 {
    // height: sizem(667);
    padding-top: sizem(0);
    padding-left: 0;

    .slide-box {
      @apply flex-col;
      gap: sizem(24);
      .slide {
        width: sizem(270);
        height: sizem(418);
        margin: auto;
        .slide-item {
        }
        .splide__pagination {
          @apply hidden;
        }
      }
      .t {
        width: 100%;
        padding: 0 sizem(30);
        height: sizem(670);
      }
    .t2 {
      font-size: sizem(12);}
    }

    .en2 {
      @apply flex-col-reverse;
      gap: sizem(9);
      margin-top: sizem(30);
      margin-bottom: sizem(30);
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
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const splide = ref()
const currentSlide = ref(0) // ⭐️ 追蹤當前 slide index

const imgs = [
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/1m.webp", import.meta.url).href
      : new URL("../section/s8/1.webp", import.meta.url).href,
    caption: "",
  },
  {
    img: globals.$isMobile()
      ? new URL("../section/s8/2m.webp", import.meta.url).href
      : new URL("../section/s8/2.webp", import.meta.url).href,
    caption: "",
  },
]

onMounted(() => {
  const instance = splide.value?.splide
  if (instance) {
    currentSlide.value = instance.index
    instance.on("move", (newIndex) => {
      currentSlide.value = newIndex % imgs.length
    })
  }
})
</script>
