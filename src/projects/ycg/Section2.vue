<template>
  <div class="section2">
    <div class="bg fullscreen relative">
      <div class="container" v-if="!isMobile">
        <div class="item">
          <img src="./s2/1.png" alt />
          <h3 class="title">感覺對了，就放手大賺一筆</h3>
        </div>
        <div class="item">
          <img src="./s2/2.png" alt />
          <h3 class="title">鴻運當頭時，連喝水都能賺！</h3>
        </div>
        <div class="item">
          <img src="./s2/3.png" alt />
          <h3 class="title">一兼二顧、又賺又拿別客氣！</h3>
        </div>
      </div>
      <div class="container" v-if="isMobile">
        <div class="item" data-aos="zoom-out-left" data-aos-duration="600"  data-aos-delay="0">
          <img src="./s2/1.png" alt />
          <h3 class="title">感覺對了，就放手大賺一筆</h3>
        </div>
        <div class="item" data-aos="zoom-out-right" data-aos-duration="600"  data-aos-delay="400">
          <img src="./s2/2.png" alt />
          <h3 class="title">鴻運當頭時，連喝水都能賺！</h3>
        </div>
        <div class="item" data-aos="zoom-out-left" data-aos-duration="600"  data-aos-delay="800">
          <img src="./s2/3.png" alt />
          <h3 class="title">一兼二顧、又賺又拿別客氣！</h3>
        </div>
      </div>
      <div class="hint" v-if="!isMobile">＊預約賞屋＊ 鑽石筆X鑽石杯X全家禮卷兩佰元 送完為止!</div>
      <div class="hint" v-if="isMobile">
        ＊預約賞屋＊
        <br />鑽石筆X鑽石杯X全家禮卷兩佰元 送完為止!
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  position: relative;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 40px;
}

.fullscreen {
  overflow: visible;
}

.item {
  width: calc(100vw * (625 / 1920));
  height: calc(100vw * (625 / 1920));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url('./s2/prize.png');
  background-size: cover;
  transition: all .2s;

  &:hover {
    img {
      transform: translateY(-10px);
    }
  }

  &:nth-child(1) {
    margin-top: -100px;
    img {
      width: calc(100vw * (625 / 1920));
    }
  }

  &:nth-child(2) {
    margin-top: 50px;
    img {
      width: calc(100vw * (625 / 1920));
    }
  }

  &:nth-child(3) {
    margin-top: -100px;
    img {
      width: calc(100vw * (625 / 1920));
    }
  }

  .title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(100vw * (80 / 1920));
    margin: 0 auto;
    font-size: calc(100vw * (29 / 1920));
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.17;
    letter-spacing: 2.9px;
    text-align: center;
    color: #ffffff;
  }
}

.hint {
  font-size: 26px;
  line-height: 3.46;
  letter-spacing: 2.6px;
  text-align: center;
  color: #d65b00;
  margin: 0 auto;
  margin-bottom: 30px;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .fullscreen {
    height: auto !important;
  }
  .item {
    width: 285px;
    height: 285px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    background-image: url('./s2/prize.png');
    background-size: cover;

    &:nth-child(1) {
      margin-top: 0px;
      img {
        width: 285px;
      }
    }

    &:nth-child(2) {
      margin-top: 40px;
      img {
        width: 285px;
      }
    }

    &:nth-child(3) {
      margin-top: 40px;
      img {
        width: 285px;
      }
    }

    .title {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 38px;
      margin: 0 auto;
      font-size: 15px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.17;
      letter-spacing: 1.5px;
      text-align: center;
      color: #ffffff;
    }
  }

  .hint {
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: 1.5px;
    text-align: center;
    color: #d65b00;
    margin-top: -30px;
    margin-bottom: 40px;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import slider from '@/mixins/slider.js'
export default {
  name: 'section2',
  mixins: [slider],

  components: {},

  data() {
    return {
      isMobile,
    }
  },

  methods: {},
}
</script>
