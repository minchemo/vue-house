<template>
  <div class="s2">
    <div class="view">
      <img
        class="large-title"
        src="~@/projects/cm/s2/large-t.svg"
        alt="藏美表參道"
        srcset=""
      />
      <GodModView />

      <img
        v-if="!isMobile"
        class="info"
        src="~@/projects/cm/s2/info.svg"
        alt="藏美表參道"
        srcset=""
        data-aos="zoom-in"
      />
      <img
        v-else
        class="info"
        src="~@/projects/cm/s2/info_m.svg"
        alt="藏美表參道"
        srcset=""
        data-aos="zoom-in"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s2 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background-image: url("~@/projects/cm/bg.png");
  background-size: 100%;
  background-position: top;
  padding-top: size(100);
  .view {
    position: relative;
    margin-left: auto;
    width: size(1632.6);
    height: size(610.35);
    display: flex;
    flex-direction: column;

    .large-title {
      position: absolute;
      top: -#{size(80)};
      left: -#{size(180)};
      width: size(835.54);
      z-index: 1;
      animation: fade 3s;
      opacity: 1;

      @keyframes fade {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }

    .info {
      position: relative;
      margin-top: size(100);
      width: size(1339.26);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s2 {
    position: relative;
    width: size-m(375);
    height: size-m(667);
    background-image: url("~@/projects/cm/bg_m.png");
    background-size: 100%;
    background-position: top;
    padding-top: size(100);
    .view {
      position: relative;
      margin-left: auto;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;

      .large-title {
        position: absolute;
        top: -#{size-m(30)};
        left: 50%;
        width: 90%;
        transform: translateX(-50%);
        z-index: 1;
      }

      .info {
        position: relative;
        margin-top: size-m(50);
        width: 80%;
        margin-left: 10%;
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
import GodModView from "@/components/GodModView.vue";

export default {
  name: "s2",
  components: {
    GodModView,
  },
  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
