<template>
  <div class="s4">
    <div class="content">
      <div v-if="!isMobile" class="img-box" data-aos="fade">
        <div class="img1" data-aos="fade">
          <div class="caption">使館特區</div>
        </div>
        <div class="img2" data-aos="fade" data-aos-delay="400">
          <div class="caption">磺溪河畔</div>
        </div>
      </div>

      <div v-else class="swipe-box" data-aos="fade">
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="(img, i) in imgs"
            :key="i"
            v-bind:style="{
              backgroundImage: `url('${img.url}')`,
            }"
          >
            <div class="caption">{{ img.caption }}</div>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>

      <div class="title">
        <div class="t1" data-aos="fade">天母核心、名流薈萃</div>
        <div class="info">
          <div class="t2" data-aos="fade-up">使館特區生活圈</div>
          <div
            class="t3"
            v-if="!isMobile"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            這裡散步走著就會和公園相遇，一抬頭就是開闊無比的大山天際線<br />
            這裡沿著磺溪畔堤道就能觸摸春櫻、夏綠、秋楓、冬雲的季節溫度<br />
            這裡是最多元的國際村，日僑學校、美國學校、歐洲學校、使館特區<br />
            這裡的萬聖節慶是全台北最熱鬧的街區<br />
            這裡匯聚最多異國美食，米其林一星新蓬萊台菜、日本料亭蓮波葉…更是老饕最愛<br />
            這裡有台北榮總和振興醫院做好鄰居，齊聚台灣各科醫療權威，細心呵護您的健康
          </div>
          <div class="t3" v-else data-aos="fade-up" data-aos-delay="400">
            這裡散步走著就會和公園相遇，一抬頭就是開闊無比的大山天際線﹐這裡沿著磺溪畔堤道就能觸摸春櫻、夏綠、秋楓、冬雲的季節溫度﹐這裡是最多元的國際村﹐日僑學校、美國學校、歐洲學校、使館特區﹐這裡的萬聖節慶是全台北最熱鬧的街區﹐這裡匯聚最多異國美食，米其林一星新蓬萊台菜、日本料亭蓮波葉…更是老饕最愛﹐這裡有台北榮總和振興醫院做好鄰居，齊聚台灣各科醫療權威﹐細心呵護您的健康
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s4 {
  width: 100%;
  height: size(900);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("~@/projects/tm/s4/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  .content {
    display: flex;
    align-items: start;
    .img-box {
      width: size(894);
      height: size(606.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: size(50);
      .img1 {
        position: relative;
        width: size(404.69);
        height: 100%;
        background-image: url("~@/projects/tm/s4/1.jpg");
        background-size: cover;
        .caption {
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-size: size(18);
          color: #fff;
        }
      }
      .img2 {
        position: relative;
        width: size(453);
        height: 100%;
        background-image: url("~@/projects/tm/s4/2.jpg");
        background-size: cover;
        .caption {
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-size: size(18);
        }
      }
    }
    .title {
      text-align: left;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: size(606.8);
      .t1 {
        font-size: size(71);
        color: #c3a672;
        border: 1px solid #c3a672;
        padding: size(30) size(45);
      }
      .t2 {
        font-size: size(40);
        margin-bottom: size(40);
        padding-left: size(45);
      }
      .t3 {
        font-size: size(18);
        padding-left: size(45);
        line-height: 2.5;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s4 {
    height: size-m(717);
    background-image: url("~@/projects/tm/s4/bg_m.jpg");
    background-size: contain;
    background-position: top;
    .content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column-reverse;
      padding-top: size-m(50);

      .swipe-box {
        width: size-m(314);
        height: size(320);
        margin-top: size-m(10);
        .swiper-slide {
          width: size-m(314);
          height: size-m(320);
          background-size: cover;
          background-position: center;

          .caption {
            position: absolute;
            right: size-m(10);
            bottom: size-m(10);
            font-size: size-m(12);
            color: #fff;
          }
        }
        .swiper-button-prev {
          color: #fff;
          transform: scale(0.6);
        }

        .swiper-button-next {
          color: #fff;
          transform: scale(0.6);
        }
      }
      .title {
        text-align: center;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: auto;
        .t1 {
          font-size: size-m(25);
          padding: size-m(10) 0;
          width: size-m(245);
        }
        .t2 {
          font-size: size-m(20);
          margin: size-m(15) 0;
          padding-left: 0;
        }
        .t3 {
          font-size: size-m(12);
          padding-left: 0;
          line-height: 2;
          text-align: left;
          width: size-m(314);
        }
      }
    }
  }
}

// 避免內容電腦過渡平板時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1199.98px) {
}

// 避免過度到 1280 x 720 時，設計未考量的調整
@media only screen and (min-width: 1025px) and (max-width: 1280px) {
}
</style>

<script>
// @ is an alias to /src
import { isMobile } from "@/utils";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  name: "s4",
  data() {
    return {
      isMobile,
      swiperOptions: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 50,
        navigation: {
          prevEl: ".s4 .swipe-box .swiper-button-prev",
          nextEl: ".s4 .swipe-box .swiper-button-next",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      currentImgIndex: 0,
      imgs: [
        {
          url: require("@/projects/tm/s4/1_m.jpg"),
          caption: "使館特區",
        },
        {
          url: require("@/projects/tm/s4/2_m.jpg"),
          caption: "磺溪河畔",
        },
      ],
    };
  },
};
</script>

