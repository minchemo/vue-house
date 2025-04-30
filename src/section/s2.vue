<template>
  <article class="s2 relative" id="s2">
    <img src="./s2/bgm.webp" class="bg" data-aos="fade" data-aos-delay="0" v-if="isMobile">
    <img src="./s2/bg.webp" class="bg" data-aos="fade" data-aos-delay="0" v-else>
    <div class="txt" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">

      <h1>掌握節點者 主宰城市脈動</h1>
      <h2>大坪林雙捷運 新店核心快捷鍵</h2>


      <div data-aos="fade-up" data-aos-delay="0">
        「忠孝復興站」貴為雙捷交匯樞紐
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        一線串聯都會命脈,一站奠定房價天花板
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        同樣坐擁尊貴雙捷DNA的「大坪林站」
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        正以同樣的節奏與能量,重塑新店價值新高地<br><br>
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        真正的核心從不在喧囂之中
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        而在能掌握節奏的人手上
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        從城市核心起步,向全台增值坐標進發
      </div>
      <div data-aos="fade-up" data-aos-delay="700">
        通往未來捷境的下一站,即將公開
      </div>     
    </div>
    <div class="txt" v-else>
      <h1>掌握節點者 主宰城市脈動</h1>
      <h2>大坪林雙捷運 新店核心快捷鍵</h2>

      <div data-aos="fade-up" data-aos-delay="0">
        「忠孝復興站」貴為雙捷交匯樞紐
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        一線串聯都會命脈,一站奠定房價天花板
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        同樣坐擁尊貴雙捷DNA的「大坪林站」
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        正以同樣的節奏與能量,重塑新店價值新高地<br><br>
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        真正的核心從不在喧囂之中
      </div>
      <div data-aos="fade-up" data-aos-delay="500">
        而在能掌握節奏的人手上
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        從城市核心起步,向全台增值坐標進發
      </div>
      <div data-aos="fade-up" data-aos-delay="700">
        通往未來捷境的下一站,即將公開
      </div>
    </div>

    <img src="./s2/iconm.svg" alt="icon" class="icon" data-aos="fade-up" data-aos-delay="0" v-if="isMobile">
    <img src="./s2/icon.svg" alt="icon" class="icon" data-aos="fade-up" data-aos-delay="0" v-else>
    <div class="font" v-if="isMobile">情境示意圖</div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';
.s2 {
  display: flex;
  flex-direction:row;
  justify-content: flex-start;
  align-items:center;
  background: #e6f5da;
  color: #231815;
  gap: size(95);
  font-size: size(22);
  line-height: 1.8;
  letter-spacing: 0.04em;
  
  overflow: hidden;
  z-index: 2;
  .bg{position: absolute;width:100%;left:size(10);bottom: 0;}
  .txt{
  position: relative;z-index: 3;margin-left: size(150);
  padding: size(200) 0 size(170) 0;
  
    h1{
      color: #007550;
      font-weight: 700;
      font-size: size(63);
    }

    h2{
      font-size: size(30);
      letter-spacing: 0.8em;
      margin-bottom: size(50);
    }
    div{
      margin: size(15) 0;
    }
  
  }


  .icon{
    position: absolute;
    width: size(860);
    right: 0;
    bottom: 0;
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
    //padding: sizem(46) 0 sizem(240) 0;
    gap:0;
    .bg{
    width: sizem(375);
    bottom: 0;
    left: 0;}
    .txt{margin-left: 0;
    padding: sizem(30) 0 sizem(320) 0;
    
    h1{
      font-size: sizem(25);
    }

    h2{
      font-size: sizem(13);
      letter-spacing: 0.65em;
      text-indent: 0.65em;
      margin-bottom: sizem(30);
    }
    div{text-align: left;}
    }

    .icon{
    width: sizem(375);
    right: 0;
    bottom: 0;
  }

  .font{
    position: absolute;
    color: #fff;
    bottom: sizem(8);
    left: sizem(8);
    font-size: sizem(9);
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