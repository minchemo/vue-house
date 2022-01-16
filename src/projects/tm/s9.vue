<template>
  <div class="s9">
    <div class="text">
      <div class="t1">735坪基地 一砌呵成</div>
      <div class="t2">一庭 一台 一院 自然與人的合一</div>
      <div class="t3">
        力麒天沐，是李天鐸大師睽違天母已久的最新力作，<br />
        從建築、大廳公設、庭院景觀，渾然一體，得心應手。<br />
        透過大器內斂的設計理念，將天母山水、精緻人文融入建築，<br />
        溫柔的營造磺溪畔生活的謐境。
      </div>
      <div class="swipe-box">
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="(img, i) in imgs"
            :key="i"
            v-bind:style="{
              backgroundImage: `url('${img}')`,
            }"
          >
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="img-box"></div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s9 {
  width: size(1920);
  height: size(900);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("~@/projects/tm/s9/bg.jpg");
  background-size: cover;
  .text {
    text-align: left;
    width: size(1125);
    margin: 0 auto;
    .t1 {
      color: #fff;
      font-size: size(70);
      font-weight: 500;
      margin-bottom: size(15);
    }
    .t2 {
      color: #b4904f;
      font-size: size(38);
      font-weight: 500;
      margin-bottom: size(30);
    }
    .t3 {
      color: #fff;
      font-size: size(18);
      line-height: 2.5;
    }
    .swipe-box {
      height: size(220);
      width: 100%;
      .swiper-container {
        padding: 0 size(70);
        .swiper-slide {
          width: size(320);
          height: size(220);
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: all 0.5s;

          &.swiper-slide-next {
            opacity: 1;
          }

          &.swiper-slide-active {
            opacity: 1;
          }

          &.swiper-slide-prev {
            opacity: 1;
          }
        }
        .swiper-button-prev {
          color: #fff;
          left: 0;
        }

        .swiper-button-next {
          color: #fff;
        }
      }
    }
  }
  .img-box {
    width: size(640);
    height: size(900);
    background: red;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
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
  name: "s9",
  data() {
    return {
      isMobile,
      swiperOptions: {
        resistance: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        navigation: {
          prevEl: ".s9 .swipe-box .swiper-button-prev",
          nextEl: ".s9 .swipe-box .swiper-button-next",
        },
        loop: true,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false,
        // },
        centeredSlides: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }
      },
      imgs: [
        require('@/projects/tm/s9/1.jpg'),
        require('@/projects/tm/s9/1.jpg'),
        require('@/projects/tm/s9/1.jpg'),
        require('@/projects/tm/s9/1.jpg'),
        require('@/projects/tm/s9/1.jpg'),
        require('@/projects/tm/s9/1.jpg'),
      ]
    };
  },
};
</script>

