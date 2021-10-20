<template>
  <div class="section2">
    <div class="main">
      <div class="content-box">
        <img loading="lazy"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          class="logo"
          v-if="!isMobile"
          src="~@/projects/dnls/s2/logo.png"
          :alt="info.caseName"
          srcset=""
        />
        <img loading="lazy"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          class="logo"
          v-else
          src="~@/projects/dnls/s2/logo_mo.png"
          :alt="info.caseName"
          srcset=""
        />
        <img loading="lazy"
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          class="title"
          v-if="!isMobile"
          src="~@/projects/dnls/s2/title.png"
          :alt="info.caseName"
          srcset=""
        />
        <img loading="lazy"
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          class="title"
          v-else
          src="~@/projects/dnls/s2/title_mo.png"
          :alt="info.caseName"
          srcset=""
        />
        <img loading="lazy"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
          class="content"
          v-if="!isMobile"
          src="~@/projects/dnls/s2/content.png"
          :alt="info.caseName"
          srcset=""
        />
        <img loading="lazy"
          data-aos="fade"
          data-aos-duration="1000"
          data-aos-delay="400"
          class="content"
          v-else
          src="~@/projects/dnls/s2/content_mo.png"
          :alt="info.caseName"
          srcset=""
        />
      </div>
      <div class="cover">
        <img loading="lazy"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          v-if="!isMobile"
          src="~@/projects/dnls/s2/cover.jpg"
          :alt="info.caseName"
          srcset=""
        />
        <img loading="lazy"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          v-else
          src="~@/projects/dnls/s2/cover_mo.jpg"
          :alt="info.caseName"
          srcset=""
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section2 {
  position: relative;
  width: 100vw;
  height: 90vh;
  background-size: contain;
  background-image: url("~@/assets/img/bg.jpg");
  .main {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 90%;
    height: 80%;
    margin: 0 auto;
    .content-box {
      display: flex;
      flex-direction: column;
      .logo {
        width: 30vw;
        margin-bottom: 12vw;
      }
      .title {
        width: 32vw;
        margin-bottom: 3vw;
      }
      .content {
        width: 43vw;
      }
    }
    .cover {
      img {
        width: 30vw;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section2 {
    width: 100vw;
    height: auto;
    .main {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-direction: column-reverse;
      width: 100%;
      height: auto;
      margin: 0 auto;
      .content-box {
        margin: 15vw 0;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .logo {
          width: 80vw;
          margin-bottom: 12vw;
        }
        .title {
          width: 55vw;
          margin-bottom: 5vh;
        }
        .content {
          width: 85%;
        }
      }
      .cover {
        img {
          width: auto;
          height: 70.6vh;
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
import info from "@/info";
import { isMobile } from "@/utils";

export default {
  name: "section2",

  data() {
    return {
      info,
      isMobile,
    };
  },

  methods: {},

  created() {},
};
</script>
