<template>
  <div>
    <div class="s2s3">
      <div class="s2">
        <div v-if="!isMobile" class="title" data-aos="fade-up">
          <p
            v-for="(item, i) in videos"
            :key="i"
            @click="currentVideoIndex = i"
            v-bind:class="{ active: currentVideoIndex == i }"
          >
            {{ item.title }}
          </p>
        </div>
        <div v-else class="title" data-aos="fade-up">
          <img
            src="~@/projects/tm/s2s3/prev.svg"
            alt=""
            srcset=""
            @click="prevVideo"
          />
          <p>
            {{ videos[currentVideoIndex].title }}
          </p>
          <img
            src="~@/projects/tm/s2s3/next.svg"
            alt=""
            srcset=""
            @click="nextVideo"
          />
        </div>
        <div
          class="video-box"
          v-bind:style="{
            backgroundImage: `url(${videos[currentVideoIndex].bg})`,
          }"
        >
          <img
            class="playbutton"
            src="~@/projects/tm/s2s3/playbutton.svg"
            alt=""
            srcset=""
            @click="videoPopOpen = true"
          />
        </div>
      </div>
      <div class="s3">
        <img src="@/projects/tm/s2s3/tree.png" class="tree" alt="" srcset="" />
        <div class="title">
          <div class="t1" data-aos="fade">陽明山貴冑之地</div>
          <div class="t2" data-aos="fade-up">磺溪豐景第一排</div>
          <div
            class="t3"
            v-if="!isMobile"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            13.5公里長的磺溪，自帶陽明大屯風水，直抵天母<br />
            只有短短500公尺展現天地大能量<br />
            鋪陳出名流薈萃的使館特區及高級住宅街廓<br />
            力麒天沐，立於磺溪第一排、森林美景之首<br />
            擷取天母萬中選一的風聲水起聚氣美地<br />
            居於此地，享受天階氣韻、沐於美好薈萃
          </div>
          <div class="t3" v-else data-aos="fade-up" data-aos-delay="400">
            13.5公里長的磺溪，自帶陽明大屯風水，直抵天母，只有短短500公尺展現天地大能量，鋪陳出名流薈萃的使館特區及高級住宅街廓，力麒天沐，立於磺溪第一排、森林美景之首
            擷取天母萬中選一的風聲水起聚氣美地，居於此地，享受天階氣韻、沐於美好薈萃
          </div>
        </div>
        <div class="swipe-box" data-aos="fade">
          <swiper :options="swiperOptions">
            <swiper-slide
              v-for="(img, i) in imgs"
              :key="i"
              v-bind:style="{
                backgroundImage: `url('${img.url}')`,
              }"
            >
              <div class="caption">{{ img.caption }}</div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="video-popup" v-bind:class="{ show: videoPopOpen == true }">
      <div class="iframe" v-html="videos[currentVideoIndex].embed"></div>
      <div class="close" @click="videoPopOpen = false"></div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s2s3 {
  width: 100%;
  height: size(1800);
  // height: size(900);
  background-image: url("~@/projects/tm/s2s3/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  // background-position: center;
  background-position: bottom;

  .s2,
  .s3 {
    position: relative;
    width: 100%;
    height: size(900);
  }
  .tree {
    position: absolute;
    z-index: 1;
    top: calc(50% + (-255 - 1080 * 0.5) * 100vw / 1920);
    left: -10px;
    width: 72.5%;
  }

  .s2 {
    position: relative;
    display: flex;
    // display: none;
    align-items: center;
    justify-content: center;
    .title {
      width: size(410);
      margin-right: size(80);
      p {
        width: 100%;
        font-size: size(40);
        font-weight: 300;
        color: #fff;
        border-bottom: 1px solid #c3a672;
        padding: size(40) 0;
        transform: all 0.5s;

        &:last-child {
          border: 0;
        }
        &.active {
          font-weight: bolder;
        }
        &:hover {
          cursor: pointer;
          font-weight: bolder;
        }
      }
    }
    .video-box {
      position: relative;
      width: size(1035);
      height: size(585);
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      .playbutton {
        width: size(69.5);
        height: size(69.5);
        transition: all 0.4s;
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
      &:after {
        content: "";
        width: size(1035);
        height: size(630);
        background: black;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-#{size(22.5)}, -50%);
        z-index: -1;
        border: 1px solid #c3a672;
      }
    }
  }

  .s3 {
    top: size(160);
    display: flex;
    align-items: start;
    justify-content: center;

    .title {
      text-align: left;
      margin-right: size(50);
      z-index: 2;
      .t1 {
        font-size: size(71);
        color: #c3a672;
        border: 1px solid #c3a672;
        padding: size(30) size(45);
        margin-bottom: size(40);
      }
      .t2 {
        font-size: size(40);
        margin-bottom: size(40);
        padding-left: size(45);
      }
      .t3 {
        font-size: size(18);
        padding-left: size(45);
        line-height: 2.2;
      }
    }
    .swipe-box {
      width: size(992);
      height: size(612);
      .swiper-slide {
        width: size(992);
        height: size(612);
        background-size: cover;

        .caption {
          position: absolute;
          right: size(14);
          top: size(14);
          font-size: size(18);
          color: #fff;
        }
      }
      .swiper-button-prev {
        color: #fff;
      }

      .swiper-button-next {
        color: #fff;
      }
    }
  }
}
.video-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: all 1s;
  &.show {
    transform: translateY(0%);
  }
  .iframe {
    width: 80%;
    height: 80%;
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .close {
    position: absolute;
    right: size(10);
    top: size(10);
    color: #fff;
    width: size(90);
    height: size(90);
    border: 1px solid #fff;
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      height: 1px;
      border: 1px solid;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s2s3 {
    width: 100%;
    height: size-m(1098);
    // height: size-m(759);
    background-image: url("~@/projects/tm/s2s3/bg_m.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .s2 {
      height: size-m(339);
    }
    .s3 {
      height: size-m(759);
    }

    .s2 {
      display: flex;
      // display: none;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
      .title {
        width: size-m(316);
        margin-right: unset;
        display: flex;
        align-items: center;
        margin-top: size-m(20);
        padding: 0 size-m(15);
        p {
          font-size: size-m(20);
          padding: 0;
          border: 0;
        }
        img {
          height: size-m(27);
        }
      }
      .video-box {
        width: size-m(316);
        height: size-m(178.6);
        transform-style: preserve-3d;

        .playbutton {
          width: size-m(20);
          height: size-m(20);
          transition: all 0.4s;
          &:hover {
            cursor: pointer;
            opacity: 0.7;
          }
        }
        &:after {
          content: "";
          width: size-m(316.59);
          height: size-m(192.41);
          left: 0;
          top: 50%;
          transform: translate(-#{size-m(7)}, -50%) translateZ(-1px);
          border: 1px solid #c3a672;
          position: absolute;
        }
      }
    }

    .s3 {
      top: size-m(130);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      .title {
        text-align: center;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: size-m(30);
        .t1 {
          font-size: size-m(25);
          padding: size-m(10) size-m(2);
          margin: 0 auto;
          width: size-m(245);
        }
        .t2 {
          font-size: size-m(20);
          margin: size-m(20) 0;
          padding-left: 0;
        }
        .t3 {
          width: size-m(314);
          font-size: size-m(12);
          padding-left: 0;
          line-height: 2;
          text-align: left;
        }
      }
      .swipe-box {
        width: size-m(314);
        height: size(194);
        .swiper-slide {
          width: size-m(314);
          height: size-m(194);

          .caption {
            right: size-m(10);
            top: size-m(10);
            font-size: size-m(12);
          }
        }
        .swiper-button-prev {
          color: #fff;
        }

        .swiper-button-next {
          color: #fff;
        }
      }
    }
  }
  .video-popup {
    .iframe {
      width: size-m(316);
      height: size-m(178.66);
    }
    .close {
      right: size-m(10);
      top: size-m(10);
      width: size-m(46);
      height: size-m(46);
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  name: "s2s3",
  data() {
    let embedParams = (url) => {
      return `<iframe width="100%" height="100%" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    };

    return {
      isMobile,
      videoPopOpen: false,
      swiperOptions: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 50,
        navigation: {
          prevEl: ".s2s3 .s3 .swiper-button-prev",
          nextEl: ".s2s3 .s3 .swiper-button-next",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      currentVideoIndex: 0,
      videos: [
        {
          title: "力麒天沐力麒建設董事長郭淑珍｜土地的共鳴，油然而生的天母使命感",
          embed: embedParams("https://www.youtube.com/embed/kqz_8-ik4qE"),
          bg: require("@/projects/tm/s2s3/videobg.jpg"),
        },
        // {
        //   title: "樣品屋示意影片標題",
        //   embed: embedParams(""),
        //   bg: require("@/projects/tm/s2s3/videobg.jpg"),
        // },
        // {
        //   title: "建設介紹示意影片標題",
        //   embed: embedParams("https://www.youtube.com/embed/kqz_8-ik4qE"),
        //   bg: require("@/projects/tm/s2s3/videobg.jpg"),
        // },
      ],
      currentImgIndex: 0,
      imgs: [
        {
          url: require("@/projects/tm/s2s3/2.jpg"),
          caption: "磺溪風景",
        },
        {
          url: require("@/projects/tm/s2s3/3.jpg"),
          caption: "磺溪風景",
        },
        {
          url: require("@/projects/tm/s2s3/4.jpg"),
          caption: "磺溪風景",
        },
        {
          url: require("@/projects/tm/s2s3/5.jpg"),
          caption: "磺溪風景",
        },
      ],
    };
  },
  created() {
    $(document).keyup(function (e) {
      if (e.key == 27 || e.key == "Escape") {
        this.videoPopOpen = false;
      }
    });
  },
  methods: {
    nextVideo() {
      if (this.currentVideoIndex + 1 <= 2) {
        this.currentVideoIndex++;
      } else {
        this.currentVideoIndex = 0;
      }
    },
    prevVideo() {
      if (this.currentVideoIndex - 1 >= 0) {
        this.currentVideoIndex--;
      } else {
        this.currentVideoIndex = 2;
      }
    },
  },
};
</script>

