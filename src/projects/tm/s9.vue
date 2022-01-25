<template>
  <div>
    <div class="s9">
      <div class="text">
        <div class="t1" data-aos="fade">735坪基地 一砌呵成</div>
        <div class="t2" data-aos="fade-up">一庭 一台 一院 自然與人的合一</div>
        <div class="t3" v-if="!isMobile" data-aos="fade-up">
          力麒天沐，是李天鐸大師睽違天母已久的最新力作，<br />
          從建築、大廳公設、庭院景觀，渾然一體，得心應手。<br />
          透過大器內斂的設計理念，將天母山水、精緻人文融入建築，<br />
          溫柔的營造磺溪畔生活的謐境。
        </div>
        <div class="t3" v-else data-aos="fade-up">
          力麒天沐，是李天鐸大師睽違天母已久的最新力作，
          從建築、大廳公設、庭院景觀，渾然一體，得心應手。
          透過大器內斂的設計理念，將天母山水、精緻人文融入建築，
          溫柔的營造磺溪畔生活的謐境。
        </div>
        <div class="swipe-title" data-aos="fade-up">
          <p>特色公設手繪稿</p>
          <div class="line"></div>
        </div>
        
        <div class="swipe-box">
          <swiper :options="swiperOptions" @click-slide="clickSlide">
            <swiper-slide
              v-for="(img, i) in imgs"
              :key="i"
              v-bind:style="{
                backgroundImage: `url('${img}')`,
              }"
              data-aos="fade-up"
              :data-aos-delay="i * 200"
            >
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div
              v-if="isMobile"
              class="swiper-pagination"
              slot="pagination"
            ></div>
          </swiper>
        </div>
      </div>
      <div class="img-box" data-aos="fade">
        <div class="t4" data-aos="fade-up">
          外觀及環境3D透視模擬⽰意圖
        </div>
      </div>
    </div>
    <div class="img-popup" v-bind:class="{ show: imgPopOpen == true }">
      <img class="imgg" :src="zoomImgUrl" alt="" srcset="" />
      <div class="close" @click="imgPopOpen = false"></div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s9 {
  width: 100%;
  height: size(900);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("~@/projects/tm/s9/bg.jpg");
  background-size: cover;
  .text {
    text-align: left;
    width: size(1125);
    margin: 0 auto;
    .t1 {
      color: #fff;
      font-size: size(70);
      font-weight: 500;
      margin-bottom: size(15);
    }
    .t2 {
      color: #b4904f;
      font-size: size(38);
      font-weight: 500;
      margin-bottom: size(30);
    }
    .t3 {
      color: #fff;
      font-size: size(18);
      line-height: 2.5;
    }
    
    .swipe-title {
      margin-top: size(30);
      margin-bottom: size(40);
      display: flex;
      align-items: center;
      p {
        font-size: size(34.5);
        color: #b4904f;
        white-space: nowrap;
        margin-right: size(10);
      }
      .line {
        height: 1px;
        width: 100%;
        background-color: #b4904f;
      }
    }
    .swipe-box {
      height: size(220);
      width: 100%;
      .swiper-container {
        padding: 0 size(70);
        .swiper-slide {
          width: size(320);
          height: size(220);
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: all 0.5s;

          &.swiper-slide-next {
            opacity: 1;
          }

          &.swiper-slide-active {
            opacity: 1;
          }

          &.swiper-slide-prev {
            opacity: 1;
          }
        }
        .swiper-button-prev {
          color: #fff;
          left: 0;
        }

        .swiper-button-next {
          color: #fff;
          right: 0;
        }
      }
    }
  }
  .img-box {
    width: size(640);
    height: size(900);
    background-image: url("~@/projects/tm/s9/a.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .t4 {
      color: #fff;
      font-size: size(18);
      line-height: 2.5;
      margin-bottom: 5px;
      margin-right: 20px;
    }
  }
}

.img-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(200%);
  transition: all 1s;
  .imgg {
    width: 100%;
  }
  &.show {
    transform: translateY(0%);
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
    color: #c8c8c8;
    width: size(90);
    height: size(90);
    border: 1px solid #c8c8c8;
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
  .s9 {
    height: size-m(1100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url("~@/projects/tm/s9/bg_m.jpg");
    background-size: cover;
    flex-direction: column;
    padding-top: size-m(40);
    .text {
      text-align: center;
      margin: 0 auto;
      width: 100%;
      .t1 {
        font-size: size-m(25);
        margin-bottom: size-m(15);
        margin-left: auto;
        margin-right: auto;
      }
      .t2 {
        font-size: size-m(20);
        margin-bottom: size-m(10);
        margin-left: auto;
        margin-right: auto;
        width: size-m(314);
      }
      .t3 {
        font-size: size-m(12);
        line-height: 2;
        width: size-m(314);
        margin-left: auto;
        margin-right: auto;
      }
      .swipe-title {
        margin-top: size-m(30);
        margin-bottom: size-m(20);
        display: flex;
        align-items: center;
        margin-left: size-m(40);
        p {
          font-size: size-m(20);
          color: #b4904f;
          white-space: nowrap;
          margin-right: size-m(10);
        }
        .line {
          left: 0;
          width: 100vw;
          height: 1px;
          width: 100%;
          background-color: #b4904f;
        }
      }
      .swipe-box {
        height: size(220);
        width: size-m(375);

        .swiper-container {
          padding: 0;
          padding-bottom: size-m(35);
          .swiper-slide {
            width: size-m(375);
            height: size-m(258.4);
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: all 0.5s;

            &.swiper-slide-next {
              opacity: 1;
            }

            &.swiper-slide-active {
              opacity: 1;
            }

            &.swiper-slide-prev {
              opacity: 1;
            }
          }
          .swiper-button-prev {
            color: #fff;
            left: 20px;
            transform: scale(0.7);
          }

          .swiper-button-next {
            color: #fff;
            right: 20px;
            transform: scale(0.7);
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
    }
    .img-box {
      width: size-m(375);
      height: size-m(527);
      background-image: url("~@/projects/tm/s9/a.jpg");
      background-size: cover;
      background-position: center;

      .t4 {
      color: #fff;
      font-size: size-m(12);
      line-height: 2.5;
    }
    }
    
  }
  .img-popup {
    z-index: 10000;
    .imgg {
      width: 100%;
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
  name: "s9",
  methods: {
    clickSlide(i, r_i) {
      this.imgPopOpen = true;
      this.zoomImgUrl = this.imgs[r_i];
    },
  },
  data() {
    return {
      isMobile,
      imgPopOpen: false,
      zoomImgUrl: "",
      swiperOptions: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        navigation: {
          prevEl: ".s9 .swipe-box .swiper-button-prev",
          nextEl: ".s9 .swipe-box .swiper-button-next",
        },
        pagination: {
          el: ".s9 .swiper-pagination",
        },
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: true,
          },
        },
      },
      imgs: [
        require("@/projects/tm/s9/1.jpg"),
        require("@/projects/tm/s9/2.jpg"),
        require("@/projects/tm/s9/3.jpg"),
        require("@/projects/tm/s9/1.jpg"),
        require("@/projects/tm/s9/2.jpg"),
        require("@/projects/tm/s9/3.jpg"),
      ],
    };
  },
};
</script>

