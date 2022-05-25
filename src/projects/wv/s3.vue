<template>
  <div class="s3" id="scene">
    <div class="viewbox">
      <GodModView :bgUrl="
        !isMobile
          ? require('@/projects/wv/s3/view.jpg')
          : require('@/projects/wv/s3/view_m.jpg')
      " />
    </div>
    <div class="vtitle" v-if="!isMobile" data-aos="zoom-in" data-aos-delay="200">
      <img src="@/projects/wv/s3/view_t.png" alt="" srcset="" />
    </div>
    <div class="t" v-if="!isMobile">
      <div class="left">
        <img src="@/projects/wv/s3/title.svg" alt="" srcset="" />
      </div>
      <div class="right">
        <p>
          機場線、環狀線已一一兌現，接續而來的五泰輕軌將串聯起大台北運輸網絡，交通樞紐已然成形，引領新一波軌道經濟。銀河灣計畫啟動，隨蘆北登鼎大台北水岸商業娛樂核心王座，蛋黃蛋白區重新洗牌，一水相鄰的新蘆特區，即將成為蛋黃中的金蛋黃。
        </p>
      </div>
    </div>
    <div class="t-m" v-else>
      <img class="t1" src="@/projects/wv/s3/title_m.svg" alt="" srcset="">
      <p class="t2">機場線、環狀線已一一兌現，接續而來的五泰輕軌將串聯起大台北運輸網絡，交通樞紐已然成形，引領新一波軌道經濟。銀河灣計畫啟動，隨蘆北登鼎大台北水岸商業娛樂核心王座，蛋黃蛋白區重新洗牌，一水相鄰的新蘆特區，即將成為蛋黃中的金蛋黃。</p>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";

/* 螢幕尺寸標準 */
.s3 {
  width: size(1920);
  height: size(1080);

  .viewbox {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .vtitle {
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .t {
    width: size(1630);
    height: size(200);
    position: absolute;
    top: size(45);
    left: size(145);
    background: rgba(255, 255, 255, 0.4);
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: size(40) size(100);

    .left {
      img {
        width: size(654);
      }
    }

    .right {
      width: size(680);

      p {
        font-family: "Noto Sans TC";
        line-height: 1.5;
        letter-spacing: 0.2em;
        font-size: size(20);
      }
    }

    &::before {
      content: "";
      height: size(100);
      width: 1px;
      background: #000;
      position: absolute;
      left: 50%;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s3 {
    width: size-m(375);
    height: size-m(774);

    .t-m {
      position: absolute;
      left: size-m(22.5);
      top: size-m(35);
      z-index: 10;
      width: size-m(330);
      height: size-m(360);
      background-color: rgba(255, 255, 255, 0.3);
      border: 1px solid #000;
      padding: size-m(50) size-m(35);

      .t1 {
        width: 100%;
      }
      .t2 {
        margin-top: size-m(10);
        font-size: size-m(15);
        line-height: 1.6;
        font-weight: 600;
        text-align: left;
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import GodModView from "@/components/GodModView.vue";

export default {
  name: "s3",
  props: ["scrollInstance"],
  components: {

    GodModView
  },
  data() {
    return {
      isMobile,
    };
  },
  methods: {
  },
  mounted() {
  },
  created() {
  },
};
</script>