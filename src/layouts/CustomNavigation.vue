<template>
  <div class="custom-navigation">
    <div class="custom-navigation-toggler" @click="openNav()">
      <div
        class="hamburger hamburger--collapse"
        v-bind:class="isOpen ? 'is-active' : ''"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>
    <div class="custom-navbar">
      <div class="link">來電洽詢</div>
      <div class="link">立即預約</div>
      <div class="link">地圖導航</div>
    </div>
    <div
      class="custom-navigation-list"
      v-bind:class="isOpen ? 'is-active' : ''"
    >
      <ul class="navlist">
        <li
          :key="item.name"
          v-scroll-to="{
            element: `.${item.section}`,
            offset: isMobile ? item.mobileOffset : item.offset,
          }"
          v-bind:class="item.name == activeSection ? 'active' : ''"
          v-for="item in navList"
          @click="setActive(item.name)"
          class="link"
          :data-section="item.section"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from "@/utils";
import navList from "@/info/navList";
import "hamburgers/dist/hamburgers.min.css";

export default {
  name: "custom-navigation",
  components: {},
  data() {
    return {
      isOpen: false,
      navList,
      activeSection: "朗朗城心",
      isMobile,
    };
  },
  methods: {
    openNav() {
      this.isOpen = !this.isOpen;
    },
    setActive(section) {
      this.activeSection = section;
      this.isOpen = !this.isOpen;
    },
    // componentDidMount() {
    //   window.addEventListener("scroll", (e) => this.handleNavigation(e));
    // },
    // handleNavigation(e) {
    //   this.navList.forEach((element) => {
    //     let inviewport = this.elementInViewport("." + element.section);
    //     if (inviewport) {
    //       $(".navlist .link").removeClass("active");
    //       $(".navlist .link[data-section='" + element.section + "']").addClass(
    //         "active"
    //       );
    //     }

    //   });
    // },
    // elementInViewport(elem) {
    //   return (
    //     $(elem).offset().top - $(window).scrollTop() < $(elem).height() - 10
    //   );
    // },
  },
  mounted() {
    //this.componentDidMount();
  },
};
</script>

<style lang="scss" scoped>
$hamburger-layer-color: #fff;

@import "../assets/style/function.scss";
@import "../assets/style/variableColor.scss";
/* 螢幕尺寸標準 */
.custom-navigation {
  position: fixed;
  z-index: 10000;
  right: 0;
  top: 0;

  .custom-navigation-toggler {
    position: absolute;
    right: 2vw;
    top: size(47.5);
    margin-top: -#{size(17)};
    z-index: 1;
    background-size: cover;
    // background-image: url("~@/assets/img/nav-btn-bg.jpg");
    width: auto;
    height: size(34);
    display: flex;
    align-items: center;
    justify-content: center;

    .hamburger {
      padding: 0;
      .hamburger-box {
        width: size(34);
        .hamburger-inner,
        .hamburger-inner:after,
        .hamburger-inner:before {
          width: 100%;
          background-color: #fff;
          border-radius: 0;
          height: 2px;
        }
      }
    }
  }

  .custom-navigation-list {
    position: absolute;
    right: 0;
    top: 0;
    width: 15vw;
    height: 100vh;
    z-index: 0;
    background: #005e3c;
    transform: translateX(15vw);
    transition: all 0.5s;

    &.is-active {
      transform: translateX(0);
    }

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      li {
        font-size: 1vw;
        cursor: pointer;
        width: 100%;
        color: #fff;
        padding: 1vw 0;

        &.active {
          background: yellow;
          color: #005e3c;
        }
        &:hover {
          background: yellow;
          color: #005e3c;
        }
      }
    }
  }

  .custom-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: size(95);
    background-color: rgba($color: #231815, $alpha: 0.5);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: size(150);
    .link {
      font-size: size(24);
      margin-left: size(60);
      color: #fff;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
}
/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .custom-navigation {
    position: fixed;
    z-index: 10000;
    right: 0;
    top: 0;

    .custom-navigation-toggler {
      right: 5vw;
      top: 5vw;
      transform: scale(0.7);
    }

    .custom-navigation-list {
      position: absolute;
      right: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
      background: #005e3c;
      transform: translateX(100vw);
      transition: all 0.5s;

      &.is-active {
        transform: translateX(0);
      }

      ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        overflow: scroll;

        li {
          font-size: 2.5vh;
          cursor: pointer;
          width: 100%;
          color: #fff;
          padding: 2vh 0;

          &:hover {
            background: yellow;
            color: #005e3c;
          }
          &.active {
            background: yellow;
            color: #005e3c;
          }
          &.hover {
            background: unset;
            color: unset;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 374px) {
}
</style>