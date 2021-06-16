<template>
  <div class="section4">
    <div class="sub-section1">
      <div class="main">
        <div
          class="swiper-box"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="0"
          data-aos-delay="100"
        >
          <swiper ref="swiper1" :options="swiperOptions1">
            <swiper-slide
              v-for="(imgList, i) in imgList1"
              v-bind:key="i"
              v-bind:style="{ backgroundImage: `url(${imgList.img})` }"
            >
              <p class="caption">{{ imgList.caption }}</p>
            </swiper-slide>
            <div
              v-if="imgList1.length > 1"
              class="swiper-pagination"
              slot="pagination"
            ></div>
          </swiper>
        </div>
        <div
          v-if="!isMobile"
          class="swiper-info"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2><span class="large">3</span>捷超級動能<br />站站精彩絕倫</h2>
          <p>
            捷運淡水信義線、中和新蘆線、松山新店線3線大會串，公車&U-bike站點雲集，悠遊一卡在手，通勤休閒生活全權在握。
          </p>
        </div>
        <div
          class="swiper-info"
          v-else
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>
            <span class="large">3</span>捷超級動能 <br /><span class="indent"
              >站站精彩絕倫</span
            >
          </h2>
          <p>
            捷運淡水信義線、中和新蘆線、松山新店線3線大會串，公車&U-bike站點雲集，悠遊一卡在手，通勤休閒生活全權在握。
          </p>
        </div>
      </div>
    </div>
    <div class="sub-section2">
      <div class="main">
        <div
          class="swiper-box"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <swiper ref="swiper2" :options="swiperOptions2">
            <swiper-slide
              v-for="(imgList, i) in imgList2"
              v-bind:key="i"
              v-bind:style="{ backgroundImage: `url(${imgList.img})` }"
            >
              <p class="caption">{{ imgList.caption }}</p>
            </swiper-slide>
            <div
              v-if="imgList2.length > 1"
              class="swiper-pagination"
              slot="pagination"
            ></div>
          </swiper>
          <div v-if="isMobile" class="swiper-button-prev"></div>
          <div v-if="isMobile" class="swiper-button-next"></div>
        </div>
        <div
          v-if="isMobile"
          class="swiper-info"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>
            精彩商圈雲集<br /><span class="indent">家門外分秒有樂事</span>
          </h2>
          <p>
            散步10分鐘內，饗樂富足應有盡有。早上生鮮市場採買，晚上國際級觀光夜市享樂，大安區最潮商圈最精彩生活通通都在這。
          </p>
        </div>
        <div
          v-else
          class="swiper-info"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>精彩商圈雲集 <br />家門外分秒有樂事</h2>
          <p>
            散步10分鐘內，饗樂富足應有盡有。早上生鮮市場採買，晚上國際級觀光夜市享樂，大安區最潮商圈最精彩生活通通都在這。
          </p>
        </div>
      </div>
    </div>
    <div class="sub-section3">
      <div class="main">
        <div
          class="swiper-box"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <swiper ref="swiper3" :options="swiperOptions3">
            <swiper-slide
              v-for="(imgList, i) in imgList3"
              v-bind:key="i"
              v-bind:style="{ backgroundImage: `url(${imgList.img})` }"
            >
              <p class="caption">{{ imgList.caption }}</p>
            </swiper-slide>
            <div
              v-if="imgList2.length > 1"
              class="swiper-pagination"
              slot="pagination"
            ></div>
          </swiper>
          <div v-if="isMobile" class="swiper-button-prev"></div>
          <div v-if="isMobile" class="swiper-button-next"></div>
        </div>
        <div
          v-if="isMobile"
          class="swiper-info"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>康青龍精彩街區 <br /><span class="indent">氣質天生出眾</span></h2>
          <p>
            永康、青田、龍泉街交織台北藝文夜未眠，漫走老樹巷弄薰陶臺大師大書香，在大安最文青聚落日日仰森氧生，優雅氣質天生。
          </p>
        </div>
        <div
          v-else
          class="swiper-info"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>康青龍精彩街區 <br />氣質天生出眾</h2>
          <p>
            永康、青田、龍泉街交織台北藝文夜未眠，漫走老樹巷弄薰陶臺大師大書香，在大安最文青聚落日日仰森氧生，優雅氣質天生。
          </p>
        </div>
      </div>
    </div>
    <div class="sub-section4">
      <div class="bg"></div>
      <div class="main">
        <div
          class="swiper-box"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="0"
          data-aos-delay="100"
        >
          <swiper ref="swiper1" :options="swiperOptions4">
            <swiper-slide
              v-for="(imgList, i) in imgList4"
              v-bind:key="i"
              v-bind:style="{ backgroundImage: `url(${imgList.img})` }"
            >
              <p class="caption">{{ imgList.caption }}</p>
            </swiper-slide>
            <div
              v-if="imgList1.length > 1"
              class="swiper-pagination"
              slot="pagination"
            ></div>
          </swiper>
        </div>
        <div
          v-if="!isMobile"
          class="swiper-info"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>金華中正雙星學區<br />台大師大預約席</h2>
          <p>
            根據研究，戶藉在大安區的孩子上台大的機率遠高於其他縣市數倍，近82%台大生來自前20名明星學校。卡位20年菁英養成聚落，給孩子知識的沃土，讓他為自己贏得精彩人生。
          </p>
        </div>
        <div
          class="swiper-info"
          v-else
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>金華中正雙星學區 <br />台大師大預約席</h2>
        </div>
      </div>
      <p v-if="isMobile" class="mo-info">
        根據研究，戶藉在大安區的孩子上台大的機率遠高於其他縣市數倍，近82%台大生來自前20名明星學校。卡位20年菁英養成聚落，給孩子知識的沃土，讓他為自己贏得精彩人生。
      </p>
      <img
        class="leftbottom"
        v-if="!isMobile"
        src="~@/projects/ab/s4/leftbottom.png"
        alt=""
      />
    </div>
    <div class="fix-bar fix-bar-1"></div>
    <div class="fix-bar fix-bar-2"></div>
    <div class="fix-bar fix-bar-3"></div>
    <div class="fix-bar fix-bar-4"></div>
    <div class="bg"></div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableColor.scss";
.section4 {
  background: #FAD2CD;
  position: relative;
  overflow: hidden;

  .sub-section1,
  .sub-section3 {
    .swiper-pagination-bullets {
      left: 10px;
      top: 0;
    }
  }
  .sub-section2 {
    .swiper-pagination-bullets {
      left: unset;
      right: 10px;
      top: 0;
    }
  }

  .sub-section4 {
    background-color: #fff;
    height: 100vh;
    display: flex;
    align-items: center;
    padding-right: 20vw;
    .leftbottom {
      width: 30px;
      position: absolute;
      left: 4%;
      bottom: 2%;
    }
    .main {
      min-width: 1150px;
      background: transparent;
      flex-direction: column-reverse;
      .swiper-box {
        width: 65%;
        position: relative;

        &:after {
          content: "";
          width: 100%;
          height: 100%;
          background: #d20028;
          position: absolute;
          bottom: -15px;
          left: -15px;
        }
        .swiper-pagination-bullets {
          width: 30px;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          align-items: center;
          flex-direction: column;
          right: 10px;
          left: unset;

          .swiper-pagination-bullet {
            background: #fff;
            opacity: 1;
            width: 16px;
            height: 16px;
            margin: 6px;
            &.swiper-pagination-bullet-active {
              background: #d20028;
            }
          }
        }
      }
      .swiper-slide {
        background-size: cover;
        height: 0;
        padding-bottom: 64.29%;
        .caption {
          color: #fff;
          position: absolute;
          left: 3%;
          bottom: 5%;
          font-size: 1rem;
          letter-spacing: 1.5px;
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.6));
        }
      }
      .swiper-info {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        font-family: $family1;
        margin-bottom: 30px;

        h2 {
          font-size: 1.8rem;
          font-weight: bold;
          color: #d20028;
          text-align: left;
          border-bottom: 0;
          margin-bottom: 0;
          line-height: 1.2;
          padding: 0;
          display: inline;
          margin-right: 20px;
          position: relative;
          .large {
            font-family: Georgia, "Times New Roman", Times, serif;
            font-size: 75px;
            font-style: italic;
            margin-right: 10px;
          }
          &::before {
            content: "STAR SCHOOL DISTRICT";
            position: absolute;
            top: -40px;
            width: 100%;
            white-space: nowrap;
            left: 0;
            font-size: 16px;
            letter-spacing: -1px;
            font-weight: bold;
            opacity: 0.5;
          }
        }
        p {
          border-left: 1px solid;
          text-align: justify;
          line-height: 2;
          padding: 0 0 0 20px;
          width: 45%;
          color: #d20028;
          margin-top: -0.5%;
        }
      }
    }
    .bg {
      background-image: url(~@/projects/ab/s4/s4-bg.png);
      position: absolute;
      width: 100%;
      height: 100vh;
      background-size: cover;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-position: center;
      opacity: 1;
    }
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75vw;
    margin: 0 auto;
    background-color: #d20028;
    z-index: 10;
    position: relative;
    .swiper-box {
      width: 65%;
      .swiper-pagination-bullets {
        width: 30px;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .swiper-pagination-bullet {
          background: #fff;
          opacity: 1;
          width: 16px;
          height: 16px;
          margin: 6px;
          &.swiper-pagination-bullet-active {
            background: #d20028;
          }
        }
      }
    }
    .swiper-slide {
      background-size: cover;
      height: 0;
      padding-bottom: 76.9%;
      .caption {
        color: #fff;
        position: absolute;
        left: 3%;
        bottom: 5%;
        font-size: 1rem;
        letter-spacing: 1.5px;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.6));
      }
    }
    .swiper-info {
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: $family1;

      h2 {
        font-size: 2rem;
        font-weight: bold;
        color: #fadedb;
        text-align: center;
        border-bottom: 1px solid;
        margin-bottom: 10px;
        line-height: 1.2;
        padding: 0 10px 10px 10px;
        display: inline;
        .large {
          font-family: Georgia, "Times New Roman", Times, serif;
          font-size: 75px;
          font-style: italic;
          margin-right: 10px;
        }
      }
      p {
        text-align: justify;
        line-height: 2;
        padding: 0 10px;
        width: 60%;
        color: #fff;
      }
    }
  }
  .fix-bar {
    background: rgba(231, 149, 14);
    background: linear-gradient(
      90deg,
      rgba(253, 227, 82, 1) 0%,
      rgba(231, 149, 14, 0.7) 20%,
      rgba(195, 13, 35, 0.3) 70%,
      rgba(195, 13, 35, 0) 100%
    );
    position: absolute;
    transition: all 0.5s;
    transform-origin: center;
    transform: scaleX(1);
    animation: animate 10s infinite;
    z-index: 1;

    &.fix-bar-1 {
      width: 15%;
      height: 4%;
      right: 2vw;
      top: 0;
      animation-delay: random(5) + s;
    }

    &.fix-bar-2 {
      width: 12%;
      height: 4%;
      right: 17%;
      top: 30%;
      animation-delay: random(5) + s;
    }
    &.fix-bar-3 {
      width: 12%;
      height: 1%;
      right: 7%;
      top: 35%;
      animation-delay: random(5) + s;
    }
    &.fix-bar-4 {
      width: 10%;
      height: 5%;
      left: 0;
      bottom: 100vh;
      animation-delay: random(5) + s;
    }

    @keyframes animate {
      0% {
        transform: scaleX(1);
      }
      50% {
        transform: scaleX(1.5);
      }
      100% {
        transform: scaleX(1);
      }
    }
  }

  .bg {
    width: 100%;
    height: 50vh;
    background-image: url(~@/projects/ab/s4/bg.png);
    z-index: 0;
    position: absolute;
    bottom: 100vh;
    left: 0;
    background-position: bottom;
    background-size: 100%;
    opacity: 0.2;
  }
}
@media only screen and (max-width: 767px) {
  .section4 {
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      .swiper-box {
        width: 100%;
        .swiper-pagination-bullets {
          display: block;
          width: 100%;
          bottom: unset;
          top: 15px;
          .swiper-pagination-bullet {
            background: #fff;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 4px;
            &.swiper-pagination-bullet-active {
              background: #d20028;
            }
          }
        }
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: 50%;
          width: 10vw;
          height: 10vw;
          border: 1px solid #fff;
          border-radius: 100%;
          &:after {
            content: "";
            border-top: 4px solid #fff;
            border-right: 4px solid #fff;
            position: relative;
            width: 4vw;
            height: 4vw;
            transform: rotate(45deg);
            margin-left: -1vw;
          }
        }
        .swiper-button-prev {
          &:after {
            content: "";
            border-top: 0;
            border-right: 0;
            border-bottom: 4px solid #fff;
            border-left: 4px solid #fff;
            margin-left: 1vw;
          }
        }
      }
      .swiper-slide {
        height: 25vh;
        .caption {
          left: unset;
          right: 10px;
          font-size: 0.9rem;
        }
      }
      .swiper-info {
        width: 100%;
        h2 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #fadedb;
          text-align: left;
          border-bottom: 2px solid;
          margin-bottom: 10px;
          line-height: 1.3;
          padding: 0 0 10px 0;
          width: 90%;
          margin-top: 15px;
          white-space: nowrap;
          .large {
            font-size: 32px;
          }
          .indent {
            display: block;
            text-align: right;
          }
        }
        p {
          text-align: justify;
          line-height: 2;
          padding: 0;
          margin-bottom: 20px;
          width: 90%;
          font-size: 14px;
        }
      }
    }

    .bg {
      width: 100%;
      height: 100%;
      background-image: url(~@/projects/ab/s4/bg-mo.png);
      z-index: 0;
      position: absolute;
      bottom: 100vh;
      left: 0;
      background-position: bottom;
      background-size: 100%;
      opacity: 0.2;
    }

    .fix-bar {
      background: rgba(231, 149, 14);
      background: linear-gradient(
        90deg,
        rgba(253, 227, 82, 1) 0%,
        rgba(231, 149, 14, 0.7) 20%,
        rgba(195, 13, 35, 0.3) 70%,
        rgba(195, 13, 35, 0) 100%
      );
      position: absolute;
      transition: all 0.5s;
      transform-origin: center;
      transform: scaleX(1);
      animation: animate 10s infinite;
      z-index: 1;

      &.fix-bar-1 {
        width: 50%;
        height: 3%;
        right: unset;
        left: 10vw;
        top: 0;
        animation-delay: random(5) + s;
      }

      &.fix-bar-2 {
        width: 50%;
        height: 5%;
        right: unset;
        left: 10vw;
        top: 55vh;
        animation-delay: random(5) + s;
      }
      &.fix-bar-3 {
        display: none;
      }
      &.fix-bar-4 {
        display: none;
      }

      @keyframes animate {
        0% {
          transform: scaleX(1);
        }
        50% {
          transform: scaleX(1.5);
        }
        100% {
          transform: scaleX(1);
        }
      }
    }
  }

  .sub-section4 {
    height: auto !important;
    padding-top: 8vh;
    padding-bottom: 5vh;
    display: block !important;
    padding-right: 0 !important;
    position: relative;

    .main {
      min-width: unset !important;
      background: transparent;
      flex-direction: column-reverse;
      width: 90% !important;
      margin: 0 auto !important;
      .swiper-box {
        width: 100% !important;
        position: relative;

        &:after {
          content: "";
          width: 100%;
          height: 100%;
          background: #d20028;
          position: absolute;
          bottom: -5px !important;
          left: -5px !important;
        }
        .swiper-pagination-bullets {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          right: unset !important;
          left: unset !important;
          bottom: unset !important;
          top: 10px !important;

          .swiper-pagination-bullet {
            background: #fff;
            opacity: 1;
            width: 16px;
            height: 16px;
            margin: 6px;
            &.swiper-pagination-bullet-active {
              background: #d20028;
            }
          }
        }
      }
      .swiper-slide {
        background-size: cover;
        height: 0;
        padding-bottom: 64.29%;
        .caption {
          right: unset !important;
          color: #fff;
          position: absolute;
          left: 3%;
          bottom: 5%;
          font-size: 1rem;
          letter-spacing: 1.5px;
          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.6));
        }
      }
      .swiper-info {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        font-family: $family1;
        margin-bottom: 30px;

        h2 {
          font-size: 1.8rem;
          font-weight: bold;
          color: #d20028;
          text-align: left;
          border-bottom: 0;
          margin-bottom: 0;
          line-height: 1.2;
          padding: 0;
          display: inline;
          margin-right: 20px;
          position: relative;
          .large {
            font-family: Georgia, "Times New Roman", Times, serif;
            font-size: 75px;
            font-style: italic;
            margin-right: 10px;
          }
          &::before {
            content: "STAR SCHOOL DISTRICT";
            position: absolute;
            top: -40px;
            width: 100%;
            white-space: nowrap;
            left: 0;
            font-size: 16px;
            letter-spacing: -1px;
            font-weight: bold;
            opacity: 0.5;
          }
        }
        p {
          border-left: 1px solid;
          text-align: justify;
          line-height: 2;
          padding: 0 0 0 20px;
          width: 45%;
          color: #d20028;
          margin-top: -0.5%;
        }
      }
    }
    .mo-info {
      width: 90%;
      text-align: justify;
      margin: 0 auto;
      color: #d20028;
      margin-top: 5vh;
      font-size: 16px;
      line-height: 1.5;
      z-index: 10;
      position: relative;
    }
    .bg {
      background-image: url(~@/projects/ab/s4/s4-bg.png);
      position: absolute;
      width: 100%;
      height: 50vh !important;
      background-size: 100% !important;
      background-repeat: no-repeat;
      bottom: unset !important;
      left: 0;
      top: 0;
      z-index: 1;
      background-position: top !important;
      opacity: 1;
    }
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section4 {
  height: auto;
  .sub-section1 {
    height: auto;
    padding-top: 5vh;
  }
  .sub-section2 {
    height: auto;
    padding-top: 10vh;
    .main {
      flex-direction: row-reverse;
      .swiper-info {
        h2 {
          text-align: center;
          letter-spacing: 4px;
        }
      }
    }
  }
  .sub-section3 {
    height: auto;
    padding-top: 10vh;
    padding-bottom: 15vh;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    padding-top: 5vh;
    .sub-section1 {
      height: auto;
      padding-top: 0;
      .main {
        flex-direction: column;
        .swiper-box {
          position: relative;
        }
      }
    }
    .sub-section2 {
      height: auto;
      padding-top: 0;
      margin-top: 5vh;
      .main {
        flex-direction: column;
        .swiper-info {
          h2 {
            text-align: left;
          }
        }
        .swiper-box {
          position: relative;
        }
      }
    }
    .sub-section3 {
      height: auto;
      padding-top: 0;
      margin-top: 5vh;
      .main {
        flex-direction: column;
        .swiper-box {
          position: relative;
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import style (>= Swiper 6.x)
import "swiper/css/swiper.css";
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "section4",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      isMobile,
      swiperOptions1: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      swiperOptions2: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      swiperOptions3: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      swiperOptions4: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      imgList1: [
        {
          img: require("@/projects/ab/s4/s1-1.jpg"),
          caption: "古亭站  步行約6分鐘",
        },
        {
          img: require("@/projects/ab/s4/s1-2.jpg"),
          caption: "中正紀念堂站  步行約8分鐘",
        },
        {
          img: require("@/projects/ab/s4/s1-3.jpg"),
          caption: "東門站  步行約9分鐘",
        },
      ],
      imgList2: [
        {
          img: require("@/projects/ab/s4/s2-1.jpg"),
          caption: "永康商圈  步行約9分鐘",
        },
        {
          img: require("@/projects/ab/s4/s2-2.jpg"),
          caption: "南門市場  步行約10分鐘",
        },
        {
          img: require("@/projects/ab/s4/s2-3.jpg"),
          caption: "東門站商圈_南門中繼市場",
        },
        {
          img: require("@/projects/ab/s4/s2-4.jpg"),
          caption: "古亭站商圈_寶雅",
        },
        {
          img: require("@/projects/ab/s4/s2-5.jpg"),
          caption: "師大商圈  步行約10分鐘",
        },
        {
          img: require("@/projects/ab/s4/s2-6.jpg"),
          caption: "南門市場未來示意圖",
        },
      ],
      imgList3: [
        {
          img: require("@/projects/ab/s4/s3-1.jpg"),
          caption: "金華潮州街巷_金錦町",
        },
        {
          img: require("@/projects/ab/s4/s3-2.jpg"),
          caption: "金華潮州街巷_金錦町",
        },
        {
          img: require("@/projects/ab/s4/s3-3.jpg"),
          caption: "大安森林公園",
        },
        {
          img: require("@/projects/ab/s4/s3-4.jpg"),
          caption: "中正紀念堂及兩廳院",
        },
        {
          img: require("@/projects/ab/s4/s3-5.jpg"),
          caption: "青田街巷",
        },
        {
          img: require("@/projects/ab/s4/s3-6.jpg"),
          caption: "青田街巷",
        },
        {
          img: require("@/projects/ab/s4/s3-7.jpg"),
          caption: "青田街巷_異雲書屋",
        },
      ],
      imgList4: [
        {
          img: require("@/projects/ab/s4/s4-1.jpg"),
          caption: "中正國中   步行約5分鐘",
        },
        {
          img: require("@/projects/ab/s4/s4-2.jpg"),
          caption: "建國中學",
        },
        {
          img: require("@/projects/ab/s4/s4-3.jpg"),
          caption: "金華國小   步行約7分鐘",
        },
        {
          img: require("@/projects/ab/s4/s4-4.jpg"),
          caption: "臺灣大學",
        },
        {
          img: require("@/projects/ab/s4/s4-5.jpg"),
          caption: "師範大學",
        },
      ],
    };
  },
  methods: {},
  created() {},
};
</script>