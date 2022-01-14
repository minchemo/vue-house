<template>
  <div class="s4">
    <div class="content">
      <div class="img-box" data-aos="fade">
        <div class="img1" data-aos="fade">
          <div class="caption">使館特區</div>
        </div>
        <div class="img2" data-aos="fade" data-aos-delay="400">
          <div class="caption">磺溪河畔</div>
        </div>
      </div>
      <div class="title">
        <div class="t1" data-aos="fade">天母核心、名流薈萃</div>
        <div class="info">
          <div class="t2" data-aos="fade-up">
            使館特區生活圈
          </div>
          <div class="t3" data-aos="fade-up" data-aos-delay="400">
            這裡散步走著就會和公園相遇，一抬頭就是開闊無比的大山天際線<br />
            這裡沿著磺溪畔堤道就能觸摸春櫻、夏綠、秋楓、冬雲的季節溫度<br />
            這裡是最多元的國際村，日僑學校、美國學校、歐洲學校、使館特區<br />
            這裡的萬聖節慶是全台北最熱鬧的街區<br />
            這裡匯聚最多異國美食，米其林一星新蓬萊台菜、日本料亭蓮波葉…更是老饕最愛<br />
            這裡有台北榮總和振興醫院做好鄰居，齊聚台灣各科醫療權威，細心呵護您的健康
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.s4 {
  width: size(1920);
  height: size(900);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("~@/projects/tm/s4/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  .content {
    display: flex;
    align-items: start;
    .img-box {
      width: size(894);
      height: size(606.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: size(50);
      .img1 {
        position: relative;
        width: size(404.69);
        height: 100%;
        background-image: url("~@/projects/tm/s4/1.jpg");
        background-size: cover;
        .caption {
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-size: size(18);
          color:#fff;
        }
      }
      .img2 {
        position: relative;
        width: size(453);
        height: 100%;
        background-image: url("~@/projects/tm/s4/2.jpg");
        background-size: cover;
        .caption {
          position: absolute;
          right: 10px;
          bottom: 10px;
          font-size: size(18);
        }
      }
    }
    .title {
      text-align: left;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: size(606.8);
      .t1 {
        font-size: size(71);
        color: #c3a672;
        border: 1px solid #c3a672;
        padding: size(30) size(45);
      }
      .t2 {
        font-size: size(40);
        margin-bottom: size(40);
        padding-left: size(45);
      }
      .t3 {
        font-size: size(18);
        padding-left: size(45);
        line-height: 2.5;
      }
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
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
  name: "s4",
  data() {
    return {
      isMobile,
    };
  },
};
</script>

