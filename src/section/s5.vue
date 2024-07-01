<template>
  <article class="s5">
    <!-- bg -->
    <div class="bgs">
      <div class="bg bg-w">
        <div class="wave"></div>
        <div class="w"></div>
        <img class="cloud" src="@/section/s1/cloud.gif" alt="" srcset="" />
      </div>
      <img
        class="bg bg-t"
        v-if="!isMobile"
        src="@/section/s5/bg_t.webp"
        alt=""
        srcset=""
      />
      <img
        class="bg bg-t"
        v-else
        src="@/section/s1/bg_tm.webp"
        alt=""
        srcset=""
      />
      <img
        class="bg bg-b"
        v-if="!isMobile"
        src="@/section/s1/bg_b.webp"
        alt=""
        srcset=""
      />
      <img
        class="bg bg-b"
        v-else
        src="@/section/s1/bg_bm.webp"
        alt=""
        srcset=""
      />
    </div>
    <div class="t">
      <div>
        <div class="t1" v-if="isMobile"  data-aos="fade-up" data-aos-delay="0">壹遇敦南, 壹念四維</div>
        <div class="t1" v-else  data-aos="fade-up" data-aos-delay="0">壹遇敦南，壹念四維</div>
        <div class="t2">
          <img v-if="isMobile" src="@/section/s5/t2m.png" alt="" srcset=""  data-aos="fade-up" data-aos-delay="0"/>
          <img v-else src="@/section/s5/t2.png" alt="" srcset=""  data-aos="fade-up" data-aos-delay="0"/>
        </div>
      </div>
      <div>
        <img class="t3" src="@/section/s5/t3.png" alt="" srcset=""  data-aos="fade-right" data-aos-delay="0"/>
        <img class="t4" src="@/section/s5/t4.png" alt="" srcset=""  data-aos="fade-right" data-aos-delay="200"/>
        <img class="t5" src="@/section/s5/t5.png" alt="" srcset=""  data-aos="fade-right" data-aos-delay="400"/>
      </div>
      <img class="t6" src="@/section/s5/t6.webp" alt="" srcset=""  data-aos="fade-up" data-aos-delay="0"/>
      <img class="en" src="@/section/s5/en.svg" alt="" srcset="" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s5 {
  @apply w-full relative text-[#36677F];
  @apply flex items-start justify-center;
  height: size(1304);
  background-image: url("@/section/s5/bg.jpg");
  padding-top: size(133);
  padding-left: size(50);
  overflow: hidden;
  .line {
    @apply absolute w-[1px] bg-white z-20;
    left: size(180);
    top: 0;
    height: size(170);
  }

  .t {
    @apply flex flex-col items-end;
    margin-top: size(54);
    > div {
      &:nth-child(1) {
        @apply flex items-center;
        gap: size(181);
      }
      &:nth-child(2) {
        @apply flex items-center;
        gap: size(45);
        margin-top: size(100);
        margin-bottom: size(48.84);
      }

      .t1 {
        font-size: size(48);
        font-weight: 700;
      }
      .t2 {
        @apply relative;
        width: size(912);
        img {
          @apply w-full;
        }
        &::after {
          @apply w-full h-[1px] bg-white absolute;
          left: 0;
          top: -#{size(60)};
          content: "";
        }
        &::before {
          @apply w-full h-[1px] bg-white absolute;
          left: 0;
          bottom: -#{size(60)};
          content: "";
        }
      }
      .t3 {
        width: size(162);
      }
      .t4 {
        width: size(413);
      }
      .t5 {
        width: size(97.28);
      }
    }
    .t6 {
      width: size(480);
    }
    .en {
      margin-top: size(121.57);
      width: size(257);
      z-index: 3;
    }
  }
  .bgs {
    @apply w-full h-full absolute z-0;
    top: 0;
    left: 0;
    img {
      @apply w-full h-auto;
    }

    .bg {
      @apply absolute;

      &.bg-t {
        @apply z-10 top-0;
       // top: 62px;
      }

      &.bg-w {
        @apply z-[1] bottom-0;
        width: size(1920);
        height: size(1264);
        > div {
          @apply w-full h-full absolute left-0 bottom-0;
          bottom: size(-210);
          &.wave {
            @apply z-[1];
            background: url("@/section/s1/wave.gif") no-repeat;
            background-size:200% 30vw;
            background-position: 50% 35vw;
            mix-blend-mode: overlay;
            opacity: 0.6;
          }
          &.w {
            background: url("@/section/s1/bg.jpg");
            background-size: cover;
          }
        }
        .cloud{position:absolute;width: 100%;top:0 ;
            mix-blend-mode: overlay;}
      }

      &.bg-ww {
        @apply z-[2] bottom-0;
      }

      &.bg-b {
        @apply z-10 bottom-0;
      }
    }
    .t6 {
      @apply absolute z-10;
      right: size(200);
      bottom: size(211);
      width: size(406);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s5 {
    height: sizem(539);
    background-image: url("@/section/s5/bgm.jpg");
    padding-top: sizem(56);
    padding-left: size(50);
    background-size: cover;
    .line {
      @apply absolute w-[1px] bg-white z-20;
      left: size(180);
      top: 0;
      height: size(170);
    }

    .t {
      @apply flex flex-col items-center;
      > div {
        &:nth-child(1) {
          @apply flex flex-col items-center;
          gap: sizem(56.42);
        }
        &:nth-child(2) {
          @apply flex items-center;
          gap: sizem(14.89);
          margin-top: 0;
          margin-bottom: sizem(17);
        }

        .t1 {
          @apply relative;
          font-size: sizem(18);
          font-weight: 700;
          &::after {
            @apply h-[1px] left-1/2 -translate-x-1/2 bg-white absolute;
            width: sizem(266);
            top: -#{sizem(26)};
            content: "";
          }
        }
        .t2 {
          @apply relative;
          width: sizem(175.99);
          margin-bottom: sizem(54.99);
          img {
            @apply w-full;
          }
          &::after {
            @apply h-[1px] left-1/2 -translate-x-1/2;
            width: sizem(266);
            top: -#{sizem(26)};
            content: "";
          }
          &::before {
            @apply h-[1px] left-1/2 -translate-x-1/2;
            width: sizem(266);
            bottom: -#{sizem(26)};
            content: "";
          }
        }
        .t3 {
          width: sizem(56.47);
        }
        .t4 {
          width: sizem(144);
        }
        .t5 {
          width: sizem(33.86);
        }
      }
      .t6 {
        @apply self-end;
        width: sizem(166.9);
      }
      .en {
        margin-top: size(121.57);
        width: size(257);
      }
    }
    .bgs {
      @apply w-full h-full absolute z-0;
      top: 0;
      left: 0;
      img {
        @apply w-full h-auto;
      }

      .bg {
        @apply absolute;

        &.bg-t {
          @apply z-10 top-0;
        }

        &.bg-w {
          @apply z-[1] bottom-0;
          width: sizem(375);
          height: sizem(248);
          &.w {
            background: url("@/section/s1/bgm.jpg");
            background-size: cover;
          }
        }
      }

      &.bg-ww {
        @apply z-[2] bottom-0;
      }

      &.bg-b {
        @apply z-10 bottom-0;
      }
      .t6 {
        right: sizem(23.84);
        bottom: sizem(60);
        width: sizem(115);
      }
    }
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
