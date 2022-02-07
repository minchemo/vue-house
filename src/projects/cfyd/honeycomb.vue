<template>
  <ul id="hexGrid">
    <li
      class="hex"
      v-for="(img, i) in imgs"
      :key="i"
      v-bind:class="{ hide: img.hide }"
    >
      <div class="hexIn">
        <div
          class="bg"
          v-bind:style="{ backgroundImage: `url(${img.url})`}"
        ></div>
        <div class="caption">{{ img.caption }}</div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";
/* Hexagons */
#hexGrid {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  padding: 0.866% 0;
  font-size: 15px;
  transform: rotate(-15deg);
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}

.hex {
  position: relative;
  list-style-type: none;
  float: left;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  transform: rotate(-60deg) skewY(30deg) translatez(-1px);
  * {
    position: absolute;
    visibility: visible;
    outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  }

  .hexIn {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    transform: skewY(-30deg) rotate(60deg);
    .caption {
      position: absolute;
      z-index: 1;
      color: #fff;
      transform: translateX(#{size(140)}) rotate(30deg);
      top: size(20);
      font-size: size(17);
    }
    .bg {
      width: 100%;
      height: 100%;
      background-color: purple;
    }
  }

  &.hide {
    opacity: 0;
  }
}

/*** SPACING AND SIZING *****************************************************************/

@media (min-width: 300px) {
  /* <- 2-3  hexagons per row */
  .hex {
    width: 32.666%;
    padding-bottom: 37.72%;

    &:nth-child(5n + 1),
    .hex:nth-child(5n + 2) {
      transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }
    &:nth-child(5n + 3),
    &:nth-child(5n + 4),
    &:nth-child(5n + 5) {
      margin-top: -8.564%;
      margin-bottom: -8.564%;
    }
    &:nth-child(5n + 2),
    &:nth-child(5n + 4) {
      margin-right: 1%;
      margin-left: 1%;
    }
    &:nth-child(5n + 1) {
      margin-left: 0.5%;
    }
    &:nth-child(5n + 3),
    &:nth-child(5n + 6) {
      clear: left;
    }
    &:nth-child(5n + 2) {
      margin-left: 17.5%;
    }
  }
}
</style>

<script>
export default {
  name: "honeycomb",
  data() {
    return {
      imgs: [
        {
          url: require("@/projects/cfyd/s3/hex/1.png"),
          caption: "標題",
          hide: true,
        },
        {
          url: require("@/projects/cfyd/s3/hex/1.png"),
          caption: "標題",
          hide: false,
        },
        {
          url: require("@/projects/cfyd/s3/hex/1.png"),
          caption: "標題",
          hide: false,
        },
        {
          url: require("@/projects/cfyd/s3/hex/1.png"),
          caption: "標題",
          hide: false,
        },
        {
          url: require("@/projects/cfyd/s3/hex/1.png"),
          caption: "標題",
          hide: false,
        },
        {
          url: require("@/projects/cfyd/s3/hex/1.png"),
          caption: "標題",
          hide: false,
        },
        {
          url: require("@/projects/cfyd/s3/hex/1.png"),
          caption: "標題",
          hide: false,
        },
      ],
    };
  },
};
</script>