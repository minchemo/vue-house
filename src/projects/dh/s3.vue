<template>
  <div class="s3">
    <div class="item" data-aos="fade" ref="viewbox">
      <img
        ref="view"
        src="@/projects/dh/s3/a_m.jpg"
        alt=""
        srcset=""
        v-if="isMobile"
      />
    </div>
    <div class="info">
      <div class="t1" data-aos="fade-up" v-if="!isMobile">
        千億資金，東逐南港
      </div>
      <div class="t1" data-aos="fade-up" v-else>千億資金<br />東逐南港</div>
      <div class="t2" data-aos="fade-up" data-aos-delay="100">
        中信金控、台灣人壽、富邦人壽、國泰人壽、<br v-if="!isMobile" />
        三商美邦、潤泰建設、國產實業…，<br v-if="!isMobile" />
        東逐南港，購物中心、五星飯店、A級商辦、<br v-if="!isMobile" />
        頂級豪宅，千億資金強力啟動南港新未來。
      </div>
      <div class="mask" v-if="isMobile"></div>
    </div>
    <div class="divider" data-aos="scaleY"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s3 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background-image: url("~@/projects/dh/bg.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  .item {
    width: size(1100);
    height: size(800);
    background-image: url("~@/projects/dh/s3/a.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border: size(2) solid #1b485b;
  }

  .info {
    color: #1b485b;
    text-align: left;
    padding-left: size(120);
    .t1 {
      font-size: size(55);
      font-weight: bold;
      line-height: 1.5;
      .large {
        display: inline;
        font-size: size(69);
        margin-right: -12px;
      }
    }
    .t2 {
      margin-top: size(35);
      font-size: size(26);
      font-weight: 500;
      line-height: 2;
    }
  }

  .divider {
    position: absolute;
    width: size(2);
    height: size(160);
    background: #c28c65;
    bottom: -#{size(100)};
    left: 50%;
    z-index: 10;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s3 {
    position: relative;
    width: size-m(375);
    height: size-m(554);
    background-image: none;

    .item {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border: 0;
      overflow-x: scroll;
      overflow-y: hidden;
      background: #000;
      img {
        height: 100%;
        width: auto;
      }
    }

    .info {
      position: absolute;
      color: #fff;
      text-align: center;
      padding-left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: size-m(20) 0;
      pointer-events: none;
      padding-bottom: size-m(20) !important;
      .t1 {
        font-size: size-m(28.28);
        font-weight: bold;
        line-height: 1.5;
        .large {
          display: inline;
          font-size: size(69);
          margin-right: -12px;
        }
      }
      .t2 {
        max-width: size-m(320);
        margin-top: 0;
        font-size: size-m(13);
        font-weight: 500;
        line-height: 1.5;
        text-align: left;
        z-index: 1;
      }
      .mask {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 130px;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.519502801120448) 82%,
          rgba(0, 0, 0, 0.1805497198879552) 100%
        );
      }
    }

    .divider {
      display: none;
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
  name: "s3",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,

    };
  },
  mounted() {
    const self = this;
    $(this.$refs.view).one('load', () => {
      let pos = $(this.$refs.view).width();
      pos = pos / 2.55


      $(self.$refs.viewbox).scrollLeft(pos)
    })
  }
};
</script>