<template>
  <article class="s2">
    <div class="arrows">
      <img v-if="$isMobile()" @click="splideRef.splide.go('<')" class="prev clickable" src="@/section/s2/prev_m.png"
        alt="" srcset="">
      <img v-else @click="splideRef.splide.go('<')" class="prev clickable" v-bind:class="{ 'hover': isHover }"
        src="@/section/s2/prev.png" alt="" srcset="">

      <img v-if="$isMobile()" @click="splideRef.splide.go('>')" class="next clickable" src="@/section/s2/next_m.png"
        alt="" srcset="">
      <img v-else @click="splideRef.splide.go('>')" class="next clickable" v-bind:class="{ 'hover': isHover }"
        src="@/section/s2/next.png" alt="" srcset="">
    </div>

    <div class="content" v-if="$isMobile()">
      <img class="title" src="@/section/s2/title.png" alt="" srcset="">
      <p>從在地人的起家厝、維冠大樓重建工程，到台南首座青年公宅，宗大自1991年起扎根台南，一路以來沉著內斂，默默實踐「實在」的價值所在。以「建築」為起點，佈局「營造、製造、飯店」，建構完整的「生活產業生態系」，讓實在，無所不在。
      </p>
    </div>

    <img v-if="$isMobile()" class="en" src="@/section/s2/en_m.png" alt="" srcset="">
    <Splide ref="splideRef" :options="{
      type: 'loop',
      perPage: $isMobile() ? 1 : 3,
      focus: 'center',
      arrows: false,
      autoplay: false, pauseOnHover: false,
      interval: 3000,
      start: 0
      // width: $isMobile() ? size_m(295) : null
    }" class="slide-section">
      <SplideSlide v-for="img, i in imgs" class="slide-item">
        <img class="clickable cursor-pointer" @click="splideRef.splide.go(i)" :src="img.img" alt="" srcset="">
        <div class="text">
          <div class="t1">{{ img.label1 }}</div>
          <div class="t2">{{ img.label2 }}</div>
        </div>
      </SplideSlide>
    </Splide>
    <div class="content" v-if="!$isMobile()" data-aos="fade-up" data-aos-duration="800">
      <img class="title" src="@/section/s2/title.png" alt="" srcset="">
      <p>從在地人的起家厝、維冠大樓重建工程，到台南首座青年公宅，宗大自1991年起扎根台南，一路以來沉著內斂，默默實踐「實在」的價值所在。以「建築」為起點，佈局「營造、製造、飯店」，建構完整的「生活產業生態系」，讓實在，無所不在。
      </p>
    </div>
    <img data-aos="fade-up" data-aos-duration="800" v-if="!$isMobile()" class="en" src="@/section/s2/en.png" alt=""
      srcset="">
    <div v-if="!$isMobile()" class="hover-area">
      <div class="left" @click="splideRef.splide.go('<')" @mouseover="isHover = true" @mouseleave="isHover = false">
      </div>
      <div class="right" @click="splideRef.splide.go('>')" @mouseover="isHover = true" @mouseleave="isHover = false">
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative;
  width: 100%;
  height: 100vh;
  padding-top: size(160);
  background-color: #fff;

  .hover-area {
    @apply absolute w-full h-full left-0 top-0 flex items-center justify-between;
    background-color: transparent;
    div {
      @apply h-[70%] cursor-pointer;  
      width: 20%;
      
    }
  }

  .slide-section {
    //  padding-top: size(160);
    .slide-item {
      @apply flex flex-col items-center transition-all;
      opacity: 0.35;
      img {
        height: size(388);
      }
      .text {
        @apply relative w-full flex items-center justify-center;
        gap: size(21);
        font-weight: 600;
        letter-spacing: 0.09em;
        padding-top: size(20);
        margin-top: size(100);
        .t1 {
          font-size: size(28);
          color: #AA8D30;
        }
        .t2 {
          font-size: size(20);
        }

        &::after {
          @apply w-full absolute transition-all;
          content: '';
          height: size(1.5);
          background-color: grey;
          left: 0;
          bottom: size(60);
        }
        
      }
      &.is-active {
      opacity: 1;
        .text {
          &::after {
            background-color: #C6A93E;
            height: size(3);
          }
        }
      }
    }
  }

  .arrows {
    @apply absolute flex items-center justify-between z-20;
    bottom: calc(50% + ( 400 - 1080 * 0.5) * 100vw / 1920);
    height: size(83);
    width: 95%;
    margin-left: 2.5% ;
    
    img {
      @apply h-full;
      margin: unset;
      opacity: 1;
      transition: all .5s;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
      &.hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
  
  .content {
    @apply flex items-center justify-center;
    margin-top: size(95);
    gap: size(176);
    .title {
      margin: unset;
      width: size(376.17);
    }

    p {
      @apply font-['Noto_sans_tc'];
font-weight: 400;
font-size: size(20);
line-height: size(45);
letter-spacing: 0.05em;
width: size(1010);
text-align: justify;


    }
  }

  .en {
    @apply absolute z-10;
    width: size(250);
    top: size(50);
    right: size(131);
  }
}

@media screen and (max-width: 767px) {
  .s2 {
  height: size-m(1039);
  padding-top: size-m(111);
    
  .slide-section {
     padding-top: size-m(53);
    .slide-item {
      @apply flex flex-col items-center transition-all;
      width: size-m(295) !important;
      img {
        max-width: size-m(295);
        height: size-m(232.67);
      }
      .text {
        @apply relative w-full flex items-center justify-center;
        gap: size-m(21);
        font-weight: 600;
        letter-spacing: 0.09em;
        padding-top: 0;
        margin-top: size-m(51);
        .t1 {
          font-size: size-m(20);
        }
        .t2 {
          font-size: size-m(15);
        }

        &::after {
          height: size-m(1.5);
          bottom: size-m(50);
        }
        
      }
      &.is-active {
        .text {
          &::after {
            height: size-m(2);
          }
        }
      }
    }
  }

  .arrows {
    @apply absolute flex items-center justify-between z-20;
    bottom: size-m(105);
    height: size-m(25);
    width: 95%;
    margin-left: 2.5%;
    img {
      opacity: 1
    }
  }
  
  .content {
    @apply flex-col;
    margin-top: unset;
    gap: size-m(57);
    .title {
      width: size-m(260.69);
    }

    p {
      font-size: size-m(14);
      line-height: size-m(37);
      letter-spacing: 0.05em;
      width: size-m(295);
    }
  }

  .en {
    @apply relative;
    width: size-m(275);
    top: unset;
    right: unset;
    margin-top: size-m(99);
    margin-left: size-m(50);
  }
  }
}
</style>
<script setup>
import { onMounted, ref } from 'vue';
import inView from 'in-view';

const splideRef = ref(null);
const isHover = ref(false);

const imgs = [
  {
    img: new URL(`../section/s2/logo.png`, import.meta.url).href,
    label1: '1991',
    label2: '「宗大建設」成立'
  },
  {
    img: new URL(`../section/s2/1.png`, import.meta.url).href,
    label1: '1996',
    label2: '東方紐約'
  },
  {
    img: new URL(`../section/s2/2.png`, import.meta.url).href,
    label1: '1999',
    label2: '雙橡園'
  },
  {
    img: new URL(`../section/s2/3.png`, import.meta.url).href,
    label1: '2003',
    label2: '歐薇花園'
  },
  {
    img: new URL(`../section/s2/4.png`, import.meta.url).href,
    label1: '2011',
    label2: '湖美霞觀'
  },
  {
    img: new URL(`../section/s2/5.png`, import.meta.url).href,
    label1: '2012',
    label2: '陽光靚巷'
  },
  {
    img: new URL(`../section/s2/6.png`, import.meta.url).href,
    label1: '2013',
    label2: '崇德青硯'
  },
  {
    img: new URL(`../section/s2/7.png`, import.meta.url).href,
    label1: '2017',
    label2: '陶裡原'
  },
  {
    img: new URL(`../section/s2/8.png`, import.meta.url).href,
    label1: '2018',
    label2: '凌波揚'
  },
  {
    img: new URL(`../section/s2/9.png`, import.meta.url).href,
    label1: '2019',
    label2: '台南國際城'
  },
  {
    img: new URL(`../section/s2/12.png`, import.meta.url).href,
    label1: '2022',
    label2: '遇州南'
  },
  {
    img: new URL(`../section/s2/13.png`, import.meta.url).href,
    label1: 'Processing',
    label2: '小陶砌'
  },
  {
    img: new URL(`../section/s2/14.png`, import.meta.url).href,
    label1: 'Processing',
    label2: '小日子'
  },
]

const onHover = () => {
  isHover.value = true
}

onMounted(() => {
  inView('.s2')
    .on('enter', () => {
      splideRef.value.splide.go(0)
    })
    .on('exit', () => {
    });
})
</script>
