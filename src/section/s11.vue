<template>
  <div class="s11 relative bg-black">
    <div class="flex h-full w-full md:flex-row flex-col">
      <div class="left relative">
        <div class="img">
          <img src="@/section/s11/1.jpg" alt="">
        <div class="t3 font-['Noto_Sans_TC']"> 情境示意圖</div>
        </div>
        
        
        <div class="info z-20">
          <div class="t1 font-['Noto_Serif_TC']" data-aos-delay="0">嚴謹查證建築工程的重要節點<br>方能回應住戶對安全的信任與期待</div>
          <div class="t3 font-['Noto_Serif_TC']" data-aos-delay="200">
            成立於1878年的SGS集團為國際第三方檢驗機構，以中立且公正的立場為大眾把關。SGS查證服務藉由嚴謹查證和檢測，監督工程和建物的安全性、穩固性，堅守最佳品質。
          </div>
        </div>
      </div>
      <div class="right">
        <div class="t3 font-['Noto_Sans_TC']">
            情境示意圖
          </div>
      </div>
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

    .img{
      width: size(660);
      position: relative;
      img {
      width: size(660);
    }
    .t3 {
        font-weight: 400;
        width: size(660);
        font-size: size(12);
        line-height: 150%;
        letter-spacing: 0.2em;
        color: #fff;
        position:absolute; 
        bottom: 0;
        left: 5px;
        text-shadow: 0.1em 0.1em 0.2em black
      }
    }

    .t3 {
        font-weight: 400;
        width: size(660);
        font-size: size(20);
        line-height: 150%;
        letter-spacing: 0.2em;
        color: #fff;
      }

    .info {
      width: size(660);

      .t1 {
        font-weight: 800;
        font-size: size(40);
        line-height: 130%;
        color: #fff;
        margin-bottom: size(45);
        text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.8);

      }
    }
  }

  .right {
    flex-basis: size(800);
    height: 100%;
    background-image: url('@/section/s11/large.jpg');
    background-size: cover;
    background-position: center;
    position: relative;

    .t3 {
        font-weight: 400;
        font-size: size(12);
        line-height: 150%;
        letter-spacing: 0.1em;
        color: #fff;
        position:absolute;  
        bottom: 0;
        right:10px; 
        text-shadow: 0.1em 0.1em 0.2em black
        }
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
      .img{
        width: 100%;
        img {
        width: 100%;
      }
      .t3 {
        font-size: size-m(12);
        right: 5px;
        bottom: 5px;
        }


      }
      

      .info {
        width: 100%;
        padding: 0 size-m(32);

        .t1 {
          font-size: size-m(20);
          margin-bottom: size-m(20);
          text-align: center;
          line-height: 130%;
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

      .t3 {
        font-size: size-m(12);
        right: 5px;
        bottom: 5px;
        }
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
