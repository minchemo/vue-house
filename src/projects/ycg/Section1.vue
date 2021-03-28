<template>
  <div class="section1">
    <div class="bg relative">
      <img
        src="./s1/bg1.jpg"
        alt
        class="bg-img"
        v-if="!isMobile"
        data-aos="fade"
        data-aos-delay="0"
      />
      <img
        src="./s1/bg1_b.png"
        alt
        class="bg-img"
        v-if="!isMobile"
        data-aos="fade"
        data-aos-delay="0"
      />
      <img
        src="./s1/mobg1.jpg"
        alt
        class="bg-img"
        v-if="isMobile"
        data-aos="fade"
        data-aos-delay="0"
      />
      <img
        src="./s1/mobg1_b.png"
        alt
        class="bg-img"
        v-if="isMobile"
        data-aos="fade"
        data-aos-delay="0"
      />
      <div class="content absolute-c">
        <div class="title flex-jb flex-ac" data-aos="fade-down" data-aos-delay="300">
          <h3>成功買好房</h3>
          <h3>掌握3大要訣</h3>
        </div>
        <div class="subtitle flex-jb flex-ac">
          <div class="item relative flex-jb flex-ac" data-aos="fade" data-aos-delay="400">
            <img src="./s1/light.png" alt class="light" />
            <img src="./s1/diamond.png" alt class="diamond" />
            <div>地點</div>
          </div>
          <div class="item relative flex-jb flex-ac" data-aos="fade" data-aos-delay="600">
            <img src="./s1/light.png" alt class="light" />
            <img src="./s1/diamond.png" alt class="diamond" />
            <div>機能</div>
          </div>
          <div class="item relative flex-jb flex-ac" data-aos="fade" data-aos-delay="800">
            <img src="./s1/light.png" alt class="light" />
            <img src="./s1/diamond.png" alt class="diamond" />
            <div>增值潛力</div>
          </div>
        </div>
        <div
          class="desc flex-jb flex-ac"
          data-aos-id="ani-number"
          data-aos-duration="500"
          data-aos="fade"
        >
          <img data-aos="fade" data-aos-delay="1000" src="./s1/logo.png" alt class="logo" />
          <div class="sub">
            <div data-aos="fade" data-aos-delay="1200">投資觀點X自住享受</div>
            <div class="yellow">訂簽{{animatedNumber}}萬起!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
}

@keyframes lighten {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fullscreen {
  overflow: visible !important;
}

.bg-img {
  width: 100vw;
  display: block;
}

.content {
  width: 900px;
  top: 25vw;
  .title,
  .subtitle,
  .desc {
    margin-bottom: 30px;
  }
  .title {
    h3 {
      font-size: 65px;
      font-weight: 900;
      line-height: 1.2;
      letter-spacing: 13px;
      text-align: left;
      color: #ffffff;
    }
  }

  .subtitle {
    .diamond {
      width: 101px;
      margin-right: 5px;
      margin-top: -15px;
    }

    .item {
      font-size: 59px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.2;
      letter-spacing: normal;
      text-align: left;
      color: #ffffff;

      &:nth-child(1) {
        .light {
          animation: lighten 2s ease-in-out 0s infinite;
        }
      }

      &:nth-child(2) {
        .light {
          animation: lighten 2s ease-in-out 0.8s infinite;
        }
      }

      &:nth-child(3) {
        .light {
          animation: lighten 2s ease-in-out 1.6s infinite;
        }
      }
    }

    .light {
      position: absolute;
      top: -30px;
      left: -13px;
    }
  }

  .desc {
    .logo {
    }

    .sub {
      font-size: 46px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: 4.6px;
      text-align: left;
      color: #ffffff;
    }
    .yellow {
      font-size: 67px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.3;
      letter-spacing: 10.05px;
      text-align: left;
      color: #ffda43;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .content {
    width: 900px;
    top: 23vw;
    .title,
    .subtitle,
    .desc {
      margin-bottom: 30px;
    }
    .title {
      h3 {
        font-size: 55px;
        font-weight: 900;
        line-height: 1.2;
        letter-spacing: 13px;
        text-align: left;
        color: #ffffff;
      }
    }

    .subtitle {
      .diamond {
        width: 95px;
        margin-right: 5px;
        margin-top: -15px;
      }

      .item {
        font-size: 49px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;

        &:nth-child(1) {
          .light {
            animation: lighten 2s ease-in-out 0s infinite;
          }
        }

        &:nth-child(2) {
          .light {
            animation: lighten 2s ease-in-out 0.8s infinite;
          }
        }

        &:nth-child(3) {
          .light {
            animation: lighten 2s ease-in-out 1.6s infinite;
          }
        }
      }

      .light {
        position: absolute;
        top: -30px;
        left: -13px;
      }
    }

    .desc {
      h3 {
        font-size: 95px;
        font-weight: 900;
        line-height: 1.2;
        letter-spacing: 13px;
        text-align: left;
        color: #ffffff;
      }

      .sub {
        font-size: 36px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: 4.6px;
        text-align: left;
        color: #ffffff;
      }
      .yellow {
        font-size: 57px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.3;
        letter-spacing: 10.05px;
        text-align: left;
        color: #ffda43;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .content {
    width: 100vw;
    top: 10vh;
    transform: none !important;
    .title,
    .subtitle,
    .desc {
      margin-bottom: 0px;
    }
    .title {
      flex-wrap: wrap;
      h3 {
        width: 100%;
        font-size: 39px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.03;
        letter-spacing: 7.8px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 15px;
      }
    }

    .subtitle {
      width: 100vw;
      margin-top: 20px;
      .diamond {
        width: 55px;
        margin-right: 5px;
        margin-top: -15px;
      }

      .item {
        font-size: 28px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.21;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        flex-wrap: wrap;
        justify-content: center;

        &:nth-child(1) {
          .light {
            animation: lighten 2s ease-in-out 0s infinite;
            top: 0px;
            left: 20px;
          }
        }

        &:nth-child(2) {
          .light {
            animation: lighten 2s ease-in-out 0.8s infinite;
            left: 30px;
          }
        }

        &:nth-child(3) {
          .light {
            animation: lighten 2s ease-in-out 1.6s infinite;
            left: 50px;
          }
        }
      }

      .light {
        width: 45px;
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }

    .desc {
      flex-wrap: wrap;
      .logo {
        width: 70vw;
        margin: 40px auto 10px;
      }

      .sub {
        font-size: 23px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.17;
        letter-spacing: 2.3px;
        text-align: center;
        color: #ffffff;
        margin: 0 auto;
        margin-top: 15px;
      }
      .yellow {
        font-size: 33px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.52;
        letter-spacing: 5.61px;
        text-align: center;
        color: #ffda43;
        margin-top: 15px;
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { TweenLite } from 'gsap'
export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      tweenedNumber: 0,
    }
  },

  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0)
    },
  },

  methods: {},

  created() {},
  mounted() {
    document.addEventListener('aos:in:ani-number', ({ detail }) => {
      TweenLite.to(this.$data, 1.2, { tweenedNumber: 75 })
    })
  },
}
</script>
