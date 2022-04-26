<template>
  <div class="sidenav">
    <div class="toggle" @click="isOpen = true">
      <img src="@/projects/ruo/menu_icon.svg" alt="" srcset="" />
    </div>
    <div class="menu" v-bind:class="{ active: isOpen }">
      <div class="close" @click="isOpen = false">
        <img src="@/projects/ruo/menu_icon_close.svg" alt="" srcset="" />
      </div>
      <ul :class="`navlist ${isOpen ? 'open' : ''}`">
        <li
          :key="item.name"
          v-scroll-to="{
            element: `.${item.section}`,
            offset: isMobile ? item.mobileOffset : item.offset,
          }"
          v-for="item in list"
          @click="isOpen = false"
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
      </ul>
    </div>
  </div>
</template>

<script>
import { isMobile } from "@/utils";
import navList from "@/info/navList";
export default {
  data() {
    return {
      isOpen: false,
      isMobile,
      list: navList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variableDefault.scss";
@import "@/assets/style/function.scss";
.sidenav {
  z-index: 1000000;
  position: fixed;
  top: 0;
  left: 0;

  .toggle {
    top: size(40);
    left: size(40);
    width: size(66);
    height: size(66);
    position: absolute;
    z-index: 1;
    img {
      width: 100%;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
  .menu {
    z-index: 2;
    position: absolute;
    height: 100%;
    width: size(253);
    left: 0;
    top: 0;
    background: #fff;
    transition: all 0.4s;
    transform: translateX(-100%);
    height: 100vh;

    .close {
      margin-top: size(40);
      margin-left: size(40);
      margin-bottom: size(75);
      width: size(66);
      height: size(66);
      img {
        width: 100%;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
    ul {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      padding-left: size(41);
      li {
        font-size: size(25);
        margin-bottom: size(50);
        color: #3f96e2;
        position: relative;
        &::after {
          content: "";
          width: 0%;
          height: 5px;
          position: absolute;
          left: 0;
          bottom: -50%;
          transition: all 0.3s;
          background-color: #faed00;
        }
        &:hover {
          cursor: pointer;
          &::after {
            width: 100%;
          }
        }
      }
    }

    &.active {
      transform: translateX(0);
    }
  }
}

@media only screen and (max-width: 767px) {
  .sidenav {
    .toggle {
      top: size-m(30);
      left: size-m(30);
      width: size-m(40);
      height: size-m(40);
    }
    .menu {
      z-index: 2;
      position: absolute;
      height: 100%;
      width: 100vw;
      left: 0;
      top: 0;
      background: #fff;
      transition: all 0.4s;
      transform: translateX(-100%);
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .close {
        position: absolute;
        margin: 0 !important;
        top: size-m(30);
        left: size-m(30);
        width: size-m(40);
        height: size-m(40);
        img {
          width: 100%;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }
      ul {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-left: 0;
        li {
          font-size: size-m(20);
          margin-bottom: size-m(35);
          &::after {
            content: "";
            width: 0%;
            height: 5px;
            position: absolute;
            left: 0;
            bottom: -50%;
            transition: all 0.3s;
            background-color: #faed00;
          }
          &:hover {
            cursor: pointer;
            &::after {
              width: 100%;
            }
          }
        }
      }

      &.active {
        transform: translateX(0);
      }
    }
  }
}
</style>