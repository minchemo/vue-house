<template>
  <div class="contact-info mx-auto bg-transparent flex flex-col items-center justify-between">
    <!-- <div class="logo"></div> -->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-between items-center" @click="modalOpen = true; modalType = 'phone'">
        <img src="@/section/form/phone.svg" alt="" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-between items-center" @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/form/messenger.svg" alt="" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-between items-center" @click="open()">
        <img src="@/section/form/fb.svg" alt="" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap">
      <div class="flex contact-item justify-between items-center address">
        <div>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-between items-center" @click="modalOpen = true; modalType = 'gmap'">
        <img src="@/section/form/gmap.svg" alt="" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>
  </div>

  <!-- Mobile contact info -->
  <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'">
      <img src="@/section/form/phone.svg" alt="" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="@/section/form/messenger.svg" alt="" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'">
      <img src="@/section/form/gmap.svg" alt="" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/messenger.svg" alt="" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
          '接待會館'
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
          `接待中心：${info.address}`
      }}</div>
      <!-- btn -->
      <div class="btn btn-lg bg-color1 border-0 text-black mt-12 hover:bg-color2" @click="go()"
        v-bind:class="{ 'hidden': modalType == 'phone' && !$isMobile() }">
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
  border-radius: size(115);
  padding: size(115) size(168) size(55) size(168);
  margin-top: size(60);
  position: relative;

  .logo {
    width: size(434);
    height: size(118);
    background-image: url("@/section/form/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: size(40);
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);

    .contact-item {
      background-color: theme('colors.color1');
      color: #fff;
      width: 100%;
      padding: size(15) size(55);
      // border-radius: 9999px;
      font-size: size(16);
      letter-spacing: size(1);
      max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        background-color: theme('colors.color2');
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        filter: brightness(0) invert(1); // to white
      }

      &.address {
        background-color: #fff;
        color: #000;
        z-index: 0;
        position: relative;
        // border-radius: 999px 0 0 999px;
        max-width: 9999px;
        justify-content: center;

        &::after {
          content: "";
          position: absolute;
          width: 50px;
          height: 100%;
          background-color: #fff;
          left: 100%;
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
    z-index: 49;
    position: fixed;
    bottom: 0;
    left: 0;
    width: size-m(375);
    height: size-m(63);
    gap: size-m(1);

    .contact-item {
      height: 100%;
      background-color: theme('colors.color2');
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
    width: size-m(341);
    height: auto;
    border-radius: size-m(68);
    padding: size-m(50) size-m(15);
    margin-top: size-m(120);
    position: relative;
    justify-content: flex-start;

    .logo {
      width: size-m(276);
      height: size-m(75);
      background-image: url("@/section/form/logo.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-bottom: size-m(40);
    }

    .contact-item-box {
      position: relative;
      margin-top: size-m(0);
      gap: size-m(20);
      flex-direction: column;

      .contact-item {
        width: 100%;
        padding: size-m(15) size-m(65);
        background-color: theme('colors.color1');
        border-radius: 9999px;
        font-size: size-m(16);
        letter-spacing: size-m(1);
        max-width: 100%;
        z-index: 1;
        transition: all .3s;
        cursor: pointer;

        &:hover {
          background-color: theme('colors.color2');
        }

        img {
          max-width: size-m(27);
          height: auto;
          max-height: size-m(27);
        }

        &.address {
          z-index: 0;
          background-color: #eeeeee;
          position: relative;
          padding: size-m(15) 0;
          border-radius: size-m(30) size-m(30) 0 0;
          max-width: 9999px;
          justify-content: center;
          margin-top: size-m(20);

          &::after {
            display: none;
          }
        }

        &.address+div {
          border-radius: 0 0 size-m(30) size-m(30);
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
