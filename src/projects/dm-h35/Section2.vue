<template>
  <div class="section2">
    <div class="intro">
      <div class="title" v-if="!isMobile" data-aos="fade">
        盛世風華一如往昔　大安首善人文富域
      </div>
      <div class="title" v-else data-aos="fade">盛世風華一如往昔<br />大安首善人文富域</div>
      <div class="des" v-if="!isMobile" data-aos="fade">
        大安區用它獨有的時光豐壤，蘊藏歷史與人文交織的精彩篇章，映照國際使節與崢嶸將門、富賈商冑<br />熙來攘往的交錯身影；大安路彷如比例適度，穩妥大方的謙謙君子，以一貫秀麗清雅的身段，含蓄內<br />斂的演繹著旁人無法窺探的時代美學。
      </div>
      <div class="des" v-else data-aos="fade">
        大安區用它獨有的時光豐壤，蘊藏歷史與人文交織的精彩篇章；大安路彷如比例適度，穩妥大方的謙謙君子，以秀麗清雅的身段演繹著旁人無法窺探的時代美學。
      </div>
    </div>
    <div class="divider" data-aos="fade"></div>
    <div class="view" ref="view" data-aos="fade">
      <img ref="viewImg" src="~@/projects/dm-h35/s2/view.jpg" alt="" />
    </div>
    <div class="draw" data-aos="fade">
    <img v-if="!isMobile" class="draw1" src="~@/projects/dm-h35/s2/draw1.png" alt="">
    <img v-if="!isMobile" class="draw2" src="~@/projects/dm-h35/s2/draw2.gif" alt="">
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section2 {
  height: calc(100vw * 930 / 1920);
  .intro {
    position: absolute;
    text-align: left;
    left: 10vw;
    width: 80%;
    .title {
      color: #356292;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .des {
      margin-top: 4.5vw;
      line-height: 2;
    }
  }
  .divider {
    position: absolute;
    top: 5vh;
    height: 1px;
    width: 60vw;
    background: rgb(53, 98, 142);
    background: linear-gradient(
      90deg,
      rgba(53, 98, 142, 1) 14%,
      rgba(186, 211, 234, 0.4) 84%
    );
  }
  .view {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 650px;

    img {
      width: 100%;
    }
  }
  .draw {
      width: 25vw;
      right: -5vw;
      top: 0;
      position: absolute;
  }
  .draw1 {
    width: 100%;
    position: relative;
  }
  .draw2 {
      width: 5.2vw;
    right: 15vw;
    top: 0.4vw;
    transform: rotate(-19deg);
      position: absolute;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    height: calc(100vw * 667 / 375);
    .intro {
      margin-top: 10vh;
      position: absolute;
      text-align: center;
      left: 0;
      width: 100%;
      .title {
        color: #356292;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 2px;
      }
      .des {
        margin-top: 15vw;
        line-height: 2;
        width: 80%;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .divider {
      position: absolute;
      top: 20vh;
      height: 1px;
      width: 100%;
      background: rgb(53, 98, 142);
      background: linear-gradient(
        90deg,
        rgba(53, 98, 142, 1) 34%,
        rgba(186, 211, 234, 0.4) 84%
      );
    }
    .view {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50vh;
      overflow-x: scroll;
      overflow-y: hidden;

      img {
        height: 100%;
        width: unset;
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

      $(imgEl).one("load", () => {
        const scrollTarget = (el.scrollWidth - $(window).width()) / 2;
        el.scrollLeft = scrollTarget;
      });
    },
  },

  mounted() {
    if (isMobile) {
      this.scrollView();
    }
  },
};
</script>
