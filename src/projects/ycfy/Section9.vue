<template>
  <div class="section9">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s9/bg.jpg" alt class="img" />
        <img src="./s9/titlea.png" alt="八年粉刷" class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s9/lineba.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s9/stitlea.png" alt="你顧妻我顧漆 首創室內粉刷保固服務" class="img" data-aos="fade" data-aos-delay="600" />
        <div class="text" data-aos="fade" data-aos-delay="800">住戶享有年度室內油漆粉刷復原服務，讓房子常保如新，給家最貼心的照顧</div>
      </div>
      <div v-if="isMobile">
        <img src="./s9/mo/bg.jpg" alt class="img" />
        <img src="./s9/mo/titlea.png" alt="八年粉刷" class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s9/mo/lineba.png" class="img" alt data-aos="fade" data-aos-delay="400" />
        <img src="./s9/mo/stitlea.png" alt="你顧妻我顧漆 首創室內粉刷保固服務" class="img" data-aos="fade" data-aos-delay="600" />
        <div class="text" data-aos="fade" data-aos-delay="800">住戶享有年度室內油漆粉刷復原服務，讓房子常保如新，<br />給家最貼心的照顧</div>
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
  width: calc(100vw * 720 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #666;
  right: calc(100vw * 674 / 1920);
  top: calc(100vw * 481 / 1920);
  position: absolute;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 820 / 1920);
    right: calc(100vw * 600 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: calc(100vw * 320 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #666;
    left: calc(100vw * 38 / 375);
    top: calc(100vw * 230 / 375);
  }

  .img {
    &:nth-child(1) {
      position: relative;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section9',

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
