<template>
  <div class="section4">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s4/img.jpg" alt class="img mix" />
        <img src="./s4/t_bg.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s4/stitlew.png" alt="貼心暖服務 八年室內粉刷" class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s4/titlew.png" alt="久安" class="img" />
        <div class="text">
          從硬功夫到軟身段，頤昌建設貼心提供8年室內粉刷服務<br />
          常保室內空間如新，提升居家價值，讓家永遠都像新買的一樣
        </div>
      </div>
      <div v-if="isMobile">
        <img src="./s4/mo/img.jpg" alt class="img mix" />
        <img src="./s4/mo/t_bg.png" alt class="img" data-aos="fade" data-aos-delay="200" />
        <img src="./s4/mo/stitlew.png" alt="貼心暖服務 八年室內粉刷" class="img" data-aos="fade" data-aos-delay="400" />
        <img src="./s4/mo/titlew.png" alt="久安" class="img" />
        <div class="text">
          從硬功夫到軟身段，頤昌建設貼心提供8年室內粉刷服務<br />
          常保室內空間如新，提升居家價值，讓家永遠都像新買的一樣
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

  &.mix {
    mix-blend-mode: multiply;
  }

  &.fix {
    position: fixed;
  }
  &:nth-child(1) {
    position: relative;
  }
}

.text {
  width: calc(100vw * (783 / 1920));
  height: calc(100vw * (86 / 1920));
  font-size: calc(100vw * (29 / 1920));
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: justify;
  color: #000000;
  position: absolute;
  left: -5%;
  right: 0;
  margin: 0 auto;
  top: 50%;
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
    width: calc(100vw * (226 / 375));
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
    left: -10%;
    right: 0;
    margin: 0 auto;
    top: 55%;
    transform: translateY(-50%);
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
export default {
  name: 'section4',

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
