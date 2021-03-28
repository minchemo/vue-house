<template>
  <div class="section9">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s11/bg.jpg" alt class="img" />
        <img src="./s11/bg2.png" class="img" data-aos="fade-up" data-aos-delay="200" />
        <img src="./s11/stitlea.png" alt="你顧家保固我加 自信承諾防水升級" class="img" />
        <img src="./s11/titlea.png" alt="十年保固" class="img" />
        <div class="text">頤昌建築秉持匠人精神，工程細節嚴謹細膩，主張業界少見十年防水加碼保固</div>
      </div>
      <div v-if="isMobile">
        <img src="./s11/mo/bg.jpg" alt class="img" />
        <img src="./s11/mo/bg2.png" class="img" data-aos="fade-up" data-aos-delay="200" />
        <img src="./s11/mo/stitlea.png" alt="你顧家保固我加 自信承諾防水升級" class="img" />
        <img src="./s11/mo/titlea.png" alt="十年保固" class="img" />
        <div class="text">頤昌建築秉持匠人精神，工程細節嚴謹細膩，<br />主張業界少見十年防水加碼保固</div>
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
  width: calc(100vw * 745 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #fff;
  right: calc(100vw * 260 / 1920);
  top: calc(100vw * 469 / 1920);
  position: absolute;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 850 / 1920);
    right: calc(100vw * 232 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: calc(100vw * 264 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #fff;
    left: calc(100vw * 38 / 375);
    top: calc(100vw * 220 / 375);
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
