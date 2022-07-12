<template>
  <div class="s7 relative bg-white z-10">
    <div class="t1">
      <img v-if="!$isMobile()" src="@/section/s7/title.svg" alt="" srcset="">
      <img v-else src="@/section/s7/title_m.svg" alt="" srcset="">
      <div data-aos="zoom-in" data-aos-delay="0">
        <div class="t2">開窗就是青翠風景 吐納呼吸</div>
        <div class="t3">永福公園首排、力行停車場公園、永盛公園、永豐公園<br v-if="!$isMobile()">
          近2公頃綠意擁簇純正公園宅， 極致收藏，都會的難能可貴！</div>
      </div>
    </div>

    <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in imgs"><img :data-swiper-parallax="img.parallax" :src="img.img">
          <div class="caption">{{ img.caption }}</div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <!-- <div class="swiper-pagination"></div> -->
    </div>

    <lazy-component>
      <div class="info" data-aos="zoom-in">
        <div class="t1">與綠共鳴<br v-if="$isMobile()"> 譜一曲城市中的建築旋律</div>
        <div class="t2">灰白棕沉穩簡約配色，結合石材、玻璃、金屬隔柵，化繁為簡，<br v-if="!$isMobile()">
          並注入當代時尚元素，跳脫周邊建築表情，詮釋鋒勳獨一無二的精品美學，唯您獨有。</div>
      </div>
      <img class="building" src="@/section/s7/building.png" alt="" srcset="">
      <img class="lighting" src="@/section/s7/lighting.png" alt="" srcset="">
      <img v-if="!$isMobile()" class="cloud-r" src="@/section/s7/cloud_r.png" alt="" srcset="">
      <img v-else class="cloud-r" src="@/section/s7/cloud-r_m.png" alt="" srcset="">
      <img class="cloud-l" src="@/section/s7/cloud_l.png" alt="" srcset="">
    </lazy-component>

    <div class="caption2"><span>3D</span>模擬電腦合成示意圖</div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s7 {
  width: 100%;
  height: size(2160);
  background: linear-gradient(180deg, rgba(203, 223, 203, 0.6) 50.52%, rgba(118, 199, 184, 0.6) 100%);
  padding: 0 size(217);
  padding-top: size(50);

  .caption2 {
    font-size: size(20);
    color: #231815;
    position: absolute;
    left: size(763);
    top: size(2111);
    letter-spacing: 0.07em;
  }

  .t1 {
    display: flex;
    align-items: center;

    img {
      width: size(431);
      margin-right: size(60);
    }

    .t2 {
      letter-spacing: 0.07em;
      color: #231815;
      font-size: size(40);
      font-weight: 700;
      margin-bottom: size(20);
      margin-top: size(30);
    }

    .t3 {
      color: #231815;
      font-size: size(20);
      font-weight: 400;
      line-height: 158%;
    }
  }

  .swiper {
    height: size(702);
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: size(702);
      top: 0;
      left: 0;
      z-index: 10;
      background-image: url('@/section/other.gif');
      background-size: auto 100%;
      background-position: left;
      background-repeat: no-repeat;
      mix-blend-mode: screen;
      pointer-events: none;
    }

    .swiper-slide {
      width: 80%;
      text-align: center;
      font-size: 18px;
      background: #fff;
      overflow: hidden;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      position: relative;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:nth-child(2n) {
        width: 60%;
      }

      &:nth-child(3n) {
        width: 40%;
      }

      .caption {
        position: absolute;
        left: size(20);
        bottom: size(10);
        font-size: size(20);
        color: #fff;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));

      }
    }


  }

  .info {
    position: absolute;
    top: size(1220);
    width: size(977.76);
    height: size(296.06);
    background-color: #fff;
    padding-left: size(100);
    padding-top: size(85);
    margin-left: -#{size(50)};
    z-index: 5;
    color: #231815;

    .t1 {
      font-size: size(40);
      font-weight: 700;
      letter-spacing: 0.07em;
    }

    .t2 {
      font-size: size(20);
      font-weight: 400;
      line-height: 158%;
    }
  }

  .building {
    position: absolute;
    width: size(1047);
    right: 0;
    bottom: 0;
    z-index: 5;
  }

  .lighting {
    position: absolute;
    width: size(834);
    right: size(230);
    bottom: size(400);
    z-index: 4;
    animation: shine .7s alternate-reverse infinite ease-in-out;

    @keyframes shine {
      from {
        opacity: 0.1;
      }

      to {
        opacity: 1;
      }
    }
  }

  .cloud-r {
    position: absolute;
    width: size(1204.64);
    right: -#{size(83)};
    bottom: size(384);
    z-index: 1;
    animation: float 5s alternate-reverse infinite ease-in-out;

  }

  .cloud-l {
    position: absolute;
    width: size(712.51);
    left: -#{size(20)};
    bottom: size(190);
    z-index: 1;
    animation: float2 5s alternate-reverse infinite ease-in-out;
  }

  @keyframes float {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(10%);
    }
  }

  @keyframes float2 {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(-10%);
    }
  }
}


@media screen and (max-width:768px) {

  .s7 {
    width: 100%;
    height: size-m(1334);
    background: linear-gradient(180deg, rgba(203, 223, 203, 0.6) 50.52%, rgba(118, 199, 184, 0.6) 100%);
    padding: 0;
    padding-top: 0;

    .caption2 {
      font-size: size-m(12);
      left: size-m(280);
      top: unset;
      bottom: size-m(170);
      writing-mode: vertical-rl;
      letter-spacing: 0.25em;
      line-height: 15px;
      text-align: center;

      span {
        writing-mode: horizontal-tb;
        letter-spacing: 0.07em;
        margin-bottom: size-m(2);
      }
    }


    .t1 {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      img {
        width: size-m(214);
        margin-right: 0;
        margin-left: size-m(15);
      }

      .t2 {
        margin-left: size-m(30);
        font-size: size-m(20);
        margin-bottom: size-m(20);
        margin-top: -#{size-m(30)};
      }

      .t3 {
        font-size: size-m(14);
        margin-left: size-m(30);
        max-width: size-m(309);
      }
    }

    .swiper {
      height: size-m(403);
      width: 100%;
      margin-top: size-m(35);

      &::after {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        .caption {
          left: size-m(20);
          bottom: size-m(10);
          font-size: size-m(12);
          filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
        }
      }
    }

    .info {
      position: absolute;
      top: size-m(685);
      width: 90%;
      height: auto;
      background-color: transparent;
      padding-left: size(100);
      padding-top: size(85);
      margin-left: size-m(15);
      z-index: 5;
      color: #231815;

      .t1 {
        font-size: size-m(20);
        margin-bottom: size-m(20);
      }

      .t2 {
        font-size: size-m(14);
      }
    }

    .building {
      position: absolute;
      width: size-m(504);
      right: unset;
      left: -#{size-m(96)};
      bottom: 0;
      z-index: 5;
      max-width: unset;
    }

    .lighting {
      position: absolute;
      width: size-m(322);
      right: unset;
      left: size-m(-62);
      bottom: size-m(220);
      animation: shine .7s alternate-reverse infinite ease-in-out;

      @keyframes shine {
        from {
          opacity: 0.1;
        }

        to {
          opacity: 1;
        }
      }
    }

    .cloud-r {
      position: absolute;
      width: size-m(375);
      right: unset;
      bottom: size-m(384);
      left: 0;
      z-index: 1;
      animation: unset;

    }

    .cloud-l {
      display: none;
    }

    @keyframes float {
      from {
        transform: translateX(0%);
      }

      to {
        transform: translateX(10%);
      }
    }

    @keyframes float2 {
      from {
        transform: translateX(0%);
      }

      to {
        transform: translateX(-10%);
      }
    }
  }
}
</style>

<script setup>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


import { ref, getCurrentInstance, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties;
const imgs = ref([
  {
    img: globals.$isMobile() ? new URL("../section/s7/6_m.jpg", import.meta.url).href : new URL("../section/s7/6.jpg", import.meta.url).href,
    caption: '力行停車場公園實景圖',
    parallax: 200
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/1_m.jpg", import.meta.url).href : new URL("../section/s7/1.jpg", import.meta.url).href,
    caption: '永豐公園實景圖',
    parallax: 350
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/2_m.jpg", import.meta.url).href : new URL("../section/s7/2.jpg", import.meta.url).href,
    caption: '永盛公園實景圖',
    parallax: 250
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/3_m.jpg", import.meta.url).href : new URL("../section/s7/3.jpg", import.meta.url).href,
    caption: '力行停車場公園實景圖',
    parallax: 40
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/4_m.jpg", import.meta.url).href : new URL("../section/s7/4.jpg", import.meta.url).href,
    caption: '永福公園實景圖',
    parallax: 200
  },
  {
    img: globals.$isMobile() ? new URL("../section/s7/5_m.jpg", import.meta.url).href : new URL("../section/s7/5.jpg", import.meta.url).href,
    caption: '永福公園實景圖',
    parallax: 100
  },
  
])

onMounted(() => {
  new Swiper(".swiper", {
    slidesPerView: globals.$isMobile() ? 1 : 1.4,
    spaceBetween: 15,
    parallax: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
})
</script>
