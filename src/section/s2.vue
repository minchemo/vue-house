<template>
  <article class="s2 relative" id="s2">
    <div class="swiper-box">
      <Splide
        :options="sConfig"
        ref="splide"
        class="slide"
        @splide:move="onMove"
      >
        <SplideSlide
          class="slide-item"
          :key="i"
          v-for="i in imgs"
        >
        <img :src="i.img" :alt="i.caption">
          <span class="caption">
            {{ i.caption }}
          </span>
        </SplideSlide>
      </Splide>
    </div>
    <div class="txt">
      <div class="arrows">
        <img
          @click="splide.go('<')"
          class="prev"
          src="@/section/arrow.svg"
          alt="r"
          srcset=""
        />
        <img
          @click="splide.go('>')"
          class="next"
          src="@/section/arrow.svg"
          alt="r"
          srcset=""
        />
      </div>
      <h3 class="title" data-aos="fade-up" data-aos-delay="0">首席台積電璀璨版圖<br>
        聚焦全球AI科技核心</h3>
        <h4 class="subtitle" data-aos="fade-up" data-aos-delay="200"> Technology Core</h4>
        <div class="hr" data-aos="fade-up" data-aos-delay="400"></div>
      <p data-aos="fade-up" data-aos-delay="600">台積電連動美、日、星國際科研能量競速佈局，港都華麗轉身科研繁城，頂尖跨國企業搶駐，科技菁英絡繹進城，共構我國南方發展新藍圖，躍居國際產業核心之列，領銜全球聚焦目光。</p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {


  .swiper-box {
    position: relative;
    left: 50%;transform: translateX(-50%);
    width:sizem(458);
    .slide-item {width: 100%;height:100%;
    img{width:100%;object-fit: cover;height:sizem(317);}
    
    .caption {
      position: absolute;top: 0.5em;right: 4.3em;color: #FFF;font-size: sizem(11);text-shadow:0 1px 3px #000;
    }
    }
  }
      .arrows {/*
        @apply absolute w-full;
        @apply flex items-center justify-between;
        @apply top-1/2 -translate-y-1/2;
        @apply pointer-events-none;
        */
        padding: 0;
        text-align: center;
        img {
         // @apply pointer-events-auto;
          width: sizem(20);
        }

        .next {
          @apply -scale-x-100;
          margin-left:sizem(15);
        }
      }
      .txt{
        position: relative;
        background: #FFF;
        color: #000;
        font-size:sizem(14);
        line-height: 1.8;
        width: sizem(327);
        margin: sizem(-33) auto sizem(20) auto;
        padding: sizem(6) sizem(38) sizem(38) sizem(38);
        text-align: justify;
        .title{
          font-size:sizem(26);
          color: #A30C24;
          line-height: 1.2;
          margin-top:sizem(28);
          letter-spacing: 0.03em;
        }
        .subtitle{
          font-size:sizem(20);
        }
        .hr{width: 100%; height: 1px;
          background: #A30C24;
          margin:sizem(6) 0 sizem(23);}
      }


}

/*
@keyframes an1 {
  0% {
    transform:rotate(-70deg);opacity: .8;
  }
  20% {
    transform:rotate(110deg);opacity: 0;
  }
  80% {
    transform:rotate(110deg);opacity: 0;
  }
  100% {
    transform:rotate(290deg);opacity: .8;
  }
}
.s2 {
 height: size(1070);
 overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  font-size:size(36);
  .bg{position: absolute;width:100%;top:size(-332);left:0%;}
  .bubble{position: absolute;left:0;right:size(12);top:size(512);margin: auto;width:size(307);
    mix-blend-mode: overlay;
   // background: #0003;
    img{width: 100%;
 //  transform: rotate(180deg);opacity: 0;
  animation: an1 2s linear infinite reverse;
 }
  }

  .t1{position: absolute;
    left: 0;right: 0;margin: auto;text-align: center;
    font-size:size(62);
    line-height: 1.13;
    letter-spacing: 0.07em;
    font-weight: 900;z-index: 3;top:size(172);
    
    }
  .line{ width: 102%;left: -1%;
      position: absolute;z-index: 3;top:size(345);}
  .txt{left: 0;bottom: 0; width:100%;background: #fff;
  display: flex;
  justify-content:center;
  align-items:center;height: size(130);padding-bottom: size(17);
  letter-spacing: 0.04em;
    h4{font-size:size(36); border-right:1px solid currentColor;font-weight: 600;
      padding: .15em .8em .15em 0;margin-right: .8em;}
    p{font-size:size(24);}
  }
  .bottom{left: 0;bottom: 0; width:100%;z-index: 3;height:size(16);}
}
*/
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

/*

  .s2 {
    height: sizem(740);
    font-size:sizem(16);
    background-size: 340% auto;
    .bg{position: absolute;width:330%;top:sizem(-335);left:-115%;}
    
  .bubble{left:0;right:sizem(12);top:sizem(215);margin: auto;width:sizem(198);//background: #000;
  }

  .t1{font-size:sizem(25);top:sizem(86);
    }
  .line{ width: sizem(400);left:sizem(-22);top:sizem(164);}
  .txt{height:auto;padding: sizem(35) 0 sizem(62) 0;
    flex-direction: column;
  letter-spacing: 0.04em;
    h4{font-size:sizem(20); border-right:0px solid currentColor; border-bottom:1px solid currentColor;font-weight: 600;
      padding: 0 0 .6em 0;margin: auto auto .6em auto;width: sizem(310);text-align: center;}
    p{font-size:sizem(15);line-height: 1.7;
      margin: auto;width: sizem(310);text-align: justify;}
  }
  .bottom{height:sizem(16);}
  
}*/
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