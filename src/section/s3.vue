<template>
  <article class="s3">
    <!--
    <picture>
      <source media="(max-width: 768px)" srcset="./s1/s3m.jpg" />
      <img src="./s1/s3.jpg" alt="台北世界級 以我為中心" class="t0" />
    </picture>  -->
    <div class="cloud">
      <img src="./s1/cloud.png" alt="cloud" />
    </div>

    <!-- 左側：大圖 + 說明文字 -->
    <div class="hero">
      <img src="./s3/1.jpg" class="heroImg" alt="綠寶石河濱公園 實景拍攝" />
      <div class="slogo"><img src="./s1/slogo.svg" alt="" /><span>綠寶石河濱公園實景拍攝</span></div>
      <p class="heroTxt">
        繁華於前、水岸於側，位處「玉帶環腰」富貴正核心條件<br>
        城市豐熟機能環伺、轉身依然保有靜謐從容的王者之境
      </p>
    </div>

    <!-- 左下：兩張小圖 -->
    <div class="imgs">
      <div class="imgItem">
        <img src="./s3/2.jpg" alt="綠寶石河濱公園" />
        <p class="tag">｜綠寶石河濱公園 <span>實景拍攝</span></p>
        <p class="desc">
          清晨沿著新店溪畔慢跑、午後，帶上毛孩到新北境內第一的寵物公園盡情奔跑，或週末與孩子來一場家庭盃；集親水、生態與休閒於一體的都會綜合運動公園，近在眼前。
        </p>
      </div>
      <div class="imgItem">
        <img src="./s3/3.jpg" alt="仁愛公園" />
        <p class="tag">｜仁愛公園 <span>實景拍攝</span></p>
        <p class="desc">
          散步至永和市區內面積最大的綠地——仁愛公園，高達約2萬坪的豐沛綠意與河濱風光，加上城市核心的天際視野，頂溪新未來：由此刻，正式翻轉！
        </p>
      </div>
    </div>

    <!-- 右側：標題（BE ALL EYES + 天際視野 王者之心，svg 已內含弧線與文字）-->
    <div class="titleBlock">
      <picture>
        <source media="(max-width: 768px)" srcset="./s3/s3t1m.svg" />
        <img src="./s3/s3t1.svg" alt="BE ALL EYES 天際視野 王者之心" class="titleImg" />
      </picture>
    <img src="./s3/woman.webp" class="woman" alt="" />
    </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  @apply relative bg-[#808bc1] text-[#fff] overflow-hidden;
  width: 100%;
.t0 {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  pointer-events: none;
  z-index: 99;
  opacity: .3;
}

  @media screen and (max-width: 767px) {
    height: sizem(800);
    font-size: sizem(11);
  }

  @media screen and (min-width: 768px) {
    height: size(1030);
    font-size: size(16);background: linear-gradient(180deg, #8080B6 14.96%, #7E7DB4 50%, #7876AF 70%,  #53488F 77%, #6a6eac 80%,  #808bc1 100%);

  }

  /* ===== 雲（沿用 s2）===== */
  .cloud {
    position: absolute;
    top: sizem(245);
    right: sizem(0);
    width: sizem(135);
    z-index: 1;

    img {
      width: 100%;
      transform: translateX(-30%);
      animation: an 6s linear alternate infinite;
    }

    @media screen and (min-width: 768px) {
      top: size(200);
      right: size(30);
      width: size(270);
    }
  }

  @keyframes an {
    to { transform: translateX(0%); }
  }


  /* ===== 大圖區（1.jpg 944x520） ===== */
  .hero {
    position: absolute;
    z-index: 4;

    @media screen and (max-width: 767px) {
      top: sizem(0);
      left: 0;
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      top: size(90);
      left: size(148);
      width: size(945);
    }
    
  .slogo {
    position: absolute;
    top: sizem(25);
    left: sizem(70);
    z-index: 5;
    font-size:sizem(7);
    text-align: left;
    letter-spacing: 0em;
    img {
    width: sizem(50);
    }
    span{
      display: block;
      margin:0.2em 0 0 1.5em;
    }

    @media screen and (min-width: 768px) {
      top: size(30);
      left: size(25);
    font-size:size(13);
    img {
      width: size(125);
    }

    }
  }

    .heroImg {
      width: 100%;
      display: block;
      object-fit: cover;
      height: sizem(210);

      @media screen and (min-width: 768px) {
        height: size(520);
      }
    }

    .heroTxt {
      margin-top: auto;
      line-height: 1.6;
        padding: 0 0 0.7em;
      text-align: center;

      @media screen and (min-width: 768px) {
        padding: 0 0 .9em;
        font-size: 1.5em;
      }
    }
  }

  /* ===== 下方兩張小圖（2.jpg / 3.jpg 750x386） ===== */
  .imgs {
    position: absolute;
    display: flex;

    @media screen and (max-width: 767px) {
      top: sizem(425);
      left: 0;right: 0;margin: auto;
      width: sizem(290);
      flex-direction: column;
      padding: 0 sizem(10);
    }

    @media screen and (min-width: 768px) {
      top: size(630);
      left: size(148);
      width: size(945);
      gap: size(25);
    }

    .imgItem {
      flex: 1;
      position: relative;
          margin-bottom: 1.5em;

      img {
        width: 100%;
        display: block;
        object-fit: cover;
          height: sizem(140);

        @media screen and (min-width: 768px) {
          height: size(237);
        }
      }

      .tag {
        position: absolute;
        left: .5em;
        top: sizem(120);
        font-weight: bold;


        span {
          font-weight: normal;
          font-size: .75em;
          opacity: .8;
        }
        @media screen and (min-width: 768px) {
        bottom: .5em;
        }


      }

      .desc {
       // left: 0em;
      //  bottom: -7em;
        line-height: 1.7;
        margin-top: 0.3em;

        @media screen and (min-width: 768px) {
        position: absolute;
        bottom: -5.5em;
        }
      }
    }
  }

  /* ===== 右側標題（svg 內含弧線＋BE ALL EYES＋天際視野王者之心）===== */
  .titleBlock {
    position: absolute;
    z-index: 4;

    @media screen and (max-width: 767px) {
      top: sizem(233);
      left: 0;right: 0;margin: auto;
      width: sizem(255);
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      top: size(286);
      right: size(170);
      width: size(533);
    }

    .titleImg {
      width:100%;
      margin: 0 auto;
      display: block;

      @media screen and (min-width: 768px) {
        margin: 0;
      }
    }
  }

  .woman {
    position: absolute;
    z-index: 4;

    @media screen and (max-width: 767px) {
      display: none; // 手機版是否需要人像，待確認
    }

    @media screen and (min-width: 768px) {
      width: size(435);
      top:size(130);
      left: size(50);
      right: 0;
      margin: auto;
    }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
</script>