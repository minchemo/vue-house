<template>
  <div class="section11">
    <div class="swiper-box-nav" v-if="isMobile">
      <div class="prev" @click="prevS">
        <img
          v-lazy
          :temp="require('@/projects/pjr/s11/prev.svg')"
          alt=""
          srcset=""
        />
      </div>
      <div class="currentTitle" v-html="getTitle(0)"></div>
      <div class="next" @click="nextS">
        <img
          v-lazy
          :temp="require('@/projects/pjr/s11/next.svg')"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="info" :key="activeSlide.title + 'key'">
      <div class="avatar-box">
        <img
          class="avatar"
          :src="activeSlide.avatar"
          alt=""
          srcset=""
          data-aos="fade-up"
          data-aos-delay="0"
        />
        <div>
          <div
            class="subtitle"
            v-if="!isMobile"
            v-html="activeSlide.subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <div
            class="subtitle"
            v-else
            v-html="getTitle(1)"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <h2
            v-html="activeSlide.title"
            data-aos="fade-up"
            data-aos-delay="200"
          ></h2>
        </div>
      </div>
      <div class="divider"></div>
      <p
        v-html="activeSlide.content"
        data-aos="fade-up"
        data-aos-delay="300"
      ></p>
    </div>
    <div
      class="swiper-box"
      data-aos="fade-up"
      data-aos-delay="350"
      :key="activeSlide.title"
    >
      <swiper :options="swiperOptions" ref="swiper">
        <swiper-slide
          class="slide"
          v-for="(slide, i) in activeSlide.img"
          :key="slide"
          v-bind:style="{
            backgroundImage: `url(${slide})`,
          }"
        >
          <div class="caption">
            {{ activeSlide.caption[i] }}
          </div>
        </swiper-slide>
        <div
          class="swiper-button-prev"
          slot="button-prev"
          v-if="isMobile"
        ></div>
        <div
          class="swiper-button-next"
          slot="button-next"
          v-if="isMobile"
        ></div>
        <div class="swiper-pagination" v-if="!isMobile" slot="pagination"></div>
      </swiper>
    </div>
    <div class="swiper-box-nav" v-if="!isMobile">
      <div class="prev" @click="prevS">
        <img
          v-lazy
          :temp="require('@/projects/pjr/s11/prev.svg')"
          alt=""
          srcset=""
        />
      </div>
      <div class="next" @click="nextS">
        <img
          v-lazy
          :temp="require('@/projects/pjr/s11/next.svg')"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section11 {
  background-color: #d2dee0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  .info {
    text-align: left;
    width: size(700);
    margin-right: size(50);
    font-weight: 300;
    .avatar-box {
      display: flex;
      align-items: center;
      margin-bottom: size(25);
      height: size(240);
      .subtitle {
        font-size: size(29);
        color: #231815;
        line-height: 2;
        font-family: "Noto Serif TC", Noto Sans TC, serif;
        font-weight: 600;
      }
      h2 {
        font-size: size(54);
        font-weight: 500;
        line-height: 1.2;
        color: #267f98;
        white-space: nowrap;
        font-family: "Noto Serif TC", Noto Sans TC, serif;
      }
      .avatar {
        margin-right: size(10);
        height: 100%;
      }
    }
    .divider {
      background: #009be4;
      width: 100%;
      height: 1px;
      margin-top: size(25);
      margin-bottom: size(25);
    }
    p {
      font-size: size(22);
      letter-spacing: size(3);
      font-weight: 400;
      line-height: 1.5;
      color: #231815;
    }
  }
  .swiper-box {
    position: relative;
    width: size(767);
    .swiper-container {
      padding: size(50) 0;
      .slide {
        height: 0;
        padding-bottom: 66.6%;
        background-size: cover;
        .caption {
          position: absolute;
          z-index: 1;
          color: #fff;
          right: size(40);
          bottom: size(30);
          font-size: size(20);
          font-weight: 200;
          text-shadow: #000 0.1em 0.1em 0.1em;
        }
      }
      .swiper-button-prev {
        left: size(50);
        width: size(80);
        height: size(80);
        color: #fff;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;

        &::after {
          content: "";
        }
      }
      .swiper-button-next {
        right: size(50);
        color: #fff;
        width: size(80);
        height: size(80);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;

        &::after {
          content: "";
        }
      }

      .swiper-pagination {
        .swiper-pagination-bullet {
          margin: 0 size(6);
          border-radius: 0;
          background: transparent;
          border: 1px solid #267f98;
          width: size(18);
          height: size(18);
          opacity: 1;
          &.swiper-pagination-bullet-active {
            background: #267f98;
          }
        }
      }
    }
  }
  .swiper-box-nav {
    width: size(1700);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .prev,
    .next {
      width: size(46);
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section11 {
    background-color: #d2dee0;
    min-height: unset;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .currentTitle {
      font-family: "Noto Serif TC", Noto Sans TC, serif;
      font-weight: 600;
    }

    .info {
      text-align: left;
      width: 80%;
      margin-left: unset;
      margin-top: size-m(30);
      margin-right: 0;
      height: auto;
      .avatar-box {
        display: flex;
        align-items: flex-end;
        margin-bottom: size-m(25);
        height: size-m(110);
        .subtitle {
          font-size: size-m(14.5);
          color: #231815;
          line-height: 1;
          margin-bottom: size-m(10);
          font-weight: 600;
        }
        h2 {
          font-size: size-m(25.2);
          font-weight: 300;
          line-height: 1.2;
          color: #267f98;
          white-space: nowrap;
          font-weight: 600;
        }
        .avatar {
          margin-right: size-m(10);
          height: 100%;
        }
      }
      .divider {
        display: none;
      }
      p {
        margin-top: size-m(20);
        font-size: size-m(12);
        letter-spacing: size(3);
        line-height: 1.5;
        font-weight: 500;
      }
    }
    .swiper-box {
      width: 80%;
      .swiper-container {
        padding: 0;
        margin: size-m(20) 0;
        .slide {
          height: 0;
          padding-bottom: 66.6%;
          background-size: cover;
          .caption {
            position: absolute;
            z-index: 1;
            color: #fff;
            right: size-m(10);
            bottom: size-m(10);
            font-size: size-m(12);
            text-shadow: #000 0.1em 0.1em 0.1em;
            font-weight: 300;
          }
        }
        .swiper-button-prev {
          left: size-m(20);
          width: size-m(40);
          height: size-m(40);
          color: #fff;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: left;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;

          &::after {
            content: "";
          }
        }
        .swiper-button-next {
          right: size-m(20);
          width: size-m(40);
          height: size-m(40);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right;
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;

          &::after {
            content: "";
          }
        }

        .swiper-pagination {
          .swiper-pagination-bullet {
            border-radius: 0;
            background: transparent;
            border: 1px solid #267f98;
            width: size(18);
            height: size(18);
            opacity: 1;
            &.swiper-pagination-bullet-active {
              background: #267f98;
            }
          }
        }
      }
    }
    .swiper-box-nav {
      width: 80%;
      position: relative;
      margin: size-m(30) 0;
      top: 0%;
      transform: translateY(0%);
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .prev,
      .next {
        width: size-m(20);
        cursor: pointer;
        img {
          width: 100%;
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
  name: "section11",

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
      activeSlide: {},
      currentSlide: 0,
      slides: [
        {
          subtitle: "建築外觀<br/>P&T GROUP香港巴馬丹拿集團",
          title: "全球百年建築巨擘<br>改寫亞洲建築史",
          content: `P&T集團成立於1868年，作為東南亞歷史最悠久、規模最龐大的建築集團，操刀無數富紳豪邸、跨國總部、五星酒店，締造劃時代建築里程碑。<br><br>代表作品│BELLAVITA寶麗廣場、上海IFC、杜拜Viceroy Palm Jumeirah`,
          img: [
            require("@/projects/pjr/s11/1.jpg"),
            require("@/projects/pjr/s11/1-2.jpg"),
            require("@/projects/pjr/s11/1-4.jpg"),
            require("@/projects/pjr/s11/1-7.jpg"),
          ],
          avatar: require("@/projects/pjr/s11/1avatar.jpg"),
          caption: [
            "台北Bellavita",
            "上海IFC",
            "杜拜Viceroy Palm Jumeirah",
            "新加坡Le Nouvel Ardmore",
          ],
        },
        {
          subtitle: "建築規劃<br/>美國密西根建築碩士",
          title: "陳金水建築師事務所<br>陳金水",
          content: `曾獲美國建築師協會Henry Adams獎章，執業超過二十年，擅以現代創新筆法回應地景脈絡，締造與自然相契的建築作品。<br><br>代表作品│祥德帝寶、綺華有仁愛`,
          img: [
            require("@/projects/pjr/s11/2-1.jpg"),
            require("@/projects/pjr/s11/2-2.jpg"),
            require("@/projects/pjr/s11/2-3.jpg"),
          ],
          avatar: require("@/projects/pjr/s11/2avatar.jpg"),
          caption: ["九昱晴美", "祥德帝寶", "綺華有仁愛"],
        },
        {
          subtitle: "公設設計<br/>留美設計藝匠",
          title: "萊比空間設計<br>施秋蓮",
          content: `創立近二十年，集結頂尖設計團隊，深刻磨砥空間美學，從居者的生命體驗起始，巧妙契合實用機能與感官饗宴，重新定義家的奢華本質。<br><br>代表作品│璞真仰睦、岳泰峰範、全陽柏悅`,
          img: [
            require("@/projects/pjr/s11/3-1.jpg"),
            require("@/projects/pjr/s11/3-2.jpg"),
            require("@/projects/pjr/s11/3-3.jpg"),
          ],
          avatar: require("@/projects/pjr/s11/3avatar.jpg"),
          caption: ["全陽柏悅", "岳泰峰範", "璞真仰睦"],
        },
        {
          subtitle: "景觀設計<br/>當代景觀名家",
          title: "頤和景觀<br>李淑雲",
          content: `秉承當代景觀設計思潮，呼應中山北路浩瀚樹海地景，創造都市、建築、人文、生態深度共鳴，譜寫人居環境與自然萬物的優雅格調。<br><br>代表作品│勤美璞真碧湖畔、華固天鑄、華固樂慕`,
          img: [
            require("@/projects/pjr/s11/4-1.jpg"),
            require("@/projects/pjr/s11/4-2.jpg"),
            require("@/projects/pjr/s11/4-3.jpg"),
            require("@/projects/pjr/s11/4-4.jpg"),
          ],
          avatar: require("@/projects/pjr/s11/4avatar.jpg"),
          caption: [
            "勤美璞真碧湖畔",
            "華固天鑄",
            "華固天鑄",
            "華固樂慕",
          ],
        },
        {
          subtitle: "燈光設計<br/>光雕美學詩人",
          title: "肯緒照明設計<br>林世秉",
          content: `長年受劇場美學薰陶，擅長解構空間既有元素，伴隨自然與日夜星辰流轉，重建光影環境與視覺層次，彰顯璞真之道地標價值。<br><br>代表作品│璞真一一、富富話合、忠泰味、君悅酒店。`,
          img: [
            require("@/projects/pjr/s11/5-1.jpg"),
            require("@/projects/pjr/s11/5-2.jpg"),
            require("@/projects/pjr/s11/5-3.jpg"),
            require("@/projects/pjr/s11/5-4.jpg"),
          ],
          avatar: require("@/projects/pjr/s11/5avatar.jpg"),
          caption: ["忠泰味", "君悅酒店", "富富話合", "璞真一一"],
        },
      ],
      swiperOptions: {
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 4500,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".section11 .swiper-pagination",
          clickable: true,
        },
      },
    };
  },

  methods: {
    getTitle(index) {
      const array = this.activeSlide.subtitle.split("<br/>");
      return array[index];
    },
    nextS() {
      this.currentSlide++;
      if (this.currentSlide == this.slides.length) {
        this.currentSlide = 0;
      }

      this.activeSlide = this.slides[this.currentSlide];
      this.refreshAOS();
    },
    prevS() {
      this.currentSlide--;
      if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length - 1;
      }

      this.activeSlide = this.slides[this.currentSlide];
      this.refreshAOS();
    },
    refreshAOS() {
      setTimeout(() => {
        $("[data-aos]").each((i, val) => {
          $(val).addClass("aos-animate");
        });
      }, 0);
    },
  },
  created() {
    this.activeSlide = this.slides[this.currentSlide];
  },
};
</script>
