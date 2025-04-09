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
          class="slide-item">
          <img src="./s2/1.webp" alt="1">
        </SplideSlide>
        <SplideSlide
          class="slide-item">
          <img src="./s2/2.svg" alt="2" class="img2" style="">
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
        <span v-if="$isMobile()">左右滑動切換</span>
        <img
          @click="splide.go('>')"
          class="next"
          src="@/section/arrow.svg"
          alt="r"
          srcset=""
        />
      </div>
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">生態綠廊公園內的<br>
        半導體園區</h3>
        <div class="t_s" data-aos="fade-up" data-aos-delay="200">全區<b>175</b>公頃｜<span class="text-[#000]">材料研發專區</span>＋<span class="text-[#000]">晶圓廠</span></div>
        <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="600"> Technology Core</h4>
      <p data-aos="fade-up" data-aos-delay="800">園區內除晶圓廠外，另規劃濕地公園、生態公園、生態湖及生活綠廊，連結周邊半屏山自然公園，建構生態綠廊公園內半導體園區願景，落實綠色製造與環境共生。<br><br>
基地座落晶圓廠旁，上下班可避過痛苦塞車潮，僅約500公尺可到達R20後勁捷運站，僅四站捷運站(約13分鐘)的距離可抵達R16左營高鐵站及新光三越百貨。5座全球最先進的台積電晶圓廠正在陸續落成，高雄後勁將迎來史上最大蛻變。</p>
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
    img{width:100%;object-fit: cover;height:sizem(317);background-size:cover;
      @media screen and (min-width: 768px) {height:size(960);}
    }
    .img2{background-image:url('./s2/2.jpg');}
    .caption {
      position: absolute;top: 0.5em;right: 4.3em;color: #FFF;font-size: sizem(11);text-shadow:0 1px 3px #000;
      @media screen and (min-width: 768px) {right: .5em;font-size: size(17);}
    }
    }
  }
      .arrows {
        padding: 0;
        text-align: center;
       // vertical-align: middle;
        @media screen and (min-width: 768px) {
          position: absolute;bottom:size(40);
          right:size(30);
        }
        img {
          width: sizem(20); pointer-events:all;
          @media screen and (min-width: 768px) {width: size(40);}
        }
        span{vertical-align: middle}

        .next {
          @apply -scale-x-100;
           margin-left:sizem(-2);
          @media screen and (min-width: 768px) {
            margin-left:size(35);
          }
        }
      }
      .txt{
        position: relative; pointer-events: none;
        background: #FFF;
        color: #000;
        font-size:sizem(14);
        line-height: 1.8;
        width: sizem(327);
        margin: sizem(-17) auto sizem(20) auto;
        padding: sizem(6) sizem(38) sizem(38) sizem(38);
        text-align: justify;
        @media screen and (min-width: 768px) {
          position: absolute;
          top: size(80);left: size(80);
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
          margin:0em 0 1em;
          @media screen and (min-width: 768px) {font-size:size(30);}
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:0em 0 .3em;
          // @media screen and (min-width: 768px) {margin:size(10) 0 size(40);}
        }
        .t_s{color: #A30C24;font-size: 1.04em;
          margin-top:.3em;
        b{font-size: 1.1em;font-weight: 400;}
        }
        @media screen and (min-width: 768px) {
          
        p{font-size: .85em;
        }
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


</script>