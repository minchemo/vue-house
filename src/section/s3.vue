<template>
  <div class="s3 relative">
    <div class="absolute caption text-white">情境示意圖</div>
    <div class="absolute content">
      <h2 data-aos="fade" data-aos-delay="0" class="font-['Noto_Serif_TC'] text-[#D47300]">時代變，很多事情不變</h2>
      <p data-aos="fade" data-aos-delay="500" class="text-white">
        現代網路社群的蓬勃，鄰里間的親切寒暄、熟悉的笑容與善意，更加映照出人們內心對情感歸屬不變的渴望與追求。優良的建築設計，舒心的居住環境，若能再加上情感的連結，家，就少了幾分遺憾、多了幾分溫暖。</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height: size(1080);
  background-image: url('@/section/s3/bg.jpg');
  background-size: cover;
  background-position: center;

  .caption {
    font-size: size(12);
    right: size(15);
    bottom: size(15);
  }

  .content {
    width: size(500);
    top: size(535);
    left: size(200);

    h2 {
      font-size: size(40);
      margin-bottom: size(60);
    }

    p {
      font-weight: 400;
      font-size: size(20);
      line-height: size(30);
      letter-spacing: 0.2em;
    }
  }
}


@media screen and (max-width:768px) {

  .s3 {
    height: size-m(667);
    background-image: url('@/section/s3/bg_m.jpg');

    .caption {
      font-size: size(12);
      right: unset;
      left: size-m(10);
      bottom: size-m(10);
    }

    .content {
      width: size-m(310);
      top: size-m(60);
      left: size-m(32);

      h2 {
        font-size: size-m(25);
        font-weight: 800;
        margin-bottom: size-m(10);
      }

      p {
        font-weight: 400;
        font-size: size-m(15);
        line-height: 160%;
        letter-spacing: unset;
      }
    }
  }
}
</style>

<script setup>
</script>
