<template>
  <div class="section1">
    <div class="main">
      <img class="building-1" src="./s1/building-1.png" alt="" />
      <img
        class="building-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        src="./s1/building-2.png"
        alt=""
      />
      <img
        class="building-3"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        src="./s1/building-3.png"
        alt=""
      />
      <img
        class="train fadejs"
        data-aos="fade-left"
        data-aos-delay="1200"
        fadejs-data="opacity: 0.92"
        src="./s1/train.png"
        alt=""
      />
      <img
        class="tree"
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="1000"
        src="./s1/tree.png"
        alt=""
      />
      <img
        class="cloud"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="3000"
        src="./s1/cloud.png"
        alt=""
      />
      <img
        v-if="isMobile"
        class="cloud-2"
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="3000"
        src="./s1/cloud-2.png"
        alt=""
      />
      <img
        class="t1"
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-duration="1000"
        src="./s1/t1.png"
        alt=""
      />
      <img
        class="t2"
        data-aos="zoom-in"
        data-aos-delay="1600"
        data-aos-duration="1000"
        src="./s1/t2.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section1 {
  .main {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgb(196, 255, 237);
    background: linear-gradient(
      30deg,
      rgba(196, 255, 237, 1) 20%,
      rgba(41, 102, 255, 1) 100%
    );
    overflow: hidden;

    .t1 {
      z-index: 1;
      width: 32vh;
      position: absolute;
      top: 21vh;
      right: 39vh;
    }

    .t2 {
      z-index: 1;
      width: 72vh;
      position: absolute;
      top: 39vh;
      right: 19vh;
    }

    .building-1 {
      z-index: 0;
      width: 45vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .building-2 {
      z-index: 2;
      width: 18.5vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .building-3 {
      z-index: 1;
      width: 100vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .tree {
      z-index: 2;
      width: 44vw;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .cloud {
      z-index: 1;
      width: 60vw;
      position: absolute;
      right: 0;
      top: 15%;
      animation: cloud 8s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .train {
      z-index: 1;
      width: 45vw;
      position: absolute;
      right: 60%;
      bottom: 3vw;
      transform: all 0.3s;
      animation: train 7.5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    @keyframes train {
      0% {
        right: -60%;
      }
      65%,
      70% {
        right: 65%;
      }
      100% {
        right: 100%;
      }
    }

    @keyframes cloud {
      0% {
        right: 0%;
        top: 15%;
      }
      40% {
        right: 1%;
        top: 14%;
      }
      70% {
        right: 1%;
        top: 16%;
      }
      100% {
        top: 15%;
        right: 0%;
      }
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    .main {
      position: relative;
      width: 100vw;
      height: calc(100vh - 63px);

      .t1 {
        width: 20vh;
        top: 21vh;
        right: 50%;
        margin-right: -10vh;
      }

      .t2 {
        width: 80vw;
        top: 31vh;
        right: 50%;
        margin-right: -40vw;
      }

      .building-1 {
        width: 90vw;
        left: -18vw;
      }

      .building-2 {
        width: 39.5vw;
        left: -20vw;
      }

      .building-3 {
        width: 200vw;
      }

      .tree {
        width: 80vw;
        left: -12vw;
      }

      .cloud {
        width: 120vw;
      }

      .cloud-2 {
        z-index: 1;
        width: 22vw;
        position: absolute;
        right: 10%;
        bottom: 18%;
        animation: cloud-2 8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }

      .train {
        width: 90vw;
        bottom: 6.5vw;
        right: -80%;
      }

      @keyframes train {
        0% {
          right: -100%;
        }
        65%,
        70% {
          right: 45%;
        }
        100% {
          right: 150%;
        }
      }

      @keyframes cloud-2 {
        0% {
          bottom: 18%;
          right: 10%;
        }
        40% {
          bottom: 17%;
          right: 11%;
        }
        70% {
          bottom: 18%;
          right: 12%;
        }
        100% {
          bottom: 18%;
          right: 10%;
        }
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";

export default {
  name: "section1",

  data() {
    return {
      isMobile
    };
  },

  methods: {},

  created() {}
};
</script>
