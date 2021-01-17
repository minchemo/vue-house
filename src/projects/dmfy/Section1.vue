<template>
  <div class="relative">
    <div class="section1 relative">
      <div v-if="!isMobile">
        <div class="absolute decor decor-1" data-aos="fade-down">
          <img src="./decor/decor-a.png" alt="" srcset="" />
        </div>
        <div class="absolute decor decor-2" data-aos="fade-down">
          <img src="./decor/decor-b.png" alt="" srcset="" />
        </div>
        <div class="absolute decor decor-3" data-aos="fade-down">
          <img src="./decor/decor-c.png" alt="" srcset="" />
        </div>
        <div class="intro relative">
          <div data-aos="fade-up">
            <img src="./s1/t1.png" alt="" />
          </div>
          <div data-aos="fade-down">
            <img src="./s1/t.png" alt="達欣|東門馥寓" />
          </div>
          <div data-aos="fade-down" class="relative">
            <img src="./s1/subtitle.png" alt="" />
            <div data-aos="fade-up" class="order-btn">
              立即預約
            </div>
          </div>
          <div class="scroll" data-aos="fade-down" data-aos-delay="800">
            <span></span>
          </div>
        </div>
      </div>
      <div v-if="isMobile">
        <div class="intro relative">
          <div data-aos="fade-down">
            <img src="./mo/1/1.png" alt="達欣|東門馥寓" />
          </div>
          <div class="relative" data-aos="fade-up">
            <img src="./mo/1/2.png" alt="" />
            <div class="order-btn" data-aos="fade-down" data-aos-delay="400">
              立即預約
            </div>
          </div>
          <div class="bg"></div>
        </div>
      </div>

      <div class="desc">
        <p>
          <span data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500"
            >台北城東門町</span
          ><br />
          <span data-aos="fade-up" data-aos-delay="600" data-aos-duration="1500"
            >走過世紀榮耀</span
          ><br />
          <span
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1500"
            >釀藏百年城粹</span
          ><br />
          <span
            data-aos="fade-up"
            data-aos-delay="1400"
            data-aos-duration="1500"
            >居餘香　新況味</span
          ><br />
          <span
            data-aos="fade-up"
            data-aos-delay="1800"
            data-aos-duration="1500"
            >首善核心最珍席</span
          ><br />
          <span
            data-aos="fade-up"
            data-aos-delay="2200"
            data-aos-duration="1500"
            >家傳富域　馥寓傳家</span
          >
        </p>
      </div>

      <div
        v-if="!isMobile"
        class="s1-logo"
        data-aos="fade-up"
        data-aos-delay="1500"
        data-aos-duration="800"
      >
        <img src="./s1/logo.png" alt="" />
      </div>

      <div v-if="!isMobile" class="divider"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/style/variableColor.scss";
@import "src/assets/style/variableDefault.scss";

.section1 {
  .decor-1 {
    width: 47vw;
    top: 28vh;
    left: -9vw;
    animation: decor-rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    img {
      width: 100%;
    }
  }
  .decor-2 {
    width: 33vw;
    top: 88vh;
    left: -11vw;
    animation: decor-rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
    animation-timing-function: ease-in-out;

    img {
      width: 100%;
    }
  }
  .decor-3 {
    width: 30vw;
    bottom: 0;
    right: -4vw;
    animation: decor-rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    img {
      width: 100%;
    }
  }
  .intro {
    height: 100vh;
    width: 70%;
    padding-top: 80px;
    margin: 0 auto;
    align-items: flex-end;
    justify-content: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

    > div > img {
      transform: scale(0.8);
      transform-origin: right;
    }

    .order-btn {
      position: absolute;
      border: $order_input_border;
      color: $order_input_label_color;
      font-size: 1.5em;
      right: 0;
      bottom: 35px;
      width: 150px;
      height: 40px;
      line-height: 40px;
      font-weight: 500;
      transition: all 0.3s;
      z-index: 1;

      &:hover {
        cursor: pointer;
        background: $order_input_label_color;
        color: #fff;
      }
    }

    .scroll {
      width: 1px;
      background: #c18c68;
      height: 180px;
      position: absolute;
      left: 50%;
      bottom: -50px;

      span {
        position: absolute;
        width: 10px;
        height: 10px;
        border: solid 1px #c18c68;
        border-radius: 100%;
        background: #fbfaf7;
        right: -5px;
        top: 20px;
        animation-name: scroll-here;
        animation-duration: 2s;
        animation-iteration-count: infinite;

        &::before {
          content: "Scroll";
          color: #c38f6c;
          display: inline-block;
          transform: rotate(90deg);
        }
      }
    }

    @keyframes scroll-here {
      0% {
        top: 0px;
      }
      100% {
        top: 180px;
      }
    }
  }

  .desc {
    padding: 20vh 0;
    p {
      font-family: "DFLiSongStd";
      writing-mode: vertical-rl;
      text-align: start;
      margin: 0 auto;
      letter-spacing: 8px;
      line-height: 2;
      font-size: 28px;
      font-weight: 600;
    }
  }
}

@media screen and (max-width: 767px) {
  .section1 {
    .intro {
      height: 100vh;
      width: 100vw;
      padding-top: 0;
      margin: 0 auto;
      -webkit-box-align: end;
      align-items: center;
      justify-content: space-evenly;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row-reverse;

      > div {
        img {
          transform: scale(1);
        }

        &:nth-child(1) > img {
          margin-top: -30vh;
        }
      }

      .order-btn {
        font-size: 1em;
        right: 0;
        bottom: 56px;
        width: 100px;
        height: 40px;
        line-height: 40px;

        &:hover {
          cursor: pointer;
          background: $order_input_label_color;
          color: #fff;
        }
      }

      .bg {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: url(.~@/projects/dmfy/mo/decor.png);
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
      }
    }

    .desc {
      p {
        font-size: 20px;
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile, isTablet } from "@/utils";

export default {
  name: "section1",

  data() {
    return {
      isMobile,
      isTablet
    };
  },

  methods: {},

  created() {},

  mounted() {},

  computed: {}
};
</script>
