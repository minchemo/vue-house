<template>
  <div class="s1">
    <div class="title">
      <img src="@/section/s1/logo.svg" alt="" srcset="">
      <p data-aos="fade-up"><span>吉美富徠</span>｜瑞安街最高名宅｜73-150坪｜577坪 大局致大安</p>
    </div>
    <lazy-component class="b1">
      <div class="t" data-aos="fade-up">
        靜巷，自成氣候<br>
        靜，全世界洗耳恭聽<br>
        靜，聽見樹<br>
        靜，聽見風
      </div>
      <img data-aos="scaleIn" src="@/section/s1/01.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b2">
      <img data-aos="scaleIn" src="@/section/s1/02.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b3">
      <div class="t" data-aos="fade-up">
        與青春不期而遇<br />
        水牛書店一冊鉛字，<br />
        官邸屋簷，迭起時代故事<br />
        早午餐雙蛋黃，閒情拌日光<br />
        街角咖啡館，輕吻淺烘培
      </div>
      <img data-aos="scaleIn" src="@/section/s1/03.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b4">
      <img data-aos="scaleIn" src="@/section/s1/04.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b5">
      <img data-aos="scaleIn" src="@/section/s1/05.jpg" alt="" srcset="">
      <div>
        <img data-aos="scaleIn" src="@/section/s1/06.jpg" alt="" srcset="">
        <img data-aos="scaleIn" src="@/section/s1/07.jpg" alt="" srcset="">
      </div>
    </lazy-component>
    <lazy-component class="b6">
      <img data-aos="scaleIn" src="@/section/s1/08.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b7">
      <img data-aos="fade-up" src="@/section/s1/mansion.svg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b8">
      <div class="t" data-aos="fade-up">
        窗前凝視，樹梢與歲月靜好<br />
        公園畔陽台，共舞芬多精<br />
        大樹腳跟子，心平氣和<br />
        靜，來自修養、化作思想
      </div>
      <img data-aos="scaleIn" src="@/section/s1/09.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b9">
      <div class="t" data-aos="fade-up">
        瑞安和平，大局致大安<br />
        瑞安靜巷，自成一格四季<br />
        靜，自有高度<br />
        鬧中有境、靜中有序
      </div>
      <img data-aos="scaleIn" src="@/section/s1/10.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b10">
      <img data-aos="scaleIn" src="@/section/s1/11.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b11">
      <div class="t" data-aos="fade-up">
        預排文字預排文字<br />
        預排文字預排文字<br />
        預排文字預排文字<br />
        預排文字預排文字
      </div>
      <img data-aos="scaleIn" src="@/section/s1/12.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b12">
      <div class="t" data-aos="fade-up">
        心有知音、世界為您安靜。<br />
        鍾情一窗維瓦第、四季演色。<br />
        伴隨一段德布西、開窗樹海輕舞，<br />
        <span>心靜，開窗聽海</span>
      </div>
      <img data-aos="scaleIn" src="@/section/s1/13.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b13">
      <img data-aos="scaleIn" src="@/section/s1/14.jpg" alt="" srcset="">
    </lazy-component>
    <lazy-component class="b14" v-if="false">
      <div class="t" data-aos="fade-up">
        預排文字預排文字預排文字預排文字<br />
        預排文字預排文字預排文字預排文字<br />
        預排文字預排文字預排文字預排文字<br />
        <span>預排文字預排文字</span>
      </div>
      <video autoplay loop muted playsinline class="video-background ">
        <source src="https://h35.banner.tw/jmfl/13.mp4" type="video/mp4">
      </video>
    </lazy-component>
    <lazy-component class="b15">
      <div class="t" data-aos="fade-up">
        你我相遇，恰如大千山水的兩朵雲。<br />
        樹冠邂逅泳池，Urban Resort 的避世默契，<br />
        日光透漾樹海，所有懸念一一沈澱。<br />
        <span>放空，樹梢漂浮</span>
      </div>
      <video autoplay loop muted playsinline class="video-background ">
        <source src="https://h35.banner.tw/jmfl/13.mp4" type="video/mp4">
      </video>
    </lazy-component>
    <lazy-component class="b16">
      <video autoplay loop muted playsinline class="video-background ">
        <source src="https://h35.banner.tw/jmfl/14.mp4" type="video/mp4">
      </video>
    </lazy-component>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  position: relative;

  .title {
    position: relative;
    margin-top: size(141);
    margin-left: size(100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: size(32);

    p {
      font-weight: 700;
      font-size: size(30);

      span {
        color: #7F4F21
      }
    }

    img {
      width: size(413);
    }
  }

  .b1 {
    display: flex;
    justify-content: flex-end;
    gap: size(79);
    margin-top: size(179);
    margin-right: size(100);

    .t {
      writing-mode: vertical-lr;
      font-size: size(32);
      font-weight: 600;
      line-height: size(64);
    }

    img {
      width: size(968);
    }

  }

  .b2 {
    margin-top: -#{size(177)};

    img {
      width: size(578);
    }
  }

  .b3 {
    display: flex;
    justify-content: flex-end;
    gap: size(77);
    margin-top: -#{size(466)};

    .t {
      writing-mode: vertical-lr;
      font-size: size(32);
      font-weight: 600;
      line-height: size(64);
    }

    img {
      width: size(596);
    }
  }

  .b4 {
    margin-top: -#{size(150)};

    img {
      width: size(1117);
    }
  }

  .b5 {
    display: flex;
    gap: size(280);
    margin-top: size(118);

    &>img {
      width: size(574);
    }

    &>div {
      display: flex;
      flex-direction: column;
      gap: size(20);

      &>img {
        width: size(966);
      }
    }
  }

  .b6 {
    display: flex;
    justify-content: flex-end;
    margin-top: size(131);

    img {
      width: size(1820);
      float: right;
    }
  }

  .b7 {
    margin-top: size(80);
    padding-left: size(100);

    img {
      width: size(552);
    }
  }

  .b8 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: size(377);
    margin-top: -#{size(116)};

    .t {
      writing-mode: vertical-lr;
      font-size: size(32);
      font-weight: 600;
      line-height: size(64);
    }

    img {
      width: size(1114);
    }
  }

  .b9 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row-reverse;
    gap: size(257);
    margin-top: size(112);

    .t {
      writing-mode: vertical-lr;
      font-size: size(32);
      font-weight: 600;
      line-height: size(64);
    }

    img {
      width: size(1336);
    }
  }

  .b10 {
    margin-top: size(78);

    img {
      width: 100%;
    }
  }

  .b11 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: size(257);
    margin-top: size(111);

    .t {
      writing-mode: vertical-lr;
      font-size: size(32);
      font-weight: 600;
      line-height: size(64);
    }

    img {
      width: size(1336);
    }
  }

  .b12 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row-reverse;
    gap: size(175);
    margin-top: size(111);

    .t {
      writing-mode: vertical-lr;
      font-size: size(32);
      font-weight: 600;
      line-height: size(64);

      span {
        font-size: size(48);
        display: block;
        margin-left: size(40);
        letter-spacing: size(10);
      }
    }

    img {
      width: size(1354);
    }
  }

  .b13 {
    margin-top: size(131);

    img {
      width: 100%;
    }
  }

  .b14 {
    position: relative;
    margin-top: size(173);

    .t {
      position: absolute;
      right: size(117);
      top: size(100);
      z-index: 1;
      writing-mode: vertical-lr;
      font-size: size(32);
      font-weight: 600;
      line-height: size(64);
      color: #fff;
      letter-spacing: size(5);

      span {
        padding-top: size(10);
        font-size: size(48);
        display: block;
        margin-left: size(30);
        letter-spacing: size(15);
      }
    }

    video {
      width: 100%;
    }
  }

  .b15 {
    position: relative;
    margin-top: size(173);

    .t {
      position: absolute;
      right: size(117);
      top: size(100);
      z-index: 1;
      writing-mode: vertical-lr;
      font-size: size(32);
      font-weight: 600;
      line-height: size(64);
      color: #fff;
      letter-spacing: size(5);

      span {
        padding-top: size(10);
        font-size: size(48);
        display: block;
        margin-left: size(30);
        letter-spacing: size(15);
      }
    }

    video {
      width: 100%;
    }
  }

  .b16 {
    position: relative;
    margin-top: size(509);

    video {
      width: 100%;
    }
  }
}

@media screen and (max-width: 767px) {
  .s1 {
    height: size-m(5758);
  }
}
</style>
<script setup>
import { ref } from 'vue';
</script>
