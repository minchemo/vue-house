<template>
  <article class="s1">
    <div class="inkbg absolute">
    <img
      class="ink1 absolute"
      src="./s1/ink2.png" alt="ink" data-aos="zoom-in" data-aos-delay="0"
    />
    <img
      class="ink2 absolute"
      src="./s1/ink2.png" alt="ink" data-aos="zoom-in" data-aos-delay="100"
    />
    <img
      class="ink3 absolute" data-aos="fade" data-aos-delay="200"
      src="./s1/ink1.svg" alt="ink"
    />
    <div
      class="ink4 absolute" data-aos="fade" data-aos-delay="500">
    <img
      src="./s1/ink3.png" alt="ink"
    />
  </div>
  <div  class="ink5 absolute" data-aos="fade" data-aos-delay="400">
    <img
      src="./s1/ink3.png" alt="ink"
    />
  </div>
    <div class="ink6 absolute" data-aos="fade" data-aos-delay="300">
    <img
      src="./s1/ink3.png" alt="ink"
    />
  </div>
  <div
      class="ink7 absolute" data-aos="fade" data-aos-delay="600">
    <img
      src="./s1/ink4.png" alt="ink"
    />
  </div>
  <div
      class="ink8 absolute" data-aos="fade" data-aos-delay="700">
    <img
      src="./s1/ink5.png" alt="ink"
    />
  </div>
    </div>
    
    <img
      class="logo"
      src="@/section/s1/logo.png" alt="logo"
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <div class="t1" data-aos="fade-up" data-aos-delay="200">集賢大道 ｜ 靜巷好宅    </div>
    <div class="t2" data-aos="fade-up" data-aos-delay="200">2房23坪｜3房36坪<span>即將完工</span></div>
    <div class="t3" data-aos="fade-up" data-aos-delay="400">
      接待中心｜新北市三重區仁安街108號<span v-if="!$isMobile()"> 　 </span><br v-else>
      禮賓專線｜02-8282-8088
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply w-full relative;
  @apply bg-cover bg-center bg-no-repeat;
  @apply flex flex-col items-center justify-center;
  color: #000;
  height:calc(100vh + #{size(180)});
  min-height: size(900+180);
  // min-height: size(1260);
  max-height: size(1260);
//  background-image: url("@/section/s1/bg.jpg");
  padding-bottom: size(137);
  line-height: 1.7;
.t0{position: absolute;top: 0;left: 0;width: 100%;opacity:0.3 ;z-index: 10;
  user-select: none;
  pointer-events: none;}
.bg{position: absolute;top: 0;left: 0;width: 100%;z-index:3;
  user-select: none;
  pointer-events: none;}
  .logo {
    position: relative;z-index:4;
    width: size(622);margin-top: size(380);
  }
  .t1 {
    position: relative;z-index:4;
    margin-top: size(150);
    font-size: size(40);
    font-weight: 600;
    letter-spacing:0.73em;
    text-indent: .3em;
  }
  .t2 {
    position: relative;z-index:4;
    margin-top: size(30);
    font-size: size(40);
    font-weight: 500;
    letter-spacing:0.3em;
    text-indent: -.4em;
    span{color: #fff;background: #E60012;
      font-size: 0.875em;
      font-weight: 400;padding: .1em .3em .16em .4em;border-radius: .4em;
      letter-spacing:0.1em;text-align: center;margin: 0 0 0 0.5em;}
  }
  .t3{
    position: relative;z-index:4;
    margin-top: size(150);
    font-size: size(30);
    font-weight: 500;
    letter-spacing: 0.2em;
  }
  .ink1{top: size(212);left:size(-287);width:size(2115);
    filter: invert(86%) sepia(4%) saturate(1113%) hue-rotate(319deg) brightness(111%) contrast(98%);}
  .ink2{top: size(-475);left:size(-60);width:size(2185);height:size(990);
    filter:invert(90%) sepia(14%) saturate(861%) hue-rotate(316deg) brightness(101%) contrast(95%);}
  .ink3{top: size(163);left:size(-140);width:size(2960);
    transform: rotate(-5deg)translateX(10%);
  }
  .ink4{top: size(470);left:size(-410);width:size(1330);height:size(300);
    transform: translate(-10%,-10%);
   img{width: 100%;height: 100%;
    transform: rotate(25deg);
   filter:invert(91%) sepia(67%) saturate(3215%) hue-rotate(294deg) brightness(100%) contrast(91%);}
  }
  .ink5{top: size(310);left:size(1030);width:size(860);height:size(280);
    transform: translate(-10%,-10%);
    img{width: 100%;height: 100%;transform: perspective(5vw)rotate(10deg)rotateX(-8deg)rotateY(3deg);filter:invert(79%) sepia(17%) saturate(537%) hue-rotate(358deg) brightness(98%) contrast(89%);}
  }
  .ink6{top: size(513);left:size(160);width:size(760);height:size(210);
    
    transform: translate(-10%,-10%);
    img{width: 100%;height: 100%;transform: rotate(8deg);filter:invert(79%) sepia(17%) saturate(537%) hue-rotate(358deg) brightness(98%) contrast(89%);}
  }
  .ink7{top: size(20);left:size(615);width:size(1470);
    img{width: 100%;transform: rotate(17deg);}
  }
  .ink8{top: size(745);left:size(-1115);width:size(1760);
    img{width: 100%;}
  }
}

.inkbg{top: 0;left: 0;width: 100%;z-index:3;
  user-select: none;
  pointer-events: none;

}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s1 {
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(604);
    padding-bottom: sizem(103);
   //background-image: url("@/section/s1/bgm.jpg");
    .logo {
      width: sizem(230);
      margin-top: sizem(170);
    }
    .t1 {
      margin-top: sizem(85);
      font-size: sizem(17);
    //  letter-spacing: sizem(3);
    }
    .t2 {
      margin-top: sizem(15);
      font-size: sizem(17);
    //  letter-spacing: sizem(3);
    }
    .t3 {
      margin-top: sizem(95);
      font-size: sizem(13);
      line-height: 2.2;
    }
  }
   .inkbg{
    .ink1{
      top: sizem(180);left:sizem(-420);width:sizem(950);height:sizem(512);
    }
    .ink2{top: sizem(-95);left:sizem(-265);width:sizem(900);height:sizem(400);

    }
    .ink3{top: sizem(160);left:sizem(-300);width:sizem(1235);
    }
    .ink4{top: sizem(290);left:sizem(-360);width:sizem(500);height:sizem(135); 
    }
    .ink5{top: sizem(215);left:sizem(200);width:sizem(280);height:sizem(125); 
      img{ transform: perspective(7vw)rotate(10deg)rotateX(-4deg)rotateY(3deg);}
    }
    .ink6{top: sizem(313);left:sizem(-140);width:sizem(280);height:sizem(85);
    }
    .ink7{top: sizem(42);left:sizem(33);width:sizem(600);
    }
    .ink8{top: sizem(455);left:sizem(-555);width:sizem(740);
    }
   }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
