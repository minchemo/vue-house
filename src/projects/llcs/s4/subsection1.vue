<template>
  <div class="subsection">
    <div class="container">
      <div  data-aos="fade" data-aos-duration="1000" data-aos-delay="500"   class="info">
        <img
          class="title"
          src="~@/projects/llcs/s4/sb1/title.png"
          alt=""
          srcset=""
        />
        <img
          v-if="!isMobile"
          class="content"
          src="~@/projects/llcs/s4/sb1/content.svg"
          alt=""
          srcset=""
        />
        <img
          v-else
          class="content"
          src="~@/projects/llcs/s4/sb1/content_mo.svg"
          alt=""
          srcset=""
        />
        <div class="toggles">
          <div v-for="(toggle, i) in toggles" :key="i" class="toggle-item">
            <div
              class="toggle-circle"
              v-html="toggle.title"
              v-bind:class="toggle.bind_list == activeList ? 'active' : ''"
              @click="toggleList(toggle.bind_list)"
            ></div>
            <div class="toggle-content" v-html="toggle.content"></div>
          </div>
        </div>
      </div>
      <div class="swiper-box" data-aos-duration="1000" data-aos="fade-down">
        <swiper ref="swiper" :options="swiperOptions">
          <swiper-slide
            v-for="(activeList, i) in activeList"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${activeList.imgSrc})`,
            }"
          >
          </swiper-slide>
          <div class="swiper-button-next" slot="button-next">
            <img src="~@/projects/llcs/s4/next_btn.svg" alt="" srcset="" />
          </div>
          <div class="swiper-button-prev" slot="button-prev">
            <img src="~@/projects/llcs/s4/prev_btn.svg" alt="" srcset="" />
          </div>
        </swiper>
      </div>
      <img
        v-if="!isMobile"
        class="draw"
        src="~@/projects/llcs/s4/sb1/draw.svg"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="draw"
        src="~@/projects/llcs/s4/sb1/draw_mo.svg"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>
<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  width: 50px;
  margin: 0 12px;
  img {
    width: 100%;
  }
  &::after {
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .swiper-button-prev,
  .swiper-button-next {
    width: 10px;
    margin: 0;
    img {
      width: 100%;
    }
    &::after {
      display: none;
    }
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.subsection {
  height: 100vh;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 50%;
    transform: translateY(-50%);
    .info {
      width: 30vw;
      height: 100%;
      display: flex;
      flex-direction: column;
      .title {
        width: 15vw;
      }
      .content {
        margin-top: 2vw;
        width: 80%;
      }
      .toggles {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1vw;
        .toggle-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #005e3c;
          width: 4vw;
          .toggle-circle {
            display: flex;
            width: 4vw;
            height: 4vw;
            border: 3px solid #005e3c;
            border-radius: 100%;
            justify-content: center;
            align-items: center;
            font-size: 1.2vw;
            font-weight: bold;
            &.active {
              background: linear-gradient(
                -90deg,
                rgba(0, 94, 60, 0) 0%,
                rgba(0, 94, 60, 0) 30%,
                rgba(0, 94, 60, 1) 100%
              );
            }
            &:hover {
              background: linear-gradient(
                -90deg,
                rgba(0, 94, 60, 0) 0%,
                rgba(0, 94, 60, 0) 30%,
                rgba(0, 94, 60, 1) 100%
              );
              cursor: pointer;
            }
          }
          .toggle-content {
            white-space: nowrap;
            font-size: 0.7vw;
            line-height: 1.3;
            margin-top: 0.5vw;
          }

          &:nth-child(1),
          &:nth-child(2) {
            &::after {
              content: "";
              position: absolute;
              width: 6vw;
              height: 2px;
              background: #005e3c;
              top: 2vw;
              left: 4vw;
            }
          }
        }
      }
    }
    .swiper-box {
      position: relative;
      width: 60vw;
      .swiper-slide {
        height: 0;
        padding-bottom: 69.42%;
        background-size: cover;
        background-position: center;
      }
    }
  }

  .draw {
    position: absolute;
    z-index: -1;
    bottom: -9vh;
    right: 0;
    width: 104vw;
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
    min-height: 100vh;
    height: auto;

    .container {
      flex-direction: column;
      top: 0;
      transform: translateY(0);
      .info {
        width: 100vw;
        padding: 7vw;
        .title {
          width: 50vw;
        }
        .content {
          margin-top: 5vh;
          width: 86vw;
        }
        .toggles {
          width: 100%;
          margin-top: 1vw;align-items:flex-start;
          .toggle-item {
            width: 15vw;
            .toggle-circle {
              width: 15vw;
              height: 15vw;
              font-size: 4vw;
              &.active {
                background: linear-gradient(
                  -90deg,
                  rgba(0, 94, 60, 0) 0%,
                  rgba(0, 94, 60, 0) 30%,
                  rgba(0, 94, 60, 1) 100%
                );
              }
              &:hover {
                background: linear-gradient(
                  -90deg,
                  rgba(0, 94, 60, 0) 0%,
                  rgba(0, 94, 60, 0) 30%,
                  rgba(0, 94, 60, 1) 100%
                );
                cursor: pointer;
              }
            }
            .toggle-content {
              font-size: 12px;
            }
          &:nth-child(3){
            transform: translateX(-14%);
          }
            &:nth-child(1){
            transform: translateX(0%);
              &::after {
                content: "";
                width:19vw;
                height: 2px;
                top: 7.5vw;
                left: 15vw;
              }
            }
            &:nth-child(2) {
            transform: translateX(-9%);
              &::after {
                content: "";
                width: 20vw;
                height: 2px;
                top: 7.5vw;
                left: 15vw;
              }
            }
          }
        }
      }
      .swiper-box {
        width: 100vw;
        .swiper-slide {
          height: 0;
          padding-bottom: 69.42%;
          background-size: cover;
          background-position: center;
        }
      }
    }

    .draw {
      position: absolute;
      bottom: unset;
      top: 10vh;
      right: -20vw;
      width: 127vw;
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "section4",

  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    let imgList1 = [
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/1_1.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/1_2.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/1_3.jpg"),
        },
      ],
      imgList2 = [
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/2_1.jpg"),
        },
      ],
      imgList3 = [
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/3_1.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/3_2.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/3_3.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/3_4.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/3_5.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/3_6.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/3_7.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb1/slides/3_8.jpg"),
        },
      ];
    return {
      isMobile,
      swiperOptions: {
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
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
      activeList: [],
      toggles: [
        {
          title: "3快",
          content: "64、65快速道路<br>省道台一線",
          bind_list: imgList1,
        },
        {
          title: "4高",
          content: "中山高、福爾摩沙高速公路<br>汐五高、五楊高",
          bind_list: imgList2,
        },
        {
          title: "5捷運",
          content:isMobile? "新莊線、環狀線<br>機場線、五泰<br>板泰輕軌(連結A5a站)":"新莊線、環狀線、機場線<br>五泰、板泰輕軌(連結A5a站)",
          bind_list: imgList3,
        },
      ],
    };
  },

  methods: {
    toggleList(list_data) {
      this.activeList = list_data;
    },
  },

  created() {},

  mounted() {
    this.activeList = this.toggles[0]["bind_list"];
  },
};
</script>
