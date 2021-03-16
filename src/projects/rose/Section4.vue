<template>
  <div class="section4">
    <div class="sub-section">
      <div class="title">
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
          佳瑞建築星思潮<br />
          從不想跟別人一樣開始
        </h2>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          用建築創新生活，水平分割完美比例，「左岸玫瑰」從規劃到設計，都全為讓這城市更美而存在，拒絕複製與平庸，只為吸引相同頻率的人可觸動靈魂而感動，即使住上一、二十年，也不會隨著潮流褪色，懂生活又懂建築的人會愛上佳瑞。
        </p>
      </div>
      <div class="desc">建築外觀示意圖</div>
      <img
        data-aos="fade-down"
        data-aos-duration="500"
        src="~@/projects/rose/s4/bg.jpg"
        class="bg"
        alt=""
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/style/variableDefault.scss";
/* 螢幕尺寸標準 */
.section4 {
  width: 100%;
  height: auto;

  .sub-section {
    height: auto;
    position: relative;

    .title {
      position: absolute;
      z-index: 1;
      left: 5vw;
      top: 5vw;
      text-align: left;
      width: 30vw;
      color: #fff;

      h2 {
        font-size: 38px;
        font-weight: bold;
        margin-bottom: 20px;
        line-height: 1.3;
        letter-spacing: 4px;
      }

      p {
        font-size: 20px;
        text-align: justify;
        letter-spacing: 2px;
        line-height: 2;
      }
    }

    .desc {
      font-size: 24px;
      position: absolute;
      color: #fff;
      bottom: 20px;
      right: 20px;
      letter-spacing: 2px;
    }

    .bg {
      width: 100%;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    width: 100%;
    height: auto;

    .sub-section {
      height: auto;
      position: relative;

      .title {
        position: relative;
        z-index: 1;
        left: 0vw;
        top: 0vw;
        padding: 5vw;
        text-align: left;
        width: 100vw;
        color: #fff;
        background: url("~@/projects/rose/s4/mb-bg.png");
        background-size: cover;
        background-position: bottom;
        margin-bottom: -25vw;

        h2 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.5;
          letter-spacing: 3px;
        }

        p {
          font-size: 16px;
          text-align: justify;
          letter-spacing: 1px;
          line-height: 1.5;
          font-weight: bold;
        }
      }

      .desc {
        font-size: 16px;
        position: absolute;
        color: #fff;
        bottom: 20px;
        right: 20px;
        letter-spacing: 2px;
      }

      .bg {
        width: 100%;
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

export default {
  name: "section4",

  data() {
    return {
      isMobile
    };
  },

  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    }
  },

  created() {}
};
</script>
