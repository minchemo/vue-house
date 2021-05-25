<template>
  <div class="section4">
    <div class="main">
      <div class="box1">
        <div class="text">
          <div class="title" data-aos="fade">大安流域謙謙逸品<br />寥若晨星珍如拱璧</div>
          <div v-if="!isMobile" class="des" data-aos="fade">
            「大安謙韵」依歷史為師，鑑古今之寓意，取汲<br />大安路街區悠遠綿長的時光厚度，展演出此刻的<br />建築篇章；建築身形清麗秀雅，白蒙卡石材佐淺<br />色細條磚，巧思裝綴馬賽克與網印玻璃，呼應靜<br />巷地貌，隱約透露古往今來的文人貴氣。
          </div>
          <div v-else class="des" data-aos="fade">
            「大安謙韵」取汲大安路街區悠遠的時光厚度，展演此刻的建築篇章；建築以白蒙卡石材佐淺色細條磚，巧思裝綴馬賽克與網印玻璃，隱約透露古往今來的文人貴氣。
          </div>
        </div>
        <img
          v-if="!isMobile" data-aos="fade"
          class="bottle"
          src="~@/projects/dm-h35/s4/bottle.png"
          alt=""
        />
      </div>
      <div class="box2" data-aos="fade">
        <img class="building" src="~@/projects/dm-h35/s4/building.jpg" alt="" />
        <img class="draw" src="~@/projects/dm-h35/s4/draw.png" alt="" />
        <p>「大安謙韵」外觀參考示意</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section4 {
  height:  calc(100vh - 70px);
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

        .title {
          font-size: 1.6vw;
          font-weight: bold;
          letter-spacing: 0.2vw;
          line-height: 2.2vw;
        }

        .des {
          margin-top: 5vw;
          font-size: 1.06vw;
          line-height: 2vw;
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
      .building {
        position: absolute;
          width: 110%;height:100%;
          object-fit: contain;
        right:-5%;
        bottom:0;
      }
      .draw {
        position: absolute;
        width: 20vw;
        right: 0;
        bottom: -1vw;
        transform-origin: 50% 100%;
    animation:draw 3s infinite alternate;
      }
      p {
        position: absolute;
        left: 2vw;
        bottom: 2vw;
      }
    }
  }
}
@keyframes draw {

  to {
    transform:skewX(3deg);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    height:auto;
  min-height:0;
  max-height:initial;
    .main {
      flex-wrap: wrap;
      border: 0;
      .box1 {
        height: 40vh;
        width: 100%;
        border: 0;
        .text {
          position: relative;
          width: 70%;
          margin: 0 auto;
          color: #fff;

          .title {
            font-size:calc(100vw * 17 / 375);
            font-weight: bold;
            letter-spacing: 1vw;
            line-height: 5vw;
          text-align: center;
          }

          .des {
            font-size:calc(100vw * 13 / 375);
            line-height: 7vw;
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
        .building {
          position: absolute;
          bottom: 2vh;
        }
        .draw {
          position: absolute;
          width: 50vw;
          right: -5vw;
          bottom: -1vw;
        }
        p {
          position: absolute;
          left: 2vw;
          bottom: 2vw;
            font-size:calc(100vw * 12 / 375);
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
  name: "section4",

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
