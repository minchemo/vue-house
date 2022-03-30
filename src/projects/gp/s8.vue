<template>
  <div class="section8">
    <img
      class="title"
      v-if="!isMobile"
      src="@/projects/gp/s8/title.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="400"
    />
    <img
      class="title"
      v-else
      src="@/projects/gp/s8/title_m.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="400"
    />
    <div class="box">
      <img class="hex" src="@/projects/gp/s8/hex.svg" alt="" srcset="" />
      <img
        class="hex-title"
        v-bind:class="`t${i}`"
        @mouseover="selectedHex = i"
        @mouseleave="selectedHex = 0"
        :src="require(`@/projects/gp/s8/${i}.svg`)"
        alt=""
        srcset=""
        v-for="i in 7"
        :key="`t${i}`"
      />
      <template v-if="!isMobile">
        <img
          class="hex-img"
          v-bind:class="{ active: selectedHex == i, [`t${i}`]: true }"
          :src="require(`@/projects/gp/s8/${i}.png`)"
          alt=""
          srcset=""
          v-for="i in 7"
          :key="`i${i}`"
        />
      </template>
      <template v-else>
        <img
          class="hex-img"
          v-bind:class="{ active: selectedHex == i, [`t${i}`]: true }"
          :src="require(`@/projects/gp/s8/${i}-m.png`)"
          alt=""
          srcset=""
          v-for="i in 7"
          :key="`i${i}`"
        />
      </template>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section8 {
  width: 100%;
  height: size(1170);
  .title {
    top: size(83);
    left: 0;
    width: 100%;
    position: absolute;
  }
  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: size(1143.45);
    height: size(489);
    margin-top: size(80);
    z-index: 3;
    .hex {
      width: 100%;
    }
    .hex-title {
      position: absolute;
      z-index: 1;
      transition: all 0.3s;
      &.t1 {
        width: size(153.19);
        left: size(53);
        top: size(224);
      }
      &.t2 {
        width: size(136.23);
        left: size(278);
        top: size(355);
      }
      &.t3 {
        width: size(153.19);
        left: size(272);
        top: size(99);
      }
      &.t4 {
        width: size(135.39);
        left: size(506);
        top: size(216);
      }
      &.t5 {
        width: size(142.89);
        left: size(718);
        top: size(328);
      }
      &.t6 {
        width: size(153.19);
        left: size(712);
        top: size(96);
      }
      &.t7 {
        width: size(156);
        left: size(942);
        top: size(197);
      }
      &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
      }
    }
    .hex-img {
      position: absolute;
      width: size(261.85);
      filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
      transform: scale(0);
      transform-origin: center;
      transition: all 0.3s;

      &.t1 {
        bottom: size(265);
        left: -#{size(228)};
        display: none;
      }
      &.t2 {
        bottom: -#{size(131)};
        left: 0;
        display: none;
      }
      &.t3 {
        bottom: size(394);
        left: 0;
      }
      &.t4 {
        bottom: size(394);
        left: size(437);
        display: none;
      }
      &.t5 {
        bottom: -#{size(131)};
        right: 0;
        display: none;
      }
      &.t6 {
        bottom: size(394);
        right: 0;
      }
      &.t7 {
        bottom: size(265);
        right: -#{size(228)};
      }
      &.active {
        transform: scale(1);
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section8 {
    width: 100%;
    height: size-m(667);
    .title {
      top: size-m(35);
      left: 0;
      width: 100%;
      position: absolute;
    }
    .box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) rotate(90deg) scale(2.1);
      margin-top: size-m(70);
      transform-origin: center center;
      .hex {
        width: 100%;
      }
      .hex-title {
        position: absolute;
        z-index: 1;
        transition: all 0.3s;
        transform: rotate(-90deg);
        &:hover {
          transform: scale(1.1) rotate(-90deg);
          filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.9));
        }
      }
      .hex-img {
        display: unset;
        transform: scale(1);
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
import { isMobile } from '@/utils'

export default {
  name: 'section8',
  components: {
  },
  data() {
    return {
      isMobile,
      selectedHex: 0
    }
  },
  methods: {
  },
  created() { },
  mounted() { }
}
</script>
