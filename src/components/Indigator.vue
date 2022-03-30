<template>
  <div class="indigator">
    <div class="list-indigator">
      <div
        :class="`dot ${index == indigatorIndex ? 'active' : '' }`"
        v-for="index in info.indigatorLength"
        :key="`indigator-${index}`"
        v-scroll-to="{ element: `#section${index}` }"
        @click="setIndigator(index)"
      ></div>
      <!-- <div
        :class="`dot ${(info.indigatorLength + 1) === indigatorIndex ? 'active' : '' }`"
        v-scroll-to="{ element: `#contact` }"
        @click="setIndigator(info.indigatorLength + 1)"
      ></div> -->
    </div>
    <div
      :class="`contact-indigator`"
      v-scroll-to="{ element: `#contact` }"
      @click="setIndigator(navList.length - 1 + 1)"
    >預約賞屋</div>
  </div>
</template>

<style lang="scss" scoped>
.indigator {
  font-size: 16px;
  position: fixed;
  right: 0.8em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  .list-indigator {
    position: relative;
    padding: 8px;
    border-radius: 20px;
  }

  .dot {
    width: 2em;
    height: 2em;
    margin: 0;
    background: transparent;
    cursor: pointer;
    border-radius: 999px;
    overflow: hidden;
    &::before {
      content: '';
      display: block;
      width: 0.7em;
      height: 0.7em;
     //@function border: 1px solid #0000;
      border-radius: 999px;
      margin: calc(50% - 0.3em) auto 0 auto;
      transition: all 0.3s;
      background: rgba(0, 0, 0, 0.4);
      // background: #fff;
    }
    &.active {
      &::before {
        background: #000;
      }
    }
    &:hover::before {
      background: #ffd200;
    }
  }

  .contact-indigator {
    background: rgba(0, 0, 0, 0.4);
    margin: 1em auto 1em auto;
    padding: 0.4em;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    line-height: 1.5;
    width: 2em;
    transition: all 0.3s;
    &:hover {
      color: #fff;
    background: rgba(0, 40, 130, 0.4);
    }
  }
}
@media screen and (max-width: 767px) {
  .indigator {
    // display: none;
    right: -3.5vw;
    .contact-indigator {
      display: none;
    }
    .dot {
      width: 2em;
      height: 3em;
    }
  }
}
</style>

<script>
import info from '@/info'

export default {
  name: 'Indigator',

  data() {
    return {
      info,
      indigatorIndex: 1,
    }
  },

  props: ['viewIndex'],

  watch: {
    viewIndex(val) {
      // console.log(val)
      this.indigatorIndex = val
    },
  },

  methods: {
    setIndigator(index) {
      this.indigatorIndex = index
    },
  },
}
</script>
