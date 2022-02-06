<template>
  <ul id="hexGrid">
    <li class="hex">
      <a class="hexIn" href="#">
        <img
          src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
          alt=""
        />
      </a>
    </li>
    <li class="hex">
      <a class="hexIn" href="#">
        <img
          src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
          alt=""
        />
      </a>
    </li>
    <li class="hex">
      <a class="hexIn" href="#">
        <img
          src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
          alt=""
        />
      </a>
    </li>
    <li class="hex">
      <a class="hexIn" href="#">
        <img
          src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
          alt=""
        />
      </a>
    </li>
    <li class="hex">
      <a class="hexIn" href="#">
        <img
          src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
          alt=""
        />
      </a>
    </li>
    <li class="hex">
      <a class="hexIn" href="#">
        <img
          src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
          alt=""
        />
      </a>
    </li>
    <li class="hex">
      <a class="hexIn" href="#">
        <img
          src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
          alt=""
        />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
/* Hexagons */
#hexGrid {
  overflow: hidden;
  width: 50%;
  margin: 0 auto;
  padding: 0.866% 0;
  font-family: "Raleway", sans-serif;
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
  }

  img {
    left: -100%;
    right: -100%;
    width: auto;
    height: 100%;
    margin: 0 auto;
  }
}

/*** SPACING AND SIZING *****************************************************************/

@media (min-width: 1201px) {
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
  }
}

@media (max-width: 1200px) {
  /* <- 1-2  hexagons per row */
  .hex {
    width: 49.5%; /* = (100-1) / 2 */
    padding-bottom: 57.158%; /* =  width / sin(60) */
    &:nth-child(3n + 1) {
      transform: translateX(50%) rotate(-60deg) skewY(30deg);
    }
    &:nth-child(3n + 2),
    &:nth-child(3n + 3) {
      margin-top: -13.423%;
      margin-bottom: -13.423%;
    }
    &:nth-child(3n + 1) {
      margin-left: 0.5%;
    }
    &:nth-child(3n + 3) {
      margin-left: 1%;
    }
    &:nth-child(3n + 2),
    &:nth-child(3n + 4) {
      clear: left;
    }
  }
}

@media (max-width: 400px) {
  #hexGrid {
    font-size: 13px;
  }
}
</style>

<script>
export default {
  name: 'honeycomb'
}
</script>