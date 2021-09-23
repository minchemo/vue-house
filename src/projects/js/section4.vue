<template>
  <div class="section4">
    <div class="subsection nav-section-1">
      <div class="box">
        <div class="title">
          <h2 class="v"
        data-aos="fade" data-aos-delay="0">
            15min<br />
            台北101<br />
            <b>房價更輕鬆</b>
          </h2>
          <p class="v"
        data-aos="fade" data-aos-delay="100">
            開車約30秒上「基隆中和交流道」速遊八方，約2分鐘抵「復興商圈」豐美隨享，6分鐘達基隆市區，約15鐘串聯北市各精華商圈。一樣通勤時間，聰明選擇房價大不同。
          </p>
        </div>
        <div
          class="swiper-box"
          data-aos="fade"
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
        <img loading="lazy" class="draw1" src="@/projects/js/s4/draw1.png" alt="" srcset="" />
        <img loading="lazy" class="draw4" src="@/projects/js/s4/draw2.png" alt="" srcset="" data-aos="fade" data-aos-delay="300"  data-aos-offset="-300" />
        <img loading="lazy"
          v-if="!isMobile"
          class="draw3"
          src="@/projects/js/s4/draw3.png"
          alt=""
          srcset=""
        />
        <img loading="lazy"
          v-else
          class="draw3"
          src="@/projects/js/s4/draw3-mo.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="subsection nav-section-2">
      <div class="box">
        <div class="title v"
        data-aos="fade" data-aos-delay="0">
          <div class="t1" >
            全球嚴選<br />
            8大精品
          </div>
          <div class="t2">享受生活</div>
        </div>
        <img loading="lazy"
          v-if="!isMobile"
          class="box2"
          src="@/projects/js/s4/box2.png"
          alt=""
          srcset=""
          data-aos="fade" data-aos-delay="100"
        />
        <img loading="lazy"
          v-else
          class="box2"
          src="@/projects/js/s4/box2-mo.png"
          alt=""
          srcset=""
        />
        <img loading="lazy"
          v-if="!isMobile"
          class="box2-f"
          src="@/projects/js/s4/box2-f.png"
          alt=""
          srcset=""
        />
        <img loading="lazy"
          v-if="!isMobile"
          class="draw4"
          src="@/projects/js/s4/draw4.png"
          alt=""
          srcset=""
        />
        <img loading="lazy"
          v-else
          class="draw4"
          src="@/projects/js/s4/draw4-mo.png"
          alt=""
          srcset=""
        />
        <img loading="lazy"
          v-if="!isMobile"
          class="draw5"
          src="@/projects/js/s4/draw5.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
    
    <!-- 
    <div class="subsection nav-section-3">
      <div class="box">
        <div
          class="swiper-box"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="0"
          data-aos-delay="100"
        >
          <swiper ref="swiper1" :options="swiperOptions2">
            <swiper-slide
              v-for="(imgList, i) in imgList2"
              v-bind:key="i"
              v-bind:style="{ backgroundImage: `url(${imgList.img})` }"
            >
              <div class="title">
                <h2>{{ imgList.caption }}</h2>
                <p>
                  {{ imgList.caption }}
                </p>
              </div>
            </swiper-slide>
            <div
              v-if="imgList2.length > 1"
              class="swiper-pagination"
              slot="pagination"
            ></div>
          </swiper>
        </div>
      </div>
      <img loading="lazy" class="draw6" src="@/projects/js/s4/draw6.png" alt="" srcset="" />
      <img loading="lazy" class="draw7" src="@/projects/js/s4/draw7.png" alt="" srcset="" />
    </div>
    -->
    <div class="bg"></div>
  </div>
</template>
<style lang="scss">
.subsection {
  &:nth-child(3) {
    .swiper-pagination-bullets {
      position: absolute;
      right: 16px;
      left: unset;
      width: auto;
      .swiper-pagination-bullet {
        background: #fff;
        opacity: 1;
        width: 16px;
        height: 16px;
        margin: 8px !important;
        &.swiper-pagination-bullet-active {
          background: #666666;
        }
      }
    }
  }
}

.swiper-pagination-bullets {
  position: absolute;
  right: 0;
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
    width: 16px;
    height: 16px;
    margin: 8px !important;
    &.swiper-pagination-bullet-active {
      background: #fdd93f;
    }
  }
}
@media only screen and (max-width: 767px) {
  .subsection {
    &:nth-child(3) {
      .swiper-pagination-bullets {
        position: absolute;
        right: 0;
        left: unset;
        width: 100%;
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 1;
          width: 12px;
          height: 12px;
          margin: 4px !important;
          &.swiper-pagination-bullet-active {
            background: #666666;
          }
        }
      }
    }
  }

  .swiper-pagination-bullets {
    position: absolute;
    right: 0;
    .swiper-pagination-bullet {
      background: #fff;
      opacity: 1;
      width: 12px;
      height: 12px;
      margin: 4px !important;
      &.swiper-pagination-bullet-active {
        background: #fdd93f;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section4 {
  height: auto;

  .subsection {
    position: relative;
  height: calc(100vh - 60px);
  max-height: calc(108000vw / 1920 - 60px);
  min-height: calc(90000vw / 1920 - 60px);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .box {
      width: 80%;
      height: calc(71000vw / 1920);
      background-color: #fdd93f;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:  calc(5000vw / 1920) calc(5000vw / 1920);
      color: #333333;
    }
    .v{transform:scale(1.2);}
    .draw4{transform:translateX(-70%);}
          
    &:nth-child(1) {
      .box {
        .title {
          max-width: 40%;
          padding-right: calc(5000vw / 1920);
          align-self: flex-start;
          font-size: calc(2300vw / 1920);
          line-height: 1.6;
          h2 {
            font-size: 3em;
            text-align: left;
            font-weight: 800;
            line-height: 1.2;
            b {
              font-weight: 500;
            }
          }
          p {
            text-align: justify;
            margin-top: 20px;
      font-weight: 500;
          }
        }
        .draw1 {
          width: calc(53000vw / 1920);
          position: absolute;
          z-index: 0;
          left: 0;
          bottom: 0;
        }
        .draw4 {
          width: calc(40000vw / 1920);
          position: absolute;
          z-index: 0;
          left: calc(14000vw / 1920);
          bottom: calc(-9500vw / 1920);
          top: auto;
        }
        .draw3 {
          width: calc(15000vw / 1920);
          position: absolute;
          z-index: 0;
          left: calc(43000vw / 1920);
          top: calc(10000vw / 1920);
        }
      }
      .swiper-box {
        width: 60%;
        height:calc(62000vw / 1920);
        position: relative;
      .swiper-container{height: 100%;}

        .swiper-slide {
          background-size: cover;
          //height: 0;
          //padding-bottom: 66.76%;
          min-width: 100%;
          .caption {
            right: 30px;
            top: 30px;
            color: #fff;
            position: absolute;
            font-size: 24px;
            border-bottom: 4px solid #fff;
            padding-bottom: 8px;
            letter-spacing: 1.5px;
          }
        }
      }
    }
    &:nth-child(2) {
      .title {
        position: absolute;
        display: flex;
        align-items: flex-end;
        left: 1.3em;
        bottom: 1.3em;
        font-size: calc(2000vw / 1920);
        .t1 {
          font-size: 3em;
          text-align: justify;
          text-align-last: justify;
          font-weight: 900;
          line-height: 1.2;
        }
        .t2 {
          font-size: 2.9em;
          font-weight: 500;
          margin-left: 0.43em;
          line-height: 1.2;
        }
      }
      .box2 {
        width: 100%;
        margin-top: -10%;
      }
      .box2-f {
        position: absolute;
        width: 100vw;
        margin-top: -10%;
        right: -10vw;
        bottom: -18.4vw;
      }
      .draw4 {
        width: 200px;
        position: absolute;
        z-index: 0;
        right: -150px;
        top: -50px;
      }
      .draw5 {
        width: 70px;
        position: absolute;
        z-index: 0;
        left: -100px;
        top: 100px;
      }
    }
    &:nth-child(3) {
      .box {
        padding: 0;
        .title {
          position: absolute;
          z-index: 10;
          width: 100%;
          color: #fff;
          display: flex;
          align-items: flex-end;
          height: 200px;
          left: 0;
          bottom: 0;
          padding: 30px;
          background: linear-gradient(
            0deg,
            rgba(253, 217, 63, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          h2 {
            font-size: 70px;
            white-space: nowrap;
          }
          p {
            margin-left: 32px;
            font-size: 24px;
            text-align: left;
            line-height: 1.5;
            max-width: 80%;
          }
        }
        .swiper-box {
          width: 100%;
          height: 100%;
          position: relative;

          .swiper-container {
            width: 100%;
            height: 100%;

            .swiper-slide {
              background-size: cover;
              width: 100%;
              height: 100%;
              .caption {
                right: 30px;
                top: 30px;
                color: #fff;
                position: absolute;
                font-size: 24px;
                border-bottom: 4px solid #fff;
                padding-bottom: 8px;
                letter-spacing: 1.5px;
              }
            }
          }
        }
      }
      .draw6 {
        width: 150px;
        position: absolute;
        z-index: 0;
        left: -30px;
        bottom: 100px;
      }
      .draw7 {
        width: 350px;
        position: absolute;
        z-index: 10;
        right: 0;
        bottom: 30px;
        pointer-events: none;
      }
    }
  }

  .bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: url("~@/projects/js/s4/bg.jpg");
    top: 0;
    left: 0;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    height: auto;
    overflow: hidden;

    .subsection {
      position: relative;
      height: auto;
  max-height:initial;
  min-height: calc(6670vw / 375 - 123px);
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5vh 0 3vh 0;
      .box {
        width: 80%;
        height: 75%;
        background-color: #fdd93f;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 50px;
        color: #333333;
        flex-direction: column;
      }
      &:nth-child(1) {
        .box {
          width: 95%;
          padding: 6vw 3vw 35vw 3vw;
          height: auto;
          .title {
            max-width: 100%;
            padding-right: 0;
            align-self: flex-start;
            font-size: calc(5000vw / 1920);
            line-height: 1.6;
            margin-bottom: 6vw;
            h2 {
              font-size: 3em;
              text-align: left;
              font-weight: 800;
              line-height: 1.2;
              b {
                font-weight: 500;
              }
            }
            p {
              text-align: justify;
              margin-top: 2vh;
              font-size: 14px;
            }
          }
          .draw1 {
            width: 100%;
            position: absolute;
            z-index: 0;
            left: -3vw;
            bottom: 0;
          }
          .draw4 {
            width: calc(20000vw / 375);
            position: absolute;
            z-index: 0;
            left: calc(10000vw / 375);
            bottom: calc(-4000vw / 375);
            top: auto;
          }
          .draw3 {
            width: auto;
            height: 150px;
            position: absolute;
            z-index: 0;
            left: unset;
            right: -3vw;
            top: -90px;
          }
        }
        .swiper-box {
          width: 100%;
          height: calc(22000vw / 375);
          position: relative;

          .swiper-slide {
            background-size: cover;
          /* height: 0;
            padding-bottom: 66.76%; */
            min-width: 100%;
            .caption {
              right: 15px;
              top: 15px;
              color: #fff;
              position: absolute;
              font-size: 16px;
              border-bottom: 4px solid #fff;
              padding-bottom: 8px;
              letter-spacing: 1.5px;
            }
          }
        }
      }
      &:nth-child(2) {
        height: auto;
        .box {
          width: 95%;
          padding: 3vw;
          height: 160vw;
          .title {
            position: absolute;
            display: flex;
            align-items: flex-end;
            left: 1.3em;
            bottom: unset;
            top: 1.3em;
            font-size: calc(6500vw / 1920);
            .t1 {
              font-size: 3em;
              text-align: justify;
              text-align-last: justify;
              font-weight: 900;
              line-height: 1.2;
            }
            .t2 {
              font-size: 2.9em;
              font-weight: 500;
              margin-left: 0.43em;
              line-height: 1.2;
            }
          }
          .box2 {
            width: 100vw;
            margin-top: 0;
            position: absolute;
            right: 0;
            bottom: -10vh;
          }
          .draw4 {
            height: 200px;
            position: absolute;
            z-index: 0;
            right: unset;
            left: -15vw;
            top: unset;
            bottom: -150px;
          }
          .draw5 {
            display: none;
          }
        }
      }
      &:nth-child(3) {
        height: auto;
        padding: 20vw 0 20vw 0;

        .box {
          width: 100%;
          padding: 0;
          height: 90vh;
          .title {
            position: absolute;
            z-index: 10;
            width: 100%;
            color: #fff;
            display: flex;
            align-items: flex-start;
            height: auto;
            min-height: 100px;
            left: 0;
            bottom: 0;
            padding: 30px;
            flex-direction: column;
            background: linear-gradient(
              0deg,
              rgba(253, 217, 63, 1) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            h2 {
              font-size: 40px;
              white-space: nowrap;
            }
            p {
              margin-left: 0;
              margin-top: 10px;
              font-size: 16px;
              text-align: left;
              line-height: 1.5;
              max-width: 80%;
            }
          }
          .swiper-box {
            width: 100%;
            height: 100%;
            position: relative;

            .swiper-container {
              width: 100%;
              height: 100%;

              .swiper-slide {
                background-size: cover;
                width: 100%;
                height: 100%;
                .caption {
                  right: 15px;
                  top: 15px;
                  color: #fff;
                  position: absolute;
                  font-size: 16px;
                  border-bottom: 4px solid #fff;
                  padding-bottom: 8px;
                  letter-spacing: 1.5px;
                }
              }
            }
          }
        }
        .draw6 {
          width: 90px;
          position: absolute;
          z-index: 10;
          left: unset;
          right: 0;
          bottom: 20vw;
          pointer-events: none;
        }
        .draw7 {
          display: none;
        }
      }
    }

    .bg {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-image: url("~@/projects/js/s4/bg.jpg");
      top: 0;
      left: 0;
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
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
  spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
      imgList1: [
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/1.jpg"): require("@/projects/js/s4/swipe1/1.jpg"),
          caption: "中和國小",
        },
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/2.jpg"):require("@/projects/js/s4/swipe1/2.jpg"),
          caption: "復興商圈",
        },
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/3.jpg"):require("@/projects/js/s4/swipe1/3.jpg"),
          caption: "基隆夜市",
        },
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/4.jpg"):require("@/projects/js/s4/swipe1/4.jpg"),
          caption: "基隆中和交流道",
        },
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/5.jpg"):require("@/projects/js/s4/swipe1/5.jpg"),
          caption: "海洋廣場",
        },
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/6.jpg"):require("@/projects/js/s4/swipe1/6.jpg"),
          caption: "基隆燈塔",
        },
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/7.jpg"): require("@/projects/js/s4/swipe1/7.jpg"),
          caption: "外木山",
        },
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/8.jpg"):require("@/projects/js/s4/swipe1/8.jpg"),
          caption: "大武崙",
        },
        {
          img:isMobile?require("@/projects/js/s4/swipe1/m/9.jpg"):require("@/projects/js/s4/swipe1/9.jpg"),
          caption: "情人湖",
        },
      ],
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
          delay: 3000,
          disableOnInteraction: false,
        },
      },
      imgList2: [
        {
          img: require("@/projects/js/s4/swipe2/1.jpg"),
          caption: "樣品屋",
        },
        {
          img: require("@/projects/js/s4/swipe2/1.jpg"),
          caption: "樣品屋",
        },
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
