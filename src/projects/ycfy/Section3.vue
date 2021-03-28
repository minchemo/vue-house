<template>
  <div class="section3">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s3/bg.jpg" alt class="img" />
        <img src="./s3/bg1.png" alt class="img" />
        <img src="./s3/bg2.png" alt class="img" data-aos="fade-up" data-aos-delay="200" />
        <img src="./s3/bg3.png" alt class="img" data-aos="fade-up" data-aos-delay="400" />
        <img src="./s3/linew1.png" alt class="img" />
        <img src="./s3/stitle1.png" alt="國道雙匝道系統 機場捷運並肩國門" class="img" />
        <img src="./s3/titile1.png" alt="二快交通" class="img" />
        <div class="text">中山高速公路／林口交流道，連結南北奔馳；桃園機場捷運23分鐘，迅速直達台北都心</div>
      </div>
      <div v-if="isMobile">
        <img src="./s3/mo/bg.jpg" alt class="img" />
        <img src="./s3/mo/bg2.png" alt class="img" data-aos="fade-up" data-aos-delay="200" />
        <img src="./s3/mo/bg3a.png" alt class="img" data-aos="fade-up" data-aos-delay="400" />
        <img src="./s3/mo/linewa.png" alt class="img" />
        <img src="./s3/mo/stitlea.png" alt="國道雙匝道系統 機場捷運並肩國門" class="img" />
        <img src="./s3/mo/titlea.png" alt="二快交通" class="img" />
        <div class="text">
          中山高速公路／林口交流道，連結南北奔馳；<br />桃園機場捷運23分鐘，迅速直達台北都心
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
  width: calc(100vw * 838 / 1920);
  font-size: calc(100vw * 20 / 1920);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 1.2px;
  text-align: left;
  color: #ffffff;
  right: calc(100vw * 228 / 1920);
  top: calc(100vw * 448 / 1920);
  position: absolute;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 950 / 1920);
    right: calc(100vw * 232 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: calc(100vw * 254 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #ffffff;
    left: calc(100vw * 23 / 375);
    top: calc(100vw * 201 / 375);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section3',

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
