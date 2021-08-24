<template>
  <div class="subsection">
    <div class="container">
      <div  data-aos="fade" data-aos-duration="1000" data-aos-delay="500"   class="info">
        <img
          class="title"
          src="~@/projects/llcs/s4/sb3/title.png"
          alt=""
          srcset=""
        />
        <img
          v-if="!isMobile"
          class="content"
          src="~@/projects/llcs/s4/sb3/content.svg"
          alt=""
          srcset=""
        />
        <img
          v-else
          class="content"
          src="~@/projects/llcs/s4/sb3/content_mo.svg"
          alt=""
          srcset=""
        />
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
        src="~@/projects/llcs/s4/sb3/draw.png"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="draw"
        src="~@/projects/llcs/s4/sb3/draw_mo.png"
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
    top: 8vh;
    left: 0;
    width: 44vw;
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
      activeList: [
        {
          imgSrc: require("@/projects/llcs/s4/sb3/slides/1_1.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb3/slides/1_2.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb3/slides/1_3.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb3/slides/1_4.jpg"),
        },
      ],
    };
  },

  methods: {
  },

  created() {},

  mounted() {
  },
};
</script>
