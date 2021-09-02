<template>
  <div class="subsection subsection61">
    <div class="title">豪宅建材 尊榮禮遇</div>
    <div class="desc">為滿足新世代居住需求，提升規格一次到頂，免費升等豪宅級建材，從舒適生活到健康防疫，樣樣力求盡善盡美，營造您的絕佳生活體驗。</div>
    <div class="list-box">
      <div class="list list1">
        <div class="list-item list-title">世界優選</div>
        <div
          class="list-item"
          v-for="(data, i) in list1"
          :key="i"
          data-aos="fade"
          data-aos-duration="1000" data-aos-offset="-100" 
          :data-aos-delay="i * 200"
        >
          <div class="list-item-title" v-html="data.title"></div>
          <div class="list-item-flag">
            <img :src="data.flag" alt="" srcset="" />
          </div>
          <div class="list-item-bg">
            <img :src="data.img" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div class="list list2">
        <div class="list-item list-title">防疫嚴選</div>
        <div
          class="list-item"
          v-for="(data, i) in list2"
          :key="i"
          data-aos="fade"
          data-aos-duration="1000" data-aos-offset="-100" 
          :data-aos-delay="i * 200"
        >
          <div class="list-item-title" v-html="data.title"></div>
          <div class="list-item-flag">
            <img :src="data.flag" alt="" srcset="" />
          </div>
          <div class="list-item-bg">
            <img :src="data.img" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>

    <img
      v-if="!isMobile"
      class="draw"
      src="~@/projects/llcs/s6/sb1/draw.png"
      alt=""
      srcset=""
    />
    <img
      v-else
      class="draw"
      src="~@/projects/llcs/s6/sb1/draw_mo.png"
      alt=""
      srcset=""
    />
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.subsection {
  position: relative;
  height: auto;
  padding: 5vw;
        color:#000;
        line-height: 1.6;
        text-align: center;
        font-size: calc(2000vw / 1920);
      .title {
        font-size: calc(5500vw / 1920);
        font-family: "Noto Serif TC";
        color:#005e3c;
        font-weight: bold;
        text-align: center;
        line-height: 1.3;
        &::after{content:"";
        margin: .45em auto .5em auto;
        width: 28em;height: 3px; background: currentColor;display: block;}
      }
      .desc {
        margin: 1em auto  1em auto;
        font-weight: 300;
    width: 45vw;
      }
  .content {
   //margin-top: -6vh;
    width: 50vw;
    margin-bottom: 6vh;
  }

  .list-box {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    z-index: 5;
    .list {
      display: flex;
      flex-wrap: wrap;

      &.list1 {
        width: 85%;
        .list-item {
          width: 15vw;
          height: 12.57vw;
        }
      }
      &.list2 {
        width: 40%;
        .list-item {
          width: 12.57vw;
          height: 12.57vw;
        }
      }
      .list-item {
        position: relative;
        margin: 0.1vw;
        overflow: hidden;

        .list-item-title {
          position: absolute;
          top: 55%;
          width: 100%;
          z-index: 5;
          color: #fff;
          font-size: 1vw;
          letter-spacing: 1.5px;
          line-height: 1.3;
          filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.9));
        }
        .list-item-flag {
          position: absolute;
          width: 15%;
          left: 50%;
          top: 50%;
          z-index: 5;
          transform: translate(-50%, -90%);
          img {
            width: 100%;
          }
        }
        .list-item-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
          }
        }
        &.list-title {
          background-size: cover;
          background-image: url("~@/projects/llcs/s6/sb1/itembg.jpg");
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 2vw;

          &::after {
            content: "";
            width: 92%;
            height: 92%;
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid #ddd;
            border-image: linear-gradient(rgb(207, 161, 8), rgb(255, 255, 121))
              30 30;

            transform: translate(-50%, -50%);
          }
          &::before {
            content: unset;
          }
        }
        &::before {
          content: "";
          position: absolute;
          z-index: 2;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transition: all 0.5s;
          background: rgb(0, 94, 60);
          background: linear-gradient(
            180deg,
            rgba(0, 94, 60, 0) 0%,
            rgba(0, 94, 60, 1) 100%
          );
        }

        &:hover {
          &::before {
            transform: translateY(100%);
          }
        }
      }
    }
  }
  .draw {
    position: absolute;
    z-index: 0;
    right: 5vw;
    top: 5vw;
    width: 15vw;
    pointer-events: none;
    transform: translateX(0);
    animation: floating 8s infinite alternate-reverse;

    @keyframes floating {
      from {
        transform: translate(-1%, -1%);
      }
      to {
        transform: translate(1%, 1%);
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .subsection {
    position: relative;
    height: auto;
    padding: 5vw;
    overflow: hidden;
        font-size: calc(1500vw / 375);

        .title {
        font-size: calc(3500vw / 375);
        margin: .45em 0 .3em 0;
        &::after{width: 6em;}
        }
      .desc{
          width: 80vw;
          text-align: justify;
      }
    .content {
      margin-top: 2vh;
      width: 80vw;
      margin-bottom: -4vh;
    }

    .list-box {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      flex-direction: column;
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &.list1 {
          width: 100%;
          .list-item {
            width: 40vw;
            height: 33.52vw;
          }
        }
        &.list2 {
          margin-top: 2vh;
          width: 100%;
          .list-item {
            width: 40vw;
            height: 33.52vw;
          }
        }
        .list-item {
          position: relative;
          margin: 0.1vw;
          overflow: hidden;

          .list-item-title {
            font-size: 3.5vw;
          }
          .list-item-flag {
            position: absolute;
            width: 20%;
            left: 50%;
            top: 50%;
            z-index: 5;
            transform: translate(-50%, -90%);
            img {
              width: 100%;
            }
          }
          .list-item-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
            }
          }
          &.list-title {
            background-size: cover;
            background-image: url("~@/projects/llcs/s6/sb1/itembg.jpg");
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 6vw;

            &::after {
              content: "";
              width: 92%;
              height: 92%;
              position: absolute;
              top: 50%;
              left: 50%;
              border: 1px solid #ddd;
              border-image: linear-gradient(
                  rgb(207, 161, 8),
                  rgb(255, 255, 121)
                )
                30 30;

              transform: translate(-50%, -50%);
            }
            &::before {
              content: unset;
            }
          }
          &::before {
            content: "";
            position: absolute;
            z-index: 2;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transition: all 0.5s;
            background: rgb(0, 94, 60);
            background: linear-gradient(
              180deg,
              rgba(0, 94, 60, 0) 0%,
              rgba(0, 94, 60, 1) 100%
            );
          }

          &:hover {
            &::before {
              transform: translateY(100%);
            }
          }
        }
      }
    }

    .draw {
      position: absolute;
      z-index: 0;
      right: -20vw;
      top: -16vw;
      width: 34vw;
      pointer-events: none;
      transform: translateX(0);
      animation: floating 8s infinite alternate-reverse;

      @keyframes floating {
        from {
          transform: translate(-1%, -1%);
        }
        to {
          transform: translate(1%, 1%);
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
  name: "subsection",

  data() {
    return {
      isMobile,
      list1: [
        {
          img: require("@/projects/llcs/s6/sb1/1.jpg"),
          flag: require("@/projects/llcs/s6/sb1/1_flag.png"),
          title: "德國INNOCI<br>馬桶、衛浴",
        },
        {
          img: require("@/projects/llcs/s6/sb1/2.jpg"),
          flag: require("@/projects/llcs/s6/sb1/2_flag.png"),
          title: "德國IMPULS<br>廚具",
        },
        {
          img: require("@/projects/llcs/s6/sb1/3.jpg"),
          flag: require("@/projects/llcs/s6/sb1/3_flag.png"),
          title: "杜拜RAK磁磚",
        },
        {
          img: require("@/projects/llcs/s6/sb1/4.jpg"),
          flag: require("@/projects/llcs/s6/sb1/4_flag.png"),
          title: "日本PANASONIC<br>四合一暖風機",
        },
        {
          img: require("@/projects/llcs/s6/sb1/5.jpg"),
          flag: require("@/projects/llcs/s6/sb1/5_flag.png"),
          title: "台灣錦鋐<br>隔音氣密窗",
        },
      ],
      list2: [
        {
          img: require("@/projects/llcs/s6/sb1/a.jpg"),
          flag: require("@/projects/llcs/s6/sb1/a_flag.png"),
          title: "英國STUDOR<br>管道防疫系統",
        },

        {
          img: require("@/projects/llcs/s6/sb1/b.jpg"),
          flag: require("@/projects/llcs/s6/sb1/b_flag.png"),
          title: "英國STUDOR<br>P.A.P.A.正壓調節器",
        },

        {
          img: require("@/projects/llcs/s6/sb1/c.jpg"),
          flag: require("@/projects/llcs/s6/sb1/c_flag.png"),
          title: "美國HONEYWEL<br>反沖洗過濾器",
        },
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
