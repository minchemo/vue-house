<template>
  <div class="s12 relative bg-black">
    <div class="flex flex-col-reverse md:flex-row w-full h-full">
      <div class="left">
        <Splide ref="splide" :options="{
          rewind: true,
          autoWidth: true,
          pagination: false,
          arrows: false,
          type: 'fade',
          autoplay: $isMobile() ? false : true,
          interval: 4000,
        }" @splide:move="move" class="slide-box absolute z-10">
          <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
          </SplideSlide>
        </Splide>
      </div>
      <div class="right flex flex-col justify-center items-center">
        <div v-if="currentIdx == 0">

          <div class="info decor">
          <div class="t1 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="0">堅實乘載幸福的重量</div>
          <div class="t2 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="200">並乘載著幸福的重量</div>
          <div class="t3 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="400">
            與結構職人戴雲發合作，採「Alfa Safe柱中柱」鋼筋專利工法，將自動化、標準化、一體化系統，牆轉角處集中處增設補強鋼筋，一體成型的形式讓耐震韌性提升100%。
          </div>
          </div>

          <div class="info decor">
          <div class="t1 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="0">住友GRAST黏彈性制震壁</div>
          <div class="t2 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="200">以維護古蹟的品質 守護恆久流傳的家屋</div>
          <div class="t3 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="400">
            住友GRAST黏彈性制震壁，通過日本建築綜合試驗所、台灣國家地震中心認證，以簡潔無間隙的結構，讓高阻尼橡膠更有效降低震動波，守護家屋的安全。
          </div>
          </div>

          
        </div> 


        <div class="info decor text-center" v-else-if="currentIdx == 1">
          <div class="t1 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="0">朗朗厚土人文之光</div>
          <div class="t2 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="200">頂級設備營造優雅質感生活</div>
          <div class="t3 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="400">
            心仝聚為家人匯聚了國際品牌建材，選用德國BWT淨水器與防霾紗窗、英國Studor吸氣閥、義大利Cesar廚具、日本TOTO衛浴與DAIKIN室外機、台灣台玻Low-E玻璃等，營造安全、舒適的優雅質感生活。
          </div>
        </div>
        <div class="splide__arrows flex justify-between">
          <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
            <img src="@/assets/prev.svg" alt="心仝聚" srcset="">
          </button>
          <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
            <img src="@/assets/next.svg" alt="心仝聚" srcset="">
          </button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s12 {
  width: 100%;
  height: size(1080);

  .left {
    flex-basis: size(800);
  }

  .right {
    flex-basis: size(1120);
  }

  .slide-box {
    position: absolute;
    width: size(800);
    height: size(1080);

    .splide__track {
      z-index: 10;
    }

    .slide {
      width: size(800);
      height: size(1080);
      background-size: cover;
      position: relative;
    }

  }

  .splide__arrows {
    width: size(140);
      position: absolute;
      top: calc(50% + 23vw);
  }
  .text-center{
      text-align: center !important;
    }

  .info {
    position: relative;
    width: size(610);
    text-align: left;
    pointer-events: none;
    color: #fff;
    line-height: 1.6;
    margin: size(90);

    .t1 {
      font-weight: 800;
      font-size: size(40);
      color: #F6B39A;
    }

    .t2 {
      font-weight: 700;
      font-size: size(30);
      margin-bottom: size(50);
    }

    .t3 {
      text-align:justify;
      font-weight: 400;
      font-size: size(20);
      letter-spacing: 0.15em;
    }

    &.decor {
      text-align: center;


      

      &::before {
        content: '';
        position: absolute;
        width: size(150);
        height: 1px;
        background-color: #fff;
        left: 50%;
        transform: translateX(-50%);
        top: -#{size(45)};
      }

      &::after {
        content: '';
        position: absolute;
        width: size(150);
        height: 1px;
        background-color: #fff;
        left: 50%;
        transform: translateX(-50%);
        bottom: -#{size(45)};
      }
    }
  }
}


@media screen and (max-width:768px) {

  .s12 {
    width: 100%;
    height: auto;
    padding: size-m(20);
    padding-top: size-m(50);

    .left {
      flex-basis: size-m(423);
      text-align: center;
    }

    .right {
      flex-basis: size-m(500);
      margin-bottom: size-m(50);
    }

    .slide-box {
      position: absolute;
      width: size-m(310);
      height: size-m(423);
      left: 50%;
      transform: translateX(-50%);

      .splide__track {
        z-index: 10;
      }

      .slide {
        width: size-m(310);
        height: size-m(423);
        background-size: cover;
        position: relative;
      }
    }

    .splide__arrows {
      width: size-m(140);
      margin-top: size-m(-60);
      margin-bottom: size-m(30);
    }

    .info {
      position: relative;
      width:  size-m(310);
      text-align: center;
      pointer-events: none;
      margin: size-m(45) 0;

      .t1 {
        font-size: size-m(24);
      }

      .t2 {
        font-size: size-m(15);
        margin-bottom: size-m(20);
      }

      .t3 {
        font-size: size-m(15);
        letter-spacing: 0;
        margin-bottom: 1.5em;
      }

      &.decor {
        text-align: center;

        &::before {
          display: none;
        }

        &::after {
          display: none;
        }
      }
    }
  }
}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();

const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}

const imgs = ref([
 /*  */{
    img: new URL("../section/s12/1.jpg", import.meta.url).href,
  },
  {
    img: new URL("../section/s12/2.jpg", import.meta.url).href,
  },
])
</script>
