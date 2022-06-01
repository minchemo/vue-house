<template>
  <div class="s5" id="scene5">
    <div class="divider"></div>
    <Splide :options="opt" class="slideBox" ref="splide">
      <SplideSlide
        v-for="(img, i) in imgs"
        :key="i"
        class="slide"
        v-bind:style="{ backgroundImage: `url('${img}')` }"
      >
        <div class="caption">
          {{ captions[i] }}
        </div>
      </SplideSlide>
    </Splide>
    <div class="arrows">
      <img
        class="prev"
        @click="$refs.splide.splide.go('<')"
        src="@/projects/wv/s5/arrow.svg"
        alt=""
        srcset=""
      />
      <div class="dots">
        <div
          class="dot"
          v-for="(img, i) in imgs"
          :key="i"
          v-bind:class="{ active: activeIndex == i }"
          @click="$refs.splide.splide.go(i)"
        ></div>
      </div>
      <img
        class="next"
        @click="$refs.splide.splide.go('>')"
        src="@/projects/wv/s5/arrow.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="title">
      <div class="t1" data-aos="zoom-in" data-aos-delay="200">
        新蘆特區完熟生活機能 <br v-if="isMobile" />雙商圈左擁右抱
      </div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">
        成州市場、成泰路商圈、凌雲路商圈散步到，全聯、傳統市場採買超便利；過成蘆橋就到蘆洲總站商圈、長榮路商圈，機能完整應有盡有。
      </div>
    </div>
    <img
      v-if="!isMobile"
      class="moon"
      src="@/projects/wv/s5/moon.png"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />
    <img
      class="moon"
      v-else
      src="@/projects/wv/s5/moon_m.png"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />
    <img class="star left" src="@/projects/wv/s5/star.png" alt="" srcset="" />
    <img class="star right" src="@/projects/wv/s5/star.png" alt="" srcset="" />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s5 {
  width:100%;
  height: size(1080);
  background-color: #4e1830;
  .divider {
    width: size(500);
    height: 1px;
    background: #ffaa2a;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: size(58);
  }
  .slideBox {
    padding-top: size(210);
    .splide__list {
      align-items: center;
    }
    .slide {
      width: size(1920);
      height: size(600);
      background-size: cover;
      .caption {
        position: absolute;
        font-size: size(14);
        right: size(18);
        bottom: size(12);
        color: #fff;
      }
    }
  }
  .arrows {
    width: size(366);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: auto;
    margin-left: size(200);
    margin-top: size(10);
    position: relative;
    z-index: 5;

    .dots {
      display: flex;
      .dot {
        width: size(15);
        height: size(15);
        border-radius: 100%;
        background: #fff;
        margin: 0 size(6);
        opacity: 0.5;
        cursor: pointer;
        &.active {
          opacity: 1;
        }
      }
    }
    img {
      width: size(60);
      cursor: pointer;

      &.prev {
      }
      &.next {
        transform: scaleX(-1);
      }
    }
  }
  .title {
    position: absolute;
    right: size(200);
    bottom: size(64);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: size(690);
    height: size(170);
    .t1 {
      color: #ffaa2b;
      font-size: size(40);
      font-weight: 800;
    }

    .t2 {
      color: #fffd;
      font-size: size(20);
      font-weight: 400;
      font-family: "Noto Sans TC";
      width: size(468);
      text-align: left;
      line-height: size(30);
      letter-spacing: 0.2em;
    }
  }
  .moon {
    position: absolute;
    width: size(539);
    left: -#{size(186)};
    top: size(810);
  }
  .star {
    position: absolute;
    width: size(668);
    bottom: 0;
    animation: light 1.5s alternate-reverse infinite ease-in-out;

    &.left {
      left: 0;
      transform: scaleX(-1);
    }
    &.right {
      right: 0;
    }

    @keyframes light {
      from {
        opacity: 0.2;
      }
      to {
        opacity: 1;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s5 {
    width: size-m(375);
    height: size-m(591);
    position: relative;
    .divider {
      width: 1px;
      height: size-m(89);
      background: #ffaa2a;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: size(58);
    }
    .slideBox {
      position: absolute;
      bottom: 0;
      left: 0;
      padding-top: 0;
      z-index: 1;
      width: size-m(375);
      height: size-m(200);
      .splide__list {
        align-items: center;
      }
      .slide {
        width: size-m(375);
        height: size-m(200);
        .caption {
          position: absolute;
          font-size: size-m(14);
          right: size-m(18);
          bottom: size-m(12);
          color: #fff;
        }
      }
    }
    .arrows {
      z-index: 5;
      position: absolute;
      width: size-m(360);
      margin-left: 0;
      margin-top: 0;
      left: size-m(7.5);
      bottom: size-m(60);

      .dots {
        display: none;
      }
      img {
        width: size-m(40);
      }
    }
    .title {
      position: absolute;
      right: unset;
      left: size-m(37.5);
      bottom: size-m(267);
      align-items: flex-start;
      width: size-m(310);
      height: size-m(168);
      .t1 {
        line-height: 1.5;
        font-size: size-m(25);
        text-align: left;
        color: #ffaa2b;
      }

      .t2 {
        font-size: size-m(15);
        width: 100%;
        line-height: size-m(24);
        letter-spacing: 1px;
      // font-family: "Noto serif TC";
      }
    }
    .moon {
      position: absolute;
      width: size-m(155);
      left: 0;
      top: size-m(240);
    }
    .star {
      position: absolute;
      width: size-m(453);
      bottom: unset;
      animation: light 1.5s alternate-reverse infinite ease-in-out;

      &.left {
        display: none;
      }
      &.right {
        right: 0;
        top: size-m(92);
      }

      @keyframes light {
        from {
          opacity: 0.2;
        }
        to {
          opacity: 1;
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
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  name: "s5",
  props: ["scrollInstance"],
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      isMobile,
      opt: {
        rewind: true,
        perPage: 1,
        arrows: false,
        pagination: false,
        focus: 'center',
        type: 'loop',
        gap: 30,
        autoWidth: true,
      },
      activeIndex: 0,
      imgs: [
        isMobile ? require('@/projects/wv/s5/1_m.jpg') : require('@/projects/wv/s5/1.jpg'),
        isMobile ? require('@/projects/wv/s5/4_m.jpg') : require('@/projects/wv/s5/4.jpg'),
        isMobile ? require('@/projects/wv/s5/2_m.jpg') : require('@/projects/wv/s5/2.jpg'),
        isMobile ? require('@/projects/wv/s5/5_m.jpg') : require('@/projects/wv/s5/5.jpg'),
     //   isMobile ? require('@/projects/wv/s5/3_m.jpg') : require('@/projects/wv/s5/3.jpg')
      ],
      captions: [
        '成州國小',
        '鷺江國中',
        '全聯福利中心',
        '國民運動中心',
      //  '徐匯中學商圈',
      ]
    };
  },
  methods: {
  },
  mounted() {
    const self = this;
    const splide = this.$refs.splide.splide
    splide.on('click', (e) => {
      const idx = e.index;
      splide.go(idx);
    })
    splide.on('moved', (e) => {
      self.activeIndex = e;
      splide.refresh();
    })
    setInterval(() => {
      splide.go('>');
    }, 4000);
  },
  created() {
  },
};
</script>