<template>
  <div class="section8">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s8/bg.jpg" alt class="img" />
        <img src="./s8/img1a.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s8/img1aa.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s8/img2a.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s8/stitlea.png" alt="升級家的價值 軟硬體用心加分" class="img" />
        <img src="./s8/titlea.png" alt="七大精品" class="img" />
        <div class="text">世界級RAK磁磚、新型石膏磚隔間<br />停車位充電預留線槽、ATS不斷電...等七大精湛設備</div>
      </div>
      <div v-if="isMobile">
        <img src="./s8/mo/bg.jpg" alt class="img" />
        <img src="./s8/mo/img1aa.png" alt :class="`img ${activeIndex == 0 ? 'active' : 'hide'}`" />
        <img src="./s8/mo/img2a.png" alt :class="`img ${activeIndex == 1 ? 'active' : 'hide'}`" />
        <img src="./s8/mo/img1a.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s8/mo/stitlea.png" alt="升級家的價值 軟硬體用心加分" class="img" />
        <img src="./s8/mo/titlea.png" alt="七大精品" class="img" />
        <div class="text">世界級RAK磁磚、新型石膏磚隔間<br />停車位充電預留線槽、ATS不斷電...等七大精湛設備</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}

.text {
  width: calc(100vw * 500 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #666;
  right: calc(100vw * 730 / 1920);
  top: calc(100vw * 395 / 1920);
  position: absolute;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 600 / 1920);
    right: calc(100vw * 630 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: calc(100vw * 288 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #666;
    left: calc(100vw * 21 / 375);
    top: calc(100vw * 225 / 375);
  }

  .img {
    transition: all .5s;
    &:nth-child(1) {
      position: relative;
      // height: calc(100vw * 478 / 375);
    }

    &.hide {
      opacity: 0;
    }

    &.active {
      opacity: 1;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section8',

  data() {
    return {
      isMobile,
      activeIndex: 0
    }
  },

  computed: {},

  methods: {},

  created() {
    setInterval(() => {
      if (this.activeIndex === 0) {
        this.activeIndex = 1
      } else {
        this.activeIndex = 0
      }
    }, 3000)
  },
  mounted() {},
}
</script>
