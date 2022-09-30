<template>
  <div class="s3 relative">
    <div class="absolute caption text-white">情境示意圖</div>
    <div class="absolute content">
      <h2  data-aos-delay="0" class="font-['Noto_Serif_JP'] text-[#F6B39A]">時代變，很多事情不變</h2>
      <p  data-aos-delay="500" class="text-white  font-['Noto_Serif_TC']">
        網路社群蓬勃，映出人們對情感的渴望。現代都會社區取代傳統家族，成為家庭的新聚合體，卻缺少家與家之間的親切和溫度。<br>
        隆遠集團盼以「心」，重聚鄰里間的寒暄與笑容，讓社區成為家族的延伸，找回無可取代的歸屬感。
        </p>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height:100vh;
  min-height: size(900);
  max-height: size(1080);
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
    top: 50%;
    left: size(200);
    text-align: justify;
      text-shadow:0 0.1em 0.3em #000;

    h2 {
      font-size: size(40);
      margin-bottom: size(60);
    }

    p {
      font-weight: 300;
      font-size: size(20);
      line-height: size(30);
      letter-spacing: 0.2em;
    }
  }
}


@media screen and (max-width:768px) {

  .s3 {
    height: size-m(667);
  min-height:size-m(667);
  max-height: size-m(667);
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
