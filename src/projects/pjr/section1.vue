<template>
  <div class="section1">
    <div class="intro">
      <div class="i1" data-aos="fade-down" data-aos-delay="1000">
        中山北路 盼到璞真
      </div>
      <div class="i2" data-aos="fade" data-aos-duration="2000">
        <img
          :temp="require('@/projects/pjr/s1/logo.svg')"
          v-lazy
          alt=""
          srcset=""
        />
      </div>
      <div
        class="i3"
        ref="en"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="600"
      >
        <span>Z</span>
        <span>h</span>
        <span>o</span>
        <span>n</span>
        <span>g</span>
        <span>s</span>
        <span>h</span>
        <span>a</span>
        <span>n</span>
        <span>&ensp;</span>
        <span>A</span>
        <span>r</span>
        <span>t</span>
        <span>&ensp;</span>
        <span>M</span>
        <span>a</span>
        <span>n</span>
        <span>s</span>
        <span>i</span>
        <span>o</span>
        <span>n</span>
      </div>
      <div class="i4" data-aos="fade-up" data-aos-delay="1200">
        61-89坪<span v-if="!isMobile">│</span
        ><span else>&nbsp;</span>中山北路首排
        <template>
          <span v-if="!isMobile">│</span>
          <br v-else />
        </template>
        香港P&T<span v-if="!isMobile">│</span
        ><span else>&nbsp;</span>23層樹海地標
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section1 {
  min-height: 100vh;
  background-color: rgba($color: #231815, $alpha: 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../pjr/s1/bg.jpg");
  background-size: cover;
  .intro {
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    .i1 {
      font-size: size(65.5);
      font-weight: 500;
      letter-spacing: size(5);
    }
    .i2 {
      margin-top: size(40);
      width: size(454);
      img {
        width: 100%;
      }
    }
    .i3 {
      margin-top: size(5);
      font-family: "Noto Serif TC";
      font-size: size(38);
      font-weight: 100;
      span {
        &.flicking {
          animation: flicking 2s;
        }
      }

      @keyframes flicking {
        from {
          opacity: 1;
        }
        to {
          opacity: 0.2;
        }
      }
    }
    .i4 {
      margin-top: size(40);
      font-size: size(36);
      letter-spacing: size(5);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    min-height: 100vh;
    background-color: rgba($color: #231815, $alpha: 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../pjr/s1/bg.jpg");
    background-size: cover;
    .intro {
      color: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      .i1 {
        font-size: size-m(26);
        font-weight: 500;
        letter-spacing: size(5);
      }
      .i2 {
        margin-top: size-m(40);
        width: size-m(119);
        img {
          width: 100%;
        }
      }
      .i3 {
        margin-top: size-m(5);
        font-family: "Noto Serif TC";
        font-size: size-m(1);
        font-weight: 100;
        transform: scale(0.5) !important;
        span {
          &.flicking {
            animation: flicking 2s;
          }
        }

        @keyframes flicking {
          from {
            opacity: 1;
          }
          to {
            opacity: 0.2;
          }
        }
      }
      .i4 {
        margin-top: size-m(40);
        font-size: size-m(23);
        line-height: 1.5;
        letter-spacing: size-m(2);
        text-align: center;
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile
    }
  },

  methods: {
    getRandom(arr, n) {
      var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
      if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      return result;
    },
    setAnimateToEn() {
      const target = this.$refs.en.querySelectorAll('span');

      let random = this.getRandom(target, 5);

      random.forEach((element, i) => {
        setTimeout(() => {
          element.classList.remove('flicking');
          element.classList.add('flicking');
        }, i * 500);

      });
    }
  },

  mounted() {
    let interval;
    interval = setInterval(() => {
      this.setAnimateToEn()
    }, 1000);

    setTimeout(() => {
      clearInterval(interval)
    }, 3000);
  },

  created() { },
}
</script>
