<template>
  <div class="section5">
    <img
      class="bg"
      v-bind:class="{ inactive: active.hasOwnProperty('h') }"
      v-lazy
      :temp="require('@/projects/cc/s5/bg.png')"
      alt=""
      srcset=""
      uk-parallax="viewport:0.3;blur:50,0"
    />
    <template v-for="(item, i) in list">
      <div
        v-if="!isMobile"
        class="item"
        v-bind:class="{
          active: active == item,
          inactive: active != item && active.hasOwnProperty('h'),
          last: i == list.length - 1,
        }"
        :key="i"
        @mouseenter="active = item"
        @mouseleave="active = {}"
        :uk-parallax="`viewport:0.3;blur:10,0;y:${i * 200},0`"
      >
        <img :src="item.t" alt="" srcset="" />
      </div>
      <div
        v-else
        class="item"
        v-bind:class="{
          active: active == item,
          inactive: active != item && active.hasOwnProperty('h'),
          last: i == list.length - 1,
        }"
        :key="i"
        @click="active = item"
      >
        <img :src="item.t" alt="" srcset="" />
      </div>
    </template>
    <div
      v-if="!isMobile"
      class="hidden"
      v-bind:class="{ active: active.hasOwnProperty('h') }"
      v-bind:style="{
        backgroundImage: `url(${active.h})`,
      }"
    ></div>
    <div
      v-else
      @click="active = {}"
      class="hidden"
      v-bind:class="{ active: active.hasOwnProperty('h') }"
      v-bind:style="{
        backgroundImage: `url(${active.h})`,
      }"
    ></div>
  </div>
</template>
<style lang="scss">
@import "@/assets/style/function.scss";
/* 螢幕尺寸標準 */
.section5 {
  position: relative;
  width: size(1920);
  height: size(899.95);
  padding: size(200) 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 size(180);
  padding-bottom: size(22);
  z-index: 1;

  &:before {
    content: "";
    width: size(634);
    height: 1px;
    background-color: #bbb29b;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -#{size(317)};
  }

  .item {
    position: relative;
    width: size(316);

    &.active {
      opacity: 0;
      cursor: pointer;
    }
    &.inactive {
      opacity: 0;
    }
    &.last {
      &::after {
        content: "";
        width: 1px;
        height: size(165);
        position: absolute;
        background-color: #000;
        right: -#{size(100)};
        top: 50%;
        margin-top: -#{size(82.5)};
      }
    }

    img {
      width: 100%;
    }

    &::before {
      content: "";
      width: 1px;
      height: size(165);
      position: absolute;
      background-color: #000;
      left: -#{size(100)};
      top: 50%;
      margin-top: -#{size(82.5)};
    }
  }

  .bg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 0;
    &.inactive {
      opacity: 0;
    }
  }

  .hidden {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0;
    transition: opacity 1.5s;

    &.active {
      opacity: 1;
    }
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
  .section5 {
    position: relative;
    width: size-m(375);
    height: size-m(667);
    padding: size-m(50) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    z-index: 1;

    &:before {
      content: unset;
    }

    .item {
      position: relative;
      width: size-m(275);

      &.active {
        opacity: 0;
        cursor: pointer;
      }
      &.inactive {
        pointer-events: none;
        display: none;
      }
      &.last {
        &::after {
          content: unset;
        }
      }

      img {
        width: 100%;
      }

      &::before {
        content: "";
        width: size-m(185);
        height: 1px;
        position: absolute;
        background-color: #000;
        right: 50%;
        left: unset;
        margin-right: -#{size-m(92.5)};
        top: -#{size-m(50)};
        margin-top: 0;
      }
    }

    .bg {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      z-index: 0;
      &.inactive {
        opacity: 0;
      }
    }

    .hidden {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: -1;
      opacity: 0;
      transition: opacity 1.5s;

      &.active {
        opacity: 1;
        z-index: 10;
      }
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
// @ is an alias to /src
import { isMobile } from "@/utils";
export default {
  name: "section5",
  data() {
    return {
      isMobile,
      active: {},
      list: [
        {
          t: isMobile ? require('@/projects/cc/s5/1-mo.svg') : require('@/projects/cc/s5/1.svg'),
          h: isMobile ? require('@/projects/cc/s5/1-mo.jpg') : require('@/projects/cc/s5/1.jpg'),
        },
        {
          t: isMobile ? require('@/projects/cc/s5/2-mo.svg') : require('@/projects/cc/s5/2.svg'),
          h: isMobile ? require('@/projects/cc/s5/2-mo.jpg') : require('@/projects/cc/s5/2.jpg'),
        },
        {
          t: isMobile ? require('@/projects/cc/s5/3-mo.svg') : require('@/projects/cc/s5/3.svg'),
          h: isMobile ? require('@/projects/cc/s5/3-mo.jpg') : require('@/projects/cc/s5/3.jpg'),
        }
      ]
    };
  },

  methods: {
  },

  created() { },
};
</script>
