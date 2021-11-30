<template>
  <div class="section2">
    <div class="video-box" uk-parallax="viewport:0.3;y:100,0;blur: 60,0"></div>
    <div class="content">
      <h2 uk-parallax="viewport: 0.3;y:80,0;blur:40,0">
        國際級CBD到位
        <br />
        副都心遠見城市就位
      </h2>
      <p uk-parallax="viewport: 0.3;y:100,0;blur:40,0">
        全面複製東京新宿副都心規劃，千億建設催生臺灣城市進化奇蹟。比肩信義計劃、看齊新板特區，一座站在巨人肩膀瞭望的國際級商業城市--新莊副都心將驚豔世界。
      </p>
      <img
        class="textimg"
        v-lazy
        :temp="require('@/projects/cc/s2/content.png')"
        alt=""
        srcset=""
        uk-parallax="viewport:0.3;blur:50,0"
      />
    </div>
    <img
      class="leaf"
      src="@/projects/cc/s2/leaf.png"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:50,0"
    />
    <div class="bg"></div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section2 {
  position: relative;
  height: auto;
  padding-top: size(100);
  padding-bottom: size(20);

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0%;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .leaf {
    width: size(345);
    position: absolute;
    right: 0;
    bottom: size(120);
  }

  .video-box {
    position: relative;
    width: size(1592);
    height: size(727.64);
    left: 50%;
    margin-left: -#{size(796)};
    background: url("~@/projects/cc/s2/play.jpg");
    background-position: center;
    background-size: cover;
    z-index: 1;
  }
  .content {
    width: size(930);
    margin: size(150) auto size(80) auto;
    z-index: 1;

    h2 {
      font-size: size(50);
      letter-spacing: size(16);
      margin-bottom: size(20);
      line-height: 1.2;
      font-family: "Noto Serif TC", serif;

    }
    p {
      font-size: size(24);
      letter-spacing: size(8);
      line-height: 1.5;
      margin-bottom: size(20);
      font-family: "Noto Serif TC", serif;
    }
    .textimg {
      width: size(100);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    position: relative;
    height: auto;
    padding-top: size-m(100);
    padding-bottom: size-m(20);

    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      top: 0%;
      left: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    .leaf {
      display: none;
    }

    .video-box {
      position: relative;
      width: size(1592);
      height: size(727.64);
      left: 50%;
      margin-left: -#{size(796)};
      background: url("~@/projects/cc/s2/play.jpg");
      background-position: center;
      background-size: cover;
      z-index: 1;
    }
    .content {
      width: 90%;
      margin: size-m(100) auto size-m(50) auto;

      h2 {
        font-size: size-m(19);
        letter-spacing: size-m(7);
        margin-bottom: size-m(20);
        line-height: 1.3;
      }
      p {
        font-size: size-m(15);
        letter-spacing: size-m(8);
        line-height: 1.5;
        margin-bottom: size-m(50);
      }
      .textimg {
        width: size-m(75);
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
  name: "section2",

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() { },
};
</script>
