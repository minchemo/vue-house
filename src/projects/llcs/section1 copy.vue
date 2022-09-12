<template>
  <div class="section1">
      <img class="bg" src="./s1/bg.png" alt="" srcset="" />
      <img class="l" src="./s1/1.png" alt="" v-if="!isMobile" srcset="" />
      <img class="l" src="./s1/1m.png" alt="" v-else srcset="" />
     <!-- <img class="bg" v-if="!isMobile" src="./s1/bg.png" alt="" srcset="" />
      <img class="bg" v-if="isMobile" src="./s1/bgm.png" alt="" srcset="" />
    <div class="main">
      <div class="title">
        <img data-aos="fade" data-aos-offset="-300" data-aos-duration="1000" class="logo" src="./s1/logoan.svg" alt="" srcset="" />
        <img data-aos="fade" data-aos-offset="-300" data-aos-duration="1000" data-aos-delay="200" class="t1" src="./s1/t01.png" alt="" srcset="" />
        <img v-if="isMobile" data-aos="fade" data-aos-offset="-300" data-aos-duration="1000" data-aos-delay="500" class="t2" src="./s1/t02.png" alt="" srcset="" />
        
      </div><img v-if="!isMobile" data-aos="fade" data-aos-offset="-300" data-aos-duration="1000" data-aos-delay="500" class="t2" src="./s1/t02.png" alt="" srcset="" />
      <img class="img" src="./s1/img.png" alt="" srcset="" />
    </div>
    <div class="bg"></div>
    -->

      <div class="ad">萬騰廣告</div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section1 {
  height: 100vh;
  max-height:calc(108000vw / 1920);
  min-height:calc(90000vw / 1920);
  background:#009FA3;
  .bg1{width: 100%;left: 0;top: 50%;transform: translateY(-50%);position: absolute;opacity: 0.5;}
  .bg{width: 91.2%;right: 0;top:calc(62% - 37vw);position: absolute;}
  .img{width: calc(547 * 100vw / 1920);left: -0.7vw;bottom:0;position: absolute;}

  .main {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;

    .title {
      position: absolute;
      left: 17%;
      top: 36%;
      transform: translateY(-50%);
      width: 76.5%;
      .logo {
        width: 30vw; float: left;
      }
      .t1 {
        margin: 4.5vw auto 0vw;
        width: 43.7vw; float: right;
      }
    }

      .t2 {
      position: absolute;
      left: 28%;
      bottom: calc(22.5% - 8vw);
        width: 60%;
      }
    .draw {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50vw;
    }

    .ad {
      position: absolute;
      right: 1.5em;
      bottom:1.5em;
      color: #fff;
      font-size: 1vw;
    }
  }
  /*.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    background-size: cover;
    background-image: url("~@/projects/llcs/s1/bg.jpg");
  } */
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    height: calc(100vh - 63px);
  max-height:calc(81200vw / 375 - 63px);
  min-height:calc(66700vw / 375 - 63px);
  .bg{width: auto;
  width: 100%;
  right: 0;
  left:0;top:auto;bottom:calc(23% - 10vw);position: absolute;}
  .img{width: calc(280 * 100vw / 375);left:17%;}
  

    .main {
      .title {
      left: 50%;
      top:0;
        transform: translate(-50%, 0);
      width: 100%;
      height:100%;
        .logo {
          position: relative;
          top:calc(45% + 100vw * (25 - 604 * .45) /375);
          width: 64vw;
          float:none;
          margin: 0 auto 0;
        }
        .t1 {
          position: relative;
          width: 72vw;
          top:calc(60% + 100vw * (31 - 604 * .60) /375);
          margin: auto;
          float:none;}
        .t2 {
          position: relative;
          top:calc(70% + 100vw * (38 - 604 * .70) /375);
          width: 72vw;
          margin: auto;
      left:auto;
      bottom:auto;
          float:none;
        }
      }

      .draw {
        width: 100%;
      }

      .ad {
        font-size: 16px;
      }
    }
  /*  .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
      background-size: 100%;
      background-image: url("~@/projects/llcs/s1/bg_mo.jpg");
    }
    */
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
  name: "section1",

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
