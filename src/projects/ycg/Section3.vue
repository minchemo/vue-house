<template>
  <div class="section3">
    <div class="bg relative">
      <div class="box">
        <h3 class="title">訂簽75萬起，躍升置產族</h3>
        <div class="desc" v-if="!isMobile">
          人生重大成就解鎖!
          <span>悦成功助您輕鬆買房</span>
          <br />擁抱內湖科技園區、美式生活圈在身邊
          <br />機場、一高、捷運，一應俱全
          <br />從此不再向房東納厝稅!
        </div>
        <div class="desc" v-if="isMobile">
          人生重大成就解鎖!
          <br />
          <span>悦成功助您輕鬆買房</span>
          <br />擁抱內湖科技園區、美式生活圈在身邊
          <br />機場、一高、捷運，一應俱全
          <br />從此不再向房東納厝稅!
        </div>
        <img src="./s3/box1_img_s.png" alt class="gold" data-aos="sky-in" data-aos-duration="1000"  data-aos-delay="400" />
      </div>
      <div class="box">
        <h3 class="title">升格當房東，助自己邁向成功</h3>
        <div class="desc" v-if="!isMobile">
          訂簽75萬起、月付1.9萬起
          <br />一間自住、一間投資，天助”自住”
          <br />下一個人生勝利組就是你!
          <br />悄悄告訴你
          <br />悦成功
          <span>早鳥超優惠</span>條件更驚人!
        </div>
        <div class="desc" v-if="isMobile">
          訂簽75萬起、月付1.9萬起
          <br />一間自住、一間投資，天助”自住”
          <br />下一個人生勝利組就是你!
          <div class="right">
            悄悄告訴你
            <br />悦成功
            <span>早鳥超優惠</span>
            <br />條件更驚人!
          </div>
        </div>
        <img src="./s3/box2_img.png" alt class="girl" data-aos="fade-right" data-aos-duration="1000"  data-aos-delay="400" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  padding-top: calc(100vw * (220 / 1920));
}
.box {
  width: calc(100vw * (1530 / 1920));
  height: calc(100vw * (788 / 1920));
  margin: 0 auto;
  margin-bottom: 50px;
  position: relative;
  background-image: url('./s3/box.png');
  background-size: cover;
  padding: calc(100vw * (220 / 1920)) calc(100vw * (150 / 1920));
  margin-bottom: 300px;

  .title {
    width: calc(100vw * (1204 / 1920));
    height: calc(100vw * (441 / 1920));
    background-size: cover;
    font-size: calc(100vw * (60 / 1920));
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.22;
    letter-spacing: 6px;
    text-align: center;
    color: #ffffff;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: calc(100vw * (-220 / 1920));
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('./s3/title.png');
  }

  &:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 50px;
    // .title {
    //   top: -220px;
    // }

    .desc {
      width: calc(100vw * (700 / 1920));
      font-size: calc(100vw * (37 / 1920));

      span {
        font-size: calc(100vw * (46 / 1920));
      }
    }

    .girl {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }

  .desc {
    font-size: calc(100vw * (44 / 1920));
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.09;
    letter-spacing: 4.4px;
    text-align: left;
    color: #ffffff;
    span {
      font-size: calc(100vw * (60 / 1920));
      font-weight: bold;
      letter-spacing: 5.4px;
    }
  }

  .gold {
    position: absolute;
    right: 0;
    bottom: 0;
    width: calc(100vw * (559 / 1920));
  }
}

@media only screen and (max-width: 1440px) and (min-width: 1200px) {
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .box {
    width: 90vw;
    height: calc(90vw * (400 / 350));
    margin: 0 auto;
    margin-bottom: 50px;
    position: relative;
    background-image: url('./s3/box_mo.png');
    background-size: cover;
    padding: 90px 25px;

    .title {
      width: 350px;
      height: 120px;
      margin: 0 auto;
      font-size: 21px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.43;
      letter-spacing: 2.1px;
      text-align: center;
      color: #ffffff;

      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      // top: 50px;
    }

    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 40px 15px 0 25px;
      // .title {
      //   width: 100vw;
      // }

      .desc {
        width: 100%;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.8;
        letter-spacing: 1.6px;
        text-align: left;
        color: #ffffff;

        .right {
          font-size: 14px;
          margin-left: 40%;
          margin-top: 20px;
          white-space: nowrap;
        }

        span {
          font-size: 21px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.71;
          letter-spacing: 2.1px;
          text-align: left;
          color: #ffffff;
        }
      }

      .girl {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }

    .desc {
      width: 100%;
      font-size: 15px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.8;
      letter-spacing: 1.6px;
      text-align: left;
      color: #ffffff;
      span {
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 1.98px;
      }
    }

    .gold {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 200px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section3',
  mixins: [slider],

  data() {
    return {
      isMobile,
    }
  },

  methods: {},

  created() {},
}
</script>
