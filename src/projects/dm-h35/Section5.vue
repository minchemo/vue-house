<template>
  <div class="section5">
    <div v-if="!isMobile" class="main">
      <div class="box1" data-aos="fade">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :key="i"
              v-for="(banner, i) in activeBanner.img"
              v-bind:style="`background-image:url(${banner.src})`"
            >
              <div v-if="banner.caption" class="slide-text">
                {{ banner.caption }}
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </div>
      </div>
      <div class="box2">
        <div class="swiper-btn">
          <div
            class="swiper-btn-item"
            v-bind:class="activeBanner.t1 == '建築規劃' ? 'active' : ''"
            @click="setBanner(banners[0])"
          >
            建築規劃
          </div>
          <div
            class="swiper-btn-item"
            v-bind:class="activeBanner.t1 == '風格美學' ? 'active' : ''"
            @click="setBanner(banners[1])"
          >
            風格美學
          </div>
          <div
            class="swiper-btn-item"
            v-bind:class="activeBanner.t1 == '結構設計' ? 'active' : ''"
            @click="setBanner(banners[2])"
          >
            結構工程
          </div>
          <div
            class="swiper-btn-item"
            v-bind:class="activeBanner.t1 == '綠建築' ? 'active' : ''"
            @click="setBanner(banners[3])"
          >
            智慧、智能建築
          </div>
        </div>
        <div class="text">
          <div class="t1" data-aos="fade" v-html="activeBanner.t1"></div>
          <div class="t2" data-aos="fade" v-html="activeBanner.t2"></div>
          <div class="t3" data-aos="fade" v-html="activeBanner.t3"></div>
          <div class="t4" data-aos="fade" v-html="activeBanner.t4"></div>
          <div class="t-work" data-aos="fade">建築實績作品｜</div>
          <div class="t5" data-aos="fade" v-html="activeBanner.t5"></div>
        </div>
      </div>
    </div>
    <div v-else class="main" v-for="(banner, i) in banners" :key="i">
      <div class="box1" data-aos="fade">
        <div v-swiper:[banner+i]="banner.swiperOption">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :key="i"
              v-for="(b, i) in banner.img"
              v-bind:style="`background-image:url(${b.src})`"
            >
              <div v-if="b.caption" class="slide-text">
                {{ b.caption }}
              </div>
            </div>
          </div>
          <div
            class="swiper-pagination"
            v-bind:class="'swiper-pagination-' + (i + 1)"
          ></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </div>
      </div>
      <div class="box2">
        <div class="text">
          <div class="t1" data-aos="fade" v-html="banner.t1"></div>
          <div class="t2" data-aos="fade" v-html="banner.t2"></div>
          <div class="t3" data-aos="fade" v-html="banner.t3"></div>
          <div class="t4" data-aos="fade" v-html="banner.t4"></div>
          <div class="t-work" data-aos="fade">建築實績作品｜</div>
          <div class="t5" data-aos="fade" v-html="banner.t5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-slide {
  /*
  &:nth-child(1) {
    background-size: 150% !important;
    background-position: top !important;
  }
  */
}
.swiper-pagination {
  width: unset;
  top: 5vw !important;
  left: 5vw !important;
  display: flex;
  flex-direction: column;

  .swiper-pagination-bullet {
    margin: 0.3vw !important;
    width: 10px;
    height: 10px;
    border: 1px solid #356292;
    opacity: 1;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: #356292;
      border: 2px solid;
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        background: transparent;
        position: absolute;
        border-radius: 100%;
        border: 1px solid #fff;
        margin-left: -4px;
        margin-top: -1px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .swiper-pagination {
    margin: 5vw 0 0 0;
    .swiper-pagination-bullet {
      margin: 0.5vh !important;
      width: 10px;
      height: 10px;
      border: 1px solid #356292;
      &.swiper-pagination-bullet-active {
        background: #356292;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section5 {
  height: calc(100vh - 70px);
  min-height: calc(100vw * 900 / 1920 - 70px);
  max-height: calc(100vw * 1080 / 1920 - 70px);
  .main {
    height: 100%;
    display: flex;
    border-top: 1px solid #356292;
    border-bottom: 1px solid #356292;
    .box1 {
      width: 55%;
      height: 100%;
      background-color: #fff;
      border-right: 1px solid #356292;
      .swiper-slide {
        .slide-text {
          position: absolute;
          bottom: 2.5vw;
          right: 4vw;
          font-size: 1.2vw;
          color: #fff;
          filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.7));
        }
      }
    }
    .box2 {
      position: relative;
      width: 45%;
      height: 100%;
      background: rgb(211, 227, 234);
      background: linear-gradient(
        -166deg,
        rgba(211, 227, 234, 1) 0%,
        rgba(211, 227, 234, 1) 44%,
        rgba(208, 225, 234, 1) 78%,
        rgba(186, 211, 234, 1) 100%
      );
      display: flex;
      align-items: center;

      .text {
        position: relative;
        width: 60%;
        margin: 0 auto;
        text-align: justify;
        color: #283555;
        font-size: calc(12px + 700vw / 1920);
        line-height: 2;

        .t1 {
          font-size: 1vw;
          font-weight: bold;
          margin-bottom: 0.5vw;
        }

        .t2 {
          font-size: 1.4vw;
          font-weight: bold;
          margin-bottom: 1.5vw;
        }
        .t3 {
          font-size: 1vw;
          font-weight: bold;
          margin-bottom: 1vw;
        }
        .t-work {
          margin-top: 1vw;
        }
      }

      .bottle {
        width: 25vw;
        position: absolute;
        right: -10vw;
        top: 5vw;
      }

      .swiper-btn {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        .swiper-btn-item {
          writing-mode: vertical-lr;
          flex: auto;
          font-weight: bold;
          font-size: 1.2vw;
          padding: 0 1vw;
          transition: all 0.2s;
          background: rgb(255, 255, 255);
          background: linear-gradient(
            -180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(186, 211, 234, 0.7) 90%,
            rgba(186, 211, 234, 1) 100%
          );
          &:nth-child(1) {
            clip-path: polygon(100% 0, 100% 89%, 0 100%, 0 0%);
          }
          &:nth-child(2) {
            clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 7%);
            margin-top: -2vw;
          }
          &:nth-child(3) {
            clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 7%);
            margin-top: -2vw;
          }
          &:nth-child(4) {
            clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 7%);
            margin-top: -2vw;
          }

          &:hover {
            background: linear-gradient(
              -180deg,
              rgba(53, 98, 146, 1) 0%,
              rgba(69, 135, 166, 1) 50%,
              rgba(186, 211, 234, 1) 100%
            );
            color: #fff;
            cursor: pointer;
          }

          &.active {
            background: linear-gradient(
              -180deg,
              rgba(53, 98, 146, 1) 0%,
              rgba(69, 135, 166, 1) 50%,
              rgba(186, 211, 234, 1) 100%
            );
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
  .swiper-container {
    height: 100%;
  }
  .swiper-wrapper {
    height: 100%;
    .swiper-slide {
      height: 100%;
      background-size: 100% auto;
      background-position: center center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section5 {
    height: auto;
    min-height: 0;
    max-height: initial;
    .main {
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      border: 0;
      .box1 {
        width: 100%;
        background-color: #fff;
        height: 100vw;
        border: 0;
        .swiper-slide {
          .slide-text {
            position: absolute;
            bottom: 5vw;
            left: 5vw;
            font-size: calc(100vw * 12 / 375);
          }
        }
      }
      .box2 {
        width: 100%;
        height: auto;

        .text {
          position: relative;
          width: 70%;
          margin: 0 auto;
          font-size: calc(12px + 100vw / 375);

          .t1 {
            font-size: 16px;
            font-weight: bold;
            margin-top: 10vw;
            margin-bottom: 0.5vw;
            text-align: center;
          }

          .t2 {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10vw;
            text-align: center;
          }
          .t3 {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 5vw;
            text-align: center;
            white-space: nowrap;
          }
          .t-work {
            margin-top: 5vw;
          }
          .t5 {
            margin-bottom: 10vw;
          }
        }
      }
      &:nth-child(2),
      &:nth-child(4) {
        .box2 {
          background: rgb(211, 227, 234);
          background: linear-gradient(
            -166deg,
            rgba(211, 227, 234, 1) 0%,
            rgba(0, 56, 108, 0.5) 44%,
            rgba(0, 56, 108, 0.7) 78%,
            rgba(0, 56, 108, 0.85) 100%
          );
          div {
            color: #fff;
          }
        }
      }
    }

    .swiper-wrapper {
      height: 100%;
      .swiper-slide {
        //height: 60vw;
        background-size: cover;
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";

export default {
  name: "section5",

  data() {
    return {
      isMobile,
      activeBanner: {},
      banners: [
        {
          img: [
            {
              src: require("@/projects/dm-h35/s5/C-1-1.jpg"),
            },
            {
              src: require("@/projects/dm-h35/s5/C-1-2.jpg"),
              caption: "作品實績｜東騰越",
            },
            {
              src: require("@/projects/dm-h35/s5/C-1-3.jpg"),
              caption: "作品實績｜異雲書屋",
            },
          ],
          t1: "建築規劃",
          t2: "如榆設計｜劉宇傑",
          t3: "融入地景與風光的建築夢想家。",
          t4: "夢想是設計的原創力，如榆設計致力於建築、室內與景觀設計，集結四位來自不同領域的設計師，以驚人的創作能量締造了多處充滿創意的作品，榮獲英、美、德國及義大利等國際獎項肯定，期望整合各個建築面向，全方位為城市創造更理想的環境品質。",
          t5: "東騰越、高過岸、至善 Villa 、異雲書屋",

          swiperOption: {
            pagination: {
              el: ".swiper-pagination-1",
              clickable: true,
            },
            loop: true,
            autoplay: {
              delay: 4000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
          },
        },
        {
          img: [
            {
              src: require("@/projects/dm-h35/s5/C-2-1.jpg"),
            },
            {
              src: require("@/projects/dm-h35/s5/C-2-2.jpg"),
              caption: "作品實績｜映東騰",
            },
            {
              src: require("@/projects/dm-h35/s5/C-2-3.jpg"),
              caption: "作品實績｜謙邸",
            },
          ],
          t1: "風格美學",
          t2: "元佑設計｜李志成",
          t3: "從心感受素樸清淨空間之美",
          t4: "元佑設計為落實「家」的本質，以生活感為核心，透過細心的人性觀察與思維溝通， 運用多元的設計語彙並結合機能與妥切的比例美感，掌握設計、工程的各個環節，替使用者創造屬於自己的空間，讓生活充滿嶄新的節奏。人文風格與簡約語彙的設計特 性，為空間展演著與眾不同的內心感受。",
          t5: "富富話合、映東騰、天賞大願、國泰禾、謙邸",

          swiperOption: {
            pagination: {
              el: ".swiper-pagination-2",
              clickable: true,
            },
            loop: true,
            autoplay: {
              delay: 4000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
          },
        },
        {
          img: [
            {
              src: require("@/projects/dm-h35/s5/C-3-1.jpg"),
            },
            {
              src: require("@/projects/dm-h35/s5/C-3-2.jpg"),
              caption: "建築實績｜高雄市立總圖書館",
            },
            {
              src: require("@/projects/dm-h35/s5/C-3-3.jpg"),
              caption: "作品實績｜碧湖畔",
            },
          ],
          t1: "結構設計",
          t2: "築遠工程｜張盈智",
          t3: "建築結構安全的骨科權威。",
          t4: "築遠工程視結構設計為藝術，安全只是最基本的要求，堅持要從個案中發掘新的關聯及構想，在看不見的地方體現結構細緻之美；<br>張盈智技師堅信「結構可以不只是結構」，用心思索、細膩執行、完美呈現，突破結構工程是枯燥力學與艱澀數學的刻板印象。",
          t5: "高雄市立總圖書館、砳建築、揚昇君臨、碧湖畔、桃園第一航廈改建",
          swiperOption: {
            pagination: {
              el: ".swiper-pagination-3",
              clickable: true,
            },
            loop: true,
            autoplay: {
              delay: 4000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
          },
        },
        {
          img: [
            {
              src: require("@/projects/dm-h35/s5/C-4-1.jpg"),
            },
            {
              src: require("@/projects/dm-h35/s5/C-4-2.jpg"),
              caption: "作品實績｜敦南樞院",
            },
            {
              src: require("@/projects/dm-h35/s5/C-4-3.jpg"),
              caption: "作品實績｜華固天鑄",
            },
          ],
          t1: isMobile ? "綠建築與智慧建築顧問" : "綠建築",
          t2: isMobile ? "楊謙柔博士" : "台灣綠建築設計總顧問｜楊謙柔",
          t3: "綠建築，是友善環境與資源效用的具體呈現。",
          t4: isMobile
            ? "綠建築以節約能源、資源、回歸自然與舒適健康等設計原則為出發點，生態、節能、減廢、健康則是綠建築追求的終極目標。台灣首屈一指的綠建築規顧問楊謙柔博士 認為，建築是人居的載體，而綠建築可以說是未來生活與集合式住宅的舒適生活指標。<br><br>智慧建築標章認證，從建築物的綜合佈線、資通、系統整合、管理、防災、節能、健康、創新等，須通過八項指標評定並加分達標。藉由用心設計規劃期望帶給社區住戶們 全新感受，目標指向安全性提升、提高智能化與降低管理費，與未來智能居家趨勢接 軌，並符合人居使用需求與體驗滿意度。"
            : "綠建築以節約能源、資源、回歸自然與舒適健康等設計原則為出發點，生態、節能、減廢、健康則是綠建築追求的終極目標。台灣首屈一指的綠建築規劃顧問楊謙柔博士認為，建築是人居的載體，而綠建築可以說是未來生活與集合式住宅的舒適生活指標。",
          t5: "華固天鑄、敦南樞苑",
          swiperOption: {
            pagination: {
              el: ".swiper-pagination-4",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            loop: true,
            autoplay: {
              delay: 4000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
          },
        },
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      },
    };
  },

  methods: {
    setBanner(data) {
      this.activeBanner = data;
      if (!isMobile) this.mySwiper.slideTo(1);
    },
  },

  mounted() {
    this.setBanner(this.banners[0]);
  },
};
</script>