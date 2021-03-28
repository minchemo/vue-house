<template>
  <div class="section1">
    <div class="bg relative">
      <div>
        <div class="img_bg" @scroll="hide = true">
        <div class="img_bg_c">
        <img src="./s1/bg.jpg" alt="" class="img content">
        <img src="./s1/light1.png" alt="" class="img light1">
        <img src="./s1/light2.png" alt="" class="img light2">
        <img src="./s1/arrow.png" alt="" :class="`img arrow ${hide ? 'hide' : ''}`">
        </div>
        </div>
        <div class="img light4">
          <div class="light_b"></div>
          <img src="./s1/light4.jpg" alt="">
        </div>
        <img src="./s1/logo.png" alt="" class="img logo">
        <div class="img light3">
          <img src="./s1/light3a.png" class="l3_1" alt="">
          <img src="./s1/light3a.png" class="l3_2" alt="">
          <img src="./s1/light3a.png" class="l3_3" alt="">
          <img src="./s1/light3a.png" class="l3_4" alt="">
        </div>
        <!-- <img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
        <!-- <icon class="icon logo-icon" :data="logo" />
        <img src="./s1/light3.png" alt="" class="img light3"> -->
      <!--/div>
      <div v-else>
        <img src="./s1/mo/bg.jpg" alt="" class="img" -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// for svg
</style>
<style lang="scss" scoped>
.bg {
  background-size: cover;
  position: relative;
}
.img_bg_c{position: relative;}
.img {
  width: 100vw;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  display: block;
  
  &:nth-child(1) {
    position: relative;
  }
  &.light1,
  &.light2{
    opacity: 0;
    animation: op 1s alternate infinite;
  }
  &.arrow{
    display: none;
    animation: arrow 1s ease-in-out alternate infinite;
    transform: translateX(-2%)
  }
  &.light2{
    animation-delay:1s
  }
  &.light3{
    mix-blend-mode:screen;
    img{position: absolute;top:0;left: 50%;transform:translate(-50%,-50%) rotate(0deg);transform-origin: center center;
    animation: ro 2s linear infinite;width:0;height: 0;opacity: 1;}
    .l3_1{top: 13vw;left: 41%;}
    .l3_2{top: 8.5vw;left: 49.5%;animation-delay:0.5s}
    .l3_3{top: 14vw;left: 58.5%;animation-delay:1s}
    .l3_4{top: 8.5vw;left: 63%;animation-delay:1.5s}
  }
  &.light4{mix-blend-mode:screen;width: 100%;height: 100%;}
}
.light_b{
  width:300%;height: 100%;position: absolute;left:-200%;animation: light_b 5s  infinite;
  background: -moz-linear-gradient(-45deg,  rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 66%, rgba(0,0,0,1) 100%);
background: -webkit-linear-gradient(-45deg,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 34%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 66%,rgba(0,0,0,1) 100%);
background: linear-gradient(135deg,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 34%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 66%,rgba(0,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=1 );
}
@keyframes op {
    to {
        opacity: 1;
    }
}
@keyframes light_b {
    to {
        left:0;
    }
}
@keyframes arrow {
    to {
        transform: translateX(2%)
    }
}

@keyframes ro {
    30% {
        transform:translate(-50%,-50%) rotate(90deg);
        width:5em;height: 5em;opacity: 1;
    }
    50% {
        transform:translate(-50%,-50%) rotate(180deg);
        width:10em;height: 10em;opacity: 0;
    }
    100% {
        transform:translate(-50%,-50%) rotate(180deg);
        width:10em;height: 10em;opacity: 0;
    }
}


/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
    height:100vh;
      position: relative;
  }

  .section1 {
    .bg {
      overflow: hidden;
    }
  }

  .img {
    width: 280vw;
    height: 60vw;
    left:50%;
    transform: translateX(-50%);
    object-position: 50% 0%;
    &:nth-child(1) {
      position: relative;
      height:100vh;
    left:0;
    transform: translateX(0);
    }
  &.light1,
  &.light2,
  &.arrow{
    left:0;
    height:100vh;
    transform: translateX(0);
    }
  &.arrow{
    display:block;

    &.hide {
      display: none;
    }
  }
  &.light3{width:295%; top: 21vw;height: 30vw;}
  &.light4{height: 42%;overflow: hidden;
    img{
    height:calc(100vh - 63px);
    width: 100%;
    object-fit: cover;}
  }
  }
.img_bg{overflow:auto;}
.light_b{background: -moz-linear-gradient(left,  rgba(0,0,0,1) 0%, rgba(0,0,0,1) 34%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 66%, rgba(0,0,0,1) 100%);
background: -webkit-linear-gradient(left,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 34%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 66%,rgba(0,0,0,1) 100%);
background: linear-gradient(to right,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 34%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 66%,rgba(0,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=1 );

}
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from '@/utils'

export default {
  name: 'section1',

  data() {
    return {
      isMobile,
      hide: false,
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {
    if (this.isMobile) {
      setTimeout(() => {
        const frame = document.querySelector('.img_bg')
        const content = document.querySelector('.img_bg_c .content')
        console.log(frame)
        console.log(content)
        frame.scrollTo(content.clientWidth * 20 / 100, 0)
      }, 500)

      setTimeout(() => {
        this.hide = false
      }, 700)
    }
  }
}
</script>