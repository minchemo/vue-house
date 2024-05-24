<template>
  <article class="s3" ref="s3">
  <img src="./s3/bg.jpg" class="bg absolute" alt="bg">
  <img src="./s3/linem.svg" class="line1 absolute" alt="line" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">
  <img src="./s3/line.svg" class="line1 absolute" alt="line" data-aos="fade-up" data-aos-delay="0" v-else>
  <img src="./s3/a.svg" class="line2 absolute" alt="a" v-if="!isMobile">
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="200">
    <img src="./s3/title.svg">整合服務</h3>
  </div>
  <div class="img" v-if="!isMobile" data-aos="fade-up" data-aos-delay="400">
    <img src="./s3/icon.svg" alt="img">
  </div>
  <label class="img" v-else>
    <input type="checkbox" name="pics">
    <div class="pican">
      <img src="./s3/icon.svg" alt="img">
      <img src="./s3/icon.svg" alt="img">
    </div>
  </label>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s3 {
  @apply relative flex items-center justify-center text-[#fff];
  width: 100%;
  height:auto;
  padding:21em 0 10em 0;
  font-size:size(17);
  gap:3em;
  flex-wrap: wrap;
  .bg{opacity: .3;width: 100%;bottom: 0;left: 0;}
  .line1{top: 12em;left: 0;width: 100%;}
  .line2{top: size(675);right:size(-465);width:size(832);}
.txt{width:100%;
  text-align: center;
  .title{
    position: relative;margin: 0 auto 6.5em;display: inline-block;
    img{height: 2.6em;display: inline-block;
      vertical-align: bottom;
      margin: 0 1.5em 0.3em -.6em;
    }
    &::before{
      content: "";
      position: absolute;
      top: 1em;
      left: 2%;right: 0;margin: auto;
      width:100%;height:95%;border-bottom: 1px solid #B7A999;
    }
  }
}
.img{margin: auto;width:size(1427);
  img{width: 100%;}
}

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s3 {
  @apply flex-col;
    height: auto;
    padding: 7em 0 7.6em;
  font-size:sizem(14);
  flex-wrap:nowrap;
  gap:0em;
  .bg{opacity: .3;width: 200%;height:sizem(320);object-fit: cover;
    bottom: 0;left: -100%;}
  .line1{top: 2em;left: 0;width: 100%;height:sizem(80);}
.txt{
  .title{letter-spacing: 0.3em;margin: 0 auto 9.4em;
    img{height: 2.35em;
      margin: 0 1.2em 0.3em -.6em;
    }
  }
}
.img{width:100%;display: block;
  white-space: nowrap;
  input {
    display: none;
  }
  input:checked + .pican:hover {
    animation-play-state: paused;
  }
.pican {
  width: auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  transform: translateX(-50%);
  animation: an 20s linear infinite reverse;
  img {
    position: relative;
    display: inline-block;width: auto;
    margin: 0 sizem(50) 0 0;height:sizem(103);
  }
}
@keyframes an {
  to {
    transform: translateX(0);
  }
}
}
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
const getImg = (path) => {
  if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
  return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
}

const options = {
  rewind: false,
  arrows: false,
  pagination: true,
  autoplay: true,
  interval: 4000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s3/1.jpg", import.meta.url).href ,
    caption: "台積電擴大投資高雄"
  },
  {
    img:new URL("./s3/2.jpg", import.meta.url).href ,
    caption: "三井LaLaport"
  },
  {
    img:new URL("./s3/3.jpg", import.meta.url).href ,
    caption: "衛武營藝術之丘"
  },
  {
    img:new URL("./s3/4.jpg", import.meta.url).href ,
    caption: "衛武營國家藝文中心"
  },
  {
    img:new URL("./s3/5.jpg", import.meta.url).href ,
    caption: "空中鳳城"
  },
]
</script>

