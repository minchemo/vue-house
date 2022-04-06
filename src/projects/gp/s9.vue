<template>
  <div class="section9">
    <img
      class="title"
      v-if="!isMobile"
      src="@/projects/gp/s9/title.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <img
      class="title"
      v-else
      src="@/projects/gp/s9/title_m.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <img
      class="guitar"
      src="@/projects/gp/s9/guitar.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="200"
    />
    <img
      v-if="!isMobile"
      class="mountain"
      src="@/projects/gp/s9/mountain.png"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="800"
    />
    <img
      v-else
      class="mountain"
      src="@/projects/gp/s9/mountain_m.png"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="800"
    />
    <div class="timeline" data-aos="fade-left" ref="timeline">
      <div
        class="year"
        v-for="(item, i) in timelines"
        :key="i"
        v-bind:class="{
          active: activeYear.year == item.year,
          hidden: activeYear.year > item.year,
        }"
        @click="setYear(item)"
      >
        <p>{{ item.year }}</p>
      </div>
    </div>
    <div class="slide">
      <div class="disabled-drag" v-if="activeYear.imgs.length == 1"></div>
      <Splide :options="slideOption" ref="splide">
        <SplideSlide
          class="slide-item"
          v-for="(img, i) in activeYear.imgs"
          :key="`2${i}`"
        >
          <img :src="img.url" alt="" srcset="" />
          <p>{{ img.caption }}</p>
        </SplideSlide>
      </Splide>
    </div>
    <img
      class="back"
      @click="resetYear()"
      v-bind:class="{ active: activeYear.year > 2012 }"
      src="@/projects/gp/s9/back.svg"
      alt=""
      srcset=""
    />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section9 {
  width: 100%;
  height: size(1170);

  .title {
    pointer-events: none;
    width: size(462.72);
    position: absolute;
    left: size(157);
    top: size(85);
  }

  .guitar {
    width: size(154);
    position: absolute;
    right: 0;
    top: -#{size(298)};
  }

  .mountain {
    width: size(673.71);
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .timeline {
    position: absolute;
    width: 100%;
    top: size(379);
    left: 0;
    z-index: 10;

    .year {
      width: size(58.53);
      height: size(58.53);
      background: #488726;
      border-radius: 100%;
      font-size: size(20);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s linear;
      position: absolute;
      &:nth-child(2) {
        left: size(1077);
      }
      &:nth-child(3) {
        left: size(1234);
      }
      &:nth-child(4) {
        left: size(1392);
      }
      &:nth-child(5) {
        left: size(1549);
      }
      &:nth-child(6) {
        left: size(1703);
      }
      &.active {
        left: size(128);
        background: #fff;
        border: size(2) solid #000;
        p {
          color: #000;
          font-size: size(36);
          position: absolute;
          right: -#{size(85)};
          bottom: -#{size(10)};
        }
      }
      &.hidden {
        transform: translateX(-100vw);
        margin-left: 0;
      }
      &:first-child {
        margin-right: 0;
      }
      &:last-child {
        margin-right: size(151);
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }

    &:after {
      content: "";

      position: absolute;
      width: 100%;
      height: size(2);
      background: #000;
      left: 0;
      top: size(29.265);
      z-index: -1;
    }
  }

  .slide {
    position: absolute;
    width: size(1769);
    height: size(420);
    // left: size(155);
    right: 0;
    bottom: size(165);
    .disabled-drag {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    }
    .splide__track {
      overflow-y: visible;
      overflow: unset;
      .slide-item {
        //   width: size(630);
        height: size(380);
        // margin-right: size(36);
        img {
          width: 100%;
          box-shadow: size(5) size(5) 8px rgba(0, 0, 0, 0.6);
        }
        p {
          display: block;
          font-size: size(30);
          line-height: 1.6;
          text-align: right;
          padding: 0 0.5em 0 0;
        }
      }
    }
  }

  .back {
    z-index: 5;
    position: absolute;
    width: size(218.94);
    bottom: size(59);
    right: 0;
    transition: all 0.5s;
    transform: translateX(100%);
    cursor: pointer;
    &.active {
      transform: translateX(0%);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section9 {
    width: 100%;
    height: size-m(560);

    .title {
      width: 90%;
      left: size-m(20);
      top: size-m(57);
    }

    .guitar {
      width: size-m(71.45);
      position: absolute;
      right: 0;
      top: -#{size-m(138)};
    }

    .mountain {
      width: size-m(278);
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .timeline {
      position: absolute;
      width: 100%;
      top: size-m(223);
      height: 80px;

      .year {
        width: size-m(30.16);
        height: size-m(30.16);
        background: #488726;
        border-radius: 100%;
        font-size: size-m(12);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: size-m(30.16);
        transition: all 0.25s linear;
        position: absolute;
        &:nth-child(2) {
          left: size-m(329);
          z-index: 10;
        }
        &:nth-child(3) {
          left: size-m(329);
          z-index: 9;
        }
        &:nth-child(4) {
          left: size-m(329);
          z-index: 8;
        }
        &:nth-child(5) {
          left: size-m(329);
          z-index: 7;
        }
        &:nth-child(6) {
          left: size-m(329);
          z-index: 6;
        }
        &.active {
          position: absolute;
          left: size(128);
          background: #fff;
          border: size(2) solid #000;
          margin-left: 0;
          p {
            color: #000;
            font-size: size-m(18.55);
            position: absolute;
            right: -#{size-m(45)};
            bottom: -#{size-m(10)};
          }
        }
        &.active + div {
          right: 0;
        }
        &.hidden {
          transform: translateX(-250vw);
          margin-left: 0;
        }
        &:first-child {
          margin-right: 0;
        }
        &:last-child {
          margin-right: size(151);
        }
        &:hover {
          cursor: pointer;
          border: size(2) solid #000;
        }
      }

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: size(2);
        background: #000;
        left: 0;
        top: size-m(15.08);
        z-index: -1;
      }
    }

    .slide {
      position: absolute;
      width: size-m(350);
      height: size-m(249);
      left: size-m(12.5);
      bottom: size-m(35);
      .splide__track {
        overflow-y: visible;
        overflow: unset;
        .slide-item {
          width: size-m(350);
          height: size-m(249);
          margin-right: 0;
          img {
            width: 100%;
            box-shadow: unset;
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4));
          }
          p {
            margin-top: size-m(3);
            display: block;
            font-size: size-m(13);
            text-align: right;
          }
        }
      }
      .splide__pagination {
        bottom: size-m(40);
        left: 5%;
        transform: unset;
        justify-content: flex-start;
        width: 80%;
        .splide__pagination__page {
          width: size-m(8);
          height: size-m(8);
          background: transparent;
          border: 1px solid #000;
          border-radius: 0;
          &.is-active {
            background: #000;
            transform: scale(1);
          }
        }
      }
    }

    .back {
      width: size-m(92.61);
      bottom: size-m(17);
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
import { isMobile } from '@/utils'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import Hammer from "hammerjs";

export default {
  name: 'section9',
  components: {
  },
  data() {
    return {
      isMobile,
      slideOption: {
        rewind: false,
        pagination: false,
        arrows: false,
        perPage: 3,
        gap: 30,
        breakpoints: {
          767: {
            perPage: 1,
            pagination: true,
            gap: 30,
            padding: { left: 20, right: 20 }
          }
        }
      },
      activeYear: 0,
      currentYeadIdx: 0,
      timelines: [
        {
          year: 2012,
          imgs: [
            {
              url: require('@/projects/gp/s9/1-1.jpg'),
              caption: '宸宜進寶'
            },
            {
              url: require('@/projects/gp/s9/1-2.jpg'),
              caption: '新世紀特區'
            },
            {
              url: require('@/projects/gp/s9/1-3.jpg'),
              caption: '一品大院'
            },
            {
              url: require('@/projects/gp/s9/1-4.jpg'),
              caption: '金店面'
            },
          ]
        },
        {
          year: 2014,
          imgs: [
            {
              url: require('@/projects/gp/s9/2.jpg'),
              caption: '捷韻A19'
            },
          ]
        },
        {
          year: 2015,
          imgs: [
            {
              url: require('@/projects/gp/s9/3.jpg'),
              caption: '捷韻站'
            },
          ]
        },
        {
          year: 2016,
          imgs: [
            {
              url: require('@/projects/gp/s9/4.jpg'),
              caption: '一品閣'
            },
          ]
        },
        {
          year: 2019,
          imgs: [
            {
              url: require('@/projects/gp/s9/5.jpg'),
              caption: '昆旺品藏'
            },
          ]
        },
        {
          year: 2021,
          imgs: [
            {
              url: require('@/projects/gp/s9/6.jpg'),
              caption: '昆旺 青茵悦'
            },
          ]
        },
      ]
    }
  },
  methods: {
    setYear(year) {
      this.activeYear = year;
      setTimeout(() => {
        this.$refs.splide.splide.refresh()
        this.$refs.splide.splide.go(0)
      }, 0);
    },
    resetYear() {
      this.activeYear = this.timelines[0];
      setTimeout(() => {
        this.$refs.splide.splide.refresh()
        this.$refs.splide.splide.go(0)
      }, 0);
    }
  },
  created() {
    this.activeYear = this.timelines[0];
  },
  mounted() {
    const self = this;
    const stage = this.$refs.timeline;
    var mc = new Hammer.Manager(stage);
    var Swipe = new Hammer.Swipe();
    mc.add(Swipe);

    mc.on('swipeleft', function (e) {
      if (self.currentYeadIdx >= 4) {
        self.currentYeadIdx = 5;
      } else {

        self.currentYeadIdx += 1;
      }
      self.setYear(self.timelines[self.currentYeadIdx])
    });

    mc.on('swiperight', function (e) {
      if (self.currentYeadIdx <= 1) {
        self.currentYeadIdx = 0
      } else {
        self.currentYeadIdx -= 1;
      }
      self.setYear(self.timelines[self.currentYeadIdx])
    });
  }
}
</script>
