<template>
  <article class="s3 relative" id="s3">
    <div class="txt relative">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">近擁國1+國10雙國道<br>
        最強交通攻略</h3>
      <p class="font-['Noto_Sans_TC',sans-serif]" data-aos="fade-up" data-aos-delay="600">有了雙國道加持，南來北往輕鬆飆馳，<br>
約15 分鐘、一杯咖啡時間，<br>
快意串聯「台積電」「橋科」「仁武航太園區」<br>
三大重量級經濟引擎，帶來無限增值紅利，<br>
還能飆速抵達義大世界、高鐵、漢神巨蛋，<br>
嶄新的大社、便捷的交通，<br>看得見的不凡未來！</p>
<img src="./s3/stxt.svg" class="stxt" alt="備註" data-aos="fade-up" data-aos-delay="800"><br>
<!--  --><img src="./s3/en.svg" class="en" alt="en" data-aos="fade-up" data-aos-delay="800">
    </div>
    <img src="./s3/coffee.webp" class="coffee absolute" alt="coffee" data-aos="fade-up" data-aos-delay="0">
    <img src="./s3/img.jpg" class="img" alt="img" data-aos="fade-up" data-aos-delay="0">
    <div class="lists relative">
      <div class="list"><img src="./s3/img1.jpg" alt=""><span>台積電</span><span><i>約</i>15min</span></div>
    <div class="list"><img src="./s3/img2.jpg" alt=""><span>橋科園區</span><span><i>約</i>15min</span></div>
    <div class="list"><img src="./s3/img3.jpg" alt=""><span>仁武航太園區</span><span><i>約</i>15min</span></div>
  </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  position: relative;
  font-size:sizem(12);
  line-height: 1.6;
  padding:2em 0 .5em;
  @media screen and (min-width: 768px) {
    font-size:size(33);
  }
  .bg{
    position: absolute;
    top: 1em;
    left: calc(58% + 1em);
    width:sizem(130);
  @media screen and (min-width: 768px) {
    width:size(390);
  }
  }
  .txt{
    width: sizem(310);
    margin:0 auto 1em;z-index: 3;
  @media screen and (min-width: 768px) {
    width: size(1150);
  }
    .title{
      font-size:2.3em;
      line-height: 1.2;
      margin-bottom: .3em;
      span{color: #a38a77;}
  @media screen and (min-width: 768px) {
    font-size:3em;
  }
    }
    .en{
      width: 15.5em;
      margin-top: .3em;}
    .stxt{height: .5em;margin-top: -1em;}

  }
  .coffee{
    width: sizem(160);left: 55%;top:sizem(190);
    z-index: 2;
  @media screen and (min-width: 768px) {
    width: size(550);top:size(550);
  }
  }
  .img{width: sizem(320);margin: auto;display: block; 
    // background: url("./s2/img.jpg");background-size: cover;

  @media screen and (min-width: 768px) {
    width: size(1190);
  }
}
.lists{
  display: flex;width: 100%;justify-content: center;gap: .5em;margin: -8.5em auto auto auto;z-index: 3;

  @media screen and (min-width: 768px) {
    width: 70%;margin-top: -10.5em;
  }
}
.list{width: 26%;position: relative;
  background: #f4f4f4;padding: .4em .4em 1.2em .4em;
  box-shadow: 1px 1px 6px #0009;
  @media screen and (min-width: 768px) {
    padding: .4em .4em .5em .4em;
  }
img{width: 100%;}
span{display: block;font-size:.65em;
&:last-child{position: absolute;bottom: 0;right: 0.5em;font-size:1.05em;
i{font-style: normal;font-size:.75em;}
}

}
}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

</script>