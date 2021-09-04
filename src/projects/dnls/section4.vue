<template>
  <div class="section4">
    <div class="timeline-title" data-aos="flip-up" data-aos-duration="1000">
      CHRONOLOGY <br v-if="isMobile" />太平洋建設作品年表
    </div>
    <div class="timelines-box" id="timelines-box">
      <div class="timelines">
        <div
          class="timeline-item"
          v-bind:class="!timeline.below ? 'upside' : 'downside'"
          v-for="(timeline, i) in timelines"
          :key="i"
        >
          <span class="dot"></span>
          <span class="line"></span>

          <div class="info">
            <div class="year">{{ timeline.year }}</div>
            <div class="title">{{ timeline.title }}</div>
            <div class="subtitle">{{ timeline.subtitle }}</div>
          </div>

          <img class="cover" :src="timeline.img" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section4 {
  height: auto;
  width: 100vw;
  background-size: contain;
  background-image: url("~@/assets/img/bg.jpg");
  .timeline-title {
    font-size: 2vw;
    font-weight: bold;
    text-align: left;
    padding: 5vw 5vw 0 5vw;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      height: 1.5px;
      width: 35%;
      background: #000;
      bottom: -70px;
      left: 5%;
      opacity: 0.2;
    }
    &::after {
      content: "";
      position: absolute;
      height: 3px;
      width: 10%;
      background: #000;
      bottom: -70.5px;
      left: 5%;
      opacity: 0.5;
      animation: h-slide 4s alternate-reverse infinite;

      @keyframes h-slide {
        to {
          left: 30%;
        }
      }
    }
  }
  .timelines-box {
    width: 100%;
    height: 130vh;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-left: 10vw;
    &::-webkit-scrollbar {
      display: none;
    }
    .timelines {
      position: relative;
      height: 100%;
      white-space: nowrap;
      z-index: 1;
      .timeline-item {
        display: inline-flex;
        width: 11vw;
        height: 100%;
        transform: translateY(50%);
        position: relative;
        cursor: move;

        &::after {
          content: "";
          width: 12vw;
          height: 0.3vw;
          position: absolute;
          background: #000;
          top: 0.3vw;
        }

        .dot {
          width: 1vw;
          height: 1vw;
          background-color: #000;
          border-radius: 1vw;
        }

        .line {
          position: relative;
          width: 2px;
          height: 8vw;
          background: #000;
          left: -0.5vw;
        }

        .info {
          position: absolute;
          text-align: left;
          line-height: 2;
          .year {
            color: #b0272d;
            font-size: 1.5vw;
            font-weight: bold;
            opacity: 0;
            transition: all 1s;

            &.show {
              opacity: 1;
            }
          }
          .title {
            color: #000;
            font-size: 1vw;
            font-weight: bold;
            opacity: 0;
            transition: all 1s;

            &.show {
              opacity: 1;
            }
          }
          .subtitle {
            color: #000;
            font-size: 0.8vw;
            font-weight: bold;
            opacity: 0;
            transition: all 1s;

            &.show {
              opacity: 1;
            }
          }
        }

        .cover {
          position: absolute;
          width: 20vw;
          height: auto;
          transition: all 1s;
        }

        &.upside {
          .line {
            transform: translateY(-100%);
          }
          .info {
            transform: translate(1.5vw, -9vw);
          }
          .cover {
            transform: translate(0.5vw, -32vw);
            opacity: 0;
            &.show {
              transform: translate(0.5vw, -27vw);
              opacity: 1;
            }
          }
        }

        &.downside {
          .line {
            transform: translateY(0);
          }
          .info {
            transform: translate(1.5vw, 1.8vw);
          }
          .cover {
            transform: translate(0.5vw, 13.8vw);
            opacity: 0;
            &.show {
              transform: translate(0.5vw, 10.8vw);
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .bg {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 65%;
    background-color: #000;
    opacity: 0.15;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    height: auto;
    width: 100vw;
    background-size: contain;
    background-image: url("~@/assets/img/bg.jpg");

    .timeline-title {
      font-size: 30px;
      font-weight: bold;
      text-align: left;
      padding-top: 10vh;
      position: relative;
      line-height: 1.3;
      &::before {
        content: "";
        position: absolute;
        height: 1.5px;
        width: 80%;
        background: #000;
        bottom: -20px;
        left: 5%;
        opacity: 0.2;
      }
      &::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 10%;
        background: #000;
        bottom: -20.5px;
        left: 5%;
        opacity: 0.5;
        animation: h-slide 4s alternate-reverse infinite;

        @keyframes h-slide {
          to {
            left: 75%;
          }
        }
      }
    }

    .timelines-box {
      width: 100%;
      height: 130vh;
      position: relative;
      overflow-x: scroll;
      overflow-y: hidden;
      padding-left: 10vw;
      .timelines {
        position: relative;
        height: 100%;
        white-space: nowrap;
        z-index: 1;
        .timeline-item {
          display: inline-flex;
          width: 50vw;
          height: 100%;
          transform: translateY(50%);
          position: relative;
          cursor: move;

          &::after {
            content: "";
            width: 50vw;
            height: 2px;
            position: absolute;
            top: 10px;
          }

          .dot {
            width: 20px;
            height: 20px;
            border-radius: 20px;
          }

          .line {
            position: relative;
            width: 1px;
            height: 100px;
            background: #000;
            left: -10px;
          }

          .info {
            position: absolute;
            text-align: left;
            line-height: 1.5;
            .year {
              font-size: 20px;
            }
            .title {
              font-size: 18px;
            }
            .subtitle {
              font-size: 16px;
            }
          }

          .cover {
            position: absolute;
            width: 60vw;
            height: auto;
            transition: all 1s;
          }

          &.upside {
            .line {
              transform: translateY(-100%);
            }
            .info {
              transform: translate(20px, -110px);
            }
            .cover {
              transform: translate(10px, -350px);
              &.show {
                transform: translate(10px, -330px);
              }
            }
          }

          &.downside {
            .line {
              transform: translateY(20px);
            }
            .info {
              transform: translate(20px, 40px);
            }
            .cover {
              transform: translate(10px, 170px);
              &.show {
                transform: translate(10px, 140px);
              }
            }
          }
        }
      }
    }
    .bg {
      z-index: 0;
      position: absolute;
      width: 100%;
      height: 65%;
      background-color: #000;
      opacity: 0.15;
      top: 57%;
      left: 0;
      transform: translateY(-50%);
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
import info from "@/info";
import { isMobile } from "@/utils";
import "jquery-ui-dist/jquery-ui";
import "is-in-viewport";

export default {
  name: "section4",
  data() {
    return {
      info,
      isMobile,
      timelines: [
        {
          year: 1967,
          title: "太平洋建設創立",
          subtitle: "",
          img: "",
          below: false,
        },
        {
          year: 1968,
          title: "太平洋大廈",
          subtitle: "太平洋建設首案",
          img: "",
          below: true,
        },
        {
          year: 1968,
          title: "太平洋香檳大廈",
          subtitle: "頂好商圈的起點",
          img: "",
          below: false,
        },
        {
          year: 1971,
          title: "太平洋華園別墅",
          subtitle: "東區216名人巷主角",
          img: "",
          below: true,
        },
        {
          year: 1974,
          title: "太平洋百利大廈",
          subtitle: "特殊X型平面卓越設計",
          img: "",
          below: false,
        },
        {
          year: 1983,
          title: "太平洋商業大樓",
          subtitle: "東區圓形玻璃帷幕商業大樓",
          img: require("@/projects/dnls/s4/1983.jpg"),
          below: true,
        },
        {
          year: 1986,
          title: "太平洋百吉大廈",
          subtitle: "16面採光先進宜居擘劃",
          img: "",
          below: false,
        },
        {
          year: 1987,
          title: "太平洋鳳翔大廈",
          subtitle: "SRC結構創新台灣建築技術",
          img: require("@/projects/dnls/s4/1987.jpg"),
          below: true,
        },
        {
          year: 1987,
          title: "太平洋SOGO百貨",
          subtitle: "中日合資百貨創新台灣消費典範",
          img: require("@/projects/dnls/s4/1987-2.jpg"),
          below: false,
        },
        {
          year: 1988,
          title: "太平洋頂好綜合商業大樓 ",
          subtitle: "東區核心頂好名店城",
          img: "",
          below: true,
        },
        {
          year: 1990,
          title: "台北君悅酒店",
          subtitle: "創新台灣旅宿格局",
          img: require("@/projects/dnls/s4/1990.jpg"),
          below: false,
        },
        {
          year: 1994,
          title: "太平洋翡翠灣溫泉渡假飯店",
          subtitle: "創新台灣休閒型態",
          img: require("@/projects/dnls/s4/1994.jpg"),
          below: true,
        },
        {
          year: 2000,
          title: "太平洋時代",
          subtitle: "全氧化鈦磚環保宅",
          img: require("@/projects/dnls/s4/2000.jpg"),
          below: false,
        },
        {
          year: 2002,
          title: "太平洋凱旋花園別墅",
          subtitle: "信義計畫稀有前庭後院",
          img: require("@/projects/dnls/s4/2002.jpg"),
          below: true,
        },
        {
          year: 2003,
          title: "太平洋天母真園",
          subtitle: "古典養生宅",
          img: require("@/projects/dnls/s4/2003.jpg"),
          below: false,
        },
        {
          year: 2007,
          title: "太平洋LOHAS",
          subtitle: "自然樂活宅",
          img: "",
          below: true,
        },
        {
          year: 2009,
          title: "太平洋中研I-PRAK",
          subtitle: "自然樂活宅",
          img: "",
          below: false,
        },
        {
          year: 2010,
          title: "太平洋森之丘",
          subtitle: "北歐森活宅",
          img: require("@/projects/dnls/s4/2010.jpg"),
          below: true,
        },
        {
          year: 2013,
          title: "太平洋盛宴 松露莊園 茴香莊園",
          subtitle: "綠色生態宅",
          img: require("@/projects/dnls/s4/2013.jpg"),
          below: false,
        },
        {
          year: 2013,
          title: "中山世紀",
          subtitle: "中山北路訂製豪宅",
          img: require("@/projects/dnls/s4/2013-2.jpg"),
          below: true,
        },
        {
          year: 2014,
          title: "太平洋盛宴 干邑莊園 月桂莊園",
          subtitle: "綠色生態宅",
          img: "",
          below: false,
        },
        {
          year: 2016,
          title: "太平洋之森",
          subtitle: "中正區千坪街廓",
          img: require("@/projects/dnls/s4/2016.jpg"),
          below: true,
        },
        {
          year: 2016,
          title: "太平洋蒔景",
          subtitle: "自然系青心建築",
          img: "",
          below: false,
        },
        {
          year: 2020,
          title: "太平洋陽光四季",
          subtitle: "上萬坪國際級山居",
          img: "",
          below: true,
        },
        {
          year: 2021,
          title: "太平洋敦南麗舍",
          subtitle: "東區繁華再進化",
          img: "",
          below: false,
        },
      ],
    };
  },

  methods: {},

  mounted() {
    $(".timelines").draggable({
      cursor: "move",
      axis: "x",
      scroll: true,
      containment: "timelines-box",
      drag: function (event, ui) {
        showItem();
      },
    });
    const showItem = () => {
      const year = $(".timeline-item .info .year:in-viewport");
      const title = $(".timeline-item .info .title:in-viewport");
      const subtitle = $(".timeline-item .info .subtitle:in-viewport");
      const cover = $(".timeline-item .cover:in-viewport");

      year.addClass("show");
      title.addClass("show");
      subtitle.addClass("show");
      cover.addClass("show");
    };

    document.addEventListener(
      "scroll",
      function (event) {
        showItem();
      },
      true
    );
  },
  created() {},
};
</script>
