<template>
  <article class="s9">
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="0">精品建材  卓越品味</h3>
    <p class="desc" data-aos="fade-up" data-aos-delay="400">電梯客製雍容空間，薈萃頂級居家選品、美學廚具、機能配備…匹配高端家庭眼界，成就美感歇心居所。</p>
    </div>
    </div>
    <div class="slider" data-aos="fade" v-if="!isMobile">
      <img src="./s9/1.webp" alt="精品建材">
    </div>
    <label class="slider" data-aos="fade" v-else>
      <input type="checkbox" name="pics">
      <div class="pican">
      <img src="./s9/1.webp" alt="精品建材">
      <img src="./s9/2.webp" alt="精品建材">
      <img src="./s9/1.webp" alt="精品建材">
    </div>
    </label>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s9 {
  @apply relative flex flex-col items-center justify-center text-[#fff];
  width: 100%;
  // height: size(800);
  padding:6em 0 11em 0;
  font-size:size(18);
  gap:1.5em;
  flex-wrap:nowrap;
    flex-direction:column;
  .main {
    @apply flex;
    margin: 0;
  flex-direction: column;
  text-align: center;
    width: 100%;
}

.txt {
  margin: auto;
  width: size(1500);
}

  .slider {
    margin: 0;
    flex-basis: size(418);
    height: size(418);
    width: size(1500);
    img{width: 100%;}
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

  .s9 {
  @apply flex-col;
    height: auto;
    padding: 0;
  font-size:sizem(15);
  flex-wrap:nowrap;
gap:0em;

  .main {
    padding: 0 sizem(32.5);
    width: 100%;
}
.txt {margin: 4.4em auto 1.3em;
}

  .slider {
    height: auto;
    width: 100%;

  input {
    display: none;
  }
  input:checked + .pican:hover {
    animation-play-state: paused;
  }
.pican {
  width: auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  transform: translateX(-66.6666%);
  animation: an 30s linear infinite reverse;
    img{width: auto;
    position: relative;height:sizem(210);
    display: inline-block;}
  }
@keyframes an {
  to {
    transform: translateX(0);
  }
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

