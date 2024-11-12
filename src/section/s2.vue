<template>
  <article class="s2 anchor1">
    <div class="t1">佔地高雄主場 連結橋科台積</div>
    <div class="map">
      <img v-if="!isMobile" src="@/section/s2/map.png" alt="" srcset="" />
      <Fullview v-else />
    </div>
    <div
      class="t1 anchor2"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      橋科富墅 四大天王
    </div>
    <div class="icons">
      <div
        class="icon"
        v-for="(icon, i) in icons"
        :key="i"
        data-aos="fade-up"
        :data-aos-delay="i * 200"
      >
        <div class="title">{{ icon.title }}</div>
        <div class="content">{{ icon.content }}</div>
        <img :src="icon.icon" alt="" srcset="" />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply relative w-full;
  @apply flex flex-col items-center justify-center;
  @apply bg-cover bg-bottom;
  height: size(2160);
  background-image: url("@/section/s2/bg.jpg");

  .map {
    @apply relative bg-white/50;
    width: size(1387);
    margin-bottom: size(50);
    img {
      @apply w-full;
    }
  }

  .t1 {
    @apply text-black;
    font-size: size(54);
    font-weight: 600;
    margin-bottom: size(22);
  }

  .icons {
    @apply flex items-start;
    @apply font-['Noto_Sans_TC'];
    gap: size(107);
    margin-top: size(25);
    .icon {
      @apply flex flex-col items-center justify-center;
      width: size(220);

      .title {
        @apply w-full bg-[#523828BA]/70 text-white;
        @apply text-center;
        height: size(50);
        border-radius: size(10);
        font-size: size(31);
        font-weight: 500;
        letter-spacing: size(3.1);
        line-height: size(50);
        margin-bottom: size(20);
      }
      .content {
        @apply text-black text-left;
        font-size: size(20);
        font-weight: 500;
        letter-spacing: size(2);
        margin-bottom: size(32);
      }
      img {
        @apply w-[95%];
      }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s2 {
    @apply relative w-full;
    @apply flex flex-col items-center justify-start;
    @apply bg-cover bg-bottom;
    height: sizem(1481);
    background-image: url("@/section/s2/bgm.jpg");
    padding-top: sizem(60);

    .map {
      @apply relative bg-transparent;
      width: 100%;
      height: sizem(634);
      margin-bottom: sizem(76);
      img {
        @apply w-auto;
      }
    }

    .t1 {
      @apply text-black;
      font-size: sizem(25);
      font-weight: 600;
      margin-bottom: sizem(10);
    }

    .icons {
      @apply grid grid-cols-2 items-start;
      gap: sizem(33.6);
      margin-top: sizem(20);
      .icon {
        @apply flex flex-col items-center justify-center;
        width: sizem(140);

        .title {
          @apply w-full bg-[#523828BA]/70 text-white;
          @apply text-center;
          height: sizem(25.79);
          border-radius: sizem(10);
          font-size: sizem(17);
          font-weight: 500;
          letter-spacing: sizem(1.7);
          line-height: sizem(25.79);
          margin-bottom: sizem(11);
        }
        .content {
          @apply text-black text-left;
          font-size: sizem(14);
          font-weight: 500;
          letter-spacing: sizem(1);
          margin-bottom: sizem(16);
        }
        img {
          @apply w-[80%];
        }
      }
    }
  }
}
</style>

<script setup>
import icon1 from "@/section/s2/i1.png"
import icon2 from "@/section/s2/i2.png"
import icon3 from "@/section/s2/i3.png"
import icon4 from "@/section/s2/i4.png"

import { computed, getCurrentInstance } from "vue"
import Fullview from "@/components/fullview.vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const icons = [
  {
    title: "雙強品牌",
    content: "禾森事業X永盈建設，雙品牌實力聯手",
    icon: icon1,
  },
  {
    title: "三大科技",
    content: "橋頭科學園區X楠梓科學園區X台積電",
    icon: icon2,
  },
  {
    title: "兩百頃綠地",
    content: "高科大人文特區，周圍綠地遠超兩百頃",
    icon: icon3,
  },
  {
    title: "寬闊雙車墅",
    content: "6.8米併排雙車墅，頂樓大露臺花園",
    icon: icon4,
  },
]
</script>
