<template>
  <div class="section7">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s7/bg.jpg" alt class="img" />
        <img src="./s7/bg2.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s7/stitlea.png" alt="頤昌建築自主建築履歷 工程安全最放心" class="img" />
        <img src="./s7/titlea.png" alt="六項履歷" class="img" />
        <div class="text">鋼筋綁紮、鋼筋續接、混凝土生產履歷、防水工程等六大細節全部按進度紀錄</div>
      </div>
      <div v-if="isMobile">
        <img src="./s7/mo/bg.jpg" alt class="img" />
        <img src="./s7/mo/bg2.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s7/mo/lineba.png" class="img" alt />
        <img src="./s7/mo/stitlea.png" alt="頤昌建築自主建築履歷 工程安全最放心" class="img" />
        <img src="./s7/mo/titlea.png" alt="六項履歷" class="img" />
        <div class="text">鋼筋綁紮、鋼筋續接、混凝土生產履歷、防水工程等六大細節全部按進度紀錄</div>
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
  color: #666;
  right: calc(100vw * 254 / 1920);
  top: calc(100vw * 574 / 1920);
  position: absolute;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .text {
    width: calc(100vw * 850 / 1920);
    right: calc(100vw * 142 / 1920);
  }
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg1.jpg');
  }

  .text {
    width: calc(100vw * 330 / 375);
    height: auto;
    font-size: calc(100vw * 12 / 375);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: 0.72px;
    text-align: left;
    color: #666;
    top: auto;
    left: calc(100vw * 19 / 375);
    bottom: calc(100vw * 35 / 375);
  }

  .img {
    &:nth-child(1) {
      position: relative;
      height: calc(100vw * 478 / 375);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section7',

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
