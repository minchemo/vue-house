<template>
  <div>
    <div class="contact-info mx-auto  flex flex-col items-center justify-between">
      <div class="flex justify-between w-full contact-item-box">
        <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'"
          v-if="info.phone">
          <img src="@/section/form/phone.svg" alt="電話" srcset="" />
          <div>{{ info.phone }}</div>
        </div>
        <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'messenger'"
          v-if="info.fbMessage">
          <img src="@/section/form/messenger.svg" alt="Facebook 諮詢" srcset="" />
          <div>Facebook 諮詢</div>
        </div>
        <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'"
          v-if="info.fbLink">
          <!-- <div class="flex contact-item justify-center items-center btfanpage" @click="open()"> -->
          <img src="@/section/form/fb.svg" alt="前往粉絲專頁" srcset="" />
          <div>前往粉絲專頁</div>
        </div>
      </div>
      <div class="flex justify-between w-full contact-item-box no-gap" v-if="info.address">
        <div class="flex contact-item justify-center items-center address">
          <div><span v-if="info.address1">{{ info.address1 }}：<br v-if="$isMobile()"></span>{{ info.address }}</div>
        </div>
        <div class="flex contact-item justify-center items-center googlemap"
          @click="modalOpen = true; modalType = 'gmap'">
          <img src="@/section/form/gmap.svg" alt="導航 GoogleMap" srcset="" />
          <div>導航 GoogleMap</div>
        </div>
      </div>

    </div>
  </div>

  <!-- Mobile contact info -->
  <div class="mo-contact-info">
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
      <img src="@/section/form/phone.svg" alt="撥打電話" srcset="" />
      <div>撥打電話</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'messenger'" v-if="info.fbMessage">
      <img src="@/section/form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'" v-if="info.fbLink && (!info.address || !info.phone)">
      <img src="@/section/form/fb.svg" alt="粉絲專頁" srcset="" />
      <div>粉絲專頁</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="@/section/form/pen.svg" alt="即刻預約" srcset="" />
      <div>即刻預約</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'" v-if="info.address">
      <img src="@/section/form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="@/section/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'messenger'" src="@/section/form/messenger.svg" alt="messenger"
        srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="@/section/form/fb.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="@/section/form/gmap.svg" alt="gmap" srcset="" />
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

.contact-info {
  @apply left-1/2 -translate-x-1/2;
  width: size(1191);
  // border-radius: size(115);
  padding: 0;
  margin-top: size(100);
  margin-bottom: size(70);
  position: relative;
  z-index: 50;

  .tree {
    @apply absolute;
    width: size(104);
    left: size(125);
    bottom: 115%;
    animation: an1 5s ease-in-out alternate infinite;
    transform-origin: bottom center;

    @keyframes an1 {
      from {
        transform: skewX(-3deg);
      }

      to {
        transform: skewX(3deg);
      }
    }
  }

  .hill {
    @apply absolute;
    bottom: 100%;
    width: size(1413);
  }

  .logo {
    width: size(361);
    height: size(180);
    background-image: url("@/section/form/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: size(0);
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);

    .contact-item {
      //background: #fff;
      border: 2px solid #FFF;
      color: #FFF; //#1d536b;
      width: 100%;
      padding: 0 size(55);
      border-radius: size(0);
      font-size: size(18);
      font-weight: 700;
      line-height: 3.8;
      letter-spacing: 0.06em;
      z-index: 1;
      transition: all 0.3s;
      cursor: pointer;
      gap: size(20);

      &:hover {
        background-color: #09466466;
        color: #fff;

        img {
          filter: brightness(1) invert(1);
          //   filter: invert(37%) sepia(18%) saturate(1106%) hue-rotate(155deg) brightness(94%) contrast(96%);
        }
      }

      img {
        max-width: size(27);
        height: auto;
        max-height: size(27);
        // filter: brightness(1) invert(1);
        filter: brightness(1) invert(1);

        transition: all 0.5s;
      }

      &.address {
        border: 0;
        z-index: 0;
        position: relative;
        // border-radius: 999px 0 0 999px;
        max-width: 9999px;
        justify-content: center;
        // border: 2px solid #FFF;
        border-right-width: 0px;
        color: #1d536b;
        @apply basis-2/3;
        cursor: auto;
        background-color: #fff;

        &:hover {

          background-color: #fff;
          color: #1d536b;
        }
      }

      &.googlemap {
        // background-color: #36677f;
        color: #fff;
        border: 0;
        border: 2px solid #fff;
        gap: size(20);
        @apply basis-1/3;

        img {
          filter: brightness(1) invert(1);
          //filter: invert(37%) sepia(18%) saturate(1106%) hue-rotate(155deg) brightness(94%) contrast(96%);
        }

        &:hover {
          background-color: #09466466;
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

.gmap {
  width: 100vw;
  left: calc(50% - 50vw);
  cursor: pointer;
  //   height: size(500);

  img {
    width: 100%;
    height: 100%;
  }
}

.mo-contact-info {
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  gap: 0;
  background-size: cover;
  font-size: size(12);letter-spacing: 0.06em;
  display: flex;
  justify-content:flex-end;
  align-items: stretch;
  flex-direction: row;
  width:100%;
  background: linear-gradient(to right,
   #36677F00,
    #36677F00,
    #36677F00,
    #36677Fcc,
    #2d5c74);
  // box-shadow: 0 0 1.1em #fff4,0 0 .3em #fff6;


  .contact-item {
   // background-color: #36677F;
    font-weight: 400;
    color: #fff;
    //  border-bottom: 1px solid #fff6;
    flex: 0 size(100);
    position: relative;
    cursor: pointer;
    transition: background .3s;
    height: 7em;
    &:hover{
       background-color: #21577299;
    }

    &::after {
      content: "";
      display: block;
      height: 6em;
      width: 1px;
      background: #FFF6;
      position: absolute;left: 0;right:auto;top: 0;bottom: 0;margin: auto;
    }


    img {
      margin-top: 0.2em;
      margin-bottom: 0.6em;
      height: 3em;
      max-width: 3em;
      //aspect-ratio: 1/1;
      filter: brightness(1) invert(1);
    }
  }
}


@media screen and (max-width: 768px) {
  .mo-contact-info {
    height: sizem(63);
    font-size: sizem(16);
    flex-direction: row;
    width: 100%;
  box-shadow: 0 0 1em rgba(0, 37, 85, 0.6);
  top: auto;
  bottom: 0;


    .contact-item {
    background-color: #36677F;
      border: 0;
      border-right: 1px solid #fff6;
      height: 100%;
      flex: 1;
&::after {
        display: none;
      }
      &:last-child {
        border: 0;
      }

      img {
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        height: 1.2em;
      }
    }

  }

  .contact-info {
    width: sizem(375);
    height: auto;
    // border-radius: sizem(68);
    padding: sizem(40) sizem(30);
    margin-top: sizem(20);
    position: relative;
    justify-content: space-between;

    .hill {
      @apply absolute;
      bottom: 90%;
      width: 100%;
    }

    .tree {
      @apply absolute;
      width: sizem(89.9);
      left: 10%;
      bottom: 90%;
      animation: an1 5s ease-in-out alternate infinite;
      transform-origin: bottom center;

      @keyframes an1 {
        from {
          transform: skewX(-3deg);
        }

        to {
          transform: skewX(3deg);
        }
      }
    }

    .logo {
      @apply hidden;
      width: sizem(177);
      height: sizem(138.51);
      background-image: url("@/section/form/logo.png");
      margin-bottom: sizem(30);
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
        border-radius: sizem(0);

        img {
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
        }

        &.address {
          padding: 0 0;
          margin-top: sizem(20);
          border-right-width: 1px;
          border-bottom: 0;
          // font-size: sizem(12);

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address+div {
          // border-radius: 0 0 sizem(30) sizem(30);
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
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
    setTimeout(() => {
      window.location.href = "phoneThanks";
    }, 1000);
  } else if (modalType.value == 'messenger') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'fb') {
    window.open(info.fbLink);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);
  } else if (modalType.value == 'line') {
    window.open(info.line);

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
