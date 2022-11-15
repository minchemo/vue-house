<template>
  <div class="contact-info mx-auto bg-transparent flex flex-col items-center justify-between font-['noto_sans_tc'] section9">
    <!-- <div class="logo"></div> -->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-between items-center" @click="modalOpen = true; modalType = 'phone'">
        <img src="@/section/form/phone.svg" alt="宗大敘山" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-between items-center" @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/form/messenger.svg" alt="宗大敘山" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-between items-center btfanpage" @click="open()">
        <img src="@/section/form/fb.svg" alt="宗大敘山" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap">
      <div class="flex contact-item justify-between items-center address">
        <div class="mo-only" v-if="$isMobile()">接待中心</div>
        <div>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-between items-center googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="@/section/form/gmap.svg" alt="宗大敘山" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>

  </div>


  <!-- Mobile contact info -->
  <div v-if="$isMobile()"
    class="bg-[#C6A93E] font-['noto_sans_tc'] mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.s1')">
      <img src="@/section/form/home1.svg" alt="宗大敘山" srcset="" />
      <div>home</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      v-bind:class="{ active: modalType == 'fb' }" @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/facebook1.svg" alt="宗大敘山" srcset="" />
      <div>facebook</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/contactus1.svg" alt="宗大敘山" srcset="" />
      <div>contact us</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      v-bind:class="{ active: modalType == 'gmap' }" @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/location1.svg" alt="宗大敘山" srcset="" />
      <div>location</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4" @click="modalType = ''">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="宗大敘山" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="宗大敘山" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="宗大敘山" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
          `接待中心：${info.address}`
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

.contact-info {
  width: size(1200);
  // border-radius: size(115);
  padding: size(80) size(168);
  // margin-top: size-m(20);
  position: relative;
  z-index: 50;
  margin-bottom: 0;

  .logo {
    width: size(556);
    height: size(193);
    background-image: url("@/section/form/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: size(30);
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);

    .contact-item {
      background-color: #fff;
      color: #000;
      width: 100%;
      padding: 0 size(55);
      // border-radius: 9999px;
      border: 2px solid #C6A93E;
      font-size: size(16);
      line-height: 3.8;
      letter-spacing: 0.06em;
      max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        background-color: #C6A93E;
        color: #fff;

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        filter: invert(89%) sepia(63%) saturate(808%) hue-rotate(326deg) brightness(86%) contrast(78%); // 選顏色 https://codepen.io/sosuke/pen/Pjoqqp
        transition: all .5s;
      }

      &.address {
        background-color: #fff;
        color: #000;
        z-index: 0;
        position: relative;
        // border-radius: 999px 0 0 999px;
        max-width: 9999px;
        justify-content: center;
        border: 0;

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: #fff;
          left: calc(100% - 4em);
          z-index: -1;
        }
      }


      &.googlemap {
        background-color: #C6A93E;
        color: #fff;

        img {
          filter: brightness(0) invert(1);
        }

        &:hover {
          background-color: #fff;
          color: #C6A93E;
          img {
            filter: invert(89%) sepia(63%) saturate(808%) hue-rotate(326deg) brightness(86%) contrast(78%); // 選顏色 https://codepen.io/sosuke/pen/Pjoqqp

          }
        }
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}

@media screen and (max-width:768px) {
  .mo-contact-info {
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    width: size-m(375);
    height: size-m(83);
    gap: 1px;

    .contact-item {
      height: 100%;
      background-color: #304637;
      font-size: size-m(10);
      font-weight: 400;
      color: #fff;
      letter-spacing: size-m(1);

      img {
        margin-bottom: size-m(5);
        max-width: size-m(30);
        height: auto;
        max-height: size-m(30);
      }
      &:hover {
        background-color: #C6A93E;
      }
      &.active {
        background-color: #C6A93E;
      }
    }
  }

  .contact-info {
    width: size-m(375);
    height: size-m(500);
    // border-radius: size-m(68);
    padding: size-m(50) size-m(15);
    margin-top: size-m(30);
    margin-bottom: size-m(30);
    position: relative;
    justify-content: space-between;

    .logo {
      width: size-m(209);
      height: size-m(98);
      background-image: url("@/section/form/logo.png");
      margin-bottom: size-m(30);
    }

    .contact-item-box {
      position: relative;
      margin-top: size-m(0);
      gap: size-m(20);
      flex-direction: column;

      .contact-item {
        padding: 0 size-m(80);
        font-size: size-m(16);
        max-width: 100%;
        white-space: nowrap;

        img {
          max-width: size-m(27);
          height: auto;
          max-height: size-m(27);
          margin: unset;
        }

        &.address {
          padding: 0 0;
          margin-top: size-m(20);
          flex-wrap: wrap;
      border: 2px solid #C6A93E;

          .mo-only {
            flex: 100%;
            font-size: size-m(12);
            color: #C6A93E;
            margin-bottom: -#{size-m(30)};
          }

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address+div {
          // border-radius: 0 0 size-m(30) size-m(30);
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
    // setTimeout(() => {
    //   window.location.href = "phoneThanks";
    // }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const open = () => {
  window.open(info.fbLink);
}


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>
