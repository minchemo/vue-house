<template>
  <div class="contact-info mx-auto bg-transparent flex flex-col items-center justify-between">
    <!-- <div class="logo"></div> -->
    <div class="flex justify-between w-full contact-item-box">
      <a class="flex contact-item justify-center md:justify-center gap-2 items-center" :href="'tel:'+info.phone" target="_blank">
        <img src="@/section/form/phone.svg" alt="phone" srcset="" />
        <div class="whitespace-nowrap">{{ info.phone }}</div>
      </a>
      
      
      <a class="flex contact-item justify-center md:justify-center gap-2 items-center" :href="info.fbMessage" target="_blank">
        <img src="@/section/form/messenger.svg" alt="messenger" srcset="" />
        <div class="whitespace-nowrap">線上諮詢</div>
      </a> 
      <a class="flex contact-item justify-center md:justify-center gap-2 items-center btfanpage" :href="info.fbLink" target="_blank">
        <img src="@/section/form/fb.svg" alt="fb" srcset="" />
        <div class="whitespace-nowrap">前往粉絲專頁</div>
      </a>
      <a class="flex contact-item justify-center md:justify-center gap-2 items-center"
        href="https://a-life.com.tw/2018new/product_main_41.html" target="_blank">
        <img src="@/section/form/info.svg" alt="info" srcset="" />
        <div class="whitespace-nowrap">瞭解更多</div>
      </a>
    </div>
    <div class="flex justify-center w-full contact-item-box no-gap">
      <div class="flex contact-item justify-between md:justify-center gap-2 items-center address">
        <div class="whitespace-nowrap">{{ info.address }}</div>
      </div>
      <a class="flex contact-item justify-center md:justify-center gap-2 items-center" :href="info.googleLink" target="_blank">
        <img src="@/section/form/gmap.svg" alt="gmap" srcset="" />
        <div class="whitespace-nowrap">導航 Google 地圖</div>
      </a>
    </div>

  </div>


  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <a class="flex flex-1 flex-col contact-item justify-center items-center" :href="'tel:'+info.phone" target="_blank">
      <img src="@/section/form/phone.svg" alt="phone" srcset="" />
      <div>撥打電話</div>
    </a>
    <!-- <a class="flex flex-1 flex-col contact-item justify-center items-center"
        href="https://a-life.com.tw/2018new/product_main_41.html" target="_blank">
        <img src="@/section/form/info.svg" alt="吉美富徠" srcset="" />
        <div>瞭解更多</div>
      </a>-->
    <a class="flex flex-1 flex-col contact-item justify-center items-center" :href="info.fbMessage" target="_blank">
      <img src="@/section/form/messenger.svg" alt="吉美富徠" srcset="" />
      <div>線上諮詢</div>
    </a>  
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="吉美富徠" srcset="" />
      <div>預約賞屋</div>
    </div>
    <a class="flex flex-1 flex-col contact-item justify-center items-center" :href="info.googleLink" target="_blank">
      <img src="@/section/form/gmap.svg" alt="吉美富徠" srcset="" />
      <div>地圖導航</div>
    </a>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="messenger" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? '線上諮詢' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '' :
          `接待中心：${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-black border-0 text-white mt-12 hover:bg-color2" @click="go()" v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '前往暸解' :
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
  padding: size(55) size(168) size(55) size(168);
  margin-top: size(60);
  position: relative;
  z-index: 50;
  margin-bottom: -#{size(30)};

  .logo {
    width: size(556);
    height: size(193);
    background-image: url("@/section/form/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: size(10);
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);

    .contact-item {
      background-color: #000;
      color: #fff;
      width: 100%;
      padding: 0 size(55);
      // border-radius: 9999px;
      border-radius: 10px;
      font-size: size(16);
      line-height: 3.8;
      letter-spacing: 0.06em;
      max-width: size(200);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        background-color: rgb(73, 73, 73);
        color: #fff;

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        filter: brightness(0) invert(1);
        transition: all .5s;
      }

      &.address {
        background-color: #eee;
        color: #000;
        z-index: 0;
        position: relative;
        // border-radius: 999px 0 0 999px;
        max-width: 9999px;
        justify-content: center;

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: #eee;
          left: calc(100% - 4em);
          z-index: -1;
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
    height: size-m(63);
    gap: size-m(1);

    .contact-item {
      height: 100%;
      background-color: #969083;
      font-size: size-m(16);
      font-weight: 400;
      color: #fff;

      img {
        margin-bottom: size-m(5);
        max-width: size-m(16.5);
        height: auto;
        max-height: size-m(16.5);
        filter: brightness(0) invert(1);
      }

    }
  }

  .contact-info {
    width: size-m(375);
    height: auto;
    // border-radius: size-m(68);
    padding: size-m(50) size-m(15);
    margin-top: size-m(25);
    position: relative;
    justify-content: flex-start;

    .logo {
      width: size-m(288);
      height: size-m(127);
      background-image: url("@/section/form/logo.png");
      margin-bottom: size-m(60);
    }

    .contact-item-box {
      position: relative;
      margin-top: size-m(0);
      gap: size-m(20);
      flex-direction: column;

      .contact-item {
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
    setTimeout(() => {
      window.location.href = "phoneThanks";
    }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }
}

const openphone= () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    setTimeout(() => {
      window.location.href = "phoneThanks";
    }, 1000);

}

}

const open = () => {
  if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);
  } else if (modalType.value == 'fbLink') {
    window.open(info.fbLink);
    
  }
}

/*
const open = () => {
  window.open(info.fbLink);
}
*/

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>
