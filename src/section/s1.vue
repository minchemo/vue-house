<template>
  <article class="s1">
    <div class="main">
      <img src="@/section/s1/logo.svg" alt="" srcset="" data-aos="fade-up" data-aos-delay="0">
      <p data-aos="fade-up" data-aos-delay="100">以尖端禮遇尖端</p>
      <div class="title2" v-if="$isMobile()"  data-aos="fade-up" data-aos-delay="100">中路司法公園<br />24層純百坪景觀宅</div>
    </div>
    <div class="subtitle" >
      <p v-if="!$isMobile()"  data-aos="fade-up" data-aos-delay="0">中路司法公園‧24層純百坪景觀宅</p>
      <!--img v-if="!$isMobile()" src="@/section/s1/subtitle.svg" alt="" srcset=""  data-aos="fade-up" data-aos-delay="100"-->
      <!--img v-else src="@/section/s1/subtitle_m.svg" alt="" srcset=""  data-aos="fade-up" data-aos-delay="100"-->
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  position: relative;
  background-image: url('@/section/s1/bg.jpg');
  background-size: cover;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: size(32);

    img {
      width: size(472);
    }

    p {
      font-weight: 700;
      font-size: size(38);
      letter-spacing: 0.28em;
    }
  }

  .subtitle {
    position: absolute;
    bottom: size(53);
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: size(25);
    width: 100%;

    p {
      font-weight: 400;
      font-size: size(32);
      letter-spacing: 0.74em;
    }

    img {
      width: size(1255);
    }
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s1 {
    min-height: size-m(667);
    max-height: size-m(750);
    background-image: url('@/section/s1/bg_m.jpg');

    .main {
      gap: size-m(26);

      img {
        width: size-m(196);
      }

      p {
        font-size: size-m(25);
      }

      .title2 {
        font-weight: 400;
        font-size: size-m(18);
        line-height: 172%;
        text-align: center;
        letter-spacing: 0.74em;
        padding-left:0.74em;
      }
    }

    .subtitle {
      bottom: size-m(16);
      gap: 0;
      width: 100%;
      img {
        width: size-m(227);
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
