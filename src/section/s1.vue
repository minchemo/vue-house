<template>
  <article class="s1" id="s1">
    <div class="star">
      <div class="star01" data-aos="zoom-in" data-aos-delay="1800"><img src="./s1/star1.png" alt="star"></div>
      <div class="star02" data-aos="zoom-in" data-aos-delay="1300"><img src="./s1/star1.png" alt="star"></div>
      <div class="star03" data-aos="zoom-in" data-aos-delay="2100"><img src="./s1/star1.png" alt="star"></div>
      <div class="star04" data-aos="zoom-in" data-aos-delay="1100"><img src="./s1/star1.png" alt="star"></div>
      <div class="star05" data-aos="zoom-in" data-aos-delay="1200"><img src="./s1/star1.png" alt="star"></div>
      <div class="star06" data-aos="zoom-in" data-aos-delay="1400"><img src="./s1/star1.png" alt="star"></div>
      <div class="star07" data-aos="zoom-in" data-aos-delay="1700"><img src="./s1/star1.png" alt="star"></div>
      <div class="star08" data-aos="zoom-in" data-aos-delay="2000"><img src="./s1/star1.png" alt="star"></div>
      <div class="star09" data-aos="zoom-in" data-aos-delay="1000"><img src="./s1/star1.png" alt="star"></div>
      <div class="star10" data-aos="zoom-in" data-aos-delay="1500"><img src="./s1/star1.png" alt="star"></div>
      <div class="star11" data-aos="zoom-in" data-aos-delay="1600"><img src="./s1/star1.png" alt="star"></div>
      <div class="star12" data-aos="zoom-in" data-aos-delay="1900"><img src="./s1/star1.png" alt="star"></div>
    </div>
      <div class="boy" data-aos="fade-up" data-aos-delay="0"><img src="./s1/boy.svg" alt="boy">
      <div class="star13" data-aos="fade-up" data-aos-delay="800"><img src="./s1/star.svg" alt="star"></div>
      <div class="star14" data-aos="fade-up" data-aos-delay="600"><img src="./s1/star.svg" alt="star"></div>
      <div class="star15" data-aos="fade-up" data-aos-delay="400"><img src="./s1/star.svg" alt="star"></div>
      <div class="star16" data-aos="fade-up" data-aos-delay="200"><img src="./s1/star.svg" alt="star"></div></div>
    <div class="txt">
      <span class="t1" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000"><span>勝興</span>沙鹿新站 希望綻放</span>
      <img src="./s1/logo.svg" class="logo" alt="" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000"/>
      <span class="t2" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">2-4<span>房</span> 04-2665-5577</span>
    </div>

  </article>
</template>

<style lang="scss" scoped>  
@import '@/assets/style/function.scss';

.s1 {
  @apply relative w-full h-screen;
  min-height: size(800);
  max-height: size(1080);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(40);
  color: #FFF;
  line-height: 1.3;
  font-weight: 700;
  // background: url("./s1/pc.jpg") center;
  // background-size: cover;
  /*
@keyframes light1 {
   0%{     
    transform: scale(0,1);opacity: 1;
   }
   80% {
     transform: scale(1);opacity: 1;
   }
   100% {
    transform: scale(5,2);opacity: 0;
   }
}
*/
@keyframes light1 {
   to {
    transform:translateY(0);
   }
}
.txt{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin: 5.3em 0 0 14.5em;
    .t1{font-size:1em;color: #FCEE21;
      span{font-size:2.2em;letter-spacing: .4em;margin: 0 .2em 0 .5em;transform: scaleX(.9);display: inline-block;}
    }
    .logo{width:15em;margin: .9em auto .8em;}
    .t2{font-size: 1.8em;
      letter-spacing: .03em;
      span{font-size: .85em;}
    }
}

.star{position: absolute;left: 0;top: 0;width: 100%;height: 100%;
> div {position: absolute;
img{width: 100%;}}
  .star01{width: size(395);top: -16%;left: 73%;
    img{opacity:0.1;transform: rotate(-20deg);filter: saturate(50%)brightness(1.1);}
  }
  .star02{width: size(556);top: -5%;left: 25%;
    img{opacity: 0.1;transform: rotate(143deg);filter: saturate(50%)brightness(1.1);}
  }
  .star03{width: size(360);top: -15%;left: 83%;
    img{opacity: 0.1;transform: rotate(-20deg);filter: saturate(50%)brightness(1.1);}
  }
  .star04{width: size(556);top: 39%;left: 0%;
    img{opacity: 0.1;transform: rotate(141deg);filter: saturate(50%)brightness(1.1);}
  }
  .star05{width: size(484);top: 24%;left: 14.5%;
    img{opacity: 0.3;transform: rotate(135deg);}
  }
  .star06{width: size(268);top: 2%;left: 33%;
    img{opacity: 0.3;transform: rotate(-130deg);}
  }
  .star07{width: size(147);top: -2%;left: 63.5%;
    img{opacity: 0.3;transform: rotate(30deg);}
  }
  .star08{width: size(308);top: 9%;left: 80.5%;
    img{opacity: 0.3;transform: rotate(-19deg);}
  }
  .star09{width: size(566);top: 57%;left: 4%;
    img{opacity: 0.3;transform: rotate(132deg);}
  }
  .star10{width: size(137);top: 8.5%;left: 29%;
    img{opacity: 0.3;transform: rotate(0deg);filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);}
  }
  .star11{width: size(137);top: 0%;left: 51.5%;
    img{opacity: 0.3;transform: rotate(0deg);filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);}
  }
  .star12{width: size(137);top: 14%;left: 76%;
    img{opacity: 0.52;transform: rotate(-15deg);filter:saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);}
  }
}
.boy{position: absolute;top:54.8%;left: 17.7%;width:size(154);
> div {position: absolute;}
img{width: 100%;}

.star13{width:30%;top: -61%;left: 39%;
    img{filter: invert(55%) sepia(100%) saturate(2649%) hue-rotate(84deg) brightness(118%) contrast(126%);
      animation: light1 5s 1s ease-in-out infinite alternate; 
    transform:translateY(-30%);}
  }
.star14{width:26.5%;top: -22%;left: 5%;
    img{filter: invert(22%) sepia(71%) saturate(7110%) hue-rotate(351deg) brightness(89%) contrast(121%);
      animation: light1 5s 1.5s ease-in-out infinite alternate; 
    transform:translateY(-70%);}
  }
.star15{width:74.5%;top: -38%;left: 71%;
    img{filter: invert(82%) sepia(89%) saturate(467%) hue-rotate(348deg) brightness(100%) contrast(98%);
      animation: light1 5s ease-in-out infinite alternate; 
    transform:translateY(-30%);}
  }
.star16{width: 34.5%;top:21%;left: 108%;
    img{filter: invert(19%) sepia(87%) saturate(2026%) hue-rotate(201deg) brightness(89%) contrast(104%);
      animation: light1 5s .5s ease-in-out infinite alternate; 
    transform:translateY(-50%);}
  }


}
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    height:calc(100vh - 63px);
    min-height: sizem(660);
    max-height: sizem(770);
    font-size:sizem(14);
    // background: url("./s1/mo.jpg") center;
    // background-size: cover;
    .txt{
      margin: 0em auto 7em;
    }
    .boy{
      top:74%;left:39%;width:sizem(60);
    }
    .star{
  .star01{width:sizem(118);top: -1%;left: 57%;
  }
  .star02{width:sizem(162);top:19%;left: -4%;
    img{transform: rotate(121deg);}
  }
  .star03{width:sizem(108);top: 0%;left: 73%;
  }
  .star04{width:sizem(167);top:62%;left: 18%;
    img{transform: rotate(152deg);}
  }
  .star05{width:sizem(149);top: 55%;left: 1%;
    img{transform: rotate(162deg);}
  }
  .star06{width:sizem(86);top: 22%;left: 0%;
    img{transform: rotate(34deg);}
  }
  .star07{width:sizem(43);top: 6%;left: 33%;
  }
  .star08{width:sizem(91);top: 10%;left: 69.5%;
  }
  .star09{width:sizem(178);top: 69%;left: 10%;
    img{transform: rotate(164deg);}
  }
  .star10{width:sizem(43);top: 23%;left: 15%;
    img{transform: rotate(-107deg);}
  }
  .star11{width:sizem(43);top: 14%;left: 23%;
    img{transform: rotate(-68deg);}
  }
  .star12{width:sizem(45);top: 12%;left: 62%;
  }

    }
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