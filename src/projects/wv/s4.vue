<template>
  <div class="s4" id="scene4">
    <div class="title" v-if="!isMobile">
      <div class="a" data-aos="zoom-in">3高4捷4特快 雙北自在暢遊</div>
      <div class="b" data-aos="zoom-in" data-aos-delay="200">
        新蘆線捷運蘆洲站5分鐘，五泰輕軌F06站散步6分鐘，串聯環狀線、機場線雙軸線。出門直上台64快速道路，快接國道1號、五楊高、汐五高，藉由新北環快、台65往來雙北也暢行無礙。
      </div>
    </div>
    <img
      v-if="isMobile"
      class="t1"
      src="@/projects/wv/s4/t1m.svg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />

    <img
      v-if="isMobile"
      class="t2"
      src="@/projects/wv/s4/t2m.svg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="400"
    />

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
        src="@/projects/wv/s4/arrow.svg"
        alt=""
        srcset=""
      />
      <img
        class="next"
        @click="$refs.splide.splide.go('>')"
        src="@/projects/wv/s4/arrow.svg"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s4 {
  width:100%;
  height: size(1080);
  background-color: #4e1830;

  .title {
    padding-top: size(90);
    text-align: center;
    .a {
      position: relative;
      display: inline-block;
      color: rgba(255, 170, 42, 1);
      font-size: size(40);
      font-weight: 800;
      margin-bottom: size(50);
      &:before {
        content: "";
        width: size(300);
        height: size(1);
        background-color: rgba(255, 170, 42, 1);
        position: absolute;
        top: 50%;
        left: -#{size(380)};
      }
      &:after {
        content: "";
        width: size(300);
        height: size(1);
        background-color: rgba(255, 170, 42, 1);
        position: absolute;
        top: 50%;
        right: -#{size(380)};
      }
    }
    .b {
      display: block;
      margin: 0 auto;
      width: size(760);
      font-family: "Noto Sans TC";
      line-height: 1.5;
      letter-spacing: 0.2em;
      font-size: size(20);
      color: #fff;
    }
  }
  .t1 {
    display: block;
    padding-top: size(92);
    margin-bottom: size(45) !important;
    margin: 0 auto;
    width: size(1195.5);
  }
  .t2 {
    display: block;
    width: size(760);
    margin: 0 auto;
  }
  .slideBox {
    margin-top: size(80);
    .splide__list {
      align-items: center;
      padding: size(40) 0 !important;
    }
    .slide {
      width: size(900);
      height: size(600);
      background-size: cover;
      filter: blur(5px);
      transition: all 0.3s;
      &.is-active {
        // width: size(950);
        // height: size(650);
        transform: scale(1.05);
        filter: blur(0px);
      }
      &:hover {
        filter: blur(0px);
        cursor: pointer;
      }
      .caption {
        position: absolute;
        font-size: size(14);
        right: size(12);
        bottom: size(12);
      }
    }
  }
  .arrows {
    width: size(950);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
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
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s4 {
    width: size-m(375);
    height: size-m(526);
    .t1 {
      display: block;
      padding-top: size-m(64);
      margin-bottom: size-m(15) !important;
      width: 100%;
    }
    .t2 {
      width: 90%;
    }
    .slideBox {
      margin-top: size-m(55);
      .splide__list {
        align-items: center;
      }
      .slide {
        width: size-m(304.65);
        height: size-m(210);
        background-size: cover;
        filter: blur(2px);
        &.is-active {
          width: size-m(304.65);
          height: size-m(210);
          transform: scale(1);
          filter: blur(0px);
        }
        &:hover {
          filter: blur(0px);
          cursor: pointer;
        }
        .caption {
          position: absolute;
          font-size: size-m(14);
          right: size-m(12);
          bottom: size-m(12);
          color: #fff;
        }
      }
    }
    .arrows {
      position: absolute;
      width: size-m(375);
      bottom: size-m(130);
      left: 0;
      z-index: 10;
      img {
        width: size-m(40);
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
  name: "s4",
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
        perPage: 3,
        arrows: false,
        pagination: false,
        focus: 'center',
        type: 'loop',
        gap: isMobile ? 10 : 50,
        autoWidth: true,
      },
      imgs: [
        require('@/projects/wv/s4/1.jpg'),
        require('@/projects/wv/s4/2.jpg'),
        require('@/projects/wv/s4/3.jpg')
      ],
      captions: [
        '副都心站',
        '蘆洲站',
        '蘆洲站'
      ]
    };
  },
  methods: {
  },
  mounted() {
    const splide = this.$refs.splide.splide
    splide.on('click', (e) => {
      const idx = e.index;
      splide.go(idx);
    })
    setInterval(() => {
      splide.go('>');
    }, 4000);
  },
  created() {
  },
};
</script>