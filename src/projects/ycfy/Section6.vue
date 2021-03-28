<template>
  <div class="section6">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s6/bg.jpg" alt="" class="img">
        <img src="./s6/lineba.png" alt="" class="img">
        <img src="./s6/map.png" alt="" class="img" data-aos="fade" data-aos-delay="200">
        <img src="./s6/stitlea.png" alt="A7明日版圖 五大建設帶領崛起" class="img">
        <img src="./s6/titlea.png" alt="五大建設" class="img">
        <div class="text">樂善科技園區、郵政物流園區、工五工業區、華亞園區、文青中小學重大建設</div>
      </div>
      <div v-if="isMobile">
        <img src="./s6/mo/bg.jpg" alt="" class="img">
        <img src="./s6/mo/lineba.png" alt="" class="img">
        <img src="./s6/mo/map.png" alt="" class="img" data-aos="fade" data-aos-delay="200">
        <img src="./s6/mo/stitlea.png" alt="A7明日版圖   五大建設帶領崛起" class="img">
        <img src="./s6/mo/titlea.png" alt="五大建設" class="img">
        <div class="text">樂善科技園區、郵政物流園區、工五工業區、華亞園區、<br />文青中小學重大建設</div>
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
  width: calc(100vw * 750 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #666;
  right: calc(100vw * 164 / 1920);
  top: calc(100vw * 280 / 1920);
  position: absolute;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 850 / 1920);
    right: calc(100vw * 144 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: calc(100vw * 317 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #666;
    left: calc(100vw * 19 / 375);
    top: calc(100vw * 205 / 375);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section6',

  data() {
    return {
      isMobile,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
