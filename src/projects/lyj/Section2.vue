<template>
  <div class="section2">
    <div class="title">
      <div class="title1">低基期<span>✕</span>高獲利</div>
      <div class="title2">
        首購價圓豪宅夢
      </div>
      <div class="title3">
        五項唯一質感建商　全台矚目　潛銷個案
      </div>
      <div class="title4">
        1字頭投資台中港新市鎮<br />
        超前部署10倍高投報
      </div>
    </div>
    <div class="badge">
      <span class="badge-text">首創台北聯銷</span
      ><span class="badge-text-2">限戶賞屋</span>
    </div>
    <div class="bg"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/function.scss";

/* 螢幕尺寸標準 */
.section2 {
  width: 100%;
  height: 100vh;
  position: relative;

  .title {
    font-family: "Noto Sans TC", serif;
    position: absolute;
    right: size(80);
    height: 100%;
    z-index: 1;
    color: #606060;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    .title1 {
      font-size: size(55);
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: size(30);
        margin: 0 size(15);
      }
    }
    .title2 {
      font-size: size(25);
      margin-top: size(25);
      letter-spacing: size(3);
    }
    .title3 {
      font-size: size(25);
      margin-top: size(32);
      margin-bottom: size(32);
      padding-top: size(24);
      padding-bottom: size(24);
      border-top: 1px solid;
      border-bottom: 1px solid;
      letter-spacing: size(3);
    }
    .title4 {
      font-size: size(20);
      line-height: size(32);
      letter-spacing: size(3);
    }
  }

  .badge {
    position: absolute;
    right: 0;
    bottom: size(30);
    z-index: 10;

    .badge-text {
      font-size: size(22);
      margin-right: size(18);
      letter-spacing: size(2);
      color: #606060;
    }

    .badge-text-2 {
      font-size: size(22);
      display: inline-block;
      padding: size(20) size(32);
      background: #004881;
      color: #fff;
    }
  }

  .bg {
    width: 100%;
    height: 100%;
    background: url(~@/projects/lyj/s2/bg.png) no-repeat top center;
    background-size: cover;
    z-index: -1;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    .title {
      width: 90%;
      right: 50%;
      margin-right: -45%;
      justify-content: flex-start;
      padding-top: size-m(50);

      .title1 {
        font-size: size-m(35);

        span {
          font-size: size-m(20);
          margin: 0 size-m(15);
        }
      }
      .title2 {
        font-size: size-m(16);
        margin-top: size-m(25);
        letter-spacing: size-m(2);
      }
      .title3 {
        font-size: size-m(16);
        margin-top: size-m(26);
        margin-bottom: size-m(26);
        padding-top: size-m(14);
        padding-bottom: size-m(14);
        letter-spacing: size-m(2);
      }
      .title4 {
        font-size: size-m(14);
        line-height: size-m(26);
        letter-spacing: size-m(3);
      }
    }

    .badge {
      bottom: unset;
      top: size-m(300);
      right: size-m(20);

      .badge-text {
        font-size: size-m(16);
        margin-right: size-m(18);
        letter-spacing: size-m(2);
      }

      .badge-text-2 {
        font-size: size-m(16);
        padding: size-m(14) size-m(22);
      }
    }

    .bg {
      background: url(~@/projects/lyj/mo/s2/bg.png) no-repeat;
      background-size: cover;
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
  name: "default",

  data() {
    return {
      isMobile
    };
  },

  methods: {},

  created() {}
};
</script>
