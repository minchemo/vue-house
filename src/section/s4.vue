<template>
  <div class="s4 relative bg-black">
    <div class="flex justify-between h-full">
      <lazy-component class="img">
        <img class="w-full h-full" src="@/section/s4/bg.jpg" alt="" srcset="" />
      </lazy-component>
      <div class="info">
        <div class="info-box flex flex-col items-center justify-center">
          <div class="t1 font-['Noto_Serif_TC']">仝</div>
          <div class="t2 font-['Noto_Serif_TC']">
            中文讀音同「同」<br><br>
            台語讀音「kâng」
          </div>
          <div class="t3">仝，是凝聚、溫情、信任，也是人與人、與屋、與地的美好關係。<br>
            仝，是&，是+，是1+1>2的共好共榮。
          </div>
          <img class="logo" src="@/section/s4/logo.png" alt="" srcset="">
          <div class="t4">隆遠相信，不論科技通訊的如何變化，關係與溫度的重要性超越物質，是我們之所以感到快樂的真正核心。
          </div>
          <div class="t5">
            讓我，成為我們；<br />
            讓家，成為家園。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
  width: 100%;
  height: size(1080);

  .img {
    flex-basis: size(800);
  }

  .info {
    flex-basis: size(1120);
    height: size(1080);
    padding: size(77) size(99);

    .info-box {
      width: 100%;
      height: 100%;
      border: 1px solid #D47300;

      .t1 {
        color: #D47300;
        font-size: size(96);
        font-weight: 800;
        margin-bottom: size(56);
      }

      .t2 {
        color: #D47300;
        font-size: size(40);
        font-weight: 800;
        line-height: size(28);
        margin-bottom: size(51);
      }

      .t3 {
        color: #fff;
        font-size: size(20);
        font-weight: 400;
        line-height: size(30);
        text-align: center;
        letter-spacing: 0.2em;
        margin-bottom: size(83);
      }

      .logo {
        width: size(150);
        margin-bottom: size(38);
      }

      .t4 {
        color: #fff;
        font-size: size(20);
        font-weight: 400;
        line-height: size(30);
        text-align: left;
        letter-spacing: 0.2em;
        width: size(594);
        margin-bottom: size(56);
      }

      .t5 {
        color: #fff;
        font-size: size(20);
        font-weight: 400;
        line-height: size(30);
        text-align: center;
        letter-spacing: 0.2em;
      }
    }
  }
}


@media screen and (max-width:768px) {
  .s4 {
    width: size-m(375);
    height: size-m(576);
  }
}
</style>

<script setup>
</script>
