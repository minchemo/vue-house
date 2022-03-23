<template>
  <div class="s1" id="scene">
    <div class="main">
      <div class="left">
        <img
          class="main-text"
          src="@/projects/renai/s1/main.svg"
          alt=""
          srcset=""
        />
        <div class="bg">
          <img
            data-aos="fade-down"
            data-depth="0.2"
            class="bg1 parallax-item"
            src="@/projects/renai/s1/mainbg1.png"
            alt=""
            srcset=""
          />
          <img
            data-aos="fade-up"
            data-depth="0.2"
            class="bg2 parallax-item"
            src="@/projects/renai/s1/mainbg2.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="right">
        <img
          v-if="!isMobile"
          data-aos="fade-up"
          class="text"
          src="@/projects/renai/s1/title.svg"
          alt=""
          srcset=""
        />
        <img
          v-else
          class="text"
          src="@/projects/renai/s1/title_m.svg"
          alt=""
          srcset=""
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="2000"
          class="order-button"
          v-scroll-to="{
            element: `.contact`,
            offset: !isMobile ? 0 : 0,
          }"
        >
          立即預約
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background-size: 100%;
  background-position: bottom;
  background-color: #eb5c20;
  padding-top: 80px;
  .main {
    position: relative;
    width: size(1490);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .left {
      width: size(655.31);
      height: size(927.12);
      display: flex;
      align-items: center;
      justify-content: center;
      .main-text {
        position: absolute;
        z-index: 1;
        width: size(276.8);
        animation: blur 4s;
        @keyframes blur {
          from {
            filter: blur(50px);
          }
          to {
            filter: blur(0);
          }
        }
      }
      .bg {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .parallax-item {
          position: relative !important;
          &.no-delay {
            transition: all 0s;
          }
        }
        img {
          width: 100% !important;
        }
      }
    }
    .right {
      .text {
        width: size(709.92);
        height: size(495.48);
      }
      .order-button {
        width: size(674);
        height: size(77);
        font-size: size(44);
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #eb5c20;
        margin: 0 auto;
        transition: all 0.5s;
        &:hover {
          transform: translateY(-5px);
          cursor: pointer;
          filter: drop-shadow(5px 10px 10px rgba(0, 0, 0, 0.3));
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
  .s1 {
    position: relative;
    width: size-m(375);
    height: size-m(623);
    min-height: 0;
    max-height: size-m(812);
    padding-top: size-m(80);

    .main {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      flex-direction: column;
      .left {
        width: size-m(168);
        height: size-m(215);
        .main-text {
          position: absolute;
          z-index: 1;
          width: size-m(71.75);
          animation: blur 2s;
          @keyframes blur {
            from {
              filter: blur(50px);
            }
            to {
              filter: blur(0);
            }
          }
        }
        .bg {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .parallax-item {
            position: relative !important;
            &.no-delay {
              transition: all 0s;
            }
          }
          img {
            width: 100% !important;
          }
        }
      }
      .right {
        margin-top: size-m(20);
        .text {
          width: size-m(207);
          height: auto;
        }
        .order-button {
          width: size-m(198.67);
          height: size-m(30);
          font-size: size-m(13);
          margin-top: size-m(20);
          font-weight: 600;
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
import Parallax from "parallax-js";

export default {
  name: "s1",
  props: ["scrollInstance"],

  data() {
    return {
      isMobile,
    };
  },

  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },

  mounted() {
    setTimeout(() => {
      if (isMobile) {
        return
      }
      $(".parallax-item").addClass("no-delay");
      var scene = document.getElementById("scene");
      new Parallax(scene, {
        relativeInput: true,
        pointerEvents: true,
        selector: ".parallax-item",
      });
    }, 1500);
  },

  created() { },
};
</script>
