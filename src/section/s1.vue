<template>
  <article class="s1">
    <div class="t">
      <img class="t1" src="@/section/s1/slogo.svg" alt="長磯藏筑2" srcset="" />
      <img
        v-if="!isMobile"
        class="t2"
        src="@/section/s1/logo.svg"
        alt="長磯藏筑2"
        srcset=""
        data-aos="fade-up"
      />
      <img
        v-else
        class="t2"
        src="@/section/s1/logom.svg"
        alt="長磯藏筑2"
        srcset=""
        data-aos="fade-up"
      />
      <img
        v-if="!isMobile"
        class="t3"
        src="@/section/s1/text.svg"
        alt="長磯藏筑2"
        srcset=""
      />
      <img
        v-else
        class="t3"
        src="@/section/s1/textm.svg"
        alt="長磯藏筑2"
        srcset=""
      />
    </div>
    <img
      v-if="!isMobile"
      class="en"
      src="@/section/s1/en.png"
      alt="長磯藏筑2"
      srcset=""
    />
    <img
      v-else
      class="en"
      src="@/section/s1/enm.png"
      alt="長磯藏筑2"
      srcset=""
    />
    <img
      class="two"
      src="@/section/s1/2.svg"
      alt="長磯藏筑2"
      srcset=""
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="800"
    />
    <div class="fade-group">
      <img
        class="f1"
        src="@/section/s1/fade.svg"
        alt="長磯藏筑2"
        srcset=""
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1200"
      />
      <img
        class="f2"
        src="@/section/s1/fade.svg"
        alt="長磯藏筑2"
        srcset=""
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1400"
      />
      <img
        class="f3"
        src="@/section/s1/fade.svg"
        alt="長磯藏筑2"
        srcset=""
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1600"
      />
      <img
        v-if="!isMobile"
        class="f4"
        src="@/section/s1/fade.svg"
        alt="長磯藏筑2"
        srcset=""
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1800"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply relative w-full max-h-screen;
  @apply flex flex-col items-center justify-center;
  @apply bg-center bg-cover;
  height: size(1080);
  background-image: url("@/section/s1/bg.webp");

  .t {
    @apply flex flex-col items-center select-none pointer-events-none;
    
    .t1 {
      width: size(443);
      margin-bottom: size(43);
    }
    .t2 {
      width: size(889.53);
      margin-bottom: size(62);
    }
    .t3 {
      width: size(853);
    }
  }

  .fade-group {
    @apply absolute w-full h-full left-0 top-0 select-none pointer-events-none;
    img {
      @apply absolute;
      width: size(125.67);
      &.f1 {
        left: size(280);
        top: size(165);
      }
      &.f2 {
        left: size(1648);
        top: size(298.3);
      }
      &.f3 {
        left: size(408.8);
        top: size(337.8);
      }
      &.f4 {
        left: size(1485.3);
        top: size(630);
      }
    }
  }

  .two {
    @apply absolute select-none pointer-events-none;
    width: size(712.18);
    left: -#{size(262)};
    bottom: -#{size(365.45)};
  }

  .en {
    @apply absolute select-none pointer-events-none;
    @apply left-1/2 -translate-x-1/2;
    bottom: size(45.8);
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    @apply relative w-full max-h-screen;
    @apply flex flex-col items-center justify-start;
    padding-top: sizem(123);
    height: sizem(610);
    

    .t {
      @apply flex flex-col items-center select-none pointer-events-none;
      margin-top: sizem(-50);
      .t1 {
        width: sizem(253.77);
        margin-bottom: sizem(25);
      }
      .t2 {
        width: sizem(256.2);
        margin-bottom: sizem(44.5);
      }
      .t3 {
        width: sizem(313);
      }
    }

    .fade-group {
      @apply absolute w-full h-full left-0 top-0 select-none pointer-events-none;
      img {
        @apply absolute;
        width: sizem(62.38);
        &.f1 {
          left: sizem(79.6);
          top: sizem(39);
        }
        &.f2 {
          left: -#{sizem(30.32)};
          top: sizem(367);
        }
        &.f3 {
          left: sizem(261);
          top: sizem(589.7);
        }
      }
    }

    .two {
      @apply absolute select-none pointer-events-none;
      width: sizem(418.13);
      left: -#{sizem(177)};
      bottom: -#{sizem(173.54)};
    }

    .en {
      @apply absolute select-none pointer-events-none;
      @apply left-1/2 -translate-x-1/2;
      bottom: sizem(45.8);
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
