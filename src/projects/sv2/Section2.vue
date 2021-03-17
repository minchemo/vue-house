<template>
  <div class="section2">
    <div class="view">
      <img v-if="isMobile" src="~@/projects/sv2/s2/view.jpg" alt="" />
      <div
        class="txt"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h3 class="title1">頂級雙園景渡假村<br />把幸福生活，帶往新高度</h3>
        <div class="title3">
          置身城市綠洲，體驗四季優美<br />
          林口大生活圈A7全新視野<br />
          構築無憂假期，無需遠求，就是家的日常
        </div>
      </div>
      <!--
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
      -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section2 {
  width: 100%;
  height: calc(100vh - 55px);
  min-height: calc(100vw * 900 / 1920 - 55px);
  max-height: calc(100vw * 1080 / 1920 - 55px);

  .view {
    height: 100%;
    width: 100%;
    background: url("~@/projects/sv2/s2/view.jpg");
    background-size: cover;
    background-position: bottom;
    .txt {
      width: 100%;
      position: absolute;
      top: calc(50% - 15vw);
      z-index: 1;
      left: 0;
      color: #fff;
      font-size: calc(100vw * 45 / 1920);
      line-height: 1.3;
      .title3 {
        font-weight: 400;
        font-size: 0.55em;
        letter-spacing: 0.04em;
        margin: 4em 0 0;
        line-height: 2;
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
    min-height: calc(100vw * 604 / 375 - 60px - 63px);
    max-height: calc(100vw * 750 / 375 - 60px - 63px);
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
      .txt {
        font-size: calc(100vw * 27 / 375);
        top: calc(75% - 90vw);
        .title3 {
          font-weight: 400;
          letter-spacing: 0.1em;
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
