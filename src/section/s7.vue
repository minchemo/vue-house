<template>
  <article class="s7">
    <div class="slider">
      <div class="arrows">
        <img
          @click="splide.go('<')"
          class="prev"
          src="./arrow.svg"
          alt="r"
          srcset=""
        />
        <img
          @click="splide.go('>')"
          class="next"
          src="./arrow.svg"
          alt="r"
          srcset=""
        />
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
          <div class="caption">{{ img.caption }}</div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="t">
      <div class="t1"  data-aos="fade-up" data-aos-delay="0">養心之境 謙隱生活哲學</div>
      <div class="t2" data-aos="fade-up" data-aos-delay="200">
        微風、光影、林口獨有的水綠山色， 構築謙隱的生活哲學，永恆，在此凝泊。<br />
        獨門獨院與大院落，彷彿打開心的門扉。<br />
        沉穩的大地色系，建築師以它來詮釋建築，不譁眾取寵，卻有非常厚實的底蘊，伴隨大面無暇的落地窗，通往內在的宇宙。<br v-if="!isMobile" />
        洄游而入微風也明白通透，沒有一面牆能遮蔽景觀，沒有一扇窗能框限想像，灑水蒔花，與知己品茗話家常，<br v-if="!isMobile"/>
        當建築使人感受不到時間的敦促，永恆，便孕育而生。
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.s7 {
  @apply w-full relative;
 //  @apply bg-cover bg-center;
 //  height: size(1183);
 //  background-image: url("@/section/s7/bg.webp");
 // padding-top: size(155);

  .t {
    @apply text-white text-center;
    font-family: "Noto Serif TC";
    position: absolute;
    z-index: 3;
    top: size(155);
    left: 0;width:100%;
    .t1 {
      font-size: size(36);
      font-weight: 600;
      margin-bottom: size(27);
    }
    .t2 {
      font-size: size(16);
      font-weight: 400;
    }
  }
}
    .slide-item {
      @apply bg-cover relative;
      width: 100%;
     // height: 100%;
      img{width: 100%;}
      
      .caption {
        @apply absolute;
        right: size(10);
        bottom: size(10);
        font-family: 'Noto Sans TC';
        font-weight: 500;
        font-size: size(12);
        color: #fff;
      }
    }
      .arrows {
    .next {
      &:hover{transform:scaleX(-1)translateX(-10%);}
    }
        img {width: size(40);pointer-events:all;
          transition:transform .5s;
        &:hover{transform:translateX(-10%);}
      }
      }

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s7 {
    @apply w-full relative;
    @apply bg-cover bg-center;
  //  height: sizem(762);
  //  background-image: url("@/section/s7/bg.jpg");
   // padding-top: sizem(45);

    .t {
      @apply text-white text-center;
      font-family: "Noto Serif TC";
      top: sizem(45);
      padding: 0 sizem(30);
      .t1 {
        font-size: sizem(25);
        font-weight: 600;
        margin-bottom: sizem(20);
      }
      .t2 {
        @apply text-left;
        font-size: sizem(13);
        font-weight: 400;
      }
    }

  .slide-item {
    .caption {
      font-size: sizem(12);
    }
}
    .arrows {
      img {width: sizem(40);}
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())


const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}



const options = {
  rewind: false,
  arrows: false,
  pagination: false,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}
const imgs = [
  {
    img: globals.$isMobile() ? new URL("./s7/01m.webp", import.meta.url).href : new URL("./s7/01.webp", import.meta.url).href,
    caption: "本圖為3D模擬示意圖"
  },
  {
    img: globals.$isMobile() ? new URL("./s7/02m.webp", import.meta.url).href : new URL("./s7/02.webp", import.meta.url).href,
    caption: "本圖為3D模擬示意圖"
  },
  {
    img: globals.$isMobile() ? new URL("./s7/03m.webp", import.meta.url).href : new URL("./s7/03.webp", import.meta.url).href,
    caption: "本圖為3D模擬示意圖"
  },
  {
    img: globals.$isMobile() ? new URL("./s7/04m.webp", import.meta.url).href : new URL("./s7/04.webp", import.meta.url).href,
    caption: "本圖為3D模擬示意圖"
  },
  {
    img: globals.$isMobile() ? new URL("./s7/05m.webp", import.meta.url).href : new URL("./s7/05.webp", import.meta.url).href,
    caption: "本圖為3D模擬示意圖"
  },
]

</script>
