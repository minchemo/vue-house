<template>
  <div class="section7">
    <div class="slides-title" data-aos="flip-up" data-aos-duration="1000">
      ELITE TEAM <br v-if="isMobile" />精英團隊
    </div>
    <div class="divider"></div>
    <div class="elites">
      <template v-for="(group, i) in groups">
        <div class="elites-item" :key="i">
          <div class="info">
            <div class="title">
              {{ group.group }}<span>{{ group.leader }}</span>
            </div>
            <div class="subtitle" v-html="group.subtitle"></div>
            <div class="content" v-html="group.content"></div>
            <div class="works" v-html="group.works"></div>
          </div>
          <swiper :options="swiperOptions" class="slides" :key="activeGroup">
            <swiper-slide
              v-for="(slide, i) in group.img"
              v-bind:key="i"
              v-bind:style="{
                backgroundImage: `url(${slide.url})`,
              }"
              class="slide-item"
            >
              <div class="caption" v-if="slide.caption != ''">
                {{ slide.caption }}
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </template>
    </div>
    <div class="elites-toggle" v-if="!isMobile">
      <div
        class="elites-toggle-item"
        v-bind:class="{ active: activeGroup == toggle.group }"
        v-for="(toggle, i) in slides"
        :key="i"
        @click="activeGroup = toggle.group"
      >
        {{ toggle.group }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-pagination {
  .swiper-pagination-bullet {
    width: 1vw;
    height: 1vw;
    background: transparent;
    border: 1px solid #fff;
    opacity: 1;
    &.swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 3vw;
      height: 3vw;
    }
  }
}
</style>

<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section7 {
  height: auto;
  width: 100vw;
  background-size: contain;
  background-image: url("~@/assets/img/bg.jpg");
  padding-bottom: 120px;

  .slides-title {
    text-align: left;
    padding: 0 5vw;
    font-size: 1.8vw;
    font-weight: 600;
    color: #000;
  }

  .divider {
    height: 2px;
    width: 90vw;
    margin: 3vw auto;
    background-color: #000;
  }

  .elites {
    position: relative;
    width: 90vw;
    height: auto;
    left: 5vw;
    background-color: #e7e7e7;
    .elites-item {
      display: flex;
      .info {
        width: 42%;
        text-align: left;
        padding: 5vw;
        .title {
          font-size: 1.2vw;
          border-bottom: 2px solid;
          display: inline-block;
          padding-bottom: 0.5vw;
          span {
            font-size: 2vw;
            font-weight: bold;
            margin-left: 0.5vw;
          }
        }

        .subtitle {
          font-size: 2vw;
          font-weight: bold;
          margin-top: 6vw;
        }
        .content {
          margin-top: 1vw;
          font-size: 1.2vw;
          line-height: 2;
          text-align: justify;
        }
        .works {
          position: absolute;
          bottom: 2.5vw;
          left: 5vw;
          margin-top: 2vw;
          font-size: 1vw;
        }
      }

      .slides {
        width: 58%;
        .slide-item {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          height: 0;
          padding-bottom: 66.3%;
          box-sizing: border-box;
          position: relative;
          overflow: visible;
          background-color: #000;

          .caption {
            position: absolute;
            right: 8vw;
            bottom: 2vw;
            color: #fff;
            font-size: 1.2vw;
            letter-spacing: 1px;
            filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.5));
          }
        }
      }
    }
  }

  .elites-toggle {
    margin: 0 5vw;
    display: flex;
    justify-content: space-between;
    background: #231815;
    .elites-toggle-item {
      width: 20%;
      color: #fff;
      font-size: 1.5vw;
      font-weight: bold;
      padding: 1vw 0;
      border-right: 1px solid #fff;
      position: relative;
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
      &:last-child {
        border: 0;
      }

      &.active {
        &:after {
          content: "";
          position: absolute;
          left: 15%;
          bottom: 12%;
          width: 70%;
          height: 3%;
          background-color: #fff;
        }
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section7 {
    height: auto;
    width: 100vw;
    background-size: contain;
    background-image: url("~@/assets/img/bg.jpg");
    padding-bottom: 0px;

    .slides-title {
      text-align: left;
      padding: 0 10vw;
      font-size: 28px;
      font-weight: 600;
      padding-top: 60px;
    }
    .divider {
      position: relative;
      height: 1px;
      width: 90vw;
      margin: 10vw auto;
      background-color: #000;
      right: -5vw;
    }

    .elites {
      position: relative;
      width: 100vw;
      left: 0;
      background: transparent;
      .elites-item {
        display: flex;
        flex-direction: column-reverse;
        .info {
          width: 100%;
          text-align: left;
          padding: 10vw;
          .title {
            font-size: 18px;
            border-bottom: 1px solid;
            padding-bottom: 12px;
            span {
              font-size: 26px;
              margin-left: 10px;
            }
          }

          .subtitle {
            font-size: 22px;
            margin-top: 30px;
          }
          .content {
            margin-top: 12px;
            font-size: 16px;
          }
          .works {
            position: relative;
            bottom: unset;
            left: unset;
            margin-top: 32px;
            font-size: 14px;
            line-height: 1.5;
          }
        }

        .slides {
          width: 100%;
          .slide-item {

            .caption {
              right: 14px;
              bottom: 14px;
              font-size: 16px;
            }
          }
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
import info from "@/info";
import { isMobile } from "@/utils";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "section7",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  computed: {
    groups() {
      return this.isMobile
        ? this.slides
        : this.slides.filter((item) => item.group == this.activeGroup);
    },
  },
  watch: {
    groups() {
      if (this.isMobile) return;
      this.groups = this.slides.filter(
        (item) => item.group == this.activeGroup
      );
    },
  },
  data() {
    return {
      info,
      isMobile,
      swiperOptions: {
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
        },
      },
      activeGroup: "建築設計",
      slides: [
        {
          group: "建築設計",
          leader: "葉日明",
          subtitle: "從居住之人角度出發的協調者",
          content: `執業超過40年，擁有交通部工程師、中華顧問工程師等資歷，操刀〔太平洋敦南麗舍〕建築規劃，與太平洋團隊群策協力雕琢東區精品，在珍稀佳境為住戶打造舒適、安全、流暢、優美的輕奢雅居。`,
          works: "建築實績作品｜陳世鎮商辦大樓、錦西街集合住宅更新案",
          img: [
            {
              url: require("@/projects/dnls/s7/a.jpg"),
              caption: "",
            },
            {
              url: require("@/projects/dnls/s7/a-1.jpg"),
              caption: "陳世鎮商辦大樓",
            },
            {
              url: require("@/projects/dnls/s7/a-2.jpg"),
              caption: "錦西街集合住宅更新案",
            },
          ],
        },
        {
          group: "立面美學",
          leader: "陳克聚",
          subtitle: "為城市空間刻畫美好時代注腳",
          content: `設計理念講究視覺感受合宜的舒適配比，<br>〔太平洋敦南麗舍〕立面語彙以名牌精品內斂的配色、俐落的織紋為靈感出發，線條分割精準好似量身定制的時尚西服，在東區一片繁華中樹立醒目秩序。`,
          works: "建築實績作品｜敦南藝術館、頂禾園",
          img: [
            {
              url: require("@/projects/dnls/s7/b.jpg"),
              caption: "",
            },
            {
              url: require("@/projects/dnls/s7/b-1.jpg"),
              caption: "敦南藝術館",
            },
            {
              url: require("@/projects/dnls/s7/b-2.jpg"),
              caption: "頂禾園",
            },
          ],
        },
        {
          group: "結構設計",
          leader: "周有結",
          subtitle: "建築結構安全的一號守門人",
          content: `結構工程、土木工程雙技師資格，<br/>〔太平洋敦南麗舍〕建築布局方正、梁柱架構完整，基地開挖深度達13.75公尺、地下連續壁厚度達60公分，並以地盤改良基地地層，耐震設計符合現行建築規範。`,
          works: "建築實績作品｜北投吾悠、台糖騰雲大樓",
          img: [
            {
              url: require("@/projects/dnls/s7/c.jpg"),
              caption: "",
            },
            {
              url: require("@/projects/dnls/s7/c-1.jpg"),
              caption: "北投吾悠",
            },
            {
              url: require("@/projects/dnls/s7/c-2.jpg"),
              caption: "台糖騰雲大樓",
            },
          ],
        },
        {
          group: "公設景觀",
          leader: "陳昫吟",
          subtitle: "讓建築和城市誕生第三種風景",
          content: `〔太平洋敦南麗舍〕以城市綠寶石為主題，屋頂規劃高度綠化猶如茂盛的大樹樹冠，內部設計則以大器石紋和暖色金屬搭配，利用異材質的巧妙交織形塑國際精品旅宿般的細膩體驗。`,
          works: "建築實績作品｜東騰越、異雲書屋",
          img: [
            {
              url: require("@/projects/dnls/s7/d.jpg"),
              caption: "",
            },
            {
              url: require("@/projects/dnls/s7/d-1.jpg"),
              caption: "東騰越",
            },
            {
              url: require("@/projects/dnls/s7/d-2.jpg"),
              caption: "異雲書屋",
            },
          ],
        },
        {
          group: "綠建築・智慧建築",
          leader: "楊謙柔",
          subtitle: "將舒適共好融入建築價值",
          content: `以生態、節能、減廢、健康四大目標為<br/>〔太平洋敦南麗舍〕制定設計準則，除了在外殼節能項目獲得滿分評價，亦架構智慧化建築神經系統，計畫取得《綠建築》、《智慧建築》雙銀級標章。`,
          works: "建築實績作品｜敦南樞苑、華固天鑄",
          img: [
            {
              url: require("@/projects/dnls/s7/e.jpg"),
              caption: "",
            },
            {
              url: require("@/projects/dnls/s7/e-1.jpg"),
              caption: "敦南樞苑",
            },
            {
              url: require("@/projects/dnls/s7/e-2.jpg"),
              caption: "華固天鑄",
            },
          ],
        },
      ],
    };
  },

  methods: {},

  created() {},
};
</script>
