<template>
  <article class="s1" id="s1">
    <img src="./s1/pc.jpg" class="t0">
    <div class="box"></div>
    <img src="./s1/bg.png" class="bg">
    <h3>超越南港<br>摩登時代</h3>
   <!-- <img src="./s1/mo.jpg" class="t0"> -->
  <!--  
   <img src="./s1/logom.svg" class="logo" alt="logo" data-aos="zoom-in" data-aos-delay="0" v-if="$isMobile()" >
   <img src="./s1/logo.svg" class="logo" alt="logo" data-aos="zoom-in" data-aos-delay="0" v-else >
   <img src="./s1/t1.svg" class="t1" alt="t1" data-aos="zoom-in" data-aos-delay="400" >
  
   <div class="img" data-aos="zoom-in" data-aos-delay="0">
    <img src="./s1/img.webp" alt="img" >
    <span>建築外觀3D示意圖</span>
   </div>
   <div class="whale">
    <img src="./s1/whale.webp" class="whale1" alt="whale" >
    <img src="./s1/gif.gif" class="gif" alt="gif" >
   </div>
   <div class="t">
    <div class="t2" data-aos="fade-up" data-aos-delay="0" >
      <img src="./s1/t2.svg" alt="t2">
      <div class="earth absolute">
        <img src="./s1/e.webp" alt="earth" >
        <img src="./s1/e.webp" alt="earth" >
      </div>
    </div>
    <img src="./s1/t3.svg" class="t3" alt="t3" data-aos="fade-up" data-aos-delay="0" >
  </div>
  <div class="txt">
    <p class="t5" data-aos="fade-up" data-aos-delay="200">全國首座民間建築能效評估認證1+等級，經內政部認證節能約32%，符合金管會綠色貸款的建案。全國首座屋頂設置光電板微型自用電廠，搭配台塑新智能直流電家用儲能設備，幸福不斷電。八德首座民間住宅建置都市減災『雨水溢流滯洪設施』可容納1000噸雨水。</p>
    <p class="t6" data-aos="fade-up" data-aos-delay="0">三水共構規劃｜風光水綠社區｜全區無火建築｜原生療癒生態<br>
生態跳島陽台｜雨水溢洪住居｜智慧健康促進｜寵物友善環境</p>
<img src="./s1/t4.svg" class="t4" alt="03-3682668"  data-aos="fade-up" data-aos-delay="200">
  </div>


   -->
	<!--  

   -->
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}
@keyframes an {
  to {
    transform: translateX(0%);
  }
}
.s1 {
  @apply relative; // w-full h-screen;
 // min-height: size(900);
// max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  font-size:size(36);
  //background: #E60012;
  padding-bottom: size(140);
  &::after{content: "";position: absolute;bottom: 0;height: 1px;width: size(1552);left: 0;right: 0;margin: auto;background: #0006;}

  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}
  .box{position: absolute;width: 100%;top:0;left: 0; pointer-events: none;z-index: 9;opacity: .3;}
  .bg{position: absolute;width:size(2517);top:size(-347);left:size(-291);}
  .logo{position: relative;
    width: size(315);
    margin-top:4.5vw;
    margin-bottom:0;
    }
  .t1{position: relative;
    width: size(951);
    margin-top:1vw;
    margin-bottom:0;
    }
  .whale{position: relative;//z-index: 2;
    width: size(1665);
    margin-top:1vw;
    margin-bottom:0;
    img{width: 100%;}
    .whale1{transform: translateY(7%);
      animation:an 3s ease-in-out infinite alternate;}
    .gif{
      position: absolute;
      width:100%;height:110%;top:0;left: 0;
      mix-blend-mode: overlay;
      opacity:1;
    }
  }
    .img{
      position: absolute;
      top:size(1110);
      left:size(175);
      width: size(875);
      img{width: 100%;}
      span{
        position: absolute;left: 0.5em;bottom: 0.5em;
        color: #fff;font-size: size(15);text-shadow:0 1px 3px #000;letter-spacing: 0.03em;
      }

    }
    .t{
      display: flex;
      justify-content:center;
      align-items:center;
      gap:size(40);
      margin-top:size(44);
    }
    .t2{
      width: size(602);position: relative;
      img{width: 100%;}
      .earth{
        top:1.8vw;left: 0;right: 0;margin: auto;
        width:size(73);height:size(73);
        border-radius: 50%;overflow: hidden;
        box-shadow: 0 0 .9vw #FFF, 0 0 .2vw #FFF;
        transform: rotate(10deg);
        white-space: nowrap;
        img{position: relative;top:-10%;
          opacity: 1;transform: translateX(-100%);height: 120%;width: auto;
          animation:an 7s linear infinite reverse  ;
        }
        &::after{content: "";position: absolute;display: block;top: 0;left: 0;width: 100%;height: 100%;background: radial-gradient(100% 84% at 40% 90%, #000 0%, rgba(0, 0, 0, 0.24) 26.74%, rgba(0, 0, 0, 0.00) 60%, rgba(255, 255, 255, 0.00) 70%, rgba(255, 255, 255, 0.50) 100%);}
      }
    }
    .t3{
      width: size(627);}
    .txt{
      width: size(625);margin: size(53) auto auto size(1105);
      line-height: 1.95;
      text-align: center;
      font-weight:400;
      .t5{
        width: size(619);letter-spacing: 0.01em;color: #000;
        text-align: justify;
      }
      .t6{
        margin-top:  size(175);
        line-height: 1.5;
        font-weight:800;
        font-size:size(23);color: #333;
      }
      .t4{
        margin-top:  size(17);
        width: size(624);
      }
    }

}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
   /* height:calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);*/
    font-size:sizem(16);
    padding-bottom: sizem(50);
    &::after{width: sizem(310);}
  .logo{
    width: sizem(142);
    margin-top:sizem(56);
    }
  .t1{
    width: sizem(325);
    margin-top:sizem(33);
    }
  .whale{
    width: sizem(350);
    margin-top:sizem(-50);
    top:sizem(-405);
    .whale1{transform: translateY(10%);}
  }
  
  .img{position: relative;
      top:0;
      left:0;
      width: 100%;
      margin-top:sizem(82);
      span{
        font-size: sizem(12);
      }

    }
    .t{
      flex-direction: column;
      gap:0;
      margin-top:sizem(5);
    }
    .t2{
      width: sizem(220);
      .earth{top:3vw;width:sizem(28);height:sizem(28);}
    }
    .t3{
      margin-top:sizem(20);
      width: sizem(220);}
    .txt{
      width: 100%;margin: sizem(45) auto auto auto;
      .t5{
        width: sizem(290);margin:auto;
      }
      .t6{
        margin-top:  sizem(75);
        font-size:sizem(11);
      }
      .t4{
        margin-top:  sizem(10);
        width: sizem(235);
      }
    }
/*
 .bgh{
top:0;
}
 .gif{width: sizem(800);height:sizem(800);
}

    
  .logo{
    width: sizem(320);
    margin-top:4vw;
    margin-bottom:3.5vw;
      .earth{
        top:4vw; width:size(210);height:size(210);
        box-shadow: 0 0 2vw #FFF, 0 0 1vw #FFF;
       

      }
  }
  .t1{
    width: sizem(297);
    margin-bottom:16.5vw;
  }
  .coming{
    width: sizem(224);
  }
.hr{bottom: -1px;}
*/

}
}
</style>
<script setup>
import { computed, getCurrentInstance, ref ,inject} from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>