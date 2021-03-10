<template>
  <div class="navigation">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img
            class="logo"
            src="@/assets/img/nav-logo.png"
            alt
            v-scroll-to="{ element: `#section1` }"
          />
          <div class="menu" @click="toggleSidebar">
            <font-awesome-icon icon="bars" />
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
          <ul :class="`navlist ${isOpen ? 'open' : ''}`">
            <li
              :key="item.name"
              v-scroll-to="{
                element: `#${item.section}`,
                offset: isMobile ? item.mobileOffset : offset
              }"
              v-for="item in list"
              class="flex-ac"
              @click="toggleSidebar"
            >
              <span class="link">
                <img v-if="item.imgSrc" :src="item.imgSrc" alt />
                <span>
                  <h3 class="title">{{ item.name }}</h3>
                  <span class="subTitle">{{ item.subTitle }}</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from "@/utils";
import navList from "@/info/navList";

export default {
  name: "navigation",
  components: {},
  data() {
    return {
      isOpen: false,
      isMobile,
      isTablet,
      list: navList
    };
  },

  computed: {
    offset() {
      if (this.isMobile) {
        return -39;
      }

      if (this.isTablet) {
        return -45;
      }

      return -56;
    }
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variableColor.scss";
@import "../assets/style/variableDefault.scss";
@import "../assets/style/function.scss";
.navigation {
  background-color: $nav_bg;
  background-image: $nav_bg;
  background-size: cover;
  height: $nav_pc_height;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
}

.nav-container {
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}

.nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  a {
    display: block;
    cursor: pointer;
  }
}

.logo {
  height: 70%;
  // width:auto;
  // height: 100%;
  cursor: pointer;
  position: absolute;
  left: 8vw;
  right: auto;
  display: block;
  transform: translateY(0%);
}

.mo {
  display: none;
}
.mask {
  display: none;
}

.navlist {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-right: 10vw;

  li {
    height: 100%;
  //  writing-mode: vertical-rl;
    letter-spacing: 2px;
  }

  .link {
    color: $nav_link_color;
    height: 100%;
    width: 4em;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    overflow: hidden;
    // border-right: 1px solid $nav_link_hover_bg;
    > span {
      z-index: 3;
    }
    &.active,
    &:hover {
      color: $nav_link_hover_color;
      // background-color: $nav_link_hover_bg;
      img {
      }
    }
    &::after,
    &::before{
      content: "";
      width: 1px;
      height: 0%;
      display: block;
    //  background: $nav_link_hover_bg;
      position: absolute;
      right: 15%;
      top: 0%;
      opacity: 0;
      transition: all 0.5s;
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='圖層_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1 122' enable-background='new 0 0 1 122' xml:space='preserve'%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='0.5' y1='111.96' x2='0.5' y2='0.12' gradientTransform='matrix(1 0 0 -1 0 123)'%3E%3Cstop offset='0' style='stop-color:%23B59668;stop-opacity:0'/%3E%3Cstop offset='0.5' style='stop-color:%23B59668'/%3E%3Cstop offset='1' style='stop-color:%23B59668;stop-opacity:0'/%3E%3C/linearGradient%3E%3Crect fill='url(%23SVGID_1_)' width='1' height='122'/%3E%3C/svg%3E");
    }
    &::after{
      left:15%;
      right:auto;}

    &.active::after,
    &.active::before,
    &:hover:after,
    &:hover:before{
      height: 100%;
      opacity: 1;

    }

    .title {
      position: relative;
      z-index: 3;
      font-family: $family2;
    text-align: center;
    width: 1.1em;
    align-items: center;
    justify-content: center;
    }

    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
      z-index: 3;
    }

    img {
      //width: calc(100vw * 50 / 1920);
      height: 80%;
      margin-right: 10px;

      &:hover {
        opacity: 0.5;
      }
    }
  }
  /*
  .flex-ac:first-child .link::before {
    display: none;
  }*/
}

.menu {
  display: none;
}

.link {
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
}

/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .navigation {
    height: $nav_tablet_height;
    justify-content: center;
  }
  /*
  .logo {
  }

  .navlist {
    width: 85%;
  }

  .navlist .link {
    font-size: 12px;
    width: 120px;
    white-space: nowrap;

    img {
      // height: 35px;
      margin-bottom: 5px;
    }

    .divided {
      margin-left: 6px;
    }
  }

  :global {
    .ui.fluid.container {
      width: 100% !important;
    }
  }
  */
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .navigation {
    height: $nav_phone_height;
    z-index: 110;
  }

  .nav-container {
    //   display: block;
    height: auto;
  }

  .logo {
    //width: $logo_phone_width;
    height: 40px;
    left: 15px;
    top: 10px;
  }

  .mo {
    display: block;
  }
  .pc {
    display: none;
  }
  .nav {
    position: static;
    height: $nav_phone_height;
  }

  .menu {
    display: block;
    position: absolute;
    right: 15px;
    width: 30px;

    svg {
      width: 100%;
      height: 100%;
      color: $nav_btn_color;
    }
  }
  .navlist {
    .link {
      width: 5em;
      font-size: 15px;
    }
  }

  .navlist {
    position: absolute;
    z-index: 111;
    background: transparent;
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all 0.3s ease-in;
    display: block;
    transform: translateX(40%);

    margin-right: 0vw;

    li {
      height: auto;
      min-height: 50px;
      margin-bottom: 5px;
      writing-mode: unset;
    }

    .link {
      height: auto;
      width: 100%;
      font-size: 16px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
    .title{width: 100%;}

      img,
      span {
        display: block;
      }
      span {
        line-height: 16px;
      }

      img {
        width: calc(100vw * 200 / 1920);
        height: auto;
        margin-right: 0px;
      }
    }

    &.open {
      width: 100%;
      transform: translateX(0%);

      .link {
        display: flex;
        justify-content: center;
        span {
          white-space: nowrap;
        }
        .divided {
          display: none;
        }
      }
    }
  }
  .mask {
    width: 100vw;
    top: $nav_phone_height;
    right: 0;
    background: $nav_bg;
    position: fixed;
    z-index: -1;
    height: calc(100vh - #{$nav_phone_height});
    opacity: 0;
    transition: all 0.3s ease-in;
    &.open {
      display: block;
      width: 100vw;
      opacity: 1;
      z-index: 110;
    }
  }
}
@media only screen and (max-width: 374px) {
  .navlist {
    .link {
      font-size: 4vw;
    }
  }
}
</style>
