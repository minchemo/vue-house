<template>
  <article class="s2 relative" id="s2">
    <div class="txt">
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">科技<span>S</span>廊道<br>
        全面啟動新未來</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200"> Technology Core</h4>
        <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
      <p data-aos="fade-up" data-aos-delay="600">和台積電、橋科、仁武航太園區，比鄰而居，<br>
宛如加州矽谷、台北內湖、新竹竹科，<br>
儼然科技副都心，具備未來價值的美好版圖。<br>
台積電2奈米晶圓廠，預計將帶來4500億的年產值，<br>
以及4500個就業機會，<br>
加上近鄰國巨、日月光知名大廠，<br>
5G產業、AI智能、半導體、航太科技，輕鬆掌控！</p>
<!-- <img src="./s2/en.png" alt="en"> -->
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  position: relative;
      .txt{
        position: relative; pointer-events: none;
        background: #FFF;
        color: #000;
        font-size:sizem(14);
        line-height: 1.8;
        width: sizem(327);
        margin: sizem(-33) auto sizem(20) auto;
        padding: sizem(6) sizem(38) sizem(38) sizem(38);
        text-align: justify;
        @media screen and (min-width: 768px) {
          position: absolute;
          top: size(80);left: size(159);
          font-size:size(22);
          margin: 0 auto 0 auto;
          padding: size(0) size(48) size(0) size(48);
          width: size(510);
          height:size(800);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:flex-start;
        }
        .title{
          font-size:sizem(26);
          color: #A30C24;
          line-height: 1.2;
          margin-top:sizem(28);
          letter-spacing: 0.03em;
          @media screen and (min-width: 768px) {font-size:size(40);
            margin-top:0;}
        }
        .subtitle{
          font-size:sizem(20);
          @media screen and (min-width: 768px) {font-size:size(30);}
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:sizem(6) 0 sizem(23);
          @media screen and (min-width: 768px) {margin:size(10) 0 size(40);}
        }
      }


}
</style>
<script setup>
import { computed, getCurrentInstance, ref} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const splide = ref()
const sConfig = {
  autoWidth: true,
  arrows: false,
  autoplay: true,
  pagination: false,
  gap: 0,
  type: "loop",
}


const imgs = [
  {
    img: new URL("./s2/1.webp", import.meta.url).href,
    caption: "依政府公開計畫繪製，僅供參考請以實際為主",
  },
  {
    img: new URL("./s2/2.webp", import.meta.url).href,
    caption: "圖片來源google地圖，僅供參考請以實際為主",
  },
]

</script>