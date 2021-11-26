<template>
  <div class="section2">
    <div class="video-box" uk-parallax="viewport: 0.5;y:100,0;blur: 10,0"></div>
    <div class="content">
      <h2 uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:-200,0;x:-200,0">
        國際級CBD到位
        <br />
        副都心遠見城市就位
      </h2>
      <p uk-parallax="viewport: 0.3;y:50,0;blur:40,0;y:200,0;x:200,0">
        全面複製東京新宿副都心規劃，千億建設催生臺灣城市進化奇蹟。比肩信義計劃、看齊新板特區，一座站在巨人肩膀瞭望的國際級商業城市--新莊副都心將驚豔世界。
      </p>
      <img
        class="textimg"
        v-lazy
        :temp="require('@/projects/cc/s2/content.png')"
        alt=""
        srcset=""
        uk-parallax="viewport: 0.5;blur:50,0"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section2 {
  position: relative;
  height: auto;

  .video-box {
    margin-top: size(100);
    position: relative;
    width: size(1592);
    height: size(727.64);
    left: 50%;
    margin-left: -#{size(796)};
    background-color: #ff9e32;
    z-index: 1;
  }
  .content {
    width: size(930);
    margin: size(150) auto size(80) auto;

    h2 {
      font-size: size(50);
      letter-spacing: size(16);
      margin-bottom: size(20);
      line-height: 1.2;
    }
    p {
      font-size: size(24);
      letter-spacing: size(8);
      line-height: 1.5;
      margin-bottom: size(20);
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

  created() {},
};
</script>
