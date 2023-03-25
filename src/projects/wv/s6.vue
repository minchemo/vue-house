<template>
  <div class="s6" id="scene6">
    <Splide :options="opt" class="slideBox" ref="splide">
      <SplideSlide
        v-for="(img, i) in imgs"
        :key="i"
        class="slide"
        v-bind:style="{ backgroundImage: `url('${img}')` }"
      >
        <div class="caption" v-bind:class="{ white: i == 3 }">
          {{ captions[i] }}
        </div>
      </SplideSlide>
    </Splide>
    <div class="thumbnails">
      <div
        class="thumbnail"
        v-for="(timg, i) in timgs"
        :key="i"
        v-bind:style="{ backgroundImage: `url('${timg}')` }"
        v-bind:class="{ active: activeIndex == i }"
        @click="$refs.splide.splide.go(i)"
      ></div>
    </div>
    <div class="arrows">
      <img
        class="prev"
        @click="$refs.splide.splide.go('<')"
        src="@/projects/wv/s6/arrow.svg"
        alt=""
        srcset=""
      />
      <img
        class="next"
        @click="$refs.splide.splide.go('>')"
        src="@/projects/wv/s6/arrow.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="title">
      <div class="t1" data-aos="zoom-in" data-aos-delay="200">
        萬坪樹海為鄰 <br v-if="isMobile" />先到公園再到家
      </div>
      <div class="t2" data-aos="zoom-in" data-aos-delay="400">
        「伴月灣」前迎8800坪體健公園和成德公園，左擁右抱相當於16座大安森林公園的新北大都會公園，不汲汲營營基地面積的最大使用率，同時把60%的土地留給大樹和園藝綠化，讓樹海林園、濃蔭綠意，成為人生最美麗的排場。
      </div>
    </div>
    <img class="star" src="@/projects/wv/s6/star.png" alt="" srcset="" />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s6 {
  width:100%;
  height: size(1080);
  background-color: #04323f;
  position: relative;
  .slideBox {
    margin-right: 0;
    margin-left: auto;
    width: size(1024);
    height: size(768);
    top: size(156);
    position: relative;
    .splide__list {
      align-items: center;
    }
    .slide {
      width: size(1024);
      height: size(768);
      background-size: cover;
      .caption {
        position: absolute;
        font-size: size(14);
        right: size(18);
        bottom: size(12);
        &.white {
          color: #fff;
        }
      }
    }
  }
  .thumbnails {
    position: absolute;
    left: size(200);
    top: size(770);
    z-index: 5;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: size(20);
    width: size(820);
    .thumbnail {
      width: size(190);
      height: size(190);
      background-size: 100%;
      background-position: center;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-size: 110%;
      }
      &.active {
        background-size: 110%;
      }
    }
  }
  .arrows {
    width: size(120);
    display: flex;
    margin-right: size(200);
    margin-left: auto;
    margin-top: size(20);
    z-index: 5;
    position: absolute;
    left: size(1600);
    top: size(959);

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
    left: size(200);
    top: size(440);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: size(600);
    height: size(250);
    z-index: 10;
    text-align: justify;
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
      width: size(596);
      letter-spacing: 0.2em;
    }
  }
  .star {
    position: absolute;
    width: size(410);
    left: 0;
    top: size(174);
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
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s6 {
    width: size-m(375);
    height: size-m(760);
    .slideBox {
      margin-right: auto;
      margin-left: auto;
      width: size-m(339);
      height: size-m(254);
      top: size-m(360);
      position: relative;
      .splide__list {
        align-items: center;
      }
      .slide {
        width: size-m(339);
        height: size-m(254);
        .caption {
          position: absolute;
          font-size: size-m(14);
          right: size-m(18);
          bottom: size-m(12);
          &.white {
            color: #fff;
          }
        }
      }
    }
    .thumbnails {
      position: absolute;
      left: size-m(18);
      top: size-m(623.22);
      width: size-m(339);
      display: flex;
      justify-content: space-between;
      .thumbnail {
        width: size-m(79);
        height: size-m(79);
        background-size: 100%;
        background-position: center;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background-size: 110%;
        }
        &.active {
          background-size: 110%;
        }
      }
    }
    .arrows {
      width: size-m(336);
      display: flex;
      justify-content: space-between;
      margin-right: auto;
      margin-left: auto;
      margin-top: auto;
      z-index: 5;
      position: absolute;
      left: size-m(19);
      top: size-m(460);

      img {
        width: size-m(40);
      }
    }
    .title {
      left: size-m(28);
      top: size-m(55);
      width: size-m(325);
      height:auto;
      line-height: 1.5;
      text-align: center;
      .t1 {
        font-size: size-m(25);
        width: 100%;
        margin-bottom: 0.5em;
      }
      .t2 {
        font-size: size-m(15);
        width: 100%;
      line-height: 2; letter-spacing:0em;text-align: justify;
      }
    }
    .star {
      position: absolute;
      width: size-m(300);
      left: 0;
      top: size-m(00);
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
  name: "s6",
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
        type: 'loop',
        gap: 30,
        autoWidth: true,
      },
      activeIndex: 0,
      imgs: [
        require('@/projects/wv/s6/1.jpg'),
        require('@/projects/wv/s6/2.jpg'),
        require('@/projects/wv/s6/3.jpg'),
        require('@/projects/wv/s6/4.jpg')
      ],
      timgs: [
        require('@/projects/wv/s6/t1.jpg'),
        require('@/projects/wv/s6/t2.jpg'),
        require('@/projects/wv/s6/t3.jpg'),
        require('@/projects/wv/s6/t4.jpg')
      ],
      captions: [
        '都會公園',
        '都會公園',
        '都會公園',
        '體健公園',
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