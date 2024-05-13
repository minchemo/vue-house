<template>
  <article class="s6">
    <div class="slide-box">
      <div class="arrows" v-if="isMobile">
        <img
          src="@/section/arrow.png"
          class="arrow prev"
          alt=""
          srcset=""
          @click="splide.go('<')"
        />
        <img
          src="@/section/arrow.png"
          class="arrow next"
          alt=""
          srcset=""
          @click="splide.go('>')"
        />
      </div>
      <Splide
        ref="splide"
        class="slide"
        :options="{
          arrows: false,
          autoplay: true,
          pagination: true,
          interval: 4000,
          gap: 10,
          type: 'loop',
          arrowPath: `M17.4591 31.1385C17.9961 31.6755 18.8667 31.6755 19.4037 31.1385C19.9406 30.6015 19.9406 29.7309 19.4037 29.1939L10.3223 20.1126L19.4037 11.0312C19.9406 10.4943 19.9406 9.62368 19.4037 9.0867C18.8667 8.54973 17.9961 8.54973 17.4591 9.0867L7.40551 19.1403C6.86854 19.6773 6.86854 20.5479 7.40551 21.0849L17.4591 31.1385Z`,
        }"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
          :style="{ 'background-image': `url(${i.img})` }"
        >
          <div class="caption">
            {{ i.caption }}
          </div>
        </SplideSlide>
      </Splide>
      <div class="t">
        <div class="t1" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0">
          百年成州學區<br />資優素養明日菁英
        </div>
        <div class="t1" v-else data-aos="fade-up" data-aos-delay="0">百年成州學區 資優素養明日菁英</div>
        <div class="t2" v-if="!isMobile" data-aos="fade-up" data-aos-delay="200">
          成州國小學區近距離，文教學<br />
          府一氣呵成，日日書香飄溢，<br />
          天天快樂學習；為孩子奠定最<br />
          好的學習起點，就是邁向勝利<br />
          人生的指標！
        </div>
        <div class="t2" v-else data-aos="fade-up" data-aos-delay="200">
          成州國小學區近距離，文教學府一氣呵成，日日書香飄溢，天天快樂學習；為孩子奠定最好的學習起點，就是邁向勝利人生的指標！
        </div>
      </div>
    </div>
    <img class="en" src="@/section/s6/en.svg" alt="" srcset="" v-if="!isMobile" data-aos="fade-up" data-aos-delay="0"/>
    <img class="en" src="@/section/s6/enm.svg" alt="" srcset="" v-else data-aos="fade-up" data-aos-delay="0"/>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  @apply w-full relative bg-[#0D5052] flex text-white;
  height: size(1080);
  padding-top: size(323);
  padding-left: size(70);

  .slide-box {
    @apply flex items-start;
    gap: size(106);
    .slide {
      width: size(1061);
      height: size(624);
      .slide-item {
        width: size(1061);
        height: size(624);
        background: #eee;
        background-size: cover;
        .caption {
          @apply absolute font-['Noto_Sanc_TC'];
          right: size(14);
          bottom: size(15);
          font-size: size(20);
          font-weight: 400;
          letter-spacing: size(2.6);
        }
      }
      .splide__pagination {
        @apply absolute left-0 w-full flex justify-start;
        padding: size(25) 0;
        li {
          line-height: 0;
          button {
            @apply rounded-full;
            width: size(10);
            height: size(10);
            background: #0d6b68;
            &.is-active {
              background: #138784;
            }
          }
        }
        gap: size(13);
      }
    }
    .t {
      width: size(546);
      .t1 {
        color: #e89213;
        font-size: size(51);
        font-weight: 700;
        line-height: 126.7%;
        letter-spacing: size(4.08);
        margin-bottom: size(112);
        padding-bottom: size(35);
        border-bottom: size(1) solid #fff;
      }
      .t2 {
        font-size: size(32);
        font-weight: 700;
        text-align: justify;
        line-height: 157.9%;
        letter-spacing: size(6.4);
      }
    }
  }

  .en {
    @apply absolute;
    height: size(146.34);
    top: size(23);
    right: size(4);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s6 {
    height: sizem(667);
    padding-top: sizem(132);
    padding-left: 0;

    .slide-box {
      @apply flex flex-col;
      gap: sizem(24);
      .arrows {
        @apply absolute z-20 w-full flex justify-between;
        top: sizem(280);
        padding: 0 sizem(5);

        .arrow {
          @apply cursor-pointer;
          width: sizem(12.8);
          height: sizem(22.86);
          &.prev {
            transform: scaleX(-1);
          }
        }
      }
      .slide {
        width: sizem(375);
        height: sizem(281);
        .slide-item {
          width: sizem(375);
          height: sizem(281);
          .caption {
            right: sizem(11);
            bottom: sizem(6);
            font-size: sizem(12);
            letter-spacing: size(2.6);
          }
        }
        .splide__pagination {
          @apply hidden;
        }
      }
      .t {
        width: 100%;
        padding: 0 sizem(30);
        .t1 {
          font-size: sizem(20);
          line-height: 1;
          letter-spacing: sizem(1.6);
          margin-bottom: sizem(14);
          padding-bottom: sizem(14);
          border-bottom: sizem(1) solid #fff;
        }
        .t2 {
          font-size: sizem(13);
          line-height: 157.9%;
          letter-spacing: sizem(2.6);
        }
      }
    }

    .en {
      @apply absolute;
      height: sizem(58.5);
      top: sizem(36);
      right: 0;
      left: unset;
    }
  }
}
</style>

<script setup>
import View from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())

const splide = ref()

const imgs = [
  {
    img: new URL("../section/s6/1.webp", import.meta.url).href,
    caption: "成州國小",
  },
  {
    img: new URL("../section/s6/2.webp", import.meta.url).href,
    caption: "情境圖",
  },
  {
    img: new URL("../section/s6/3.webp", import.meta.url).href,
    caption: "五股圖書館",
  },
]
</script>
