<template>
  <article class="s10" ref="s10">
    <div class="flower" data-aos="zoom-out">
      <div class="p1"><img src="./s1/s1p3.png" alt="flower" /></div>
      <div class="p2"><img src="./s5/2.png" alt="flower" /></div>
    </div>
    <div class="main">
      <div class="txt">
        <h3 class="title" data-aos="fade-up" data-aos-delay="200">質感建材選品<br>住進精緻系捷運宅
        </h3>
        <hr class="hr" data-aos="fade-up" data-aos-delay="400" />
        <p class="desc" data-aos="fade-up" data-aos-delay="600">
          從科技人視角出發，精選美、日、德、韓口碑建材，定調捷運精品系小宅風範。建築5年防水保固、15年結構保固，安心居住、好好生活。</p>
      </div>
      <img src="./s10/imgm.svg" alt="logos" class="logos"  v-if="isMobile" />
      <img src="./s10/img.svg" alt="logos" class="logos" v-else />
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';



.s10 {
  @apply relative;
  width: 100%;
  padding: 0;
  font-size: sizem(15);

  @media screen and (min-width: 768px) {
    font-size: size(24);
  }
  
  .flower {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    div {
      position: absolute;
    }

    img {
      width: 100%;
    }
    .p1 {
      transform: rotate(5deg);
      transform-origin: 50% 50%;
      animation: an 5s ease-in-out infinite alternate;
    }
    .p2 {
      transform: rotate(3deg);
      transform-origin: 50% 50%;
      animation: an 5s ease-in-out infinite alternate;
    }


    @media screen and (max-width: 768px) {
      .p1 {
        bottom: sizem(-100);
        left: sizem(70);
        width: sizem(150);
        img {
          transform: rotate(-50deg);
        }
      }
      .p2 {
        bottom: sizem(-40);
        left: sizem(-0);
        width: sizem(120);
        img {
          transform: rotate(50deg);
        }
      }
    }

    @media screen and (min-width: 768px) {
      .p1 {
        bottom: size(-235);
        right: size(-110);
        width: size(377);
        img {
          transform: rotate(45deg);
        }
      }

      .p2 {
        bottom: size(-130);
        right: size(200);
        width: size(300);
        img {
          transform: rotate(50deg);
        }
      }
      
    }
  }

  .main {
    position: relative;
    display: flex;
    margin: 0;
    z-index: 3;
    justify-content: flex-end;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      height: size(750);
    }
  }

  .txt {
    width: sizem(310);
    margin: 4em auto 2em;

    @media screen and (min-width: 768px) {
      position: absolute;
      padding: 0;
      top: size(0);
      width: size(460);
      left: size(210);

    }

    .title {
      color: #7C519F;
    }

    .hr {
      color: #7C519F;
      width: sizem(310);

      @media screen and (min-width: 768px) {
        width: size(460);
      }
    }

    .subtitle {
      font-weight: 400;
    }
  }

  .logos {
    width: sizem(310);
    position: relative;
   
    margin: auto auto sizem(40) auto;

    @media screen and (min-width: 768px) {
    position: absolute;
      width: size(1093);
    top:size(50);
    left: auto;
    right: size(85);
    margin: 0;
    }
  }



  // size(110)

  .slider {
    margin: 0 0 0 0;
    flex-basis: size(840);
    width: size(840);
    height: size(560);

    .slide-item {
      @apply bg-cover;
      flex-basis: size(840);
      width: size(840);
      height: size(560);

    }

    .splide__pagination {
      right: calc(100% + 3em);
      justify-content: flex-end;
      color: #7C519F;
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());


</script>