<template>
  <article class="s10">
    <div class="slide-box">
      <div class="t">
        <div class="t1">
          <img src="@/section/resource/s9title.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0" />
          <p data-aos="fade-up" data-aos-delay="200">建築與天空對話</p>
        </div>
        <div class="divi"></div>
        <div class="desc" data-aos="fade-up" data-aos-delay="400">
          主體建築從基座之上退縮並向上延伸， 增強建築本身的立體層次，並透過建築
          物左右兩側的線條元素創造律動感，讓 視覺導引目光向上移動；不僅為建築帶
          來動感和光影變化，也在視覺上創造更 多現代感，猶如建築物與天空對話。
        </div>
      </div>
    </div>
    <div class="caption">建築3D立面情境圖</div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  @apply w-full relative z-10;
  @apply flex justify-end items-center;
  height: size(1080);
  background: url("@/section/s10/bg.jpg");
  background-size: cover;
  padding-right: size(80);

  .slide-box {
    @apply flex flex-row-reverse items-start relative z-10;

    .t {
      @apply flex flex-col text-black;
      gap: size(15);
      width: size(718);
      .t1 {
        @apply flex items-end justify-between;
        margin-bottom: size(15);
        img {
          width: size(364.95);
        }
        p {
          font-size: size(32);
          font-weight: 500;
          letter-spacing: size(1.92);
        }
      }
      .divi {
        @apply bg-black;
        height: 1px;
      }
      .desc {
        font-size: size(24);
        font-weight: 500;
        line-height: size(39);
        letter-spacing: size(0.72);
      }
    }
  }

  .caption {
    @apply text-white absolute;
    left: size(20);
    bottom: size(14);
    font-size: size(20);
    font-weight: 500;
    line-height: size(39);
    letter-spacing: size(1.2);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s10 {
    @apply w-full relative z-10;
    @apply flex justify-end items-start;
    height: sizem(760);
    background: url("@/section/s10/bgm.jpg");
    background-size: cover;
    padding-right: unset;
    padding: 0 sizem(32.5);
    padding-top: sizem(140);

    .slide-box {
      @apply flex flex-row-reverse items-start relative z-10;

      .t {
        @apply flex flex-col text-black;
        gap: sizem(24);
        width: 100%;
        .t1 {
          @apply flex items-end justify-between;
          margin-bottom: 0;
          img {
            width: sizem(136);
          }
          p {
            font-size: sizem(14);
            line-height: 170%;
            letter-spacing: sizem(0.42);
          }
        }
        .desc {
          font-size: sizem(14);
          line-height: 170%;
          letter-spacing: sizem(0.42);
        }
      }
    }

    .caption {
      @apply text-white absolute;
      left: sizem(20);
      bottom: sizem(8);
      font-size: sizem(14);
      line-height: 170%;
      letter-spacing: sizem(0.42);
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
