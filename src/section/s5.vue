<template>
  <article class="s5" id="s5" ref="s5">
  <div class="txt">
    <h3 class="title" data-aos="fade-up" data-aos-delay="0">
    <img src="./s5/title.svg">房市新訊</h3>
  </div>
  <div class="slider" data-aos="fade-up" data-aos-delay="200" v-if="!isMobile || maxImages == 0">
  <div class="slide-item" v-for="img in limitedImgs" :key="img.img">
    <a :href="img.link"  target=" _blank" class="link"></a>
    <img :src="img.img" :alt="img.name">
      <div class="name">{{ img.name }}</div>
      <div class="desc">{{ img.desc }}</div>
  </div>
    <div class="button">
      <a href="/#s5" v-if="maxImages == 0">回首頁</a>
      <a href="/news/" v-else-if="imgs.length > 7">更多資訊</a>
    </div>
  </div>

  
  <div class="slider"  data-aos="fade-up" data-aos-delay="200" v-else>
      <swiper  class="slide"
        :slidesPerView="'auto'" 
        :spaceBetween="50"
        :navigation="true"
        :loop="true"
        :speed="1500"
        :centeredSlides="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide  class="slide-item" v-for="img in limitedImgs" :key="img.img">
          <a :href="img.link"  target=" _blank" class="link"></a>
          <img :src="img.img" :alt="img.name">
      <div class="name">{{ img.name }}</div>
      <div class="desc">{{ img.desc }}</div>
        </swiper-slide>
      </swiper>
    <div class="button">
      <a href="/news/"  v-if="imgs.length > 6">更多資訊</a>
    </div>
    </div>
  

  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s5 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:6em 0 9em 0;
  font-size:size(17);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;

    .txt{width:100%;
  text-align: center;
  .title{
    position: relative;margin: 0 auto 1.8em;display: inline-block;
    img{height: 2.8em;
      display: block;position: relative;
      margin: 0 auto 0.3em auto;left: -.5em;
    }
  }
}
.button{width: 100%;
text-align: center;
a{display: block;background: #B7A999; color: #000;border-radius: 0 .8em 0 .8em;margin: auto;width: 7.8em;line-height: 2;letter-spacing: .2em;
  transition:transform .5s ;
&:hover{transform: scale(1.1);}
}
}
.slider {
    margin: 0 auto 0 auto;padding:0;
    width: size(1560);
      height:auto;
      display: flex;
      flex-wrap: wrap;
      gap:3em; justify-content:flex-start;

      .slide-item {position: relative;
          width: size(480);margin: 0;
          line-height: 1.7;
          text-align: justify;
          .link{position: absolute;top: 0;left: 0;width: 100%;height: 100%;transition:background .5s;
          &:hover{background: #0006;}
          }
  img{width: 100%;height:size(350);border-radius: 1em;margin: 0 0 1em;object-fit: cover;}
  .name{font-size: 1.15em;margin-bottom: 0.5em;white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
  .desc{font-size: 0.85em;
    white-space: inherit;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden; 
    -webkit-box-orient: vertical;margin-bottom: 3.5em;
    max-height: 50px;}
      }
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s5 {
  @apply flex-col;
    height: auto;
    padding: 3em 0 10em 0;
  font-size:sizem(14);
  flex-wrap:nowrap;
gap:0em;
    .txt{
  .title{margin: 0 auto 2.5em;
    img{height: 2.3em;left: -.5em;
    }
  }
}
.button{
  font-size:1.2em;
}
.slider {
  left: 0%;  width:100%;
    justify-content: center;
  .slide-item{opacity: 1; width: sizem(275);
  .link:hover{background: #0000;}
    img{height:sizem(282);margin-bottom: .5em;}
  .name{font-size: 1.3em;margin-bottom: .2em;}
  .desc{font-size: 1em;
    -webkit-line-clamp: 3;max-height:5em;}
  }
}
  
  .swiper-button-prev,
  .swiper-button-next{
      position: absolute;
      top: 7em;
      right: calc(50% - 13em);
      width:5.5em;
      height:5.5em;
      display: flex;
      pointer-events: stroke;
      cursor: pointer;z-index: 15;
  justify-content: center;
  align-items:center;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 52 52' fill='%23B7A999' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26,52c34.7,0,34.7-52,0-52S-8.7,52,26,52z'/%3E%3Cpath fill='none' stroke='%23000' stroke-width='1.5' d='M40.5,26h-28 M27.6,17.4L40.5,26l-12.9,8.6'/%3E%3C/svg%3E") no-repeat center;
    background-size: 50% auto;
    transition:background-color .5s;
    }
    .swiper-button-prev{transform: scaleX(-1);
      left: calc(50% - 13em);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);

const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
  currentSlideIndex.value = prevIdx
};

const props = defineProps({
  maxImages: {
    type: Number,
    default: 0
  }
});

const imgs = [
  {
    img:new URL("./s5/4.webp", import.meta.url).href ,
    link:'https://www.nownews.com/news/6428611',
    name: "星級待客之道綿延好宅　春福安安導入「飯店宅」服務精神",
    desc: "2024年適逢台南建城400年，府城迎來一連串系列活動，起家於新竹，深耕台南的春福機構也邁向品牌40週歲。10年前，春福機構看好台南深具底蘊的城市魅力，踏足東區、永康、安南等地推案。此外，與春福建設源於同門基因的煙波飯店集團，以「一館一特色」帶來旅行文化體驗，春福建設承襲煙波飯店系統DNA，將住家導入「飯店宅」服務精神，把星級待客之道運用在住宅物業上。"
  },
  {
    img:new URL("./s5/3.jpg", import.meta.url).href ,
    link:'https://www.mygonews.com/news/detail/news_id/215065',
    name: "南科人選住長安里 春福安安「4優勢」 3心建築親民價",
    desc: "【MyGoNews蕭又安/專題報導】春福機構堅持「共好哲學」，期許能夠從個人出發進而影響團隊再邁向社會共好。除了自己好、夥伴好、公司好，更要讓合作廠商與客戶都好。「沒有獨好，只有共好」的堅持，持續影響整個企業體系、合作廠商、購買客戶，春福機構堅持推出好的建築作品及好的售後服務，讓更多的客戶能買到安心的房子，圓滿萬戶家庭的夢想，讓共好精神持續傳遞下去。"
  },
  {
    img:new URL("./s5/5.webp", import.meta.url).href ,
    link:'https://tw.stock.yahoo.com/news/%E8%87%AA%E5%86%A0%E5%BB%BA%E8%A8%AD%E3%80%8C%E4%B8%89%E6%99%AF%E4%B8%89%E9%8C%A6%E3%80%8D-%E6%89%93%E9%80%A0%E4%B8%80%E5%B7%B7%E7%B6%A0%E6%86%A9%E6%B4%BB%E6%B0%A7%E5%BB%BA%E7%AF%89-022148929.html',
    name: "自冠建設「三景三錦」 打造一巷綠憩活氧建築",
    desc: "【MyGoNews蕭又安/專題報導】世界衛生組織(WHO)發布噪音風險研究報告指出，噪音越大，人類發生高血壓的風險也會隨之升高，當環境噪音大於40分貝，每增加10分貝，罹患高血壓的風險就會增加約6％。這份報告還建議，公路交通噪音平均值應控制在53分貝以下，而夜間則應在45分貝以下。因此，現在很多居家不得不門窗緊閉隔絕噪音，卻犧牲居住的空氣流暢，為了空氣流暢，又加裝室內全熱交換系統(或新風機)，讓家裡處處都是「人工」，缺少「自然」。"
  },
  {
    img:new URL("./s5/2.jpg", import.meta.url).href ,
    link:'https://money.udn.com/money/story/5638/7887498?from=edn_search_result',
    name: "安南區房價翻揚 近鄰「南科」合理價在「長安里」",
    desc: "根據台南市安南區都市計畫資料，全區共有32處「細部計畫」，陸續將帶動整個安南區穩健發展，其中A5新寮、溪心寮、總頭寮、十三佃地區的「產業發展鏈結」細部計畫中，有41.88公頃(大部分是在長安里)的應辦市地重劃正在辦理中，未來一旦開發完成，「長安里」的房地產行情就有機會跟著公辦都更水漲船高。"
  },
  {
    img:new URL("./s5/1.jpg", import.meta.url).href ,
    link:'https://www.ctee.com.tw/news/20240325700994-431206',
    name: "通膨置產3建議 台南「春福安安」全滿足",
    desc: "中央銀行在今年3月21日宣佈調高半碼利率，各金融機構自3月25日起調升0.125個百分點新台幣存放款利率，綜合房地產業的觀點是「衝擊不大」，但是深究央行調高利率的背後動機，則是4月電價上漲後，央行看到了「預期通貨膨脹」的未來趨勢，而對抗通貨膨脹的理財方式之一，就是「房地產」。"
  },
  {
    img:new URL("./s5/6.jpg", import.meta.url).href ,
    link:'https://money.udn.com/money/story/5638/7785718',
    name: "高雄勝偕集團「活建築+藝術建築」的實踐家",
    desc: "高雄勝偕集團董事長吳宗國汲取Less is More(減法建築)的簡約之美、Richard Meier(白派建築)的純淨風格、Green Building(綠建築)的環保概念，以及Intelligent Building(智慧建築)的科技應用，發展出屬於自己的Living Architecture(活建築)。集團秉持著設計、結構、施工、建築、服務五大理念為基石，並以活建築的概念打破傳統框架，呈現建築即藝術的獨特風采，他是「活建築+藝術建築」的實踐家。"
  },
  {
    img:new URL("./s5/6.jpg", import.meta.url).href ,
    link:'https://money.udn.com/money/story/5638/7785718',
    name: "高雄勝偕集團「活建築+藝術建築」的實踐家",
    desc: "高雄勝偕集團董事長吳宗國汲取Less is More(減法建築)的簡約之美、Richard Meier(白派建築)的純淨風格、Green Building(綠建築)的環保概念，以及Intelligent Building(智慧建築)的科技應用，發展出屬於自己的Living Architecture(活建築)。集團秉持著設計、結構、施工、建築、服務五大理念為基石，並以活建築的概念打破傳統框架，呈現建築即藝術的獨特風采，他是「活建築+藝術建築」的實踐家。"
  },
  {
    img:new URL("./s5/6.jpg", import.meta.url).href ,
    link:'https://money.udn.com/money/story/5638/7785718',
    name: "1",
    desc: "1"
  },
  /*
  {
    img:new URL("./s5/6.jpg", import.meta.url).href ,
    link:'https://money.udn.com/money/story/5638/7785718',
    name: "2",
    desc: "2"
  },
  {
    img:new URL("./s5/6.jpg", import.meta.url).href ,
    link:'https://money.udn.com/money/story/5638/7785718',
    name: "3",
    desc: "3"
  },
  {
    img:new URL("./s5/6.jpg", import.meta.url).href ,
    link:'https://money.udn.com/money/story/5638/7785718',
    name: "4",
    desc: "4"
  },*/
]
const limitedImgs = computed(() => {
  return props.maxImages > 0 ? imgs.slice(0, props.maxImages) : imgs;
});
</script>

