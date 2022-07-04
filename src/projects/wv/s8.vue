<template>
  <div class="s8" id="scene8">
    <Splide :options="opt" class="slideBox" ref="splide">
      <SplideSlide
        v-for="(img, i) in imgs"
        :key="i"
        class="slide"
        v-bind:style="{ backgroundImage: `url('${img}')` }"
      >
      </SplideSlide>
    </Splide>
    <div class="arrows">
      <img
        class="prev"
        @click="$refs.splide.splide.go('<')"
        src="@/projects/wv/s8/arrow.svg"
        alt=""
        srcset=""
      />
      <img
        class="next"
        @click="$refs.splide.splide.go('>')"
        src="@/projects/wv/s8/arrow.svg"
        alt=""
        srcset=""
      />
    </div>

    <div class="title" v-if="!isMobile">
      <template v-for="(item, i) in info">
        <div
          :key="i"
          v-if="activeIndex == i"
          data-aos="fade"
          data-aos-duration="1000"
        >
          <div class="t1">{{ item.t1 }}</div>
          <div class="t2">{{ item.t2 }}</div>
          <div class="t3">{{ item.t3 }}</div>
        </div>
      </template>
    </div>

    <div class="title" v-else>
      <template v-for="(item, i) in info">
        <div :key="i" v-if="activeIndex == i">
          <div class="t1">{{ item.t1 }}</div>
          <div class="t2">{{ item.t2 }}</div>
          <div class="t3">{{ item.t3 }}</div>
        </div>
      </template>
    </div>

    <div
      class="title-blur"
      v-bind:style="{ backgroundImage: `url('${imgs[activeIndex]}')` }"
    ></div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s8 {
  width:100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
  background-color: #04323f;
  position: relative;
  .slideBox {
      width:100%;
      height:100%;
    .splide__track{
      width:100%;
      height:100%;
    }
    .splide__list {
      width:100%;
      height:100%;
      align-items: center;
    }
    .slide {
      width:100%;
      height:100%;
      background-size: cover;
    }
  }
  .arrows {
    width: size(1720);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 5;
    position: absolute;
    top:calc(50% + (581 - 1080 * .5) *100vw / 1920);
    left: size(100);
    z-index: 10;

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
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: size(850);
    height: size(300);
    background-color: #04323f4d;
    backdrop-filter: blur(5px);
    text-align: center;
    z-index: 2;
      font-size: size(30);
    text-shadow: 0 0 1em #002731cc,0 0 0.3em #002530cc;
    .t1 {
      color: #bc976c;
      font-size: size(40);
      font-weight: 800;
      position: relative;
      &::before {
        content: "";
        width: size(100);
        height: size(1);
        background-color: #bc976c;
        position: absolute;
        left: -#{size(130)};
        top: 50%;
      }
      &::after {
        content: "";
        width: size(100);
        height: size(1);
        background-color: #bc976c;
        position: absolute;
        right: -#{size(130)};
        top: 50%;
      }
    }

    .t2 {
      color: #bc976c;
      font-weight: 700;
      margin: size(35) 0;
    }

    .t3 {
      font-family: "Noto Sans TC";
      font-size: size(20);
      color: #fffd;
      line-height: 1.5;
      letter-spacing: 0.2em;
      max-width: size(510);
      margin: 0 auto;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s8 {
    width: size-m(375);
    height: size-m(487);
  min-height: size(0);
  max-height:size-m(600);
    background-color: #04323f;
    position: relative;
    .slideBox {
      position: absolute;
      bottom: 0;
      left: 0;
      width: size-m(375);
      height: size-m(230);
      .splide__list {
        align-items: center;
      }
      .slide {
        width: size-m(375);
        height: size-m(230);
        background-size: cover;
      }
    }
    .arrows {
      width: size-m(360);
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 5;
      position: absolute;
      top: size-m(354);
      left: size-m(7);
      z-index: 10;

      img {
        width: size-m(40);
      }
    }
    .title {
      position: absolute;
      right: 0;
      bottom: unset;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: size-m(375);
      height: size-m(260);
      background-color: rgba(2, 40, 51, 0.7);
      backdrop-filter: blur(5px);
      text-align: center;
      .t1 {
        font-size: size-m(25);
        &::before {
          content: "";
          width: size(150);
          height: size(1);
          background-color: #bc976c;
          position: absolute;
          left: -#{size(200)};
          top: 50%;
        }
        &::after {
          content: "";
          width: size(150);
          height: size(1);
          background-color: #bc976c;
          position: absolute;
          right: -#{size(200)};
          top: 50%;
        }
      }

      .t2 {
        font-size: size-m(19);
        margin: size-m(20) 0;
        
      }

      .t3 {
        font-size: size-m(15);
        line-height:2;
        max-width: 90%; letter-spacing:0em;
        text-align: left;
      }
    }
    .title-blur {
      width: size-m(375);
      height: size-m(260);
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      background-size: cover;
      transition: all 0.3s;
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
  name: "s8",
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
        require('@/projects/wv/s8/1.jpg'),
        require('@/projects/wv/s8/2.jpg'),
        require('@/projects/wv/s8/3.jpg'),
        require('@/projects/wv/s8/4.jpg'),
        require('@/projects/wv/s8/5.jpg')
      ],
      info: [
        {
          t1: '奢華飯店品味 精品訂製美學',
          t2: '童樂遊戲室',
          t3: '木質書架搭配木質地板，溫潤舒適的空間氛圍，讓親子都能安心放鬆，共享溫馨時光。'
        },
        {
          t1: '奢華飯店品味 精品訂製美學',
          t2: '美力健身房',
          t3: '在器材齊全的私人空間中，迎著大面落地窗自在揮灑，是最宜人的運動體驗。'
        },
        {
          t1: '奢華飯店品味 精品訂製美學',
          t2: '涵仰迎賓大廳',
          t3: '石材立面營造高挑大器風範，天花板壁面宛如波浪盤旋而上，與山水內外呼應。'
        },
        {
          t1: '奢華飯店品味 精品訂製美學',
          t2: '天際會所',
          t3: '在水岸首排制高遠眺，將水天美景盡收眼底，一覽層峰眼界，賞山閱水再無疆界。'
        },
        {
          t1: '奢華飯店品味 精品訂製美學',
          t2: '多功能娛樂室',
          t3: '星級飯店訂製美學，精心打造娛樂設施，盡情享受質感品味兼具的室內休閒活動。'
        },
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