<template>
  <div class="section2">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s2/bg.jpg" alt class="img" />
        <img src="./s2/img.png" alt class="img" data-aos="fade" data-aos-delay="600" style="margin-top: 260px;" />
        <img src="./s2/stitlew.png" alt="全結構工程 十年防水保固" class="img" />
        <img src="./s2/t_bg1.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s2/titlew.png" alt="堅持" class="img" />
        <div class="text">
            【頤昌建設】從規劃到施工秉持職人精神<br />
            因此跟大林口地區的客戶拍胸保證<br />
            安全結構 Alfa-Safe專利工法、10年防水<br />
            工程品質絕對沒問題！
        </div>
      </div>
      <div v-if="isMobile">
        <img src="./s2/mo/img.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s2/mo/stitlew.png" alt="全結構工程 十年防水保固" class="img" />
        <img src="./s2/mo/t_bg1.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s2/mo/titlew.png" alt="堅持" class="img" />
        <div class="text">
            【頤昌建設】從規劃到施工秉持職人精神<br />
            因此跟大林口地區的客戶拍胸保證<br />
            安全結構 Alfa-Safe專利工法、10年防水<br />
            工程品質絕對沒問題！
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
  margin: 0 120px 0 0;
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
  width: calc(100vw * (522 / 1920));
  height: calc(100vw * (172 / 1920));
  font-size: calc(100vw * (29 / 1920));
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: justify;
  color: #000000;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 100%;
  transform: translateY(-50%);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    background-image: url('./s1/bg.jpg');
  margin: 0;
  }

  .text {
    width: calc(100vw * (262 / 375));
    height: calc(100vw * (80 / 375));
    font-size: calc(100vw * (14 / 375));
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: justify;
    color: #000000;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
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

  computed: {
  },

  methods: {},

  created() {},
  mounted() {
  },
}
</script>
