<template>
  <div class="s2">
    <div class="v-title" data-aos="fade-up">
      <img
        loading="lazy"
        src="@/projects/renai/s2/title.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="500" v-if="!isMobile">
      國之門面仁愛大道 仕紳貴冑聚居之地<br />
      一世幾回相逢京畿富域稀罕釋出<br />
      難得一遇〔仁愛旭〕2房精巧規劃<br />
      輕盈步伐與億萬豪邸同享豐饒家境
    </div>
    <div class="title" data-aos="fade-up" data-aos-delay="500" v-else>
      國之門面仁愛大道 仕紳貴冑聚居之地<br />
      一世幾回相逢京畿富域稀罕釋出<br />
      難得一遇〔仁愛旭〕2房精巧規劃<br />
      輕盈步伐與億萬豪邸同享豐饒家境
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s2 {
  position: relative;
  width: size(1920);
  height: size(1232);
  background-size: cover;
  background-position: center;
  background-color: #eb5c20;
  background-image: url("~@/projects/renai/s2/bg.jpg");
  .v-title {
    position: absolute;
    width: size(166);
    bottom: size(604);
    left: size(877);
    img {
      width: 100%;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7));
    }
  }
  .title {
    position: absolute;
    font-size: size(44);
    font-weight: 500;
    line-height: 1.5;
    width: size(980);
    left: 50%;
    margin-left: -#{size(490)};
    color: #fff;
    bottom: size(257);
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.8));
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s2 {
    position: relative;
    width: size-m(375);
    height: size-m(623);

    .v-title {
      width: size-m(62.82);
      bottom: size-m(311);
      left: size-m(154);
    }
    .title {
      font-size: size-m(17);
      width: 100%;
      left: 50%;
      margin-left: -50%;
      bottom: size-m(171);
      font-weight: normal;
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
  name: "s2",
  props: ["scrollInstance"],

  data() {
    return {
      isMobile,
    };
  },

  methods: {
    scrollTo(el) {
      this.scrollInstance.scrollTo(el);
    },
  },

  mounted() {},

  created() {},
};
</script>
