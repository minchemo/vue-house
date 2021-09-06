<template>
  <div class="section6">
    <div class="main">
      <div class="box1">
        <div class="text">
          <div class="title" data-aos="fade">
            大安流域謙謙逸品<br />寥若晨星珍如拱璧
          </div>
          <div v-if="!isMobile" class="des" data-aos="fade">
            「大安謙韵」依歷史為師，鑑古今之寓意，取汲大安路街區悠遠綿長的時光厚度，展演出此刻的建築篇章；建築身形清麗秀雅，白蒙卡石材佐淺色細條磚，巧思裝綴馬賽克與主臥陽台網印玻璃，一樓窗花玻璃呼應靜巷地貌，隱約透露古往今來的文人貴氣。
          </div>
          <div v-else class="des" data-aos="fade">
            取汲大安路街區悠遠時光厚度，展演此刻的建築篇章；建築以白蒙卡石材佐淺色細條磚，巧思裝綴馬賽克、主臥陽台網印玻璃與一樓窗花玻璃，隱約透露古往今來的文人貴氣。
          </div>
        </div>
      </div>
      <div class="box2" data-aos="fade">
        <p v-if="!isMobile">此為廣告效果示意，為單一建物電腦3D透視表現，周遭環境係電腦合成，建設公司保有建物外觀修正之權利。</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section6 {
  height: calc(100vh - 70px);
  min-height: calc(100vw * 900 / 1920 - 70px);
  max-height: calc(100vw * 1080 / 1920 - 70px);
  .main {
    display: flex;
    height: 100%;
    border-bottom: 1px solid #356292;
    .box1 {
      width: 45%;
      background: rgb(211, 227, 234);
      background: linear-gradient(
        -166deg,
        rgba(211, 227, 234, 1) 0%,
        #0054889a 44%,
        #005488b9 78%,
        #00386cb0 100%
      );
      display: flex;
      align-items: center;
      border-right: 1px solid #356292;
      .text {
        position: relative;
        width: 60%;
        margin: 0 auto;
        text-align: justify;
        color: #fff;
        font-size: calc(12px + 700vw / 1920);
        line-height: 2;
        .title {
          font-size: 1.6em;
          font-weight: bold;
          letter-spacing: 0.06em;
          line-height: 1.4;
        }
        .des {
          margin: 2em 0 0;
        }
      }
      .bottle {
        width: 25vw;
        position: absolute;
        left: -10vw;
        top: 5vw;
      }
    }
    .box2 {
      width: 55%;
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position-y: 70%;
      background-image: url('~@/projects/dm-h35/s6/D.jpg');
      p {
        font-family: 'Noto Sans TC';
        position: absolute;
        right: 2vw;
        bottom: 2vw;
        color: #fff;
        width: 40%;
        text-align: left;
        font-size: .7vw;
        line-height: 1.5;
        font-weight: 300;
      }
    }
  }
}
@keyframes draw {
  to {
    transform: skewX(3deg);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section6 {
    height: auto;
    min-height: 0;
    max-height: initial;
    .main {
      flex-wrap: wrap;
      border: 0;
      border-bottom: 2px solid #356292;
      .box1 {
        height: 40vh;
        width: 100%;
        border: 0;
        .text {
          position: relative;
          width: 70%;
          margin: 0 auto;
          font-size: calc(12px + 100vw / 375);
          .title {
            font-size: 1.3em;
            text-align: center;
          }
        }
        .bottle {
          width: 25vw;
          position: absolute;
          left: -10vw;
          top: 5vw;
        }
      }
      .box2 {
        height: 100vw;
        width: 100%;
        height: 60vh;
        position: relative;
        p {
          position: absolute;
          left: 2vw;
          bottom: 3.8vw;
          font-size: calc(100vw * 12 / 375);
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
  name: "section6",
  data() {
    return {
      isMobile,
    };
  },
  methods: {},
  created() {},
};
</script>