<template>
  <article class="s2 relative" id="s2">
    <div class="swiper-box">
      <Splide
        :options="sConfig"
        ref="splide"
        class="slide"
        @splide:move="onMove"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
        >
        <img :src="i.img" :alt="i.caption">
          <span class="caption">
            {{ i.caption }}
          </span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="txt">
      <div class="arrows">
        <img
          @click="splide.go('<')"
          class="prev"
          src="@/section/arrow.svg"
          alt="r"
          srcset=""
        />
        <img
          @click="splide.go('>')"
          class="next"
          src="@/section/arrow.svg"
          alt="r"
          srcset=""
        />
      </div>
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">首席台積電璀璨版圖<br>
        聚焦全球AI科技核心</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200"> Technology Core</h4>
        <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
      <p data-aos="fade-up" data-aos-delay="600">台積電連動美、日、星國際科研能量競速佈局，港都華麗轉身科研繁城，頂尖跨國企業搶駐，科技菁英絡繹進城，共構我國南方發展新藍圖，躍居國際產業核心之列，領銜全球聚焦目光。</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  position: relative;
  .swiper-box {
    position: relative;
    left: 50%;transform: translateX(-50%);
    width:sizem(458);
    @media screen and (min-width: 768px) {
      width:size(1380);
      left:0;transform: translateX(0%);right: 0;margin: 0 0 0 auto;
    }
    .slide-item {width: 100%;height:100%;
    img{width:100%;object-fit: cover;height:sizem(317);
      @media screen and (min-width: 768px) {height:size(960);}
    }
    .caption {
      position: absolute;top: 0.5em;right: 4.3em;color: #FFF;font-size: sizem(11);text-shadow:0 1px 3px #000;
      @media screen and (min-width: 768px) {right: .5em;font-size: size(17);}
    }
    }
  }
      .arrows {
        padding: 0;
        text-align: center;
        @media screen and (min-width: 768px) {
          position: absolute;bottom:size(40);
          right:size(30);
        }
        img {
          width: sizem(20);
          @media screen and (min-width: 768px) {width: size(40);}
        }

        .next {
          @apply -scale-x-100;
          margin-left:sizem(15);
          @media screen and (min-width: 768px) {margin-left:size(40);}
        }
      }
      .txt{
        position: relative;
        background: #FFF;
        color: #000;
        font-size:sizem(14);
        line-height: 1.8;
        width: sizem(327);
        margin: sizem(-33) auto sizem(20) auto;
        padding: sizem(6) sizem(38) sizem(38) sizem(38);
        text-align: justify;
        @media screen and (min-width: 768px) {
          position: absolute;
          top: size(80);left: size(159);
          font-size:size(22);
          margin: 0 auto 0 auto;
          padding: size(0) size(48) size(0) size(48);
          width: size(510);
          height:size(800);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:flex-start;
        }
        .title{
          font-size:sizem(26);
          color: #A30C24;
          line-height: 1.2;
          margin-top:sizem(28);
          letter-spacing: 0.03em;
          @media screen and (min-width: 768px) {font-size:size(40);
            margin-top:0;}
        }
        .subtitle{
          font-size:sizem(20);
          @media screen and (min-width: 768px) {font-size:size(30);}
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:sizem(6) 0 sizem(23);
          @media screen and (min-width: 768px) {margin:size(10) 0 size(40);}
        }
      }


}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const splide = ref()
const sConfig = {
  autoWidth: true,
  arrows: false,
  autoplay: true,
  pagination: false,
  gap: 0,
  type: "loop",
}


const imgs = [
  {
    img: new URL("./s2/1.webp", import.meta.url).href,
    caption: "依政府公開計畫繪製，僅供參考請以實際為主",
  },
  {
    img: new URL("./s2/2.webp", import.meta.url).href,
    caption: "圖片來源google地圖，僅供參考請以實際為主",
  },
]

</script>