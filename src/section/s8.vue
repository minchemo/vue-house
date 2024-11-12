<template>
  <article class="s8 anchor9">
    <div class="img-box">
      <img src="@/section/s8/1.jpg" />
      <p>永盈業績-永盈世紀</p>
    </div>
    <div class="t">
      <div class="t1"
            data-aos="fade-up"
            data-aos-delay="0">雙強聯手改寫橋科最美墅</div>
      <div
        class="t2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <template v-if="!isMobile">
          <div
            class="tt"
          >
            國際金獎常勝軍 禾森室內設計
          </div>
          禾森深信空間與生活密不可分，想要呈現什麼樣貌的自己，從空間就能知<br />道，並帶領專業團隊，多次榮獲A’Design
          Award、MUSE Design<br />Awards、華人金創獎、MAISON & OBJET Design
          Award等國際獎項。 <br /><br />
          <div
            class="tt"
          >
            台北千戶家庭推手 永盈建設
          </div>
          超過60年的在地耕耘，永盈建設和中永和的城市同氣連枝融成一體，也以<br />建築改建成了城市的發展與文化演進。<br />
          <b>經典作品</b>：永盈世紀、君子集1-5、永盈雙星、和平藝墅、超越中和
        </template>
        <template v-else>
          <div
            class="tt"
          >
            國際金獎常勝軍 禾森室內設計
          </div>
          禾森深信空間與生活密不可分，想要呈現什麼樣貌的自己，從空間就能知道，並帶領專業團隊，多次榮獲A’Design
          Award、MUSE Design Awards、華人金創獎、MAISON & OBJET Design
          Award等國際獎項。 <br /><br />
          <div
            class="tt"
          >
            台北千戶家庭推手 永盈建設
          </div>
          超過60年的在地耕耘，永盈建設和<br />中永和的城市同氣連枝融成一體，<br />也以建築改建成了城市的發展與文<br />化演進。<br />
          <b>經典作品</b
          >：永盈世紀、君子集1-5、<br />永盈雙星、和平藝墅、超越中和
        </template>
      </div>
    </div>
    <div
      class="reward-box"
      data-aos="fade"
      data-aos-delay="0"
    >
      <img src="@/section/s8/reward.png" alt="" srcset="" />
      <p>獎盃圖待提供</p>
    </div>
    <img
      class="line"
      v-if="!isMobile"
      src="@/section/s8/line.png"
      alt=""
      srcset=""
    />
    <img class="line" v-else src="@/section/s8/linem.png" alt="" srcset="" />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s8 {
  @apply relative w-full z-10;
  @apply bg-cover;
  @apply flex items-center;
  @apply text-black;
  height: size(790);
  background-image: url("@/section/s2/bg.jpg");
  background-size: size(800) auto;
  // background-attachment: fixed;

  .img-box {
    margin-right: size(54);
    img {
      width: size(1023);
    }
    p {
      @apply font-['Noto_sans_tc'];
      text-align: right;
      font-size: size(15);
      font-weight: 700;
    }
  }

  .t {
    .t1 {
      font-size: size(54);
      font-weight: 600;
      margin-bottom: size(27);
    }
    .t2 {
      @apply font-['Noto_sans_tc'];
      font-size: size(16);
      line-height: 151.41%;
      .tt {
        font-size: size(20);
        font-weight: 700;
      }
    }
  }

  .reward-box {
    @apply absolute text-center;
    right: size(46);
    top: size(291);
    img {
      width: size(244);
    }
    p {
      @apply font-['Noto_sans_tc'];
      font-size: size(15);
      font-weight: 700;
    }
  }

  .line {
    @apply absolute w-full top-0;
    @apply pointer-events-none select-none;
  }
}
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s8 {
    @apply relative w-full z-10;
    @apply bg-cover;
    @apply flex flex-col-reverse items-start justify-end;
    @apply text-black;
    height: sizem(660);
    background-size: sizem(500) auto;
    padding-top: sizem(60);

    .img-box {
      @apply relative z-10;
      margin-right: 0;
      margin-top: sizem(34);
      img {
        width: 100vw;
      }
      p {
        font-size: sizem(12);
      }
    }

    .t {
      padding-left: sizem(32);
      .t1 {
        font-size: sizem(25);
        margin-bottom: sizem(10);
      }
      .t2 {
        font-size: sizem(14);
        line-height: 151.41%;
        width: sizem(310);
        .tt {
          font-size: sizem(14);
          font-weight: 700;
        }
      }
    }

    .reward-box {
      @apply absolute text-center;
      right: -#{sizem(13)};
      top: sizem(215);
      img {
        width: sizem(151.16);
      }
      p {
        font-size: sizem(12);
      }
    }

    .line {
      @apply absolute w-full top-0;
      @apply pointer-events-none select-none;
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance, ref } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>
