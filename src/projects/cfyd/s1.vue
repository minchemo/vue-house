<template>
  <div class="s1">

<div data-aos="fade">
<img src="./s1/bg.jpg" class="bg-img" alt="" loading="lazy" v-if="!isMobile">
<img src="./s1/bg_m.jpg" class="bg-img" alt="" loading="lazy" v-if="isMobile">
</div>
<!-- <img src="./s1/en.png" class="en" alt="" loading="lazy"> -->
<!--img src="./s1/style2.png" data-aos="fade-right" class="style1" alt="" loading="lazy"-->
<!--img src="./s1/synlogo.png" class="synlogo" alt="" loading="lazy"-->

    <div class="title">
      <img loading="lazy"
        v-if="!isMobile"
        class="t1"
        data-aos="flip-up"
        src="@/projects/cfyd/s1/t3.svg"
        alt=""
        srcset=""
      />
      <img loading="lazy"
        v-else
        class="t1"
        data-aos="flip-up"
        src="@/projects/cfyd/s1/t3_m.svg"
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
  background:#210104;// url("./s1/2.jpg");
  // background-size: cover;
  overflow: hidden;
  

      .bg-img{
      position: absolute;
      width:size(2280);
      height:auto;
      left:size(-180);
      bottom:size(0);
      z-index: 0;
      //transform:skewX(7deg);
      //transform-origin: 100% 26%;
      //animation: anx 3s linear infinite alternate;
    }
    @keyframes anx{
      to {
        transform:skewX(-3deg);
      }
    }

  .style1{
    position: absolute;
    width:size(655);
    bottom:size(-18);
    right: size(-100);
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
  width: size(200);
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
    width: 55%;
    filter: drop-shadow(0em 0em 0.8em rgba(9, 20, 58, 0.6));
    margin: 0 auto 5% auto;
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
    height: size-m(610);
    z-index: 12;

    .bg-img{
      top:size-m(0);
      left:size-m(0);
      width: size-m(375);
      height: size-m(610);
      transform-origin: 100% 0%;
    }
    .style1{
      width: size-m(269);
      right:size-m(-45);
      bottom:size-m(-67);
    }
     
    .en{
    position: absolute;
    width: size-m(150);
    right:size-m(27);
    }
    .synlogo{
    width: size-m(150);
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
        width:86%;
    margin: 53% auto 0% auto;
    filter: drop-shadow(0em 0em 0.8em rgba(9, 20, 58, 0.6));
    
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