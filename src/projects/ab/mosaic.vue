<template>
  <div class="mosaic">
    <div ref="bricksRef"></div>
  </div>
</template>
<style lang="scss">
.mosaic {
  background-color: #fff;
  .brick {
    position: relative;
    float: right;
    transition: all 0.7s;
    //box-shadow: 0 0px 0px #9a29299e;
    //transform: translate(0, 0);
    opacity: 1;

    &.brick-shrink {
      animation: shrink 2s;
    }

    @keyframes shrink {
      0% {
        //box-shadow: 0 0px 0px #4b0e0e;
        opacity: 1;
      }
      50% {
        // box-shadow: 15px 10px 30px #4b0e0e;
        opacity: 0;
      }
      0% {
        //box-shadow: 0 0px 0px #4b0e0e;
        opacity: 1;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

/* 手機尺寸 */
@media only screen and (max-width: 767px) {
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
  name: "mosaic",
  props: ["width", "height", "floatAmount", "horizontal", "isLanding"],
  data() {
    return {
      colors: [
        "#FDEFEA",
        "#FAD5DC",
        "#F8CAB5",
        "#F3AEA6",
        "#ED808E",
        "#EB6D86",
        "#EF8600",
        "#F7B800",
        "#F73201",
        "#E50027",
        "#C30D23",
        "#FAD2CD",
      ],
      isMobile,
    };
  },
  methods: {
    generateBricks() {
      const ref = $(this.$refs.bricksRef);
      const parentBox = ref.closest(".mosaic-box");

      let containerHeight = parentBox.height();
      let brickHeight = containerHeight / this.height;

      if (isMobile || this.horizontal) {
        containerHeight = parentBox.width();
        brickHeight = containerHeight / this.width;
      }

      const maxHorizontalAmount = parseInt(parentBox.width() / brickHeight);
      const totals = maxHorizontalAmount * this.height;

      ref.css("width", maxHorizontalAmount * brickHeight);
      parentBox.css({
        width: maxHorizontalAmount * brickHeight,
        height: this.height * brickHeight,
      });

      if (this.isLanding) {
        $(".fix-brick").css({ width: brickHeight, height: brickHeight });
      }

      for (let i = 0; i < totals; i++) {
        const getColor =
          this.colors[Math.floor(Math.random() * this.colors.length)];

        let html = `<div class="brick" 
          style="
            background-color:${getColor};
            width:${brickHeight}px;
            height:${brickHeight}px;
          "></div>`;

        ref.append(html);
      }

      this.animateBrick();
      setInterval(() => {
        this.animateBrick();
      }, 3000);
    },
    animateBrick() {
      const bricksContainer = $(this.$refs.bricksRef),
        bricks = $(bricksContainer).find(".brick");

      const selectedAmount = this.floatAmount;
      const shuffled = bricks.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, selectedAmount);

      selected.each((i, val) => {
        setTimeout(() => {
          $(val).addClass("brick-shrink").css("z-index", 10);

          setTimeout(() => {
            $(val).removeClass("brick-shrink").css("z-index", 0);
          }, 3000);
        }, i * 500);
      });
    },
  },

  created() {},
  mounted() {
    this.generateBricks();
  },
};
</script>
