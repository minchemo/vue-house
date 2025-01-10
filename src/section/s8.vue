<template>
  <article class="s8">
    <div class="box0 absolute" data-aos="fade-down" data-aos-delay="800"><img src="./s1/box.jpg" alt=""></div>
    <div class="box1 absolute" data-aos="fade-up" data-aos-delay="600"><img src="./s1/box.jpg" alt=""></div>
    <div class="box2 absolute" data-aos="fade-down" data-aos-delay="800"><img src="./s1/box.jpg" alt=""></div>
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
      <span class="caption absolute">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  @apply w-full relative text-[#0c7494];
 // height: size(1336);
 /* background-image: url("@/section/s2/bg.jpg");
  background-size: cover; */
  background: #FFF;
  padding: sizem(80) 0 2em 0;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 600;
@media screen and (min-width: 768px) {
  padding: size(190) 0 0 0;
  font-size: size(17);
}
.txt {margin:0 auto 3.5em;
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
    position: relative;
    margin: 0 0 0 -10%;
    height: auto;
    width: 120%;
    z-index: 3; 
    @media screen and (min-width: 768px) {
      margin: 0;
      width: 100%;

    }
    .caption {
    font-size:sizem(8);
    right:.7em;
    bottom:.5em;
    color: #FFFc;
    @media screen and (min-width: 768px) {
    font-size:size(15);
    }
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
    height: sizem(170);
    img{width: 100%;height: 100%;object-fit: cover;}
      
    }

    .splide__pagination{
      justify-content: flex-end;
      bottom: -2em;
      width: 92%;
      left: 0;
      @media screen and (max-width: 767px) {
        font-size: .5em;
        width: 85%;
      }
    }
  }
  
.box0{width:sizem(180);height: sizem(190);top:sizem(-150);right:sizem(95);z-index:2;overflow: hidden;
  @media screen and (min-width: 768px) {
    top:size(-400);width:size(610);height: size(500);right:size(630);
  }
img{height: 160%;opacity: .6;transform: translateX(-50%);margin-top: -50%;
  animation: box1 15s linear alternate infinite;}
}
.box1{width:sizem(80);height: sizem(130);top:sizem(160);right:0;overflow: hidden;
  @media screen and (min-width: 768px) {
    top:size(350);width:size(400);height: size(700);
  }
img{height: 180%;opacity: .6;transform: translateX(-50%);margin-top: -130%;
  animation: box1 15s linear alternate infinite;}
}
.box2{width:sizem(180);height: sizem(135);top:sizem(230);left:0;z-index:2;overflow: hidden;
  @media screen and (min-width: 768px) {
    top:size(780);width:size(750);height: size(600);left:0;
  }
img{height: 160%;opacity: .6;transform: translateX(-50%);margin-top: -50%;
  animation: box1 15s linear alternate infinite;}
}
@keyframes box1 {
  to {
  transform: translateX(0%);
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
    caption: "3D外觀透視圖"
  },
  {
    img:new URL("./s8/2.jpg", import.meta.url).href ,
    caption: "3D外觀透視圖"
  },
]
</script>
