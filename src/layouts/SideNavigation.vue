<template>
  <div class="sideNav">
    <div class="nav relative">
      <!-- <img class="logo" src="@/assets/img/nav-logo.png" alt /> -->
      <div class="menu" @click="toggleSidebar">
        <!-- <div :class="`menu-icon ${isOpen ? 'menu-icon-active' : ''}`"></div> -->
        <img src="@/projects/ace/menu/menu.png" class="close" alt />
        <h1 class="menu-text">{{isOpen ? 'CLOSE' : 'MENU'}}</h1>
      </div>
      <div :class="`mask ${isOpen ? 'open' : ''}`" @click="toggleSidebar" />
      <ul :class="`navlist flex-c ${isOpen ? 'open': ''}`">
        <div class="list">
          <li :key="item.name" v-scroll-to="{ element: `#${item.section}`, offset: isMobile ? (item.mobileOffset ? item.mobileOffset : offset) : (item.offset ? item.offset : offset) }" v-for="(item, index) in list" class="flex-ac" @click="toggleSidebar" data-aos="fade-up" :data-aos-delay="`${200 + index  * 100}`">
            <span class="link">
              <span>
                <div class="title">{{item.name}}</div>
                <span class="subTitle">{{item.subTitle}}</span>
              </span>
            </span>
          </li>
        </div>
        <div class="hr" data-aos="zoom-in-down" data-aos-delay="200"></div>
        <div class="content">
          <img src="@/assets/img/contact-logo.png" alt="" class="menu-logo" data-aos="fade-down" data-aos-delay="200">
          <img src="@/projects/ace/menu/f.png" alt="" class="fb" data-aos="fade-down" data-aos-delay="400" @click="toggleSidebar" v-scroll-to="{ element: '#contact-info', offset: 0 }">
          <img src="@/projects/ace/menu/line.png" alt="" class="line" data-aos="fade-down" data-aos-delay="500" @click="toggleSidebar" v-scroll-to="{ element: '#contact-info', offset: 0 }">
          <img src="@/projects/ace/menu/phone.png" alt="" class="phone" data-aos="fade-down" data-aos-delay="600" @click="toggleSidebar" v-scroll-to="{ element: '#contact-info', offset: 0 }">
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { isMobile, isTablet } from '@/utils'
import navList from '@/info/navList'

export default {
  name: 'sideNavigation',
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
      return 0
    },
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variableColor.scss';
@import '../assets/style/variableDefault.scss';
@import '../assets/style/function.scss';

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
  left: 15px;
}

.nav {
  position: static;
  height: $nav_phone_height;
}

.menu {
  display: block;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 112;
  top: 30px;
  right: 40px;
  width:auto;
  height: auto;
  // background-color: #fff;
  cursor: pointer;

  img {
    width: size(85);
  }

  .close {
    width:100%;
    // margin-top: 20px;
    // margin-right: 0px;
  }

  .menu-text {
    position: absolute;
    top: calc(50% - 0.8em);
    right: 0;
    width: 100%;
    font-size: size(18.2);
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
  .menu-btn {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('~@/assets/img/menu1.png') -100% 0;
    background-size: auto 38%;
  }
  &:hover {
    .menu-btn {
      animation: menu 1s linear infinite;
    }
  }
}
@keyframes menu {
  to {
    background-position-x: 30%;
  }
}
.logo {
  width: $logo_pc_width;
  z-index: 2;
  height: auto;
  position: absolute;
  left: 0;
  display: block;
  top: 0px;
  transform: translateY(0%);
}

.menu-icon {
  position: relative;
  width: 30px;
  height: 3px;
  background-color: #af8680;
}

.menu-icon::before {
  position: absolute;
  left: 0;
  top: -10px;
  content: '';
  display: block;
  width: 30px;
  height: 3px;
  background-color: #af8680;
  transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
}

.menu-icon::after {
  position: absolute;
  left: 0;
  top: 10px;
  content: '';
  display: block;
  width: 30px;
  height: 3px;
  background-color: #af8680;
  transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
}

.menu-icon.menu-icon-active {
  background-color: transparent;
}

.menu-icon.menu-icon-active::before {
  transform: rotate(45deg);
  top: 0;
  transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
}

.menu-icon.menu-icon-active::after {
  transform: rotate(-45deg);
  top: 0;
  transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
}

.navlist {
  position: fixed;
  z-index: 111;
  background: $nav_bg;
  width: 0%;
  left: 100vw;
  top: $nav_phone_height;
  height: calc(100vh - #{$nav_phone_height});
  text-align: center;
  transition: all 0.5s ease-in-out;
  display: block;
  .list {
    @include img_l_pc(122, 282, 651);
  }

  .hr {
    @include div_c_pc(25, 600, 247);
    border-left: 3px solid #c39f6d;
  }

  .menu-logo {
    @include img_l_pc(342, 268, 1094);
  }

  .fb {
    @include img_l_pc(44, 768, 1171);
    cursor: pointer;
  }

  .line {
    @include img_l_pc(44, 768, 1251);
    cursor: pointer;
  }

  .phone {
    @include img_l_pc(44, 768, 1331);
    cursor: pointer;
  }

  .link {
    height: size(41);
    width: size(122);
    font-size: size(24);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.02;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    margin-bottom: size(20);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s;

    // &::before {
    //   display: inline-block;
    //   content: '';
    //   width: 1em;
    //   height: 1em;
    //   background: url('~@/assets/img/menu2.png');
    //   background-size: 58% auto;
    //   background-position-x: -100%;
    //   transition: all 0.4s;
    //   margin: 0 0.5em 0 0;
    // }
    &:hover:before {
      animation: menu 1s linear infinite;
    }
    /* left: %;
       bottom: 0;
       position: absolute*/

    // &:hover:after {
    //   width: 80%;
    //   left: 10%;
    // }

    img,
    span {
      display: block;
    }

    &:hover {
      color: $nav_link_hover_color;
      background: $nav_link_hover_bg;
      background-position: center;
      background-size: cover;
    }
  }

  &.open {
    width: 100vw;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    .link {
      display: flex;
      justify-content: center;
      cursor: pointer;
      span {
        white-space: nowrap;
      }

      .title {
        color: $nav_link_color;
      }

      .subTitle {
        color: $nav_link_subtitle_color;
      }
      .divided {
        display: none;
      }

      &:hover {
        .title {
          color: $nav_link_hover_color;
        }
      }
    }
  }
}

.mask {
  width: 100vw;
  top: $nav_phone_height;
  right: 0;
  background: transparent;
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
    width: 0%;
  }

  .navlist .link {
    font-size: 20px;
    width: 230px;
    white-space: nowrap;

    img {
      // height: 35px;
      margin-bottom: 5px;
    }

    .divided {
      margin-left: 6px;
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
    left: 0px;
  }

  .nav {
    position: static;
    height: $nav_phone_height;
  }

  .menu {
    display: flex;
    position: fixed;
    right: sizem(23);
    top: sizem(12);

    img {
      width: 100%;
    }

    .close {
      width: sizem(50);
      // margin-top: 0px;
    }

    .menu-text {
      font-size: sizem(11);
    }

    svg {
      color: $nav_btn_color;
    }
  }

  .navlist {
    position: fixed;
    z-index: 111;
    width: 0%;
    right: 0;
    top: $nav_phone_height;
    height: calc(100vh - #{$nav_phone_height});
    text-align: center;
    transition: all .3s ease-in-out;
    display: block;
    transform: translateX(40%);

    li {
      height: 50px;
      margin-bottom: 5px;
    }

    .list {
      @include img_l_m(170, 100, 20);
    }

    .hr {
      @include div_c_m(25, 500, 70);
      border-left: 3px solid #c39f6d;
    }

    .menu-logo {
      @include img_l_m(130, 200, 210);
    }

    .fb {
      @include img_l_m(34, 400, 201);
      cursor: pointer;
    }

    .line {
      @include img_l_m(34, 400, 251);
      cursor: pointer;
    }

    .phone {
      @include img_l_m(34, 400, 300);
      cursor: pointer;
    }

    .link {
      height: 50px;
      width: 100%;
      font-size: 17px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
      font-size: sizem(18);

      &::before {
        animation: menu 1s linear infinite;
      }

      img,
      span {
        display: block;
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
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
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
</style>
