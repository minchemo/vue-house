<template>
  <div>
    <div class="s7">
      <div class="text">
        <div class="t1" data-aos="fade">
          森情樹海之首<br />
          力麒回歸天母獻禮
        </div>
        <div class="t2" v-if="!isMobile" data-aos="fade-up">
          力麒建設三代定居天母至今40多年<br />
          這裡，是力麒建設家族「心中最美的念想」<br />
          基於情感，因於緣份，力麒建設用心整合河畔別墅<br />
          終以30年功力，成就”正面俯瞰公園大片林蔭、磺溪彩虹橋水岸綠堤”的完美基地<br />
          獨一無二、無可比擬，作為力麒久違天母的回歸獻禮
        </div>
        <div class="t2" v-else data-aos="fade-up">
          力麒建設三代定居天母至今40多年﹐這裡﹐是力麒建設家族「心中最美的念想」﹐基於情感﹐因於緣份﹐力麒建設用心整合河畔別墅﹐終以30年功力﹐成就”正面俯瞰公園大片林蔭、磺溪彩虹橋水岸綠堤”的完美基地﹐獨一無二、無可比擬﹐作為力麒久違天母的回歸獻禮
        </div>
      </div>
      <div class="img-box">
        <swiper v-if="!isMobile" :options="swiperOptions">
          <swiper-slide
            v-for="(img, i) in imgs"
            :key="i"
            v-bind:style="{
              backgroundImage: `url('${img}')`,
            }"
          >
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <swiper v-else :options="swiperOptions" @click-slide="clickSlide">
          <swiper-slide
            v-for="(img, i) in imgs_m"
            :key="i"
            v-bind:style="{
              backgroundImage: `url('${img.url}')`,
            }"
          >
            <div class="caption">{{ img.caption }}</div>
            <img
              v-if="i == 0"
              class="clickshow"
              src="~@/projects/tm/s7/clickshow.png"
              alt=""
              srcset=""
            />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div v-if="isMobile" class="s7view" v-bind:class="{ active: showView }">
      <div class="close" @click="showView = false"></div>
      <div class="img">
        <img src="~@/projects/tm/s7/view.jpg" alt="" srcset="" />
      </div>
      <img
        class="swipe-here"
        src="~@/projects/tm/s7/swipe-here.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s7 {
  width: 100%;
  height: size(900);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  background-image: url("~@/projects/tm/s7/bg.jpg");
  background-size: cover;
  .text {
    display: flex;
    align-items: center;
    margin-bottom: size(60);
    margin-left: size(120);
    color: #4d4d4d;
    .t1 {
      font-size: size(70);
      text-align: left;
      line-height: 1.1;
      margin-right: size(100);
      position: relative;
      &:before {
        content: "";
        width: size(200);
        height: 1px;
        background: #000;
        position: absolute;
        transform: rotate(110deg);
        transform-origin: center;
        right: -#{size(155)};
        top: size(60);
      }
    }
    .t2 {
      text-align: left;
      font-size: size(20);
      line-height: 1.5;
    }
  }
  .img-box {
    height: size(548);
    width: 100%;
    .swiper-slide {
      width: size(1920);
      height: size(548);
      background-size: cover;
    }
    .swiper-button-prev {
      color: #fff;
      left: size(100);
      transform: scale(2);
    }

    .swiper-button-next {
      color: #fff;
      right: size(100);
      transform: scale(2);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s7 {
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    background-image: url("~@/projects/tm/s7/bg_m.jpg");
    background-size: cover;
    padding-top: size-m(30);
    .text {
      display: flex;
      align-items: center;
      margin-bottom: size-m(30);
      margin-left: unset;
      color: #4d4d4d;
      flex-direction: column;
      width: size-m(314);
      margin-left: auto;
      margin-right: auto;
      .t1 {
        font-size: size-m(25);
        text-align: center;
        line-height: 1.5;
        margin-right: 0;
        margin-bottom: size-m(15);
        &:before {
          content: unset;
        }
      }
      .t2 {
        border-top: 1px solid;
        padding-top: size-m(15);
        text-align: center;
        font-size: size-m(12);
        line-height: 2;
      }
    }
    .img-box {
      height: auto;
      width: 100%;
      .swiper-wrapper {
        padding-bottom: 40px;
      }
      .swiper-slide {
        width: size-m(375);
        height: size-m(291);
        background-size: cover;
        .caption {
          position: absolute;
          right: 20px;
          top: 20px;
          color: #fff;
        }
        .clickshow {
          width: size-m(72);
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -#{size-m(36)};
        }
      }
      .swiper-button-prev {
        color: #fff;
        left: 10px;
        transform: scale(0.6);
      }

      .swiper-button-next {
        color: #fff;
        right: 10px;
        transform: scale(0.6);
      }
      .swiper-pagination-bullet {
        background-color: #fff;
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background-color: #000;
        }
      }
    }
  }
  .s7view {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 10000;
    transform: translateY(500%);
    transition: all .2s;

    .img {
      width: 100%;
      height: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      img {
        max-height: 100%;
        width: auto;
      }
    }

    &.active {
      transform: translateY(0%);
    }

    .close {
      position: fixed;
      color: #fff;

      right: size-m(10);
      top: size-m(10);
      width: size-m(46);
      height: size-m(46);
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
    .swipe-here {
      position: fixed;
      z-index: 1;
      width: size-m(96);
      height: auto;
      animation: move 2s alternate-reverse infinite ease-in-out;
      bottom: 0;
      @keyframes move {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "s7",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  methods: {
    clickSlide(i, r_i) {
      if (r_i == 0) {
        this.showView = true;
      }
    },
  },
  mounted() {
        const view = $(".s7view").find('.img');
        view.on("scroll", function () {
          $(".swipe-here").hide();
        });},
  data() {
    return {
      isMobile,
      showView: false,
      swiperOptions: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        navigation: {
          prevEl: ".s7 .img-box .swiper-button-prev",
          nextEl: ".s7 .img-box .swiper-button-next",
        },
        pagination: {
          el: ".s7 .swiper-pagination",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      imgs: [
        require("@/projects/tm/s7/2.jpg"),
      ],
      imgs_m: [
        {
          url: require("@/projects/tm/s7/2_m.jpg"),
          caption: "磺溪風景",
        },
        {
          url: require("@/projects/tm/s7/3_m.jpg"),
          caption: "磺溪風景",
        },
        {
          url: require("@/projects/tm/s7/4_m.jpg"),
          caption: "磺溪風景",
        },
      ],
    };
  },
};
</script>

