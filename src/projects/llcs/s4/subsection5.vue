<template>
  <div class="subsection subsection45">
    <div class="container">
      <div  data-aos="fade" data-aos-duration="1000" data-aos-delay="0" data-aos-offset="-100"  class="info">
        <div class="title">金獎團隊 誠心打造</div>
        <div class="subtitle">貼心設想極致禮遇　<br v-if="isMobile">打造生活饗宴</div>
<div class="desc">「朗朗城心」邀請美國Muse、義大利A’Design設計金獎設計師加入建築團隊，致力規劃、貼心設想各種使用情境，為您與家人創造最細緻舒適的生活饗宴。</div>

        <div class="archi-swiper" data-aos-duration="1000" data-aos-offset="-100"  data-aos="fade-up">
          <swiper
            ref="swiper_5_1"
            :options="swiperOptionsArchi"
            @click-slide="openDetail"
            :key="archiList"
          >
            <swiper-slide
              v-for="(archiList, i) in archiList"
              v-bind:key="i"
              v-bind:style="{
                backgroundImage: `url(${archiList.imgSrc})`,
              }"
            >
              <img class="content" :src="archiList.content" alt="" srcset="" />
              <div class="archi-btn">
                <img
                  src="~@/projects/llcs/s4/sb5/archi_btn.png"
                  alt=""
                  srcset=""
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div
        v-if="!isMobile"
        class="swiper-box"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <swiper ref="swiper_5_2" :options="swiperOptions" :key="activeList">
          <swiper-slide
            v-for="(activeList, i) in activeList"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${activeList.imgSrc})`,
            }"
          >
          </swiper-slide>
        </swiper>
      </div>

      <img
        v-if="isMobile"
        class="building"
        src="~@/projects/llcs/s4/sb5/building.png"
        alt=""
        srcset=""
      />

      <img
        v-if="!isMobile"
        class="draw"
        src="~@/projects/llcs/s4/sb5/draw.png"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="draw"
        src="~@/projects/llcs/s4/sb4/draw_mo.png"
        alt=""
        srcset=""
      />

      <img
        src="~@/projects/llcs/s4/sb5/shadow.png"
        class="shadow"
        alt=""
        srcset=""
      />
    </div>
    <div v-show="activeArchiDetailOpen" class="archi_detail">
      <div class="archi_bg">
        <div class="archi_box1" @click="activeArchiDetailOpen = false"></div>
        <div class="archi_box2" @click="activeArchiDetailOpen = false"></div>
        <div class="close" @click="activeArchiDetailOpen = false">
          <img
            src="~@/projects/llcs/s4/sb5/archi_detail/close.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="archi_detail_box">
          <div class="archi_detail_info">
            <img
              class="avatar"
              :src="activeArchiDetail.avatar"
              alt=""
              srcset=""
            />
            <img
              class="detail_content"
              :src="activeArchiDetail.detail_content"
              alt=""
              srcset=""
            />
            <img
              class="rewards"
              v-if="activeArchiDetail.rewards"
              :src="activeArchiDetail.rewards"
              alt=""
              srcset=""
            />
          </div>
          <div class="archi_detail_swiper">
            <swiper ref="swiper_5_3" :options="swiperOptionsArchiDetail" :key="activeArchiDetail">
              <swiper-slide
                v-for="(slides, i) in activeArchiDetail.slides"
                v-bind:key="i"
                v-bind:style="{
                  backgroundImage: `url(${slides})`,
                }"
              >
              </swiper-slide>
              <div
                v-if="!isMobile"
                class="swiper-pagination"
                slot="pagination"
              ></div>
              <div v-if="isMobile" class="swiper-button-next" slot="button-next">
                <img src="~@/projects/llcs/s4/next_btn.svg" alt="" srcset="" />
              </div>
              <div v-if="isMobile" class="swiper-button-prev" slot="button-prev">
                <img src="~@/projects/llcs/s4/prev_btn.svg" alt="" srcset="" />
              </div>
            </swiper>
          </div>
        </div>
        <div class="title">金獎團隊 誠心打造</div>
        <div class="return" @click="activeArchiDetailOpen = false">回上一頁</div>
        <img
          v-if="!isMobile"
          class="draw1"
          src="~@/projects/llcs/s4/sb5/archi_detail/draw1.png"
          alt=""
          srcset=""
        /><img
          v-if="!isMobile"
          class="draw2"
          src="~@/projects/llcs/s4/sb5/archi_detail/draw2.png"
          alt=""
          srcset=""
        />
        <img
          v-else
          class="draw"
          src="~@/projects/llcs/s4/sb5/archi_detail/draw_mo.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.archi_detail {
  .swiper-pagination {
    left: unset;
    right: 0;
    bottom: 12px;
    width: auto;
    .swiper-pagination-bullet {
      border-radius: 0;
      background-color: #fff;
      opacity: 1;
      width: 20px;
      height: 20px;
      margin-right: 24px;
      &.swiper-pagination-bullet-active {
        background-color: #005e3c;
      }
    }
  }
}
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
  position: relative;
  height: 100vh;

  .container {
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    bottom: 0;
    width: 100%;
    .info {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: baseline;
        color:#000;
        line-height: 1.5;
        text-align: justify;
        font-size: calc(2000vw / 1920);
      .title {
        font-size: calc(5500vw / 1920);
        font-family: "Noto Serif TC";
        color:#005e3c;
        font-weight: bold;
        text-align: left;
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
        margin: 0.5em 0  2em 0;
        font-weight: 300;
        width: 55vw;
      }
      .content {
        margin-top: 1vw;
        width: 55vw;
        max-height: 200px;
      }
    }
    .swiper-box {
      position: relative;
      width: 35vw;
      .swiper-slide {
        height: 0;
        padding-bottom: 139.87%;
        background-size: cover;
        background-position: center;
      }
    }
    .archi-swiper {
      position: relative;
      width: 100%;
      .swiper-container {
        overflow: visible;
        .swiper-slide {
          width: 10vw !important;
          height: 18vw;
          margin-right: 10vw;
          background-size: 100% auto;
          background-position:top center;
          background-repeat: no-repeat;
          transition: all 0.5s;
          &:hover {
            cursor: pointer;
            transform: translateY(5%);
            .archi-btn {
              opacity: 0.5;
            }
          }
          .content {
            position: absolute;
            width: 10vw;
            top:12vw;
            left: 0;
            //transform: translateY(120%);
          }
          .archi-btn {
            position: relative;
            top: 0.5vw;
            left: 0.5vw;
            width: 2vw;
            img {
              width: 100%;
            }
          }
        }
      }
    }

    .draw {
      position: absolute;
      z-index: 0;
      bottom: unset;
      top: 0vh;
      right: 0;
      width: 79vw;
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

    .shadow {
      position: absolute;
      z-index: 0;
      bottom: 0;
      right: 0;
      width: 100vw;
    }
  }
  .archi_detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11000;
    background-color: #fff;
    background-image: url("~@/projects/llcs/s4/sb5/archi_detail/bg.jpg");
    background-size: cover;
    overflow: auto;
    .archi_bg{
    position: relative;
    width: 100%;
    height: 100%;
    min-height: calc(85000vw / 1920);
    max-height: calc(108000vw / 1920);
    overflow: hidden;
    }
    .archi_detail_box {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%);
      .archi_detail_info {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 22%;
        .avatar {
          width: 15vw;
          border-bottom: 5px solid #005e3c;
          padding-bottom: 2vw;
          margin-bottom: 1vw;
        }
        .detail_content {
          height: calc(18700vw / 1920);
        }
        .rewards {
          position: absolute;
          width: 17%;
          right: 12%;
          top: 0;
        }
      }
      .archi_detail_swiper {
        position: relative;
        width: 55%;
        .swiper-slide {
          height: 0;
          padding-bottom: 62.45%;
          background-size: cover;
          background-position: center;
        }
      }
    }
    .close {
      width: 2vw;
      position: absolute;
      right: 4vw;
      top: 4vw;
      cursor: pointer;
      z-index: 1;
      img {
        width: 100%;
      }
    }
      .return{
      position: absolute;
      left: 50%;
      transform: translate(480%, 0%);
      transition:transform 0.3s ;
      width:auto;
        top:calc(50% + 19vw);
        font-size: calc(2000vw / 1920);
        //font-family: "Noto Serif TC";
        color:#000;
        font-weight: bold;
        text-align: right;
        line-height: 1.3;
        padding: 0 0.3em 0.3em;
        cursor: pointer;
        &::after{
          content: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 1000 1000'%3E%3Cpath d='M71.3,327.7L413.8,643V452c103.7,0,367.8,2.2,367.8,262.1c0,136.1-100.9,249.6-234.9,275.9c215.4-28,382.1-202.9,382.1-416.7c0-397.3-443.5-400.7-515-400.7V10L71.3,327.7z'/%3E%3C/svg%3E");
          height: 1em;width: 1em;display: inline-block;
          margin: 0 0 0 0.5em;
          }
        &:hover{
      transform: translate(490%,0%);}
        }
      .title {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 76.4vw;
        top:calc(50% + 16.5vw);
        font-size: calc(5500vw / 1920);
        font-family: "Noto Serif TC";
        color:#005e3c;
        font-weight: bold;
        text-align: left;
        line-height: 1.3;
        padding: 0 0 0.3em;
        border: solid currentColor;
        border-width: 0 3px 3px 0;
        }

     .archi_box1,
     .archi_box2{position: absolute;width:10%;height: 100%;top: 0;z-index: 60;}
     .archi_box1{left: 0;}
     .archi_box2{right: 0;}
    .draw1 {
      position: absolute;
      z-index: -1;
    top: calc(50% - 20vw);
    left: calc(50% - 17.5vw);
      width: calc(27000vw / 1920);

    }
    .draw2 {
      position: absolute;
      z-index: 0;
      bottom:  -17vw;
      right:  -17vw;
      width: calc(23200vw / 1920);

    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .subsection {
    height: 210vw;

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
        margin: .45em 0 .3em 0;
        }
      .subtitle {  font-size:1.7em;
      }
      .desc{
          width: 86vw;
      }
        .content {
          margin-top: 1vh;
          width: 86vw;
        }
      }

      .archi-swiper {
        position: relative;
        width: 100%;
        margin-top: 3vh;
        .swiper-container {
          overflow: visible;
          .swiper-slide {
            width: 30vw !important;
            height: 60vw;
            margin-right: 0;
           /* background-size: cover;
            background-position: center;
            transition: all 0.5s;*/
            &:hover {
              transform: translateY(0);
              .archi-btn {
                opacity: 1;
              }
            }
            .content {
              position: absolute;
              width: 55vw;
            //  bottom: 0;
              left: 0;top:70vw;
             // transform: translateY(120%);
              display: none;
            }
            .archi-btn {
              position: relative;
              top: 1vw;
              left: 1vw;
              width: 6vw;
              img {
                width: 100%;
              }
            }
            &.swiper-slide-active {
              width: 55vw !important;
              height: 69.08vw;
              .content {
                display: block;
              }
            }
          }
        }
      }

      .draw {
        position: absolute;
        bottom: unset;
        top: 10vw;
        right: 0;
        width: 102vw;
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
      .building {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 40vw;
      }
    }

    .archi_detail {
      background-image: url("~@/projects/llcs/s4/sb5/archi_detail/bg_mo.jpg");
      background-size: cover;
   //   overflow-y: scroll;
    .archi_bg{
    height: auto;
    min-height: 0;
    max-height: 9000vh;
    }
     .archi_box1,
     .archi_box2{height: 139vw;}
      .archi_detail_box {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 26vw;
        left: 50%;
        transform: translate(-50%, 0%);
        flex-direction: column;
        .archi_detail_info {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          .avatar {
            width: 50vw;
            border-bottom: 5px solid #005e3c;
            padding-bottom: 4vh;
            margin-bottom: 2vh;
          }
          .detail_content {
            height: 20vh;
          }
          .rewards {
            width: 13%;
            right: 5%;
          }
        }
        .archi_detail_swiper {
          position: relative;
          width: 100%;
          .swiper-slide {
            height: 0;
            padding-bottom: 62.45%;
            background-size: cover;
            background-position: center;
          }
        }
      }
      .close {
        width: 6vw;
        right: 6vw;
        top: 10vw;
      }
      .return{
        top: calc(50% + 32vw);
        font-size: calc(1500vw / 375);
        transform:translate(90%, 0);
        &:hover{
         transform:translate(90%, 0);
        }
      }
      .title {
        width: 90vw;
        bottom: unset;
        top: 3%;
        font-size: calc(3500vw / 375);
        border-width: 0 0 3px 0;
      }
      .draw {
        width: 30vw;
        right: unset;
        bottom: 21vh;
        left: -9%;
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
        resistanceRatio:0,
        spaceBetween: 0,
        autoplay: {
          delay:4000,
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
      swiperOptionsArchiDetail: {
        spaceBetween: 0,
        autoplay: {
          delay:4000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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
      swiperOptionsArchi: {
        centeredSlides: isMobile ? true : false,
        slideToClickedSlide: true,
        spaceBetween: 0,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        },
      },
      activeList: [
        {
          imgSrc: require("@/projects/llcs/s4/sb5/building.png"),
        },
      ],
      activeArchiDetail: {
        imgSrc: require("@/projects/llcs/s4/sb5/archi/1.png"),
        content: require("@/projects/llcs/s4/sb5/archi/1_content.svg"),
        detail_content: require("@/projects/llcs/s4/sb5/archi/1_detail.svg"),
        avatar: require("@/projects/llcs/s4/sb5/archi/1_avatar.jpg"),
        slides: [
          require("@/projects/llcs/s4/sb5/archi_detail/slides/1_1.jpg"),
          require("@/projects/llcs/s4/sb5/archi_detail/slides/1_2.jpg"),
          require("@/projects/llcs/s4/sb5/archi_detail/slides/1_3.jpg"),
        ],
      },
      activeArchiDetailOpen: false,
      archiList: [
        {
          imgSrc: require("@/projects/llcs/s4/sb5/archi/1.png"),
          content: require("@/projects/llcs/s4/sb5/archi/1_content.svg"),
          detail_content: require("@/projects/llcs/s4/sb5/archi/1_detail.svg"),
          avatar: require("@/projects/llcs/s4/sb5/archi/1_avatar.jpg"),
          slides: [
            require("@/projects/llcs/s4/sb5/archi_detail/slides/1_1.jpg"),
            require("@/projects/llcs/s4/sb5/archi_detail/slides/1_2.jpg"),
            require("@/projects/llcs/s4/sb5/archi_detail/slides/1_3.jpg"),
          ],
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb5/archi/2.png"),
          content: require("@/projects/llcs/s4/sb5/archi/2_content.svg"),
          detail_content: require("@/projects/llcs/s4/sb5/archi/2_detail.svg"),
          avatar: require("@/projects/llcs/s4/sb5/archi/2_avatar.jpg"),
          slides: [
            require("@/projects/llcs/s4/sb5/archi_detail/slides/2_1.jpg"),
            require("@/projects/llcs/s4/sb5/archi_detail/slides/2_2.jpg"),
          ],
          rewards: require("@/projects/llcs/s4/sb5/archi/2_rewards.png"),
        },
        {
          imgSrc: require("@/projects/llcs/s4/sb5/archi/3.png"),
          content: require("@/projects/llcs/s4/sb5/archi/3_content.svg"),
          detail_content: require("@/projects/llcs/s4/sb5/archi/3_detail.svg"),
          avatar: require("@/projects/llcs/s4/sb5/archi/3_avatar.jpg"),
          slides: [
            require("@/projects/llcs/s4/sb5/archi_detail/slides/3_1.jpg"),
            require("@/projects/llcs/s4/sb5/archi_detail/slides/3_2.jpg"),
            require("@/projects/llcs/s4/sb5/archi_detail/slides/3_3.jpg"),
            require("@/projects/llcs/s4/sb5/archi_detail/slides/3_4.jpg"),
          ],
        },
      ],
    };
  },

  methods: {
    openDetail(index, reallyIndex) {
      this.activeArchiDetailOpen = true;
      this.activeArchiDetail = this.archiList[index];
    },
  },

  created() {},

  mounted() {
    const self = this;
    $(document).keyup(function (e) {
      if (e.key === "Escape") {
        self.activeArchiDetailOpen = false;
      }
    });
  },
};
</script>
