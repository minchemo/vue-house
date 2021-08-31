<template>
  <div class="section5">
    <div class="bg" v-if="!isMobile">
      <p>3D模擬示意圖</p>
      <img src='~@/projects/llcs/s5/bg1.jpg' alt="外觀日景">
      <img src='~@/projects/llcs/s5/bg2.jpg' alt="外觀夜景">
    </div>
      <div  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0"   class="banner"> 
<div class="title">精品建築<br>質感落款</div>
<div class="subtitle">新古典建築風格<br>國際飛簷榮耀加冕</div>
<div class="desc">新重劃區，總需要一座經典建築，立定城市的不凡身價。「朗朗城心」以「現代新古典」語彙為塭仔圳落款，輕奢且具時尚感的樣貌、國際豪宅級的飛簷設計，讓城市居民傾羨仰望，為新世代經典建築榮耀加冕。</div>
      </div>
      <img v-if="isMobile" class="building" src="~@/projects/llcs/s5/bg_mo1.jpg" alt="" srcset="">
    <div class="bg" v-if="isMobile"><p>3D模擬示意圖</p>
      <img class="building" src='~@/projects/llcs/s5/bg_mo1.jpg' alt="外觀日景">
      <img class="building" src='~@/projects/llcs/s5/bg_mo2.jpg' alt="外觀夜景">
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section5 {
    position: relative;
    height: 0;
    padding-bottom: 47.50%;
    .bg{width: 100%;height: 100%;position: absolute;bottom: 0;left: 0;
    img{width: 100%;height: 100%;position: relative;bottom: 0;left: 0;object-fit: cover;
    &:last-child{position: absolute;animation: round 10s linear infinite;opacity: 0;}
    }
    p{position: absolute;bottom: 0.5vw;right: 38.5vw;color: #FFF;z-index: 3;font-size: calc(1500vw / 1920);}
    }


@-webkit-keyframes round {
  10% {
  opacity: 1;
  }
  40% {
  opacity: 1;
  }
  50% {
  opacity: 0;
  }

}
    .building {
        width: 100%;
        visibility: hidden;
    }

    .banner {
        width: 28vw;
        height: 100%;
        position: absolute;
        right: 10vw;
        background-image: url('~@/projects/llcs/s5/banner_bg.jpg');
        background-size:cover;
        background-position: right;
        padding: 2vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color:#FFF;
        line-height: 1.6;
        text-align: justify;
        font-size: calc(2000vw / 1920);

      .title {
        font-size: calc(5500vw / 1920);
        font-family: "Noto Serif TC";
        color:#FFF000;
        font-weight: bold;
        text-align: left;
        line-height: 1.3;
        &::after{content:"";
        margin: .45em 0 .5em 0;
        width: 8.5em;height: 3px; background: #FFF;display: block;}
      }
      .subtitle {
        font-size:1.9em;
        font-weight: 400;
      }
      .desc {
        margin: 1em 0  1em 0;
        font-weight: 300;
        width: 100%;
      }
        .content {
            width: 100%;

        }
    }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
.section5 {
    position: relative;
    height: auto;
    padding-bottom: 0;
    background-image: unset;
    .bg{height:auto;
    img{height:auto;}
    p{bottom: 0.5em;right: 0.5em;font-size: calc(1200vw / 375);}}

    .building {
        width: 100%;
        visibility: visible;
        vertical-align: bottom;
    }

    .banner {
        width: 100%;
        height: auto;
        position: relative;
        right: 0;
        background-image: url('~@/projects/llcs/s5/banner_bg_mo.jpg');
        background-size:cover;
        background-position: right;
        padding: 10vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: calc(1500vw / 375);

        .title {
        font-size: calc(3500vw / 375);
        margin: .45em 0 .3em 0;
        }
      .subtitle {  font-size:1.7em;
      }
      .desc{
            width: 100%;
      }
        .content {
            width: 100%;

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
import { isMobile } from '@/utils'

export default {
  name: 'section5',

  data() {
    return {
      isMobile
    }
  },

  methods: {},

  created() {},
}
</script>
