<template>
  <div class="s6" id="scene">
    <div class="select-section">
      <div class="selection">
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
          <span>36</span>坪 團員居
        </div>
      </div>
      <div class="t2">戶戶邊間 三面採光</div>
      <div class="t3">
        <h2>{{ pings[selectedPing]["title"] }}</h2>
        <p>{{ pings[selectedPing]["text"] }}</p>
      </div>
    </div>
    <div class="swiper-box">
      <Splide :has-track="false" :options="swipeOpt" ref="splide">
        <SplideSlide v-for="(img, i) in pings[selectedPing]['imgs']" :key="i">
          <img :src="img" alt="" srcset="" />
        </SplideSlide>
      </Splide>
    </div>
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
          &::before {
            border-width: size(26) size(20) 0 size(20);
            border-color: #faed00 transparent transparent transparent;
          }
        }
        &:hover {
          border-color: #faed00;
          cursor: pointer;
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
    height: size-m(623);
    min-height: 0;
    max-height: size-m(812);
    padding-top: size-m(80);
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
        "p26": {
          imgs: [
            require('@/projects/ruo/s6/1-1.jpg'),
            require('@/projects/ruo/s6/1-2.jpg'),],
          selectTitle: '28坪  心富居',
          title: '高坪效  大二房',
          text: '難以匹敵的無虛坪規劃，真正2房尺度動線流暢，轉身不狹窄，3米2大面寬客廳，臥室皆雙人床，全室明亮，浴廁開窗通風。'
        },
        "p36": {
          imgs: [
            require('@/projects/ruo/s6/2-1.jpg'),
            require('@/projects/ruo/s6/2-2.jpg'),],
          selectTitle: '36坪  團員居',
          title: '超實在  正三房',
          text: '豪宅格局規劃，3米8從容大客廳，方正格局戶戶景觀，雙衛浴開窗，開放式大廚房，隨時歡迎親友來訪，購屋一次到位。'
        }
      },
      swipeOpt: {
        rewind: true,
        pagination: false,
        autoplay: true,
        interval: 4000,
      }
    };
  },
  watch: {
    selectedPing(v1, v2) {
      this.$refs.splide.splide.go(0);
    }
  },
  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },
  mounted() {
  },
  created() { },
};
</script>