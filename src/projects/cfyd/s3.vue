<template>
  <div class="s3">
    <div class="bg"></div>
    <div class="title" data-aos="flip-up" data-aos-delay="200">
      <h1>VISION OF TAINAN</h1>
      <p>安平綠金眼界 佔領軌道交匯</p>
    </div>
    <div class="times" data-aos="fade-right" data-aos-delay="400">
      <div class="__item" data-aos="flip-up" data-aos-delay="400">
        <p class="__time">1mins</p>
        <!--p class="__time">近</p-->
        <p class="__name">市政商圈</p>
      </div>
      <div class="__item" data-aos="flip-up" data-aos-delay="700">
        <p class="__time">5mins</p>
        <!--p class="__time">接</p-->
        <p class="__name">新光三越</p>
      </div>
      <div class="__item" data-aos="flip-up" data-aos-delay="1000">
        <p class="__time">5mins</p>
        <!--p class="__time">連</p-->
        <p class="__name">遊艇碼頭</p>
      </div>
      <div class="__item" data-aos="flip-up" data-aos-delay="1300">
        <p class="__time">5mins</p>
        <!--p class="__time">通</p-->
        <p class="__name">海洋之丘</p>
      </div>
    </div>
    <div class="content">
      <div class="__header">時尚流域 精彩核心</div>
      <div class="__item" data-aos="flip-up" data-aos-delay="0">
        <div class="__title">時尚</div>
        <div class="__text" v-if="!isMobile">
          10分鐘內速接新光三越、小西門、藍晒圖文創
        </div>
        <div class="__text" v-else>
          轉身速接新光三越、小西門、藍晒圖文創
        </div>
      </div>
      <div class="__item" data-aos="flip-up" data-aos-delay="200">
        <div class="__title">商圈</div>
        <div class="__text" v-if="!isMobile">
          坐擁繁華國華商圈、新光商圈及海安路商圈
        </div>
        <div class="__text" v-else>坐擁繁華國華商圈、新光商圈及海安路商圈</div>
      </div>
      <div class="__item" data-aos="flip-up" data-aos-delay="400">
        <div class="__title">機能</div>
        <div class="__text" v-if="!isMobile">
          5分鐘抵家樂福、全聯，永華路上採買一次到位
        </div>
        <div class="__text" v-else>
          直驅抵家樂福、全聯，永華路上採買一次到位
        </div>
      </div>
      <div class="__item" data-aos="flip-up" data-aos-delay="600">
        <div class="__title">學校</div>
        <div class="__text" v-if="!isMobile">
          坐落安平國小、金城國中、慈濟中學等優質學區
        </div>
        <div class="__text" v-else>
          坐落安平國小、金城國中、慈濟中學等優質學區
        </div>
      </div>
      <div class="__item" data-aos="flip-up" data-aos-delay="800">
        <div class="__title">公園</div>
        <div class="__text" v-if="!isMobile">
          公園第一排，3分鐘達萬坪府平公園，住進健康裡
        </div>
        <div class="__text" v-else>
          公園第一排，散步到萬坪府平公園，住進健康裡
        </div>
      </div>
    </div>
    <div class="hc">
      <Honeycomb />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s3 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-color: transparent;
  z-index: 12;
  padding-top: size(70);
  .title {
    position: relative;
    margin: 0 auto;
    width: size(1015);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-bottom: 1px solid #946134;
    padding-bottom: size(10);
    transform: translateX(-3%) !important;
    z-index: 10;
    h1 {
      font-size: size(92);
      font-weight: 1000;
      color: #fff;
      margin-bottom: size(10);
    }
    p {
      font-size: size(38);
      font-weight: bold;
      color: #946134;
      font-family: "Noto serif TC";
    }
  }
  .times {
    position: relative;
    left: size(410);
    width: size(764);
    margin-top: size(25);
    display: flex;
    justify-content: space-between;
    .__item {
      color: #fff;
      .__time {
        position: relative;
        font-size: size(43.6);
        font-weight: 200;
        &::first-letter {
          //font-size: size(70) !important;
          font-size: size(50) !important;
          color: #fff;
          font-weight: 200;
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: size(30.53);
          left: 0;
          bottom: -#{size(30)};
          background: url("~@/projects/cfyd/s3/arrow.png") no-repeat;
          background-size: contain;
          background-position: center;
        }
      }
      .__name {
        margin-top: size(35);
        font-size: size(30);
        font-weight: light;
      }
    }
  }
  .content {
    position: relative;
    left: size(410);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    .__header {
      font-size: size(33);
      color: #808080;
      font-family: "Noto Serif tc";
      font-weight: bold;
      margin-top: size(70);
      margin-bottom: size(25);
      position: relative;
      &::before {
        content: "";
        width: size(391);
        height: 1px;
        background: #946134;
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateX(-5%);
      }
      &::after {
        content: "";
        width: size(391);
        height: 1px;
        background: #946134;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateX(5%);
      }
    }
    .__item {
      display: flex;
      align-items: flex-end;
      color: #fff;
      margin-bottom: size(30);
      .__title {
        position: relative;
        font-size: size(26.5);
        &::after {
          content: "";
          position: relative;
          width: size(15);
          height: size(20);
          display: inline-block;
          background-image: url("~@/projects/cfyd/s3/slash.svg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: bottom center;
          margin-left: size(3.5);
        }
      }
      .__text {
        font-size: size(17);
      }
    }
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@/projects/cfyd/s3/bg.png");
    background-position: center;
    background-size: cover;
    z-index: 0;
  }
  .hc {
    position: absolute;
    right: -1vw;
    top: 3vw;
    width: 100%;
    transform-origin: right top;
    display: flex;
    justify-content: flex-end;
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
    height: size-m(912);
    background-color: transparent;
    z-index: 5;
    padding-top: size-m(215);
    margin-top: -#{size-m(220)};
    .title {
      position: relative;
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 0px;
      padding-bottom: size(10);
      padding-left: size-m(30);
      h1 {
        font-size: size-m(20);
        margin-bottom: size-m(10);
      }
      p {
        font-size: size-m(20);
      }
    }
    .times {
      position: relative;
      left: 0;
      width: 100%;
      margin-top: size-m(30);
      display: flex;
      justify-content: space-between;
      padding-left: size-m(30);
      padding-right: size-m(30);
      .__item {
        color: #fff;
        text-align: left;
        .__time {
          font-size: size-m(12);
          &::first-letter {
            font-size: size-m(16) !important;
          }
          &::after {
            content: "";
            position: absolute;
            width: size-m(27);
            height: size-m(7.5);
            left: 55%;
            bottom: 0;
            background: url("~@/projects/cfyd/s3/arrow.png") no-repeat;
            background-size: contain;
            background-position: center bottom;
          }
        }
        .__name {
          margin-top: size-m(5);
          font-size: size-m(15);
          font-weight: light;
          letter-spacing: size-m(2);
        }
      }
    }
    .content {
      position: relative;
      left: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      .__header {
        width: auto;
        font-size: size-m(16);
        color: #808080;
        font-family: "Noto Serif tc";
        font-weight: bold;
        margin-top: size-m(20);
        margin-bottom: size-m(10);
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        &::before {
          content: "";
          width: size-m(95);
          height: 1px;
          background: #946134;
          position: absolute;
          top: 50%;
          right: 100%;
          transform: translateX(-30%);
        }
        &::after {
          content: "";
          width: size-m(95);
          height: 1px;
          background: #946134;
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateX(30%);
        }
      }
      .__item {
        display: flex;
        align-items: flex-end;
        color: #fff;
        margin-bottom: size-m(12);
        padding-left: size-m(30);
        .__title {
          position: relative;
          font-size: size-m(16);
          &::after {
            content: "";
            position: relative;
            width: size-m(8);
            height: size-m(13);
            display: inline-block;
            background-image: url("~@/projects/cfyd/s3/slash.svg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: bottom center;
            margin-left: size-m(3.5);
            margin-right: size-m(5);
          }
        }
        .__text {
          font-size: size-m(12);
        }
      }
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("~@/projects/cfyd/s3/bg_m.png");
      background-position: center;
      background-size: cover;
      z-index: 0;
    }
    .hc {
      position: absolute;
      right: 0;
      bottom: size-m(50);
      top: unset;
      width: size-m(375);
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
import Honeycomb from "@/projects/cfyd/honeycomb.vue";

export default {
  name: "s3",
  props: ["scrollInstance"],
  components: {
    Honeycomb
  },
  data() {
    return {
      isMobile,
      visual: "",

    };
  },

  methods: {
    // scrollTo(el) {
    //   this.scrollInstance.scrollTo(el);
    // },
  },

  created() {
  },
  mounted() {
    if (!isMobile) {

      let scaleVal = $(window).width() / 2119.16;

      $('.hc').css('transform', 'scale(' + scaleVal + ')');
    } else {
      let scaleVal = $(window).width() / 376;

      $('.hc').css('transform', 'scale(' + scaleVal + ')');

    }
  },
};
</script>