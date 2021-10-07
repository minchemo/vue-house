<template>
  <div class="section5">
    <div v-if="!isMobile">
      <div class="main-title">大磊聯合<br /><span>建築師事務所</span></div>
      <div class="main">
        <div class="swiper-box">
          <div class="swiper-desc">
            位於台灣府城臺南市的設計型事務所，成立於1998年。完成作品以大學建築、研究機構、美術館、運動中心、國中小學校舍、集合住宅、高科技廠房辦公室、歷史建築再利用等等為主。
          </div>
          <swiper
            ref="swiper"
            :options="swiperOptions"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="(img, i) in imgList"
              v-bind:key="i"
              v-bind:style="{ backgroundImage: `url(${img.img})` }"
            >
            </swiper-slide>
          </swiper>
          <div class="info">
            <div class="name">
              住宅建築設計專家<span class="l_name">謝志雄</span>總監
            </div>
            <div class="exp">
              現任 /大磊聯合建築師事務所 設計總監暨主持人<br />
              經歷 /林博容建築師事務所 總監
            </div>
          </div>
        </div>
        <div class="arch-list">
          <div class="title">公共工程類</div>
          <ul>
            <li
              v-for="(arch, i) in arch_list"
              v-bind:key="i"
              data-aos="fade-left"
              data-aos-duration="2000"
              :data-aos-delay="`${0 + i * 100}`"
            >
              <div class="prj_name">{{ arch.prj_name }}</div>
              <div class="prj_reward">
                {{ arch.prj_reward }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="main">
        <div class="swiper-box">
          <div class="title">MASTER<br />好團隊 好設計</div>
          <swiper
            ref="swiper"
            :options="swiperOptions"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="(img, i) in imgList"
              v-bind:key="i"
              v-bind:style="{ backgroundImage: `url(${img.img})` }"
            >
            </swiper-slide>
          </swiper>

          <div v-if="isMobile" class="swiper-button-prev"></div>
          <div v-if="isMobile" class="swiper-button-next"></div>
          <div
            class="info"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-offset="0"
            data-aos-delay="0"
          >
            <div v-if="isMobile" class="arch_name">大磊聯合建築師事務所</div>
            <div class="name">
              住宅建築設計專家<span class="l_name">謝志雄</span>總監
            </div>
            <div v-if="!isMobile" class="exp">
              現任 /大磊聯合建築師事務所 設計總監暨主持人<br />
              經歷 /林博容建築師事務所 總監
            </div>
          </div>
        </div>
      </div>
    </div>
    <img loading="lazy"
      v-if="!isMobile"
      class="rt-plan"
      src="~@/projects/cby/s5/rt.png"
      alt=""
    />
    <img loading="lazy" v-else class="rt-plan" src="~@/projects/cby/s5/mo-rt.png" alt="" />

    <img loading="lazy"
      v-if="!isMobile"
      class="lb-plan"
      src="~@/projects/cby/s5/lb.png"
      alt=""
    />

    <img loading="lazy" v-else class="lb-plan" src="~@/projects/cby/s5/mo-lb.png" alt="" />
  </div>
</template>
<style lang="scss">
.section5 {
  .swiper-box {
    .swiper-slide {
      position: relative;
      background-size: cover;
      background-repeat: no-repeat;
      height: 0;
      padding-bottom: 68.86%;
      width: 100% !important;
    }
    .info {
      position: relative;
      text-align: left;
      padding: 0 20px;
      .name {
        margin-top: 24px;
        margin-bottom: 18px;
        font-size: 1.5rem;
        font-weight: bold;

        span {
          font-family: "DFLiSongStd";
          font-size: 2rem;
          margin: 0 12px;
          font-weight: bold;
        }
      }
      .exp {
        font-size: 1.2rem;
        line-height: 1.5;
        min-height: 96px;
        font-weight: bold;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 50%;
      width: 10vw;
      height: 10vw;
      border: 1px solid #fff;
      border-radius: 100%;
      right: 30px;
      &:after {
        content: "";
        border-top: 4px solid #fff;
        border-right: 4px solid #fff;
        position: relative;
        width: 4vw;
        height: 4vw;
        transform: rotate(45deg);
        margin-left: -1vw;
      }
    }
    .swiper-button-prev {
      left: 30px;
      &:after {
        content: "";
        border-top: 0;
        border-right: 0;
        border-bottom: 4px solid #fff;
        border-left: 4px solid #fff;
        margin-left: 1vw;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .section5 {
    .swiper-box {
      position: relative;

      .swiper-button-prev,
      .swiper-button-next {    
        margin-top: -5vw;
        right: 10px;
      }
      .swiper-button-prev {
        left: 10px;
      }
      .swiper-slide {
        height: 30vh;
      }
      .info {
        font-weight: bold;
        padding: 0;
        margin-top: 30px;
        .arch_name {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
.section5 {
  background-color:#fff;
  height: 110vh;
  display: flex;
  align-items: center;

  .main-title {
    font-family: "DFLiSongStd";
    position: absolute;
    color: #ae8355;
    writing-mode: vertical-lr;
    font-size: 2.75rem;
    font-weight: 500;
    letter-spacing: 3px;
    text-align: left;
    line-height: 1.5;
    top: 3vw;
    left: 3vw;
    span {
      display: block;
      text-indent: 7rem;
    }
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-height: 100%;
    margin-left: auto;

    .swiper-box {
      width: 50%;
      padding: 1vw 5vw;
      border-right: 3px solid #ae8355;
      margin-right: 5vw;
      .swiper-desc {
        text-align: left;
        margin-bottom: 30px;
        line-height: 1.5;
      }
    }

    .arch-list {
      width: 50%;
      text-align: left;

      .title {
        font-size: 2rem;
        font-weight: bold;
        padding: 8px 12px;
        color: #fff;
        background: #ae8355;
        display: inline-block;
      }

      ul {
        margin-top: 20px;

        li {
          margin-bottom: 24px;
          padding-left: 24px;
          position: relative;
          .prj_name {
            font-family: "DFLiSongStd";
            font-size: 1.5rem;
            font-weight: bold;
            color: #000;
            margin-bottom: 6px;
          }
          .prj_reward {
            font-size: 1.25rem;
            color: #ae8355;
            font-weight: bold;
          }
          &:before {
            content: "";
            width: 14px;
            height: 14px;
            background: #ae8355;
            position: absolute;
            left: 0;
            top: 4px;
          }
        }
      }
    }
  }

  .rt-plan {
    position: absolute;
    right: 0;
    top: 0;
    width: 30vw;
  }

  .lb-plan {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30vw;
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section5 {
    display: block;
    height: 90vh;
    padding-top: 5vh;
    .main {
      margin-right: auto;
      .swiper-box {
        width: 100%;
        border-right: 0;
        padding: 0;
        margin: 0;
        .title {
          font-family: "DFLiSongStd";
          font-size: 2rem;
          text-align: left;
          color: #ae8355;
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 1.3;
          margin: 30px 0;
        }

        .info {
          font-weight: bold;
          .arch_name {
            font-size: 1.5rem;
          }
          .name {
            font-size: 1.05rem;
            white-space: nowrap;
          }
        }
      }
    }
    .rt-plan {
      position: absolute;
      right: 0;
      top: 0;
      width: 120vw;
    }

    .lb-plan {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 110vw;
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import style (>= Swiper 6.x)
import "swiper/css/swiper.css";
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "section5",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },

  data() {
    return {
      isMobile,
      arch_list: [
        {
          prj_name: "成功大學研究總中心",
          prj_reward: "2001 臺灣建築獎‧2004 優良綠建築獎",
        },
        {
          prj_name: "台南市日新國小校舍工程",
          prj_reward: "2002 教育部評鑑優等獎‧2004 綠建築貢獻獎",
        },
        {
          prj_name: "台達電子南科綠色廠房暨研究中心",
          prj_reward: "2006 優良綠建築獎 鑽石級九項指標",
        },
        {
          prj_name: "彰化縣歷史建築福興鄉農會穀倉再利用計劃",
          prj_reward: "2005 台灣建築獎",
        },
        {
          prj_name: "國立虎尾科技大學文理及管理學院大樓",
          prj_reward: "2010 公共工程金質獎優選",
        },
        {
          prj_name: "綠色魔法學校",
          prj_reward: "2011美國綠建築LEED白金級  2011 優良綠建築獎",
        },
        {
          prj_name: "新北市林口頭湖國小",
          prj_reward: "2011  國家卓越建設獎  2011 新北市金質獎",
        },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      imgList: [
        {
          img: isMobile ? require("@/projects/cby/s5/a.jpg") : require("@/projects/cby/s5/slider_0.jpg"),
         // sign: require("@/projects/cby/s5/a_sign.png"),
          nameHtml: '住宅建築設計專家<span class="l_name">謝志雄</span>總監',
          expHtml: `現任 /大磊聯合建築師事務所 設計總監暨主持人<br>
                    經歷 /林博容建築師事務所  總監`,
        },
        {
          img: isMobile ? require("@/projects/cby/s5/b.jpg") : require("@/projects/cby/s5/slider_1.jpg"),
          //sign: require("@/projects/cby/s5/b_sign.png"),
          nameHtml: '綠建築博士<span class="l_name">石昭永</span>建築師',
          expHtml: `現任：大磊聯合建築師事務所 主持建築師<br>
                    學經歷<br>/ 美國紐約州建築師<br>
                    / 國立成功大學建築學士‧博士<br>
                    / 美國麻省理工學院建築碩士`,
        },
        {
          img: isMobile ? require("@/projects/cby/s5/c.jpg") : require("@/projects/cby/s5/slider_2.jpg"),
          //sign: require("@/projects/cby/s5/c_sign.png"),
          nameHtml: '<span class="l_name">陳鵬宇</span>建築師',
          expHtml: `現任：大磊聯合建築師事務所 協同主持人<br>
                    學經歷<br>/ 成功大學建築學士<br>
                        / 成功大學建築碩士<br>
                        / 第十四屆高雄市建築師公會法規委員`,
        },
        {
          img: isMobile ? require("@/projects/cby/s5/d.jpg") : require("@/projects/cby/s5/slider_3.jpg"),
          //sign: require("@/projects/cby/s5/d_sign.png"),
          nameHtml: '<span class="l_name">呂秩姍</span>建築師',
          expHtml: `學經歷<br>/ 逢甲大學建築學士<br>
                           / 台南藝術大學建築碩士<br>
                           / 第十五屆高雄市建築師公會理事<br>
                           / 第十五屆高雄市建築師公會法規委員
                    `,
        },
      ],
    };
  },

  methods: {
    onSlideChange() {
      const currnetIndex = this.$refs.swiper.$swiper.activeIndex;
      const currentIndexData = this.imgList[currnetIndex];

      $(".info .name").html(currentIndexData.nameHtml);
      $(".info .exp").html(currentIndexData.expHtml);
    },
  },

  created() {},
};
</script>
