<template>
  <div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
    <!--
    <img src="@/section/s1/logo.svg" class="logo" alt="logo" data-aos="fade" data-aos-duration="2000" data-aos-delay="200">
    -->
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
        <img src="//h65.tw/img/form/phone.svg" alt="電話" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'" v-if="info.fbMessage">
        <img src="//h65.tw/img/form/messenger.svg" alt="Facebook 諮詢" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center btfanpage" @click="open()" v-if="info.fbLink">
        <img src="//h65.tw/img/form/fb.svg" alt="前往粉絲專頁" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap" v-if="info.address">
      <div class="flex contact-item justify-center items-center address">
        <div><span v-if="info.address1">{{ info.address1 }}：</span><span>{{ info.address }}</span></div>
      </div>
      <div class="flex contact-item justify-center items-center googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="//h65.tw/img/form/gmap.svg" alt="導航 GoogleMap" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>

  </div>
</div>

  <!-- Mobile contact info -->
    <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
    <div class="flex flex-1 flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="//h65.tw/img/form/phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'" v-if="info.fbMessage">
      <img src="//h65.tw/img/form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h65.tw/img/form/pen.svg" alt="預約賞屋" srcset="" />
      <div>預約賞屋</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'"  v-if="info.address" >
      <img src="//h65.tw/img/form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h65.tw/img/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h65.tw/img/form/messenger.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h65.tw/img/form/gmap.svg" alt="gmap" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '賞屋專線' : modalType == 'fb' ? 'Facebook Messenger' :
      `${info.address2?info.address2:'導航地址'}`
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone : modalType == 'fb' ? '線上諮詢' :
      `${info.address}`
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
  //@apply left-1/2 -translate-x-1/2;
  width: size(900);
  min-width: 750px;
  // border-radius: size(115);
  padding: 0;
  margin-top: size(100);
  margin:0 auto size(40);
  position: relative;
  z-index: 50;
  font-size: 1rem;

  .logo {
    width:26.56em;
    margin: 8em 0 3em 0;
  }

  .contact-item-box {
    position: relative;
    margin-top:1.25em;
    gap:1.25em;

    .contact-item {
      background: #C2B69E;
      border: 0;
      color: #fff;
      width: 100%;
      padding: 0;
      border-radius: 10px;
      font-size: 1em;
      line-height: 3.8;
      letter-spacing: 0.06em;
      z-index: 1;
      transition: all 0.3s;
      cursor: pointer;
      gap:1.25em;

      &:hover {
        background-color: #B28247;
        color: #fff;

        img {
          filter: brightness(1) invert(1);
        }
      }

      img {
        width:1.6875em;
        height:1.6875em;
        filter: brightness(1) invert(1);

        transition: all 0.5s;
      }

      &.address {
        background-color: #FFF;
        border: 0;
        z-index: 0;
        position: relative;
        border-radius: 10px 0 0 10px;
        max-width: 9999px;
        justify-content: center;
        border:1px solid #C2B69E;
        color: #000;
        @apply basis-2/3 ;
      }

      &.googlemap {
        background-color: #C2B69E;
        color: #fff;
        border: 0;
        border: 0;
        gap: 1.1em;
        border-radius: 0 10px 10px 0;
        @apply basis-1/3 ;


        &:hover {
          background-color: #B28247;
          color: #fff;

          img {
            filter: brightness(1) invert(1);
          }
        }
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .mo-contact-info {
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    // background: url("@/section/mo_menu.jpg");
    background-size: cover;

    .contact-item {
      height: 100%;
      background-color: #422A1C;
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      border-right: 1px solid #fff;

      &:last-child {
        border: 0;
      }

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(1) invert(1);
      }
    }
  }

  .contact-info {
    width: 100%;
    height: auto;
    min-width:100%;
    // border-radius: sizem(68);
    padding: sizem(40) 0;
    margin-top: sizem(20);
    position: relative;
    justify-content: space-between;


    .logo {
      width: sizem(250);
      //width: 15.625em;
      margin: 1.5em 0 3.5em 0;
    }

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      gap: sizem(20);
      flex-direction: column;

      .contact-item {
        padding: 0 ;
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        border-radius: sizem(15);
        > div{width:sizem(130);}
/*
        img {
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
        }*/

        &.address {
          padding: 1em 1em;
          margin-top: sizem(20);
          // font-size: sizem(12);
          border-radius: sizem(15) sizem(15) 0 0;
          white-space: normal;
          line-height: 1.5;
          
        > div{width:100%;}
          span{white-space: nowrap;}

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address + div {
          border-radius: 0 0 sizem(15) sizem(15);
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
import { inject, ref } from "vue"
const modalOpen = ref(false)
const modalType = ref("")

const go = () => {
  if (modalType.value == "phone") {
    window.location.href = `tel:${info.phone.replace("-", "")}`
    // setTimeout(() => {
    //   window.location.href = "phoneThanks";
    // }, 1000);
  } else if (modalType.value == "fb") {
    window.open(info.fbMessage)
  } else if (modalType.value == "gmap") {
    window.open(info.googleLink)
  }
}

const open = () => {
  window.open(info.fbLink)
}

const smoothScroll = inject("smoothScroll")
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el),
  })
}
</script>
