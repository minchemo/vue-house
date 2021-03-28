<template>
  <div class="section1">
    <div class="bg fullscreen">
      <div class="main">
        <div class="gear">
          <div class="l">
            <img src="./s1/gear1.png" alt="gear" class="gear1" />
            <img src="./s1/gear2.png" alt="gear" class="gear2" />
            <img src="./s1/gear3.png" alt="gear" class="gear3" />
          </div>
          <div class="s">
            <img src="./s1/gear1.png" alt="gear" class="gear4" />
            <img src="./s1/gear2.png" alt="gear" class="gear5" />
            <img src="./s1/gear3.png" alt="gear" class="gear6" />
          </div>
        </div>

        <img src="./s1/clock.png" alt="clock" class="clock" />
        <img src="./s1/logo.png" alt="logo" class="logo" />
        <img src="./s1/txt.png" alt="txt" class="txt" />

        <img src="./s1/light.png" alt="light" class="light" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #fff;
  background-size: cover;
  position: relative;
  overflow: hidden;
  position: relative;
}

.main {
  width: 100%;
  height: 100vh;
  display: block;
  background: url('./s1/bg.jpg') center center;
  background-size: cover;
}
.main > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.gear {
  position: absolute;
  top: 50%;
  left: 30%;
}
.gear img {
  animation: turn 10.5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
}
.gear .l {
  opacity: 0.5;
}
.gear .gear1 {
  animation-duration: 15s;
  top: -290px;
  left: -640px;
  animation-direction: reverse;
}
.gear .gear2 {
  animation-duration: 12s;
  top: -117px;
  left: -982px;
}
.gear .gear3 {
  animation-duration: 18s;
  top: -350px;
  left: -790px;
}
.gear .gear4 {
  animation-duration: 16.5s;
  top: -90px;
  left: -820px;
  width: 525px;
  animation-direction: reverse;
}
.gear .gear5 {
  animation-duration: 9.5s;
  top: -407px;
  left: -520px;
  width: 380px;
}
.gear .gear6 {
  animation-duration: 19s;
  top: -60px;
  left: -310px;
  width: 246px;
}
.light {
  animation: light 3s linear infinite alternate;
}

.logo,
.txt {
  animation: img 14s linear infinite;
  opacity: 0;
}
.txt {
  animation-delay: 7s;
  opacity: 0;
}

@keyframes turn {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes light {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(5deg);
  }
}

@keyframes img {
  10% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
}

@media only screen and (max-width: 1280px) and (min-width: 1025px) {
  .fullscreen {
    height: 100vh;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .bg {
  }
}

@media screen and (max-width: 767px) {
  .bg {
  }

  .fullscreen {
    height: auto !important;
  }

  .main > img.clock {
    width: 200%;
  }
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import { setInterval } from 'timers'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      dog1: true,
      dog2: false,
    }
  },

  methods: {},

  created() {
    setInterval(() => {
      this.dog1 = !this.dog1
      this.dog2 = !this.dog2
    }, 3000)
  },
}
</script>
