<template>
  <div class="s9" id="scene">
    <template v-for="(item, i) in info">
      <div :key="i" v-if="activeIndex == i" data-aos="fade" class="title">
        <div class="divider"></div>
        <div class="t1">{{ item.t1 }}</div>
        <div class="t2" v-html="item.t2"></div>
        <div class="t3">{{ item.t3 }}</div>
        <div class="work-title">代表作品</div>
        <div class="t4">{{ item.t4 }}</div>
        <div class="divider"></div>
      </div>
    </template>
    <div class="person">
      <div
        class="item"
        v-for="(img, i) in imgs"
        :key="i"
        v-bind:style="{ backgroundImage: `url(${img})` }"
        v-bind:class="{ active: activeIndex == i }"
        @click="activeIndex = i"
      ></div>
    </div>
    <img class="star" src="@/projects/wv/s6/star.png" alt="" srcset="" />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s9 {
  width: size(1920);
  height: size(1080);
  background-color: #4e1830;
  position: relative;
  .person {
    display: flex;
    position: absolute;
    right: 0;
    top: size(89);
    .item {
      width: size(275);
      height: size(903);
      background-size: cover;
      background-position: center;
      transition: all 0.3s;
      filter: grayscale(100%);

      &.active {
        width: size(493);
        filter: grayscale(0%);
      }
      &:hover {
        filter: grayscale(0%);
        cursor: pointer;
      }
    }
  }
  .title {
    width: size(870);
    height: size(452);
    top: size(332);
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .t1 {
      font-size: size(40);
      font-weight: 800;
      color: #ffaa2a;
    }
    .t2 {
      font-size: size(30);
      font-weight: 700;
      color: #fff;
    }
    .t3 {
      font-size: size(20);
      font-weight: 400;
      color: #fff;
      line-height: 1.5;
      letter-spacing: 0.2em;
      font-family: "Noto Sans TC";
      max-width: size(520);
    }
    .work-title {
      font-size: size(30);
      font-weight: 700;
      color: #ffaa2a;
    }
    .t4 {
      font-family: "Noto Sans TC";
      font-size: size(20);
      font-weight: 400;
      color: #ffaa2a;
      max-width: size(520);
      word-break: keep-all;
      line-height: 1.5;
      letter-spacing: 0.2em;
    }
    .divider {
      width: size(90);
      height: size(1);
      background-color: #ffaa2a;
    }
  }
  .star {
    position: absolute;
    width: size(366);
    left: 0;
    top: size(58);
    animation: light 1.5s alternate-reverse infinite ease-in-out;

    @keyframes light {
      from {
        opacity: 0.2;
      }
      to {
        opacity: 1;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .s9 {
    width: size-m(375);
    height: size-m(801);
    .person {
      display: flex;
      position: absolute;
      right: 0;
      top: unset;
      bottom: 0;
      width: size-m(375);
      height: size-m(320);
      .item {
        width: size-m(100);
        height: size-m(320);
        background-size: cover;
        background-position: center;
        transition: all 0.3s;
        filter: grayscale(100%);

        &.active {
          width: size-m(173);
          filter: grayscale(0%);
        }
        &:hover {
          filter: grayscale(0%);
          cursor: pointer;
        }
      }
    }
    .title {
      width: size-m(375);
      height: size-m(423);
      top: size-m(35);
      position: absolute;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 0 size-m(35);

      .t1 {
        font-size: size-m(25);
      }
      .t2 {
        font-size: size-m(19);
        line-height: 1.5;
      }
      .t3 {
        font-size: size-m(15);
        letter-spacing: 1px;
        font-family: "Noto Serif TC";
        max-width: 100%;
      }
      .work-title {
        font-size: size-m(25);
      }
      .t4 {
        font-family: "Noto Serif TC";
        font-size: size-m(15);
        max-width: 100%;
        letter-spacing: 1px;
      }
      .divider {
        width: size-m(90);
        height: size-m(1);
        background-color: #ffaa2a;
      }
    }
    .star {
      position: absolute;
      width: size-m(300);
      left: 0;
      top: size-m(0);
      animation: light 1.5s alternate-reverse infinite ease-in-out;

      @keyframes light {
        from {
          opacity: 0.2;
        }
        to {
          opacity: 1;
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
import { isMobile } from "@/utils";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  name: "s9",
  props: ["scrollInstance"],
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      isMobile,
      activeIndex: 0,
      imgs: [
        require('@/projects/wv/s9/1.jpg'),
        require('@/projects/wv/s9/2.jpg'),
        require('@/projects/wv/s9/3.jpg')
      ],
      info: [
        {
          t1: '凝練奢華 傳世珍藏',
          t2: '全台第一大推案建築師 陳朝雄',
          t3: '以地標之姿收服城市高度，以精湛工藝之美豐藏城市品味，全台第一大推案建築師陳朝雄以以自然美景為襯底的波浪曲線外觀，奢華內斂而不張揚，融景入境舞於天地間，譜出大台北水岸傳世豪宅新篇章。',
          t4: '僑蓮雄鋒 勤樸天際．力璞晴．詠萃'
        },
        {
          t1: '自然化景 山水入境',
          t2: isMobile ? '信義區豪宅御用景觀設計師<br/>大漢景觀 徐世萃' : '信義區豪宅御用景觀設計師 大漢景觀 徐世萃',
          t3: '景觀不僅是建築的風景，更是展現生活內涵的舞台。「大漢」景觀設計師徐世萃專為頂級建築打造會呼吸的城市綠帶，隨風光水綠自在呼吸，完美融合建築與環境界線，使空間與土地產生最自然連結。',
          t4: '維多利亞酒店．碧波白、自慢藏、城上城、希望城市、華固華城、墾丁凱撒大飯店'
        },
        {
          t1: '美學雅韻 超越想像',
          t2: isMobile ? '空間的專家公設設計師<br/>博笙室內設計 王秀玉 ' : '空間的專家公設設計師  博笙室內設計 王秀玉 ',
          t3: '同步國際趨勢人文空間品味，構築空間與生活之間的美好生活對話，以生活的立體感知為基底，透過光影轉換借景入境，讓公設空間不僅是頂級社交休閒場域，更成為家的空間延展，散發無限美學張力。',
          t4: '墾丁凱撒大飯店、美麗山林、海上皇宮、帝景、世界首席、天藝'
        },
      ]
    };
  },
  methods: {
  },
  mounted() {
  },
  created() {
  },
};
</script>