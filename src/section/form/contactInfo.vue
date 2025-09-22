<template>
  <div>
    <div class="contact-info-img relative">
    </div>
    <div class="contact-info mx-auto  flex flex-col items-center justify-between">
      <!--    -->
      <div class="flex w-full contact-info-box">
        <div class="w-full logo-box">
          <div class="flex justify-between w-full contact-item-box">
            <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'"
              v-if="info.phone">
              <img src="//h35.banner.tw/img/form/phone.svg" alt="電話" srcset="" />
              <div>{{ info.phone }}</div>
            </div>
            <div class="flex contact-item justify-center items-center btlead-fb" @click="open()">
              <img src="//h35.banner.tw/img/form/fb.svg" alt="前往粉絲專頁" srcset="" />
              <div>前往粉絲專頁</div>
            </div>
            <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'">
              <img src="//h35.banner.tw/img/form/messenger.svg" alt="Facebook 諮詢" srcset="" />
              <div>FB 諮詢</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full contact-item-box address no-gap" v-if="info.address">
        <div class="flex contact-item justify-center items-center add">
          <div><span v-if="info.address1">{{ info.address1 }}：</span>{{ info.address }}</div>
        </div>
        <div class="flex contact-item justify-center items-center googlemap"
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
      <img src="./phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="./messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
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
      <img class="h-12" v-if="modalType == 'phone'" src="./phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="./messenger.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="./gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '預約專線' : modalType == 'fb' ? 'Facebook Messenger' :
        `${info.address2 ? info.address2 : '導航地址'}`
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
        `${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()"
        v-if="modalType != 'phone'" v-bind:class="{
          'hidden': modalType == 'phone' && !$isMobile(),
          'btlead': modalType == 'fb',
          'btsearch': modalType == 'gmap',
          'btcontac': modalType == 'phone'
        }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
          '開啟導航'
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else
        v-bind:class="{
          'hidden': modalType == 'phone' && !$isMobile(),
          'btlead': modalType == 'fb',
          'btsearch': modalType == 'gmap',
          'btcontac': modalType == 'phone'
        }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
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
  padding: 3.5em 0 2em 0;
  position: relative;
  z-index: 50;
  width: size(950);
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
      color: #55371D;
      font-weight: 600;
      width: sizem(60);
      height: 4em;
      border-width: 3px;
      border-style: solid;
      border-color: transparent;
      border-radius: 10px;
      background-image: linear-gradient(90deg,
          #735131 0%,
          #A07248 15%,
          #CF9E6A 42%,
          #EFBC81 61%,
          #FEF9D9 72%,
          #EDBA80 84%,
          #593D25 100%), linear-gradient(to bottom, #735131, #A07248, #CF9E6A,
          #EFBC81,
          #FEF9D9,
          #EDBA80,
          #593D25);
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
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
        filter: invert(24%) sepia(13%) saturate(1840%) hue-rotate(346deg) brightness(93%) contrast(97%);
        transition: all .5s;
        margin: 0;
      }

    }

    .green {
      position: relative;
      overflow: hidden;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        width: 120%;
        height: 700%;
        background-image: url('../s1/bbg.png');
        background-size: cover;
        background-position: center;
        animation: rotate 60s linear infinite;
        z-index: -1;
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
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
      grid-template-columns: 2.15fr 1fr;
      margin-top: 20px;
      width: 100%;

      .add {
        color: #FFF;
        justify-self: left;
        border-radius: 10px 0 0 10px;
        background: none;
        border-width: 3px 0 3px 3px;
        border-style: solid;
        border-color: #735131;
      }

      .googlemap {
        border-radius: 0 10px 10px 0;

        @media screen and (max-width:768px) {
          border-radius: 0 0 10px 10px;
        }
      }
    }

    &.no-gap {
      gap: 0;
    }
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
    background: #131D2A;

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
    padding: sizem(60) 0 sizem(60) 0;
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
      height: size(1200);

      .contact-item {
        padding: 1.1em sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;

        &:last-child {
          margin-top: 0;
          width: 100%;
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

      .green::before {
        width: 120%;
        height: 800%;
      }

      &.address {
        width: sizem(310);
        margin-top: sizem(15);
        height: size(600);
        display: flex;
        flex-direction: column;

        .contact-item {
          &.add {
            width: 100%;
            text-align: center;
            border-width: 3px 3px 0 3px;
            border-radius: 10px 10px 0 0;
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
  else if (modalType.value == 'gmap') {
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