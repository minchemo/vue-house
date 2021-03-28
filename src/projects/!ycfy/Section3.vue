<template>
  <div class="section3">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s3/img.png" alt class="img" style="padding-top: 260px;" data-aos="fade" data-aos-delay="400" />
        <img src="./s3/stitlew.png" alt="國際金獎團隊 九大全齡公設" class="img" style="padding-top: 260px;"/>
        <img src="./s3/titlew.png" alt="美感" class="img" style="padding-top: 260px;" />
        <div class="text">
            榮獲世界紅點、iF設計大獎的團隊，規劃9大完美公設<br />
            兼具東方美感與實用空間的氣韻，打造生活細緻溫度
        </div>
      </div>
      <div v-if="isMobile">
        <img src="./s3/mo/img.png" alt class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s3/mo/stitlew.png" alt="國際金獎團隊 九大全齡公設" class="img" />
        <img src="./s3/mo/titlew.png" alt="美感" class="img" />
        <div class="text">
            榮獲世界紅點、iF設計大獎的團隊，規劃9大完美公設<br />
            兼具東方美感與實用空間的氣韻，打造生活細緻溫度
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url('./s1/bg.jpg');
  background-size: cover;
  position: relative;
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
  width: calc(100vw * (678 / 1920));
  height: calc(100vw * (86 / 1920));
  font-size: calc(100vw * (28 / 1920));
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: justify;
  color: #000000;
  position: absolute;
  left: 26%;
  right: 0;
  margin: 0 auto;
  top: 89%;
  transform: translateY(-50%);
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .text {
    width: calc(100vw * (216 / 375));
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
    top: 74%;
    transform: translateY(-50%);
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

  computed: {
  },

  methods: {},

  created() {},
  mounted() {
  },
}
</script>
