<template>
  <article class="s1">
    <!-- <img src="./s1/mo.jpg" class="t0" /> -->
    <div class="relative z-10 flex flex-col items-center justify-center">
    <img class="cathayredlogo" src="./s1/cathayredlogo.svg" alt="國泰建設logo" data-aos="zoom-in" data-aos-delay="0" />
    <img class="t21" src="./s1/t21.svg" alt="敬獻尊榮貴賓" data-aos="zoom-in" data-aos-delay="200" />
    <div class="t22">
      <span class="text-[#000]">專屬vip禮遇給最獨特的您</span>
      <span>誠摯的邀約您填單預約</span>
      <span>我們將為您安排優先禮賓鑑賞</span>
    </div>
    <img class="t1" src="./s1/t1a.svg" alt="在13期找回生活的原點" data-aos="zoom-in" data-aos-delay="200" />
    <img class="t2" src="./s1/t2.svg" alt="en1" data-aos="zoom-in" data-aos-delay="400" />
    <img class="t3" src="./s1/t3.svg" alt="en2" data-aos="zoom-in" data-aos-delay="600" />
    <div class="t23">
      <span class="sp1">低密度＋高綠覆</span>
      <span class="sp1">3期城市綠洲，自然的詩意座標</span>
      <span>近三萬坪綠意盎然，擁抱四季都會生活。</span>
      <span>左有好市多、IKEA、文心秀泰，右接中山醫、大慶雙鐵、台中高鐵，美好與未來交織相連。</span>
    </div>

    
    <div class="swiper-box relative">
      <Splide
        ref="splide"
        class="slide"
        :options="{
          autoWidth: false,
          arrows: false,
          autoplay: true,
          pagination: false,
          interval: 4000,
          gap: 30,
          type: 'loop',
          perPage: $isMobile() ? 1 : 3,
          drag:  $isMobile() ? true : false
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
          :style="{ 'background-image': `url(${i.img})` }"
        >
          <div class="caption">
            <span v-html="i.caption"></span>
            <span>現場實景拍攝</span>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <!-- <img class="t4" src="./s1/t4.svg" alt="當城裡的時光遇見生活的芬芳" data-aos="zoom-in" data-aos-delay="800" /> -->
  </div>
  <div class="tree1 absolute" data-aos="fade-left" data-aos-delay="800" data-aos-duration="6000" v-if="!isMobile">
    <img src="@/section/s1/tree.webp" alt="" srcset="">
  </div>
  <div class="tree2 absolute" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="6000" v-if="!isMobile">
    <img src="@/section/s1/tree.webp" alt="" srcset="">
  </div>

  </article>
</template>

<style lang="scss" scoped>
 @import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full;
  @media screen and (min-width: 768px) {
   // background-image: url("@/section/s1/bg.webp");
    background-size: 100% auto;
  }
  .t0{
	pointer-events: none;opacity: .3;position: absolute;top: 0;left: 0;width: 100%;z-index: 5;}
  .cathayredlogo{
    width: sizem(148);
    margin: sizem(75) auto 0 auto;
    @media screen and (min-width: 768px) {
      width: size(200);
      margin: size(110) auto 0 auto;
    }
  }
  .t21{
    width: sizem(218);
    margin: sizem(74) auto sizem(29) auto;
    @media screen and (min-width: 768px) {
      width: size(414);
      margin: size(130) auto size(60) auto;
    }
  }
  .t22{
    color: #AE9562;text-align: center;
    padding: 1.35em .5em;
    border-top: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    font-size: sizem(15.5);letter-spacing: 0.01em;
    line-height: 2;
  span{display: block;}
  @media screen and (min-width: 768px) {font-size: size(30);}
  }
  .t1{
    width: sizem(290);
    margin: sizem(73) auto 0 auto;
    @media screen and (min-width: 768px) {
      width: size(565);
      margin: size(145) auto 0 auto;
    }
  }
  .t2{
    width: sizem(152);
    margin: sizem(17) auto 0 auto;
    @media screen and (min-width: 768px) {
      width: size(295);
      margin: size(29) auto 0 auto;
    }
  }
  .t3{
    width: sizem(170);
    margin: sizem(26) auto sizem(75) auto;
    @media screen and (min-width: 768px) {
      width: size(330);
      margin: size(50) auto size(145) auto;
    }
  }
  .t23{
    color:#000;text-align: center;
    padding: 0;
    font-size: sizem(13);letter-spacing: 0.01em;
    line-height: 2;
    width: 24em;
    .sp1{ color: #AE9562;font-size: 1.25em;line-height: 1.9;}
  span{display: block;}
  @media screen and (min-width: 768px) {font-size: size(24);}
  }
  .swiper-box {
    margin: sizem(30) auto sizem(40) auto;
    width: sizem(310);
    .slide {
      .slide-item {position: relative;
        height: sizem(200);background-size: cover;
      }
    }
    @media screen and (min-width: 768px) {
    margin: size(90) auto size(45) auto;
    width: size(1710);
    .slide {
      .slide-item {
        height: size(355);
      }
    }}
    .caption{
      font-size: sizem(12);text-align: center;letter-spacing: 0.06em;
      position: absolute;bottom: .5em;right: .7em;color: #FFF;
      text-shadow: 0 0 .5em #000;
      @media screen and (min-width: 768px) { font-size: size(15);}
    span{display: block;
    &:first-child{font-size: 1.5em;}
    }
    }
  }

  
@keyframes tree{
  to{transform: skewX(-1deg);}
}
  .tree1{
    top: sizem(321);left: sizem(224);width: sizem(940);
    img{width: 100%;transform: skewX(2deg);transform-origin:50% 90%;
      animation:5s tree ease-in-out alternate infinite;
    }
    @media screen and (min-width: 768px) {
      top: size(90);left: size(1234);width: size(3410);
    }
  }
  .tree2{
    top: sizem(543);right: sizem(95);width: sizem(940);
    img{width: 100%;transform: skewX(2deg);transform-origin:50% 90%;
      animation:5s tree ease-in-out alternate infinite;
    }
    @media screen and (min-width: 768px) {
      top: size(785);right: size(1210);width: size(3410);
      
    }
  }

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
/* @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    @apply relative w-full max-h-screen;
    @apply flex flex-col items-center justify-start;
    background-image: url("@/section/s1/bgm.webp");
    padding-bottom: 0;
    padding-top: sizem(129);
    height: sizem(667);

    .content {
      @apply relative z-10;
      @apply flex flex-col items-center justify-center;
      gap: sizem(31);

      .logo {
        width: sizem(270);
      }

      .t1 {
        font-size: sizem(15);
      }
    }


  }
}*/
</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
const splide = ref()
const imgs = [
  {
    img: new URL("./s1/1.jpg", import.meta.url).href,
    caption: "文心秀泰",
  },
  {
    img: new URL("./s1/2.jpg", import.meta.url).href,
    caption: "玉&ensp;音&ensp;橋",
  },
  {
    img: new URL("./s1/3.jpg", import.meta.url).href,
    caption: "大慶車站",
  },
]
</script>
