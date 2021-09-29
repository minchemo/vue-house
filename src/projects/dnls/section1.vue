<template>
  <div class="section1">
    <div class="main">
      <div class="cover">
        <img
          v-if="!isMobile"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="200"
          src="~@/projects/dnls/s1/cover.jpg"
          :alt="info.caseName"
          srcset=""
        />
        <img
          v-else
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="200"
          src="~@/projects/dnls/s1/cover_mo.jpg"
          :alt="info.caseName"
          srcset=""
        />
      </div>
      <div class="title-box">
        <img
          class="logo"
          src="~@/projects/dnls/s1/logo.png"
          :alt="info.caseName"
          srcset=""
          data-aos="fade"
          data-aos-duration="1500"
        />
        <div class="title">
          <img
            src="~@/projects/dnls/s1/title.png"
            :alt="info.caseName"
            srcset=""
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="600"
          />
          <div
            class="order-btn"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
              v-scroll-to="{
                element: `.contact`,
                offset: 0,
              }"
          >
            立即預約
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section1 {
  height: 100vh;
  width: 100vw;
  position: relative;
  background-size: contain;
  background-image: url("~@/assets/img/bg.jpg");

  .main {
    padding-top: $nav_pc_height;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    .cover {
      height: 100%;
      img {
        height: 90%;
        margin: 0 5vw;
      }
    }

    .title-box {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateY(-5%);

      .logo {
        width: 24vw;
        margin-bottom: 3vw;
      }
      .title {
        width: 35vw;
        position: relative;
        img {
          width: 100%;
        }
        .order-btn {
          width: 11vw;
          height: 3.5vw;
          background-color: #000;
          color: #fff;
          position: absolute;
          right: 0;
          bottom: 3.6vw;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5vw;
          font-weight: 600;
          letter-spacing: 0.2vw;
          &:hover {
            transition: all 0.3s;
            transform: skewX(-10deg) !important;
            background-color: rgba(0, 0, 0, 0.45) !important;
            cursor: pointer;
          }
        }
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    height: 100vh;
    width: 100vw;
    position: relative;
    background-size: contain;
    background-image: url("~@/assets/img/bg.jpg");

    .main {
      padding-top: $nav_phone_height;
      flex-direction: column;

      .cover {
        height: 100%;
        img {
          height: auto;
          width: 60vw;
          margin: 0;
        }
      }

      .title-box {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(-20%) scale(0.9);

        .logo {
          width: 50vw;
          margin-bottom: 3vw;
        }
        .title {
          width: 80vw;
          position: relative;
          img {
            width: 100%;
          }
          .order-btn {
            width: 25vw;
            height: 7.5vw;
            bottom: 8.5vw;
            font-size: 14px;
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
import info from "@/info";
import { isMobile } from "@/utils";

export default {
  name: "section1",

  data() {
    return {
      info,
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
