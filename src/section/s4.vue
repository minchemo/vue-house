<template>
  <article class="s4">
    <div class="bg absolute" data-aos="fade" data-aos-delay="0"></div>
    <div class="box-w absolute"></div>
    <div class="txt">
    <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200">對望遠企匯流國際，豐饒商圈盡在這裡</h4>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">歐美旗艦品牌進駐台灣頂尖消費開端，客戶群彰顯自我性格與堅持生活品質屬性，一時之間名流冠蓋雲集；收攏台北豐饒生活，向西提汲永康青田與師大書卷步調，向東追尋信義計劃時尚前沿，向北擁抱東區SOGO商圈。</p>
    </div>
<div class="pics relative">
<div class="list" data-aos="fade-up" data-aos-delay="0">
  <img src="./s4/1.webp" alt="">
</div>
<div class="list" data-aos="fade-up" data-aos-delay="200">
  <img src="./s4/2.jpg" alt="">
</div>
<div class="list" data-aos="fade-up" data-aos-delay="400">
  <img src="./s4/3.webp" alt="">
</div>
</div>

  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s4 {
  @apply w-full relative text-[#0c7494];
 // height: size(1336);
 /* background-image: url("@/section/s2/bg.jpg");
  background-size: cover; */
  padding: sizem(50) 0 2em 0;
  font-size: sizem(13);
  line-height: 1.7;
  font-weight: 600;
@media screen and (min-width: 768px) {
  padding: size(213) 0 0 0;
  font-size: size(17);
}

  .bg{font-size: sizem(5);
    border: sizem(2) solid currentColor;color: #fff;width: 94%;margin:auto;left: 0;right: 0;top: sizem(5);bottom:sizem(60);
  &::before{content: "";background: currentColor;position: absolute;left: 1em;right: 1em;top: 1em;bottom: 1em;display: block;}
@media screen and (min-width: 768px) {
  font-size: size(12);
  top: size(90);bottom:size(450);
  border: size(5) solid currentColor;width: 91.5%;
}
  }
.txt {margin:0 auto 3em;
  display: flex;
  flex-wrap: wrap;text-align: center;
  justify-content: center;gap:0 4em;width: 100%;
  @media screen and (min-width: 768px) {
    margin:0 auto 5em;
  }

  .title{width: 100%;font-size: 1.5em;
    @media screen and (min-width: 768px) {
      font-size: 3.1em;
    }
  }
  .en{width: 100%;font-size: .6em;text-transform:uppercase;margin: .3em auto 3em;letter-spacing: 0.16em;
    @media screen and (min-width: 768px) {
      font-size: 1.2em;margin: .3em auto 4em;
    }
  }
  .subtitle{display: flex;justify-content: center;align-items: center;padding:.5em 0;margin:0 0 1.7em 0;
    width:sizem(280);font-size: 1.1em;border:0 solid currentColor;border-width: 1px 0 1px 0;
    @media screen and (min-width: 768px) {
      width: size(560);font-size: 1.6em;padding: 0;margin: 0;
    }
  }
  .desc{width: sizem(280);text-align: justify;color: #000;margin: -.2em 0;
    @media screen and (min-width: 768px) {
      width: size(570);
    }
  }
}
.pics{height:sizem(150);display: flex;justify-content: center;gap:.3em;width: 100%;z-index:3;
  .list{height: 100%;}
img{height: 100%;}
    @media screen and (min-width: 768px) {
      height:size(761);gap:1em;
    }
}
.box-w{width:sizem(320);height: sizem(150);bottom:sizem(15);right:sizem(18);z-index:2;background: #fff;
@media screen and (min-width: 768px) {
  height: size(700);bottom:size(-25);right:size(98);width:size(1600);
}
}
.box{width:sizem(200);height: sizem(150);bottom:sizem(-20);right:sizem(30);overflow: hidden;
img{height: 170%;opacity: .6;transform: translateX(-45%);
  animation: box1 15s linear alternate infinite;}
@media screen and (min-width: 768px) {
  height: size(900);bottom:size(-250);right:size(0);width:size(620);
img{animation: box1 40s linear alternate infinite;}
}
}
@keyframes box1 {
  to {
  transform: translateX(0%);
}
}
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const isMobile = computed(() => globals.$isMobile())

</script>
