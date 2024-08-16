<template>
  <article class="s6">
    <div class="left">
      <img class="en" src="@/section/s6/en.png" alt="" />
      <div class="imgbox">
        <img
          src="@/section/s6/1.jpg"
          alt=""
          data-aos="fade-left"
          data-aos-delay="0"
        />
        <img
          src="@/section/s6/2.jpg"
          alt=""
          data-aos="fade-left"
          data-aos-delay="0"
        />
        <div class="cap">
          <div class="line"></div>
          <p>碧華公園</p>
        </div>
      </div>
    </div>
    <div class="t">
      <div class="t1" data-aos="fade-up" data-aos-delay="0">
        五座公園環繞生活<br />
        璀璨的城市綠寶石
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="0">
        永安兒童公園、尼加拉瓜公園、<br v-if="!isMobile" />
        三蘆公園、碧華公園、慈愛公園，<br v-if="!isMobile" />
        五座公園環繞老中青三代生活，<br v-if="!isMobile" />
        城市最難得的綠色悠閒，<br v-if="!isMobile" />
        是您最親密的日常場景。
      </div>
    </div>
    <div class="caption">情境示意圖</div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  @apply w-full relative bg-cover;
  @apply flex items-start justify-start;
  height: size(1080);
  background-image: url("@/section/s6/bg.jpg");
  padding-left: size(146.23);
  padding-top: size(40.92);
  gap: size(90);

  .left {
    @apply flex-[0];
    @apply flex items-start relative z-[5];
    gap: size(36.53);
    .en {
      width: size(30.24);
    }
    .imgbox {
      @apply flex flex-col relative;
      gap: size(20);
      > img {
        width: size(820);
        height: size(492);
      }

      .cap {
        @apply flex items-center;
        @apply absolute z-10;
        bottom: size(10);
        left: size(26);
        gap: size(17);
        .line {
          width: size(711);
          height: 2px;
          background: #fcee21;
        }
        p {
          @apply text-white;
          font-size: size(12);
          font-weight: 400;
          letter-spacing: size(2.4);
        }
      }
    }
  }
  .t {
    @apply text-white relative z-[5];
    top: size(-25);
    .t1 {
      font-size: size(40);
      font-weight: 700;
      line-height: 140%; /* 56px */
      letter-spacing: size(8);
    }
    .t2 {
      margin-top: size(33);
      font-size: size(20);
      font-weight: 400;
      line-height: 150%; /* 30px */
      letter-spacing: size(4);
    }
  }
  .caption {
    @apply absolute z-10;
    @apply text-white;
    right: size(8);
    bottom: size(8);

    text-shadow: 0.5px 0.5px 2px #000;
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
  .s6 {
    @apply w-full relative bg-cover;
    @apply flex flex-col items-start justify-start;
    height: sizem(1091);
    background-image: url("@/section/s6/bgm.webp");
    padding-left: 0;
    padding-top: sizem(30);
    gap: sizem(87);

    .left {
      @apply flex-[0];
      @apply flex items-start justify-center w-full;
      gap: sizem(14.89);
      .en {
        width: sizem(13.83);
      }
      .imgbox {
        @apply flex flex-col relative;
        gap: sizem(7.27);
        > img {
          width: sizem(298.11);
          height: sizem(178.66);
        }

        .cap {
          bottom: sizem(10);
          left: sizem(10);
          gap: sizem(17);
          .line {
            width: sizem(208.16);
          }
          p {
            @apply whitespace-nowrap;
            font-size: sizem(11);
            letter-spacing: sizem(2.2);
          }
        }
      }
    }
    .t {
      @apply text-white;
      padding: 0 sizem(31);
      .t1 {
        font-size: sizem(25);
        letter-spacing: sizem(5);
      }
      .t2 {
        margin-top: sizem(25);
        font-size: sizem(14);
        letter-spacing: sizem(2.8);
      }
    }
    .caption {
      right: sizem(8);
      bottom: sizem(8);
      font-size: sizem(11);
      font-weight: 400;
      letter-spacing: sizem(2.2);
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())
</script>
