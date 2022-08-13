<template>
  <div class="s1">
    <div class="title" data-aos="fade-up">
      <img src="@/section/s1/logo.svg" alt="吉美富徠" srcset="">
      <p><span>吉美富徠</span>｜瑞安街最高名宅｜73-150坪｜577坪 大局致大安</p>
    </div>
    <lazy-component class="b1">
      <div class="t" data-aos="fade-up" v-if="!$isMobile()">
        靜巷，自成氣候<br>
        靜，全世界洗耳恭聽<br>
        靜，聽見樹<br>
        靜，聽見風
      </div>
      <div class="t" data-aos="fade-up" v-else>
        靜，聽見風<br />
        靜，聽見樹<br />
        靜，全世界洗耳恭聽<br />
        靜巷，自成氣候
      </div>
      <img data-aos="scaleIn" src="@/section/s1/01.jpg" alt="吉美富徠" srcset="">

    </lazy-component>
    <lazy-component class="b2">
      <img data-aos="scaleIn" src="@/section/s1/02.jpg" alt="吉美富徠" srcset="">
      <div class="t" data-aos="fade-up" v-if="$isMobile()">
        街角咖啡館，輕吻淺烘培<br />
        早午餐雙蛋黃，閒情拌日光
      </div>
    </lazy-component>
    <lazy-component class="b3">
      <div class="t" data-aos="fade-up" v-if="!$isMobile()">
        與青春不期而遇<br />
        水牛書店一冊鉛字，<br />
        官邸屋簷，迭起時代故事<br />
        早午餐雙蛋黃，閒情拌日光<br />
        街角咖啡館，輕吻淺烘培
      </div>
      <div class="t" data-aos="fade-up" v-else>
        官邸屋簷，迭起時代故事<br />
        水牛書店一冊鉛字<br />
        與青春不期而遇
      </div>
      <img data-aos="scaleIn" src="@/section/s1/03.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b4">
      <img data-aos="scaleIn" src="@/section/s1/04.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b5">
      <img data-aos="scaleIn" src="@/section/s1/05.jpg" alt="吉美富徠" srcset="">
      <div>
        <img data-aos="scaleIn" src="@/section/s1/06.jpg" alt="吉美富徠" srcset="">
        <img data-aos="scaleIn" src="@/section/s1/07.jpg" alt="吉美富徠" srcset="">
      </div>
    </lazy-component>
    <lazy-component class="b6">
      <img v-if="!$isMobile()" data-aos="scaleIn" src="@/section/s1/08.jpg" alt="吉美富徠" srcset="">
      <img v-else data-aos="scaleIn" src="@/section/s1/08_m.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b7">
      <img data-aos="fade-up" src="@/section/s1/mansion.svg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b8">
      <div v-if="!$isMobile()" class="t" data-aos="fade-up">
        窗前凝視，樹梢與歲月靜好<br />
        公園畔陽台，共舞芬多精<br />
        大樹腳跟子，心平氣和<br />
        靜，來自修養、化作思想
      </div>
      <div v-else class="t" data-aos="fade-up">
        靜，來自修養、化作思想<br />
        大樹腳跟子，心平氣和<br />
        公園畔陽台，共舞芬多精<br />
        窗前凝視，樹梢與歲月靜好
      </div>
      <div class="caption" v-if="$isMobile()">建築模型環境合成示意圖</div>
      <img data-aos="scaleIn" src="@/section/s1/09.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b9">
      <div v-if="!$isMobile()" class="t" data-aos="fade-up">
        瑞安和平，大局致大安<br />
        瑞安靜巷，自成一格四季<br />
        靜，自有高度<br />
        鬧中有境、靜中有序
      </div>
      <div v-else class="t" data-aos="fade-up">
        鬧中有境、靜中有序<br />
        靜，自有高度<br />
        瑞安靜巷，自成一格四季<br />
        瑞安和平，大局致大安
      </div>
      <div class="caption">建築模型環境合成示意圖</div>
      <img data-aos="scaleIn" src="@/section/s1/10.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b10">
      <div class="caption">建築模型環境合成示意圖</div>
      <img data-aos="scaleIn" src="@/section/s1/11.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b11" v-if="false">
      <div class="t" data-aos="fade-up">
        預排文字預排文字<br />
        預排文字預排文字<br />
        預排文字預排文字<br />
        預排文字預排文字
      </div>
      <img data-aos="scaleIn" src="@/section/s1/12.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b12">
      <div v-if="!$isMobile()" class="t" data-aos="fade-up">
        心有知音、世界為您安靜。<br />
        鍾情一窗維瓦第、四季演色。<br />
        伴隨一段德布西、開窗樹海輕舞，<br />
        <span>心靜，開窗聽海</span>
      </div>
      <div v-else class="t" data-aos="fade-up">
        <span>心靜，開窗聽海</span>
        伴隨一段德布西、開窗樹海輕舞<br />
        鍾情一窗維瓦第、四季演色<br />
        心有知音、世界為您安靜<br />
      </div>
      <video autoplay loop muted playsinline class="video-background ">
        <source src="https://h35.banner.tw/jmfl/12.mp4" type="video/mp4">
      </video>
      <!-- <img data-aos="scaleIn" src="@/section/s1/13.jpg" alt="吉美富徠" srcset=""> -->
    </lazy-component>
    <lazy-component class="b13" v-if="false">
      <img data-aos="scaleIn" src="@/section/s1/14.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b14" v-if="false">
      <div v-if="!$isMobile()" class="t" data-aos="fade-up">
        預排文字預排文字預排文字預排文字<br />
        預排文字預排文字預排文字預排文字<br />
        預排文字預排文字預排文字預排文字<br />
        <span>預排文字預排文字</span>
      </div>
      <div v-else class="t" data-aos="fade-up">
        <span>預排文字預排文字</span>
        預排文字預排文字預排文字預排文字<br />
        預排文字預排文字預排文字預排文字<br />
        預排文字預排文字預排文字預排文字<br />

      </div>
      <video autoplay loop muted playsinline class="video-background ">
        <source src="https://h35.banner.tw/jmfl/13.mp4" type="video/mp4">
      </video>
    </lazy-component>
    <lazy-component class="b15">
      <div v-if="!$isMobile()" class="t" data-aos="fade-up">
        你我相遇，恰如大千山水的兩朵雲。<br />
        樹冠邂逅泳池，Urban Resort 的避世默契，<br />
        日光透漾樹海，所有懸念一一沈澱。<br />
        <span>放空，樹梢漂浮</span>
      </div>
      <div v-else class="t" data-aos="fade-up">
        <span>放空，樹梢漂浮</span>
        日光透漾樹海，所有懸念一一沈澱<br />
        樹冠邂逅泳池，Urban Resort的避世默契<br />
        你我相遇，恰如大千山水的兩朵雲
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
    padding-left: size(85);

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
    position: relative;
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

    .caption {
      position: absolute;
      left: 10px;
      bottom: 5px;
      color: #fff;
      z-index: 1;
      font-size: size(12);
    }

    img {
      width: size(1336);
    }
  }

  .b10 {
    margin-top: size(78);
    position: relative;

    .caption {
      position: absolute;
      left: 10px;
      bottom: 5px;
      color: #fff;
      z-index: 1;
      font-size: size(12);
    }

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

    video {
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
      font-size: size(24);
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
    width: 100%;
    position: relative;

    .title {
      margin-top: size-m(41);
      margin-left: size-m(30);
      gap: size-m(29);

      p {
        font-size: size-m(12);
      }

      img {
        width: size-m(149);
      }
    }

    .b1 {
      flex-direction: column;
      gap: size-m(40);
      margin-top: size-m(88);
      margin-right: 0;

      .t {
        writing-mode: horizontal-tb;
        font-size: size-m(14);
        line-height: size-m(25);
        padding-left: size-m(30);
      }

      img {
        width: 100%;
      }
    }

    .b2 {
      display: flex;
      align-items: center;
      margin-top: size-m(40);
      gap: size-m(28);

      .t {
        font-weight: 600;
        font-size: size-m(14);
        line-height: size-m(25);
      }

      img {
        width: size-m(156);
      }
    }

    .b3 {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: size(77);
      margin-top: -#{size-m(24)};

      .t {
        writing-mode: horizontal-tb;
        font-size: size-m(14);
        line-height: size-m(25);
        text-align: right;
      }

      img {
        width: size-m(170);
      }
    }

    .b4 {
      margin-top: size-m(40);

      img {
        width: size-m(313);
      }
    }

    .b5 {
      display: flex;
      justify-content: space-between;
      gap: unset;
      margin-top: size-m(40);

      &>img {
        width: size-m(138);
      }

      &>div {
        justify-content: space-between;
        gap: unset;

        &>img {
          width: size-m(231);
        }
      }
    }

    .b6 {
      margin-top: size-m(60);

      img {
        width: 100%;
      }
    }

    .b7 {
      margin-top: size-m(40);
      padding-left: size-m(31);

      img {
        width: size-m(154);
      }
    }

    .b8 {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      gap: size-m(40);
      margin-top: size-m(40);

      .t {
        writing-mode: horizontal-tb;
        font-size: size-m(14);
        line-height: size-m(25);
        text-align: right;
        margin-right: -#{size-m(120)};
      }

      .caption {
        position: absolute;
        left: 10px;
        bottom: 5px;
        color: #fff;
        z-index: 1;
        font-size: size-m(10);
      }

      img {
        width: 100%;
      }
    }

    .b9 {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      gap: size-m(40);
      margin-top: size-m(40);

      .t {
        writing-mode: horizontal-tb;
        font-size: size-m(14);
        line-height: size-m(25);
        text-align: left;
        margin-left: -#{size-m(140)};
      }

      .caption {
        position: absolute;
        left: 10px;
        bottom: 5px;
        color: #fff;
        z-index: 1;
        font-size: size-m(10);
      }

      img {
        width: 100%;
      }
    }

    .b10 {
      margin-top: size-m(40);


      .caption {
        font-size: size-m(10);
      }

      img {
        width: 100%;
      }
    }

    .b11 {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      gap: size-m(40);
      margin-top: size-m(40);

      .t {
        writing-mode: horizontal-tb;
        font-size: size-m(14);
        line-height: size-m(25);
        text-align: left;
        margin-left: -#{size-m(180)};
      }

      img {
        width: 100%;
      }
    }

    .b12 {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      gap: size-m(40);
      margin-top: size-m(40);

      .t {
        writing-mode: horizontal-tb;
        font-size: size-m(14);
        line-height: size-m(25);
        margin-right: -#{size-m(100)};
        text-align: right;

        span {
          font-size: size-m(18);
          display: block;
          margin-left: 0;
          margin-bottom: size-m(10);
          letter-spacing: size-m(2);
        }
      }

      video {
        width: 100%;
      }
    }

    .b13 {
      margin-top: size-m(40);
    }

    .b14 {
      position: relative;
      margin-top: size-m(40);
      display: flex;
      flex-direction: column;
      gap: size-m(40);

      .t {
        position: relative;
        right: 0;
        top: 0;
        z-index: 1;
        writing-mode: horizontal-tb;
        font-size: size-m(14);
        line-height: size-m(25);
        color: #000;
        letter-spacing: size-m(1);
        padding-left: size-m(30);

        span {
          font-size: size-m(18);
          display: block;
          margin-left: 0;
          margin-bottom: size-m(10);
          letter-spacing: size-m(2);
        }
      }

      video {
        width: 100%;
      }
    }

    .b15 {
      position: relative;
      margin-top: size-m(40);
      display: flex;
      flex-direction: column;
      gap: size-m(40);

      .t {
        position: relative;
        right: 0;
        top: 0;
        z-index: 1;
        writing-mode: horizontal-tb;
        font-size: size-m(14);
        line-height: size-m(25);
        color: #000;
        letter-spacing: size-m(1);
        padding-left: size-m(30);

        span {
          font-size: size-m(18);
          display: block;
          margin-left: 0;
          margin-bottom: size-m(10);
          letter-spacing: size-m(2);
        }
      }

    }

    .b16 {
      position: relative;
      margin-top: size-m(40);

    }
  }
}
</style>
<script setup>
import { ref } from 'vue';
</script>
