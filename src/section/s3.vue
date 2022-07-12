<template>
  <div class="s3 relative">
    <lazy-component v-if="$isMobile()">
      <img class="bg" data-aos="zoom-in" data-aos-delay="0" src="@/section/s3/1_m.png" alt="" srcset="">
      <img class="title z-10" src="@/section/s3/title_m.svg" alt="" srcset="">
    </lazy-component>

    <lazy-component v-else> 
      <img class="bg" data-aos="zoom-in" data-aos-delay="0" src="@/section/s3/1.png" alt="" srcset="">
      <img class="title z-10" src="@/section/s3/title.svg" alt="" srcset="">
    </lazy-component>
    <div class="info">
      <div class="t1">慢悠閒/快繁華 輕鬆到位！</div>
      <div class="t2">要住，就住最好的！「公園漾」掌握三蘆生活所有動靜皆宜，<br v-if="!$isMobile()">出門的便利、回家的寧靜，滿足都會菁英心靈的居住渴望。</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  width: 100%;
  height: size(1080);
  background-color: #fff;

  .bg {
    width: 100%;
  }

  .title {
    position: absolute;
    width: size(805.12);
    left: size(1025);
    top: -#{size(11)};
  }

  .info {
    text-align: center;

    .t1 {
      font-size: size(40);
      font-weight: 700;
      margin-top: size(20);
      margin-bottom: size(10);
      letter-spacing: 0.07em;
    }

    .t2 {
      font-size: size(20);
      line-height: 158%;
    }
  }
}


@media screen and (max-width:768px) {

  .s3 {
    width: 100%;
    height: size-m(667);

    .bg {
      width: 100%;
    }

    .title {
      width: size-m(175);
      left: size-m(100);
      top: size-m(3);
    }

    .info {
      text-align: center;
      padding: 0 size-m(30);

      .t1 {
        font-size: size-m(25);
        margin-top: size-m(20);
        margin-bottom: size-m(10);
      }

      .t2 {
        font-size: size-m(15);
        line-height: 158%;
      }
    }
  }

}
</style>

<script setup>
</script>
