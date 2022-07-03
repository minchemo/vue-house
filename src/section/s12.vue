<template>
  <div class="s12 relative bg-black">
    <div class="flex w-full h-full">
      <div class="left">
        <Splide ref="splide" :options="{
          rewind: true,
          autoWidth: true,
          pagination: false,
          arrows: false,
          type: 'fade',
          autoplay: true,
          interval: 4000,
        }" @splide:move="move" class="slide-box absolute z-10">
          <SplideSlide class="slide" v-for="img in imgs" v-lazy:background-image="img.img">
          </SplideSlide>
        </Splide>
      </div>
      <div class="right flex flex-col justify-center items-center">
        <div class="info" v-if="currentIdx == 0">
          <div class="t1 font-['Noto_serif_tc']">日本住友GRAST制震壁系統</div>
          <div class="t2 font-['Noto_serif_tc']">以維護古蹟的品質 守護恆久流傳的家屋</div>
          <div class="t3">
            日本住友GRAST制震壁系統，通過日本建築總合試驗所、台灣國家地震中心效能認證，更獲2013至2020年日經建築雜誌制震系統冠軍，經全球橋樑廣泛採用。著名實績包含日本京都東本願寺、熊本城，台北冠德羅斯福。<br><br>
            高阻尼橡膠與鋼板緊密接合、構成的制震壁，具備卓越消能性與剛性，使用壽命可達六十年以上，加裝於既有建築結構中，能有效降低震動波，確實守護家屋安全。用修繕國寶級古蹟的制震規格，為家奠定穩固根基，讓生命中的幸福，於此綿延茁壯。
          </div>
        </div>
        <div class="info decor" v-else-if="currentIdx == 1">
          <div class="t1 font-['Noto_serif_tc']">守護家人和珍貴事物的安全</div>
          <div class="t2 font-['Noto_serif_tc']">並乘載著幸福的重量</div>
          <div class="t3">
            與結構職人戴雲發合作，採「Alfa Safe柱中柱」鋼筋專利工法，將自動化、標準化、一體化系統，牆轉角處集中處增設補強鋼筋，一體成型的形式讓耐震韌性提升100%。
          </div>
        </div>
        <div class="splide__arrows flex justify-between">
          <button class="splide__arrow splide__arrow--prev" @click="splide.splide.go('<')">
            <img src="@/assets/prev.svg" alt="" srcset="">
          </button>
          <button class="splide__arrow splide__arrow--next" @click="splide.splide.go('>')">
            <img src="@/assets/next.svg" alt="" srcset="">
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
    margin-top: size(90);
  }

  .info {
    position: relative;
    width: size(610);
    text-align: left;
    pointer-events: none;

    .t1 {
      font-weight: 800;
      font-size: size(40);
      line-height: 70%;
      color: #EC9700;
      margin-bottom: size(25);
    }

    .t2 {
      font-weight: 700;
      font-size: size(30);
      line-height: 70%;
      color: #fff;
      margin-bottom: size(70);
    }

    .t3 {
      text-align: left;
      font-weight: 400;
      font-size: size(20);
      line-height: 150%;
      letter-spacing: 0.2em;
      color: #fff;
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
    width: size-m(375);
    height: size-m(600);
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
  {
    img: new URL("../section/s12/1.jpg", import.meta.url).href,
  },
  {
    img: new URL("../section/s12/2.jpg", import.meta.url).href,
  },
])
</script>
