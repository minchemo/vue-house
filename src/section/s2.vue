<template>
  <article class="s2">
    <div class="t-t">
      <div class="l"  data-aos="fade-right" data-aos-delay="0">
        <div class="t1" >勤美璞真 照映 敦南四維</div>
        <div class="t2">自然建築世界領銜，蘇喻哲人本建築</div>
      </div>
      <div class="r">
        <img class="en" src="@/section/s2/en.png" alt="" srcset=""  data-aos="fade-right" data-aos-delay="0" />
        <div class="line"  data-aos="fade-right" data-aos-delay="200"></div>
      </div>
    </div>
    <div class="swipe-box">
      <div class="l">
        <img class="man"  data-aos="fade-right" data-aos-delay="0" src="@/section/s2/man.jpg" alt="" srcset="" />
        <div class="info">
          <div class="t1">
            <p  data-aos="fade-right" data-aos-delay="0">蘇喻哲</p>
            <div class="line"  data-aos="fade-right" data-aos-delay="200"></div>
            <p  data-aos="fade-right" data-aos-delay="200">自然系建築大師。</p>
          </div>
          <div class="t2"  data-aos="fade-up" data-aos-delay="0">
            <ul>
              <li>
                西班牙WAF世界建築大獎（World Architecture Festival Award）決選入圍。
              </li>
              <li>
                Internazionale Marmi e Macchine Carrara SpA Marble Architectural Award East Asia 義大利卡諾拉國際大賽\建築設計獎。
              </li>
              <li>
                威尼斯建築雙年展 11th International Architecture Exhibition – La Biennale di Venezia, Collateral Events － Taiwan Exhibition,
                Dark City-Dark Space，義大利威尼斯。
              </li>
              <li>
                《 世界建築家 581 人 》選錄為跨越世紀代表建築家之一，日本 Gallery Ma 出版。
              </li>
              <li>
                S.D.(Space Design)日本建築雜誌專集選錄為“當代台灣建築代表”，鹿島出版會。
              </li>
              <li>第十八屆台灣建築獎 – 首獎。</li>
              <li>第十七屆台灣建築獎 – 首獎。</li>
              <li>台北市都發局第三屆都市設計景觀大獎 – 首獎。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="r">
        <Splide
          ref="splide"
          class="slide"
          :options="{
            autoWidth: true,
            arrows: false,
            autoplay: true,
            pagination: false,
            interval: 4000,
            gap: isMobile ? 20 : 50,
            type: 'loop',
          }"
        >
          <SplideSlide class="slide-item" :key="i" v-for="i in imgs">
            <div
              class="img"
              :style="{ 'background-image': `url(${i.img})` }"
            ></div>
            <div class="text">
              <p>{{ i.t1 }}</p>
              <p>{{ i.t2 }}</p>
              <div class="line"></div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s2 {
  @apply w-full relative text-[#36677F];
  height: size(1336);
 /* background-image: url("@/section/s2/bg.jpg");
  background-size: cover; */
  padding: 0 size(180);
  padding-top: size(63);
  .t-t {
    @apply flex items-start whitespace-nowrap;
    gap: size(33);
    margin-bottom: size(84);
    .l {
      .t1 {
        font-size: size(52);
        font-weight: 700;
      }
      .t2 {
        font-size: size(30);
        font-weight: 700;
      }
    }
    .r {
      @apply w-full;
      @apply flex flex-col items-end;
      gap: size(27);
      .line {
        @apply bg-white h-[1px] w-full;
      }
      .en {
        width: size(160.43);
      }
    }
  }
  .swipe-box {
    @apply flex;
    gap: size(106);
    .l {
      width: size(725);
      .man {
        @apply w-full;
        margin-bottom: size(40);
      }
      .info {
        @apply flex flex-col;
        gap: size(41);
        .t1 {
          @apply flex items-center;
          gap: size(17);
          p {
            font-size: size(34);
            font-weight: 700;
            &:nth-child(3) {
              @apply text-[#736357];
            }
          }
          .line {
            @apply bg-[#736357] h-[1px];
            width: size(128);
          }
        }
        .t2 {
          @apply text-[#736357] font-['noto_sans_tc'];
          ul {
            @apply flex flex-col;
            gap: size(13);
            padding-left: size(18);
            li {
              @apply relative;
              font-size: size(17);
              font-weight: 400;
              line-height: size(26);
              list-style-type: "●";
              padding-inline-start: size(9);
            }
          }
        }
      }
    }

    .r {
      @apply absolute right-0;
      .slide {
        width: size(913);
        .slide-item {
          .img {
            @apply bg-cover;
            width: size(605);
            height: size(865);
          }
          .text {
            @apply flex items-end whitespace-nowrap;
            margin-top: size(54);
            p {
              &:nth-child(1) {
                font-size: size(27);
                font-weight: 700;
                margin-right: size(17);
              }
              &:nth-child(2) {
                font-size: size(17);
                font-weight: 600;
                margin-right: size(22);
              }
            }
            .line {
              @apply bg-[#36677F] h-[1px] w-full relative;
              bottom: size(10);
              &:before {
                @apply absolute top-1/2 -translate-y-1/2 left-0;
                @apply bg-[#36677F] w-[1px];
                content: "";
                height: size(18);
              }
              &:after {
                @apply absolute top-1/2 -translate-y-1/2 right-0;
                @apply bg-[#36677F] w-[1px];
                content: "";
                height: size(26);
              }
            }
          }
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
  .s2 {
    height: sizem(1218);
  //  background-image: url("@/section/s2/bgm.jpg");
   // background-size: cover;
    padding: 0 sizem(54);
    padding-top: sizem(13);
    .t-t {
      @apply items-end;
      gap: sizem(7);
      margin-bottom: sizem(44);
      .l {
        .t1 {
          font-size: sizem(20);
        }
        .t2 {
          font-size: sizem(12);
        }
      }
      .r {
        @apply w-full relative;
        @apply flex flex-col items-end;
        gap: sizem(5);
        .en {
          width: sizem(39.1);
        }
        padding-bottom: sizem(5);
        &::after {
          content: "";
          @apply absolute bg-white h-[1px];
          width: sizem(18);
          right: 100%;
          bottom: sizem(5);
        }
      }
    }
    .swipe-box {
      @apply flex;
      gap: 0;
      .l {
        width: sizem(266);
        .man {
          margin-bottom: sizem(42);
        }
        .info {
          gap: sizem(15);
          .t1 {
            @apply flex items-center;
            gap: sizem(5);
            p {
              font-size: sizem(14);
            }
            .line {
              width: sizem(47);
            }
          }
          .t2 {
            @apply text-[#736357] font-['noto_sans_tc'];
            ul {
              @apply flex flex-col;
              gap: sizem(7);
              padding-left: sizem(12);
              width: 107%;
              li {
                @apply relative;
                font-size: sizem(12);
                line-height: sizem(15);
                padding-inline-start: sizem(10);
              }
            }
          }
        }
      }

      .r {
        @apply absolute right-0;
        bottom: sizem(58);
        .slide {
          width: sizem(322);
          .slide-item {
            .img {
              @apply bg-cover;
              width: sizem(266);
              height: sizem(380.1);
            }
            .text {
              @apply flex items-end whitespace-nowrap;
              margin-top: sizem(46.48);
              p {
                &:nth-child(1) {
                  font-size: sizem(15);
                  font-weight: 700;
                  margin-right: sizem(10);
                }
                &:nth-child(2) {
                  font-size: sizem(12);
                  font-weight: 600;
                  margin-right: sizem(10);
                }
              }
              .line {
                @apply bg-[#36677F] h-[1px] w-full relative;
                bottom: sizem(9);
                &:before {
                  @apply absolute top-1/2 -translate-y-1/2 left-0;
                  @apply bg-[#36677F] w-[1px];
                  content: "";
                  height: sizem(8);
                }
                &:after {
                  @apply absolute top-1/2 -translate-y-1/2 right-0;
                  @apply bg-[#36677F] w-[1px];
                  content: "";
                  height: sizem(12);
                }
              }
            }
          }
        }
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

const imgs = [
  {
    img: new URL("../section/s2/1.jpg", import.meta.url).href,
    t1: "碧湖畔",
    t2: "／台北市內湖區",
  },
  {
    img: new URL("../section/s2/2.jpg", import.meta.url).href,
    t1: "璞園信義",
    t2: "／台北市大安區",
  },
  {
    img: new URL("../section/s2/3.jpg", import.meta.url).href,
    t1: "勤美璞真",
    t2: "／台北市大安區",
  },
  {
    img: new URL("../section/s2/4.jpg", import.meta.url).href,
    t1: "仰哲",
    t2: "／台北市士林區",
  },
]
</script>
