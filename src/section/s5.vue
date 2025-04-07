<template>
  <article class="s5 anchor6">
    <div class="style" v-if="!isMobile">
      <img src="./s1/style1.webp" alt="" data-aos="fade-left" data-aos-delay="500"/>
      <img src="./s1/style2apng.png" alt="" data-aos="fade-left" data-aos-delay="500"/>
    </div>
    <div class="t">
      <div
        class="t1"
        data-aos="fade-up"
        data-aos-delay="0"
      >家的多重宇宙<br />
創作也創業，點子源源不絕⋯<br />
讓喜歡的事成為工作／生活
      </div>
      <img src="./s1/logo.svg" class="logo" alt="logo"
        data-aos="fade-up"
        data-aos-delay="200">
      <div
        class="t2"
        data-aos="fade-up"
        data-aos-delay="400"
      >基地位置｜臺中市西屯區朝富二街/台灣大道三段<br />
接待會館｜台中市南屯區大業路二段556號5F-A<br />
投資興建｜麗晨建設股份有限公司<br />
設計團隊｜元根建築工房<br />
樓層規劃｜地上18層、地下4層<br />
戶數規劃｜住家76戶／店面3戶<br />
坪數規劃｜33-42坪
      </div>
      <div
        class="t3"
        data-aos="fade-up"
        data-aos-delay="600"
      >七期 秋紅谷 捷運宅<br />
      遇見 幸福的轉角 美麗的意外<br />
      捎來溪畔的家⋯<br />
      無二的無二 又見麗晨
      </div>
      <div class="t4"
        data-aos="fade-up"
        data-aos-delay="800">
        33-42坪 <span>04</span>2255-8788
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s5 {
  @apply relative w-full;
 // height: size(900);
  background: linear-gradient(0deg, #FFF 4%, #CDDBD9 58%, #CBDAD8 60%, #79B3BA 100%);
  .t {
    @apply w-full h-full top-0 left-0 pointer-events-none select-none;
  //  background-image: url("@/section/s5/mask.png");
    padding-top: size(111);
   // padding-left: size(153);
    text-align: center;
    
    .logo{width:size(425);margin:size(112) auto size(144) auto;display: block;}
    .t2 {
      font-size: size(23);
      line-height: 1.9;
      display: inline-block;text-align: left;
    }
    .t4{font-size: size(42);letter-spacing: 0.05em;color: #444;
    span{font-size: .43em;display: inline-block;width: 1em;word-wrap:break-word;line-height: 1;}
    }
@media screen and (min-width: 767px) {
    .t1 {
      font-size: size(30);
    }
    .t3 {
      font-size: size(30);margin:size(83) auto size(70) auto;
    }
  }
}
.style{
    position: absolute;
    right:0;
    width: size(516);
    top: size(250);
    img{width: 100%;mix-blend-mode: multiply;
    &:last-child{
      position: absolute;top:0;left: 0;mix-blend-mode: normal;
    }
    }

}
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {

    .t {
      padding-top: sizem(60);
      .logo{width:sizem(237);margin:sizem(50) auto sizem(77) auto;}
      .t2 {
      font-size: sizem(14);margin-bottom:sizem(77);
    }
    .t4{font-size: sizem(20);margin: 1em 0 3em 0;}
    
    }
  }
}


</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
const splide = ref()
const imgs = [
  {
    img: new URL("../section/s5/1.jpg", import.meta.url).href,
    caption: "都會公園",
  },
  {
    img: new URL("../section/s5/2.jpg", import.meta.url).href,
    caption: "都會公園",
  },
  {
    img: new URL("../section/s5/3.jpg", import.meta.url).href,
    caption: "都會公園",
  },
]
</script>
