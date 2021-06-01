<template>
  <div class="section8">
    <div class="main">
      <div class="info">
        <div class="content">
          <img
            class="chunfu"
            src="@/projects/cby/s8/chunfu.png"
            alt=""
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="0"
          />
          <div
            v-if="!isMobile"
            class="title1"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="50"
          >
            <b>BRAND</b> 年年榮耀
          </div>
          <div
            v-else
            class="title1"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="50"
          >
            <b>BRAND</b> 好春福 好學年
          </div>
          <div
            v-if="!isMobile"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="100"
            class="title2"
          >
            好‧學‧年
          </div>
          <div
            v-if="!isMobile"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="150"
            class="desc"
          >
            從「好好」、「學學」到「年年」<br />
            春福用心 刷新安南的人文地貌<br />
            【春福建設】用38年累積的實力，慢火熬燉出建築的深厚根基，從新竹踏實發跡，延伸至台南深耕、綻放，以國際眼光，精選優質土地、預見潛力新區，承襲煙波大飯店經驗，提供更貼心優質的房地產服務。<br /><br />
            2019年【春福好好】、【春福學學】以學養建築精神，獲得青睞與肯定！如今，選在2021年的春天，【春福年年】以年度之選、年輕有為之生活主張，增添全新優質建築第三部曲，敬獻每一位重情愛家的台南人，開拓屬於自己的最美華年！
          </div>
          <div
            v-else
            class="desc"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="150"
          >
            春福好好、學學 用品牌紮根台南<br />
            春福年年新登場 用榮耀綻放台南
          </div>
        </div>
        <div class="leaf">
          <img class="leaf1" src="@/projects/cby/s8/leaf1.png" alt="" />
          <img class="leaf2" src="@/projects/cby/s8/leaf2.png" alt="" />
          <img class="leaf3" src="@/projects/cby/s8/leaf3.png" alt="" />
        </div>
      </div>
      <div class="swiper-box">
        <swiper ref="swiper" :options="swiperOptions">
          <swiper-slide
            v-for="(img, i) in imgList"
            v-bind:key="i"
            v-bind:style="{ backgroundImage: `url(${img.img})` }"
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-offset="0"
            data-aos-delay="0"
          >
            <img :src="img.img" alt="" />
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="0"
              data-aos-delay="200"
            >
              {{ img.caption }}
            </p>
          </swiper-slide>
        </swiper>
        <div v-if="isMobile" class="swiper-button-prev"></div>
        <div v-if="isMobile" class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section8 {
  height: 120vh;
  .main {
    display: flex;
    height: 100%;
    .info {
      width: 35%;
      background: #009890;
      position: relative;
      display: flex;
      align-items: center;
      .content {
        .chunfu {
          width: 30%;
        }
        .title1 {
          font-size: 2.2rem;
          color: #fff;
          margin: 30px 0 20px 0;
        }
        .title2 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 20px;
          background: #ae8355;
          display: inline-block;
          padding: 10px 10px;
        }
        .desc {
          width: 70%;
          color: #fff;
          text-align: justify;
          line-height: 2;
          font-size: 1.15rem;
          margin: 0 auto;
        }
      }
      .leaf {
        .leaf1 {
          position: absolute;
          left: -2vw;
          top: 0;
          width: 6vw;
          animation: leaf 2s ease-in-out 0s infinite alternate-reverse;
        }
        .leaf2 {
          position: absolute;
          right: -1vw;
          top: 0;
          width: 12vw;
          animation: leaf 2s ease-in-out 0s infinite alternate-reverse;
        }
        .leaf3 {
          position: absolute;
          right: -1vw;
          bottom: 0;
          width: 12vw;
          animation: leaf 2s ease-in-out 0s infinite alternate-reverse;
        }
      }
    }
    .swiper-box {
      position: relative;
      width: 65%;
      .swiper-slide {
        height: 120vh;
        background-size: cover;
        background-position: bottom;
        position: relative;
        img {
          visibility: hidden;
        }
        p {
          position: absolute;
          background: #ae8355;
          color: #fff;
          bottom: 30px;
          right: 0;
          font-size: 1.5rem;
          padding: 10px 24px;
        }
      }
    }
  }
}

@keyframes leaf {
  100% {
    transform: skew(5deg);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section8 {
    height: auto;

    .main {
      display: flex;
      height: 100%;
      flex-direction: column-reverse;
      .info {
        width: 100%;
        background: #009890;
        position: relative;
        display: flex;
        align-items: center;
        padding: 5vh 0;
        .content {
          .chunfu {
            width: 50%;
          }
          .title1 {
            font-size: 1.8rem;
          }
          .desc {
            width: 90%;
            text-align: center;
          }
        }
        .leaf {
          .leaf1 {
            width: 25vw;
          }
          .leaf2 {
            width: 40vw;
          }
          .leaf3 {
            right: -10vw;
            bottom: -8vw;
            width: 45vw;
          }
        }
      }
      .swiper-box {
        position: relative;
        width: 100%;
        .swiper-slide {
          height: 50vh;
          background-size: cover;
          p {
            position: absolute;
            background: #ae8355;
            color: #fff;
            bottom: 0;
            right: 50%;
            font-size: 1.5rem;
            padding: 10px 24px;
            transform: translate(50%, 0);
            white-space: nowrap;
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
          right: 30px;
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
          left: 30px;
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
// import style (>= Swiper 6.x)
import "swiper/css/swiper.css";
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "section8",
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
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
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
      imgList: [
        {
          img: !isMobile
            ? require("@/projects/cby/s8/1.jpg")
            : require("@/projects/cby/s8/mo-1.jpg"),
          caption: "春福好好　台南市安南區",
        },
        {
          img: !isMobile
            ? require("@/projects/cby/s8/2.jpg")
            : require("@/projects/cby/s8/mo-2.jpg"),
          caption: "春福學學 台南市安南區",
        },
        {
          img: !isMobile
            ? require("@/projects/cby/s8/3.jpg")
            : require("@/projects/cby/s8/mo-3.jpg"),
          caption: "春福采采 台南市永康區",
        },
        {
          img: !isMobile
            ? require("@/projects/cby/s8/4.jpg")
            : require("@/projects/cby/s8/mo-4.jpg"),
          caption: "春上春福 台南市永康區",
        },
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
