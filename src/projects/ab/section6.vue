<template>
  <div class="section6">
    <div class="intro">
      <div class="subtitle">BOUTIQUE ARCHI</div>
      <div class="title">家的深度思考 <br />今采建築誕生</div>
      <div class="content">
        退讓是為了獲得更多。面對百年的老樹靜巷，今采選擇讓建物謙遜退縮11米，<br
          v-if="!isMobile"
        />
        引入了環境的綠植與光線，也獲得了市心難得的前庭大院子，<br
          v-if="!isMobile"
        />
        這座建築還有更多的思考哲學，等你來推開門，找回你的精彩人生。
      </div>
    </div>
    <div
      class="swiper-box"
      data-aos="fade-left"
      data-aos-duration="2000"
      data-aos-delay="200"
    >
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(imgList, i) in imgList"
          v-bind:key="i"
          v-bind:style="{ backgroundImage: `url(${imgList.img})` }"
        >
          <p class="caption">{{ imgList.caption }}</p>
        </swiper-slide>
        <div
          v-if="imgList.length > 1"
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableColor.scss";
/* 螢幕尺寸標準 */
.section6 {
  height: auto;

  .intro {
    font-family: $family1;
    position: absolute;
    text-align: left;
    top: 10vw;
    left: 9vw;
    z-index: 10;
    color: #fff;
    pointer-events: none;

    .subtitle {
      display: inline;
      font-weight: bold;
      opacity: 0.5;
      position: relative;
      &::after {
        content: "";
        width: 50%;
        height: 1px;
        position: absolute;
        background: #fff;
        right: -55%;
        top: 50%;
        margin-top: -0.5px;
      }
    }
    .title {
      margin-top: 15px;
      font-weight: bold;
      font-size: 32px;
      line-height: 1.2;
    }
    .content {
      margin-top: 15px;
      border-top: 1px solid #fff;
      padding-top: 12px;
      line-height: 1.5;
      filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.95));
    }
  }

  .swiper-box {
    width: 100%;
    .swiper-pagination-bullets {
      padding-right: 60vw;
      bottom: 10vh;
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
    .swiper-slide {
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
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
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section6 {
    height: auto;

    .intro {
      width: 90vw;
      top: 10vw;
      left: 50%;
      transform: translate(-50%, 0);

      .subtitle {
        &::after {
          content: "";
          width: 120%;
          height: 1px;
          position: absolute;
          background: #fff;
          right: -125%;
          top: 50%;
          margin-top: -0.5px;
        }
      }
      .content {
        text-align: justify;
      }
    }

    .swiper-box {
      width: 100%;

      .swiper-pagination-bullets {
        width: 100%;
        height: auto;
        display: block;
        right: unset;
        left: unset;
        bottom: 30px;

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
      .swiper-slide {
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
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
import "swiper/css/swiper.css";
import { isMobile } from "@/utils";
export default {
  name: "section6",
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
      imgList: [
        {
          img: isMobile
            ? require("@/projects/ab/s6/mo-a.jpg")
            : require("@/projects/ab/s6/a.jpg"),
          caption: "3D外觀示意",
        },
        // {
        //   img: isMobile
        //     ? require("@/projects/ab/s6/mo-b.jpg")
        //     : require("@/projects/ab/s6/b.jpg"),
        //   caption: "交誼會館3D示意",
        // },
        // {
        //   img: isMobile
        //     ? require("@/projects/ab/s6/mo-c.jpg")
        //     : require("@/projects/ab/s6/c.jpg"),
        //   caption: "迎賓大廳3D示意",
        // },
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
