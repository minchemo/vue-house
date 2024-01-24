<template>
    <article class="order-intro">
        <div class="txt">
            <div class="t1" data-aos="fade-up" data-aos-delay="0">
                百年車站 興未來<br>
                重劃願景 綻光芒</div>
            <div class="t2" data-aos="fade-up" data-aos-delay="200">
                新站特區 ｜ 2-4房
            </div>
            <div class="t3" data-aos="fade-up" data-aos-delay="400">
                基地位置：<span>台中市沙鹿區青年路、永寧路口</span><br />
                預約專線：<span>(04)2665-5577</span>
            </div>
        </div>

    </article>
</template>
  
<style lang="scss" scoped>  @import '@/assets/style/function.scss';

  .order-intro {
      @apply relative w-full h-screen;
      min-height: size(800);
      max-height: size(1080);
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: size(40);
      color: #FFF;
      line-height: 1.3;
      font-weight: 700;

      .boy {
          @apply select-none;
          position: absolute;
          width: size(120);
          top: size(505);
          left: size(428);
      }

      .txt {
          padding-top: size(120);
          padding-left: size(450);
          @apply flex flex-col;

          .t1 {
              color: white;
              font-size: size(80);
              font-weight: 900;
              line-height: size(103)
          }

          .t2 {
              color: #FCEE21;
              font-size: size(48);
              font-weight: 500;
              border-top: 3px solid #FCEE21;
              border-bottom: 3px solid #FCEE21;
              margin: size(15) 0;
              padding: size(5) 0;
          }

          .t3 {
              font-size: size(24);
              font-weight: 700;
              letter-spacing: size(0.36);

              span {
                  font-size: size(32);
              }
          }
      }

      .star {
          @apply select-none;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;

          >div {
              position: absolute;

              img {
                  width: 100%;
              }
          }

          .star01 {
              width: size(395);
              top: -16%;
              left: 73%;

              img {
                  opacity: 0.1;
                  transform: rotate(-20deg);
                  filter: saturate(50%)brightness(1.1);
              }
          }

          .star02 {
              width: size(556);
              top: -5%;
              left: 25%;

              img {
                  opacity: 0.1;
                  transform: rotate(143deg);
                  filter: saturate(50%)brightness(1.1);
              }
          }

          .star03 {
              width: size(360);
              top: -15%;
              left: 83%;

              img {
                  opacity: 0.1;
                  transform: rotate(-20deg);
                  filter: saturate(50%)brightness(1.1);
              }
          }

          .star04 {
              width: size(556);
              top: 39%;
              left: 0%;

              img {
                  opacity: 0.1;
                  transform: rotate(141deg);
                  filter: saturate(50%)brightness(1.1);
              }
          }

          .star05 {
              width: size(484);
              top: 24%;
              left: 14.5%;

              img {
                  opacity: 0.3;
                  transform: rotate(135deg);
              }
          }

          .star06 {
              width: size(268);
              top: 2%;
              left: 33%;

              img {
                  opacity: 0.3;
                  transform: rotate(-130deg);
              }
          }

          .star07 {
              width: size(147);
              top: -2%;
              left: 63.5%;

              img {
                  opacity: 0.3;
                  transform: rotate(30deg);
              }
          }

          .star08 {
              width: size(308);
              top: 9%;
              left: 80.5%;

              img {
                  opacity: 0.3;
                  transform: rotate(-19deg);
              }
          }

          .star09 {
              width: size(566);
              top: 57%;
              left: 4%;

              img {
                  opacity: 0.3;
                  transform: rotate(132deg);
              }
          }

          .star10 {
              width: size(137);
              top: 8.5%;
              left: 29%;

              img {
                  opacity: 0.3;
                  transform: rotate(0deg);
                  filter: saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
              }
          }

          .star11 {
              width: size(137);
              top: 0%;
              left: 51.5%;

              img {
                  opacity: 0.3;
                  transform: rotate(0deg);
                  filter: saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
              }
          }

          .star12 {
              width: size(137);
              top: 14%;
              left: 76%;

              img {
                  opacity: 0.52;
                  transform: rotate(-15deg);
                  filter: saturate(400%) brightness(0.46) hue-rotate(-76deg)contrast(130%);
              }
          }
      }

  }


  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

  @media screen and (max-width: 767px) {

      .order-intro {
          @apply justify-start;
          height: calc(100vh - 63px);
          min-height: sizem(560);
          max-height: sizem(570);
          font-size: sizem(14);

          .txt {
              padding-top: 0;
              padding-left: 0;
              @apply flex flex-col relative z-10;

              .t1 {
                  font-size: sizem(33);
                  line-height: sizem(42.5)
              }

              .t2 {
                  font-size: sizem(25);
                  margin: sizem(15) 0;
                  padding: sizem(5) 0;
                  width: sizem(230);
                  @apply mx-auto;
              }

              .t3 {
                  font-size: sizem(13);
                  font-weight: 700;
                  letter-spacing: sizem(0.36);

                  span {
                      font-size: sizem(15);
                  }
              }
          }

          .boy {
              top: sizem(330);
              left: 39%;
              width: sizem(70);
          }

          .star {
              .star01 {
                  width: sizem(118);
                  top: -1%;
                  left: 57%;
              }

              .star02 {
                  width: sizem(162);
                  top: 19%;
                  left: -4%;

                  img {
                      transform: rotate(121deg);
                  }
              }

              .star03 {
                  width: sizem(108);
                  top: 0%;
                  left: 73%;
              }

              .star04 {
                  width: sizem(167);
                  top: 62%;
                  left: 18%;

                  img {
                      transform: rotate(152deg);
                  }
              }

              .star05 {
                  width: sizem(149);
                  top: 55%;
                  left: 1%;

                  img {
                      transform: rotate(162deg);
                  }
              }

              .star06 {
                  width: sizem(86);
                  top: 22%;
                  left: 0%;

                  img {
                      transform: rotate(34deg);
                  }
              }

              .star07 {
                  width: sizem(43);
                  top: 6%;
                  left: 33%;
              }

              .star08 {
                  width: sizem(91);
                  top: 10%;
                  left: 69.5%;
              }

              .star09 {
                  width: sizem(178);
                  top: 69%;
                  left: 10%;

                  img {
                      transform: rotate(164deg);
                  }
              }

              .star10 {
                  width: sizem(43);
                  top: 23%;
                  left: 15%;

                  img {
                      transform: rotate(-107deg);
                  }
              }

              .star11 {
                  width: sizem(43);
                  top: 14%;
                  left: 23%;

                  img {
                      transform: rotate(-68deg);
                  }
              }

              .star12 {
                  width: sizem(45);
                  top: 12%;
                  left: 62%;
              }

          }
      }
  }
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

</script>