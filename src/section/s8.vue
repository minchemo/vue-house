<template>
  <article class="s8">
    <img
      class="bg"
      src="@/section/s8/bg.png" alt="bg" v-if="!$isMobile()"
    />
    <img
      class="bg"
      src="@/section/s8/bgm.png" alt="bg" v-else
    />
    <img
      class="coff"
      src="@/section/s8/coff.png" alt="coff"
    />

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
    <div
      class="building"
      data-aos="LTS"
      data-aos-duration="3000"
      data-aos-delay="200"
    ></div>
    <div class="caption">
      本外觀合成圖僅供參考，外觀及環境以核准之使用執照竣工圖及實際現場為準。
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  @apply w-full relative bg-cover;
  height: size(1935);
.bg{position: absolute;top: 0;left: 0;width: 100%;z-index:3;
  user-select: none;
  pointer-events: none;}

  .coff{position: absolute;top:size(-110);left:size(-55);;width: size(680);z-index:5;
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
    @apply relative w-full bg-cover bg-center;
  //  background-image: url("@/section/s8/building.jpg");
    height: size(1242);
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
    height: sizem(710);
  .coff{top:sizem(-20);left:sizem(-50);;width: sizem(260)}

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
    // background-image: url("@/section/s8/building.jpg");
      height: sizem(287);
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
