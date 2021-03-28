<template>
  <div class="section1">
    <div class="bg kv">
      <div class="kv_banner">
        <div class="kv_logo">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="0.1" direction="up">
            <img src="./s1/logo.png" alt="敦南好好" />
          </parallax>
        </div>

        <h1 title="就愛市中心首購住大安 3米6自由式｜2房好生活" class="subtitle">
          <parallax breakpoint="(min-width: 68px)" :speed-factor="0.1" direction="up">
              <img src="./s1/kv_slogan.png" alt="就愛市中心首購住大安 3米6自由式｜2房好生活" />
          </parallax>
        </h1>
      </div>
      <div class="kv_decoration">
        <div class="ball ball-1">
          <div class="ring">
              <img class="js-parallax" src="./s1/ring.png" alt="3米6自由式" />
          </div>
            <img class="js-parallax" src="./s1/ball_1.png" alt="2房好生活" />
        </div>
        <div class="ball ball-2">
            <img class="js-parallax" src="./s1/ball_2.png" alt=" 敦南好好" />
        </div>
        <div class="ball ball-3">
            <img class="js-parallax" src="./s1/ball_3.png" alt="就愛市中心首購住大安" />
        </div>
        <div class="ball ball-5">
          <div class="perfume perfume-1">
              <img class="js-parallax" src="./s1/perfume_1.png" alt="敦南好好" />
          </div>
            <img class="js-parallax" src="./s1/ball_5.png" alt="3米6自由式" />
        </div>
        <div class="perfume perfume-2">
            <img class="js-parallax" src="./s1/perfume_2.png" alt="2房好生活" />
        </div>

        <div class="flag flag-1">
            <img class="js-parallax" src="./s1/flag_1.png" alt="敦南好好 就愛市中心首購住大安" />
        </div>
        <div class="flag flag-2">
            <img class="js-parallax" src="./s1/flag_2.png" alt="敦南好好 就愛市中心首購住大安" />
        </div>
      </div>
      <div class="scroll-down" v-scroll-to="{ element: `#section2` }">
        <div class="scroll-text">scroll down</div>
        <img src="./s1/arrow-down.png" alt class="after" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.Masthead,
.Masthead__image {
  height: auto ;
  min-height: 23.875rem;
}
.Masthead__image > img {
  height: auto ;
  min-height: auto ;
  object-fit: contain;
}

.Masthead__image.is-parallax > img {
  height: auto ;
  min-height: auto ;
}
.is-parallax{transition: all 0.3s;}

@media (max-width: 768px) {
  .Masthead,
  .Masthead__image {
    height: auto !important;
    min-height: 12.875rem;
  }
}
</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
  height: 100vh;
  max-height: 1080px;
  background-color: #cb191d;
  background-image: url('./s1/kv_city_bg.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  margin: 0 120px 0 0;
}

img {
  width: 100%;
}

.kv_banner {
  position: absolute;
  top: 22.5%;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw * 426 / 1920);
  z-index: 2;
  opacity: 1;
  transition: 0.7s opacity;
}

.flag {
  position: absolute;
  z-index: 2;
}

.flag-1 {
  max-width: 98px;
  min-width: 37px;
  width: 5.1%;
  top: 31.6%;
  left: 21%;
  animation: an 2s infinite alternate;
    transform: translateY(-15%);
}

.flag-2 {
  max-width: 112px;
  min-width: 43px;
  width: 5.8%;
  top: 38%;
  right: 25.3%;
  animation: an 2s infinite alternate;
    transform: translateY(15%);
}


.kv_logo {
  position: relative;
  z-index: 1;

  img {
    height: 49.4vh;
    object-fit: contain;
  }
}

.subtitle {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% - 10vh - 41px);
  margin: 0 auto;

  img {
    height: 10vh;
    object-fit: contain;
  }
}

.kv_decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.scroll-text {
  font-size: 20px;
  margin-bottom: 5px;
  font-family: Didot, 'Didot LT STD', 'Times New Roman', serif;
  font-style: italic;
  color: #fff;
}

.after {
  width: 16px;
  height: 8px;
  margin: 5px auto 0;
}

.scroll-down {
  position: absolute;
  display: block;
  z-index: 2;
  bottom: 4.4vh;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}

.ball {
  position: absolute;
  animation: an 2s infinite alternate;
}
.ball-1 {
  bottom: -14%;
  left: -9%;
  max-width: 571px;
  width: 30%;
  transform: translateY(-8%);

  .ring {
    position: absolute;
    width: 58%;
    top: -50%;
    right: 1%;
    z-index: 2;
    animation: an 2s infinite alternate;
    transform: translateY(15%);
  }
}

.ball-2 {
  top: -5.3%;
  left: -2.4%;
  max-width: 321px;
  width: 16.71875%;
  transform: translateY(-12%);
}

.ball-3 {
  top: -26%;
  right: -4.1%;
  max-width: 571px;
  width: 29%;
  transform: translateY(5%);
}

.ball-5 {
  bottom: -3%;
  right: 4.375%;
  max-width: 389px;
  width: 20.3%;
  transform: translateY(-10%);
}

.perfume {
  position: absolute;
  z-index: 2;
  animation: an 2s infinite alternate;
}

.perfume-1 {
  width: 118%;
  left:-22%;
  top: -90%;
  transform: translateY(3%);
}

.perfume-2 {
  width: 12.5%;
  bottom: 20%;
  left: 23.7%;
  transform: translateY(6%);
}
@keyframes an{
    to {
      transform: translateY(0);
    }
}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height: 100vh;
    position: relative;
    margin: 0;
  }
  .kv_banner{
    width: calc(100vw * 426 / 750);
    }
.subtitle{top: calc(23% + 100vw * 426 / 750);}
.scroll-down{bottom:calc(4.4vh + 63px);}

.flag-1 {
  top: 30%;
  left: 7%;
}

.flag-2 {
  top: 50%;
  right: 5%;
}
.ball-1 {
  bottom: calc(-20% + 63px);
  left: -40%;
  width: 60%;
  transform: translateY(-8%);

  .ring {
    width: 51%;
  }
}

.ball-2 {
  top: -12%;
  left: -10%;
  width: 40%;
}

.ball-3 {
  top: -7%;
  right:-12%;
  width: 51%;
}

.ball-5 {
  bottom:calc(-8% + 63px);
  right:-5%;
  width:37%;
}


.perfume-1 {
  width: 80%;
  left: 10%;
  top: -85%;
}

.perfume-2 {
  bottom:calc(8% + 63px);
  left: 23%;
  transform: translateY(9%);
}


}

</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'
import Parallax from '@/components/Parallax.vue'

export default {
  name: 'section1',

  components: {
    Parallax,
  },

  data() {
    return {
      isMobile,
      hide: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
}
</script>
