<template>
  <div>
    <div id="contact-info">
      <div class="contact-info contact-sec">
        <img
          v-lazy
          class="logo"
          :temp="require('@/projects/cm/contact_logo.svg')"
          :alt="info.caseName"
        data-aos="zoom-in"
        />
        <div class="info">
          <div class="btn flex-c" @click="showCallDialog">
            <span class="flex-c">
              <font-awesome-icon icon="phone" />
              <span>{{ info.phone }}</span>
            </span>
          </div><!-- -->
          <div class="btn flex-c"  @click="showMessengerDialog">
            <span class="flex-c">
              <font-awesome-icon :icon="['fab', 'facebook-messenger']" /><span
                >FB 諮詢</span
              >
            </span>
          </div><!--   -->
          <a class="btn flex-c bt_fanpage" :href="info.fbLink" target="_blank">
            <span class="flex-c">
              <font-awesome-icon :icon="['fab', 'facebook-f']" /><span
                >前往粉絲專頁</span
              >
            </span>
          </a>
          <div class="address flex-c">{{ info.address }}</div>
          <div class="google-btn flex-c btn" @click="showMapDialog">
            <span class="flex-c">
              <font-awesome-icon icon="map-marker-alt" /><span
                >導航 Google 地圖</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title
      :visible.sync="isShowCallDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <CallDialog :phone="info.phone" />
    </el-dialog>
    <el-dialog
      title
      :visible.sync="isShowMessengerDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <MessengerDialog :messenger="info.fbMessage" />
    </el-dialog>
    <el-dialog
      title
      :visible.sync="isShowMapDialog"
      :width="isMobile ? '90%' : '500px'"
      :modal-append-to-body="false"
    >
      <MapDialog :link="info.googleLink" :address="info.address" />
    </el-dialog>
  </div>
</template>

<script>
import info from "@/info";
import { isMobile, isTablet } from "@/utils";
import CallDialog from "@/components/Dialog/Call";
import MessengerDialog from "@/components/Dialog/Messenger";
import MapDialog from "@/components/Dialog/Map";

//import Mosaic from "@/projects/ab/mosaic.vue";
export default {
  name: "contactInfo",
  components: {
    CallDialog,
    MessengerDialog,
    MapDialog,
    //Mosaic,
  },
  data() {
    return {
      info,

      isMobile,
      isTablet,
      isShowCallDialog: false,
      isShowMessengerDialog: false,
      isShowMapDialog: false,
    };
  },
  methods: {
    showCallDialog() {
      // if (!this.isMobile) return
      this.isShowCallDialog = true;
    },
    showMessengerDialog() {
      // if (!this.isMobile) return
      this.isShowMessengerDialog = true;
    },

    showMapDialog() {
      // if (!this.isMobile) return
      this.isShowMapDialog = true;
    },

    fixLogoHeight() {
      const targetHeight = $(".contact .mosaic-box").height();
      $(".contact .logo").height(targetHeight);
    },
  },

  mounted() {
    this.fixLogoHeight();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variableColor.scss";
@import "@/assets/style/variableDefault.scss";
#contact-info {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  z-index: 15;
}
.order-bg-draw {
  width: calc(30000 / 1920);
  position: absolute;
  right: 5vw;
  bottom: 2.8vw;
  z-index: 15;
}

.forest {
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  transform: scale(1.2) skew(0deg, 0);
  transform-origin: center;
  animation: forest 4s infinite alternate-reverse;

  @keyframes forest {
    100% {
      transform: scale(1.2) skew(3deg, 0);
    }
  }
}

.contact-info {
  //background: $contact_bg;
  // background-image: url('../assets/img/contact_bg.jpg');/
  background-size: cover;
  //box-shadow: $contact_shadow;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: relative;
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
  padding: 50px 0;
  z-index: 50;

  .fix-bar {
    background: rgba(231, 149, 14);
    background: linear-gradient(
      90deg,
      rgba(253, 227, 82, 1) 0%,
      rgba(231, 149, 14, 0.7) 20%,
      rgba(195, 13, 35, 0.3) 70%,
      rgba(195, 13, 35, 0) 100%
    );
    position: absolute;
    transition: all 0.5s;
    transform-origin: center;
    transform: scaleX(1);
    animation: animate 10s infinite;
    z-index: 0;
    &.fix-bar-1 {
      width: 10%;
      height: 6%;
      left: 25vw;
      top: 12vw;
      animation-delay: random(5) + s;
    }

    &.fix-bar-2 {
      width: 10%;
      height: 2%;
      left: 30vw;
      top: 17vw;
      animation-delay: random(5) + s;
    }
    &.fix-bar-3 {
      width: 7%;
      height: 3%;
      left: 34vw;
      top: 14vw;
      animation-delay: random(5) + s;
    }

    @keyframes animate {
      0% {
        transform: scaleX(1);
      }
      50% {
        transform: scaleX(1.5);
      }
      100% {
        transform: scaleX(1);
      }
    }
  }
}

.logo {
  // width: $contact_logo_pc_width;
  height: size(54);
  margin: 0 auto 70px auto;
  z-index: 1;
  width: 40%;
}
.info {
  width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 1;
}

.btn {
  width: 280px;
  height: 60px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: $contact_btn_color;
  background: $contact_btn_bg;
  box-shadow: $contact_btn_border;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
  border-radius: $contact_btn_border_radius;
  font-family: $family4;

  &.half {
    width: 49%;
  }
  svg {
    color: $contact_btn_icon;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
  }

  &:hover {
    background: $contact_btn_hover_bg;
    color: $contact_btn_hover_color;

    svg {
      color: $contact_btn_hover_icon;
    }
  }
  &::before {
    content: "";
    width: 40%;
    height: 100%;
    display: block;
    background: #fff;
    position: absolute;
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: 5;
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  }
  &:hover:before {
    opacity: 1;
    width: 90%;
    left: 140%;
  }
}
.address {
  width: 600px;
  height: 60px;
  font-size: 18px;
  background: #dcdddd;
  font-weight: 400;
  box-shadow: $contact_btn_border;
  border-radius: $contact_btn_addr_border_radius;
  font-family: $family4;
  color: #000;
  + .google-btn,
  + .btn {
    border-radius: 0;
    font-family: $family4;
  }
}
.google-btn {
  width: 280px;
  height: 60px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: $contact_google_btn_color;
  background: $contact_google_btn_bg;
  background-position: center !important;

  box-shadow: $contact_google_border;
  transition: all 0.5s;
  border-radius: $contact_btn_gbtn_border_radius !important;

  svg {
    color: $contact_google_btn_icon;
    width: 24px;
    height: 24px;
    margin-right: 12px;
    transition: all 0.5s;
  }

  &:hover {
    background: $contact_google_hover_btn_bg;
    color: $contact_google_hover_btn_color;
    box-shadow: $contact_google_hover_border;

    svg {
      color: $contact_google_hover_btn_icon;
    }
  }
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .contact-info {
    display: flex;
    width: 90% !important;
    height: 460px;
    padding: 60px 0 80px;
    min-width: unset;

    .logo {
      width: $contact_logo_tablet_width;
    }
  }
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .forest_mb {
    position: absolute;
    top: 0%;
    left: 0%;
    height: 90vh;
    margin-top: -90vh;
    transform: translateX(0%);
    animation: forest_mb 15s infinite alternate-reverse linear;
    pointer-events: none;

    @keyframes forest_mb {
      100% {
        transform: translateX(-70%);
      }
    }
  }

  .contact-info-img {
    position: absolute;
    width: 270vw;
    left: 50%;
    bottom: -52vw;
    transform: translateX(-50%);
  }
  #contact-info {
    position: relative;
    background: transparent;
    transform: unset;
    left: 0;
  }
  .order-bg-draw {
    height: 100px;
    position: absolute;
    right: unset;
    bottom: unset;
    left: 15px;
    top: -100px;
    z-index: 200;
  }
  .contact-info {
    display: flex;
    width: 100%;
    height: auto;
    padding: 40px;
    transform: none;
    position: relative;
    margin: 0 auto 0 auto;
    min-width: unset;
   //background: $contact_bg_m;
    background-size: contain;
    margin-top: 0;

    .logo {
      width: $contact_logo_mobile_width;
      height: auto;
      //width: 65vw;
      //height: auto;
      //margin-left: -2vw;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }

  .btn {
    &.half {
      width: 280px;
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: calc(50% - 5em);
      margin-right: 0;
      + span {
        margin-left: 1.5em;
        font-size: 16px;
      }
    }
  }

  .info {
    width: 100%;
    justify-content: center;
    text-align: center;
    //margin-bottom: 40px;

    > * {
      margin-bottom: 12px;
      &.address {
        margin-bottom: 0;
        border-radius: $contact_btn_addr_border_radius_m;
      }
    }
  }

  .logo {
    margin-bottom: 20px;
    margin: 0 auto 30px;
    left: auto;
    position: relative;
  }

  .address {
    width: 280px;
    font-size: 16px;
    padding: 0 1em;
    text-align: justify;
    //border-radius: 0 0 30px 30px;
    + .google-btn,
    + .btn {
      border-radius: $contact_btn_gbtn_border_radius_m;
    }
  }
}

@media only screen and (max-width: 321px) {
  .address {
    font-size: 14px;
  }
}
</style>
