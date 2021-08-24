<template>
  <div class="section5">
      <div  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"   class="banner">
          <img v-if="!isMobile" class="title" src="~@/projects/llcs/s5/b_title.svg" alt="" srcset="">
          <img v-else class="title" src="~@/projects/llcs/s5/b_title_mo.svg" alt="" srcset="">

          <img v-if="!isMobile" class="content" src="~@/projects/llcs/s5/b_content.svg" alt="" srcset="">
          <img v-else class="content" src="~@/projects/llcs/s5/b_content_mo.svg" alt="" srcset="">
      </div>
      <img v-if="!isMobile" class="building" src="~@/projects/llcs/s5/bg.jpg" alt="" srcset="">
      <img v-else class="building" src="~@/projects/llcs/s5/bg_mo.jpg" alt="" srcset="">
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section5 {
    position: relative;
    height: 0;
    padding-bottom: 47.10%;
    background-size: cover;
    background-image: url('~@/projects/llcs/s5/bg.jpg');

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

        .title {
            width: 100%;
            margin-bottom: 4vh;
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

        .title {
            width: 80%;
            margin-bottom: 2vh;
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
