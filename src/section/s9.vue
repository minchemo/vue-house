<template>
  <article class="s8">
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">自然謙讓，隱富於世｜建築美學</h3>
      <h3 class="en" data-aos="fade-up" data-aos-delay="0">TArchitecture of Humility</h3>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows" v-if="isMobile">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="img in imgs" :key="img">
          <img :src="img.img" :alt="img.caption">
      <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s8 {
  @apply w-full relative text-[#0c7494];
 // height: size(1336);
 /* background-image: url("@/section/s2/bg.jpg");
  background-size: cover; */
  background: #FFF;
  padding: sizem(50) 0 2em 0;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 600;
@media screen and (min-width: 768px) {
  padding: size(190) 0 0 0;
  font-size: size(17);
}
.txt {margin:0 auto 3em;
  display: flex;
  flex-wrap: wrap;text-align: justify;
  justify-content: center;gap:0 4em;width: 100%;
  @media screen and (min-width: 768px) {
    margin:0 auto 5em;
  }

  .title{width: 100%;font-size: 1.5em;text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 3.1em;
    }
  }
  .en{width: 100%;font-size: .6em;text-transform:uppercase;text-align: center;margin: .3em auto 0em;letter-spacing: 0.16em;
    @media screen and (min-width: 768px) {
      font-size: 1.2em;margin: .3em auto 1em;
    }
  }
  .desc{width: sizem(280);text-align: justify;color: #000;margin: -.2em 0 2em 0;
    @media screen and (min-width: 768px) {
      width: size(560);
    }
    span{display: inline-block;width: calc(sizem(280) - 5.2em);vertical-align: top;}
  }
}
.pic{width:sizem(310);
img{width: 100%;}
}
  .slider {
    margin: 0;
    height: auto;
    width: 100%;
    .caption {
    font-size:sizem(12);  
    right:sizem(5);
    bottom:sizem(5);
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
    height: sizem(150);
    img{width: 100%;height: 100%;object-fit: cover;}
      
    }

    .splide__pagination{
      justify-content: flex-end;
      bottom: -2em;
    }
  }

}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue";
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const splide = ref();
const currentSlideIndex = ref(0);
const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  perPage: 1.5, 
  focus: "center", // 置中顯示當前滑塊
  gap: 10,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: "0"
  },
  {
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: "0"
  },
  {
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: "0"
  },
  {
    img:new URL("./s8/1.jpg", import.meta.url).href ,
    caption: "0"
  },
]
</script>
