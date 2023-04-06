<template>
  <article class="s8">
    <div class="slide-box">
      <div class="title" v-if="!$isMobile()" data-aos="fade-up">
        <img class="logo" src="@/section/s8/logo.png" alt="" srcset="">
        <p>＊此為廣告效果示意，為單一建物電腦 3D 透視表現，周遭環 境係電腦合成，建設公司保有建物外觀修正之權利。</p>
      </div>
      <Splide ref="splideRef"
        :key="isInView"
        :options="{ type: 'loop', arrows: false, autoplay: true, pagination: false, interval: 3000, pauseOnHover: true, }"
        class="slide-section">
        <SplideSlide v-for="img, i in imgs" class="slide-item">
          <img class="cover" data-aos="fade-up" data-aos-duration="800" :src="img.img" alt="" srcset="">
        </SplideSlide>
      </Splide>
      <div class="title" v-if="$isMobile()" data-aos="fade-up">
        <p>＊此為廣告效果示意，為單一建物電腦 3D 透視表現，周遭環 境係電腦合成，建設公司保有建物外觀修正之權利。</p>
        <img class="logo" src="@/section/s8/logo_m.png" alt="" srcset="">
      </div>
    </div>
    <div class="content" data-aos="fade-up">
      <p>
        同步大南科茁壯發展，立足新市核心臨路角地，公園預定地旁，宗大為您造一座森山建築。以近80%三面通風採光面，悉心深框遮陽設計，<br
          v-if="!$isMobile()">雜揉景觀陽台垂直綠化，加上臺南前所未見的山徑天台空間規劃，群樹簇擁而生的深森絮語，是一座山，更是家人的靠山。
      </p>
      <div class="arrows" data-aos="fade-up" data-aos-duration="800">
        <img @click="splideRef.splide.go('<')" class="clickable" src="@/section/s5/back.png" alt="">
        <div class="line"></div>
        <img @click="splideRef.splide.go('>')" class="clickable" src="@/section/s5/next.png" alt="">
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s8 {
  @apply relative flex flex-col-reverse md:flex-col justify-center;
  width: 100%;
  height: 100vh;
  gap: size(43);
  background-color: #fff;


  .slide-box {
    @apply relative;
    .slide-section {
      @apply mx-auto;
      width: size(1555);

      .slide-item {
        .cover{
          width: size(1555);
        }
      }
    }

    .title {
    @apply absolute z-10 flex flex-col;
    left: size(245.15);
    bottom: size(22);
    gap: size(12);
    .logo {
      width: size(340.82);
      margin: unset;
    }
    p{
      font-family: 'Noto Sans TC';
      font-weight: 400;
      font-size: size(13);
      letter-spacing: 0.06em;
      color: #FFFFFF;
    }
  }
  }

  .content {
    @apply flex items-center justify-between mx-auto;
    width: size(1555);

    p {
      font-family: 'Noto Sans TC';
      font-weight: 400;
      font-size: size(17);
      line-height: size(32);
      text-align: justify;
      letter-spacing: 0.06em;
      color: #000000;
    }
    .arrows {
      @apply relative flex; 
      gap: size(40);
      height: size(50.5);
      .line {
        width: size(1);
        background-color: #C6A93E;
      }
      img {
        @apply cursor-pointer m-0 h-full;
      }
    }
  }


}

@media screen and (max-width: 767px) {
.s8 {
  @apply flex-col justify-start;
  width: 100%;
  height: size-m(927);
  gap: size-m(0);

  .arrows {
    gap: size-m(25);
    height: size-m(33);
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
    .line {
      width: size-m(1);
    }
    img {
      @apply cursor-pointer m-0 h-full;
    }
  }

  .slide-box {
    .title {
    @apply relative items-center;
    padding: size-m(13) size-m(20);
    left: unset;
    bottom: unset;
    gap: size-m(50);
    .logo {
      width: size-m(209.22);
      margin: unset;
    }
    p{
      font-size: size-m(12);
      line-height: size-m(17);
      color: #808080;
    }
  }

    .slide-section {
    @apply mx-auto;
    width: 100%;

    .slide-item {
      .cover{
        width: 100%;
      }
    }
  }
  }

  
  .content {
    @apply flex-col;
    gap: size-m(40);
    width: 100%;
    margin-top: size-m(29.7);
    padding: 0 size-m(30);

    p {
      font-size: size-m(14);
      line-height: size-m(31);
    }

    .arrows {
    gap: size-m(25);
    height: size-m(33);
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
    width: 100%;
    .line {
      width: size-m(1);
    }
    img {
      @apply cursor-pointer m-0 h-full;
    }
  }
  }

}
}
</style>
<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
import { SplideTrack } from '@splidejs/vue-splide';
import inView from 'in-view';


const globals = getCurrentInstance().appContext.config.globalProperties;
const splideRef = ref(null);
const activeIndex = ref(0);
const imgs = [
  {
    img: globals.$isMobile() ? new URL("../section/s8/1_m.jpg", import.meta.url).href : new URL("../section/s8/1.jpg", import.meta.url).href,
  },
  {
    img: globals.$isMobile() ? new URL("../section/s8/1_m.jpg", import.meta.url).href : new URL("../section/s8/1.jpg", import.meta.url).href,
  },
]

let playInterval;

const isInView = ref(false);

onMounted(() => {
  inView('.s8')
    .on('enter', () => {
      setTimeout(() => {
        isInView.value = true;
      }, 100);
    })
    .on('exit', () => {
      isInView.value = false;
      clearInterval(playInterval)
    });
})
</script>
