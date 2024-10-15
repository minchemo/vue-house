<template>
  <article class="s7" data-aos="bright" data-aos-duration="2000" data-aos-delay="500">
    <div class="t">
      <img loading="lazy"  class="t1" src="@/section/s7/title.svg" alt="" srcset="" />
      <div class="t2">SCDA全球知名作品</div>
    </div>
    <div class="box">
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${img1})` }"></div>
        <div class="caption"  data-aos="fade-up" data-aos-delay="0">New York | Soori Highline</div>
      </div>
    </div>
    <div class="box">
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${img2})` }"></div>
        <div class="caption"  data-aos="fade-up" data-aos-delay="200">NewYork | 118 East 59</div>
      </div>
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${img3})` }"></div>
        <div class="caption" data-aos="fade-up" data-aos-delay="400">Singapore | 21 ANGULLIA PARK</div>
      </div>
      <template v-if="!isMobile">
        <div class="item">
          <div class="img" :style="{ backgroundImage: `url(${img4})` }"></div>
          <div class="caption" data-aos="fade-up" data-aos-delay="600">Singapore | THE MARQ</div>
        </div>
        <div class="item">
          <div class="img" :style="{ backgroundImage: `url(${img5})` }"></div>
          <div class="caption" data-aos="fade-up" data-aos-delay="800">China | The Sanya Edition</div>
        </div>
      </template>
    </div>
    <div class="box" v-if="isMobile">
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${img4})` }"></div>
        <div class="caption" data-aos="fade-up" data-aos-delay="600">Singapore | THE MARQ</div>
      </div>
      <div class="item">
        <div class="img" :style="{ backgroundImage: `url(${img5})` }"></div>
        <div class="caption" data-aos="fade-up" data-aos-delay="800">China | The Sanya Edition</div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  @apply relative w-full bg-black;
  height: size(1690);
  padding: 0 size(132.5);
  padding-top: size(145);
  .t {
    @apply flex flex-col items-start;
    margin-bottom: size(90);
    .t1 {
      @apply mx-[unset];
      width: size(658.81);
    }
    .t2 {
      @apply text-white;
      font-size: size(40);
      font-weight: 400;
      line-height: 170%;
      letter-spacing: size(2.4);
    }
  }
  .box {
    @apply flex;
    .item {
      @apply grow;
      .img {
        @apply bg-center transition-all duration-500 origin-center;
        aspect-ratio: 1655 / 703;
        background-size: 100.5%; // 避免白邊
        &:hover {
          background-size: 110%;
        }
      }
      .caption {
        color: #fff;
        text-align: right;
        font-size: size(25);
        font-weight: 400;
        line-height: 220%;
        margin-top: size(8);
      }
    }
    &:nth-child(3) {
      margin-top: size(30);
      gap: size(31.6);
      .item {
        @apply flex-1;
        .img {
          aspect-ratio: 390 / 437;
          width: 100%;
        }
      }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s7 {
    @apply relative w-full bg-black;
    height: sizem(652);
    padding: 0 sizem(42.5);
    padding-top: sizem(50.41);
    .t {
      @apply flex flex-col items-center;
      margin-bottom: size(90);
      .t1 {
        @apply mx-[unset];
        width: sizem(249);
      }
      .t2 {
        @apply text-white;
        font-size: sizem(15);
        font-weight: 400;
        line-height: 170%;
        letter-spacing: sizem(0.9);
      }
    }
    .box {
      @apply flex;
      .item {
        @apply grow;
        .img {
          @apply bg-center transition-all duration-500 origin-center;
          aspect-ratio: 290 / 124;
          background-size: 100.5%; // 避免白邊
          &:hover {
            background-size: 110%;
          }
        }
        .caption {
          font-size: sizem(9);
          font-weight: 400;
          line-height: 220%;
          margin-top: 0;
        }
      }
      &:nth-child(3),
      &:last-child {
        margin-top: sizem(5);
        gap: sizem(14.9);
        .item {
          @apply flex-1;
          .img {
            aspect-ratio: 137.5 / 154.1;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
<script setup>
import img1 from "@/section/s7/1.webp"
import img2 from "@/section/s7/2.webp"
import img3 from "@/section/s7/3.webp"
import img4 from "@/section/s7/4.webp"
import img5 from "@/section/s7/5.webp"

import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
