<template>
    <article class="s7">
        <img class="bg-top" v-if="!$isMobile()" src="@/section/s7/bg-top.png" alt="" srcset="">
        <img class="peaceofmind" src="@/section/s7/peaceofmind.png" alt="">
        <img class="decor" src="@/section/s7/decor.png" alt="">
        <div class="title" data-aos="fade-up" data-aos-delay="0">
            <div class="font-bold">安心居宅</div>
            <div>五重全心防護</div>
        </div>
        <div class="blocks" v-if="!$isMobile()" data-aos="fade-up" data-aos-delay="200">
            <div class="block font-['noto_sans_tc']" @click="selectedBlock = block" v-for="block in blocks"
                v-bind:style="{ backgroundImage: `url(${block.cover})` }">
                <div class="t1">{{ block.t1 }}</div>
                <div class="t2" :class="{ isBlue: block.isBlue }">{{ block.t2 }}</div>
                <div class="t3" :class="{ isBlue: block.isBlue }">{{ block.t3 }}</div>
            </div>
        </div>

        <Splide v-else ref="splide" class="blocks" :options="{
            rewind: true,
            arrows: false,
            pagination: true,
            autoplay: true,
            interval: 4000,
            gap: 5
        }">
            <SplideSlide class="block font-['noto_sans_tc']" @click="selectedBlock = block" v-for="block in blocks"
                v-bind:style="{ backgroundImage: `url(${block.cover})` }">
                <div class="t1">{{ block.t1 }}</div>
                <div class="t2" :class="{ isBlue: block.isBlue }">{{ block.t2 }}</div>
                <div class="t3" :class="{ isBlue: block.isBlue }">{{ block.t3 }}</div>
            </SplideSlide>
        </Splide>

        <div class="block-footer">
            <div class="text font-['noto_sans_tc']" v-if="$isMobile()" data-aos="fade-up" data-aos-delay="0">
                從建材規劃<br />給你有氧清新生活！</div>
            <div class="text font-['noto_sans_tc']" v-else data-aos="fade-up" data-aos-delay="0">從建材規劃，給你有氧清新生活！</div>
            <div class="line"></div>
        </div>
    </article>
    <transition>
        <div class="block-popup" v-if="selectedBlock != null"
            v-bind:style="{ backgroundImage: `url(${selectedBlock.img})` }">
            <img v-if="$isMobile()" :src="selectedBlock.img" alt="" srcset="">
            <div v-if="!$isMobile()" class="close" v-bind:class="{ blue: selectedBlock.closeBlue }"
                @click="selectedBlock = null"></div>
            <div class="title font-['noto_sans_tc']">
                <div>{{ selectedBlock.t1 }}</div>
                <div :class="{ 'text-white': !selectedBlock.isBlue, 'text-black': selectedBlock.isBlue }">
                    <span class="block font-bold">{{ selectedBlock.t2 }}</span>
                    {{ selectedBlock.t3 }}
                </div>
                <div class="close" v-if="$isMobile()" @click="selectedBlock = null"></div>
            </div>
        </div>
    </transition>
</template>
  
  <style lang="scss">
  @import '@/assets/style/function.scss';
  
  .s7 {
      width: 100%;
      height: size(1080);
      background: url('@/section/s7/bg.jpg');
      background-size: cover;
      background-position: top;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: size(55);
      padding: 0 size(120);
  
      .peaceofmind {
          position: absolute;
          width: size(520);
          top: size(264);
          left: size(1133);
      }
  
      .decor {
          position: absolute;
          width: size(368);
          top: size(114);
          right: -#{size(122)};
          z-index: 0;
          animation: rotate 10s infinite linear;
  
          @keyframes rotate {
              from {
                  transform: rotate(0deg);
              }
  
              to {
                  transform: rotate(360deg);
              }
          }
      }
  
      .bg-top {
          position: absolute;
          width: 100%;
          bottom: 100%;
          left: 0;
      }
  
      .title {
          text-align: left;
          line-height: size(80);
          font-size: size(60);
          font-weight: 500;
          color: #fff;
      }
  
      .blocks {
          width: 100%;
          display: flex;
          justify-content: space-between;
          z-index: 1;
  
          .block {
              position: relative;
              width: size(319);
              height: size(460);
              background-size: cover;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: #fff;
              gap: size(10);
              cursor: pointer;
  
              .t1 {
                  font-size: size(30);
                  font-weight: 700;
                  background-color: #C9A063;
                  padding: size(10) size(30);
                  z-index: 1;
                  margin-bottom: size(5);
              }
  
              .t2 {
                  font-weight: 700;
                  font-size: size(25);
                  z-index: 1;
                  line-height: size(30);
  
                  &.isBlue {
                      color: #055F76;
                  }
              }
  
              .t3 {
                  font-weight: 400;
                  font-size: size(25);
                  z-index: 1;
                  line-height: size(30);
  
                  &.isBlue {
                      color: #055F76;
                  }
              }
  
              &::after {
                  content: '';
                  width: 100%;
                  height: 100%;
                  background: rgba(5, 95, 118, 0.4);
                  position: absolute;
                  left: 0;
                  top: 0;
                  opacity: 0;
                  transition: opacity .2s;
              }
  
              &:hover {
                  &::after {
                      opacity: 1;
                  }
              }
          }
      }
  
      .block-footer {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          gap: size(30);
  
          .text {
              white-space: nowrap;
              color: #fff;
              font-size: size(26);
              font-weight: 300;
              letter-spacing: 0.62em;
          }
  
          .line {
              height: size(2);
              width: 100%;
              background-color: #C9A063;
          }
      }
  }
  
  .block-popup {
      position: fixed;
      z-index: 500;
      left: 50%;
      top: 50%;
      width: size(1758);
      height: size(914);
      background-color: gray;
      background-size: cover;
      transform: translate(-50%, -50%);
      filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5));
  
      .title {
          display: flex;
          align-items: center;
          position: absolute;
          left: 0;
          bottom: 0;
          color: #fff;
          gap: size(10);
  
          div {
              &:nth-child(1) {
                  font-size: size(30);
                  font-weight: 700;
                  background-color: #C9A063;
                  padding: size(10) size(30);
                  z-index: 1;
              }
  
              &:nth-child(2) {
                  font-size: size(20);
                  font-weight: 500;
              }
          }
      }
  
      &.v-leave {
          transform: translate(-50%, -50%);
      }
  
      &.v-leave-active {
          transition: all .5s
      }
  
      &.v-leave-to {
          transform: translate(-50%, 200%);
      }
  
      &.v-enter {
          transform: translate(-50%, 200%);
      }
  
      &.v-enter-active {
          transition: all .5s
      }
  
      &.v-enter-to {
          transform: translate(-50%, -50%);
      }
  
  
      .close {
          cursor: pointer;
          position: absolute;
          right: size(30);
          top: size(30);
          z-index: 1;
          width: size(46);
          height: size(46);
  
          &::after {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              width: size(63.25);
              height: size(3.5);
              transform: translate(-50%, -50%) rotate(45deg);
              transform-origin: center;
              background-color: #fff;
          }
  
          &::before {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              width: size(63.25);
              height: size(3.5);
              transform: translate(-50%, -50%) rotate(-45deg);
              transform-origin: center;
              background-color: #fff;
          }
  
          &.blue {
              &::after {
                  background-color: #055F76;
              }
  
              &::before {
                  background-color: #055F76;
              }
          }
      }
  
  }
  
  /* 螢幕尺寸標準 */
  /* 平板尺寸 */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {}
  
  @media screen and (max-width: 767px) {
      .s7 {
          height: size-m(781);
          margin-top: -#{size-m(114)};
          background: url('@/section/s7/bg_m.png');
          background-size: cover;
          background-position: top;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          gap: size-m(40);
          padding: 0 size(120);
          padding-bottom: size-m(25);
          z-index: 5;
  
          .peaceofmind {
              width: size-m(195);
              top: size-m(240);
              left: size-m(150);
          }
  
          .decor {
              width: size-m(175);
              top: size-m(58);
              right: -#{size-m(64)};
          }
  
          .title {
              line-height: 1.5;
              font-size: size-m(30);
              font-weight: 500;
          }
  
          .blocks {
              width: size-m(315);
              display: flex;
              justify-content: space-between;
              z-index: 1;
  
              .block {
                  position: relative;
                  width: size-m(315) !important;
                  height: size-m(378);
                  background-size: cover;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  color: #fff;
                  gap: size-m(5);
  
                  .t1 {
                      font-size: size-m(25);
                      padding: size-m(5) size-m(35);
                      margin-bottom: size-m(15);
                  }
  
                  .t2 {
                      font-size: size-m(25);
                      line-height: 1.2;
                      letter-spacing: 0.11em;
                  }
  
                  .t3 {
                      font-size: size-m(25);
                      line-height: 1.2;
                      letter-spacing: 0.11em;
                  }
  
              }
          }
  
          .block-footer {
              width: 100%;
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              flex-direction: column;
              flex-wrap: wrap;
              gap: size-m(10);
  
              .text {
                  white-space: nowrap;
                  color: #fff;
                  font-size: size-m(15);
                  font-weight: 400;
                  letter-spacing: 0.62em;
                  line-height: 2;
  
              }
  
              .line {
                  height: size(2);
                  width: 100%;
                  background-color: #C9A063;
              }
          }
  
  
          .splide__pagination {
              position: absolute;
              width: 100%;
              gap: size-m(15);
              bottom: -#{size-m(20)};
              z-index: 1;
  
              li {
                  line-height: 0 !important;
  
                  .splide__pagination__page {
                      position: relative;
                      opacity: 0.3;
                      background-color: #C9A063;
                      width: size-m(11);
                      height: size-m(11);
  
                      &::after {
                          content: '';
                          position: absolute;
                          width: 100%;
                          height: 100%;
                          background-color: #fff;
                          opacity: .65;
                          left: 0;
                          top: 0;
                      }
  
                      &.is-active {
                          opacity: 1;
  
                          &::after {
                              opacity: 0;
                          }
                      }
                  }
              }
          }
  
      }
  
      .block-popup {
          position: fixed;
          z-index: 500;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 100%;
          background-color: gray;
          background-size: cover;
          transform: translate(-50%, -50%);
          filter: unset;
          overflow-y: hidden;
          overflow-x: scroll;
  
          img {
              height: 100%;
          }
  
          .title {
              position: sticky;
              gap: size-m(10);
  
              div {
                  &:nth-child(1) {
                      font-size: size-m(24);
                      font-weight: 700;
                      background-color: #C9A063;
                      padding: size-m(5) size-m(30);
                      z-index: 1;
                  }
  
                  &:nth-child(2) {
                      font-size: size-m(15);
                      font-weight: 500;
                  }
              }
          }
  
          .close {
              position: sticky;
              right: unset;
              top: unset;
              width: size-m(46);
              height: size-m(46);
              margin-left: auto;
  
              &::after {
                  width: size-m(40);
                  height: size-m(3.5);
              }
  
              &::before {
                  width: size-m(40);
                  height: size-m(3.5);
              }
  
          }
  
      }
  
  
  }
  </style>
  <script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Slide from '../components/slide.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const selectedBlock = ref();

const blocks = [
    {
        cover: globals.$isMobile() ? new URL("../section/s7/1c.jpg", import.meta.url).href : new URL("../section/s7/1c.jpg", import.meta.url).href,
        t1: '第一重',
        t2: 'VAF正負壓活氧系統',
        t3: '空氣清新好放心',
        isBlue: true,
        closeBlue: true,
        img: globals.$isMobile() ? new URL("../section/s7/1.jpg", import.meta.url).href : new URL("../section/s7/1.jpg", import.meta.url).href,
    },
    {
        cover: globals.$isMobile() ? new URL("../section/s7/2c.jpg", import.meta.url).href : new URL("../section/s7/2c.jpg", import.meta.url).href,
        t1: '第二重',
        t2: '全棟式軟淨水系統',
        t3: '安全用水免擔心',
        isBlue: true,
        img: globals.$isMobile() ? new URL("../section/s7/2.jpg", import.meta.url).href : new URL("../section/s7/2.jpg", import.meta.url).href,
    },
    {
        cover: globals.$isMobile() ? new URL("../section/s7/3c.jpg", import.meta.url).href : new URL("../section/s7/3c.jpg", import.meta.url).href,
        t1: '第三重',
        t2: '3M淨水器',
        t3: '喝水好安心',
        img: globals.$isMobile() ? new URL("../section/s7/3.jpg", import.meta.url).href : new URL("../section/s7/3.jpg", import.meta.url).href,
    },
    {
        cover: globals.$isMobile() ? new URL("../section/s7/4c.jpg", import.meta.url).href : new URL("../section/s7/4c.jpg", import.meta.url).href,
        t1: '第四重',
        t2: 'FloPlast防疫吸氣閥',
        t3: '管道無疫免煩惱',
        img: globals.$isMobile() ? new URL("../section/s7/4.jpg", import.meta.url).href : new URL("../section/s7/4.jpg", import.meta.url).href,
    },
    {
        cover: globals.$isMobile() ? new URL("../section/s7/5c.jpg", import.meta.url).href : new URL("../section/s7/5c.jpg", import.meta.url).href,
        t1: '第五重',
        t2: 'SHARP防疫電梯',
        t3: '無毒電梯好安全',
        img: globals.$isMobile() ? new URL("../section/s7/5.jpg", import.meta.url).href : new URL("../section/s7/5.jpg", import.meta.url).href,
    },
]
</script>
  