<template>
  <div class="s1">
    <div class="sub-vis">
      <div class="left" data-aos="fade-up" data-aos-delay="200">
        <img
          src="@/projects/tm/s1/t1.svg"
        />
      </div>
      <div class="right" data-aos="fade-down">
         <img
          src="@/projects/tm/s1/t2.svg"
        />
      </div>
    </div>
    <div class="main-vis" v-if="visual == 'main'">
      <div class="logo">
        <img
          class="logo-top"
          src="@/projects/tm/s1/logo-top.svg"
          data-aos="fade-down"
        />
        <img
          class="logo-bottom"
          src="@/projects/tm/s1/logo-bottom.svg"
          data-aos="fade-up"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("~@/projects/tm/s1/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  .sub-vis {
    height: 100%;
    position: absolute;
    font-size: size(60);
    font-weight: 100;
    color: #fff;
    writing-mode: vertical-lr;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 2s;

    

    &.hidden {
      transform: translate(-50%, -200%);
      opacity: 0;
    }

    div {
      letter-spacing: size(5);
      &.right {
        margin-left: size(10);
        margin-bottom: size(70);

        img{height: 30%;}
      }
      &.left {
        margin-right: size(10);
        margin-top: size(70);

        img{height: 30%;}
      }
    }
  }
  .main-vis {
    position: relative;
    height: 100%;
    .logo {
      position: absolute;
      width: size(375);
      height: size(267);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      top: 50%;
      transform: translate(40%, -50%);
      img {
        width: 100%;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s1 {
    height: calc(100vh - 63px);
    background: none;

    &::before{content: "";
    position: fixed;top: 0;left: 0;
    bottom: 0;right: 0;
    background: url("~@/projects/tm/s1/bg_m.jpg") center top;
    background-size: 100% auto;
    z-index: -1;
    
    }

    .sub-vis {
      font-size: size-m(40);
      font-weight: 100;



      &.hidden {
        transform: translate(-50%, -200%);
        opacity: 0;
      }
      

      div {
        letter-spacing: size-m(1);
        &.right {
          margin-left: size-m(5);
          margin-bottom: size-m(30);

          img{height: 40%;}
        }
        &.left {
          margin-right: size-m(5);
          margin-top: size-m(30);

          img{height: 40%;}
        }
      }
    }
    .main-vis {
      position: relative;
      height: 100%;
      width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      .logo {
        position: relative;
        width: size-m(234.3);
        height: size-m(167);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        top: 0;
        transform: translate(0);
        left: 0;

        img {
          width: 100%;
        }
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
  name: "s1",
  props: ["scrollInstance"],
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

  created() {},
  mounted() {
    setTimeout(() => {
      $(".s1 .sub-vis").addClass("hidden");
      this.visual = "main";
    }, 4000);
  },
};
</script>