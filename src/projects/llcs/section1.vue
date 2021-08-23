<template>
  <div class="section1">
    <div class="main">
      <div class="title">
        <img class="logo" src="~@/projects/llcs/s1/logo.png" alt="" srcset="" />
        <img class="t1" src="~@/projects/llcs/s1/t1.png" alt="" srcset="" />
        <img class="t2" src="~@/projects/llcs/s1/t2.png" alt="" srcset="" />
      </div>
      <img class="draw" src="~@/projects/llcs/s1/draw.png" alt="" srcset="" />

      <div class="ad">萬騰廣告</div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section1 {
  height: 100vh;
  .main {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .logo {
        width: 20vw;
      }
      .t1 {
        margin-top: 3vh;
        width: 25vw;
      }
      .t2 {
        width: 25vw;
      }
    }

    .draw {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50vw;
    }

    .ad {
      position: absolute;
      left: 7vw;
      bottom: 1.5vw;
      color: #fff;
      font-size: 1vw;
    }
  }
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    background-size: cover;
    background-image: url("~@/projects/llcs/s1/bg.jpg");
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    height: calc(100vh - 63px);
    .main {
      .title {
        transform: translate(-50%, -70%);
        .logo {
          width: 60vw;
        }
        .t1 {
          margin-top: 3vh;
          width: 90vw;
        }
        .t2 {
          width: 90vw;
        }
      }

      .draw {
        width: 100%;
      }

      .ad {
        position: absolute;
        left: 40px;
        bottom: 25px;
        color: #fff;
        font-size: 16px;
      }
    }
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
      background-size: 100%;
      background-image: url("~@/projects/llcs/s1/bg_mo.jpg");
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
  name: "section1",

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
