<template>
  <div class="section1">
    <div class="bg relative">
      <div v-if="!isMobile">
        <img src="./s1/bg1.jpg" alt class="img" />
        <img src="./s1/bg2.jpg" alt class="img fix mix" />
        <img src="./s1/text.png" alt="懂你對家的要求 頤昌建築" class="img fix mix" />
        <img src="./s1/bg3.png" alt="雙語校園｜無瑕景觀｜ 豐居久安" class="img" />
        <img src="./s1/text1.png" alt="【 豐岳 】十大豐碩價值" class="title" />
        <img src="./s1/link.png" alt class="link" v-scroll-to="{ element: `#section2` }" />
        <!-- <img src="./s1/logo.png" alt="頤昌豐岳" class="img" data-aos="fade" data-aos-delay="700" /> -->
        <!-- <icon class="icon logo-icon" :data="logo" /> -->
        <div class="logo-icon"></div>
      </div>
      <div v-else>
        <img src="./s1/mo/bg1.jpg" alt class="img" />
        <img src="./s1/mo/bg2.jpg" alt class="img fix mix" />
        <img src="./s1/mo/img1.png" alt class="img fix mix" />
        <img src="./s1/mo/bg3.png" alt class="img" />
        <img src="./s1/mo/stitlea.png" alt="雙語校園｜無瑕景觀｜ 豐居久安" class="img" />
        <img src="./s1/mo/text1a.png" alt="懂你對家的要求 頤昌建築" class="img" />
        <img src="./s1/mo/titlea.png" alt class="img" />
        <img src="./s1/mo/linka.png" alt class="link" v-scroll-to="{ element: `#section2` }" />
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
    animation: imgmix 1.5s 5s forwards;
    opacity: 0;
    top: 50%;
    transform: translateY(-47%);
  }

  &.mix {
    mix-blend-mode: multiply;
    opacity: 0;
    animation: imgmix 1.5s 3s forwards;
    top: 50%;
    transform: translateY(-47%);
  }
  &.titleimg {
    opacity: 0;
    animation: imgop 1.5s 3s forwards;
    top: 50%;
    transform: translateY(-50%);
  }
  &.bottom_img {
    top: auto;
    bottom: 0;
  }
  &.text_img {
    opacity: 0;
    animation: imgop 1.5s 3s forwards;
  }
  &:nth-child(1) {
    position: relative;
  }
}

@keyframes imgop {
  to {
    opacity: 1;
  }
}
@keyframes imgmix {
  to {
    opacity: 1;
    transform: translateY(-50%);
  }
}

.title {
  width: calc(100vw * 528 / 1920);
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 60px;
  display: block;
}

.link {
  width: calc(100vw * 40 / 1920);
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 1%;
  display: block;
  cursor: pointer;
  animation: swing 2s 0s ease-in-out infinite;
}

@keyframes swing {
  0% {
    bottom: 1%;
  }

  50% {
    bottom: 2%;
  }
  100% {
    bottom: 1%;
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .bg {
    background-size: cover;
  }

  .section1 {
    .bg {
      height: 169.3vw;
      overflow: hidden;
    }
  }

  .img {
    &.fix {
      top: 0;
      transform: translateY(3%);
    }
    &.mix {
      top: 0;
      transform: translateY(3%);
    }
    &:nth-child(1) {
      position: relative;
      height: calc(100vw * (636 / 375));
    }
  }
  @keyframes imgmix {
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  .link {
    width: 100vw;
    bottom: -3%;
  }

  @keyframes swing {
    0% {
      bottom: -3%;
    }

    50% {
      bottom: -5%;
    }
    100% {
      bottom: -3%;
    }
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
    }
  },

  computed: {},

  methods: {},

  created() {},
  mounted() {},
}
</script>
