<template>
  <div class="s11 relative bg-black">
    <div class="flex h-full w-full md:flex-row flex-col">
      <div class="left relative">
        <img src="@/section/s11/1.jpg" alt="">

        <div class="info z-20">
          <div class="t1 font-['Noto_Serif_JP']" data-aos="fade" data-aos-delay="0">優質日系營造</div>
          <div class="t3 font-['Noto_Sans_TC']" data-aos="fade" data-aos-delay="200">
            文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認文案待確認(150字)
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  width: 100%;
  height: size(1080);
  background-color: #000;

  .left {
    flex-basis: size(1120);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: size(65);

    img {
      width: size(660);
    }

    .info {
      width: size(660);

      .t1 {
        font-weight: 800;
        font-size: size(40);
        line-height: 70%;
        color: #fff;
        margin-bottom: size(45);
        text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.8);
      }

      .t3 {
        font-weight: 400;
        width: size(660);
        font-size: size(20);
        line-height: 150%;
        letter-spacing: 0.2em;
        color: #fff;
      }
    }
  }

  .right {
    flex-basis: size(800);
    height: 100%;
    background-image: url('@/section/s11/large.jpg');
    background-size: cover;
    background-position: center;
  }
}


@media screen and (max-width:768px) {

  .s11 {
    width: 100%;
    height: auto;
    padding-top: size-m(50);

    .left {
      flex-basis: 100%;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      gap: size-m(35);
      margin-bottom: size-m(38);

      img {
        width: 100%;
      }

      .info {
        width: 100%;
        padding: 0 size-m(32);

        .t1 {
          font-size: size-m(25);
          margin-bottom: size-m(20);
          text-align: center;
        }

        .t3 {
          width: 100%;
          font-size: size-m(15);
        }
      }
    }

    .right {
      flex-basis: size-m(375);
      height: size-m(372);
      background-image: url('@/section/s11/large.jpg');
      background-size: cover;
      background-position: center;
    }
  }

}
</style>

<script setup>
import { ref } from "vue"
const splide = ref();

const currentIdx = ref(0)

const move = (newIdx, prevIdx, destIdx) => {
  currentIdx.value = prevIdx
}

const imgs = ref([
  {
    img: new URL("../section/s11/1.jpg", import.meta.url).href,
    caption: '保護文字'
  }
])
</script>
