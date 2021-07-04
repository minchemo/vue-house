<template>
  <div class="new-section">
    <div
      class="feature-box"
      v-for="(feature, i) in features"
      :key="i"
      v-bind:class="{ 'flex-reverse': feature.flex_reverse == true }"
    >
      <div v-if="isMobile" class="feature-info">
        <div
          class="f_tip"
          v-bind:class="{ 'flex-reverse': feature.flex_reverse == true }"
        >
          {{ feature.f_tip }}
        </div>
        <div class="f_st">{{ feature.f_st }}</div>
        <div class="feature-buttons" v-if="feature.f_t == 'SPACE AESTHETICS'">
          <div
            @click="changeP('26p')"
            v-bind:class="{ active: activeP == '26p' }"
          >
            <span>26坪</span>／<span>2房</span>
          </div>
          <div
            @click="changeP('36p')"
            v-bind:class="{ active: activeP == '36p' }"
          >
            <span>36坪</span>／<span>3房</span>
          </div>
          <div
            @click="changeP('52p')"
            v-bind:class="{ active: activeP == '52p' }"
          >
            <span>52坪</span>／<span>4房</span>
          </div>
        </div>
        <div class="f_des" v-html="feature.f_des"></div>
      </div>

      <div class="swiper-box" data-aos="fade-right" data-aos-duration="1000">
        <swiper
          :ref="`swiper-${i + 1}`"
          :options="feature.swiperOptions"
          v-if="swiperReset"
        >
          <swiper-slide
            v-for="(img, i) in feature.f_slides[0].img"
            v-bind:key="i"
            v-bind:style="{
              backgroundImage: `url(${img})`,
              paddingTop: `${feature.slideRatio}%`,
            }"
          >
          </swiper-slide>
          <div
            v-if="!isMobile"
            slot="pagination"
            :class="
              feature.flex_reverse
                ? [
                    'swiper-pagination',
                    'flex-reverse',
                    `swiper-pagination-${i + 1}`,
                  ]
                : ['swiper-pagination', `swiper-pagination-${i + 1}`]
            "
          ></div>
        </swiper>

        <div class="feature-buttons" v-if="feature.f_t == 'SPACE AESTHETICS'">
          <div
            @click="changeP('26p')"
            v-bind:class="{ active: activeP == '26p' }"
          >
            <span>26坪</span>／<span>2房</span>
          </div>
          <div
            @click="changeP('36p')"
            v-bind:class="{ active: activeP == '36p' }"
          >
            <span>36坪</span>／<span>3房</span>
          </div>
          <div
            @click="changeP('52p')"
            v-bind:class="{ active: activeP == '52p' }"
          >
            <span>52坪</span>／<span>4房</span>
          </div>
        </div>
      </div>

      <div v-if="isMobile" class="f_t">{{ feature.f_t }}</div>
      <div
        v-if="!isMobile"
        class="feature-info"
        v-bind:class="{ 'flex-reverse': feature.flex_reverse == true }"
      >
        <div class="f_t">{{ feature.f_t }}</div>
        <div class="f_st">{{ feature.f_st }}</div>
        <div class="f_des" v-html="feature.f_des"></div>
        <div
          v-if="!isMobile"
          class="f_tip"
          v-bind:class="{ 'flex-reverse': feature.flex_reverse == true }"
        >
          {{ feature.f_tip }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import SwiperClass, { Navigation, Pagination } from "swiper";
SwiperClass.use([Navigation, Pagination]);
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper.min.css";

// @ is an alias to /src
export default {
  name: "new-section",
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
      features: [
        {
          f_t: "THE LANDMARK",
          f_st: "大道凌空鉅作 為古都帶來國際感天際線",
          f_des: !isMobile
            ? "西門大道稀有千坪土地，三面臨路、基地方正，建物以南北座向配置，<br>三面立面全正面處理，雋永樸質色系融入地景風光，<br>創造充滿自鳴性的雙塔建築，在城市天際線聚集目光，<br>24層高度眺望城市景觀，未來將活躍古都天際線，註定是不凡地標。"
            : "西門大道稀有千坪土地，三面臨路、基地方正，建物以南北座向配置，<br>三面立面全正面處理，雋永樸質色系融入地景風光，<br>創造充滿自鳴性的雙塔建築，在城市天際線聚集目光，<br>24層高度眺望城市景觀，未來將活躍古都天際線，註定是不凡地標。",
          f_slides: [
            {
              f_type: "",
              img: [
                require("../pages/new-section/6.外觀透視/1.jpg"),
                require("../pages/new-section/6.外觀透視/2.jpg"),
                require("../pages/new-section/6.外觀透視/3.jpg"),
              ],
            },
          ],
          f_tip:
            "此為廣告效果示意，為單一建物電腦3D透視表現，周遭環境係電腦合成，建設公司保有建物外觀修正之權利",
          flex_reverse: true,
          swiperOptions: {
            pagination: {
              el: ".swiper-pagination-1",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            spaceBetween: 10,
          },
          slideRatio: 88.64,
        },
        {
          f_t: "AESTHETICS LIFE",
          f_st: "臺灣蔦屋選書 全齡樂活苑邸",
          f_des: !isMobile
            ? "以台南的溫厚歷史為基礎，古意中注入現代優雅，表現居遊空間的閒適，<br>讓人回家就能感受溫暖的迎接。<br><br><span style='color:#d90001'>●</span>迎賓門廳挑高七米四，可穿透的書櫃牆裝飾傳統窗花圖騰，<br>手感質地樸實，呼應古都歷史人文。<br><span style='color:#d90001'>●</span>臺灣蔦屋選書閱覽室以多寶格藏物格架設計，地板牆面以自然溫潤木質地鋪陳，<br>心自然沉靜下來。<br><span style='color:#d90001'>●</span>規劃兒童閱覽遊戲室、健身房、多功能交誼廳等多項休閒設施，在家也可隨時運動。"
            : "以台南的溫厚歷史為基礎，古意中注入現代優雅，表現居遊空間的閒適，<br>讓人回家就能感受溫暖的迎接。<br><br><span style='color:#d90001'>●</span>迎賓門廳挑高七米四，可穿透的書櫃牆裝飾傳統窗花圖騰，<br>手感質地樸實，呼應古都歷史人文。<br><span style='color:#d90001'>●</span>臺灣蔦屋選書閱覽室以多寶格藏物格架設計，<br>地板牆面以自然溫潤木質地鋪陳，心自然沉靜下來。<br><span style='color:#d90001'>●</span>規劃兒童閱覽遊戲室、健身房、多功能交誼廳等多項休閒設施，<br>在家也可隨時運動。",
          f_slides: [
            {
              f_type: "",
              img: [
                require("../pages/new-section/7.公設透視/1.jpg"),
                require("../pages/new-section/7.公設透視/2.jpg"),
                require("../pages/new-section/7.公設透視/3.jpg"),
                require("../pages/new-section/7.公設透視/4.jpg"),
                require("../pages/new-section/7.公設透視/5.jpg"),
                require("../pages/new-section/7.公設透視/6.jpg"),
                require("../pages/new-section/7.公設透視/7.jpg"),
                require("../pages/new-section/7.公設透視/8.jpg"),
              ],
            },
          ],
          f_tip:
            "公設3D透視參考示意圖，傢俱、飾品、藝術品與植栽皆為情境表現，建設公司保有修正之權利",
          flex_reverse: false,
          swiperOptions: {
            pagination: {
              el: ".swiper-pagination-2",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            spaceBetween: 10,
          },
          slideRatio: 64.48,
        },
        {
          f_t: "SPACE AESTHETICS",
          f_st: "高坪效空間美學 高規格奢華享受",
          f_des: !isMobile
            ? "<span style='color:#d90001'>●</span>2房雙衛浴，客廳、餐廳、臥室均有採光通風，主浴標配浴缸及全自動智能馬桶<br><span style='color:#d90001'>●</span>3房邊間，兩面採光，雙衛開窗，主臥四件式衛浴，可規劃衣帽間<br><span style='color:#d90001'>●</span>4房3衛雙主臥孝親房，可規劃內、外廚房，媲美透天別墅空間機能"
            : "<span style='color:#d90001'>●</span>2房雙衛浴，客廳、餐廳、臥室均有採光通風，<br>主浴標配浴缸及全自動智能馬桶<br><span style='color:#d90001'>●</span>3房邊間，兩面採光，雙衛開窗，主臥四件式衛浴，可規劃衣帽間<br><span style='color:#d90001'>●</span>4房3衛雙主臥孝親房，可規劃內、外廚房，媲美透天別墅空間機能",
          f_slides: [
            {
              f_type: "26p",
              img: [
                require("../pages/new-section/8.樣品屋/26p/1.jpg"),
                require("../pages/new-section/8.樣品屋/26p/2.jpg"),
                require("../pages/new-section/8.樣品屋/26p/3.jpg"),
                require("../pages/new-section/8.樣品屋/26p/4.jpg"),
              ],
            },
          ],
          f_tip: "樣品屋裝修、傢具及擺飾品，非屬標準建材，實際依買賣契約書為準",
          flex_reverse: true,
          swiperOptions: {
            pagination: {
              el: ".swiper-pagination-3",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
            spaceBetween: 10,
          },
          slideRatio: 57.73,
        },
      ],
      activeP: "26p",
      otherSlides: [
        {
          f_type: "26p",
          img: [
            require("../pages/new-section/8.樣品屋/26p/1.jpg"),
            require("../pages/new-section/8.樣品屋/26p/2.jpg"),
            require("../pages/new-section/8.樣品屋/26p/3.jpg"),
            require("../pages/new-section/8.樣品屋/26p/4.jpg"),
          ],
        },
        {
          f_type: "36p",
          img: [
            require("../pages/new-section/8.樣品屋/36p/1.jpg"),
            require("../pages/new-section/8.樣品屋/36p/2.jpg"),
            require("../pages/new-section/8.樣品屋/36p/3.jpg"),
            require("../pages/new-section/8.樣品屋/36p/4.jpg"),
          ],
        },
        {
          f_type: "52p",
          img: [
            require("../pages/new-section/8.樣品屋/52p/1.jpg"),
            require("../pages/new-section/8.樣品屋/52p/2.jpg"),
            require("../pages/new-section/8.樣品屋/52p/3.jpg"),
            require("../pages/new-section/8.樣品屋/52p/4.jpg"),
          ],
        },
      ],
      swiperReset: false,
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    },
  },
  methods: {
    changeP(p) {
      const targetP = this.otherSlides.find((item) => item.f_type == p);
      this.features[2].f_slides[0] = targetP;

      this.swiperReset = false;
      this.$nextTick(() => {
        this.swiperReset = true;
      });

      this.activeP = p;
    },
  },
  mounted() {
    setTimeout(() => {
      this.swiperReset = true;
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.feature-box {
  display: flex;
  text-align: left;
  justify-content: space-between;
  margin-top: 10vh;
  flex-wrap: wrap;
  overflow: hidden;

  &.flex-reverse {
    flex-direction: row-reverse;
  }

  .feature-slide-caption {
    width: 100%;
    font-family: "Noto Sans TC", serif;
    margin-bottom: 12px;
  }
  .swiper-box {
    width: 48% !important;
    overflow: hidden;
    .swiper-container {
      padding-bottom: 2rem;
      .swiper-pagination {
        left: unset;
        right: 0;
        width: auto;
        &.flex-reverse {
          left: 0;
          right: unset;
        }
      }
      .swiper-slide {
        overflow: hidden;
        height: 50vh;
        padding-top: 0;
        background-size: cover;
        p {
          display: none;
        }
      }
    }
    .feature-buttons {
      display: flex;
      width: 70%;
      margin: 1vw 0;
      div {
        width: calc(100% / 3);
        border: 1px solid #d90001;
        color: #d90001;
        padding: 1vw 0 1vw 0;
        margin: 4px;
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        span {
          display: block;
          position: relative;
          &:nth-child(1) {
            margin-top: -4px;
          }
        }

        &.active {
          background: #d90001;
          color: #fff;
        }
        &:hover {
            cursor: pointer;
          background: #d90001;
          color: #fff;
        }
      }
    }
  }
  .feature-info {
    width: 48%;
    position: relative;
    &.flex-reverse {
      text-align: right;
    }
    .f_t {
      font-size: 3rem;
      font-weight: bold;
      color: #c9c9c9;
      margin-bottom: 24px;
    }
    .f_st {
      font-size: 2.2rem;
      font-weight: bold;
      border-bottom: 7px solid #d90001;
      padding-bottom: 24px;
      margin-bottom: 36px;
    }
    .f_des {
      font-size: 1rem;
      font-family: "Noto Sans TC", serif;
      line-height: 1.8;
      .red-c {
        color: #d90001;
      }
    }
    .f_tip {
      font-size: 0.8rem;
      font-family: "Noto Sans TC", serif;
      color: #d90001;
      position: absolute;
      bottom: 5vh;
      left: 0;
      font-weight: bold;

      &.flex-reverse {
        left: unset;
        right: 0;
      }
    }

    .feature-buttons {
      display: flex;
      width: 100%;
      margin: 4vw 0;
      div {
        width: calc(100% / 3);
        border: 1px solid #d90001;
        color: #d90001;
        padding: 3vw 0 2vw 0;
        margin: 4px;
        display: flex;
        justify-content: center;
        span {
          display: block;
          position: relative;
          &:nth-child(1) {
            margin-top: -4px;
          }
        }

        &.active {
          background: #d90001;
          color: #fff;
        }
      }
    }
  }
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .feature-box {
    display: flex;
    text-align: left;
    justify-content: space-between;
    margin-top: 2vh;
    flex-wrap: wrap;
    padding: 0;
    flex-direction: column-reverse !important;

    .feature-slide-caption {
      font-size: 0.8rem;
      width: 100%;
      font-family: "Noto Sans TC", serif;
      margin-bottom: 12px;
      margin-top: 10vh;
    }
    .swiper-box {
      width: 100% !important;
      overflow: visible;
      .swiper-container {
        padding-bottom: 0rem;
        overflow: visible;
        .swiper-pagination {
          left: unset;
          right: 0;
          width: auto;
        }
        .swiper-slide {
          overflow: hidden;
          height: 0;
          padding-top: 67.99%;
          background-size: cover;
          p {
            display: none;
          }
        }
      }
    }
    .feature-info {
      width: 100%;
      text-align: center;
      padding: 0 5vw;
      .f_st {
        font-size: 1.3rem;
        font-weight: bold;
        border-bottom: 3px solid #d90001;
        padding-bottom: 12px;
        margin-bottom: 12px;
      }
      .f_des {
        font-size: 0.7rem;
        font-family: "Noto Sans TC", serif;
        line-height: 1.8;
        text-align: center;
        white-space: nowrap;
        .red-c {
          color: #d90001;
        }
      }
      .f_tip {
        font-size: 0.5rem;
        font-family: "Noto Sans TC", serif;
        color: #d90001;
        position: relative;
        bottom: unset;
        left: unset;
        font-weight: bold;
        margin: 18px 0;
      }
    }

    .f_t {
      color: #c9c9c9;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: -4px;
      margin-top: 4rem;
    }
  }
}
</style>

<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.new-section {
  padding-top: 10vh;
  position: relative;
  font-family: "Noto Serif TC", serif;
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  .title {
    width: 100%;
    svg {
      .cls-1 {
        fill: #c9c9c9;
      }
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .new-section {
    padding: 0;

    .title {
      width: 100%;
      margin-bottom: 2rem;
      svg {
        .cls-1 {
          fill: #ccc;
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
