<template>
  <article class="s2" id="s2">
      <h3 class="title" data-aos="zoom-out"><span class="t1">蘆洲下一站<br />萬坪公園城</span><span class="t2">新蘆特區寓言 全家人的樂園</span></h3>
      <div class="box">
        <div class="txt" data-aos="zoom-out" data-aos-delay="300"><img src="./s2/txt.svg" alt="" /></div>
    <div class="img" data-aos="fade-up" data-aos-delay="600"> 
      <img src="./s2/img1.png" class="img1" alt="" />
      <img src="./s2/img2.png" class="img2" alt="" />
    </div>
  </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden w-full bg-[#FF3EA1];//
  height: size(950);
  display: flex;
  align-items: center;
  justify-content:center;
  font-size:size(25);
  padding: size(98) 0;
  gap:size(85);
  .title{
    font-size: 1em;
    font-weight: 500;
    letter-spacing: 0.45em;
    line-height: 1.5;
    color: #FFF;
    margin: 0 0 0 .5em;
    .t1{
      display: block;
      font-size:3.6em;
      font-weight: 900;
    line-height: 1.15;
    letter-spacing: 0em;
    margin-bottom: .25em;
    }
    .t2{
    text-indent: 0.3em;
      display: block;}
  }
.box{position: relative;
  width:size(605);
  display: flex;
    flex-direction:column;
  align-items: center;
  justify-content:center;
  .txt{margin:3em 0 -2.4em 0;flex: 0 size(457);position: relative;
  width:size(457);height: size(457);
  display: flex;
    flex-direction:column;
  align-items: center;
  justify-content:center;
  &::before{content: "";display: block;position: absolute;top: 0;left: 0;width: 100%;height: 100%;border-radius: 50%;background: #FFF;}
img{position: relative;z-index: 2;width: 65%;}  
}
.img{position: relative;margin-bottom: -2.5em;
.img1{position: absolute;top: 0;left: 0;
     animation: an_s 1.5s linear infinite ;}
}
@keyframes an_s {
  0%{
     transform:scale(.5)translateY(0%);
     opacity: 0;
    }
  50%{
     transform:scale(.95)translateY(-30%);
     opacity: 1;
    }
  100%{
     transform:scale(1.5)translateY(-40%);
     opacity: 0;
    }
}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */

// @media screen and (max-width: 767px) { 平常我們手機的設定

@media screen and (max-width: 767px) {
  .s2 {
font-size:sizem(14);
  height: sizem(770);
  flex-direction: column;
  gap:0;
  padding: 0;
  .title{
    margin: 3em 0 0 .5em;
    .t1{
    margin-bottom: .0em;
    }}
.box{
  width:sizem(340);
  .txt{margin:2em 0 -2.4em 0;flex: 0 sizem(330);
  width:sizem(330);height: sizem(330);
}
  }

}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
