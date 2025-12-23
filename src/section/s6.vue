<template>
    <article class="s6">
        <!-- Swiper -->
          <Swiper class="slider" :modules="[Navigation, Pagination, Autoplay]" :pagination="{
            el: '.custom-pagination-container',
            clickable: true
          }" :loop="true" :autoplay="{ delay: 3000 }">
            <SwiperSlide>
              <img src="./s6/1.jpg" alt="bg" />
          <!--     <div class="caption">
                夏綠地公園 ｜ 實景拍攝
              </div> -->
            </SwiperSlide>
            <SwiperSlide>
              <img src="./s6/2.jpg" alt="bg" />
          <!--     <div class="caption">
                沙坑公園 ｜ 實景拍攝
              </div> -->
            </SwiperSlide>
            <SwiperSlide>
              <img src="./s6/3.jpg" alt="bg" />
           <!--     <div class="caption">
                新市政公園 ｜ 實景拍攝
              </div> -->
            </SwiperSlide>

            <!-- 分頁圓點放這裡 -->
            <div class="custom-pagination-container"></div>
          </Swiper>
        <div class="s6-main">
            <img src="./s6/enm.svg" class="en" data-aos="fade-left" data-aos-delay="500" v-if="isMobile">
            <img src="./s6/en.svg" class="en" data-aos="fade-left" data-aos-delay="500" v-else>
        </div>

    </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
    @apply relative overflow-hidden flex justify-center text-[#FFF];
    background: #144482;
    width: 100%;
    height: auto;
    //padding:7em 0 7em 0;
    font-size: size(32);
   // gap: 4.4em;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: flex-end;

    .s6bg {
        overflow: hidden;
        width: 100%;
        height: 100%;
       // padding-bottom: 32vw;
        position: absolute;

        .bg5 {
            width: 100%;
            height: 100%;
        }
    }


    .s6-main {
        position: absolute;
        bottom: size(120);
        right:size(50);
        .txt {
            text-align: justify
        }

        .en {
            width:40vw;
            z-index: 99;
            position: relative;
            margin-top: size(50)
        }
    }

    .s6-timg {
        @apply flex;
        flex-direction: column;
        width: size(735);
        height: auto;
        margin: .5em 0;
        text-align: center;
        justify-content: space-between;

        .t2 {
            width: size(735);
        }

        .t3 {
            width: size(588);
            margin: auto auto 0;
        }
    }
        .slider{
            height: auto;
            width: 100%;
         //  margin-top: sizem(150);
            height: size(1080);
            img{
                width: 100%;
            height: size(1080);
                object-fit: cover;
            }
        }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}

@media screen and (max-width: 767px) {

    .s6 {
        padding: 0 0;
        font-size: sizem(14);
        margin-bottom: 0em;
        gap: 0;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
        align-content: flex-end;
        justify-content: flex-end;


        .bg {
            overflow: hidden;
            width: 100%;
            position: absolute;
            height: auto;
            top: sizem(30);

            .bg1 {
                width: 100%;
            }
        }

        .main {
            width: auto;
            padding-right: sizem(30);
            padding-bottom: sizem(10);
            text-align: right;

            .txt {
                line-height: 2.3;
            }

        }
        .s6-main {
            position: relative;top: 0;left: 0;
            width: sizem(310);
            padding: sizem(20) sizem(20) sizem(40) 0 ;
            
            .en {
                width:100%;
            }
        }
        .slider{
            height: auto;
            width: 100%;
         //  margin-top: sizem(150);
            height: sizem(210);
            img{
                width: 100%;
                height: sizem(210);
                object-fit: cover;
            }
        }

    }
}
</style>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { computed, getCurrentInstance, ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const getImg = (path) => {
    if (!globals.$isMobile()) return new URL(`./${path}.jpg`, import.meta.url).href;
    return new URL(`./${path}_m.jpg`, import.meta.url).href
}

const splide = ref();

const currentSlideIndex = ref(0);

const moved = (newIdx, prevIdx, destIdx) => {
    currentSlideIndex.value = prevIdx
}

const options = {
    rewind: false,
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: 4000,
    gap: 0,
    type: 'loop'
}

const imgs = [
  {
    img: new URL("./s12/s12-1.png", import.meta.url).href,
    caption: "家具配置參考"
  },
  {
    img: new URL("./s12/s12-2.png", import.meta.url).href,
    caption: "實品屋實景拍攝"
  },
  {
    img: new URL("./s12/s12-3.png", import.meta.url).href,
    caption: "實品屋實景拍攝"
  },
  {
    img: new URL("./s12/s12-4.png", import.meta.url).href,
    caption: "實品屋實景拍攝"
  },
]
const currentImg = computed(() => imgs[currentSlideIndex.value]);
</script>
