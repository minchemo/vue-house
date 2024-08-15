<template>
  <article class="s1">
    <!-- 
    <img
      class="t0"
      src="./s1/pc.png" alt="0"
    />
     -->
    <img
      class="logo"
      src="@/section/s1/t.svg" alt="logo"
      data-aos="fade-up"
      data-aos-delay="0"
    />
    <div class="box"></div>
    <div class="t1" data-aos="fade-up" data-aos-delay="200">網站維護中...</div>
    <div class="t2" data-aos="fade-up" data-aos-delay="200"><span>我們正在對伺服器進行升級，<br v-if="$isMobile()">升級期間暫時無法訪問。</span>
      <span>給您帶來不便，敬請見諒。</span></div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s1 {
  @apply w-full relative flex flex-col items-center justify-center;
  color: #58665A;
  height:100vh;
  min-height: size(900);
  line-height: 1.9;
  text-align: center;
  .box {
    background: url("https://i.imgur.com/SgdLNER.jpeg") repeat;
    background-size: auto;
    opacity: 0.8;
    mix-blend-mode: soft-light;
    user-select: none;
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
  }
  .logo {
    width: size(315);margin-top: size(60);
  }  
  .t1 {
    margin-top: size(45);
    font-size: size(45);
    font-weight: 700;
    letter-spacing:0.07em;
    text-indent: .4em;
  }
  .t2 {
    margin-top: size(115);
    font-size: size(27);
    font-weight: 600;
    letter-spacing:0.1em;
    span{display: block;margin-top:0em;}
  }
}

@media screen and (max-width: 767px) {
  .s1 {
    min-height: sizem(604);

    .logo {
      width: sizem(122);
      margin-top: sizem(41);
    }
    .t1 {
      margin-top: sizem(26);
      font-size: sizem(19);
    }
    .t2 {
      margin-top: sizem(45);
      font-size: sizem(13);
      span{margin-top:1.5em;}
    }
  }
}
</style>

<script setup>
</script>
