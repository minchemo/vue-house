<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s2/bg.jpg" alt class="img" />
        <img src="./s2/bg2.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s2/bg3.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s2/bg4.png" alt class="img" data-aos="fade" data-aos-delay="600" />
        <img src="./s2/bg5.png" alt class="img" data-aos="fade" data-aos-delay="800" />
        <img src="./s2/stitlea.png" alt="頤昌建築  最懂家的需求" class="img" />
        <img src="./s2/texta.png" alt="豐/美/生/活  展/闊/之/岳" class="img" />
        <img src="./s2/titlea.png" alt="一本初心" class="img" />
        <div class="text">
          回歸建築初衷，家的本我需求
          <br />慎選每塊土地，細膩規劃每處空間，嚴格要求工程細節
          <br />只為珍惜每位住戶對於【頤昌】品牌的信任價值。
        </div>
      </div>
      <div v-if="isMobile">
        <img src="./s2/mo/bg.jpg" alt class="img" />
        <img src="./s2/mo/bg2a.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s2/mo/stitlea.png" alt="頤昌建築  最懂家的需求" class="img" />
        <img src="./s2/mo/texta.png" alt="豐/美/生/活  展/闊/之/岳" class="img" />
        <img src="./s2/mo/titlea.png" alt="一本初心" class="img" />
        <div class="text">
          回歸建築初衷，家的本我需求
          <br />慎選每塊土地，細膩規劃每處空間，嚴格要求工程細節
          <br />只為珍惜每位住戶對於【頤昌】品牌的信任價值。
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  z-index: 2;
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
  width: calc(100vw * 525 / 1920);
  height: calc(100vw * 120 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #707070;
  position: absolute;
  right: calc(100vw * 272 / 1920);
  top: calc(100vw * 367 / 1920);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 595 / 1920);
    right: calc(100vw * 202 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: 90vw;
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #707070;
    position: absolute;
    right: auto;
    left: calc(100vw * 19 / 375);
    top: calc(100vw * 144 / 375);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section2',

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
