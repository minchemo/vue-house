<template>
  <div class="navigation">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img
            src="@/projects/hoh1/ball/ball_logo.png"
            alt=""
            class="ball-logo"
          >
          <img
            class="logo"
            src="@/assets/img/nav-logo.png"
            alt
          />
          <div
            class="menu"
            @click="toggleSidebar"
            v-show="!isOpen"
          >
            <font-awesome-icon icon="bars" />
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`">
            <img
              src="@/projects/hoh1/ball/ball_logo.png"
              alt=""
              class="ball-logo"
            >
            <img
              class="mask-logo"
              src="@/assets/img/nav-logo.png"
              alt
            />
            <div
              class="close"
              @click="isOpen = false"
            >
              <img
                src="../assets/img/close.png"
                alt=""
              >
            </div>
          </div>
          <ul :class="`navlist ${isOpen ? 'open': ''}`">
            <li
              :key="item.name"
              v-scroll-to="{ element: `#${item.section}`, offset: offset }"
              v-for="item in list"
              class="flex-c"
              @click="toggleSidebar"
            >
              <span class="link">
                <img
                  class="ball"
                  v-if="item.imgSrc"
                  :src="item.imgSrc"
                  alt
                />
                <span>
                  <p
                    class="title"
                    v-html="item.name"
                  ></p>
                  <span class="subTitle">{{item.subTitle}}</span>
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
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'

export default {
  name: 'navigation',
  components: {},
  data() {
    return {
      isOpen: false,
      isMobile,
      isTablet,
      list: navList,
    }
  },

  computed: {
    offset() {
      if (this.isMobile) {
        return -39
      }

      if (this.isTablet) {
        return -45
      }

      return -56
    },
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style lang="scss">
.navigation {
  .title {
    font-size: 15px !important;
    position: relative;
    z-index: 3;
    > span {
      font-size: 24px !important;
    }
  }
}
</style>
<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
@import '../assets/style/function.scss';

.navigation {
  background-color: $nav_bg;
  background-image: $nav_bg;
  background-size: cover;
  height: $nav_pc_height;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex !important;
  align-items: center;
  // box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
}

.nav-container {
  height: 100%;
  display: flex;
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
  width: $logo_pc_width;
  height: auto;
  position: absolute;
  left:size(100);
  display: block;
  top: 50%;
  transform: translate(-50%,-50%);
}

.ball-logo {
  width: size(400);
  height: auto;
  position: absolute;
  left:size(-100);
  display: block;
  top: size(-250);
}

.mask {
  display: none;
}

.navlist {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  padding-left: 30px;
  li {
    height: 100%;
  }

  .link {
    color: $nav_link_color;
    height: 22px;
    text-align: center;
    display: block;
    cursor: pointer;
    padding: 0 30px;
    margin: 0 10px;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    // overflow: hidden;
    // border-right: 1px solid $nav_link_hover_bg;

    .ball {
      font-size: 18px;
      width:1em;
      position: absolute;
      left: 50%;top: 50%;
      transition: all 0.3s;
      margin-left: -3.2em;
      margin-top: -0.5em;
    }

    &:hover {
      color: $nav_link_hover_color;
      // background: $nav_link_hover_bg;

      .ball {
        transform: scale(8);
        transform-origin:center  center;
      margin-left:-0.5em;
      margin-top: 1em;
      }
    }

    // &::before {
    //   content: '';
    //   width: 0%;
    //   height: 100%;
    //   display: block;
    //   background: $nav_link_hover_bg; // second bg
    //   position: absolute;
    //   transform: skewX(-20deg);
    //   left: -10%;
    //   opacity: 1;
    //   top: 0;
    //   z-index: 2;
    //   transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
    //   // box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
    // }

    // &::after {
    //   content: '';
    //   width: 0%;
    //   height: 100%;
    //   display: block;
    //   background: #fff; // first bg
    //   position: absolute;
    //   transform: skewX(-20deg);
    //   left: -10%;
    //   opacity: 0;
    //   top: 0;
    //   z-index: 1;
    //   transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    //   // box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
    // }
    // &:hover::before,
    // &:hover::before {
    //   opacity: 1;
    //   width: 116%;
    // }
    // &:hover::after,
    // &:hover::after {
    //   opacity: 1;
    //   width: 120%;
    // }

    .title {
      font-size: 15px !important;
      position: relative;
      z-index: 3;
      > span {
        font-size: 24px !important;
      }
    }

    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
    }

    img {
      // width: 35px;
      // height: 35px;
      margin-right: 10px;
    }
  }
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

  .logo {
    width: $logo_tablet_width;
    // left: -240px;
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
}

/* 螢幕尺寸標準 */
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .navigation {
    height: $nav_phone_height;
    z-index: 110;
  }

  .nav-container {
    display: block;
    height: auto;
  }

  .logo { 
  width: $logo_phone_width;
  left:size-m(100);
   // left: 45px;
  }

  .ball-logo {
  width: size-m(200);
  left:size-m(0);
  top: size-m(-110);
  }

  .nav {
    position: static;
    height: $nav_phone_height;
  }

  .menu {
    display: block;
    position: absolute;
    z-index: 3;
    top: 15px;
    right: 15px;
    font-size: 30px;

    svg {
      color: $nav_btn_color;
    }
  }

  .close {
    display: block;
    position: absolute;
    z-index: 3;
    top: 15px;
    right: 15px;
    width: 30px;
    img {
      width: 100%;
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
    padding-left: 0;

    li {
      width: 100%;
      height:auto;
      margin-bottom: 0;
    }

    .link {top:25px;
      height: 7em;
      max-height:calc(100vh * 0.2 - #{$nav_phone_height} * 0.2);
      width: 100%;
      //font-size: 17px;
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;

      .ball {
      }

      img,
      span {
        display: block;
      }
      span {
        line-height: 16px;
      }
    &:hover .ball{
      //  position: relative;
    margin-top: -0.5em;
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
    top: 0;
    right: 0;
    background: #f3d847;
    position: fixed;
    z-index: 110;
    height: 100vh;
    opacity: 0;
    transition: all 0.3s ease-in;
    &.open {
      display: block;
      width: 100vw;
      opacity: 1;
    }
  }

  .mask-logo {
    width: $logo_phone_width;
    height: auto;
    position: absolute;
    left: 45px;
    display: block;
    top: 17px;
  }
}
</style>
