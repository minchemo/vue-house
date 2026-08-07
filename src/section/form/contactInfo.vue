<template>
  <div class="contact">
    <img src="@/section/s1/c1.png" class="c1" alt="" />
    <img src="@/section/s1/c2.png" class="c2" alt="" />
    <a class="fb-messenger-fab z-[99] right-[1vw] bottom-[8vw] w-[4vw]" v-if="!isMobile && info.fbMessage"
      @click="modalOpen = true; modalType = 'messenger'" aria-label="與我們在 Messenger 聊天">
      <svg viewBox="0 0 36 36" class="fb-messenger-fab__icon" aria-hidden="true">
        <path fill="#fff"
          d="M18 7.5c-6.1 0-11 4.4-11 9.9 0 3.1 1.6 5.9 4.1 7.7v3.8l3.8-2.1c1 .3 2 .4 3.1.4 6.1 0 11-4.4 11-9.8S24.1 7.5 18 7.5zm1.1 13.3l-2.8-3-5.5 3 6-6.4 2.9 3 5.4-3-6 6.4z" />
      </svg><span>專人服務</span><span class="b">了解更多<br>歡迎私訊<br>專人回應</span>
    </a>
    <!-- <a :href="info.line" target="_blank" v-if="!isMobile && info.line"
      class="lineicon fixed z-[99] right-[1vw] bottom-[8vw] w-[4vw]">
      <img src="//h35.banner.tw/img/form/line.svg" />
    </a> -->
    <div class="contact-info mx-auto  flex flex-col items-center justify-between z-2 relative">
      <img src="@/section/s1/logo.svg" class="logo" alt="" data-aos="zoom-out" />
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
  <div class="modal -mt-20 md:-mt-72">
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
  background-color: #0070f6;
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

.fb-messenger-fab {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  flex-direction: column;

  &:hover {
    transform: scale(1.08);
  }

  &__icon {
    width: 100%;
    height: 100%;
    background: #0070f6;
    border-radius: 50%;
    aspect-ratio: 1/1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  span {
    font-size: 0.9rem;
    color: #fff;
    text-shadow: 0 0.1em 0.5em rgba(0, 0, 0, .8);
    margin-top: 0.25rem;

    &.b {
      position: absolute;
      display: block;
      top: 0%;
      right: 110%;
      font-size: 1em;
      line-height: 1.4;
      text-align: center;
      color: #333;
      background: #fff1d9;
      border-radius: 0.5em;
      text-shadow: none;
      white-space: nowrap;
     // width: 10em;
      padding: 0.5em;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      transform: translateX(50%);
      opacity: 0;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
  }
    &:hover {span.b {
      opacity: 1;
      transform: translateX(0%);
    }
    }

}

.mo-contact-info {
  display: flex;
  z-index: 99;
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: sizem(63);
  background: linear-gradient(90deg, #fff0 70%, #fff9);
  font-weight: 500;
  gap: 0;
  font-size: sizem(16);
  background: #FE7A92;
  box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.5);

  @media screen and (min-width:768px) {
    display: none;
    top: 0;
    height: size(60);
    box-shadow: none;
    font-size: size(16);
  }

  .contact-item {
    flex: 1;
    height: 100%;
    border-left: 1px solid #fff9;
    padding: 0;
    transition: background .3s;
    color: #fff;

    @media screen and (min-width:768px) {
      flex: 0;
      padding: 0 .6em;
      color: #857550
    }

    img {
      margin-bottom: 0.3em;
      max-width: 1.03em;
      height: auto;
      max-height: 1.03em;
      filter: brightness(0) invert(1);
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

.logo {
  position: relative;
  width: sizem(290);
  margin: sizem(40) auto sizem(30) auto;

  @media screen and (min-width:768px) {
    width: size(455);
    margin: size(60) auto size(30);

  }
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
  background: #6DAA43;
  color: #fff;
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
    filter: brightness(0) invert(1);
    transition: filter 0.25s;
    margin: 0;
  }

  &:hover {
    background: #45811d;
    color: #fff;
    //border-color: #c00;

    // img { filter: brightness(0) invert(1); }
  }
}

// ── 主體 ───────────────────────────────────────────
.contact {
  background: #EB6120;
  position: relative;

  .c1 {
    position: absolute;
    top: 0;
    left: 0;
    width: sizem(400);
    transform: translateX(-10%)translateY(-100%);
    transform-origin: 50%;
    pointer-events: none;

    // animation: an2 5s linear infinite alternate;
    @media screen and (min-width:768px) {
      width: size(985);
    }

  }

  .c2 {
    position: absolute;
    top: 0;
    right: 0;
    width: sizem(500);
    transform: skewX(-15deg)translateY(-100%);
    transform-origin: 50% 0;
    animation: an2 5s linear infinite alternate;
    pointer-events: none;

    @media screen and (min-width:768px) {
      width: size(1453);
    }

  }

  @keyframes an2 {
    to {
      transform: translateY(-100%);
    }
  }
}

.contact-info {
  width: sizem(310);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $gap;
  padding: 0 0 2em;

  @media screen and (min-width:768px) {
    width: min(1200px, 95%); //最大1200px
  }

  // ── 第一排：N 欄平均分配 ──
  .contact-row {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 12px;

    @media screen and (min-width:768px) {
      gap: $gap;
      grid-template-columns: repeat(#{$cols}, 1fr);

    }

    .contact-item {
      @include contact-item-base;
    }

    // ── 第二排：地址 + 導航，緊貼成一塊 ──
    &.bottom {
      gap: 0;
      grid-template-columns: 1fr;

      @media screen and (min-width:768px) {
        grid-template-columns: 1fr $btn-w;
      }

      .contact-item {
        @include contact-item-base;

        &.address {
          border: none;
          background: #fff;
          color: #000;
          cursor: default;
          white-space: normal;
          text-align: center;
          border-radius: $border-radius $border-radius 0 0;
          font-size: 15px;

          @media screen and (min-width:768px) {
            border-radius: $border-radius 0 0 $border-radius; // 只有左側圓角
            font-size: 16px;
          }

          &:hover {
            background: #fff;
            color: #000;
          }
        }

        &.googlemap {
          border-radius: 0 0 $border-radius $border-radius;

          @media screen and (min-width:768px) {
            border-radius: 0 $border-radius $border-radius 0; // 只有右側圓角
          }
        }
      }
    }
  }
}


.modal-box {
  img {
    filter: invert(30%) sepia(97%) saturate(3399%) hue-rotate(203deg) brightness(98%) contrast(102%);
  }
}

@media screen and (max-width:768px) {


  .contact-info {


    .contact-row {

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

    }
  }
}

//
</style>

<script setup>
import info from "@/info"
import { inject, ref } from "vue";
const contactModal = inject('contactModal')
/* const modalOpen = ref(false);
const modalType = ref(''); */
const modalOpen = contactModal.modalOpen
const modalType = contactModal.modalType
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