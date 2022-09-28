<template>
  <article class="s6">
    <div class="main">
      <div v-if="!$isMobile()" class="caption">外觀3D示意圖</div>
      <div class="text-box">
        <div class="t2" data-aos="fade-up" data-aos-delay="0">純正百坪大戶 榮耀世族</div>
        <div class="c-divider"></div>
        <div class="t3" data-aos="fade-up" data-aos-delay="100">「耑悦」臨路完整大基地，樓高24層景觀席次，1718坪土地僅規劃88戶、<br />
          116-122坪層峰家庭，<br />
          一棟建築世代傳承，家徽輝映世族榮耀！</div>
      </div>
    </div>
    <img v-if="!$isMobile()" class="large" src="@/section/s6/large.svg" alt="" srcset=""  data-aos="fade-up" data-aos-delay="200">
    <img v-else class="large" src="@/section/s6/large_m.svg" alt="" srcset=""  data-aos="fade-up" data-aos-delay="200">
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  width: 100%;
  height: size(1080);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: size(35);

  .main {
    position: relative;
    width: size(1790);
    height: size(928);
    background-size: cover;
    background-position: center;
    background-image: url('@/section/s6/bg.jpg');
    padding-top: size(200);


    .caption {
      position: absolute;
      right: size(30);
      top: size(25);
      font-weight: 400;
      font-size: size(15);
      color: #FFFFFF;
      text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    }

    .text-box {
      margin-left: -#{size(850)};
      color: #fff;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .t2 {
        font-weight: 500;
        font-size: size(64);
        line-height: 125%;
        letter-spacing: 0.03em;
      }

      .c-divider {
        width: size(510);
        height: size(2);
        background-color: #fff;
        margin: size(25) 0;
      }

      .t3 {
        font-family: 'Noto Serif SC';
        font-weight: 400;
        font-size: size(18);
        line-height: 178%;
        letter-spacing: 0.05em;
      }
    }
  }

  .large {
    position: relative;
    width: size(1422);
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s6 {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: size-m(19);
    padding-bottom: size-m(15);

    .main {
      width: 100%;
      height: size-m(631);
      background-image: url('@/section/s6/bg_m.jpg');
      padding-top: size-m(50);

      .text-box {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: size-m(5);

        .t1 {
          font-size: size-m(16);
        }

        .t2 {
          font-size: size-m(25);
          line-height: 148%;
        }

        .c-divider {
          width: size-m(315);
          height: size-m(2);
          margin: size-m(10) 0;
        }

        .t3 {
          font-size: size-m(14);
          max-width: size-m(315);
        }
      }
    }

    .large {
      position: relative;
      width: size-m(227);
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>
