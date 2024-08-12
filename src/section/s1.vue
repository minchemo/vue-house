<template>
  <article class="s1">
    <!-- text -->
    <div class="text">
      <div class="t-en">
        <img class="en" v-if="!isMobile" src="@/section/s1/en.png" alt="" srcset="" data-aos="fade-right" data-aos-delay="0" />
        <img class="en" v-else src="@/section/s1/enm.png" alt="" srcset="" data-aos="fade-right" data-aos-delay="0" />
        <div class="line" data-aos="fade-right" data-aos-delay="200"></div>
      </div>
      <div class="t">
        <div class="l">
          <img class="t1" data-aos="fade-up" data-aos-delay="0" src="@/section/s1/t1.png" alt="" srcset="" />
          <img class="t2" data-aos="fade-right" data-aos-delay="200" src="@/section/s1/t2.png" alt="" srcset="" />
        </div>
        <div class="r">
          <div class="ll">
            <img class="t3"  data-aos="fade-right" data-aos-delay="400" src="@/section/s1/t3.png" alt="" srcset="" />
            <img
              class="t4"
              v-if="!isMobile"
              src="@/section/s1/t4.svg"
              alt=""
              srcset=""
               data-aos="fade-up" data-aos-delay="500"
            />
            <img
              class="t4"
              v-else
              src="@/section/s1/t4.svg"
              alt=""
              srcset=""
               data-aos="fade-up" data-aos-delay="500"
            />
          </div>
          <div class="rr">
            <img class="t5" data-aos="fade-right" data-aos-delay="600" src="@/section/s1/t5.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>

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
        src="@/section/s1/bg_t.webp"
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
      <img class="t6" src="@/section/s1/t6.png" alt="" srcset="" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply w-full relative;
  height: size(1904);
  padding-top: size(89);

  .text {
    @apply relative z-[1] w-full h-full top-0 left-0;
    @apply flex flex-col items-center;
    gap: size(113);
    .t-en {
      @apply flex items-end;
      gap: size(42);
      width: size(1631);
      .en {
        width: size(200);
      }
      .line {
        @apply bg-white h-[1px] w-0;
        animation: grow 1.8s forwards ease-in-out;

        @keyframes grow {
          to {
            @apply w-full;
          }
        }
      }
    }
    .t {
      @apply relative;
      @apply flex justify-center items-start;
      gap: size(88.44);

      .l {
        @apply flex items-start;
        gap: size(87.92);
        .t1 {
          width: size(368);
        }
        .t2 {
          width: size(297.5);
        }
      }
      .r {
        @apply flex items-start;
        gap: size(43.89);
        .ll {
          @apply flex flex-col items-end;
          gap: size(40.78);
          .t3 {
            width: size(674.11);
          }
          .t4 {
            width: size(259);
          }
        }
        .rr {
          .t5 {
            width: size(95);
          }
        }
      }
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
        width: size(1920);
        height: size(1264);
        > div {
          @apply w-full h-full absolute left-0 bottom-0;
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
        @apply z-10 ;
        bottom: 0;
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
  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(667);
    max-height: sizem(667);
    padding-top: sizem(23);

    .text {
      @apply relative z-[1] w-full h-full top-0 left-0;
      @apply flex flex-col items-center;
      gap: sizem(48);
      .t-en {
        @apply flex-col items-center;
        gap: sizem(21);
        width: sizem(267);
        .en {
          width: sizem(117);
        }
        .line {
          @apply bg-white h-[1px] w-0;
          animation: grow 1.8s forwards ease-in-out;

          @keyframes grow {
            to {
              @apply w-full;
            }
          }
        }
      }
      .t {
        @apply relative;
        @apply flex-col;
        gap: sizem(46);

        .l {
          @apply flex items-start;
          gap: sizem(19);
          .t1 {
            width: sizem(133);
          }
          .t2 {
            width: sizem(115);
          }
        }
        .r {
          @apply flex items-center;
          gap: sizem(16.78);
          .ll {
            @apply flex flex-col items-end;
            gap: size(40.78);
            .t3 {
              width: sizem(227);
            }
            .t4 {
              width: sizem(80);
            }
          }
          .rr {
            .t5 {
              width: sizem(31);
            }
          }
        }
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
          width: sizem(375);
          height: sizem(248);
          &.w {
            background: url("@/section/s1/bgm.jpg");
            background-size: cover;
          }
        }

        &.bg-b {
          bottom: sizem(-35);
        }
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
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
