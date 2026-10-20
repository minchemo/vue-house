s2<template>
  <article class="s3 relative" id="s3">
    <picture>
      <source media="(max-width: 768px)" srcset="./s3/bgm.jpg" />
      <img src="./s3/bg.jpg" alt="" class="bg" />
    </picture>
    <h3 class="t1">緊鄰東區<br> 更勝東區</h3>
    <h4 class="t2">崇聖路旁</h4>
    <div class="t3">旗艦造鎮</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';



.s3 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: sizem(33);
  height: sizem(604);
  overflow: hidden;
  color: #fff;

  @media screen and (min-width: 768px) {
  font-size: size(80);
    height: 100vh;
    min-height: size(1070);
    max-height: size(1070);

  }
  .bg {
    position: absolute;top: 0;left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  
  }
  .t1{position: relative;
    z-index: 2;
  font-size: 1.15em;
    letter-spacing: .45em;
    font-weight: 600;
    text-align: center;
    
  @media screen and (max-width: 767px) {position: relative;
    margin: sizem(90) auto sizem(60);
    line-height: 1.37;
    width: 80%;padding: 0 0 0 0.45em;
    &::after,
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: sizem(31);
      top: sizem(27);
      height: sizem(51);
     // background: #fff;
      margin: sizem(0) auto 0;
    }
    &::after {left: 0;
  box-sizing: border-box;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
  border-image: linear-gradient(
    to right,
    #61FD00,
    rgba(255, 255, 255, 0)
  ) 1;
    }
    &::before {right:0;
  box-sizing: border-box;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-right: 1px solid transparent;
  border-image: linear-gradient(
    to left,
    #61FD00,
    rgba(255, 255, 255, 0)
  ) 1;
    }
  }
  @media screen and (min-width: 768px) {position: relative;
    margin: size(75) auto size(40);
  font-size: 1.36em;
    letter-spacing: .095em;
    br{
      display: none;
    }
  }
  }
  .t2{position: relative;
    z-index: 2;
    letter-spacing: .45em;
    font-weight: 500;
    text-indent: .5em;
    margin: size(0) auto auto;
    
  @media screen and (min-width: 768px) {position: relative;
    margin: size(0) auto auto;
  }
  }
  .t3{position: relative;
    z-index: 2;
    letter-spacing: .45em;
    font-weight: 500;
    text-indent: .5em;
  font-size: 1em;
  text-shadow: .02em .02em .03em rgba(20, 40, 102, 0.75);
    margin: size(0) auto sizem(138);
    
  @media screen and (min-width: 768px) {position: relative;
    margin: size(0) auto size(85);
  font-size: 1.46em;
  }
  }
}
</style>
<script setup>
import info from "@/info"
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
const canPlayWebP = document.createElement('canvas')
  .toDataURL('image/webp')
  .startsWith('data:image/webp')

</script>