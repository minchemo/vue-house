<template>
  <div class="s1">

<div  data-aos="fade">
<img src="./s1/bg.png" v-if="!isMobile" class="bg-img" alt="" loading="lazy">
<img src="./s1/bgm.png" v-else class="bg-img" alt="" loading="lazy">
</div>
<img src="./s1/en.png" class="en" alt="" loading="lazy">
<img src="./s1/style1.png" class="style1" alt="" loading="lazy">
<img src="./s1/synlogo.png" class="synlogo" alt="" loading="lazy">

    <div class="title">
      <img loading="lazy"
        v-if="!isMobile"
        class="t1"
        data-aos="flip-up"
        src="@/projects/cfyd/s1/t1.svg"
        alt=""
        srcset=""
      />
      <img loading="lazy"
        v-else
        class="t1"
        data-aos="flip-up"
        src="@/projects/cfyd/s1/t1_m.svg"
        alt=""
        srcset=""
      />
    </div>

  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: size(1080);
  background:linear-gradient(to right, #0e79dc, #0e79dc);
  

      .bg-img{
      position: absolute;
      width:size(1920);
      height:auto;
      left:size(0);
      bottom:0;
      z-index: 0;
      transform:skewY(3deg);
      transform-origin: 50% 100%;
      animation: anx 3s ease-in-out infinite alternate;
    }
    @keyframes anx{
      to {
        transform:skewY(-3deg);
      }
    }

  .style1{
    position: absolute;
    width:size(1200);
    bottom:0;
    right: size(-200);
  }  

  .en{
  position: absolute;
  z-index: 2;
  width: size(350);
  bottom: size(100);
  right: size(50);
}

.synlogo{
  position: absolute;
  width: size(350);
  filter: drop-shadow(0em 0em 0.2em rgba(25, 40, 127, 1));
  left: size(30);
  top: size(30);
  
}

  .title {
    position: absolute;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;


    .t1 {
    width: 65%;
    -webkit-filter: drop-shadow(0em 0em 0.2em rgba(9, 20, 58, 0.6));
    filter: drop-shadow(0em 0em 0.8em rgba(9, 20, 58, 0.6));
    }

    .t2 {
      margin-top: size(15);
      width: 92%;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s1 {
    position: relative;
    width: size-m(375);
    height: size-m(667);
    z-index: 12;

    .bg-img{
      bottom:size-m(27);
    }
    .style1{
      width: size-m(650);
      right:size-m(-330);
    }
     
    .en{
    position: absolute;
    width: size-m(150);
    right:size-m(27);
    }
    .synlogo{
    width: size-m(250);
    left:size-m(27);
    top:size-m(27);
    }


    .title {
      position: absolute;
      width: size-m(308);
      height: size-m(249);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      right: 50%;
      transform: translateX(50%);
      bottom: size-m(250);
      .t1 {
        width: 80%;
      }
      .t2 {
        margin-top: size-m(15);
        width: 85%;
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";

export default {
  name: "s1",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      visual: "",
    };
  },

  methods: {
    // scrollTo(el) {
    //   this.scrollInstance.scrollTo(el);
    // },
  },

  created() { },
  mounted() {
  },
};
</script>