<template>
  <article class="s5">
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
      <img class="t6" src="@/section/s5/t6.png" alt="" srcset=""  data-aos="fade-up" data-aos-delay="0"/>
      <img class="en" src="@/section/s5/en.png" alt="" srcset="" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s5 {
  @apply w-full relative text-[#36677F];
  @apply flex items-start justify-center;
  height: size(1214);
  background-image: url("@/section/s5/bg.jpg");
  padding-top: size(133);
  padding-left: size(50);
  .line {
    @apply absolute w-[1px] bg-white z-20;
    left: size(180);
    top: 0;
    height: size(170);
  }

  .t {
    @apply flex flex-col items-end;
    > div {
      &:nth-child(1) {
        @apply flex items-center;
        gap: size(181);
      }
      &:nth-child(2) {
        @apply flex items-center;
        gap: size(42.76);
        margin-top: size(113);
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
