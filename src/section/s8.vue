<template>
  <article class="s8">
    <div class="ink0 absolute">
    <img
      src="./s1/ink2.png" alt="ink"
    />
  </div>
    <div class="inkbg absolute">
    <div
      class="ink1 absolute">
    <img
      src="./s1/ink3.png" alt="ink"
    />
  </div>
    <div
      class="ink2 absolute" data-aos="fade" data-aos-delay="0">
    <img
      src="./s1/ink3.png" alt="ink"
    />
  </div>
    <div
      class="ink3 absolute" v-if="!$isMobile()">
    <img
      src="./s1/ink3.png" alt="ink"
    />
  </div>
  <div
      class="ink4 absolute" data-aos="fade" data-aos-delay="200" v-if="!$isMobile()">
    <img
      src="./s1/ink5.png" alt="ink"
    />
  </div>

    </div>

    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        水墨繪地景 <br v-if="isMobile" />雋永的建築藝術
      </div>
      <div class="t2" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0">
        真正動人的建築，是一份來自內心的澄澈清明<br />
        石材與格柵的虛實相生，輕重諧和<br />
        透過俐落的線條，內斂的建築原色<br />
        為建築本體注入東方人文風的含蓄本質<br />
        彷如水墨揮灑在城市的畫布之上<br />
        在蔚藍的天空下，展現空靈與意境<br />
        這是一份力透紙背的精工感動，在內斂中更顯雍容品味
      </div>
      <div class="t2" v-else data-aos="fade-up" data-aos-delay="0">
        真正動人的建築，是一份來自內心的澄澈清明<br />
        石材與格柵的虛實相生，輕重諧和<br />
        透過俐落的線條，內斂的建築原色<br />
        為建築本體注入東方人文風的含蓄本質<br />
        彷如水墨揮灑在城市的畫布之上<br />
        在蔚藍的天空下，展現空靈與意境<br />
        這是一份力透紙背的精工感動<br />
        在內斂中更顯雍容品味
      </div>
    </div>
    <!-- 
    <div
      class="building"
      data-aos="LTS"
      data-aos-duration="3000"
      data-aos-delay="200"
    ></div> -->
    <div
      class="building"
    ></div>
    <img  class="inkbottom absolute"
      src="./s8/bottom.png" alt="ink"
    />
    <div class="caption">
      本外觀合成圖僅供參考，外觀及環境以核准之使用執照竣工圖及實際現場為準。
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  @apply w-full relative bg-cover;
  //height: size(1935);
.bg{position: absolute;top: 0;left: 0;width: 100%;z-index:3;opacity:.3;
  user-select: none;
  pointer-events: none;}
  
.inkbg{top: 0;left: 0;width: 100%;z-index:5;
  user-select: none;
  pointer-events: none;

}
  .ink0{top: size(-375);left:size(-185);width:size(2100);height:size(1250);z-index: 1;
   img{width: 100%;height: 100%;
    transform: rotate(-15deg);
    filter: invert(23%) sepia(14%) saturate(6770%) hue-rotate(189deg) brightness(94%) contrast(89%);
   }
   &::after{content: "";position: absolute;
    top: 28vw;
    left: 47vw;display: block;background: #164E87;
    width: 7vw;
    height: 3vw;z-index:10;}
  }
.ink1{top: size(290);left:size(-570);width:size(1280);height:size(310);
    transform: translate(-10%,-10%);
   img{width: 100%;height: 100%;
    transform: rotate(19.5deg);
   filter:invert(91%) sepia(67%) saturate(3215%) hue-rotate(294deg) brightness(100%) contrast(91%);}
  }
  .ink2{top: size(-77);left:size(-10);width:size(710);height:size(240);
    transform: translate(-10%,-10%);
    img{width: 100%;height: 100%;
      transform: perspective(5vw)rotate(0deg)rotateX(-7deg)rotateY(3deg);
      filter:invert(79%) sepia(17%) saturate(537%) hue-rotate(358deg) brightness(98%) contrast(89%);}
  }
  .ink3{top: size(457);right:size(-350);width:size(760);height:size(215);
    transform: translate(-10%,-10%);
    img{width: 100%;height: 100%;transform: rotate(8deg);filter:invert(79%) sepia(17%) saturate(537%) hue-rotate(358deg) brightness(98%) contrast(89%);}
  }
  .ink4{top: size(413);right:size(-1053);width:size(1760);
    img{width: 100%;}
  }
.inkbottom{bottom: 0;left: 0;width: 100%;z-index:11;transform: translateY(100%);
  user-select: none;
  pointer-events: none;}

  .t {
    @apply relative w-full bg-cover text-white text-center;
    @apply flex flex-col items-center justify-center;
    @apply z-10;
    gap: size(65);
   // height: size(693);
  //  background-image: url("@/section/s8/bg.jpg");
    .t1 {
    margin:size(190) auto 0;
      font-size: size(40);
      font-weight: 700;
      letter-spacing: size(8);
    }
    .t2 {
      font-size: size(20);
      font-weight: 400;
      line-height: 260%;
      letter-spacing: size(4);
    }
  }
  .building {
    @apply relative w-full z-[4];
    margin-top:size(-120);
    background: #164E87 no-repeat;
    background-image: url("@/section/s8/building.webp");
    background-size: 100% auto;
    background-position: 50% 100%;
    height: size(1360); // opacity: .7;
    &::after,
    &::before{content: "";width: 100%;left: 0;position: absolute;display: block;}
    &::before{top: 0;height: size(290);background-image:linear-gradient(180deg, #164E87 45%, #164E8700 100%);}
    &::after{bottom: 0;height: 3vw;background-image:linear-gradient(0deg, #005350 0%, #00535000 100%);}
      }
  .caption {
    @apply absolute z-10;
    left: size(10);
    bottom: size(20);
    @apply text-white;
    font-size: size(12);
    font-weight: 400;
    letter-spacing: size(2.4);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s8 {

  .ink0{top: sizem(-38);left:sizem(-432);width:sizem(950);height:sizem(566);z-index: 1;
   img{
    transform: rotate(-15deg);
   }
   &::after{display: none;}
  }


  .ink1{top: sizem(310);left: auto;
    right:sizem(-220);width:sizem(320);height:sizem(65);
   img{
    transform: rotate(-50deg);
  }
  }
  
  .ink2{top: sizem(-8);left:sizem(-55);width:sizem(250);height:sizem(80);
    img{
      transform: rotate(10deg)}
  }


    .t {
      @apply relative w-full bg-cover text-center;
      @apply flex flex-col items-center justify-center;
      @apply z-10;
      gap: sizem(21);
      height: sizem(423);
    //  background-image: url("@/section/s8/bgm.jpg");
      padding: 0 sizem(21);
      .t1 {
        margin:sizem(70) auto 0;
        font-size: sizem(25);
        letter-spacing: sizem(5);
      }
      .t2 {
        @apply whitespace-nowrap;
        font-size: sizem(14);
        line-height: 1.8;
        letter-spacing: 0.1em;
      }
    }
    .building {
      height: sizem(330);
      margin-top:sizem(-50);
      background-size: 120% auto;
      &::before{height: sizem(85);}
      &::after{height: 7vw;}
    }
    .caption {
      @apply absolute z-10 w-full;
      @apply flex items-end justify-center;
      padding-bottom: sizem(5.5);
      left: 0;
      bottom: 0;
      height: sizem(56.5);
      font-size: sizem(8);
      font-weight: 400;
      letter-spacing: sizem(1.6);
      /*
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 59%,
        rgba(0, 0, 0, 0.5) 100%
      );
      */
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())
</script>
