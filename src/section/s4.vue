<template>
  <div class="s4 relative bg-black">
    <div class="flex flex-col-reverse md:flex-row justify-between h-full">
      <lazy-component class="img" data-aos="fade" data-aos-delay="500">
        <img v-if="!$isMobile()" class="w-full h-full" src="@/section/s4/bg.jpg" alt="心仝聚" srcset="" />
        <img v-else class="w-full h-full" src="@/section/s4/bg_m.jpg" alt="心仝聚" srcset="" />
      </lazy-component>
      <div class="info">
        <div class="info-box flex flex-col items-center justify-center">
          <div class="t1 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="0">仝</div>
          <div class="t2 font-['Noto_Serif_TC']" data-aos="fade" data-aos-delay="200">
            中文讀音同「同」<br><br v-if="!$isMobile()">
            台語讀音「kâng」
          </div>
          <div class="t3" data-aos="fade" data-aos-delay="400">仝，是凝聚、溫情、信任，也是人與人、與屋、與地的美好關係。<br><br
              v-if="$isMobile()" />
            仝，是&，是+，是1+1>2的共好共榮。
          </div>
          <img class="logo" src="@/section/s4/logo.png" alt="心仝聚" srcset="" data-aos="fade" data-aos-delay="600">
          <div class="t4" data-aos="fade" data-aos-delay="800">隆遠相信，不論科技通訊的如何變化，關係與溫度的重要性超越物質，是我們之所以感到快樂的真正核心。
          </div>
          <div class="t5" data-aos="fade" data-aos-delay="1000">
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
    width: 100%;
    height: size-m(1050);

    .img {
      flex-basis: size-m(346);
    }

    .info {
      flex-basis: size-m(704);
      height: auto;
      padding: size-m(40) size-m(15);

      .info-box {
        width: 100%;
        height: 100%;
        border: 1px solid #D47300;
        padding: 0 size-m(20);

        .t1 {
          color: #D47300;
          font-size: size-m(50);
          margin-bottom: size-m(10);
        }

        .t2 {
          font-size: size-m(25);
          font-weight: 800;
          line-height: 160%;
          margin-bottom: size-m(10);
        }

        .t3 {
          font-size: size-m(15);
          font-weight: 400;
          line-height: 160%;
          text-align: center;
          letter-spacing: unset;
          margin-bottom: size-m(50);
        }

        .logo {
          width: size-m(110);
          margin-bottom: size-m(25);
        }

        .t4 {
          font-size: size-m(15);
          line-height: 160%;
          text-align: center;
          letter-spacing: unset;
          width: 100%;
          margin-bottom: size-m(30);
        }

        .t5 {
          font-size: size-m(15);
          line-height: 160%;
          text-align: center;
          letter-spacing: unset;
        }
      }
    }
  }
}
</style>

<script setup>
</script>
