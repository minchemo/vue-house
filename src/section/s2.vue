<template>
  <article class="s2 relative" id="s2">
    <img src="./s2/bg.jpg" class="bg" data-aos="fade" data-aos-delay="0">
    <div class="txt" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">
      <div data-aos="fade-up" data-aos-delay="0">
        高雄崛起，世界望向台灣
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        台灣高雄，躍升新亞洲核心
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        台積電從高雄啟航
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        劃出第一道亞洲聚富軸線
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        全球科技集團在高雄攻城掠地
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        您必須重新佈局，回到亞洲的新核心—高雄
      </div>
      <br>
      <div data-aos="fade-up" data-aos-delay="400">
        論談地段，台積電說了才算
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        世界同步聚富磁場，高大特區奇貨可居
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        地王之王一席難求，精華土地不可複製
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        增值實力越墊越高
      </div>
      <br>
      <div data-aos="fade-up" data-aos-delay="700">
        站上科技巨人的肩膀，定錨台積電高大核心
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        掌握世界級的耀眼先積
      </div>
      <div data-aos="fade-up" data-aos-delay="900">
        與台積電、高雄大學共榮推漲
      </div>
      <div data-aos="fade-up" data-aos-delay="900">
        昔日一地尊貴，未來一席絕響
      </div>


    </div>
    <div class="txt" v-else>
      <div data-aos="fade-up" data-aos-delay="0">
        高雄崛起，世界望向台灣，台灣高雄，躍升新亞洲核心
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        台積電從高雄啟航，劃出第一道亞洲聚富軸線
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        全球科技集團在高雄攻城掠地
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        您必須重新佈局，回到亞洲的新核心—高雄
      </div>
      <br>
      <div data-aos="fade-up" data-aos-delay="400">
        論談地段，台積電說了才算，世界同步聚富磁場
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        高大特區奇貨可居，地王之王一席難求
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        精華土地不可複製，增值實力越墊越高
      </div>
      <br>
      <div data-aos="fade-up" data-aos-delay="700">
        站上科技巨人的肩膀，定錨台積電高大核心
      </div>
      <div data-aos="fade-up" data-aos-delay="800">
        掌握世界級的耀眼先積，與台積電、高雄大學共榮推漲
      </div>
      <div data-aos="fade-up" data-aos-delay="900">
        昔日一地尊貴，未來一席絕響
      </div>
    </div>
    <div class="img">
      <img src="./s1/logo.svg" alt="logo" data-aos="fade-up" data-aos-delay="0">
      <img src="./s2/coming.svg" alt="coming" data-aos="fade-up" data-aos-delay="200">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s2 {
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  color: #3e3a39;
  gap: size(95);
  font-size: size(22);
  line-height: 1.8;
  letter-spacing: 0.04em;
  padding: size(152) 0 size(430) 0;
  overflow: hidden;
  z-index: 2;
  .bg{position: absolute;width:100%;left:0;bottom: 0;}
  .txt{position: relative;z-index: 3;margin-left: size(10);}
  .img{position: relative;z-index: 3;width: size(541);
    img{width: 100%;margin: size(40) 0 size(20) 0;}
  }
}
  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {
  .s2 {
    flex-direction:column;
    font-size: sizem(12.5);
    text-align: center;line-height: 1.92;
    padding: sizem(46) 0 sizem(240) 0;
    gap:0;
    .bg{bottom: auto;top: 0;width: 354%;left: -124%;}
    .txt{margin-left: 0;}
    .img{width: sizem(245);
      img{margin: sizem(26) 0 sizem(4) 0;
      &:last-child{width:82%;}
      }
    }
  
  }

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
  
} */
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>