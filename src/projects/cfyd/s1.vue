<template>
  <div class="s1">
    <div class="title">
      <img
        v-if="!isMobile"
        class="t1"
        data-aos="flip-up"
        src="@/projects/cfyd/s1/t1.svg"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="t1"
        data-aos="flip-up"
        src="@/projects/cfyd/s1/t1_m.svg"
        alt=""
        srcset=""
      />
      <img
        v-if="!isMobile"
        class="t2"
        data-aos="flip-up"
        data-aos-delay="400"
        src="@/projects/cfyd/s1/t2.svg"
        alt=""
        srcset=""
      />
      <img
        v-else
        class="t2"
        data-aos="flip-up"
        data-aos-delay="400"
        src="@/projects/cfyd/s1/t2_m.svg"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s1 {
  position: relative;
  width: size(1920);
  height: size(900);
  background-image: url("~@/projects/cfyd/s1/bg.png");
  background-position: center;
  background-size: cover;

  .title {
    position: absolute;
    width: size(403);
    height: size(384);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    right: size(50);
    bottom: size(70);

    .t1 {
      width: 100%;
    }
    .t2 {
      margin-top: size(15);
      width: 92%;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */

@media only screen and (max-width: 767px) {
  .s1 {
    position: relative;
    width: size-m(375);
    height: size-m(769);
    background-image: url("~@/projects/cfyd/s1/bg_m.png");
    background-position: center;
    background-size: cover;
    z-index: 12;

    .title {
      position: absolute;
      width: size-m(308);
      height: size-m(249);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      right: 50%;
      transform: translateX(50%);
      bottom: size-m(250);
      .t1 {
        width: 100%;
      }
      .t2 {
        margin-top: size-m(15);
        width: 85%;
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

export default {
  name: "s1",
  props: ["scrollInstance"],
  data() {
    return {
      isMobile,
      visual: "",
    };
  },

  methods: {
    // scrollTo(el) {
    //   this.scrollInstance.scrollTo(el);
    // },
  },

  created() { },
  mounted() {
  },
};
</script>