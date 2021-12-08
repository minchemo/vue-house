<template>
  <div class="section1" ref="parallax">
    <div class="logo" data-aos="fade-up">
      <img src="@/projects/gp/s1/logo.svg" alt="" srcset="" />
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="500">
3分鐘A19捷運站<span>＃</span>千坪湖畔莊園<br>
<b>戶戶邊間迎光建築｜18-36坪｜1-3房</b>
    </div>
    <img class="i1" src="@/projects/gp/s1/1.png" alt="" srcset="" />
    <img
      class="i2"
      data-aos="fade"
      src="@/projects/gp/s1/5.png"
      alt=""
      srcset=""
    />
    <img
      class="i3"
      data-aos="fade"
      src="@/projects/gp/s1/6.png"
      alt=""
      srcset=""
    />

    <img
      class="l1-1 parallax-item"
      data-depth="0.2"
      src="@/projects/gp/s1/2-1.png"
      alt=""
      srcset=""
    />
    <img
      class="l1-2 parallax-item"
      data-depth="0.4"
      src="@/projects/gp/s1/2-2.png"
      alt=""
      srcset=""
    />
    <img
      class="l2 parallax-item"
      data-depth="0.2"
      src="@/projects/gp/s1/3.png"
      alt=""
      srcset=""
    />
    <img
      class="l3 parallax-item"
      data-depth="0.4"
      src="@/projects/gp/s1/4.png"
      alt=""
      srcset=""
    />

    <img
      class="m1"
      data-aos="fade"
      data-aos-delay="1000"
      src="@/projects/gp/s1/m1.png"
      alt=""
      srcset=""
    />
    <img
      class="m2"
      data-aos="fade"
      data-aos-delay="1500"
      src="@/projects/gp/s1/m2.png"
      alt=""
      srcset=""
    />

    <div class="title2" data-aos="fade-up" data-aos-delay="500">
      你聽見了嗎? <br v-if="isMobile">青埔最輕鬆的節奏
    </div>

    <img class="wave" src="@/projects/gp/s1/wave.svg" alt="" srcset="" />
    <img class="wave2" src="@/projects/gp/s1/wave.svg" alt="" srcset="" />
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section1 {
  height: size(1600);

  .logo {
    position: absolute;
    width: size(568);
    left: 50%;
    top: size(220);
    margin-left: -#{size(284)};
    img {
      width: 100%;
    }
  }

  .title {
    position: absolute;
    width:100%;
    left: 0;
    top: size(520);
    text-align: center;
    font-size: size(47);
    color:#146a32;
    font-weight:700;
    line-height: 1.8;
    letter-spacing: 0.06em;
    span{color: #FFF;margin: 0 0.3em;}
    b{font-size: 0.91em;}
  }

  .title2 {
    position: absolute;
    width:100%;
    left:0;
    bottom: size(300);
    z-index: 2;
    font-size: size(45);
    line-height: 1.8;
    letter-spacing: 0.15em;
    font-weight:700;
    color: #46a76c;
    text-shadow:
     0 0 2px #fff,  
     0 0 2px #fff,  
     0 0 2px #fff,  
     0 0 2px #fff,
     0 0 2px #fff,
     0 0 2px #fff,
     0 0 2px #fff,  
     -2px -2px 0 #fff, 
      2px -2px 0 #fff,
      -2px 2px 0 #fff,
       2px 2px 0 #fff;
    img {
      width:size(700);
    }
  }

  .i1 {
    position: absolute;
    right: 0;
    top: 0;
    width: size(590);
    animation: float 5s infinite alternate-reverse, fadeIn 1.5s;
  }
  .i2 {
    position: absolute;
    left: -#{size(150)};
    top: size(800);
    width: size(469);
    animation: float 5s infinite alternate-reverse, fadeIn 1.5s;
  }
  .i3 {
    position: absolute;
    right: size(350);
    bottom: size(200);
    width: size(454);
    animation: float 5s infinite alternate-reverse, fadeIn 1.5s;
  }

  .l1-1 {
    position: absolute;
    left: size(310);
    top: size(350);
    width: size(105);
    animation: fadeIn 1.5s;
  }
  .l1-2 {
    position: absolute;
    left: size(400);
    top: size(40);
    width: size(133);
    animation: fadeIn 1.5s;
  }
  .l2 {
    position: absolute;
    right: size(300);
    top: size(620);
    width: size(99.89);
    animation: fadeIn 1.5s;
  }
  .l3 {
    position: absolute;
    right: size(360);
    top: size(660);
    width: size(99.89);
    z-index: 1;
    animation: fadeIn 1.5s;
  }

  .m1 {
    position: absolute;
    left: size(540);
    bottom: size(370);
    width: size(61);
    z-index: 2;
    transform: translateY(-10%) rotate(-10deg);
  }

  .m2 {
    position: absolute;
    right: size(560);
    bottom: size(240);
    width: size(50);
    z-index: 2;
    transform: translateY(10%) rotate(10deg);
  }

  .wave {
    position: absolute;
    left: 0;
    top: size(760);
    height: size(121);
    z-index: 1;
    animation: wave 13s infinite alternate-reverse ease-in-out, fadeIn 1.5s;
    opacity: 0.5;
  }
  .wave2 {
    position: absolute;
    left: 0;
    bottom: size(200);
    height: size(121);
    z-index: 1;
    animation: wave 15s infinite alternate-reverse ease-in-out, fadeIn 1.5s;
    opacity: 0.5;
  }

  @keyframes float {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(10px, -20px, 0) rotate(1deg);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes wave {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-75%, 0, 0);
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section1 {
    height: size-m(979);

    .logo {
      width: size-m(277);
      top: size-m(200);
      margin-left: -#{size-m(138.5)};
    }

    .title {
      top: size-m(350);
    font-size: size-m(19);
    }

    .title2 {
      bottom: size-m(50);
    font-size: size-m(24);
    }

    .i1 {
      width: size-m(286);
      animation: float 5s infinite alternate-reverse, fadeIn 1.5s;
    }
    .i2 {
      left: -#{size-m(100)};
      top: size-m(500);
      width: size-m(275);
      animation: float 5s infinite alternate-reverse, fadeIn 1.5s;
    }
    .i3 {
      right: size-m(20);
      bottom: size-m(50);
      width: size-m(200);
      animation: float 5s infinite alternate-reverse, fadeIn 1.5s;
    }

    .l1-1 {
      left: size-m(30);
      top: size-m(90);
      width: size-m(51);
      animation: fadeIn 1.5s;
    }
    .l1-2 {
      left: size-m(80);
      top: -#{size-m(50)};
      width: size-m(64);
      animation: fadeIn 1.5s;
    }
    .l2 {
      right: size-m(30);
      top: size-m(420);
      width: size-m(40);
      animation: fadeIn 1.5s;
    }
    .l3 {
      right: size-m(55);
      top: size-m(435);
      width: size-m(40);
      animation: fadeIn 1.5s;
    }

    .m1 {
      left: size-m(70);
      bottom: size-m(110);
      width: size-m(26);
    }

    .m2 {
      right: size-m(60);
      bottom: size-m(30);
      width: size-m(26);
    }

    .wave {
      top: size-m(440);
      height: size-m(75);
    }
    .wave2 {
      bottom: size-m(50);
      height: size-m(75);
    }

    @keyframes float {
      0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
      100% {
        transform: translate3d(10px, -20px, 0) rotate(1deg);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes wave {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-75%, 0, 0);
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

  methods: {},

  created() { },

  mounted() {
    const elem = this.$refs.parallax;

    var parallaxInstance = new Parallax(elem, {
      relativeInput: true,
      selector: '.parallax-item'
    });
  }
}
</script>
