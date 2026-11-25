<template>
  <article class="s5 relative" id="s5">
    
    <img src="./s5/logo.svg" class="logo" data-aos="fade-up" data-aos-delay="0">
      <h2 class="title" data-aos="fade-up" data-aos-delay="100">即刻預約全球時區的專屬歸邸</h2>
   <p data-aos="fade-up" data-aos-delay="200"> VIP尊榮優先品鑑<br>
地段是永恆，藏稀擁一席<br>
讓資產價值的唯一性與獨一性<br>
記錄下您的身分、地位與傑出人生</p>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

@keyframes an {
  to {
    transform: translateX(0%);
  }
}

.s5 {
  position: relative;
  height: sizem(604);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #444;
  font-size: sizem(15);line-height: 2;
  text-align: center;

  @media screen and (min-width: 768px) {
    height: auto;
    
    padding:4.5em 0;
    font-size: size(27);

  }
  .logo{
    width: sizem(240);margin-bottom: 1.8em;
  @media screen and (min-width: 768px) {
    width: size(387);margin-bottom: 1.8em;
  }
  }

    .title{
    font-size: sizem(18);letter-spacing: 0.06em;
    margin-bottom: .4em;
  @media screen and (min-width: 768px) {
    font-size: size(52);
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