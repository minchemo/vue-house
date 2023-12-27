<template>
  <div class="section1 with-mask f-p-section">
    <div class="intro">
      <img class="sea" src="./s1/sea.jpg" alt="" srcset="" />
      <img
        class="yellow-style"
        src="./s1/yellow_style.png"
        alt=""
        srcset=""
      />
      <div class="title">
        <h2 data-aos="fade" data-aos-duration="1000">Life choice</h2>
        <p data-aos="fade" data-aos-duration="1000" data-aos-delay="400">
          40歲之後，您選擇什麼樣的生活？<br />
          50歲之後，您想要什麼樣的人生？
        </p>
      </div>
    </div>
    <div class="after-intro">
     <!--  <img
        class="yellow-style"
        src="./s1/yellow_style.png"
        alt=""
        srcset=""
      />  -->
      <img class="ppl" src="./s1/ppl.png" alt="" srcset="" />
      <div class="title">
        <img
          class="logo"
          src="./s1/logo.svg"
          alt=""
          srcset=""
        />
        <p>全台首創｜冷泉溫泉雙泉度假會館｜17-50坪</p>
      </div>
      <img
        class="w1 floating"
        src="./s1/style_w_1.png"
        alt=""
        srcset=""
        data-parallax='{"y" : 230}'
      />
      <img
        class="w2"
        src="./s1/style_w_2.png"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section1 {
  height: 100vh;
  min-height:calc(90000vw / 1920);
  max-height:calc(108000vw / 1920);
  position: relative;
  z-index: 1;
  overflow: hidden;

  .intro {
    background: #f4dc94;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    transition: all 2s;
    opacity: 1;
    clip-path: polygon(0% 0%, 
    0% calc(100% - 4vw), 
    10%  calc(100% - 4.2vw),
    20%  calc(100% - 3.9vw),
    30%  calc(100% - 3.3vw),
    40%  calc(100% - 2.4vw),
    50%  calc(100% - 1.3vw),
    60%  calc(100% - 0.4vw),
    65%  calc(100% - 0.1vw),
    68%  calc(100% - 0vw),
    71%  calc(100% - 0.1vw),
    76%  calc(100% - 0.4vw),
    81%  calc(100% - 0.7vw),
    86%  calc(100% - 1.3vw),
    95%  calc(100% - 2.8vw),
    100%  calc(100% - 4vw),
    100% 0%);
    .sea {
      position: absolute;
      left: -5%;
      top: 0;
      height: 95%;
      z-index: 1;
      animation: sea-skew 4s ease-in-out 0s infinite alternate-reverse;
    }
    .yellow-style {
      width: 200%;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(57%, 72%);
      transition: all 1s;
      z-index: 3;
      animation: slideIn 1s;

      &.inactive {
        transform: translate(35%, 29%);
      }

      @keyframes slideIn {
        0% {
          transform: translate(30%, 100%);
        }
        100% {
          transform: translate(57%, 72%);
        }
      }
    }
    .title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-8vh, -50%);
      z-index: 2;
      h2 {
        font-size: 4.2vw;
        color: #0071b6;
        letter-spacing: -2.7px;
      }
      p {
        margin-top: 40px;
        color: #736357;
        font-size: 1.35vw;
        line-height: 1.5;
        font-weight: bold;
      }
    }

    &.fadeOut {
      opacity: 0;
    }
  }

  .bg-svg{
    width: 100%;
    height:auto;
    position: absolute;
    left: 0;
    bottom: 0;
    }

  .after-intro {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    transition: all 2s;
    opacity: 1;
    background: url("./s1/bg.jpg") center;
    background-size:cover;
    clip-path: polygon(0% 0%, 
    0% calc(100% - 4vw), 
    10%  calc(100% - 4.2vw),
    20%  calc(100% - 3.9vw),
    30%  calc(100% - 3.3vw),
    40%  calc(100% - 2.4vw),
    50%  calc(100% - 1.3vw),
    60%  calc(100% - 0.4vw),
    65%  calc(100% - 0.1vw),
    68%  calc(100% - 0vw),
    71%  calc(100% - 0.1vw),
    76%  calc(100% - 0.4vw),
    81%  calc(100% - 0.7vw),
    86%  calc(100% - 1.3vw),
    95%  calc(100% - 2.8vw),
    100%  calc(100% - 4vw),
    100% 0%);

    .yellow-style {
      width: 200%;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(57%, 72%);
      transition: all 1s;
      z-index: 1;

      &.inactive {
        transform: translate(35%, 29%);
      }
    }
    .ppl {
      position: absolute;
      left:0;
      bottom: 0;
      z-index: 2;
      width:100%;
      height: 100%;
      object-fit: cover;
    }

    .title {
      position: absolute;
      z-index: 10;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -100%);
      .logo {
        width: 20vw;
        filter: drop-shadow(0 0 10px rgba(18, 92, 147, 0.3));

      }
      p {
        margin-top: 40px;
        text-shadow: 0 0 10px rgba(18, 92, 147, 0.3);
        font-size: 1.48vw;
        line-height: 1.42;
        text-align: center;
        color: #fff;
        font-weight: bold;
      }
    }

    .w1 {
      position: absolute;
      width: 35vw;
      right: 0;
      bottom: 0;
    }
    .w2 {
      position: absolute;
      width: 25vw;
      left: 0;
      top: 0;
    }
  }

  @keyframes sea-skew {
    0% {
      transform: skew(3deg) translateX(-3%);
    }
    100% {
      transform: skew(-5deg) translateX(1%);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    height: calc(100vh - 63px);
  min-height:calc(66700vw / 375 - 63px);
  max-height:calc(81200vw / 375 - 63px);

    .intro {
      background: #f4dc94;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
    clip-path: polygon(0% 0%, 
    0% calc(100% - 13.5vw), 
    10%  calc(100% - 13vw),
    20%  calc(100% - 11.5vw),
    30%  calc(100% - 9vw),
    50%  calc(100% - 3vw),
    60%  calc(100% - 1vw),
    70%  calc(100% - 0vw),
    80%  calc(100% - 1vw),
    90%  calc(100% - 3vw),
    100%  calc(100% - 6vw),
    100% 0%);
      .sea {
        height: auto;
        width: 180%;
        left: -30%;
        top: -10%;
      }
      .yellow-style {
        width: 400%;
      }
      .title {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        h2 {
          font-size: 61px;
          letter-spacing: -1.53px;
        }
        p {
          margin-top: 10px;
          font-size: 19px;
          line-height: 1.5;
        }
      }
    }

    .after-intro {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 0;
      transition: all 2s;
      opacity: 1;
      background: url("./s1/bg.jpg");
      background-size: cover;
    clip-path: polygon(0% 0%, 
    0% calc(100% - 13.5vw), 
    10%  calc(100% - 13vw),
    20%  calc(100% - 11.5vw),
    30%  calc(100% - 9vw),
    50%  calc(100% - 3vw),
    60%  calc(100% - 1vw),
    70%  calc(100% - 0vw),
    80%  calc(100% - 1vw),
    90%  calc(100% - 3vw),
    100%  calc(100% - 6vw),
    100% 0%);

      .yellow-style {
        width: 400%;
        transform: translate(57%, 78%);
      }
      .ppl {
        z-index: 8;
    right: -52%;
    left: auto;
    width: auto;
      }

      .title {
        width: 100%;
        .logo {
          width: 70vw;
        }
        p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.42;
        }
      }

      .w1 {
        width: 70vw;
        z-index: 7;
        bottom: -30vw;
      }
      .w2 {
        width: 50vw;
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
import "jquery.ripples";

export default {
  name: "section1",

  data() {
    return {
      isMobile,
    };
  },

  methods: {
    introSlideOut() {
      setTimeout(() => {
        $(".intro .yellow-style").addClass("inactive");
        setTimeout(() => {
          $(".intro").addClass("fadeOut");

          setTimeout(() => {
            $(".intro").remove();

            if (!isMobile) {
              $(".after-intro").ripples({
                resolution: !isMobile ? 1024 : 512,
                dropRadius: 30,
              });
            }
          }, 2000);
        }, 1000);
      }, 5000);
    },
  },

  mounted() {
    this.introSlideOut();
  },

  created() {},
};
</script>
