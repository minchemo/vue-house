<template>
  <div class="section3">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s3/1.png" alt="網路預約賞屋" class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s3/2.png" alt="網路預約賞屋" class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s3/3.png" alt="來就抽7-11禮券!!" class="img" data-aos="extension" data-aos-delay="600" />
        <img src="./s3/4.png" alt="200元禮券" class="img move" data-aos="fade" data-aos-delay="800" />
        <img src="./s3/5.png" alt="300元禮券" class="img move" data-aos="fade" data-aos-delay="1000" />
        <img src="./s3/6.png" alt="300元禮券" class="img move" data-aos="fade" data-aos-delay="1100" />
        <img src="./s3/7.png" alt="500元禮券" class="img move" data-aos="fade" data-aos-delay="1200" />
        <img src="./s3/8.png" alt="500元禮券" class="img move" data-aos="fade" data-aos-delay="1300" />
        <img src="./s3/9.png" alt="500元禮券" class="img move" data-aos="fade" data-aos-delay="1400" />
        <img src="./s3/10.png" alt="500元禮券" class="img move" data-aos="fade" data-aos-delay="1400" />
      </div>
      <div v-if="isMobile">
        <img src="./s3/mo/1.png" alt="網路預約賞屋" class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s3/mo/2.png" alt="網路預約賞屋" class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s3/mo/3.png" alt="來就抽7-11禮券!!" class="img" data-aos="extension" data-aos-delay="600" />
        <img src="./s3/mo/4.png" alt="200元禮券" class="img move" data-aos="fade" data-aos-delay="800" />
        <img src="./s3/mo/5.png" alt="300元禮券" class="img move" data-aos="fade" data-aos-delay="1000" />
        <img src="./s3/mo/6.png" alt="300元禮券" class="img move" data-aos="fade" data-aos-delay="1100" />
        <img src="./s3/mo/7.png" alt="500元禮券" class="img move" data-aos="fade" data-aos-delay="1200" />
        <img src="./s3/mo/8.png" alt="500元禮券" class="img move" data-aos="fade" data-aos-delay="1300" />
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

  &:nth-child(1) {
    width: 100vw;
    margin-top: -20px;
    position: relative;
  }
}

[data-aos="extension"] {
  transform: scaleX(0);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: scaleX(1);
    opacity: 1;
  }
}

.move {
  animation: updown 1.5s .2s ease-in-out infinite alternate;
  &:nth-child(4) {
    animation: updown 1.5s .2s ease-in-out infinite alternate;
  }

  &:nth-child(5) {
    animation: updown 1.5s .5s ease-in-out infinite alternate;
  }

  &:nth-child(6) {
    animation: updown 1.5s .3s ease-in-out infinite alternate;
  }

  &:nth-child(7) {
    animation: updown 1.5s .7s ease-in-out infinite alternate;
  }

  &:nth-child(8) {
    animation: updown 1.5s 1s ease-in-out infinite alternate;
  }

  &:nth-child(9) {
    animation: updown 1.5s .4s ease-in-out infinite alternate;
  }
}

@keyframes updown {
  from {
    margin-top: -30px;
  }
  to {
    margin-top: 0px;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  @keyframes updown {
  from {
    margin-top: -20px;
  }
  to {
    margin-top: 0px;
  }
}
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { TweenLite } from 'gsap'
export default {
  name: 'section3',

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
