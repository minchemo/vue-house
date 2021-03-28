<template>
  <div class="section1">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s1/g1.png" alt class="img girl1" data-aos="fade" data-aos-delay="1000" />
        <img src="./s1/g2.png" alt class="img girl2" data-aos="fade" data-aos-delay="1000" />
        <img src="./s1/l.png" alt class="img" data-aos="fade" data-aos-delay="1200" data-aos-duration="500" />
        <img src="./s1/logo.png" alt="友文化" class="img" data-aos="fade-right" data-aos-delay="1000" />
        <img src="./s1/t1.png" alt="友文化" class="img" data-aos="fade-down" data-aos-delay="400" />
        <img src="./s1/t2.png" alt="最美文藝建案" class="img" data-aos="fade-down" data-aos-delay="600" />
        <img src="./s1/t3.png" alt="商圈機能X學區X萬坪公園X醫療機能  得天獨厚絕佳位置" class="img" data-aos="fade-right" data-aos-delay="1200" />
        <img src="./s1/t4.png" alt="簽訂28萬起  輕鬆成家" class="img" data-aos="fade-right" data-aos-delay="1400" />
      </div>
      <div v-if="isMobile">
        <img src="./s1/mo/g1.png" alt class="img girl1" data-aos="fade" data-aos-delay="1000" />
        <img src="./s1/mo/g2.png" alt class="img girl2" data-aos="fade" data-aos-delay="1000" />
        <img src="./s1/mo/l.png" alt class="img" data-aos="fade" data-aos-delay="1200" data-aos-duration="500" />
        <img src="./s1/mo/logo.png" alt="友文化" class="img" data-aos="fade-right" data-aos-delay="1000" />
        <img src="./s1/mo/t1.png" alt="友文化" class="img" data-aos="fade-down" data-aos-delay="400" />
        <img src="./s1/mo/t2.png" alt="最美文藝建案" class="img" data-aos="fade-down" data-aos-delay="600" />
        <img src="./s1/mo/t3.png" alt="商圈機能X學區X萬坪公園X醫療機能 得天獨厚絕佳位置" class="img" data-aos="fade-right" data-aos-delay="1200" />
        <img src="./s1/mo/t4.png" alt="簽訂28萬起 輕鬆成家" class="img" data-aos="fade-right" data-aos-delay="1400" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
}

.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;

  &.girl1 {
    width: 100vw;
    position: relative;
  }
}

.girl2 {
  animation: girl 2s linear 2s infinite;
}

@keyframes girl {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { TweenLite } from 'gsap'
export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      tweenedNumber: 0,
    }
  },

  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0)
    },
  },

  methods: {},

  created() {},
  mounted() {
    document.addEventListener('aos:in:ani-number', ({ detail }) => {
      TweenLite.to(this.$data, 1.2, { tweenedNumber: 75 })
    })
  },
}
</script>
