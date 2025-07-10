<template>
  <article class="s10">

  
    <div class="main">
      <div class="txt">
        <transition name="fade" mode="out-in">
          <h4 class="subtitle font-['Noto_Serif_TC',serif]" :key="currentImg.subtitle" v-html="currentImg.subtitle"></h4>
        </transition>
        <transition name="fade" mode="out-in">
        <p :key="currentImg.desc" v-html="currentImg.desc"></p>
        </transition>
    </div>
    </div>
    <div class="slider" data-aos="fade">
      <div class="arrows">
        <div class="prev" @click="splide.splide.go('<')"></div>
        <div class="next" @click="splide.splide.go('>')"></div>
      </div>
      <Splide ref="splide" class="slide" @splide:move="moved" :options="options">
        <SplideSlide class="slide-item" v-for="(img, index) in imgs" :key="index" v-lazy:background-image="img.img">
          <span class="caption">{{ img.caption }}</span>
        </SplideSlide>
      </Splide>
    </div>

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s10 {
  @apply relative overflow-hidden flex items-center justify-center text-[#FFF];
  width: 100%;
  height:auto;
  padding:7em 0;
  font-size:size(18);
  gap:3em;
  //flex-direction: row-reverse;
  flex-wrap: wrap;
  .bg{
    span{
      &:nth-child(1){
        top: 1vw;
        left: 10vw;
        font-size: 3.5vw;
      }
      &:nth-child(2){
        top: 12vw;
        left: 2vw;
        font-size: 2vw;
      }
      &:nth-child(3){
        top: 3vw;
        left: 7vw;
        font-size: 9vw;
        transform: scale(.8);
        background: radial-gradient(ellipse at center, #64c8da33 65%,  #fff0 70%);
        animation-delay: 1.8s;
      }
      &:nth-child(4){
        top: 5vw;
        left: 26vw;
        font-size: 1.5vw;
      }
      &:nth-child(5){
        top: 12vw;
        right: 33vw;
        font-size: 4.5vw;
      }
      &:nth-child(6){
        top: 12vw;
        right: 1vw;
        font-size: 2.5vw;
        animation-delay: 1.5s;
      }
    }

 
  }

    

.subtitle{
  span{color:#BED400 !important;}
  }

  .main {
    @apply flex;
    margin: 0;
    flex-basis: size(590);
  flex-direction: column;
  text-align: justify;
}

.txt {
  
  .title{
    &::after,
    &::before{
      width: 11.1em;
    }
  }


  

  
}
  .slider {
    margin: 0;
    flex-basis: size(840);
    width: size(840);
      height: size(560);
    .slide-item {
      @apply bg-cover;
    flex-basis: size(840);
      height: size(560);
      
    }
    .splide__pagination{
      right: calc(100% + 3em);
      justify-content: flex-end;
    color: #C5C5C5; 
    li button.is-active{
      color: #529130;
    }
    }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s10 {
  flex-direction: column-reverse;
  height: auto;
  padding:0 0 5em 0;
  font-size:sizem(12);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:2em;

.img{bottom:sizem(230);right:sizem(-30);width:sizem(250);}
.bg{
    span{
      &:nth-child(1){
        top: 4vw;
        left: 82vw;
        font-size: 6vw;
      }
      &:nth-child(2){
        top: 57vw;
        left: 2vw;
        font-size: 8vw;
      }
      &:nth-child(3){
        top: 3vw;
        left: 77vw;
        font-size: 23vw;
      }
    }
  }

  .main {
    padding: 0 sizem(30);
    width: 100%;
}

.txt {
  .title{
    &::after,
    &::before{
      width: 0;
    }
  }
  .hr{
    width: sizem(100);
    margin: sizem(20) auto sizem(10);
    }
}



  .slider {
    height: auto;
    width: 100%;

    .caption {
    font-size:sizem(12); 
    right:sizem(5);
    bottom:sizem(5); 
    }
    .slide-item {
      @apply bg-cover;
      width: 100%;
    flex-basis: auto;
      height: sizem(250);
      
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
    img:new URL("./s10/1.webp", import.meta.url).href ,
    caption: "東京羽田機場",
    subtitle: "日本國土營造開發<br><span>日系究極精工 世界工程御用</span>",
    desc: "70年日本職人工法，以先進施工機械與技術聞名，在日本多項國家級公共建設都有卓越成就，技術與資金100%來自日本，深獲台灣高級建築界推崇與肯定。作品橫跨日本、台灣與新加坡，是亞洲極具代表性的國際營造集團。<br><br>代表作｜東京羽田機場、北陸新幹線、瀨戶大橋、三井花園飯店",
 },
  {
    img:new URL("./s10/2.webp", import.meta.url).href ,
    caption: "",
    subtitle: "金質建築代名詞<br><span>審議級建築大師 周劍平</span>",
    desc: "建築金質獎常勝軍，歷任新北市都審委員，橫跨實務與制度雙軸，擅長以都市脈絡為底稿、建築語彙為筆法，量身繪製符合生活節奏的建築尺度，為「松陽馥麗」構築理性與感性交融的建築美學。<br><br>代表作｜大通大美、榮耀之星、青水居、日新戲院重建案",
  },
  {
    img:new URL("./s10/3.webp", import.meta.url).href ,
    caption: "",
    subtitle: "橫掃全球設計大獎<br><span>空間美學設計師 王正行</span>",
    desc: "榮獲德國iF、紅點、Good Design、日本G-Mark、TID等國際設計大獎，專精住宅、公設與品牌空間設計，合作對象涵蓋國內頂尖豪宅，風格洗鍊、視野國際，為「松陽馥麗」量身打造五大生活場域。<br><br>代表作｜華固智富、皇翔新天玓、鉅虹森美館、馥華雲鼎",
  },
  {
    img:new URL("./s10/6.webp", import.meta.url).href ,
    caption: "",
    subtitle: "國際建築景觀視野<br><span>信義豪宅六國景觀設計大師 蘇瑞泉</span>",
    desc: "36年來專為頂級豪宅打造會呼吸的城市綠帶，作品遍及兩岸三地，包括台北大小巨蛋及信義區豪宅，完美融合建築與環境界線，使空間與土地產生最自然連結。戶外庭園不只是家向世界延伸的舞台，更是城市中具永續生態視野的最美地景。<br><br>代表作｜台北大巨蛋、台北小巨蛋、信義富邦、信義之星、皇翔天母、<br>仁愛鴻禧",
  },
  {
    img:new URL("./s10/4.webp", import.meta.url).href ,
    caption: "",
    subtitle: "耐震系統權威<br><span>摩天建築御用  劉勇男 結構技師</span>",
    desc: "專攻超高層建築與高耐震結構，曾任德國Covertex GmbH亞太總工程師，實績遍及台北、新竹、台中，擁有完整系統設計與技術統整能力，為建築安全建立科學後盾。<br><br>代表作｜元城文華苑、久樘香坡、大城新紐約、大城仰望",
  },
  {
    img:new URL("./s10/5.webp", import.meta.url).href ,
    caption: "",
    subtitle: "以國父紀念館規格打造建築光影<br><span>台灣燈光設計翹楚 袁宗南 燈光大師</span>",
    desc: "靠的不是絢麗奪目、五顏六色的燈光，而是充滿人文底蘊的設計理念。運用LED黃光與白光之對比光線，交織出低調奢華的美感，與景觀融為一體，如同展臂迎接主人回到溫馨城堡。同時，全套照明設備由電腦依計劃開啟、關閉，隨四季與天光調控，節能與環保兼具。<br><br>代表作｜國父紀念館、北京奧運鳥巢體育館、高雄海洋流行音樂中心、南港新光老爺酒店",
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>

