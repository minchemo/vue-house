<template>
  <div class="subsection subsection63">
    <div 
     data-aos="fade" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="-100"  v-if="isMobile" class="title">
      <div class="title-btn">
        <div
          v-bind:class="activeList == data ? 'active' : ''"
          class="title-btn-item"
          v-for="(data, i) in slideList"
          :key="i"
          @click="setData(data)"
        >
          <img :src="data.btnTitle" alt="" srcset="" />
        </div>
        </div>
      <div class="txt">
        <div class="title" v-html="activeList.title"></div>
        <div class="desc" v-html="activeList.desc"></div>
      </div>
    </div>
    <div class="swiper-box" data-aos-duration="1000" data-aos="fade-down" data-aos-offset="-100" >
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(img, i) in activeList.imgList"
          v-bind:key="i"
          v-bind:style="{
            backgroundImage: `url(${img})`,
          }"
        >
        <p class="name">樣品屋實景拍攝</p>
        </swiper-slide>
        <div class="swiper-button-next" slot="button-next">
          <img src="~@/projects/llcs/s4/next_btn.svg" alt="樣品屋" srcset="" />
        </div>
        <div class="swiper-button-prev" slot="button-prev">
          <img src="~@/projects/llcs/s4/prev_btn.svg" alt="樣品屋" srcset="" />
        </div>
      </swiper>
    </div>
    <div 
     data-aos="fade" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="-100"  v-if="!isMobile" class="title">
      <div class="title-btn">
        <div
          v-bind:class="activeList == data ? 'active' : ''"
          class="title-btn-item"
          v-for="(data, i) in slideList"
          :key="i"
          @click="setData(data)"
        >
          <img :src="data.btnTitle" alt="樣品屋" srcset="" />
        </div>
      </div>
<!--      <img class="title-img" :src="activeList.title1" alt="" srcset="" /> -->
      <div class="txt">
        <div class="title" v-html="activeList.title"></div>
        <div class="desc" v-html="activeList.desc"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.subsection {
  height: auto;
  padding: 5vh 0;

  .swiper-box {
    position: relative;
    width: 80vw;
    margin: 0 auto 2vw auto;
    .swiper-slide {
      height: 0;
      padding-bottom: 44.54%;
      background-size: cover;
      background-position: center;
      .name{position: absolute;bottom: 0.5em;right: 0.5em;color: #fff;font-size: calc(1500vw / 1920);
      text-shadow:0 0 0.4em #000c;
      }
    }
  }

  .title {
    display: flex;
    width: 80vw;
    margin: 0 auto;

    .title-btn {
      width: 30%;
      display: flex;
      align-items: flex-start;
      .title-btn-item {
        width: 5.5vw;
        height: 4.5vw;
        background-size: cover;
        background-image: url("~@/projects/llcs/s6/sb3/btn_bg.jpg");
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        img {
          position: relative;
          z-index: 2;
          width: 80%;
        }
        &:nth-child(1) {
          margin-right: 0.5vw;
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgb(0, 0, 0);
          background: linear-gradient(
            -90deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          transition: all 0.5s;
          transform: translateX(-100%);
        }
        &:hover {
          cursor: pointer;
          &::after {
            transform: translateX(0);
          }
        }
        &.active {
          &::after {
            transform: translateX(0);
          }
        }
      }
    }
    
  .txt{
    order:3;
    display: flex;
    width: 80%;
border: solid #005e3c;;
border-width: 0 2px 2px 0;
padding: 0 1em 0.5em 0;
margin: 0em auto 1em auto;
    align-items:center;
    justify-content:space-between;
        font-size: calc(2000vw / 1920);
        line-height: 1.5;

      .title {
        font-size:2.5em;
        font-family: "Noto Serif TC";
        color:#005e3c;
        font-weight: bold;
        text-align: left;
        line-height: 1.3;
        white-space: nowrap;
        margin: 0.2em 0 0 0;
      }
      .desc {
        color:#333;
        font-weight:400;
        text-align: justify;
        width: 80em;
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
    height: auto;
    padding: 5vh 0;
    padding-bottom: 0;

    .swiper-box {
      position: relative;
      width: 100vw;
      margin: 0 auto;
      .swiper-slide {
        height: 0;
        padding-bottom: 61.41%;
        background-size: cover;
        background-position: center;
      .name{font-size: calc(1200vw / 375);}
      }
    }

    .title {
      display: flex;
      width: 95vw;
      margin: 0 auto;
      flex-wrap: wrap;
    //  margin-top: 3vh;

      .title-btn {
        position: absolute;
        right: 2.5vw;
        width: auto;
        display: flex;
        align-items: flex-start;
        .title-btn-item {
          width: 30vw;
          height: 24.5vw;
          background-size: cover;
          background-image: url("~@/projects/llcs/s6/sb3/btn_bg.jpg");
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          img {
            position: relative;
            z-index: 2;
            width: 80%;
          }
          &:nth-child(1) {
            margin-right: 3vw;
          }

          &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgb(0, 0, 0);
            background: linear-gradient(
              -90deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 1) 100%
            );
            transition: all 0.5s;
            transform: translateX(-100%);
          }
          &:hover {
            cursor: pointer;
            &::after {
              transform: translateX(0);
            }
          }
          &.active {
            &::after {
              transform: translateX(0);
            }
          }
        }
      }
  .txt{

        width: 100%;
        font-size: calc(1500vw / 375);
        flex-wrap: wrap;
        margin-top: 6.1em;
        padding-top: 1em;

      .title {
        font-size:2em;
      }
      .desc {
        line-height: 1.6;
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
  name: "subsection",

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
      activeList: {},
      slideList: [
        {
          title:"<b style='font-size:1.5em;margin-top: -.3em'>A1</b>/光感時尚·優雅好室",
          desc:"以白色為空間主旋律，皮革與金屬、水磨石與玻璃呼應搭配，簡約大器空間語彙，為優雅時尚畫龍點睛，隨處充滿令人驚喜的巧思。",
          btnTitle: require("@/projects/llcs/s6/sb3/slides1/btn_title.png"),
          imgList: [
            require("@/projects/llcs/s6/sb3/slides1/1.jpg"),
            require("@/projects/llcs/s6/sb3/slides1/2.jpg"),
            require("@/projects/llcs/s6/sb3/slides1/3.jpg"),
            require("@/projects/llcs/s6/sb3/slides1/4.jpg"),
            require("@/projects/llcs/s6/sb3/slides1/5.jpg"),
            require("@/projects/llcs/s6/sb3/slides1/6-1.jpg")
          ],
        },
        {
          title: "<b style='font-size:1.5em;margin-top: -.3em'>A2</b>/熱情活潑·質感住居",
          desc:"結合當代藝術幾何造型與色塊，利用大範圍低彩度空間底色，朱紅色主色在黑色、古銅金點綴下，賦予空間有若精品飯店高級質感。",
          btnTitle: require("@/projects/llcs/s6/sb3/slides2/btn_title.png"),
          imgList: [
            require("@/projects/llcs/s6/sb3/slides2/1.jpg"),
            require("@/projects/llcs/s6/sb3/slides2/2.jpg"),
            require("@/projects/llcs/s6/sb3/slides2/3.jpg"),
            require("@/projects/llcs/s6/sb3/slides2/4.jpg"),
            require("@/projects/llcs/s6/sb3/slides2/5.jpg"),
            require("@/projects/llcs/s6/sb3/slides2/6.jpg")
          ],
        },
      ],
      swiperOptions: {
        spaceBetween:10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        speed:1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1000: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      },
    };
  },

  methods: {
    setData(data) {
      this.activeList = data;
    },
  },

  created() {
    this.activeList = this.slideList[0];
  },

  mounted() {
    this.activeList = this.slideList[0];
  },
};
</script>
