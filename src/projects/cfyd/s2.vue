<template>
  <div class="s2">
    <div
      class="text"
      data-aos="fade-up"
      data-aos-anchor=".s2"
      data-aos-anchor-placement="bottom"
    >
      <div class="t1">
        <div class="title" data-aos="flip-up">THE FUTURE OF ANPING</div>
        <div class="subtitle" data-aos="flip-up" data-aos-delay="200">
          市政五期亮起來 安平商港新門戶
        </div>
      </div>
      <div class="t2" data-aos="flip-up" data-aos-delay="400">
        集結許多公共設施資源，商圈、學校與民間建設，永華特區已發展完整，加上安平商港、海洋之丘與遊艇碼頭，計畫等熱烈進行；安平跨港大橋、北外環道路計畫即將打通繁華動脈，未來精彩矚目，指日可待！
      </div>
    </div>
    <div class="view">
      <GodModView />
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
  background-color: #0e79dc;
  z-index: 11;
  .text {
    position: relative;
    z-index: 6;
    color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .t1 {
      text-align: right;
      border-right: 1px solid #fff;
      padding-right: size(25);
      margin-right: size(25);
      margin-top: size(50);
      .title {
        font-size: size(92);
        font-weight: 1000;
      }
      .subtitle {
        font-size: size(38);
        font-family: "Noto Serif TC";
        font-weight: bold;
        margin-top: size(20);
      }
    }
    .t2 {
      font-size: size(17);
      width: size(559);
      text-align: left;
      line-height: 2;
    }
  }
  .view {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 4;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("~@/projects/cfyd/s2/bg.png");
    background-position: center;
    background-size: cover;
    z-index: 5;
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
    background-color: transparent;
    z-index: 11;
    .text {
      padding-top: size-m(50);
      position: relative;
      z-index: 6;
      color: #fff;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      .t1 {
        text-align: left;
        border-right: 0px;
        padding-right: 0;
        margin-right: auto;
        margin-top: 0;
        border-bottom: 1px solid #fff;
        width: size-m(311);
        padding-bottom: size-m(15);
        margin-bottom: size-m(15);
        margin-left: auto;
        .title {
          font-size: size-m(20);
          font-weight: 1000;
        }
        .subtitle {
          font-size: size-m(20);
          font-family: "Noto Serif TC";
          font-weight: bold;
          margin-top: size-m(10);
        }
      }
      .t2 {
        font-size: size-m(12);
        width: 80%;
        text-align: left;
        line-height: 2;
        width: size-m(311);
        margin: 0 auto;
      }
    }
    .view {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 4;
    }
    .bg {
      display: none;
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
  props: ["scrollInstance"],
  components: {
    GodModView
  },
  data() {
    return {
      isMobile,
      visual: "",
    };
  },

  methods: {
    // scrollTo(el) {
    //   this.scrollInstance.scrollTo(el);
    // },
  },

  created() { },
  mounted() {
  },
};
</script>