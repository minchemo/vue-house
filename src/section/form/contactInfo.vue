<template>
  <div>
  <div class="contact-info-img">
    <img class="leaf" src="@/section/form/leaf.png" alt="leaf" />
    <div class="parrot">
      <img src="@/section/s1/00.png" class="imgbg">
      <div class="body">
        <div class="img21">
          <img src="@/section/s1/parrot11.png" class="wing">
        </div>
        <div class="head">
          <img src="@/section/s1/parrot13.png" class="img4">
          <img src="@/section/s1/parrot12.png" class="img3">
        </div>
        <img src="@/section/s1/parrot14.png" class="img5">
        <img src="@/section/s1/parrot11.png" class="img2 wing">
      </div>
      <img src="@/section/s1/parrot15.png" class="img7">
      <img src="@/section/s1/parrot15.png" class="img8">
    </div> 
    <img src="@/section/form/tree.png" class="tree" alt="tree" />
    <img class="leaf2" v-if="!$isMobile()" src="@/section/s1/leaf.png" alt="leaf" />
    <div class="butterfly01" v-if="!$isMobile()">
<div class="butterfly1">
  <img src="@/section/s1/00.png" class="imgbg">
  <img src="@/section/s1/2.png" class="fly2">
  <img src="@/section/s1/1.png" class="fly1">
  <img src="@/section/s1/1.png" class="fly3">
  <img src="@/section/s1/2.png" class="fly4">
  <img src="@/section/s1/3.png" class="fly5">
</div>
</div>
</div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
    <div class="logo"></div>
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'">
        <img src="@/section/form/phone.svg" alt="景上汀" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'">
        <img src="@/section/form/messenger.svg" alt="景上汀" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center btfanpage" @click="open()">
        <img src="@/section/form/fb.svg" alt="景上汀" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap">
      <div class="flex contact-item justify-center items-center address">
        <div>{{ info.address }}</div>
      </div>
      <div class="flex contact-item justify-center items-center googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="@/section/form/gmap.svg" alt="景上汀" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
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
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
@keyframes an1 {
  60% {
    transform: translateX(0%);
  }
}
@keyframes an2 {
  20% {
    transform: translateX(0%);
  }
  80% {
    transform: translateX(0%);
  }
}
.imgbg {
    width: 100%;
  } 
.contact-info-img{
  @apply relative;
  height: 0;z-index: 52;
.leaf{
@apply absolute;
 animation: an 5s alternate infinite;
width: size(641);
left:size(-130);
top: size(-280);
transform: skewY(-3deg);
transform-origin: 20% -20%;
}
.parrot {
  position: absolute;
  top: size(-47);
  left: size(135);
  width: size(70);
  .img21 {
    position: absolute;
    top: 44%;
    left: 51%;
    width: 28%;
    transform: scaleX(-1) rotate(-8deg);
    img {
      width: 100%;
    }
  }
  .wing {
    transform: rotate(5deg) translateX(-20%);
    transform-origin: 50% 10%;
    animation: an2 2s alternate ease-in-out infinite;
  }
  .body {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(8deg);
    transform-origin: 50% 90%;
    animation: an1 2s alternate ease-in-out infinite;
  }
  .head {
    position: absolute;
    top: 27.5%;
    left: 8%;
    width: 100%;
    height: 100%;
    transform: rotate(-22deg);
    transform-origin: 45% 16%;
    animation: an1 1s alternate ease-in-out infinite;
  }
  .img3 {
    position: absolute;
    top: 0%;
    left: 17%;
    width: 63%;
  }
  .img4 {
    position: absolute;
    top: -28%;
    left: 25%;
    width: 69.6%;
    transform: rotate(-7deg);
    transform-origin: 60% 100%;
    animation: an1 1s alternate infinite;
  }
  .img5 {
    position: absolute;
    top: 41%;
    left: 1%;
    width: 77%;
    z-index: 4;
  }
  .img6 {
    position: absolute;
    top: 71%;
    left: 1%;
    width: 77%;
  }
  .img7 {
    position: absolute;
    top: 74%;
    left: 48%;
    width: 14.5%;
    z-index: 5;
    transform: rotate(-10deg) translate(50%, -10%);
    transform-origin: 25% 5%;
    animation: an1 2s ease-out infinite;
  }
  .img8 {
    position: absolute;
    top: 75%;
    left: 31%;
    width: 15.5%;
    z-index: 5;
    transform: rotate(-10deg) translate(0%, 10%);
    transform-origin: 25% 5%;
    animation: an1 2s ease-in-out infinite;
  }
  .img2 {
    position: absolute;
    top: 40.5%;
    left: 0;
    width: 28.5%;
    z-index: 4;
  }
}
.tree{position: absolute;z-index:2;
width: size(272);
left: 0;top: 0
}
.leaf2{
@apply absolute;
 animation: an 5s alternate infinite;
width: size(850);
right:size(-580);
top: size(0);
transform: skewY(-3deg);
transform-origin: 80% -20%;z-index: 55;
}

@keyframes butterfly01 {
  25% {
    transform:translate(-80%,0);
  }
  50% {
    transform: translate(-80%,-20%);
  }
  75% {
    transform:translate(0,-20%);
  }
}
.butterfly1 {
    transform: translate(0,0%);
    animation: butterfly01 3s linear infinite;
  .fly1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: rotate(3deg)scaleX(1.1);
    transform-origin: 100% 100%;
    animation: an .3s alternate ease-in-out infinite;}
  .fly2{
    position: absolute;
    top: 30%;
    left: 5%;
    width: 95%;
    transform: rotate(-3deg)scaleX(1.05);
    transform-origin: 100% 0%;
    animation: an .3s alternate ease-in-out infinite;
}
  .fly3{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: rotate(5deg)scaleX(.8);
    transform-origin: 100% 100%;
    animation: an .3s alternate ease-in-out infinite;}
  .fly4{
    position: absolute;
    top: 30%;
    left: 5%;
    width: 95%;
    transform: rotate(-5deg)scaleX(.7);
    transform-origin: 100% 0%;
    animation: an .3s alternate ease-in-out infinite;}
  .fly5{
    position: absolute;
    top: 21%;
    left: 98.5%;
    width: 16.5%;}
}

.butterfly01 {
  position: absolute;
  top: size(50);
  right: size(70);
    transform: scaleX(-1)rotate(36deg);
  width:size(40);
}
}
.contact-info {
  padding: size(55) size(0) size(55) size(0);
    width: size(1440);
    min-width: 680px;
  position: relative;
  z-index: 50;
  background: url("@/section/form/bg.jpg");

  .logo {
    width: size(367);
    height: size(172);
    background-image: url("@/section/s1/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: size(30) auto;
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);
    width: size(920);
    // min-width: 680px;

    .contact-item {
      background-color: #9B1E44;
      color: #fff;
      width: 100%;
      flex: 1;
      padding: 1.1em 0;
      // border-radius: 9999px;
      font-size: size(16);
      line-height: 1.6;//3.8
      letter-spacing: 0.06em;
     // max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      //border: 1px solid #C29267;
      gap: 1em;

      &:hover {
        background-color: #830027;
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
        margin: 0;
      }

      &.address {
        background-color: #fff;
        color: #000;
        z-index: 0;
        position: relative;
        flex:2.17;
        // border-radius: 999px 0 0 999px;
      //  max-width: 9999px;
        justify-content: center;

        &::before {
          content: "";
          position: absolute;
          width: 8em;
          height: 100%;
          background-color: transparent;
          left: calc(100% - 4em);
          z-index: -1;
        }
      }


      &.googlemap {
        flex:1;
  //    background-color: #9B1E44;
      border-left-width: 0;
        color: #fff;

        img {
          filter: brightness(0) invert(1);
        }

        &:hover {
   //     background-color: #C29267;
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

  .contact-info-img{
.leaf{
width: sizem(280);
left:sizem(-127);
top: sizem(-110);
}
.parrot {
  top: sizem(-31);
  left: sizem(6);
  width: sizem(37);
}
.tree{position: absolute;z-index:2;
width: sizem(128);
left: sizem(-57);top: 0;
}




}

  .mo-contact-info {
    z-index: 99;
    position: fixed;
    bottom: 0;
    left: 0;
    width: sizem(375);
    height: sizem(63);
    gap: sizem(1);
    box-shadow: 0 0 sizem(50) #360010cc;

    .contact-item {
      height: 100%;
      background-color: #9B1E44;
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
    width: 100%;
    min-width:0;
   // height: sizem(400);
    // border-radius: sizem(68);
    padding: sizem(50) sizem(0);
    margin-top: sizem(60);
    position: relative;
    justify-content: space-between;
  background-size: sizem(450) auto;

    .logo {
      width: sizem(257);
      height: sizem(140);
    margin: sizem(70) auto sizem(30) auto;
     // margin-bottom: sizem(47);
    }

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      gap: sizem(20);
      flex-direction: column;
    width: sizem(310);

      .contact-item {
        padding: 1.1em sizem(80);
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
          border-radius: sizem(0) sizem(0) 0 0;
          padding: 1.1em 0;
          margin-top: sizem(20);

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address+div {
          border-radius: 0 0 sizem(0) sizem(0);
        }
      &.googlemap {
        border-top-width: 0;
      border-left-width: 2px;
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
