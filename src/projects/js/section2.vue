<template>
  <div class="section2">
    <div class="title-box">
      <div class="title"
        data-aos="fade" data-aos-delay="0"><span>幸福建築</span> 經典之作</div>
      <div class="subtitle"
        data-aos="fade" data-aos-delay="100">
        當代美學經典再現，實現對幸福的想望，透過臻璽建築，看到理想的人生。今生最有價值的投資，換更新住更好，輕取未來的圓夢起點。
      </div>
    </div>
    <div class="name">3D示意參考圖</div>
    <div class="bg"></div>
    <svg class="draw-mo" v-if="!isMobile" version="1.1" id="葉子" xmlns="http://www.w3.org/2000/svg"
	 viewBox="0 0 496.4 122.8">
	<path data-aos="fade" data-aos-delay="0" d="M305.4,80.6c22-3.5,32,16.3,35.9,42C314.3,125.3,303.4,98.8,305.4,80.6z"/>
	<path data-aos="fade" data-aos-delay="100" d="M479.2,72.6c-3.1-17.3,1-29.6,16.7-38.5C497.6,52.8,496.3,63.2,479.2,72.6z"/>
	<path data-aos="fade" data-aos-delay="200" d="M0,20.7C2.2,11.9,9.5,2.9,19.4,0C19.2,14.4,7,26.9,0,20.7z"/>
</svg>
    <img loading="lazy" v-if="isMobile" src="@/projects/js/s2/draw-mo.png" class="draw-mo" alt="" srcset="">
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section2 {
  height: calc(100vh - 60px);
  max-height: calc(108000vw / 1920 - 60px);
  min-height: calc(90000vw / 1920 - 60px);
  .bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: url("~@/projects/js/s2/bg.jpg") center;
    background-size: cover;
  }
  .title-box {
    position: absolute;
    z-index: 1;
    color: #fff;
    text-align: left;
    left: 7em;
    top: calc(50% - 11em);
    font-size: calc(2300vw / 1920);
    line-height: 1.6;
    .title {
      font-size: 3em;
      font-weight: bold;
      transform: scale(1.2)translateY(-10%);
      span {
        color: #fdd93f;
      }
    }

    .subtitle {
      margin-top: 0.8em;
      text-align: justify;
      font-weight: 500;
      letter-spacing: 0.1em;
      width: 25em;
      transform: scale(1.2);
    }
  }
.name{position:absolute;right: 1em;bottom: 1em;font-size:calc(1500vw / 1920);z-index: 2;color: #fff;}
  
	.draw-mo{
      width:calc(50000vw / 1920);
      position: absolute;
      left:calc(62500vw / 1920);
      top:calc(50% + (130 - 450) * 100vw / 1920);
      pointer-events: none;
      z-index: 10;
    animation: bird-skew 7s ease-in-out infinite alternate;
      fill:#8FB729;
      path:nth-child(1){transform:translate(-20%,-30%);}
      path:nth-child(2){transform:translate(-30%,-20%);}
      path:nth-child(3){transform:translate(10%,-40%);}
      
      }
  @keyframes bird-skew {
    to {
      transform:rotate(8deg);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    height: calc(100vh - 123px);
    max-height: calc(81200vw / 375 - 123px);
    min-height: calc(66700vw / 375 - 123px);
    .bg {
      background: #395fb2 url("~@/projects/js/s2/bg-m.jpg") no-repeat bottom
        center;
      background-size: contain;
    }
    .title-box {
      position: absolute;
      z-index: 1;
      color: #fff;
      text-align: center;
      left: 0;
      top:calc(40% - 40vw);
      font-size: calc(1600vw / 375);
      .title {
        font-size:2.5em;
        font-weight: bold;
        span {
          color: #fdd93f;
        }
      }
      .subtitle {
        text-align: justify;
        letter-spacing: 3px;
        line-height: 1.5;
        font-weight: normal;
        width: 90%;
        margin: 0 auto;
        margin-top: 20px !important;
      }
    }

.name{font-size:calc(1200vw / 375);}
  
    .draw-mo {
      width: 100px;
      position: absolute;
      right: 20px;
      top: 20px;
      pointer-events: none;
      z-index: 10;
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

  created() {},
};
</script>
