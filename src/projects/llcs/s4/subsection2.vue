<template>
  <div class="subsection subsection42">
    <div class="container">
      <div  data-aos="fade" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="-100"  class="info">
        <div class="title">繁華環抱<br>商圈金核心</div>
<div class="subtitle">副都心3分鐘<br>6大商圈一次擁有</div>
<div class="desc">「朗朗城心」3分鐘前進副都心，中平、幸福、輔大、新泰、廟街商圈轉瞬切換，便利生活盡情享受，提供全家生活所需應有盡有。</div>

        <div class="toggles-title">6大商圈</div>
        <div class="toggles">
          <div v-for="(toggle, i) in toggles" :key="i" class="toggle-item">
            <div
              class="toggle-circle"
              v-html="toggle.title"
              v-bind:class="toggle.bind_list == activeList ? 'active' : ''"
              @click="toggleList(toggle.bind_list)"
            ></div>
          </div>
        </div>
      </div>
      <div class="swiper-box" data-aos-duration="1000" data-aos-offset="-100"  data-aos="fade-down">
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
        src="~@/projects/llcs/s4/sb2/draw.png"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="draw"
        src="~@/projects/llcs/s4/sb2/draw_mo.png"
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
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    top: 50%;
    transform: translateY(-50%);
    .info {
      width: 30vw;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 5vw;
        color:#000;
        line-height: 1.5;
        text-align: justify;
        font-size: calc(2000vw / 1920);
      .title {
        font-size: calc(5500vw / 1920);
        font-family: "Noto Serif TC";
        color:#005e3c;
        font-weight: bold;
        line-height: 1.3;
        &::after{content:"";
        margin: .45em 0 .4em 0;
        width: 3em;height: 3px; background: currentColor;display: block;}
      }
      .subtitle {
        font-size:1.9em;
        font-weight: 400;
      }
      .desc {
        margin: 1em 0  1em 0;
        font-weight: 300;
        width: 80%;
      }
      .content {
        margin-top: 1vw;
        width: 80%;
      }
      .toggles-title {
        margin-top: 1vw;
        font-size: 1.2vw;
        color: #fff;
        align-self: flex-start;
        background-color: #005e3c;
        padding: 5px;
        &::first-letter {
          font-size: 1.5vw;
        }
      }
      .toggles {
        width: 80%;
        align-items: center;
        justify-content: space-between;
        margin-top: 1vw;
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 1vw;
        .toggle-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #005e3c;
          border-right: 3px solid;
          border-bottom: 3px solid;
          .toggle-circle {
            width: 100%;
            height: 100%;
            padding: 0.3em;
            display: flex;
            align-items: flex-start;
            font-size: 1vw;
            font-weight: bold;
            &::before{z-index: -1;content: "";}
            &.active,
            &:hover{
              background: linear-gradient(to right, rgba(0,94,60,0) 0%,rgba(0,94,60,1) 100%);
       //   color: #fff;
            }
          }
          .toggle-content {
            white-space: nowrap;
            font-size: 0.7vw;
            line-height: 1.3;
            margin-top: 0.5vw;
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
    bottom: unset;
    top: -8vh;
    right: -1vw;
    width: 53vw;
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
        margin: 0;
        font-size: calc(1500vw / 375);
        .title {
        font-size: calc(3500vw / 375);
        margin: .45em 0 .0em 0;
        }
      .subtitle {  font-size:1.7em;
      }
      .desc{
      }
        .content {
          margin-top: 1vh;
          width: 86vw;
        }
        .toggles-title {
          margin: 2vw 0;
          font-size: 6vw;
          color: #fff;
          align-self: flex-start;
          background-color: #005e3c;
          padding: 5px;
          &::first-letter {
            font-size: 6.5vw;
          }
        }
        .toggles {
          width: 100%;
          margin-top: 1vw;
          display: grid;
          grid-template-columns: 45% 45%;
          grid-row-gap: 13px;
          .toggle-item {
            .toggle-circle {
         /*     height: auto;
              width: auto;*/
              font-size: 5vw;
            }
            .toggle-content {
              font-size: 0.5vw;
            }
/*
            &:nth-child(1),
            &:nth-child(2) {
              &::after {
                content: "";
                width: 21vw;
                height: 2px;
                top: 7.5vw;
                left: 15vw;
              }
            }
            */
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
      bottom: -3vh;
      top: unset;
      right: 0;
      width: 50vw;
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
          imgSrc: require("@/projects/llcs/s4/sb2/slides/1_1.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/1_2.jpg"),
        },
      ],
      imgList2 = [
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/2_1.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/2_2.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/2_3.jpg"),
        },
      ],
      imgList3 = [
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/3_1.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/3_2.jpg"),
        },
      ],
      imgList4 = [
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/4_1.jpg"),
        },
      ],
      imgList5 = [
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/5_1.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/5_2.jpg"),
        },
      ],
      imgList6 = [
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/6_1.jpg"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb2/slides/6_2.jpg"),
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
          title: "副都心",
          bind_list: imgList1,
        },
        {
          title: "中平商圈",
          bind_list: imgList2,
        },
        {
          title: "幸福商圈",
          bind_list: imgList3,
        },
        {
          title: "輔大商圈",
          bind_list: imgList4,
        },
        {
          title: "新泰商圈",
          bind_list: imgList5,
        },
        {
          title: "廟街商圈",
          bind_list: imgList6,
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
