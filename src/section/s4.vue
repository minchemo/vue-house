<template>
  <article class="s4" ref="s4">
    <div class="txt">
      <img src="./s3/en.svg" class="en">
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">岡山六大 利多建設</h3>
      <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">軌道經濟 讓世界看見岡山 </h4>
      <p class="desc" data-aos="fade-up" data-aos-delay="200">岡山六大利多，高雄城市輕移。<br>
        隨著高雄捷運RK1岡山站正式通車，<br>
        雙鐵共構引領岡山進入軌道經濟時代。<br>
        岡山站聯開案、高醫岡山分院、87期重劃區、<br>
        岡山區行政中心(機15)、第二交流道...等<br>
        諸多前瞻項目，讓岡山成為世界焦點。</p>
    </div>
    <div class="img">
      <img src="./s3/img.svg">
      <div class="list list1"  @click="modalOpen = true; modalType = 'list1'"><img src="./s3/1.jpg"></div>
      <div class="list list2"  @click="modalOpen = true; modalType = 'list2'"><img src="./s3/2.jpg"></div>
      <div class="list list3"  @click="modalOpen = true; modalType = 'list3'"><img src="./s3/3.jpg"></div>
      <div class="list list4"  @click="modalOpen = true; modalType = 'list4'"><img src="./s3/4.jpg"></div>
    </div>
  </article>

    <!-- Modal -->
    <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal s3mod flex  items-center justify-center">
    <label for="contact-modal" class="bg absolute left-0 top-0"></label>
    <div class="py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-0 top-2">✕</label>
      <!-- icon -->
      <img class="modimg" v-if="modalType == 'list1'" src="./s3/1.jpg" alt="list1" srcset="" />
      <img class="modimg" v-else-if="modalType == 'list2'" src="./s3/2.jpg" alt="list2" srcset="" />
      <img class="modimg" v-else-if="modalType == 'list3'" src="./s3/3.jpg" alt="list3" srcset="" />
      <!-- title -->
      <div class="text-[#fff] mt-2 font-bold">{{ 
      modalType == 'list1' ? '岡山新行政中心模擬圖圖/高雄市府發展局' : 
      modalType == 'list2' ? '第87期市地重劃區。圖/高雄市府地政局' :
          'RK1站西基地案模擬圖。圖/高雄市政府捷運工程局'
      }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s4 {
  @apply relative flex  flex-col  text-[#4D4D4D];
  width: 100%;
  height:size(1080);
  padding:0;
  font-size:size(24);
  flex-wrap: wrap;
  background :url("./s3/bg.jpg") center center;
  background-size: cover;
  
.txt {
  position: relative;
  z-index: 3;
  text-align: center;
    font-weight: 400;pointer-events: none;
    padding:4.3em 0 0 0;
    .en{filter: drop-shadow(0px 0px 10px rgba(76, 84, 135, 0.50));
      height: 4.75em;display: block;margin: auto auto .5em auto;
    }
    .title{display: inline-block;
      font-size:size(82);width: size(970);
      font-weight: 700;letter-spacing: 0.1em;
      border-bottom: 1px solid currentColor;
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .1em auto 0;
    }
    .desc{
      font-weight: 700;
    @media screen and (min-width: 768px) {
      position: absolute;text-align: justify;letter-spacing: 0.06em;left: size(220);top:size(550);
    }
    }
  }
.img{position: absolute;left: calc(50% - 1.7vw);top:calc(50% - 5.3vw);
  width: size(616);
img{width: 100%;}
.list{position: absolute;overflow: hidden;
  width: 1em;height: 1.155em;
  clip-path: polygon(0% 25%, 50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%);
img{position: relative;
  height:100%;width: auto;object-fit: cover;vertical-align: top;}
  &::after{
    font-size:size(70);content: "+";display: block;
    position: absolute;top:calc(50% - .8em);left:0;color: #fffc;
    text-shadow: 0 0 6px #000;
    width: 100%;text-align: center;
    font-weight:300;

}
&:hover{
  &:after{color: #fff;}
}
}
.list1{ font-size:size(231);top:size(317);left: size(-120);
  img{transform: translate(-34% , -5%);height:105%;}
}
.list2{ font-size:size(240);top: size(310);right: size(-145);
  img{transform: translate(-15% , -5%);height:105%;}}
.list3{ font-size:size(122);top: size(25);right: size(-35);
  img{transform: translate(-34% , 0);}}
.list4{ font-size:size(176);top: size(130);right: size(-220);
  img{transform: translate(-5% , 0);}
  &::after{display: none;}
}
}
}
.s3mod{background: rgba(86, 166, 187, 0.40);
  backdrop-filter: blur(2px);
.bg{width: 100%;height: 100%;}
} 
.modimg{width:size(1200);}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
  @apply flex-col;
  height:sizem(640);
    padding:3em 0 0 0;
  font-size:sizem(13);
  flex-wrap:nowrap;
  margin-bottom:0em;
  gap:0em;

  .txt {
    width:sizem(310);
    margin:0 auto;
    padding: 0;
    .en{filter: drop-shadow(0px 0px 10px rgba(76, 84, 135, 0.50));
      height:2.8em;margin: auto auto 0 auto;
    }
    .title{width:100%;
      font-size:sizem(25);
      padding-bottom: .3em;}
    .subtitle{
      font-size:sizem(15);
      margin: .8em auto 1.2em;}
  }
.img{
  position: relative;top: sizem(35);left: sizem(47);width:sizem(280);
  
.list{
  &::after{font-size:sizem(40);}
}

.list1{ font-size:sizem(95);top:sizem(148);left: sizem(-47);
}
.list2{ font-size:sizem(98);top:sizem(148);right: sizem(-52);
}
.list3{ font-size:sizem(68);top:sizem(-15);right: sizem(-30);
}
.list4{ font-size:sizem(83);top:sizem(60);right: sizem(-85);
}
}

  }
  .modimg{width:100%;}
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
  pagination: false,
  autoWidth: true,
  focus    : 'center',
  omitEnd  : true,
 // autoplay: true,
  interval: 5000,
  gap: 0,
  type: 'loop'
}

const imgs = [
  {
    img:new URL("./s3/01.webp", import.meta.url).href ,
    caption: "3D鳥瞰環境合成示意圖，僅供參考"
  },
  {
    img:new URL("./s3/02.webp", import.meta.url).href ,
    caption: "岡山新行政中心模擬圖圖/高雄市府發展局"
  },
  {
    img:new URL("./s3/03.webp", import.meta.url).href ,
    caption: "第87期市地重劃區。圖/高雄市府地政局"
  },
  {
    img:new URL("./s3/04.webp", import.meta.url).href ,
    caption: "RK1站西基地案模擬圖。圖/高雄市政府捷運工程局"
  },
  {
    img:globals.$isMobile()? new URL("./s3/05m.jpg", import.meta.url).href : new URL("./s3/05.webp", import.meta.url).href ,
    caption: "麥當勞"
  },
  {
    img:globals.$isMobile()? new URL("./s3/06m.jpg", import.meta.url).href : new URL("./s3/06.webp", import.meta.url).href ,
    caption: "星巴克"
  },
]


const modalOpen = ref(false);
const modalType = ref('');


</script>

