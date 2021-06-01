<template>
  <div class="section2">
    <div
      v-if="!isMobile"
      class="intro"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-offset="0"
      data-aos-delay="0"
    >
      <h2><b>潛力新北區</b><br /><b>LOCATION</b> 年年增值</h2>
      <div>
        <p>預約北安特商區 大發台南副都心</p>
        <p>
          借勢台南北區商圈林立，文教氣息濃厚，交通地利便捷成熟！而鹽水溪以北的「海佃人文特區」，鄰近台南「北安商業區」重大副都心規劃，預計引進優質服務產業、退縮建築，創造國際街廓質感！都會重大建設如國道、捷運等願景，加上區域內公園，河堤構成書是綠帶，未來發展與永居條件皆更勝北區，保證潛力十足，成就高端居住的「新北區」！
        </p>
      </div>
    </div>
    <div v-else class="mo-intro" 
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-offset="0"
      data-aos-delay="0">
      <h2><b>LOCATION</b> 新北區 新潛力</h2>
      <p>預約北安特商區 綠地校園好適居<br />年年高質好生活 年年增值副都心</p>
    </div>
    <div class="view" ref="view" 
        data-aos="fade-up">
      <img
        class="view-img"
        ref="viewImg"
        src="~@/projects/cby/s2/view.jpg"
        alt=""
      />
      <img
        v-if="isMobile"
        class="view-hand"
        ref="viewHand"
        src="~@/projects/cby/s2/arrow_hand.png"
        alt=""
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section2 {
  min-height: 100vh;

  .intro {
    position: absolute;
    display: flex;
    top: 0;
    left: 50%;
    z-index: 1;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    margin-left: -35%;
    margin-top: 4%;

    h2 {
      width: 38%;
      text-align: left;
      font-size: 2.5rem;
      color: #fff;
      line-height: 1.5;
      white-space: nowrap;
    }
    div {
      width: 55%;
      text-align: left;
      p {
        color: #fff;
        &:nth-child(1) {
          font-weight: bold;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        &:nth-child(2) {
          font-weight: normal;
          font-size: 1rem;
          margin-bottom: 1rem;
          line-height: 1.5;
          text-align: justify;
        }
      }
    }
  }

  .view {
    background-color: #1d89d8;
    .view-img {
      width: 100%;
      transform: translate(-1px, 3px);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    min-height: 100vh;

    .mo-intro {
      position: absolute;
      top: 0;
      left: 50%;
      width: 80%;
      z-index: 1;
      margin-left: -40%;
      color: #fff;
      margin-top: 20%;
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1.25rem;
        font-weight: bold;
        margin-top: 1rem;
        line-height: 1.3;
      }
    }

    .view {
      background-color: #1d89d8;
      overflow-y: hidden;
      overflow-x: scroll;
      .view-hand {
        position: absolute;
        width: 30%;
        z-index: 1;
        bottom: 20%;
        left: 50%;
        margin-left: -15%;
      }
      .view-img {
        width: unset;
        height: 100%;
        transform: translate(-1px, 3px);
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
  name: "section2",

  data() {
    return {
      isMobile,
    };
  },

  methods: {
    scrollView() {
      const el = this.$refs.view;
      const imgEl = this.$refs.viewImg;
      const handEl = this.$refs.viewHand;
      $(imgEl).one("load", () => {
        const scrollTarget = (el.scrollWidth - $(window).width()) / 2;
        el.scrollLeft = scrollTarget + 100;

        setTimeout(() => {
          $(el).one("scroll", () => {
            $(handEl).fadeOut();
          });
        }, 1000);
      });
    },
  },

  created() {},
  mounted() {
    if (isMobile) {
      this.scrollView();
    }
  },
};
</script>
