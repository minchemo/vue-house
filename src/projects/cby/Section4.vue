<template>
  <div class="section4">
    <div
      v-if="!isMobile"
      class="info"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="600"
    >
      <h2>擎學而立 恆之有年</h2>
      <h3>
        天天 熟成生活全方位<br /><span class="indent">年年 地標價值深品味</span>
      </h3>
      <p>
        綠富、學富一應俱全的人文純境，春福再造當代峰格的生活地標。<br />
        海佃學區、年度鉅獻的【春福年年】，蘊藏著一份時間的價值感，細緻的幾何，才見細膩的簡約，方格的擘劃，造就耐看的經典。是全新的城市之窗，也是家之仰望，助您與摯愛家人的互動故事。<br />
        映畫成生活裡，簡單卻恆久的美妙景致。
      </p>
    </div>
    <div
      v-else
      class="info"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="600"
    >
      <h2>LANDMARK 新地標 新家園</h2>
      <h3>
        天天享受熟成生活 年年擎立地標價值<br />
        家選春福 讓您理想幸福 與時光共築
      </h3>
    </div>
    <div v-if="!isMobile" class="architecture" 
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="0">ARCHITECTURE</div>
    <div class="bg">
      <img v-if="!isMobile" src="~@/projects/cby/s4/view.jpg" alt="" />
      <img v-else src="~@/projects/cby/s4/mo-view.jpg" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section4 {
  height: auto;
  .info {
    width: 25%;
    position: absolute;
    text-align: left;
    top: 16vw;
    right: 14vw;
    h2 {
      font-size: 2.2rem;
      font-weight: bold;
    }
    h3 {
      margin-top: 14px;
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 1.5;
      .indent {
        text-indent: 8rem;
        display: block;
      }
    }
    p {
      border-top: 2px solid rgba(0, 0, 0, 0.8);
      font-size: 1.1rem;
      text-align: justify;
      letter-spacing: 1.5px;
      line-height: 1.5;
      padding-top: 14px;
      margin-top: 14px;
    }
  }

  .architecture {
    position: absolute;
    color: #fff;
    right: 14vw;
    top: 4vw;
    font-size: 3rem;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
  }
  .bg {
    background-size: cover;
    background-image: url(~@/projects/cby/s4/view.jpg);
    img {
      width: 100%;
      visibility: hidden;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section4 {
    height: auto;
    .info {
      color: #fff;
      width: 100%;
      text-align: center;
      left: 0;
      bottom: 10vw;
      top: unset;
      h2 {
        font-size: 1.7rem;
      }
      h3 {
        font-size: 1.2rem;
      }
    }
    .bg {
      background-image: url(~@/projects/cby/s4/mo-view.jpg);
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
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
