<template>
  <div>
  <div class="contact-info-img relative">
</div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
   <!--  <div class="logo">
      <img src="@/section/s1/logo.svg" alt="" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000"/>
    </div>  -->
    <div class="flex justify-between w-full contact-item-box ">
      <div class="flex butt" @click="modalOpen = true; modalType = 'fb'">
        <img src="//h35.banner.tw/img//form/messenger.svg" alt="Facebook 諮詢" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex butt btfanpage" @click="open()">
        <img src="//h35.banner.tw/img//form/fb.svg" alt="前往粉絲專頁" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex w-full flex-col md:flex-row gap-5  box1">
      <div class="flex flex-wrap flex-1 box0">
      <div class="butt phone" @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
        <img src="//h35.banner.tw/img//form/phone.svg" alt="電話" srcset="" />
        <div>新竹：{{ info.phone }}</div>
      </div>
<div class="address">
        <div class="flex-1"><span>新竹據點：</span>新竹高鐵站旁-竹北市光明六路東二段𝟔𝟐𝟏號𝟏𝐅</div>
      
      <div class="butt googlemap"
        @click="modalOpen = true; modalType = 'gmap'">
        <img src="//h35.banner.tw/img//form/gmap.svg" alt="導航 GoogleMap" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>
    <div class="gmap relative z-10 mt-3">
        <iframe :src="info.googleSrc" frameborder="0"></iframe>
    </div>

  </div>
      <div class="flex flex-wrap flex-1 box0">
      <div class="butt phone" @click="modalOpen = true; modalType = 'phoneB'" v-if="info.phone">
        <img src="//h35.banner.tw/img//form/phone.svg" alt="電話" srcset="" />
        <div>高雄：{{ info.phoneB }}</div>
      </div>
<div class="address">
        <div class="flex-1"><span>高雄據點：</span>高雄橋頭經武路𝟏𝟐𝟑號(橋新七路口)</div>
      
      <div class="flex butt googlemap"
        @click="modalOpen = true; modalType = 'gmapB'">
        <img src="//h35.banner.tw/img//form/gmap.svg" alt="導航 GoogleMap" srcset="" />
        <div>導航 GoogleMap</div>
      </div>
    </div>
    <div class="gmap relative z-10 mt-3">
        <iframe :src="info.googleSrcB" frameborder="0"></iframe>
    </div>

  </div>
</div>


  </div>
</div>

  <!-- Mobile contact info -->
    <div v-if="$isMobile()" class="bg-white mo-contact-info flex justify-between w-full contact-item-box items-center">
      <div class="flex flex-1 flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phone'">
      <img src="//h35.banner.tw/img//form/phone.svg" alt="新竹專線" srcset="" />
      <div>新竹專線</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" 
      @click="modalOpen = true; modalType = 'phoneB'">
      <img src="//h35.banner.tw/img//form/phone.svg" alt="高雄專線" srcset="" />
      <div>高雄專線</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'">
      <img src="//h35.banner.tw/img//form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h35.banner.tw/img//form/pen.svg" alt="預約賞屋" srcset="" />
      <div>預約賞屋</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon --><!-- icon -->
<img
  class="h-12"
  v-if="modalType === 'phone' || modalType === 'phoneB'"
  src="//h35.banner.tw/img//form/phone.svg"
  alt="phone"
/>
<img
  class="h-12"
  v-else-if="modalType === 'fb'"
  src="//h35.banner.tw/img//form/messenger.svg"
  alt="fb"
/>
<img
  class="h-12"
  v-else-if="modalType === 'gmap' || modalType === 'gmapB'"
  src="//h35.banner.tw/img//form/gmap.svg"
  alt="gmap"
/>

      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{ modalType == 'phone' ? '新竹專線' : modalType == 'phoneB' ? '高雄專線' : modalType == 'fb' ? 'Facebook Messenger' :
      modalType == 'gmap' ? '新竹據點' :
      modalType == 'gmapB' ? '高雄據點' :""
      }}</div>
      <!-- content -->
      <div class="text-md mt-4">{{ modalType == 'phone' ? info.phone :modalType == 'phoneB' ? info.phoneB : modalType == 'fb' ? '線上諮詢' :
      modalType == 'gmap' ? info.address :
      modalType == 'gmapB'? info.addressB:""
      }}</div>
      <!-- btn -->
<div
  class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2"
  @click="go()"
  v-if="modalType != 'phone' || modalType != 'phoneB'"
  :class="{
  //  hidden: (modalType === 'phone' || modalType === 'phoneB') && !$isMobile(),
    btlead: modalType === 'fb',
    btsearch: modalType === 'gmap' || modalType === 'gmapB',
    btcontac: modalType === 'phone' || modalType === 'phoneB'
  }"
>
  {{
    modalType === 'phone' || modalType === 'phoneB'
      ? '撥打電話'
      : modalType === 'fb'
      ? '立即諮詢'
      : '開啟導航'
  }}
</div>

    </div>
  </div>


</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.bg-color1{background-color: #666;}
.hover\:bg-color2:hover{background-color:#A30C24;}


.contact-info-img{
  height: 0;z-index: 52;
}
.contact-info {
  padding: size(55) size(0) size(55) size(0);
   /* width: size(1440);
    min-width: 680px;*/
  position: relative;
  z-index: 50;
  gap: 20px;
  // background: #045147;

  .logo {position: relative;
    width: size(367);
   // height: size(172);
    // background-image: url("@/section/s1/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: size(30) auto 0;
    img{width: 100%;}
    .logot{position: absolute;top:31%;left: 0;right: 0;margin: auto;width: 85%;}
  }

    .butt{background: #666;
      color: #fff;
      padding: 1.1em 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: size(16);
      line-height: 1.6;flex: 1;
      z-index: 1;
      //margin: .5em 0;
      cursor: pointer;
      transition: all .3s;
      width: 5em;
      img {
        max-width: 1.69em;
        height: auto;
        max-height: 1.69em;
        transition: all .5s;
        margin: 0 1em 0 0;
        filter: brightness(0) invert(1);
      }
      &:hover {
        background: #A30C24;
        color: #fff;
        img {
          filter: brightness(0) invert(1);
        }
      }
      &.phone{margin: 0 10px 0 0 ;}
      &.googlemap{flex: 0;
        width: 40em;min-width:12em;}  
    }
    .address{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: size(16);
      flex: 3;
      
        background-color: #FFF;
      line-height: 1.6;flex: 1;
      
  }
  .box0{border: 1px solid #0003;padding: 10px;
  background:#fff5;}

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);
    width: size(920);
    // min-width: 680px;

    .contact-item {


      &.address {
        background-image: none;
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
        div{
          text-indent:0em;
          white-space: normal;
          padding: 0 1em;
        }
      }

    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}
.modal-box{
  img{filter: invert(11%) sepia(94%) saturate(6570%) hue-rotate(347deg) brightness(65%) contrast(93%);
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
    box-shadow: 0 0 sizem(50) rgba(0, 0, 0, 0.501);
    background:#A30C24;

    .contact-item {
      height: 100%;      
      font-size: sizem(16);
      font-weight: 400;
      color: #fff;
      border-left:1px solid #fff9;

      img {
        margin-bottom: sizem(5);
        max-width: sizem(16.5);
        height: auto;
        max-height: sizem(16.5);
        filter: brightness(0) invert(1);
      }
      &:first-child{
      border-left:0;}

    }
  }

  .contact-info {
    width: 100%;
    min-width:0;
    // height: sizem(400);
    // border-radius: sizem(68);
    //padding: sizem(0) sizem(0);
    padding: sizem(80) 0 sizem(40) 0;
    margin-top: sizem(0);
    position: relative;
    justify-content: space-between;
  background-size: sizem(450) auto;

    .logo {
      width: sizem(257);
    margin: sizem(40) auto sizem(30) auto;
     // margin-bottom: sizem(47);
    }

    .butt{
      font-size: sizem(16);
      width: sizem(310);
      padding: 1.1em sizem(50);
      //margin: 0 0 20px ;
      &.phone{margin: 0 ;}
      &.googlemap {
        width: 100%;min-width:100%;
      }
    }
    .address{
      margin: 10px auto ; 
      font-size: sizem(16);width: 100%;flex-wrap: wrap;
      > div:first-child{ padding: 1.3em 0;}

      
  }

  .box0{margin: 0 24px;}
    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      gap: sizem(15);
      flex-direction: column;
    width: sizem(310);

      .contact-item {
        padding: 1.1em sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        margin: 0;

        img {             
          max-width: sizem(27);
          height: auto;
          max-height: sizem(27);
          margin: unset;
          position: absolute;
          left: calc(50% - 5em);
          transform: translateX(-50%);
        }
        div{
          text-indent: 2em;
        }

        &.address {
          font-size: sizem(15);
          border-radius: sizem(0) sizem(0) 0 0;
          padding: 1.1em 0;
          margin-top: sizem(25);
          //font-size: .9em;

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
      border-left-width:0;
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
import Map from "@/section/form/map.vue"
const modalOpen = ref(false);
const modalType = ref('');

const go = () => {
  if (modalType.value == 'phone') {
    window.location.href = `tel:${info.phone.replace("-", "")}`;
     setTimeout(() => {
       window.location.href = "phoneThanks";
     }, 1000);
  } else if (modalType.value == 'phoneB') {
    window.location.href = `tel:${info.phoneB.replace("-", "")}`;
     setTimeout(() => {
       window.location.href = "phoneThanks";
     }, 1000);
  } else if (modalType.value == 'fb') {
    window.open(info.fbMessage);
  } else if (modalType.value == 'gmap') {
    window.open(info.googleLink);

  }else if (modalType.value == 'gmapB') {
    window.open(info.googleLinkB);

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
