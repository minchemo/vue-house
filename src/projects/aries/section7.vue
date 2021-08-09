<template>
  <div class="section7 f-p-section">
    <div class="title-box">
      <div
        class="img"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <img
          class="tree"
          src="~@/projects/aries/s7/tree.png"
          alt=""
          srcset=""
        />
        <img
          class="title"
          src="~@/projects/aries/s7/title.png"
          alt=""
          srcset=""
        />
      </div>
      <p
        class="content"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        買房最好的時機，相較頭城、礁溪房價高點，<br />
        『The Aries 牡羊座』精質坪數換超星級豐富休閒渡假設施，<br v-if="!isMobile"/>
        一屋三用、自用享樂活、置產換增值、投資賺房金！
      </p>
    </div>
    <div class="bg"></div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section7 {
  height: auto;

  .title-box {
    position: relative;
    margin-bottom: -11.5vw;
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
      .tree {
        width: 4vw;
      }
      .title {
        width: 23vw;
      }
    }
    .content {
      margin-top: 5vw;
      color: #4d4d4d;
      font-size: 1vw;
      line-height: 1.8vw;
    }
  }
  .bg {
    height: 0;
    width: 100%;
    padding-bottom: 38.26%;
    background-image: url("~@/projects/aries/s7/bg.png");
    background-size: cover;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section7 {
    height: auto;

    .title-box {
      position: relative;
      margin-bottom: 12px;
      .img {
        flex-direction: row-reverse;
        align-items: flex-start;
        .tree {
          width: 10vw;
          position: absolute;
          right: 10vw;
        }
        .title {
          width: 61vw;
        }
      }
      .content {
        margin-top: 20px;
        color: #4d4d4d;
        font-size: 16px;
        line-height: 2;
        padding: 0 10px;
      }
    }
    .bg {
      height: 0;
      width: 100%;
      padding-bottom: 50%;
      background-image: url("~@/projects/aries/s7/bg.png");
      background-size: cover;
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
  name: "section7",

  data() {
    return {
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
