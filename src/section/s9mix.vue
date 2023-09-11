<template>
    <article class="s9mix">
        <div class="box">
            <div class="img" data-aos="fade-up" data-aos-delay="600">
                <img src="@/section/s9mix/img1.png" class="img1" alt="" />
                <div class="img2" data-aos="fade-up" data-aos-delay="600">
                    <img src="@/section/s9mix/img20.png" alt="" />
                    <img src="@/section/s9mix/img21.png" alt="" />
                    <img src="@/section/s9mix/img22.png" alt="" />
                </div>
            </div>
        </div>
    </article>
</template>
  
<style lang="scss" scoped>
  @import '@/assets/style/function.scss';
  
  .s9mix {
    @apply relative;
    .box{
        position: relative;
    width:100%;//644
    display: flex;
      flex-direction:column;
    align-items: center;
    justify-content:center;

  .img{position: relative;margin-bottom: -2.5em;
  .img1{position: absolute;top: 0;left: 0;
       animation: an_s 1.5s linear infinite ;}
  .img2{position: relative;width: 100%;
    img{position: relative;width: 100%;
      &:nth-child(2){position: absolute;
      top: 13.8%;
      left: 24.4%;
      width: 8.2%;
      transform-origin: 80% 90%;
       transform:rotate(10deg);
       animation: an1 1.5s ease-in-out infinite alternate;}
      &:nth-child(3){position: absolute;
      top: 15.85%;
      left: 65.7%;
      width: 8.2%;
      transform-origin: 10% 90%;
       transform:rotate(-10deg);
       animation: an1 1.5s ease-in-out infinite alternate;}
    }
  }
  }
  @keyframes an_s {
    0%{
       transform:scale(.5)translateY(0%);
       opacity: 0;
      }
    50%{
       transform:scale(.95)translateY(-30%);
       opacity: 1;
      }
    100%{
       transform:scale(1.5)translateY(-40%);
       opacity: 0;
      }
  }
  @keyframes an1 {
    to{
       transform:rotate(0deg);
      }
  }
    }
  }
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  
  // @media screen and (max-width: 767px) { 平常我們手機的設定
  
  @media screen and (max-width: 767px) {
    .s9mix {    
  .box{
    width:sizem(340);
    }
  
  }
  }
  </style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>