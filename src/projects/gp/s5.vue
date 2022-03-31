<template>
  <div class="section5">
    <img
      class="bar"
      v-if="isMobile"
      src="@/projects/gp/s5/bar_m.png"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="500"
    />
    <img
      class="title"
      v-if="!isMobile"
      src="@/projects/gp/s5/title.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="500"
    />
    <img
      class="title"
      v-else
      src="@/projects/gp/s5/title_m.svg"
      alt=""
      srcset=""
      data-aos="fade-up"
      data-aos-delay="800"
    />
    <div data-aos="fade" data-aos-delay="500">
      <div
        class="box"
        v-for="(img, i) in imgs"
        :key="i"
        v-bind:class="`box${i + 1}`"
        :data-id="i + 1"
        v-bind:style="{ backgroundImage: `url('${img.url}')` }"
      >
        <div class="text" v-if="i + 1 == round">READ LIFE</div>
        <p>{{ img.caption }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section5 {
  width: 100%;
  height: size(1080);
  background-size: cover;
  background-position: center;
  .title {
    position: absolute;
    top: 0;
    left: size(352);
    height: size(700);
  }
  .box {
    background-color: #eee;
    position: absolute;
    background-size: cover;
    transition: all 1s;
    box-shadow: size(5) size(5) 8px rgba(0, 0, 0, 0.6);
    &.box1 {
      width: size(935.52);
      height: size(556.32);
      top: size(100);
      left: size(719);
    }
    &.box2 {
      width: size(599.04);
      height: size(359.52);
      top: size(678);
      left: size(820);
    }
    &.box3 {
      width: size(341.76);
      height: size(209.76);
      top: size(678);
      left: size(1435);
    }
    .text {
      position: absolute;
      font-size: size(32);
      left: size(15);
      top: size(15);
      color: #fff;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    }
    p {
      position: absolute;
      font-size: size(22);
      right: size(15);
      bottom: size(15);
      color: #fff;
      filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section5 {
    width: 100%;
    height: size-m(599.5);
    background-size: cover;
    background-position: center;
    .bar {
      position: absolute;
      left: 0;
      top: size-m(22);
      width: 100%;
    }
    .title {
      position: absolute;
      top: size-m(378);
      left: unset;
      right: 0;
      height: auto;
      width: size-m(345);
    }
    .wave {
      position: absolute;
      top: size-m(473);
      right: 0;
      width: 100%;
    }
    .box {
      box-shadow: size-m(2) size-m(2) 4px rgba(0, 0, 0, 0.6);
      &.box1 {
        width: size-m(375);
        height: size-m(226);
        top: size-m(37);
        left: 0;
      }
      &.box2 {
        width: size-m(154);
        height: size-m(93);
        top: size-m(280);
        left: size-m(31);
      }
      &.box3 {
        width: size-m(154);
        height: size-m(93);
        top: size-m(280);
        left: size-m(192);
      }
      .text {
        position: absolute;
        font-size: size-m(16);
        left: size(15);
        top: size(15);
        color: #fff;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
      }
      p {
        position: absolute;
        font-size: size-m(12);
        right: size(15);
        bottom: size(15);
        color: #fff;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
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
  name: "section5",
  components: {},
  data() {
    return {
      isMobile,
      round: 1,
      imgs: [
        {
          url: require("@/projects/gp/s5/a.jpg"),
          caption: "大園高中",
        },
        {
          url: require("@/projects/gp/s5/b.jpg"),
          caption: "芭里國小",
        },
        {
          url: require("@/projects/gp/s5/c.jpg"),
          caption: "青埔國中",
        },
      ],
    };
  },

  methods: {},

  created() {},

  mounted() {
    setInterval(() => {
      if (this.round == 1) {
        $(".section5 .box[data-id=1]").removeClass("box1").addClass("box3");
        $(".section5 .box[data-id=2]").removeClass("box2").addClass("box1");
        $(".section5 .box[data-id=3]").removeClass("box3").addClass("box2");

        this.round++;
      } else if (this.round == 2) {
        $(".section5 .box[data-id=1]").removeClass("box3").addClass("box2");
        $(".section5 .box[data-id=2]").removeClass("box1").addClass("box3");
        $(".section5 .box[data-id=3]").removeClass("box2").addClass("box1");

        this.round++;
      } else if (this.round == 3) {
        $(".section5 .box[data-id=1]").removeClass("box2").addClass("box1");
        $(".section5 .box[data-id=2]").removeClass("box3").addClass("box2");
        $(".section5 .box[data-id=3]").removeClass("box1").addClass("box3");
        this.round = 1;
      }
    }, 3000);
  },
};
</script>
