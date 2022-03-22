<template>
  <div class="navigation" ref="navigation">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img
            class="logo"
            src="@/projects/renai/logo.svg"
            alt
            v-scroll-to="{ element: `#app` }"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div
            v-show="false"
            @click="toggleSidebar"
            :class="`menu ${isOpen ? 'open' : ''}`"
          >
            <div class="icon-menu"></div>
            <!-- <font-awesome-icon icon="bars" />  -->
          </div>
          <!-- <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" /> -->
          <ul :class="`navlist ${isOpen ? 'open' : ''}`">
            <li
              :key="item.name"
              v-scroll-to="{
                element: `.${item.section}`,
                offset: isMobile ? item.mobileOffset : item.offset,
              }"
              v-for="(item, index) in list"
              class="flex-ac"
              @click="toggleSidebar"
              data-aos="fade-down"
              data-aos-duration="1500"
              :data-aos-delay="400 - index * 100"
            >
              <span class="link" :data-section="item.section">
                <img v-if="item.imgSrc" :src="item.imgSrc" alt />
                <img v-if="item.iconSrc" :src="item.iconSrc" alt />
                <span>
                  <h3 class="title">{{ item.name }}</h3>
                  <span class="subTitle">{{ item.subTitle }}</span>
                </span>
              </span>
            </li>
            <!-- <img
              v-if="isMobile"
              class="d-m-1"
              src="@/projects/ab/mo-nav-1.png"
              alt="仁愛旭"
            />
            <img
              v-if="isMobile"
              class="d-m-2"
              src="@/projects/ab/mo-nav-2.png"
              alt="仁愛旭"
            /> -->
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
      hideOnScrolling: true, //捲動時選單自動隱藏/顯示
      isMobile,
      isTablet,
      list: navList,
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
    },
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    componentDidMount() {
      // return;
      // this.prev = window.scrollY;
      window.addEventListener("scroll", (e) => this.handleNavigation(e));
    },
    handleNavigation(e) {
      this.list.forEach((element) => {
        let inviewport = this.elementInViewport("." + element.section);
        if (inviewport) {
          $(".navlist .link").removeClass("active");
          $(".navlist .link[data-section='" + element.section + "']").addClass(
            "active"
          );
        }
      });

      if (this.hideOnScrolling) {
        const window = e.currentTarget;
        const nav = this.$refs.navigation;

        if (window.scrollY > 500) {
          if (this.prev > window.scrollY) {
            $(nav).removeClass("scrollhide");
          } else if (this.prev < window.scrollY) {
            $(nav).addClass("scrollhide");
          }
          this.prev = window.scrollY;
        } else {
          $(nav).removeClass("scrollhide");
        }
      }
    },
    elementInViewport(elem) {
      return (
        $(elem).offset().top - $(window).scrollTop() < $(elem).height() - 300
      );
    },
  },
  mounted() {
    //this.componentDidMount();
  },
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
  z-index: 500;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  //box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  transition: transform 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.scrollhide {
    transform: translate(0, -90px);
  }
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
  height: 50%;
  // width:auto;
  // height: 100%;
  cursor: pointer;
  position: absolute;
  left: 5vw;
  right: auto;
  display: block;
  //transform: translateY(0%);
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
  margin-right: 5vw;
  li {
    height: 100%;
    letter-spacing: 2px;
    &:first-child {
    }

    &:last-child {
      .link {
        border-right: 0;
      }
    }
  }
  .link {
    color: $nav_link_color;
    height: 30%;
    width: auto;
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
    white-space: nowrap;
    border-right: 2px solid $nav_link_border_bg;
    padding: 0 24px;
    font-size: 20px;

    > span {
      z-index: 3;
    }
    .title {
      position: relative;
      z-index: 3;
      font-family: $family2;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    .subTitle {
      color: $nav_link_subtitle_color;
      font-size: 12px;
      z-index: 3;
    }
    img {
      height: 80%;
      margin-right: 10px;
    }
    &:after {
      content: "";
      background-image: none;
      position: absolute;
      height: 3px;
      width: 0;
      bottom: -12px;
      background-color: $nav_link_border_bg;
      transition: all 0.4s;
      opacity: 0;
    }
    &:hover::after {
      width: 70%;
      opacity: 1;
    }
    &.active::after {
      width: 70%;
      opacity: 1;
    }
  }
}
.menu {
  display: none;
  .icon-menu {
    font-size: 35px;
    width: 1em;
    height: 2px;
    padding: 0;
    background: #fff;
    transition: all 0.3s;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1em;
      height: 100%;
      background: #fff;
      transition: top 0.3s 0.2s, transform 0.2s;
    }
    &::before {
      top: -0.35em;
    }
    &::after {
      top: 0.35em;
    }
  }
  &.open {
    .icon-menu {
      background: #fff0;
      &::before {
        top: 0em;
        transform: rotate(45deg);
        transition: top 0.2s, transform 0.3s 0.2s;
      }
      &::after {
        top: 0em;
        transform: rotate(-45deg);
        transition: top 0.2s, transform 0.3s 0.2s;
      }
    }
  }
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
    height: auto;
    left: 5%;
    top: 50%;
    z-index: 1;
    width: 30%;
    transform: translateY(-50%) !important;
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
    z-index: 1;
    svg {
      width: 100%;
      height: 100%;
      color: $nav_btn_color;
    }
  }
  // .navlist {
  //   .link {
  //     width: 5em;
  //     font-size: calc(2800vw / 375) !important;
  //     border-right: 0;
  //     margin: 0 auto;
  //     .title {
  //       font-weight: 600;
  //     }
  //   }
  // }
  // .navlist {
  //   position: absolute;
  //   background: transparent;
  //   width: 100%;
  //   right: 0;
  //   top: $nav_phone_height;
  //   height: calc(100vh - #{$nav_phone_height});
  //   text-align: center;
  //   transition: all 0.3s ease-in;
  //   display: block;
  //   transform: translateY(-100%);
  //   margin-right: 0vw;
  //   background: #006934;
  //   //padding-top: 5vh;
  //   padding: 0;
  //   clip-path: polygon(0% 0%, 0% 80%, 100% 65%, 100% 0%);

  //   .d-m-1 {
  //     width: 50%;
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //   }

  //   .d-m-2 {
  //     width: 50%;
  //     position: absolute;
  //     right: 0;
  //     bottom: 0;
  //   }
  //   li {
  //     height: auto;
  //     min-height: 50px;
  //     margin-bottom: 48px;
  //     writing-mode: unset;
  //     padding-bottom: 24px;
  //     &:first-child {
  //       margin-right: 0;
  //     }
  //     &:last-child {
  //       border: 0;
  //     }
  //   }
  //   .link {
  //     height: auto;
  //     width: 100%;
  //     font-size: 26px;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     display: none;
  //     color: #fff;
  //     .title {
  //       width: 100%;
  //     }
  //     img,
  //     span {
  //       display: block;
  //     }
  //     span {
  //       //  line-height: 16px;
  //     }
  //     img {
  //       width: calc(100vw * 200 / 1920);
  //       height: auto;
  //       margin-right: 0.5em;
  //     }
  //     &.active::after {
  //       display: none;
  //     }
  //   }
  //   &.open {
  //     width: 100%;
  //     transform: translateY(0%);
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: flex-start;
  //     padding-top: 10vw;

  //     .link {
  //       display: flex;
  //       justify-content: center;
  //       span {
  //         white-space: nowrap;
  //       }
  //       .divided {
  //         display: none;
  //       }
  //       &.active {
  //         color: $nav_link_hover_color;
  //       }
  //     }
  //   }
  // }

  //dnls
  .navlist {
    margin-right: 1vw;
    li {
      height: 100%;
      letter-spacing: 2px;
      &:first-child {
      }

      &:last-child {
        .link {
          border-right: 0;
        }
      }
    }
    .link {
      border-right: 1px solid $nav_link_border_bg;
      padding: 0 6px;

      > span {
        z-index: 3;
      }
      .title {
        font-size: 13px;
      }
      .subTitle {
        color: $nav_link_subtitle_color;
        font-size: 12px;
        z-index: 3;
      }
      &:after {
        content: "";
        background-image: none;
        position: absolute;
        height: 2px;
        width: 0;
        bottom: -6px;
        transition: all 0.4s;
        opacity: 0;
      }
      &:hover::after {
        width: 70%;
        opacity: 1;
      }
      &.active::after {
        width: 70%;
        opacity: 1;
      }
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