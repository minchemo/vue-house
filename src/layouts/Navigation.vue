<template>
  <div class="navigation" ref="navigation">
    <div class="layout-container-fluid nav-container">
      <div class="layout-container nav-container">
        <div class="nav">
          <img
            class="logo"
            src="@/assets/img/nav-logo.png"
            alt
            v-scroll-to="{ element: `#app` }"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div class="menu" @click="toggleSidebar">
            <div class="icon-menu"></div>
            <!-- <font-awesome-icon icon="bars" />  -->
          </div>
          <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
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
              alt=""
            />
            <img
              v-if="isMobile"
              class="d-m-2"
              src="@/projects/ab/mo-nav-2.png"
              alt=""
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

      // const window = e.currentTarget;
      // const nav = this.$refs.navigation;

      // if (window.scrollY > 500) {
      //   if (this.prev > window.scrollY) {
      //     $(nav).removeClass("scrollhide");
      //   } else if (this.prev < window.scrollY) {
      //     $(nav).addClass("scrollhide");
      //   }
      //   this.prev = window.scrollY;
      // } else {
      //   $(nav).removeClass("scrollhide");
      // }
    },
    elementInViewport(elem) {
      return (
        $(elem).offset().top - $(window).scrollTop() < $(elem).height() - 300
      );
    },
  },
  mounted() {
    this.componentDidMount();
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
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
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
  height: 70%;
  // width:auto;
  // height: 100%;
  cursor: pointer;
  position: absolute;
  left: 5vw;
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
  margin-right: 5vw;
  li {
    height: 100%;
    //  writing-mode: vertical-rl;
    letter-spacing: 2px;
    &:first-child {
      //margin-right: 1vw;
    }

    &:last-child {
      .link {
        border-right: 0;
      }
    }
  }
  .link {
    color: $nav_link_color;
    height: 60%;
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
    //overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid $nav_link_border_bg;
    //margin-left: 4px;
    //padding-right: 4px;
    margin-right: 36px;
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
      //width: calc(100vw * 50 / 1920);
      height: 80%;
      margin-right: 10px;
      /*&:hover {
        opacity: 0.5;
      }*/
    }
    /*:hover {
      color: #fff;
      background-color: #d20028;
      border-bottom: 2px solid #FDD93F;
      box-sizing: border-box;
    }*/
    &:after {
      content: "";
      background-image: none;
      position: absolute;
      height: 3px;
      width: 0;
      bottom: -6px;
      background-color: #FDD93F;
      transition: all .4s;
      opacity: 0;
      // background-position: center;
      // background-size: 50%;
      // background-repeat: no-repeat;
      // transition: all 0.5s;
    }
    &:hover::after {
      width: 100%;
      opacity: 1;
    }
    &.active::after {
      width: 100%;
      opacity: 1;
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
.icon-menu{
font-size:35px;
width: 1em;
height: 2px;
padding: 0;
background: #fff;
&::before,
&::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1em;
  height: 100%;
background: #fff;
}
&::before{transform: translateY(-500%);}
&::after{transform: translateY(500%);}

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
    height: 45px;
    left: 20px;
    top: 13px;
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
      border-right: 0;
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
    background: #a70028;
    padding-top: 5vh;

    .d-m-1 {
      width: 50%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .d-m-2 {
      width: 50%;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    li {
      height: auto;
      min-height: 50px;
      margin-bottom: 24px;
      writing-mode: unset;
      border-bottom: 1px solid #ff8400;
      padding-bottom: 24px;
      &:first-child {
        margin-right: 0;
      }
      &:last-child {
        border: 0;
      }
    }
    .link {
      height: auto;
      width: 100%;
      font-size: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
      color: #fff;
      .title {
        width: 100%;
      }
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
      display: flex;
      flex-direction: column;

      .link {
        display: flex;
        justify-content: center;
        span {
          white-space: nowrap;
        }
        .divided {
          display: none;
        }
        &.active {
          color: $nav_link_hover_color;
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