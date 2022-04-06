<template>
  <div class="section4">
    <div class="slide" data-aos="fade">
      <Splide :options="slideOption" ref="slide" @splide:move="onSplideMove">
        <SplideSlide class="slide-item" v-for="(img, i) in imgs" :key="i">
          <img class="slide-image" :src="img.url" />
          <div class="caption">{{ img.caption }}</div>
        </SplideSlide>
      </Splide>
    </div>
    <div class="box">
      <div
        class="thumbnail"
        ref="thumbnail"
        data-aos="fade-up"
        data-aos-delay="0"
        id="thumbnail-box"
      >
        <div
          class="thumbnail-item"
          :data-index="i"
          v-for="(img, i) in imgs"
          :key="i"
          @click="go(i)"
          v-bind:class="{ active: currentSlideIndex == i }"
        >
          <div
            class="img"
            v-bind:style="{ backgroundImage: `url('${img.url}')` }"
          ></div>
          <div class="text">{{ img.caption }}</div>
        </div>
      </div>
      <div class="info" data-aos="fade" data-aos-delay="500">
        <h2>緩緩散步什麼都有</h2>
        <p>
          出門3分鐘抵A19正核心，各種美食名店、購物商場林立；綠意休閒出門就有；完整學區近距離就到，青埔最精華，一次擁抱！
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section4 {
  width: 100%;
  height: size(1080);
  background-size: cover;
  background-position: center;
  .slide {
    position: relative;
    width: 100%;
    height: size(700);
    .slide-item {
      position: relative;
      .slide-image {
        width: 100%;
        height: size(700);
      }
      .caption {
        position: absolute;
        font-size: size(32);
        color: #fff;
        font-weight: bold;
        right: size(16);
        bottom: 0;
      }
    }
  }
  .box {
    position: relative;
    margin-right: size(94);
    margin-left: auto;
    display: flex;
    margin-top: size(54);
    width: size(1680);
    .thumbnail {
      display: flex;
      margin-right: size(78);
      .thumbnail-item {
        margin-right: size(25);
        .img {
          width: size(151.42);
          height: size(151.42);
          background-size: auto 100%;
          background-position: center;
        }
        .text {
          width: size(151.42);
          height: size(28);
          border-right: size(2) solid #000;
          border-bottom: size(2) solid #000;
          font-size: size(16.46);
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        &:last-child {
          margin: 0;
        }
        &.active {
          background: #000;
          .text {
            color: #fff;
          }
        }
        &:hover {
          cursor: pointer;
          background: #000;
          .text {
            color: #fff;
          }
        }
      }
    }
    .info {
      text-align: left;
      h2 {
        font-size: size(48);
        margin-bottom: size(27);
      }
      p {
        line-height: 1.5;
        font-size: size(20);
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    width: 100%;
    height: size-m(667);
    background-size: cover;
    background-position: center;
    .slide {
      position: relative;
      width: 100%;
      height: size-m(390);
      .slide-item {
        position: relative;
        .slide-image {
          width: 100%;
          height: size-m(390);
        }
        .caption {
          font-size: size-m(12);
          right: 0;
          bottom: 0;
          filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8));
        }
      }
    }
    .box {
      position: relative;
      margin-right: auto;
      margin-left: auto;
      display: flex;
      margin-top: size-m(20);
      width: size-m(317);
      flex-direction: column;
      .thumbnail {
        display: flex;
        margin-right: 0;
        max-width: 100%;
        overflow: scroll;
        .thumbnail-item {
          margin-right: size-m(16);
          .img {
            width: size-m(95.35);
            height: size-m(95.35);
          }
          .text {
            width: size-m(95.35);
            height: size-m(18);
            border-right: size(2) solid #000;
            border-bottom: size(2) solid #000;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          &:last-child {
            margin: 0;
          }
          &.active {
            background: #000;
            .text {
              color: #fff;
            }
          }
          &:hover {
            cursor: pointer;
            background: #000;
            .text {
              color: #fff;
            }
          }
        }
      }
      .info {
        margin-top: size-m(15);
        text-align: left;
        h2 {
          font-size: size-m(20);
          margin-bottom: size-m(10);
        }
        p {
          line-height: 1.5;
          font-size: size-m(13);
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
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import scrollIntoView from "scroll-into-view";

export default {
  name: "section4",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      isMobile,
      slideOption: {
        type: "loop",
        rewind: true,
        autoWidth: true,
        autoHeight: true,
        pagination: false,
        arrows: false,
        autoplay: true,
        interval: 3000,
        perPage: 1,
        autoWidth: true,
      },
      imgs: [
        {
          url: !isMobile
            ? require("@/projects/gp/s4/1.jpg")
            : require("@/projects/gp/s4/1_m.jpg"),
          caption: "XPARK",
        },
        {
          url: !isMobile
            ? require("@/projects/gp/s4/2.jpg")
            : require("@/projects/gp/s4/2_m.jpg"),
          caption: "桃園國際棒球場",
        },
        {
          url: !isMobile
            ? require("@/projects/gp/s4/3.jpg")
            : require("@/projects/gp/s4/3_m.jpg"),
          caption: "華泰名品城",
        },
        {
          url: !isMobile
            ? require("@/projects/gp/s4/4.jpg")
            : require("@/projects/gp/s4/4_m.jpg"),
          caption: "環球購物中心",
        },
        {
          url: !isMobile
            ? require("@/projects/gp/s4/5.jpg")
            : require("@/projects/gp/s4/5_m.jpg"),
          caption: "IKEA",
        },
        {
          url: !isMobile
            ? require("@/projects/gp/s4/6.jpg")
            : require("@/projects/gp/s4/6_m.jpg"),
          caption: "星巴克",
        },
        {
          url: !isMobile
            ? require("@/projects/gp/s4/7.jpg")
            : require("@/projects/gp/s4/7_m.jpg"),
          caption: "新光影城",
        },
      ],
      currentSlideIndex: 0,
    };
  },

  methods: {
    go(i) {
      this.$refs.slide.go(i);
    },
    onSplideMove(splide, realIndex) {
      const self = this;
      this.currentSlideIndex = realIndex;

      setTimeout(() => {
        self.$scrollTo(
          $(`.section4 .thumbnail-item[data-index=${realIndex}]`)[0],
          100,
          { container: "#thumbnail-box", force: true, y: false, x: true }
        );
      }, 100);
    },
  },

  created() {},

  mounted() {},
};
</script>
