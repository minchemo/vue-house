<template>
  <article class="s1">
    <img
      class="bg"
      src="@/section/s1/bg.png" alt="bg" v-if="!$isMobile()"
    />
    <img
      class="bg"
      src="@/section/s1/bgm.png" alt="bg" v-else
    />
    
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
    <!--
    <img
      class="t0"
      src="@/section/s1/pc.jpg" alt="0"
    />
    <img
      class="logo"
      src="@/section/s1/logoan.svg"
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <div class="t1" data-aos="fade-up" data-aos-delay="200">
      ｜2房23坪 3房36坪 即將完工｜
    </div>
    <div class="t2" data-aos="fade-up" data-aos-delay="400">
      接待中心｜新北市三重區仁安街108號<br />
      禮賓專線｜02-8282-8088
    </div>
    -->
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
}
</style>

<script setup>
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties

const smoothScroll = inject("smoothScroll")
const isMobile = computed(() => globals.$isMobile())
</script>
