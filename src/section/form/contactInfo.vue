<template>
  <div>
  <div class="contact-info-img">
    <div class="oo1"></div>
    <div class="oo2"></div>
    <div class="bubble1 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="@/section/s1/bubble4.png" alt="bubble">
    </div>
    <div class="bubble2 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="@/section/s1/bubble4.png" alt="bubble">
    </div>
    <div class="bubble3 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="@/section/s1/bubble3.png" alt="bubble">
    </div>
    <div class="bubble4 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="@/section/s1/bubble5.png" alt="bubble">
    </div>
    <div class="bubble5 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="@/section/s1/bubble5.png" alt="bubble">
    </div>
    <div class="bubble6 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="@/section/s1/bubble1.png" alt="bubble">
    </div>
    <div class="bubble7 absolute" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300" >
      <img src="@/section/s1/bubble1.png" alt="bubble">
    </div>

</div>
  <div class="contact-info mx-auto  flex flex-col items-center justify-between">
    <div class="logo"></div>
    <div class="flex justify-between w-full contact-item-box">
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'phone'" v-if="info.phone">
        <img src="//h65.tw/img/form/phone.svg" alt="電話" srcset="" />
        <div>{{ info.phone }}</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'messenger'" v-if="info.fbMessage">
        <img src="//h65.tw/img/form/messenger.svg" alt="Facebook 諮詢" srcset="" />
        <div>Facebook 諮詢</div>
      </div>
      <div class="flex contact-item justify-center items-center" @click="modalOpen = true; modalType = 'fb'" v-if="info.fbLink">
      <!-- <div class="flex contact-item justify-center items-center btfanpage" @click="open()"> -->
        <img src="//h65.tw/img/form/fb.svg" alt="前往粉絲專頁" srcset="" />
        <div>前往粉絲專頁</div>
      </div>
    </div>
    <div class="flex justify-between w-full contact-item-box no-gap" v-if="info.address">
      <div class="flex contact-item justify-center items-center address">
        <div><span v-if="info.address1">{{ info.address1 }}：<br v-if="$isMobile()"></span>{{ info.address }}</div>
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
      @click="modalOpen = true; modalType = 'messenger'" v-if="info.fbMessage">
      <img src="//h65.tw/img/form/messenger.svg" alt="FB 諮詢" srcset="" />
      <div>FB 諮詢</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'fb'" v-if="info.fbLink&&(!info.address||!info.phone)">
      <img src="//h65.tw/img/form/fb.svg" alt="粉絲專頁" srcset="" />
      <div>粉絲專頁</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center" @click="scrollTo('.order')">
      <img src="//h65.tw/img/form/pen.svg" alt="即刻預約" srcset="" />
      <div>即刻預約</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'gmap'"  v-if="info.address" >
      <img src="//h65.tw/img/form/gmap.svg" alt="地圖導航" srcset="" />
      <div>地圖導航</div>
    </div>
    <div class="flex flex-1 flex-col contact-item justify-center items-center"
      @click="modalOpen = true; modalType = 'line'"  v-if="info.line" >
      <img src="//h65.tw/img/form/line.svg" alt="Line" srcset="" />
      <div>Line</div>
    </div>
  </div>

  <!-- Modal -->
  <input type="checkbox" v-model="modalOpen" id="contact-modal" class="modal-toggle" />
  <div class="modal -mt-20 md:-mt-72">
    <div class="modal-box py-12 relative flex flex-col items-center justify-center">
      <label for="contact-modal" class="btn btn-sm btn-circle absolute right-4 top-4">✕</label>
      <!-- icon -->
      <img class="h-12" v-if="modalType == 'phone'" src="//h65.tw/img/form/phone.svg" alt="phone" srcset="" />
      <img class="h-12" v-else-if="modalType == 'messenger'" src="//h65.tw/img/form/messenger.svg" alt="messenger" srcset="" />
      <img class="h-12" v-else-if="modalType == 'fb'" src="//h65.tw/img/form/fb.svg" alt="fb" srcset="" />
      <img class="h-12" v-else-if="modalType == 'gmap'" src="//h65.tw/img/form/gmap.svg" alt="gmap" srcset="" />
      <img class="h-12" v-else-if="modalType == 'line'" src="//h65.tw/img/form/line.svg" alt="line" srcset="" />
      <!-- title -->
      <div class="text-xl mt-4 font-bold">{{
       modalType == 'phone' ? '賞屋專線' :
       modalType == 'messenger' ? 'Facebook Messenger' :
       modalType == 'fb' ? 'Facebook 粉絲專頁' :
       modalType == 'line' ? 'LINE賞屋客服' :
       modalType == 'gmap' ? `${info.address2?info.address2:'導航地址'}` : 
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
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" v-if="modalType != 'phone'" v-bind:class="{
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
      <div class="btn btn-lg bg-color1 border-0 text-white mt-12 hover:bg-color2" @click="go()" id="phonegtm" v-else v-bind:class="{
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

.bg-color1{background:#0466CA;}
.hover\:bg-color2:hover{background-color:#014d99;}


.contact-info-img{
  @apply relative;
  height: 0;z-index: 2;
  //top: -1.5vw;
  img{width: 100%;}
@keyframes bubble1 {
  to {
	transform:rotate(20deg);
  }
}
@keyframes bubble2 {
  to {
	transform:rotate(0deg);
  }
}  
  .oo1{position: absolute;
    background: radial-gradient(ellipse at center, #F8D8A9 12%,  #B9CFB7 20%, #9ACBBF 25%,#82C8C5 32%, #5db5c5ad 43.4%,#269ac630 62%, #118fc700 70%);
    right: size(-1200);top:size(-550);width:size(2300);
    &::before{content:url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");width: 100%;display: block;}
  }
  .oo2{position: absolute;
    background: radial-gradient(ellipse at center, #F8D8A9 12%,  #B9CFB7 20%, #9ACBBF 25%,#82C8C5 32%, #5db5c5ad 43.4%,#269ac630 62%, #118fc700 70%);
    right: size(-94);top:size(-280);width:size(2300);
    &::before{content:url("data:image/svg+xml,%3Csvg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");width: 100%;display: block;}
  }
.bubble1{left:size(-840);top:size(120);width:size(1200);
  img{transform: rotate(24deg)translateX(-5%);
  animation: bubble1 4s -2s ease-in-out alternate infinite;}
}
.bubble2{right:size(-500);top:size(90);width:size(1376);
  img{transform: rotate(-5deg)translateX(-5%);
  animation: bubble2 10s ease-in-out alternate infinite;}
}
.bubble3{left:size(190);top:size(280);width:size(1350);
  img{transform: rotate(-5deg)translateX(-5%);
  animation: bubble2 10s  ease-in-out alternate infinite;}}
.bubble4{left:size(250);top:size(330);width:size(619);}
.bubble5{right:size(-270);top:size(260);width:size(559);}
.bubble6{left:size(125);top:size(40);width:size(319);
  img{transform: translateY(10%);
  animation: bubble2 5s ease-in-out alternate infinite;}
}
.bubble7{right:size(-50);top:size(420);width:size(257);
  img{transform: translateY(-10%);
  animation: bubble2 5s -2s ease-in-out alternate infinite;}
}
}
.contact-info {
  padding: size(105) size(0) size(55) size(0);
    width: size(1440);
    min-width: 680px;
  position: relative;
  z-index: 50;
  // background: #045147;

  .logo {
    width: size(605);
    height: size(218);
    background-image: url("@/section/s1/logo.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: size(5) auto size(90) auto;
  }

  .contact-item-box {
    position: relative;
    margin-top: size(20);
    gap: size(20);
    width: size(920);
    // min-width: 680px;

    .contact-item {
      background:#F6878C;
      color: #FFF;
      width: 100%;
    font-weight: 700;
      flex: 1;
      padding: 1.1em 0;
    border-radius: .5em;
      font-size: size(16);
      line-height: 1.6;//3.8
      letter-spacing: 0em;
     // max-width: size(280);
      z-index: 1;
      transition: all .3s;
      cursor: pointer;
      //border: 1px solid #C29267;
      gap: 1em;

      &:hover {
      background:#d8676d;
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
        background: #fff;
        color: #000;
        z-index: 0;
        position: relative;
        flex:2.17;
        // border-radius: 999px 0 0 999px;
      //  max-width: 9999px;
    border-radius: .5em 0 0 .5em;
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


      &.googlemap {
        margin: 0;
        flex:1;
  //    background-color: #9B1E44;
      border-left-width: 0;
    border-radius: 0 .5em .5em 0;
        color: #FFF;

        img {
          filter: brightness(0) invert(1);
        }

        &:hover {
   //     background-color: #C29267;
          color: #fff;
          img {
            filter: brightness(0) invert(1);
          }
        }
      }
    }

    &.no-gap {
      gap: 0 !important;
    }
  }
}
.modal-box{
  img{filter: invert(13%) sepia(58%) saturate(7486%) hue-rotate(198deg) brightness(87%) contrast(107%);
  }
}

@media screen and (max-width:768px) {

  
.contact-info-img{
  top: 20vw;
  //img{width: 200%;margin:-50%;}
.oo1{right: sizem(-550);top:sizem(-250);width:sizem(800);}
.oo2{right: sizem(-250);top:sizem(0);width:sizem(800);}
.bubble1{left:sizem(-300);top:sizem(220);width:sizem(420);}
.bubble2{right:sizem(-400);top:sizem(0);width:sizem(480);}
.bubble3{left:sizem(-30);top:sizem(110);width:sizem(470);}
.bubble4{left:sizem(-20);top:sizem(140);width:sizem(210);}
.bubble5{right:sizem(-100);top:sizem(290);width:sizem(300);}
.bubble6{left:sizem(-10);top:sizem(80);width:sizem(48);
  img{transform: translateY(20%);}
}
.bubble7{right:sizem(-50);top:sizem(360);width:sizem(80);
  img{transform: translateY(-20%);}
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
    box-shadow: 0 0 sizem(50) #000c;
    background:#0051a1;

    .contact-item {
      height: 100%;      
      font-size: sizem(14);
      color: #fff;
      border-left:1px solid #fff7;
    font-weight: 700;
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
    //padding: sizem(0) sizem(0);
    padding: sizem(55) 0 sizem(40) 0;
    margin-top: sizem(0);
    position: relative;
    justify-content: space-between;
  background-size: sizem(450) auto;

    .logo {
      width: sizem(266);
      height: sizem(140);
    margin: sizem(0) auto sizem(40) auto;
     // margin-bottom: sizem(47);
    }

    .contact-item-box {
      position: relative;
      margin-top: sizem(0);
      //gap: sizem(20);
      flex-direction: column;
    width: sizem(310);

      .contact-item {
        padding: 1.1em sizem(80);
        font-size: sizem(16);
        max-width: 100%;
        white-space: nowrap;
        margin: 5px 0px;

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
    border-radius: .5em .5em 0 0;
          padding: 1.1em 0;
          margin: sizem(20) 0px 0px 0px;
          //font-size: .9em;

          &::before {
            width: 100%;
            height: 100%;
            bottom: -50%;
            left: 0;
          }
        }

        &.address+div {
        }
      &.googlemap {
    border-radius: 0 0 .5em .5em;
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


const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}

</script>
