<template>
  <div>
    <div class="s5" ref="s5">
      <div class="main" data-aos="fade-up" v-if="!isMobile"></div>
      <div class="view" v-else @click="viewOpen = !viewOpen">
        <GodModView />
      </div>
      <div class="decor parallax-item" data-depth="0.25">
        <img
          class="d1"
          data-aos="fade"
          src="@/projects/renai/s5/decor1.svg"
          alt=""
          srcset=""
        />
        <div class="title" data-aos="fade" data-aos-delay="300">
          人文地圖<br />仁愛旭
        </div>
      </div>
    </div>
    <div class="s5-view" v-if="isMobile" v-bind:class="{ active: viewOpen }">
      <div class="close" @click="viewOpen = !viewOpen">
        <img src="@/projects/renai/s5/close.svg" alt="" srcset="" />
      </div>
      <GodModView2 />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.parallax-item {
  position: absolute !important;
  &.no-delay {
    transition: all 0s;
  }
}

.s5 {
  position: relative;
  width: size(1920);
  height: size(1232);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .decor {
    pointer-events: none;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 100;
    .d1 {
      position: absolute;
      left: -#{size(130)};
      bottom: size(130);
      width: size(557);
    }
    .d2 {
      position: absolute;
      left: size(30);
      top: size(150);
      width: size(298);
    }
    .title {
      font-size: size(50);
      position: absolute;
      writing-mode: vertical-rl;
      color: #fff;
      z-index: 1;
      bottom: size(200);
      left: size(160);
      text-align: center;
      line-height: 1.5;
    }
  }
  .main {
    position: relative;
    width: size(1697);
    height: size(942.5);
    background-image: url("~@/projects/renai/s5/bg.jpg");
    background-position: center;
    background-size: cover;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s5-view {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 900000;
    transform: translateX(-100vw);
    transition: all 0.3s;

    &.active {
      transform: translateX(0);
    }

    .close {
      position: absolute;
      left: 20px;
      bottom: 20px;
      width: 50px;
      height: 50px;
      z-index: 1;
      img {
        width: 100%;
      }
    }
  }
  .s5 {
    position: relative;
    width: size-m(375);
    height: size-m(631);
    min-height: 0;
    max-height: size-m(812);

    .view {
      width: size-m(300);
      height: size-m(469);
      background: #eee;
    }

    .decor {
      .d1 {
        left: -#{size(130)};
        top: size-m(60);
        width: size-m(140);
      }
      .d2 {
        position: absolute;
        right: size-m(10);
        bottom: size-m(15);
        width: size-m(90);
      }
      .title {
        font-size: size-m(15);
        top: size-m(72);
        left: size-m(45);
        bottom: auto;
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Parallax from "parallax-js";
import GodModView from "@/components/GodModView.vue";
import GodModView2 from "@/components/GodModView2.vue";

export default {
  name: "s5",
  props: ["scrollInstance"],
  components: {
    Swiper,
    SwiperSlide,
    GodModView,
    GodModView2
  },
  directives: {
    swiper: directive
  },

  data() {
    return {
      isMobile,
      viewOpen: false
    };
  },

  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },

  mounted() {
    setTimeout(() => {
      if (isMobile) {
        return
      }
      // $(".parallax-item").addClass("no-delay");
      var scene = this.$refs.s5;
      new Parallax(scene, {
        relativeInput: true,
        selector: ".parallax-item",
      });
    }, 1500);
  },

  created() { },
};
</script>
