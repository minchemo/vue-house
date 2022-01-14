<template>
  <div class="s7">
    <div class="text">
      <div class="t1">
        森情樹海之首<br />
        力麒回歸天母獻禮
      </div>
      <div class="t2">
        力麒建設三代定居天母至今40多年<br />
        這裡，是力麒建設家族「心中最美的念想」<br />
        基於情感，因於緣份，力麒建設用心整合河畔別墅<br />
        終以30年功力，成就”正面俯瞰公園大片林蔭、磺溪彩虹橋水岸綠堤”的完美基地<br />
        獨一無二、無可比擬，作為力麒久違天母的回歸獻禮
      </div>
    </div>
    <div class="img-box"></div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s7 {
  width: size(1920);
  height: size(900);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  background-image: url("~@/projects/tm/s7/bg.jpg");
  background-size: cover;
  .text {
    display: flex;
    align-items: center;
    margin-bottom: size(60);
    margin-left: size(120);
    color: #4d4d4d;
    .t1 {
      font-size: size(70);
      text-align: left;
      line-height: 1.1;
      margin-right: size(100);
      position: relative;
      &:before {
        content: "";
        width: size(200);
        height: 1px;
        background: #000;
        position: absolute;
        transform: rotate(110deg);
        transform-origin: center;
        right: -#{size(155)};
        top: size(60);
      }
    }
    .t2 {
      text-align: left;
      font-size: size(20);
      line-height: 1.5;
    }
  }
  .img-box {
    height: size(548);
    width: 100%;
    background: red;
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
  name: "s7",
  data() {
    return {
      isMobile,
    };
  },
};
</script>

