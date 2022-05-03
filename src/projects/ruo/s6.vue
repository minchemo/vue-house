<template>
  <div class="s6" id="scene">
    <div class="select-section">
      <div class="selection" data-aos="fade" data-aos-delay="200">
        <div
          class="item"
          v-bind:class="{ active: selectedPing == 'p26' }"
          @click="selectedPing = 'p26'"
        >
          <span>28</span>坪 心富居
        </div>
        <div
          class="item"
          v-bind:class="{ active: selectedPing == 'p36' }"
          @click="selectedPing = 'p36'"
        >
          <span>36</span>坪 團圓居
        </div>
      </div>
      <div class="t2" data-aos="fade-up" data-aos-delay="400">戶戶邊間 三面採光</div>
      <div class="t3" data-aos="fade-up" data-aos-delay="600">
        <h2>{{ pings[selectedPing]["title"] }}</h2>
        <p>{{ pings[selectedPing]["text"] }}</p>
      </div>
    </div>
    <div class="swiper-box" data-aos="fade" data-aos-delay="200">
      <Splide :has-track="false" :options="swipeOpt" ref="splide">
        <SplideSlide
          v-for="(img, i) in pings[selectedPing]['imgs']"
          :key="i"
          v-bind:style="{ backgroundImage: `url('${img}')` }"
        >
        </SplideSlide>
      </Splide>
    </div>
    <img
      v-if="!isMobile"
      class="circle"
      src="@/projects/ruo/s6/circle.png"
      alt=""
      srcset=""
    />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s6 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-size: 100%;
  background-position: bottom;
  background-color: #fff;
  z-index: 1;

  .select-section {
    position: absolute;
    width: size(591);
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .selection {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: size(391);
      .item {
        position: relative;
        font-size: size(25.82);
        border-top: 1px solid;
        padding-top: size(10);
        border-color: #e6e6e6;
        color: #808080;
        span {
          font-size: size(42.76);
          font-weight: bold;
        }
        &::before {
          content: "";
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          top: -100%;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: size(26) size(20) 0 size(20);
          border-color: #e6e6e6 transparent transparent transparent;
        }
        &.active {
          border-color: #faed00;
          color: #000;
          &::before {
            border-width: size(26) size(20) 0 size(20);
            border-color: #faed00 transparent transparent transparent;
          }
        }
        &:hover {
          border-color: #faed00;
          cursor: pointer;
          color: #000;
          &::before {
            border-width: size(26) size(20) 0 size(20);
            border-color: #faed00 transparent transparent transparent;
          }
        }
      }
    }
    .t2 {
      font-weight: 700;
      font-size: size(50);
      margin: size(55) 0;
    }
    .t3 {
      width: size(324);
      padding: size(30) size(19);
      border-top: 1px solid;
      border-bottom: 1px solid;
      h2 {
        font-size: size(38);
        font-weight: 300;
        width: 100%;
        border-right: 1px solid;
        border-left: 1px solid;
        margin-bottom: size(10);
      }
      p {
        text-align: left;
        font-size: size(17);
        font-weight: 300;
        width: 100%;
        line-height: 2;
      }
    }
  }

  .swiper-box {
    position: absolute;
    width: size(1327);
    height: size(900.32);
    background: #eee;
    right: 0;
    top: 0;
    .splide {
      width: 100%;
      height: 100%;
      .splide__track {
        height: 100%;
        .splide__list {
          height: 100%;
        }
        .splide__slide {
          background-size: cover;
          background-position: center;
        }
        p {
          position: absolute;
          font-size: size(12);
          color: #fff;
          right: 10px;
          bottom: 10px;
        }
      }
      .splide__arrows {
        .splide__arrow {
          width: size(71.39);
          height: size(71.39);
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid #000;
          &.splide__arrow--next {
            right: size(36);
          }
          &.splide__arrow--prev {
            left: size(36);
          }
        }
      }
    }
  }

  .circle {
    position: absolute;
    width: size(501.5);
    bottom: -#{size(229)};
    right: size(180);
    animation: float 5s alternate-reverse infinite ease-in-out;
    z-index: 1;
  }

  @keyframes float {
    from {
      transform: translateY(0) skew(1deg);
    }
    to {
      transform: translateY(-40px) skew(0deg);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s6 {
    position: relative;
    width: size-m(375);
    height: size-m(667);

    .select-section {
      position: absolute;
      width: size-m(314);
      height: auto;
      left: 50%;
      margin-left: -#{size-m(157)};
      top: size-m(55);
      justify-content: flex-start;

      .selection {
        width: 100%;
        .item {
          position: relative;
          font-size: size-m(17);
          border-top: 1px solid;
          padding-top: size-m(10);
          border-color: #e6e6e6;
          span {
            font-size: size-m(25.7);
          }
          &::before {
            top: -80%;
            border-width: size-m(13) size-m(10) 0 size-m(10);
          }
          &.active {
            &::before {
              border-width: size-m(13) size-m(10) 0 size-m(10);
            }
          }
          &:hover {
            &::before {
              border-width: size-m(13) size-m(10) 0 size-m(10);
            }
          }
        }
      }
      .t2 {
        font-weight: 500;
        font-size: size-m(25);
        margin: size-m(18) 0;
        margin-top: size-m(35);
      }
      .t3 {
        width: 100%;
        padding: size-m(20) size-m(19);
        border-top: 1px solid;
        border-bottom: 1px solid;
        h2 {
          display: inline-block;
          font-size: size-m(20);
          font-weight: 300;
          width: auto;
          border-right: 1px solid;
          border-left: 1px solid;
          margin-bottom: size-m(10);
          padding: 0 size-m(10);
        }
        p {
          text-align: left;
          font-size: size-m(13);
          font-weight: 300;
          width: 100%;
          line-height: 2;
        }
      }
    }

    .swiper-box {
      position: absolute;
      width: 100%;
      height: size-m(321.87);
      background: #eee;
      right: 0;
      top: unset;
      bottom: 0;
      .splide {
        width: 100%;
        height: 100%;
        .splide__track {
          height: 100%;
          img {
            width: 100%;
          }
          p {
            position: absolute;
            font-size: size(12);
            color: #fff;
            right: 10px;
            bottom: 10px;
          }
        }
        .splide__arrows {
          .splide__arrow {
            width: size-m(31);
            height: size-m(31);
            &.splide__arrow--next {
              right: size-m(10);
            }
            &.splide__arrow--prev {
              left: size-m(10);
            }
          }
        }
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
  name: "s6",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      selectedPing: "p26",
      pings: {
        p26: {
          imgs: [
            require("@/projects/ruo/s6/1-1.jpg"),
            isMobile?require("@/projects/ruo/s6/1-2_m.jpg"):require("@/projects/ruo/s6/1-2.jpg"),
          ],
          selectTitle: "28坪  心富居",
          title: "高坪效  大二房",
          text: "難以匹敵的無虛坪規劃，真正2房尺度動線流暢，轉身不狹窄，3米2大面寬客廳，臥室皆雙人床，全室明亮，浴廁開窗通風。",
        },
        p36: {
          imgs: [
            require("@/projects/ruo/s6/2-1.jpg"),
            isMobile?require("@/projects/ruo/s6/2-2_m.jpg"):require("@/projects/ruo/s6/2-2.jpg"),
          ],
          selectTitle: "36坪  團圓居",
          title: "超實在  正三房",
          text: "豪宅格局規劃，3米8從容大客廳，方正格局戶戶景觀，雙衛浴開窗，開放式大廚房，隨時歡迎親友來訪，購屋一次到位。",
        },
      },
      swipeOpt: {
        rewind: true,
        pagination: false,
        autoplay: true,
        interval: 4000,
      },
    };
  },
  watch: {
    selectedPing(v1, v2) {
      this.$refs.splide.splide.go(0);
    },
  },
  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },
  mounted() {},
  created() {},
};
</script>