<template>
  <div class="s1">
    <div class="title" data-aos="fade-up">
      <img src="@/section/s1/logo.svg" alt="吉美富徠" srcset="">
      <p><span>吉美富徠</span>｜瑞安街最高名宅｜73-150坪｜577坪 大局致大安</p>
    </div>

    <lazy-component class="b0 top_img">
    <img data-aos="fade-in" class="top-img-absolute-text" v-if="!$isMobile()" src="@/section/s1/pc_top.svg" alt="吉美富徠" srcset=""> 
    <img data-aos="fade-in" v-if="!$isMobile()" src="@/section/s1/pc_top.webp" alt="吉美富徠" srcset=""> 
    <img data-aos="fade-in" class="top-img-absolute-text" v-if="$isMobile()" src="@/section/s1/m_top.svg" alt="吉美富徠" srcset=""> 
    <img v-if="$isMobile()" src="@/section/s1/m_top.webp" alt="吉美富徠" srcset=""> 
    </lazy-component>

    <lazy-component class="b1">
      <div class="t" data-aos="fade-up" v-if="!$isMobile()">
        絕版難再<br>
        ５５７坪稀世美地<br>
        四季心有靈犀<br>
        緣定瑞安公園開窗零距 
      </div>
      <div class="t" data-aos="fade-up" v-else>
        緣定瑞安公園開窗零距<br>
        四季心有靈犀<br>
        557坪稀世美地<br>
        絕版難再
      </div>
      <img data-aos="fade-in" src="@/section/s1/01.jpg" alt="吉美富徠" srcset="">

    </lazy-component>
    <lazy-component class="b2">
      <img data-aos="fade-in" src="@/section/s1/02.jpg" alt="吉美富徠" srcset="">
      <div class="t" data-aos="fade-up" v-if="$isMobile()">
        把生活過得像首詩<br />
        驀然回首，卻在靜巷森隱處
      </div>
    </lazy-component>
    <lazy-component class="b3">
      <div class="t" data-aos="fade-up" v-if="!$isMobile()">
        城心知遇，定向長遠價值<br />
        瑞安、和平<br />
        驀然回首，卻在靜巷森隱處<br />
        把生活過得像首詩
      </div>
      <div class="t" data-aos="fade-up" v-else>
        瑞安、和平<br />
        城心知遇，定向長遠價值
      </div>
      <img data-aos="fade-in" src="@/section/s1/03.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b4">
      <img data-aos="fade-in" src="@/section/s1/04.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b5">
      <img data-aos="fade-in" src="@/section/s1/05.jpg" alt="吉美富徠" srcset="">
      <div>
        <img data-aos="fade-in" src="@/section/s1/06.jpg" alt="吉美富徠" srcset="">
        <img data-aos="fade-in" src="@/section/s1/07.jpg" alt="吉美富徠" srcset="">
      </div>
    </lazy-component>
    <lazy-component class="b6">
      <img v-if="!$isMobile()" data-aos="fade-in" src="@/section/s1/08.jpg" alt="吉美富徠" srcset="">
      <img v-else data-aos="fade-in" src="@/section/s1/08_m.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b7">
      <img data-aos="fade-up" src="@/section/s1/mansion.svg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b8">
      <div v-if="!$isMobile()" class="t" data-aos="fade-up">
        珍稀地塊之上築藝精湛<br />
        市中心住得純粹
      </div>
      <div v-else class="t" data-aos="fade-up">
        市中心住得純粹<br />
        珍稀地塊之上築藝精湛
      </div>
      <div class="caption" >建築模型環境合成示意圖</div>
      <img data-aos="fade-in" src="@/section/s1/09.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b9">
      <div v-if="!$isMobile()" class="t" data-aos="fade-up">
        成為一代臻品名築的建築藏家<br />
        世代傳承<br />
        稀有極致規格
      </div>
      <div v-else class="t" data-aos="fade-up">
        稀有極致規格<br />
        世代傳承<br />
        成為一代臻品名築的建築藏家
      </div>
      <div class="caption-2">建築模型環境合成示意圖</div>
      <div class="caption">建築模型環境合成示意圖</div>
      <img data-aos="fade-in" src="@/section/s1/10.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b10">
      <div class="caption">建築模型環境合成示意圖</div>
      <img data-aos="fade-in" src="@/section/s1/11.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b11" v-if="false">
      <div class="t" data-aos="fade-up">
        預排文字預排文字<br />
        預排文字預排文字<br />
        預排文字預排文字<br />
        預排文字預排文字
      </div>
      <img data-aos="fade-in" src="@/section/s1/12.jpg" alt="吉美富徠" srcset="">
    </lazy-component>
    <lazy-component class="b12">
      <div v-if="!$isMobile()" class="t" data-aos="fade-up">
        心有知音、世界為您安靜<br />
        鍾情一窗維瓦第、四季演色<br />
        伴隨一段德布西、開窗樹海輕舞<br />
        <span>心靜，開窗聽海</span>
      </div>
      <div v-else class="t" data-aos="fade-up">
        <span>心靜，開窗聽海</span>
        伴隨一段德布西、開窗樹海輕舞<br />
        鍾情一窗維瓦第、四季演色<br />
        心有知音、世界為您安靜<br />
      </div>
      <video loading="lazy" autoplay loop muted playsinline class="video-background ">
        <source src="https://h35.banner.tw/jmfl/12.mp4" type="video/mp4">
      </video>
      <!-- <img data-aos="fade-in" src="@/section/s1/13.jpg" alt="吉美富徠" srcset=""> -->
    </lazy-component>
    <lazy-component class="b13" v-if="false">
      <img data-aos="fade-in" src="@/section/s1/14.jpg" alt="吉美富徠" srcset="">
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
      <video loading="lazy" autoplay loop muted playsinline class="video-background ">
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
      <video loading="lazy" autoplay loop muted playsinline class="video-background ">
        <source src="https://h35.banner.tw/jmfl/13.mp4" type="video/mp4">
      </video>
    </lazy-component>
    <!--lazy-component class="b16">
      <video loading="lazy" autoplay loop muted playsinline class="video-background ">
        <source src="https://h35.banner.tw/jmfl/14.mp4" type="video/mp4">
      </video>
    </lazy-component-->
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  width: 100%;
  position: relative;

  .top-img-absolute-text{
      position: absolute;
      z-index: 2;
    }

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

  .b0{
    display: flex;
    justify-content: center;
    margin-top: size(179);
  }
  .top_img{
    img{max-width: 89.5%;}
    
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
    position: relative;
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

    .caption {
      position: absolute;
      right: size(970);
      bottom: size(10);
      color: #fff;
      z-index: 1;
      font-size: size(12);
      
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

    .caption{
      position: absolute;
      left: size(10);
      bottom: size(5);
      color: #fff;
      z-index: 1;
      font-size: size(12);

    }
    .caption-2{
      position: absolute;
      left: size(10);
      bottom: size(450);
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

    .top-img-absolute-text{
      position: absolute;
      z-index: 2;
    }


    .title {
      margin-top: size-m(41);
      margin-left: size-m(20);
      gap: size-m(29);

      p {
        font-size: size-m(13);
      }

      img {
        width: size-m(149);
      }
    }

    .b0 {
      margin-top: size-m(80);
    }
    .top_img{
    img{max-width: 100%;}
    
  }

    .b1 {
      flex-direction: column;
      gap: size-m(40);
      margin-top: size-m(50);
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
        left: size-m(10);
        bottom: size-m(5);
        color: #fff;
        z-index: 1;
        font-size: size-m(10);
        width: 100%;
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
        left: size-m(10);
        bottom: size-m(5);
        color: #fff;
        z-index: 1;
        font-size: size-m(10);
      }
      .caption-2 {
        position: absolute;
        left: size-m(10);
        bottom: size-m(130);
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
