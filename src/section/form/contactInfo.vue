<template>
  <div class="contact">
    <!-- <a :href="info.line" target="_blank" v-if="!isMobile && info.line"
      class="lineicon fixed z-[99] right-[1vw] bottom-[8vw] w-[4vw]">
      <img src="//h35.banner.tw/img/form/line.svg" />
    </a> -->
    <div class="contact-info mx-auto  flex flex-col items-center justify-between z-2 relative">
      
      <div class="logo" data-aos="zoom-in">
        <img src="@/section/s1/logo.svg" alt="logo" />
        <img src="@/section/s1/light.png" alt="light" class="light" />
      </div>
      <!--  <div class="logo">
      <img src="@/section/s1/logo.svg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    </div>
    <img src="@/section/s1/logo.svg" class="logo" alt="">  -->
      <div class="contact-row">
        <div class="contact-item" @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
          <img src="//h35.banner.tw/img/form/phone.svg" alt="電話" srcset="" />
          <div>{{ info.phone }}</div>
        </div>
        <div class="contact-item" v-if="info.fbMessage" @click="modalOpen = true; modalType = 'messenger'">
          <img src="//h35.banner.tw/img/form/messenger.svg" alt="Facebook 諮詢" srcset="" />
          <div>Facebook 諮詢</div>
        </div>
        <div class="contact-item btfanpage" v-if="info.fbLink" @click="open(info.fbLink)">
          <img src="//h35.banner.tw/img/form/fb.svg" alt="前往粉絲專頁" srcset="" />
          <div>前往粉絲專頁</div>
        </div>
        <div class="contact-item btline" v-if="info.line" @click="open(info.line)">
          <img src="//h35.banner.tw/img/form/line.svg" alt="官方LINE" srcset="" />
          <div>官方LINE</div>
        </div>
      </div>
      <div class="contact-row bottom" v-if="info.address">
        <div class="contact-item address">
          <div><span v-if="info.address1">{{ info.address1 }}：</span>{{ info.address }}</div>
        </div>
        <div class="contact-item googlemap" @click="modalOpen = true; modalType = 'gmap'">
          <img src="//h35.banner.tw/img/form/gmap.svg" alt="導航 GoogleMap" srcset="" />
          <div>導航 GoogleMap</div>
        </div>
      </div>

    </div>
  </div>

  <!-- Mobile contact info -->
  <div class="bg-white mo-contact-info flex justify-end w-full contact-item-box items-center">
    <!--  <img src="@/section/s1/logo.svg" class="logo" alt="雲禾月logo"  v-if="!$isMobile()"  @click="scrollTo('.s1')"> -->

    <div class="flex flex-col contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'"
      v-if="info.phone">
      <img src="//h35.banner.tw/img/form/phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'messenger'">
      <img src="//h35.banner.tw/img/form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <!--  <div class="flex flex-col contact-item justify-center items-center" @click="open(info.fbLink)">
      <img src="//h35.banner.tw/img/form/fb.svg" alt="前往粉絲專頁" srcset="" />
      <div>粉絲專頁</div>
    </div> -->
    <div class="flex flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h35.banner.tw/img/form/pen.svg" alt="預約賞屋" srcset="" />
      <div>預約賞屋</div>
    </div>
    <!--  -->
    <div class="flex flex-col contact-item justify-center items-center" @click="modalOpen = true; modalType = 'gmap'"
      v-if="info.address">
      <img src="//h35.banner.tw/img/form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
    <div class="flex flex-col contact-item justify-center items-center" v-if="info.line" @click="open(info.line)">
      <img src="//h35.banner.tw/img/form/line.svg" alt="官方LINE" srcset="" />
      <div>官方LINE</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72 text-[#000]">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h35.banner.tw/img/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'messenger'" src="//h35.banner.tw/img/form/messenger.svg"
        alt="messenger" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h35.banner.tw/img/form/fb.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h35.banner.tw/img/form/gmap.svg" alt="gmap" srcset="" />
      <img class="h-12" v-else-if="modalType == 'line'" src="//h35.banner.tw/img/form/line.svg" alt="line" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{
        modalType == 'phone' ? '賞屋專線' :
          modalType == 'messenger' ? 'Facebook Messenger' :
            modalType == 'fb' ? 'Facebook 粉絲專頁' :
              modalType == 'line' ? 'LINE賞屋客服' :
                modalType == 'gmap' ? `${info.address2 ? info.address2 : '導航地址'}` :
                  ''
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{
        modalType == 'phone' ? info.phone :
          modalType == 'messenger' ? '線上諮詢' :
            modalType == 'fb' ? '' :
              modalType == 'line' ? '' :
                modalType == 'gmap' ? `${info.address}` :
                  ''
        }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()"
        v-if="modalType != 'phone'" v-bind:class="{
          'hidden': modalType == 'phone' && !$isMobile(),
          'btlead': modalType == 'messenger',
          'btfanpage': modalType == 'fb',
          'btsearch': modalType == 'gmap',
          'btline': modalType == 'line',
          'btcontac': modalType == 'phone'
        }">
        {{
          modalType == 'phone' ? '撥打電話' :
            modalType == 'messenger' ? '立即諮詢' :
              modalType == 'fb' ? '前往粉絲專頁' :
                modalType == 'line' ? '加入' :
                  modalType == 'gmap' ? '開啟導航' :
                    ''
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else
        v-bind:class="{
          'hidden': modalType == 'phone' && !$isMobile(),
          'btlead': modalType == 'messenger',
          'btfanpage': modalType == 'fb',
          'btsearch': modalType == 'gmap',
          'btline': modalType == 'line',
          'btcontac': modalType == 'phone'
        }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'messenger' ? '立即諮詢' : modalType == 'fb' ? '前往粉絲專頁' :
          '開啟導航'
        }}</div>
    </div>
  </div>


</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.bg-color1 {
  background-color: #0189D3;
}

.hover\:bg-color2:hover {
  background-color: #04004D;
}


.lineicon {
  background: #06c755;
  border-radius: 20%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 71%;
    filter: brightness(0) invert(1);
  }
}


.mo-contact-info {
  display: none;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: size(60);
  background: linear-gradient(180deg, #110B60 , #3FA1D2);
  font-size: size(16);
  font-weight: 500;


  .contact-item {
    height: 100%;
    color: #857550;
    border-left: 1px solid #fff9;
    padding: 0 .6em;
    transition: background .3s;

    img {
      margin-bottom: 0.3em;
      max-width: 1.03em;
      height: auto;
      max-height: 1.03em;
      filter: invert(50%) sepia(20%) saturate(662%) hue-rotate(4deg) brightness(88%) contrast(90%);
    }

    &:first-child {
      border-left: 0;
    }

    &:hover {
      background: #fff9;
    }
  }
}

@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.contact{
  // background: url("@/section/s1/bg-c.webp") center  size(215) no-repeat;
 //  background-size: 100% auto;
}


  .logo {
    width: sizem(250);
    margin: 0 auto  sizem(30);

    @media screen and (min-width: 768px) {
      //  top: size(360);
      width: size(356);
    margin: 0 auto  size(50);

    }

    img {
      width: 100%;
    }

    .light {
      position: absolute;
      width: 40.16%;
      top: 0%;
      left: 26%;
      mix-blend-mode: screen;
      animation: light 4s infinite;
    }
  }
  @keyframes light {
  0%   {transform: rotate(0) scale(1); }
  50%   {transform: rotate(180) scale(2); }
  100% {transform: rotate(360deg) scale(1);}
}


// ── 變數 ──────────────────────────────────────────
$border-radius: 0.5em; //按鈕圓角尺寸
$gap: 15px; //間距
$cols: 3; // 上排按鈕欄數，改這裡就好

// 導航按鈕寬度 = 上排每欄寬度
// 公式：(100% - gap * (欄數-1)) / 欄數
$btn-w: calc((100% - #{$gap} * #{$cols - 1}) / #{$cols});

// ── 共用 mixin ─────────────────────────────────────
@mixin contact-item-base {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  padding: 1.1em 1em;
background: linear-gradient(149deg, #ECC272 -75.22%, #9D6F3E -54.29%, #DAAF68 -12.43%, #F3EFB2 25.25%, #DAAF68 60.63%, #6C4323 98.88%, #DAAF68 134.1%);
  color: #160A00;
  border: 0px solid #3BEDFF99;
  border-radius: $border-radius;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.25s, color 0.25s, border-color 0.25s;
  white-space: nowrap;

  img {
    width: 1.65em;
    height: 1.65em;
    object-fit: contain;
    flex-shrink: 0;
    filter: brightness(0) invert(0);
    transition: filter 0.25s;
    margin: 0;
  }

  &:hover {
    background: linear-gradient(149deg, #DAAF68 -75.22%, #9D6F3E -54.29%, #F3EFB2 -12.43%, #fff 25.25%, #F3EFB2 60.63%, #6C4323 98.88%, #DAAF68 134.1%);
    color: #000;
    //border-color: #c00;

    // img { filter: brightness(0) invert(1); }
  }
}

// ── 主體 ───────────────────────────────────────────
.contact-info {
  width: min(1200px, 95%); //最大1200px
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $gap;
  padding: 0 0 2em;

  // ── 第一排：N 欄平均分配 ──
  .contact-row {
    display: grid;
    width: 100%;
    gap: $gap;
    grid-template-columns: repeat(#{$cols}, 1fr);

    .contact-item {
      @include contact-item-base;
    }

    // ── 第二排：地址 + 導航，緊貼成一塊 ──
    &.bottom {
      gap: 0;
      grid-template-columns: 1fr $btn-w;

      .contact-item {
        @include contact-item-base;

        &.address {
          border: none;
          background: #fff;
          color: #000;
          cursor: default;
          white-space: normal;
          text-align: center;
          border-radius: $border-radius 0 0 $border-radius; // 只有左側圓角

          &:hover {
            background: #fff;
            color: #000;
          }
        }

        &.googlemap {
          border-radius: 0 $border-radius $border-radius 0; // 只有右側圓角
        }
      }
    }
  }
}


.modal-box {
  img {
    filter: invert(37%) sepia(60%) saturate(5826%) hue-rotate(182deg) brightness(101%) contrast(101%);
  }
}

@media screen and (max-width:768px) {


  .mo-contact-info {
    display: flex;
    top: auto;
    bottom: 0;
    width: sizem(375);
    height: sizem(63);
    gap: 0;
    box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.5);
    font-size: sizem(16);
    background: linear-gradient(180deg, #04003A 0.24%, #0091DA 99.76%);
  // background: linear-gradient(90deg, #FD4B13 , #E90F13, #9C1A84);

    .contact-item {
      flex: 1;
      padding: 0;
      color: #fff;

      img {
        filter: brightness(0) invert(1);
      }
    }
  }
  .contact{
   background-position: center sizem(40);
   background-size: 400% auto;
}


  .contact-info {

    width: sizem(310);

    .contact-row {
      grid-template-columns: 1fr;
      gap: 12px;

      .contact-item {
        position: relative;
        justify-content: center; // 文字置中

        img {
          position: absolute;
          left: 3em; // 所有 icon 靠左同一條線
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &.bottom {
        grid-template-columns: 1fr;
        gap: 0;

        .contact-item {
          &.address {
            // border: 1.5px solid #00744a;
            //   border-bottom: none;
            border-radius: $border-radius $border-radius 0 0;
            white-space: normal;
          }

          &.googlemap {
            border-radius: 0 0 $border-radius $border-radius;
          }
        }
      }
    }
  }
}
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    setTimeout(() => {
      window.location.href = "phoneThanks";
    }, 1000);
  } else if (modalType.value == 'messenger') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);
  }
}

const open = (link) => {
  window.open(link);
}


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>