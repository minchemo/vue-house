<template>
  <article class="s1" id="s1">
	<!--  

   <img src="./s1/pc.jpg" class="t0">
   <img src="./s1/mo.jpg" class="t0">

   -->

   <div class="con flex">
  <img src="./s1/t1.svg" alt="title " class="t1" data-aos="zoom-in"  data-aos-delay="600" v-if="!isMobile">
  <img src="./s1/logo.svg" alt="logo" class="logo" data-aos="zoom-in" data-aos-delay="0">
  <img src="./s1/t2.svg" alt="title" class="t2" data-aos="zoom-in"  data-aos-delay="600">
</div>

  <img src="./s1/t3.svg" alt="title" class="t3" data-aos="zoom-in"  data-aos-delay="1200">
  <img src="./s1/city.svg" alt="city" class="city" v-if="!isMobile">
  <img src="./s1/city_m.svg" alt="city" class="city" v-else>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes op {
  50% {
     opacity: 0;
  }
}

.s1 {
  @apply relative w-full h-screen;
  min-height: size(900);
  max-height: size(1080);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  font-size:size(36);
  //background: #E60012;
 // background: url("./s1/bg.webp");

  background-size: cover;
  .t0{position: absolute;width: 100%;top:0vw;left: 0; pointer-events: none;z-index: 10;opacity: .3;}

.con{gap: size(60);margin: 0 0 size(70) 0;
  div{flex-direction:column;margin: 0;}}
  .logo{
    width: size(500);
    }

  .t1{
    width: size(485);
    left: size(100);
    top: size(490);
  }

  .t2{
    width: size(484);
    right: size(100);
    top: size(490);
  }

  .t3{
    display: flex;
    width: size(320);
    margin-bottom: size(56);
    //right: size(759);
    //bottom: size(175);
  }

  .city{
    position: absolute;
    width: size(1920);
    right: size(0);
    bottom: size(0);
  }
    
@keyframes ball {
  to{
     transform: translate(0);
  }
}

.ball{top: 0;left: 0;width: 100%;height: 100%;//background: #0003;
div{position: absolute;border-radius: 50%;width: 1em;height: 1em;
  transform: translateY(-150%);
animation: ball 5s ease-in-out alternate infinite;}
.ball1{background: linear-gradient(212deg, #DF91B6 20.3%, #D94371 86.6%);
  bottom:size(312) ;left: size(65);font-size: size(52);animation-delay: .5s;
}
.ball2{background:  linear-gradient(355deg, #DD7E58 -55.4%, #E2A44A 30.8%, #E7D03A 116.9%, #E9DD36 138.4%);
  bottom:size(130) ;left: size(490);font-size: size(54);
}
.ball3{background: #D42A78;animation-delay: 1s;
  bottom:size(190) ;left: size(605);font-size: size(38);}
.ball4{background:#0000 url("./s1/ball.png") center;background-size: size(18) auto;
  bottom:size(200);left: size(-37);font-size: size(144);opacity: .3;animation-delay: 2s;}
.ball5{background:  linear-gradient(355deg, #DD7E58 -55.4%, #E2A44A 30.8%, #E7D03A 116.9%, #E9DD36 138.4%);animation-delay: 3s;
  bottom:size(120) ;right: size(165);font-size: size(76);
}
}
@keyframes train {
  0%{
     transform: translate(250vw);
  }
  55%{
     transform: translate(135vw);
  }
  65%{
     transform: translate(135vw);
  }
  100%{
     transform: translate(-50vw);
  }
}
.train{bottom: 0;left: 0;width: 100%;text-align: right;
      .trainbg{width:size(1617);}
      .train1{bottom: size(10);right:100%;height:size(143);
      animation:train 10s infinite;
      }
    }
}

  
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {



  .s1 {
    height:sizem(667);
    min-height: sizem(667);
    max-height: sizem(667);
    font-size:sizem(15);

    .con{gap:0;margin: 0 0  sizem(34) 0;flex-direction:column;
  div{flex-direction:column;margin: 0;}}
  

  .logo{
    width: sizem(297);

  }  


  .t1{
    width: sizem(208);
  }




  .t2{
    position: absolute;
    width: sizem(208);
    left: auto;
    right: sizem(80);
    top: sizem(90);
  }


  .t3{
    width: sizem(203);
  }
    

  
.ball{
.ball1{
  bottom:sizem(177) ;left: sizem(23);font-size: sizem(25);
}
.ball2{
  bottom:sizem(55) ;left: sizem(60);font-size: sizem(20);
}
.ball3{
  bottom:sizem(135) ;right:sizem(25);;left:auto;font-size: sizem(13);}
.ball4{background-size: sizem(8) auto;
  bottom:sizem(120) ;left: sizem(-20);font-size: sizem(70);}
.ball5{
  bottom:sizem(45) ;right: sizem(23);font-size: sizem(40);
}
}


@keyframes train {
  0%{
     transform: translate(calc(100% + 150vw));
  }
  55%{
     transform: translate(100%);
  }
  65%{
     transform: translate(100%);
  }
  100%{
     transform: translate(-50vw);
  }
}
.train{
      .trainbg{width:100%;}
      .train1{bottom: sizem(2);height:sizem(52);
        transform: translate(100%);
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