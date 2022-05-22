<template>
  <div class="s4" id="scene">
    <img
      v-if="!isMobile"
      class="t1"
      src="@/projects/wv/s4/t1.svg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />
    <img
      v-else
      class="t1"
      src="@/projects/wv/s4/t1m.svg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="200"
    />

    <img
      v-if="!isMobile"
      class="t2"
      src="@/projects/wv/s4/t2.svg"
      alt=""
      srcset=""
      data-aos="zoom-in"
      data-aos-delay="400"
    />
    <img
      v-else
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
  width: size(1920);
  height: size(1080);
  background-color: #4e1830;
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
    }
    .slide {
      width: size(900);
      height: size(600);
      background-size: cover;
      filter: blur(5px);
      &.is-active {
        width: size(950);
        height: size(650);
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
        gap: isMobile ? 10 : 30,
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
        '副都心站'
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
    splide.on('moved', (e) => {
      splide.refresh();
    })
  },
  created() {
  },
};
</script>