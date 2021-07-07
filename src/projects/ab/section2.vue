<template>
  <div class="section2">
    <div class="main">
      <div v-if="!isMobile" class="mosaic-box">
        <Mosaic
          v-if="!isMobile"
          :width="13"
          :height="16"
          :floatAmount="40"
          :horizontal="true"
        />
      </div>
      <div class="features-box">
        <div
          class="feature"
          v-for="(feature, i) in featureList"
          :key="i"
          v-bind:class="{ reverse: feature.reverse == true }"
          data-aos="fade"
          :data-aos-delay="i * 50"
          data-aos-duration="2000"
        >
          <div class="header">
            <div class="iconImg">
              <img :src="feature.icon" :alt="feature.title" />
            </div>
            <div class="title" v-html="feature.title"></div>
          </div>
          <div class="subtitle" v-html="feature.content"></div>
        </div>
      </div>
      <div v-if="!isMobile" class="bg"></div>
    </div>
    <img
      v-if="!isMobile"
      class="rightbottom"
      src="~@/projects/ab/s2/rightbottom.png"
      alt=""
    />
    <img v-else class="rightbottom" src="~@/projects/ab/s2/bg-mo.png" alt="" />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableColor.scss";
.features-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  z-index: 101;

  .feature {
    font-family: $family1;
    padding: 2vw;
    background: #fff;

    .header {
      display: flex;
      flex-direction: column;

      .iconImg {
        height: 60px;
        margin: 0 auto;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        img {
          height: auto;
          max-width: 50px;
        }
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        border-bottom: 5px solid;
        border-color: #fad2cd;
        padding-bottom: 10px;
        margin-bottom: 10px;
        color: #d20028;
      }
    }

    .subtitle {
      color: #d20028;
      padding-left: 1vw;
      padding-right: 1vw;
      .large {
        font-size: 24px;
        font-weight: bold;
        font-family: $family2;
      }
    }

    &.reverse {
      background: #d20028;
      .header {
        .title {
          color: #fff;
          border-color: #ffff00;
        }
      }

      .subtitle {
        color: #fff;
      }
    }

    &:after {
      font-family: $family2;
      content: "8大風采一次到手";
      color: #d20028;
      z-index: 100;
      position: absolute;
      top: 0;
      left: -8.5vw;
      writing-mode: vertical-lr;
      text-orientation: upright;
      font-size: 1.5vw;
      background: #fff;
      padding: 15px 22px;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .features-box {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    position: relative;

    .feature {
      font-family: $family1;
      padding: 1.5vw;
      background: #fff;
      display: flex;
      align-items: center;
      padding: 1vw 5vw;

      .header {
        flex-direction: row;
        align-items: center;

        .iconImg {
          width: 40px;
          margin-bottom: 0;
          margin-right: 10px;
          img {
            width: 90%;
          }
        }
        .title {
          font-size: 16px;
          font-weight: bold;
          border-bottom: 0;
          border-right: 3px solid;
          border-color: #fad2cd;
          padding-bottom: 0;
          margin-bottom: 0;
          margin-right: 10px;
          padding-right: 10px;
        }
      }

      .subtitle {
        color: #d20028;
        margin: 0 auto;
        font-size: 14px;
        .large {
          font-size: 22px;
          font-weight: bold;
          font-family: $family2;
        }
      }

      &:after {
        content: none;
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 50px;
      background-image: url("~@/projects/ab/s2/bg2-mo.png");
      background-size: 100%;
      background-position: bottom;
      background-repeat: no-repeat;
    }

    &::after {
      content: "8大風采 一次到手";
      width: 100%;
      height: 50px;
      position: absolute;
      top: -50px;
      background: #fff;
      color: #d20028;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
/* 螢幕尺寸標準 */
.section2 {
  height: 100vh;
  position: relative;
  background: #fad2cd;

  .main {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: auto;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);

    .mosaic-box {
      width: 14vw;
      height: 80vh;
    }

    .bg {
      background-image: url("~@/projects/ab/s2/bg.png");
      background-size: cover;
      width: 80vw;
      height: 80vh;
      top: 50%;
      left: 50%;
      position: absolute;
      z-index: 0;
      transform: translate(-50%, -50%);
    }
  }

  .rightbottom {
    width: 2vw;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    height: auto;
    padding-top: 80px;

    .main {
      transform: unset;
      padding-bottom: 10vw;
    }
    .rightbottom {
      width: 100%;
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 0;
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
import Mosaic from "@/projects/ab/mosaic.vue";

export default {
  name: "section2",
  components: {
    Mosaic,
  },
  data() {
    return {
      featureList: [
        {
          icon: require("../ab/s2/icon/1.png"),
          title: isMobile ? "捷運<br>熱點" : "捷運熱點",
          content: isMobile
            ? "紅綠橘3線<br>權掌大台北"
            : "紅綠橘3線，權掌大台北",
          reverse: true,
        },
        {
          icon: require("../ab/s2/icon/2.png"),
          title: isMobile ? "名校<br>雲集" : "名校雲集",
          content: "金華中正學區<br>台大最前線",
          reverse: false,
        },
        {
          icon: require("../ab/s2/icon/3.png"),
          title: isMobile ? "萬坪<br>氧森" : "萬坪氧森",
          content: "大安森林公園<br>中正紀念堂綠活圈",
          reverse: true,
        },
        {
          icon: require("../ab/s2/icon/4.png"),
          title: isMobile ? "精彩<br>今採" : "精彩今採",
          content: "總價<span class='large'>888</span>萬起<br>入席大安不必等",
          reverse: false,
        },
        {
          icon: isMobile
            ? require("../ab/s2/icon/5-mo.png")
            : require("../ab/s2/icon/5.png"),
          title: isMobile ? "量身<br>訂製" : "量身訂製",
          content: "裝修自由選<br>風格隨你變",
          reverse: isMobile ? true : false,
        },
        {
          icon: isMobile
            ? require("../ab/s2/icon/6-mo.png")
            : require("../ab/s2/icon/6.png"),
          title: isMobile ? "名宅<br>團隊" : "名宅團隊",
          content: "北市豪宅團隊<br>新生代代表作",
          reverse: isMobile ? false : true,
        },
        {
          icon: isMobile
            ? require("../ab/s2/icon/7-mo.png")
            : require("../ab/s2/icon/7.png"),
          title: isMobile ? "精彩<br>無限" : "精彩無限",
          content: "師大永康商圈<br>藝文新聚落",
          reverse: isMobile ? true : false,
        },
        {
          icon: isMobile
            ? require("../ab/s2/icon/8-mo.png")
            : require("../ab/s2/icon/8.png"),
          title: isMobile ? "智能<br>保全" : "智能保全",
          content:
            "360°智慧守門員<br>24小時安全守護",
          reverse: isMobile ? false : true,
        },
      ],
      isMobile,
    };
  },

  methods: {},

  mounted() {},
};
</script>
