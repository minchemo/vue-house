<template>
  <div class="section3">
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
          <h2>國道都會環線<br />主線黃金生活圈</h2>
          <p>
            【春福年年】基地15分鐘內上國道8號、大橋火車站，加上北外環線預計2026年完工，連通南科約10分鐘車程、更可以透過大台南「三橫三縱」快速道路網，橫跨遠近城市、無往不利！市區重要幹道交匯於此，包括海佃路、北安路、郡安路、府安路等，帶來大量車潮與人潮、形塑商圈，更有COSTCO、星巴克等指標連鎖品牌進駐，創造機能一流的黃金生活圈！
          </p>
        </div>
        <div
          class="swiper-info"
          v-else
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>TRAFFIC<br />新環線 新動能</h2>
          <p>
            北外環線2026年完工 南科約10min<br />星巴克、COSTCO 海佃路指標生活圈
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
          <swiper ref="swiper1" :options="swiperOptions2">
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
          <h2>VIEW<br />新綠帶 新景觀</h2>
          <p>鄰近海佃國中小 孩子走路上學<br />公園 河堤 人文純境 涵養升級</p>
        </div>
        <div
          v-else
          class="swiper-info"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <h2>校園×公園×河堤<br />涵養環境最宜居</h2>
          <p>
            把握海佃國中、國小優質學區，孩子走路上學沒問題！區域內公園綠地林立，低密度、低建蔽規劃，可預見未來景觀一覽無遺！另外，基地區塊北接嘉南大圳、南近鹽水溪，漫漫河堤氛圍，涵養宜居生活最豐年！
          </p>
        </div>
      </div>
    </div>
    <div class="draw">
      <img class="draw1" src="~@/projects/cby/s3/draw/1.png" alt="" />
      <img class="draw2" src="~@/projects/cby/s3/draw/2.png" alt="" />
      <img class="draw3" src="~@/projects/cby/s3/draw/3.png" alt="" />
      <img class="draw4" src="~@/projects/cby/s3/draw/4.png" alt="" />
      <img class="draw5" src="~@/projects/cby/s3/draw/5.png" alt="" />
      <img
        class="draw6"
        src="~@/projects/cby/s3/draw/6.png"
        alt=""
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="400"
      />
      <div
        class="draw7"
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="300"
      ></div>
      <div
        class="draw8"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="300"
      ></div>
    </div>
  </div>
</template>
<style lang="scss">
.section3 {
  background-color: #fff;
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;

    .swiper-box {
      width: 60%;

      .swiper-pagination-bullet {
        background: #fff;
        opacity: 1;
        width: 16px;
        height: 16px;
        margin: 0 6px;
        &.swiper-pagination-bullet-active {
          background: #009991;
        }
      }
    }
    .swiper-slide {
      background-size: cover;
      height: 0;
      padding-bottom: 66.69%;

      .caption {
        color: #fff;
        position: absolute;
        right: 3%;
        bottom: 5%;
        font-size: 1rem;
        letter-spacing: 1.5px;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.6));
      }
    }

    .swiper-info {
      width: 35%;
      h2 {
        font-size: 2rem;
        font-weight: bold;
        color: #ae8355;
        text-align: left;
        border-bottom: 4px solid;
        margin-bottom: 10px;
        line-height: 1.2;
        padding: 0 10px 10px 10px;
      }
      p {
        text-align: justify;
        line-height: 2;
        padding: 0 10px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .section3 {
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10vw;

      .swiper-box {
        width: 100%;

        .swiper-pagination-bullet {
          background: #fff;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 4px;
          &.swiper-pagination-bullet-active {
            background: #009991;
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
          font-size: .9rem;
        }
      }

      .swiper-info {
        width: 100%;
        h2 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ae8355;
          text-align: left;
          border-bottom: 4px solid;
          margin-bottom: 10px;
          line-height: 1.2;
          padding: 0 0 10px 0;
        }
        p {
          text-align: justify;
          line-height: 2;
          padding: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section3 {
  height: auto;

  .sub-section1 {
    height: 100vh;
    padding-top: 10vh;
  }
  .sub-section2 {
    height: 100vh;
    padding-top: 15vh;
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

  .draw {
    img {
      position: absolute;
      animation: leaf 2s ease-in-out 0s infinite alternate-reverse;
      &.draw1 {
        right: 0;
        top: 0;
        width: 10%;
      }
      &.draw2 {
        left: 0;
        top: 90vh;
        width: 10vw;
      }
      &.draw3 {
        left: 40vw;
        top: 90vh;
        width: 15vw;
      }
      &.draw4 {
        right: 0;
        top: 90vh;
        width: 20vw;
      }
      &.draw5 {
        right: -2vw;
        bottom: -2vw;
        width: 10vw;
      }
      &.draw6 {
        right: 47vw;
        bottom: 0;
        width: 20vw;
        z-index: 1;
        animation: unset;
      }
    }

    .draw7 {
      position: absolute;
      left: 0;
      top: 0;
      width: 20%;
      height: 30%;
      background: #009991;
    }
    .draw8 {
      position: absolute;
      right: 0;
      bottom: 16%;
      width: 18%;
      height: 30%;
      background: #009991;
    }
  }
}

@keyframes leaf {
  100% {
    transform: skew(6deg);
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section3 {
    .sub-section1 {
      height: 60vh;
      padding-top: 0;
      margin-top: 10vh;
      .main {
        flex-direction: column-reverse;

        .swiper-box {
          position: relative;
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: #00a199;
            bottom: -5vw;
            left: -10vw;
          }
        }
      }
    }
    .sub-section2 {
      height: 70vh;
      padding-top: 0;
      margin-top: 10vh;
      .main {
        flex-direction: column-reverse;
        .swiper-info {
          h2 {
            text-align: left;
          }
        }
        .swiper-box {
          position: relative;
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: #00a199;
            bottom: -5vw;
            right: -10vw;
          }
        }
      }
    }

    .draw {
      img {
        display: none;
        position: absolute;
        animation: leaf 2s ease-in-out 0s infinite alternate-reverse;
        &.draw1 {
          right: 5%;
          top: 0;
          width: 25%;
          display: block;
        }
        &.draw2 {
          left: 78%;
          top: 31%;
          width: 30%;
          display: block;
        }
        &.draw4 {
          display: block;
          top: unset;
          bottom: 0;
          width: 80%;
        }
        &.draw6 {
          display: block;
          right: unset;
          left: 0;
          width: 40%;
          animation: unset;
          bottom: 2%;
        }
      }

      .draw7 {
        display: none;
      }
      .draw8 {
        display: none;
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
  name: "section3",
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
      imgList1: [
        {
          img: require("@/projects/cby/s3/s1-1.jpg"),
          caption: "",
        },
      ],
      imgList2: [
        {
          img: require("@/projects/cby/s3/s2-1.jpg"),
          caption: "海佃國中",
        },
        {
          img: require("@/projects/cby/s3/s2-2.jpg"),
          caption: "海佃國小",
        },
        {
          img: require("@/projects/cby/s3/s2-3.jpg"),
          caption: "溪東親子公園",
        },
        {
          img: require("@/projects/cby/s3/s2-4.jpg"),
          caption: "神祕恐龍公園",
        },
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
