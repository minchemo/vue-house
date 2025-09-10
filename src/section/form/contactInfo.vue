<template>
  <div>
    <div class="contact-info-img relative">
    </div>
    <div class="contact-info mx-auto  flex flex-col items-center justify-between">
      <!--    -->
      <div class="flex w-full contact-info-box">
        <div class="w-full logo-box">
          <div class="flex justify-between w-full contact-item-box">
            <div class="flex contact-item justify-center items-center green"
              @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
              <img src="//h35.banner.tw/img/form/phone.svg" alt="電話" srcset="" />
              <div>{{ info.phone }}</div>
            </div>
            <div class="flex contact-item justify-center items-center green btlead-fb" @click="open()">
              <img src="//h35.banner.tw/img/form/fb.svg" alt="前往粉絲專頁" srcset="" />
              <div>前往粉絲專頁</div>
            </div>
            <div class="flex contact-item justify-center items-center green"
              @click="modalOpen = true; modalType = 'fb'">
              <img src="//h35.banner.tw/img/form/messenger.svg" alt="Facebook 諮詢" srcset="" />
              <div>Facebook 諮詢</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full contact-item-box address no-gap" v-if="info.address">
        <div class="flex contact-item justify-center items-center add">
          <div><span v-if="info.address1">{{ info.address1 }}：</span>{{ info.address }}</div>
        </div>
        <div class="flex contact-item justify-center items-center googlemap green"
          @click="modalOpen = true; modalType = 'gmap'">
          <img src="//h35.banner.tw/img/form/gmap.svg" alt="導航 GoogleMap" srcset="" />
          <div>導航 GoogleMap</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="//h35.banner.tw/img/form/phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <!--因為有兩個建案，區分兩個很醜所以先隱藏<div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="//h35.banner.tw/img/form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>-->
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h35.banner.tw/img/form/pen.svg" alt="立即預約" srcset="" />
      <div>立即預約
      </div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'" v-if="info.address">
      <img src="//h35.banner.tw/img/form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h35.banner.tw/img/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h35.banner.tw/img/form/messenger.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb2'" src="//h35.banner.tw/img/form/messenger.svg" alt="fb"
        srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h35.banner.tw/img/form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '預約專線' : modalType == 'fb' ? 'Facebook Messenger' :
        modalType ==
          'fb2' ? 'Facebook Messenger' :
          `${info.address2 ? info.address2 : '導航地址'}`
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' : modalType == 'fb2' ?
        '線上諮詢' :
        `${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()"
        v-if="modalType != 'phone'" v-bind:class="{
          'hidden': modalType == 'phone' && !$isMobile(),
          'btlead': modalType == 'fb',
          'btlead2': modalType == 'fb2',
          'btsearch': modalType == 'gmap',
          'btcontac': modalType == 'phone'
        }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' : modalType == 'fb2' ? '立即諮詢' :
          '開啟導航'
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else
        v-bind:class="{
          'hidden': modalType == 'phone' && !$isMobile(),
          'btlead': modalType == 'fb',
          'btlead2': modalType == 'fb2',
          'btsearch': modalType == 'gmap',
          'btcontac': modalType == 'phone'
        }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' : modalType == 'fb2' ? '立即諮詢' :
          '開啟導航'
        }}</div>
    </div>
  </div>


</template>

<style lang="scss">
@import "@/assets/style/function.scss";


.contact-info-img {
  height: 0;
  z-index: 52;
}

.contact-info {
  padding: 3.5em 0 1em 0;
  position: relative;
  z-index: 50;
  width: size(1200);
  min-width: 750px;
  font-size: 16px;

  .contact-info-box {
    justify-content: space-around;
  }



  .logo {
    position: relative;
    width: size(200);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: auto;

    img {
      width: 100%;
    }

    .logo {
      position: absolute;
      top: 31%;
      left: 0;
      right: 0;
      margin: auto;
      width: 85%;
    }
  }

  .contact-item-box {
    position: relative;
    gap: 1.25em;

    .contact-item {
      color: #FFF;
      width: 100%;
      flex: 1;
      padding: 1.1em 0;
      line-height: 1.6;
      letter-spacing: 0em;
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      gap: 1em;

      &:hover {
        color: #FFF;

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        max-width: 1.35em;
        height: auto;
        max-height: 1.35em;
        filter: brightness(0) invert(1);
        transition: all .5s;
        margin: 0;
      }

    }

    .green {
      background: #919F92;

      &:hover {
        background: rgb(110, 124, 111);
      }
    }

    .dark-green {
      background: #52777D;

      &:hover {
        background: #3b646a;
      }
    }

    .gray {
      background: #423E3D;

      &:hover {
        background: #423E3D;
      }
    }

    &.address {
      display: grid;
      grid-template-columns: 1fr 2.2fr 1fr;
      margin-top: 20px;
      width: 100%;

      .add {
        background: lch(100% 0.01 296.81);
        color: #000;
        width: sizem(159);
        justify-self: left;
      }
      .googlemap{
        width:sizem(75.5);
      }
    }

    &.no-gap {
      gap: 0;
    }
  }
}

.modal-box {
  img {
    filter: invert(0%) sepia(1%) saturate(4%) hue-rotate(348deg) brightness(99%) contrast(101%);
  }
}

@media screen and (max-width:768px) {

  //最下面選單
  .mo-contact-info {
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.501);
    background: #919F92;


    .contact-item {
      height: 100%;
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      border-left: 1px solid #fff9;

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(1);
      }

      &:first-child {
        border-left: 0;
      }

    }
  }

  .contact-info {
    width: 100%;
    min-width: 0;
    padding: sizem(60) 0 sizem(180) 0;
    position: relative;
    justify-content: space-between;
    background-size: sizem(450) auto;

    .contact-info-box {
      flex-direction: column;
    }

    .logo-box {
      display: flex;
      align-items: center;
      flex-direction: column;

      &:first-child {
        margin-right: 0;
        margin-bottom: size(300);
      }
    }

    .logo {
      width: sizem(160);

    }

    .contact-item-box {
      gap: sizem(20);
      flex-direction: column;
      width: sizem(310);
      height: size(920);

      .contact-item {
        padding: 1.1em sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        margin-top: size(120);

        &:last-child {
          margin-top: 0;
        }

        img {
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
          position: absolute;
          left: calc(50% - 5em);
          transform: translateX(-50%);
        }

        div {
          text-indent: 2em;
        }
      }

      &.address {
        margin-top: sizem(15);
        height: size(600);
        display: flex;
        flex-direction: column;

        .contact-item {
          &.add {
            text-align: center;
            background: #fff;
            margin-left: 0;

            div {
              text-indent: 0em;
            }
          }
        }
      }

      &.no-gap {
        gap: 0 !important;
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
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  }
  else if (modalType.value == 'fb2') {
    window.open(info.fbMessage2);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const open = () => {
  window.open(info.fbLink);
}

const open2 = () => {
  window.open(info.fbLink2);
}



const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>