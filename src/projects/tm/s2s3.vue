<template>
  <div>
    <div class="s2s3">
      <div class="s2">
        <div class="title" data-aos="fade-up">
          <p
            v-for="(item, i) in videos"
            :key="i"
            @click="currentVideoIndex = i"
            v-bind:class="{ active: currentVideoIndex == i }"
          >
            {{ item.title }}
          </p>
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
        <div class="title">
          <div class="t1" data-aos="fade">陽明山貴冑之地</div>
          <div class="t2" data-aos="fade-up">磺溪豐景第一排</div>
          <div class="t3" data-aos="fade-up" data-aos-delay="400">
            13.5公里長的磺溪，自帶陽明大屯風水，直抵天母<br />
            只有短短500公尺展現天地大能量<br />
            鋪陳出名流薈萃的使館特區及高級住宅街廓<br />
            力麒天沐，立於磺溪第一排、森林美景之首<br />
            擷取天母萬中選一的風聲水起聚氣美地<br />
            居於此地，享受天階氣韻、沐於美好薈萃
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
  width: size(1920);
  height: size(1800);
  background-image: url("~@/projects/tm/s2s3/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .s2,
  .s3 {
    position: relative;
    width: 100%;
    height: size(900);
  }

  .s2 {
    display: flex;
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
          title: "生活機能示意影片標題",
          embed: embedParams("https://www.youtube.com/embed/gSsuHdi15mI"),
          bg: require("@/projects/tm/s2s3/videobg.jpg"),
        },
        {
          title: "樣品屋示意影片標題",
          embed: embedParams("https://www.youtube.com/embed/svQOxQde0bg"),
          bg: require("@/projects/tm/s2s3/videobg.jpg"),
        },
        {
          title: "建設介紹示意影片標題",
          embed: embedParams("https://www.youtube.com/embed/8JJ101D3knE"),
          bg: require("@/projects/tm/s2s3/videobg.jpg"),
        },
      ],
      currentImgIndex: 0,
      imgs: [
        {
          url: require("@/projects/tm/s2s3/1.jpg"),
          caption: "磺溪風景",
        },
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
      if (e.key == 27 || e.key == 'Escape') {
        this.videoPopOpen = false;
      }
    });
  },
};
</script>

