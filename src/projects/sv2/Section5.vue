<template>
  <div class="section5">
    <div class="section-item">
      <div v-if="isMobile">
<h3 class="title1">大林口四百貨商圈<br>A7旗艦風格新地標</h3>
<h3 class="title2">雙影城、四百貨，釋放城市精髓盡興探索都會、饗樂風格和生活品味</h3>
<h3 class="title3">體驗/生活與校園</h3>
<h3 class="title">大林口商圈</h3>
<div class="desc"><b>10分鐘樂遊大林口｜</b>共享A7、A8、A9三大生活圈，國賓、威秀雙影城、A8 &amp; A9環球百貨、林口OUTLET，近享城市精彩。</div>
      </div>
      <!--
      <div v-if="isMobile">
        <svg
          class="t1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 323.66 415.04"
        >
          <g id="圖層_2" data-name="圖層 2">
            <g id="圖層_1-2" data-name="圖層 1">
              <text class="cls-1" transform="translate(41.28 26.4)">
                大林口四百貨商圈
                <tspan x="-4.03" y="50">A7旗艦風格新地標</tspan>
              </text>
              <text class="cls-2" transform="translate(37 125)">
                雙影城、四百貨，釋放城市精髓
                <tspan x="-21.6" y="30">盡興探索都會、饗樂風格和生活品味</tspan>
              </text>
              <rect
                class="cls-6"
                x="79.66"
                y="229.04"
                width="161"
                height="0.5"
              />
              <rect
                class="cls-6"
                x="79.66"
                y="190.04"
                width="161"
                height="0.5"
              />
              <text class="cls-7" transform="translate(79.31 217.2)">
                體驗/生活與校園
              </text>
              <text class="cls-7" transform="translate(0.16 300.2)">
                大林口商圈
              </text>
              <text class="cls-8" transform="translate(0 335.31)">
                10分鐘樂遊大林口|
                <tspan class="cls-9" x="151" y="0" xml:space="preserve">
                  共享A7、A8、A9三大</tspan>
                <tspan class="cls-9">
                  <tspan x="0" y="30">生活圈，國賓、威秀雙影城、A8 &amp; A9環</tspan>
                  <tspan x="0" y="60">球百貨、林口OUTLET，近享城市精彩。</tspan>
                </tspan>
              </text>
            </g>
          </g>
        </svg>
      </div>

      -->
      <swiper v-if="isMobile" :options="swiperOptions1" :instanceName="3">
        <swiper-slide
          v-for="item of swiperList"
          :key="item.id"
          :style="{ backgroundImage: `url(${item.imgUrl})` }"
        >
          <p>{{ item.title }}</p>
        </swiper-slide>
        <div
          v-if="isMobile"
          class="swiper-button-prev"
          slot="button-prev"
        ></div>
        <div
          v-if="isMobile"
          class="swiper-button-next"
          slot="button-next"
        ></div>
        <div
          class="swiper-pagination swiper-pagination1"
          slot="pagination"
        ></div>
      </swiper>
      <div v-if="!isMobile" class="waterfall">
        <div data-aos="fade-down" data-aos-delay="100">
          <img src="~@/projects/sv2/s5/1.jpg" alt="" />
          <p>三井OUTLET</p>
        </div>
        <div data-aos="fade-down" data-aos-delay="300">
          <img src="~@/projects/sv2/s5/3.jpg" alt="" />
          <p>林口長庚醫院</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="700">
          <img src="~@/projects/sv2/s5/7.jpg" alt="" />
          <p>復興一路商圈</p>
        </div>
        <div class="title" data-aos="fade-up" data-aos-delay="300">



          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427.51 692.43">
            <g id="圖層_2" data-name="圖層 2">
              <g id="圖層_1-2" data-name="圖層 1">
                <text class="cls-1" transform="translate(3.57 33.44)">
                  <tspan class="bold">大林口四百貨商圈</tspan>
                  <tspan class="cls-2">
                    <tspan x="0" y="50">A7</tspan>
                    <tspan class="cls-3" x="43.15" y="50">旗艦風格新地標</tspan>
                  </tspan>
                  <tspan class="cls-4">
                    <tspan x="0" y="135.61">雙影城、四百貨，釋放城市精髓</tspan>
                    <tspan x="0" y="176.61">盡興探索都會、饗樂風格和生活品味</tspan>
                  </tspan>
                  <tspan class="cls-6">
                    <tspan x="0" y="258.61">體驗/生活與校園</tspan>
                  </tspan>
                  <tspan class="cls-7">
                    <tspan class="bold" x="-10" y="305.61">
                      5-6分鐘雙國小學區|
                    </tspan>
                    <tspan
                      class="cls-8"
                      x="199"
                      y="305.61"
                      xml:space="preserve"
                    >
                      樂善國小、文欣國小、</tspan>
                  </tspan>
                  <tspan class="cls-4">
                    <tspan x="0" y="346.61">大崗國中，人文書香薰陶環境。</tspan>
                  </tspan>
                  <tspan class="cls-7">
                    <tspan class="bold" x="-10" y="387.61">
                      6分鐘長庚生活圈|
                    </tspan>
                    <tspan
                      class="cls-8"
                      x="175.02"
                      y="387.61"
                      xml:space="preserve"
                    >
                      國內規模最大醫療機構，</tspan>
                  </tspan>
                  <tspan class="cls-4">
                    <tspan x="0" y="428.61">文化二路串連都會生活圈，盡享便利機能。</tspan>
                  </tspan>
                  <tspan class="cls-7">
                    <tspan class="bold" x="-10" y="469.61">
                      10分鐘樂遊大林口|
                    </tspan>
                    <tspan
                      class="cls-8"
                      x="188.42"
                      y="469.61"
                      xml:space="preserve"
                    >
                      共享A7、A8、A9三大生</tspan>
                  </tspan>
                  <tspan class="cls-4">
                    <tspan x="0" y="510.61">活圈，國賓、威秀雙影城、A8 &amp; A9環球百</tspan>
                    <tspan x="0" y="551.61">貨、林口OUTLET，近享城市精彩。</tspan>
                  </tspan>
                </text>
                <rect
                  class="cls-10"
                  x="0.51"
                  y="302.45"
                  width="192"
                  height="0.5"
                />
                <rect
                  class="cls-10"
                  x="0.51"
                  y="263.45"
                  width="192"
                  height="0.5"
                />
              </g>
            </g>
          </svg>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <img src="~@/projects/sv2/s5/5.jpg" alt="" />
          <p>環球百貨</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <img src="~@/projects/sv2/s5/6.jpg" alt="" />
          <p>樂善國小</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <img src="~@/projects/sv2/s5/8.jpg" alt="" />
          <p>文欣國小</p>
        </div>
        <div data-aos="fade-down" data-aos-delay="600">
          <img src="~@/projects/sv2/s5/2.jpg" alt="" />
          <p>復興二路商圈</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <img src="~@/projects/sv2/s5/4.jpg" alt="" />
          <p>昕境廣場</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <img src="~@/projects/sv2/s5/9.jpg" alt="" />
          <p>大崗國中</p>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="section-item">
      <div v-if="isMobile">
<h3 class="title">雙國小學區</h3>
<div class="desc"><b>5-6分鐘雙國小學區｜</b>樂善國小、文欣國小、大崗國中，人文書香薰陶環境。</div>
      </div>
      <swiper v-if="isMobile" :options="swiperOptions2" :instanceName="4">
        <swiper-slide
          v-for="item of swiperList2"
          :key="item.id"
          :style="{ backgroundImage: `url(${item.imgUrl})` }"
        >
          <p>{{ item.title }}</p>
        </swiper-slide>
        <div
          v-if="isMobile"
          class="swiper-button-prev"
          slot="button-prev"
        ></div>
        <div
          v-if="isMobile"
          class="swiper-button-next"
          slot="button-next"
        ></div>
        <div
          class="swiper-pagination swiper-pagination2"
          slot="pagination"
        ></div>
      </swiper>
    </div>
    <div v-if="isMobile" class="section-item">
      <div v-if="isMobile">
        
<h3 class="title">長庚生活圈</h3>
<div class="desc"><b>6分鐘長庚生活圈｜</b>國內規模最大醫療機構文化二路串連都會生活盡享便利機能。</div>
      </div>
      <swiper v-if="isMobile" :options="swiperOptions3" :instanceName="5">
        <swiper-slide
          v-for="item of swiperList3"
          :key="item.id"
          :style="{ backgroundImage: `url(${item.imgUrl})` }"
        >
          <p>{{ item.title }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section5 {
  .section-item {
    width: 100%;
    height: 110vw;
    padding: 0 6vw 6vw 6vw;
    background-color: rgba(96, 96, 96, 0.2);

    .waterfall {
      display: flex;
      flex-flow: column wrap;
      max-height: 120vw;
      margin-left: -1.5vw;
      width: 100%;

      .title {
        width: 100%;
        height: 42.55vw;
        background: rgba(96, 96, 96, 0.2);
        margin: 0 1.5vw 1.5vw 0;
        width: 37.7%;

        svg {
          width: 70%;
          top: 5vw;
          position: relative;

          .cls-1 {
            font-size: 38px;
            fill: #b59668;
            font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
            .bold {
              font-weight: bold;
            }
          }
          .cls-2 {
            font-size: 34px;
          }
          .cls-3 {
            font-size: 37.18px;
          }
          .cls-4,
          .cls-7 {
            font-size: 20px;
            font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
            letter-spacing: 0.1em;
          }
          .cls-4,
          .cls-6,
          .cls-8,
          .cls-9 {
            fill: #606060;
          }
          .cls-5,
          .cls-9 {
            letter-spacing: -0.15em;
          }
          .cls-6 {
            font-size: 23px;
            letter-spacing: 0.1em;
          }
          .cls-7 {
            fill: #000;
          }
          .cls-10 {
            fill: none;
            stroke: #606060;
            stroke-miterlimit: 10;
            stroke-width: 1.02px;
          }
        }
      }
      div {
        width: 31.1%;
        margin: 0 1.5vw 1.5vw 0;
        position: relative;

        &:nth-child(5) {
          width: 37.7%;
        }
        &:nth-child(6) {
          width: 37.7%;
        }
        &:nth-child(7) {
          width: 37.7%;
        }

        img {
          width: 100%;
          overflow: hidden;
        }
        p {
          position: absolute;
          right: 15px;
          bottom: 15px;
          color: #fff;
          letter-spacing: 1px;
        }
      }
    }

    .swiper-container {
      width: 70vw;
      top: 50%;
      right: 0;
      transform: translateY(-50%) translateX(8vw);

      .swiper-slide {
        height: 50vw;
        background-size: cover;
        background-position: center center;

        p {
          color: #fff;
          position: absolute;
          right: 15px;
          bottom: 15px;
          letter-spacing: 1px;
        }
      }

      .swiper-button-next {
        color: #fff;
        width: 50px;
        height: 50px;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 100%;
        &:after {
          font-size: 20px;
          font-weight: bolder;
        }
      }

      .swiper-button-prev {
        color: #fff;
        width: 50px;
        height: 50px;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 100%;
        &:after {
          font-size: 20px;
          font-weight: bolder;
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
  .section5 {
    .section-item {
      position: relative;
      width: 100vw;
      height: 210vw;
      margin-top: 10vw;
      padding: 0;
      background: rgba(96, 96, 96, 0.2);
      font-size: calc(100vw * 16 / 375);
      line-height: 1.7;
      text-align: center;
      color: #606060;
      overflow: hidden;
      font-weight:400;
      
      .title1{font-size:1.75em;
      margin: 5vw 10vw 0;
      color: #b59668;
      font-weight:400;}
      .title2{
      margin: 3vw 10vw 0;
      font-weight:400;}
      .title3{font-size:1.3em;
      margin: 6vw auto 0;
      display:inline-block;
      border: solid currentColor;
      border-width: 1px 0 1px 0;
      font-weight:400;}
      .title{font-size:1.25em;
      text-align: justify;
      margin: 1.5em 10vw 0;
      font-weight:400;}
      .desc{font-size:1em;
      text-align: justify;
      margin: 0 10vw;
      font-weight:400;
      b{
      text-align: justify;
      font-weight:500;
        color: #000;
      }}
    

      &:nth-child(2) {
        margin-top: 0;
        height: 140vw;
      }
      &:nth-child(3) {
        margin-top: 0;
        height: 140vw;
      }

      .t1 {
        width: 80vw;
        position: absolute;
        top: 5vw;
        left: 50%;
        transform: translateX(-50%);

        .cls-1 {
          font-size: 30px;
          fill: #b59668;
        }
        .cls-1,
        .cls-7 {
          font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
        }
        .cls-2,
        .cls-8 {
          font-size: 16px;
          font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
          letter-spacing: 0.1em;
        }
        .cls-10,
        .cls-11,
        .cls-2,
        .cls-7,
        .cls-9 {
          fill: #606060;
        }
        .cls-11,
        .cls-3 {
          letter-spacing: -0.15em;
        }
        .cls-10,
        .cls-4 {
          letter-spacing: -0.15em;
        }
        .cls-5 {
          letter-spacing: 0.1em;
        }
        .cls-6 {
          fill: none;
          stroke: #606060;
          stroke-miterlimit: 10;
          stroke-width: 0.93px;
        }
        .cls-7 {
          font-size: 20px;
          letter-spacing: 0.1em;
        }
      }
      .t2 {
        width: 80vw;
        position: absolute;
        top: 30vw;
        left: 50%;
        transform: translateX(-50%);

        .cls-1 {
          font-size: 20px;
          font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
          letter-spacing: 0.1em;
        }
        .cls-1,
        .cls-3,
        .cls-4,
        .cls-5 {
          fill: #606060;
        }
        .cls-2 {
          font-size: 16px;
          font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
          letter-spacing: 0.1em;
        }
        .cls-4,
        .cls-6 {
          letter-spacing: -0.15em;
        }
        .cls-5 {
          letter-spacing: 0.1em;
        }
        .cls-7 {
          letter-spacing: -0.15em;
        }
      }

      .t3 {
        width: 80vw;
        position: absolute;
        top: 12vw;
        left: 50%;
        transform: translateX(-50%);
        .cls-1 {
          font-size: 20px;
          font-family: NotoSansCJKtc-Black-B5pc-H, Noto Sans CJK TC;
          letter-spacing: 0.1em;
        }
        .cls-1,
        .cls-3,
        .cls-4 {
          fill: #606060;
        }
        .cls-2 {
          font-size: 16px;
          font-family: NotoSansCJKtc-Medium-B5pc-H, Noto Sans CJK TC;
        }
        .cls-2,
        .cls-5 {
          letter-spacing: 0.1em;
        }
        .cls-4 {
          letter-spacing: -0.15em;
        }
      }

      .swiper-container {
        position: absolute;
        width: 100%;
        top: 100%;
        transform: translateY(-100%);
        .swiper-slide {
          height: 100vw;
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

export default {
  name: "section3",
  data() {
    return {
      isMobile,
      swiperOptions1: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination1",
          clickable: true
        },
        autoplay: true,
        speed: 1000,
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperOptions2: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination2",
          clickable: true
        },
        autoplay: true,
        speed: 1000,
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperOptions3: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination3",
          clickable: true
        },
        autoplay: true,
        speed: 1000,
        slidesPerView: isMobile ? 1 : 1,
        spaceBetween: isMobile ? 0 : 0,
        resistanceRatio: isMobile ? 1 : 0,
        loop: isMobile ? false : false
      },
      swiperList: [
        {
          id: "0001",
          imgUrl: require("./s5/mo/1.jpg"),
          title: "環球百貨"
        },
        {
          id: "0002",
          imgUrl: require("./s5/mo/2.jpg"),
          title: "三井OUTLET"
        },
        {
          id: "0003",
          imgUrl: require("./s5/mo/3.jpg"),
          title: "A9 商圈"
        },
        {
          id: "0004",
          imgUrl: require("./s5/mo/4.jpg"),
          title: "復興二路商圈"
        },
        {
          id: "0005",
          imgUrl: require("./s5/mo/5.jpg"),
          title: "復興一路商圈"
        }
      ],
      swiperList2: [
        {
          id: "0006",
          imgUrl: require("./s5/mo/6.jpg"),
          title: "大崗國中"
        },
        {
          id: "0007",
          imgUrl: require("./s5/mo/7.jpg"),
          title: "樂善國小"
        },
        {
          id: "0008",
          imgUrl: require("./s5/mo/8.jpg"),
          title: "文欣國小"
        }
      ],
      swiperList3: [
        {
          id: "0009",
          imgUrl: require("./s5/mo/9.jpg"),
          title: "林口長庚醫院"
        }
      ]
    };
  },
  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    }
  },
  created() {},
  mounted() {}
};
</script>
