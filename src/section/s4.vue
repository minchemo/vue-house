<template>
  <article class="s4 relative" id="s4">
    <div class="txt">
      <div class="en" data-aos="fade-up" data-aos-delay="0">BRAND & CRAFTSMANSHIP</div>
      <h2 class="title" data-aos="fade-up" data-aos-delay="100">品牌精神 精工匠藝</h2>
      <p data-aos="fade-up" data-aos-delay="400">
        <span class="subtitle" >飯店式金石大廳<br class="mo" /><span class="pc">，</span>尊榮私隱的迎賓門廳</span>
        以當代美學雕琢立面，以細膩格局提升坪效，<br class="mo" />以優質建材，<br class="pc" />
        層層構築舒適，<br class="mo" />從家的每一處升級，成就集美生活的新篇章。
      </p>

    </div>

    <img src="./s4/img.jpg" class="img">
    <div class="caption">本圖為3D公設示意圖，僅供參考實際以完工交屋為準</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';


@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s4 {
  position: relative;
    height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #444;
  font-size: sizem(12);

  @media screen and (min-width: 768px) {

    justify-content: space-between;
    padding: 0;
    font-size: size(18);

  }

  .img {
    width: 100%;
    object-fit: cover;
      @media screen and (max-width: 767px) {
   
    height: sizem(230);

      }
  }

  .txt {
    margin: 6.2em auto;
      @media screen and (min-width: 768px) {
    margin: 6.5em auto;
      }

    .en {
      color: #EB5B1A;
      font-size: 1.3em;

      @media screen and (min-width: 768px) {
        font-size: 1.7em;
      }
    }

    .title {
      color: #024E54;

      @media screen and (max-width: 767px) {
        font-size: 2.75em;

      }
    }

    p {
      letter-spacing: 0.1em;
    }

    .subtitle {
      display: block;
      font-family: 'Noto Serif TC', serif;
      font-size: 1.7em;
      letter-spacing: 0.1em;
      margin: 1em auto 0.3em;

    }
  }

      .mo {
        display: inline;
      }

      .pc {
        display: none;
      }

      @media screen and (min-width: 768px) {
        .mo {
          display: none;
        }

        .pc  {
          display: inline;
        }

      }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>