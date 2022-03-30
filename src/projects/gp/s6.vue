<template>
  <div class="section6">
    <img
      class="bar"
      v-if="isMobile"
      src="@/projects/gp/s5/bar_m.png"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="500"
    />
    <img
      class="title"
      v-if="!isMobile"
      src="@/projects/gp/s6/title.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="500"
    />
    <img
      class="title"
      v-else
      src="@/projects/gp/s6/title_m.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="500"
    />

    <div
      class="box"
      v-for="(img, i) in imgs"
      :key="i"
      v-bind:class="`box${i + 1}`"
      v-bind:style="{ backgroundImage: `url('${img.url}')` }"
      data-aos="fade"
      :data-aos-delay="i * 200"
    >
      <div class="text" v-if="i == 0">GREEN PARK HOUSE</div>
      <p>{{ img.caption }}</p>
    </div>
    <img class="wave" src="@/projects/gp/s6/wave.svg" alt="" srcset="" />
    <img
      class="mountain"
      src="@/projects/gp/s6/mountain.png"
      alt=""
      srcset=""
      data-aos="fade"
    />
    <img
      v-if="!isMobile"
      class="banner"
      src="@/projects/gp/s6/banner.png"
      alt=""
      srcset=""
      data-aos="fade"
    />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section6 {
  width: 100%;
  height: size(1080);
  background-size: cover;
  background-position: center;
  .banner {
    position: absolute;
    height: size(2540);
    left: 0;
    bottom: 0;
  }
  .title {
    position: absolute;
    top: size(221);
    right: size(259);
    height: size(720);
  }
  .mountain {
    position: absolute;
    right: 0;
    bottom: 0;
    width: size(896.38);
    z-index: 0;
  }
  .box {
    background-color: #eee;
    position: absolute;
    background-size: cover;
    transition: all 0.4s;
    z-index: 2;
    box-shadow: size(5) size(5) 8px rgba(0, 0, 0, 0.6);
    &.box1 {
      width: size(877.44);
      height: size(523.68);
      bottom: size(120);
      left: size(581);
    }
    &.box2 {
      width: size(364.32);
      height: size(223.68);
      bottom: size(420);
      left: size(200);
    }
    &.box3 {
      width: size(523.2);
      height: size(316.32);
      top: size(105);
      left: size(363);
    }
    p {
      position: absolute;
      font-size: size(22);
      right: size(15);
      bottom: size(15);
      color: #fff;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    }
    .text {
      position: absolute;
      font-size: size(32);
      left: size(15);
      bottom: size(15);
      color: #fff;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    }
  }
  .wave {
    position: absolute;
    left: 0;
    top: -#{size(25)};
    height: size(121);
    z-index: 1;
    animation: wave 13s infinite alternate-reverse ease-in-out, fadeIn 1.5s;
    opacity: 0.5;
  }

  @keyframes wave {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-75%, 0, 0);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .section6 {
    width: 100%;
    height: size-m(599.5);
    background-size: cover;
    background-position: center;
    .bar {
      position: absolute;
      left: 0;
      top: size-m(22);
      width: 100%;
    }
    .title {
      position: absolute;
      top: size-m(390);
      left: unset;
      right: 0;
      height: auto;
      width: size-m(345);
    }
    .mountain {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      z-index: 0;
    }
    .box {
      box-shadow: size-m(2) size-m(2) 4px rgba(0, 0, 0, 0.6);
      &.box1 {
        width: size-m(375);
        height: size-m(226);
        top: size-m(37);
        left: 0;
      }
      &.box2 {
        width: size-m(154);
        height: size-m(93);
        top: size-m(280);
        left: size-m(31);
      }
      &.box3 {
        width: size-m(154);
        height: size-m(93);
        top: size-m(280);
        left: size-m(192);
      }
      .text {
        position: absolute;
        font-size: size-m(15);
        left: size-m(5);
        top: unset;
        bottom: size-m(5);
        color: #fff;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
      }
      p {
        position: absolute;
        font-size: size-m(13);
        right: size-m(5);
        bottom: size-m(5);
        color: #fff;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
      }
    }
  .wave {
    position: absolute;
    left: 0;
    top: size-m(-127);
    height: size-m(75);
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
  name: 'section6',
  components: {
  },
  data() {
    return {
      isMobile,
      imgs: [
        {
          url: require('@/projects/gp/s6/a.jpg'),
          caption: '青塘園'
        },
        {
          url: require('@/projects/gp/s6/b.jpg'),
          caption: '青埔足球場'
        },
        {
          url: require('@/projects/gp/s6/c.jpg'),
          caption: '橫山書法公園'
        },
      ],
    }
  },

  methods: {
  },

  created() { },

  mounted() {
    setInterval(() => {
      let old = this.imgs;

      this.imgs.unshift(old[2])
      this.imgs.splice(-1)

    }, 3000);
  }
}
</script>
