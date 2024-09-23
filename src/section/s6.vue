<template>
  <article class="s6">
    <div class="t">
      <div class="t1"  data-aos="fade-up" data-aos-delay="0">興富謙建設<br />謹慎而謙卑的構築美學</div>
      <div class="t2"  data-aos="fade-up" data-aos-delay="200">
        本於對建築熱愛的初心，營造工務起家，三十多年建築經驗，重視實事求是的態度。<br />
        2004年成立「興富晟建設」，2009年以「興富謙建設」奠定實績口碑，
        不追求省下多少成本，只講究建築細節的根本。<br />「興富謙建設」深諳，成就好建築的關鍵是細節，細節的養成則秉於匠心。親身參與每棟建築規劃設計，著重空間與尺度的人性需求，<br />以居住者的角度不斷進行沙盤推演，用心態度深獲住戶的信賴與引薦。
      </div>
    </div>
    <div class="viewbox">
      <fullview />
    </div>
    <img
      class="tree"
      v-if="!isMobile"
      src="@/section/s6/tree.webp"
      alt=""
      srcset=""
    />
    <img class="tree" v-else src="@/section/s6/treem.webp" alt="" srcset="" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
.s6 {
  @apply w-full relative;
  height: auto;

  .t {
    @apply flex flex-col items-center;
    @apply z-[1] relative text-center;
    @apply bg-[#8FC31F] font-['Noto_Serif_TC'];
    @apply text-white;
    height: size(394);
    padding-top: size(106);
    .t1 {
      font-weight: 600;
      font-size: size(36);
      margin-bottom: size(27);
    }
    .t2 {
      font-weight: 300;
      font-size: size(16);
    }
  }

  .tree {
    @apply absolute pointer-events-none top-0 z-10;
    width: size(814.8);
    left: -#{size(33)};
    animation: a1 3s ease-in-out infinite alternate-reverse;
    transform-origin: top left;

    @keyframes a1 {
      to {
        transform: skewX(6deg);
      }
    }
  }

  .viewbox {
    @apply w-full relative z-0;
    @apply left-0 top-0;
    height: size(931);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s6 {
    @apply w-full relative;
    height: auto;

    .t {
      @apply flex flex-col items-center;
      @apply z-[1] relative text-left;
      @apply bg-[#8FC31F] font-['Noto_Serif_TC'];
      @apply text-white;
      height: auto;
      padding: 0 sizem(30);
      padding-bottom: sizem(40);
      padding-top: sizem(165);
      .t1 {
        @apply text-center;
        font-weight: 600;
        font-size: sizem(25);
        margin-bottom: sizem(20);
      }
      .t2 {
        font-weight: 300;
        font-size: sizem(13);
      }
    }

    .tree {
      @apply absolute pointer-events-none top-0 z-10;
      width: 90%;
      left: 0;
      animation: a1 3s ease-in-out infinite alternate-reverse;
      transform-origin: top left;

      @keyframes a1 {
        to {
          transform: skewX(-2deg);
        }
      }
    }

    .viewbox {
      height: sizem(533);
    }
  }
}
</style>

<script setup>
import fullview from "@/components/fullview2.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
