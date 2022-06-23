<template>
  <div class="s7" id="scene7">
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
        src="@/projects/wv/s7/arrow.svg"
        alt=""
        srcset=""
      />
      <img
        class="next"
        @click="$refs.splide.splide.go('>')"
        src="@/projects/wv/s7/arrow.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="title">
      <div class="t1" data-aos="zoom-in" data-aos-delay="200">
        順應自然山水 成就建築至美
      </div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">
        特殊弧形白色線條宛如波浪般律動，於山水間盤旋飛舞，是伴月灣外觀最顯著的特色，捨棄繁複的建築語彙，以絕美自然為背景，借山水間的留白，和諧自然地融入天地，不爭豔依舊突出。
      </div>
    </div>

    <img
      v-if="!isMobile"
      class="moon"
      src="@/projects/wv/s7/moon.png"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <img
      class="moon"
      v-else
      src="@/projects/wv/s7/moon_m.png"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <img
      v-if="!isMobile"
      class="star left"
      src="@/projects/wv/s7/star.png"
      alt=""
      srcset=""
      data-aos-delay="200"
    />
    <img
      v-if="!isMobile"
      class="star right"
      src="@/projects/wv/s7/star.png"
      alt=""
      srcset=""
      data-aos-delay="200"
    />
    <img
      v-if="isMobile"
      class="star"
      src="@/projects/wv/s7/star_m.png"
      alt=""
      srcset=""
      data-aos-delay="200"
    />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s7 {
  width:100%;
  height: size(1080);
  background-color: #04323f;
  position: relative;
  .slideBox {
    padding-top: size(65);
    .splide__list {
      align-items: center;
    }
    .slide {
      width: size(1920);
      height: size(700);
      background-size: cover;
      .caption {
        position: absolute;
        font-size: size(14);
        right: 1.28em;
        bottom:0.86em;
        color: #fff;
        text-shadow: 0 0 0.2em #000;
      }
    }
  }
  .arrows {
    height: size(200);
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    z-index: 5;
    position: absolute;
    top: size(340);
    left: size(27);
    z-index: 10;

    img {
      width: size(60);
      cursor: pointer;

      &.prev {
        transform: rotate(90deg);
      }
      &.next {
        transform: rotate(-90deg);
      }
    }
  }
  .title {
    position: absolute;
    left: size(270);
    top: size(808);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: size(500);
    height: size(200);
    line-height: 1.5;
    .t1 {
      color: #bc976c;
      font-size: size(40);
      font-weight: 800;
    }

    .t2 {
      color: #fffd;
      font-size: size(20);
      font-weight: 400;
      font-family: "Noto Sans TC";
      width: size(513);
      text-align: justify;
      letter-spacing: 0.2em;
    }
  }
  .moon {
    position: absolute;
    width: size(683);
    left: size(1438);
    top: size(808);
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
  .s7 {
    width: size-m(375);
    height: size-m(572);
    .slideBox {
      padding-top: 0;
      position: absolute;
      left: 0;
      bottom: 0;
      width: size-m(375);
      height: size-m(250);
      z-index: 1;
      .slide {
        width: size-m(375);
        height: size-m(250);
        background-size: cover;
        background-position: center;
        .caption {
          font-size: size-m(14);
        }
      }
    }
    .arrows {
      height: auto;
      width: size-m(360);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      position: relative;
      z-index: 5;
      position: absolute;
      top: size-m(425);
      left: size-m(7);
      z-index: 10;

      img {
        width: size-m(40);
        cursor: pointer;

        &.prev {
          transform: rotate(0);
        }
        &.next {
          transform: rotate(0) scaleX(-1);
        }
      }
    }

    .title {
      left: size-m(28);
      top: size-m(70);
      width: size-m(325);
      height: auto;
      text-align: center;
      .t1 {
        font-size: size-m(25);
        width: 100%;
        margin-bottom: 0.5em;
      }

      .t2 {
        font-size: size-m(15);
        width: 100%;
      text-align: justify;
      line-height:2; letter-spacing:0em;
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
      width: 100%;
      bottom: unset;
      top: 0;
      left: 0;
      animation: light 1.5s alternate-reverse infinite ease-in-out;

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
  name: "s7",
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
        direction: isMobile ? 'ltr' : 'ttb',
        heightRatio: isMobile ? 0.67 : 0.35
      },
      activeIndex: 0,
      imgs: [
        isMobile ? require('@/projects/wv/s7/1_m.jpg') : require('@/projects/wv/s7/1.jpg'),
        isMobile ? require('@/projects/wv/s7/2_m.jpg') : require('@/projects/wv/s7/2.jpg'),
        isMobile ? require('@/projects/wv/s7/3_m.jpg') : require('@/projects/wv/s7/3.jpg')
      ],
      captions: [
        '3D外觀合成圖',
        '中庭示意圖',
        '空中花園示意圖',
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