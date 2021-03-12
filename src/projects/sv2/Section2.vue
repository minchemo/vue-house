<template>
  <div class="section2">
    <div class="view">
      <img v-if="isMobile" src="~@/projects/sv2/s2/view.jpg" alt="" />
      <svg
        class="t1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 398.86 306.62"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <g id="圖層_2" data-name="圖層 2">
          <g
            data-aos="fade"
            data-aos-delay="1200"
            id="圖層_1-2"
            data-name="圖層 1"
          >
            <text class="cls-1" x="50">
              <tspan x="60" y="0" xml:space="preserve">
                頂級雙園景渡假村
              </tspan>
              <tspan x="0" y="50" xml:space="preserve">
                把幸福生活，帶往新高度
              </tspan>
            </text>
            <text class="cls-3" transform="translate(61.43 162.68)">
              置身城市綠
              <tspan class="cls-4" x="110" y="0">洲，</tspan>
              <tspan x="144" y="0">體驗四季優美</tspan>
              <tspan x="14.08" y="41">林口大生活圈A7全新視野</tspan>
              <tspan x="-50" y="82">構築無憂假</tspan>
              <tspan class="cls-4" x="60" y="82">期，</tspan>
              <tspan x="94" y="82">無需遠</tspan>
              <tspan class="cls-4" x="160" y="82">求，</tspan>
              <tspan x="194" y="82">就是家的日常</tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section2 {
  width: 100%;
  height: 100vh;

  .view {
    height: 100%;
    width: 100%;
    background: url("~@/projects/sv2/s2/view.jpg");
    background-size: cover;
    background-position: bottom;

    .t1 {
      width: 25vw;
      max-width: 600px;
      position: absolute;
      top: 10vw;
      z-index: 1;
      left: calc(50% - 25vw * 0.5);
      // transform: translate(-50%, 0);
      overflow: visible;

      .cls-1 {
        font-size: 37.18px;
        font-weight: bold;
        fill: #f4f1f2;
        font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
      }
      .cls-2 {
        letter-spacing: -0.25em;
      }
      .cls-3 {
        font-size: 20px;
        fill: #fff;
        font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
        letter-spacing: 0.1em;
      }
      .cls-4 {
        letter-spacing: -0.15em;
      }
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    width: 100vw;
    height: calc(100vh - 60px - 63px);
    overflow-y: hidden;
    overflow-x: scroll;

    .view {
      display: inline-flex;
      width: auto;
      background: url("s2/view.jpg");
      background-size: cover;
      background-position: bottom;

      img {
        height: 100%;
        visibility: hidden;
      }

      .t1 {
        top: 20vw;
        width: 80vw;
        left: calc(50% - 80vw * 0.5);
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
      isMobile
    };
  },

  methods: {},

  created() {}
};
</script>
