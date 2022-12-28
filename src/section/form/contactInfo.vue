<template>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
    <div class="logo"></div>
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-between items-center" @click="modalOpen = true; modalType = 'phone'">
        <img src="@/section/form/phone.svg" alt="景上汀" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-between items-center" @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/form/messenger.svg" alt="景上汀" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-between items-center btfanpage" @click="open()">
        <img src="@/section/form/fb.svg" alt="景上汀" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap">
      <div class="flex contact-item justify-between items-center address">
        <div>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-between items-center googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="@/section/form/gmap.svg" alt="景上汀" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>

  </div>


  <!-- Mobile contact info -->
    <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phone'">
      <img src="@/section/form/phone.svg" alt="景上汀" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/messenger.svg" alt="景上汀" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="景上汀" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/gmap.svg" alt="景上汀" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="景上汀" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="景上汀" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="景上汀" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
      '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
      `接待中心：${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" v-if="modalType != 'phone'" v-bind:class="{
        'hidden': modalType == 'phone' && !$isMobile(),
        'btlead': modalType == 'fb',
        'btsearch': modalType == 'gmap',
        'btcontac': modalType == 'phone'
      }">
        {{ modalType == 'phone' ? '撥打電話' : modalType == 'fb' ? '立即諮詢' :
        '開啟導航'
        }}</div>
      <!-- btn phone -->
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else v-bind:class="{
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
  padding: size(55) size(168) size(55) size(168);
  margin-top: sizem(10);
  position: relative;
  z-index: 50;
  margin-bottom: 0;

  .logo {
    width: size(367);
    height: size(172);
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
      font-size: size(16);
      line-height: 3.8;
      letter-spacing: 0.06em;
      max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        background-color: #055F76;
        color: #fff;

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        filter: brightness(0) invert(0);
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


      &.googlemap {
        background-color: #666;
        color: #fff;

        img {
          filter: brightness(0) invert(1);
        }

        &:hover {
          background-color: gray;
          color: #fff;
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
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);

    .contact-item {
      height: 100%;
      background-color: #595757;
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(1);
      }

    }
  }

  .contact-info {
    width: sizem(375);
    height: sizem(590);
    // border-radius: sizem(68);
    padding: sizem(50) sizem(15);
    margin-top: sizem(60);
    position: relative;
    justify-content: space-between;

    .logo {
      width: sizem(257);
      height: sizem(89);
      background-image: url("@/section/form/logo.png");
      margin-bottom: sizem(47);
    }

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      gap: sizem(20);
      flex-direction: column;

      .contact-item {
        padding: 0 sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
          border-radius: sizem(10);

        img {
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
        }

        &.address {
          border-radius: sizem(10) sizem(10) 0 0;
          padding: 0 0;
          margin-top: sizem(20);

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address+div {
          border-radius: 0 0 sizem(10) sizem(10);
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
