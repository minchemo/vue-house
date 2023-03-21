<template>
  <article class="s4">
    <img class="map" v-if="!$isMobile()" src="@/section/s4_/1.jpg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0">
    <img class="map"  v-else src="@/section/s4_/1m.jpg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0">
    <div class="info">
      <div class="text-box">
        <div class="title" data-aos="fade-up" data-aos-delay="0">台積流域 高大領域 價值守恆</div>
        <img class="ring1" src="@/section/ring.svg" alt="">
        <div class="content" data-aos="fade-up" data-aos-delay="200">
          新台17線打通北高雄，15分鐘到美術館、農16<br />
          後勁溪、左營海景雙風光，水岸對望，<br v-if="!$isMobile()" />
          拓境美感視界<br v-if="$isMobile()" />高雄大學萬坪森林環擁，<br v-if="!$isMobile()" />
          學風靜地，孵育高質生活
        </div>
        <img class="badging" data-aos="fade-up" data-aos-delay="400" src="@/section/s4_/badge.png" alt="" srcset="">
        <div class="imgb" v-if="!$isMobile()" data-aos="fade-up" data-aos-delay="200">
          <div class="cap">河海之間 視野絕景</div>
        </div>
      </div>
    </div>
    <img class="bir" v-if="!$isMobile()" src="@/section/s4_/decor.png" alt="">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  @apply flex items-end justify-center font-['noto_sans_sc'] text-white relative;
  width: 100%;
  height: size(1232);
  background-image: url('@/section/s4_/bg.jpg');
  background-size: auto 100%;
  background-position: center right;
  background-repeat: no-repeat;
  gap: size(171);
  padding-bottom: size(139);
  
  .bir {
    @apply absolute;
    left: size(787);
    bottom: size(24);
    width: size(228);
  }

  .map {
    width: size(806);
    height: size(829);
    margin:  unset;
  }


  .info{
      .text-box {
        @apply font-['noto_sans_tc'];
    .title {
      font-weight: 700;
      font-size: size(40);
      line-height: size(58);
      letter-spacing: 0.07em;
    }

    .ring1 {
      width: size(48);
      margin-top: size(20);
      margin-bottom: size(20);
      transform:scaleX(-1);
    }

    .content {
      font-weight: 400;
      font-size: size(20);
      line-height: size(38);
      letter-spacing: 0.07em;
      color: #fff;
    }
  }
  .badging {
    width: size(482);
    margin-top: size(31);
    margin-bottom: size(42)
  }
  .imgb {
      @apply relative;
    width: size(701);
    height: size(400);
    background-image: url('@/section/s4_/2.jpg');
    background-size: cover;
    .cap{
      @apply absolute;
      right: size(10);
      bottom: size(9);
font-weight: 400;
font-size: size(15);
line-height: size(22);
letter-spacing: 0.07em;
    }
  }
  }

}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s4 {
    @apply flex-col-reverse items-center justify-end;
    height: size-m(677);
    background-image: url('@/section/s4_/bgm.jpg');
    background-size: cover;
    padding-top: size-m(50);
    gap: 0;
  .bir {
    @apply absolute;
    left: size(787);
    bottom: size(24);
    width: size(228);
  }

  .map {
    width: size-m(312);
    height: size-m(321);
    margin:  unset;
    border-radius: size-m(20);
  }


  .info{
      .text-box {
        @apply flex flex-col justify-start items-center;
        .title {
      font-size: size-m(20);
      line-height: size-m(29);
    }

    .ring1 {
      width: size-m(20.39);
      margin-top: size-m(4);
      margin-bottom: size-m(25);
    }

    .content {
      font-weight: 400;
      font-size: size-m(12);
      line-height: size-m(17);
      letter-spacing: 0.07em;
      text-align: center;
      color: #fff;
    }
  }
    .badging {
      width: size-m(274);
      margin-top: size-m(16);
      margin-bottom: size-m(12)
    }
  }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
