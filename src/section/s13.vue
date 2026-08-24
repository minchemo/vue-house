<template>
  <article class="s13" ref="s13">
    <div class="shine-row">
      <div class="shine-dot dot-y">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-b">
        <div class="shine-inner"></div>
      </div>
      <div class="shine-dot dot-iri">
        <div class="shine-inner"></div>
      </div>
    </div>
    <div class="main">
      <div class="txt">
        <ul class="desc" data-aos="fade-up">
          <li v-for="(item, i) in list" :key="i" :class="colorClass(i)" >
            <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0 C12 6.5 12.5 10.5 14 12 C15.5 13.5 19.5 14 24 14 C19.5 14 15.5 14.5 14 16 C12.5 17.5 12 21.5 12 24 C12 21.5 11.5 17.5 10 16 C8.5 14.5 4.5 14 0 14 C4.5 14 8.5 13.5 10 12 C11.5 10.5 12 6.5 12 0 Z"
                fill="currentColor" />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s13 {
  @apply relative flex justify-center;
  width: 100%;
  height: auto;
  padding: 4em 0 4em 0;
  color: #FFF;
  background: url("./s2/bg.svg");
  background-size: sizem(56) auto;

  @media screen and (min-width: 768px) {
    padding: 2em 0;
    background-size: size(113) auto;
    font-size: size(35);
  }

  .txt {
    width: 100%;

    .desc {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1em;
      padding: 0 0;
      column-gap: 1em;

      @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0;
      }

      li {
        display: flex;
        align-items: flex-start;
        gap: 0.2em;

        &.color-a {
          .icon {
            color: #91C7FF;
          }
        }

        &.color-b {
            color: #CBCBCB;
           .icon {
            color: #C6D4EB;
          }
        }

        .icon {
          flex-shrink: 0;
          width: 1.1em;
          height: 1.1em;
          margin: 0;
          margin-top: .15em;

        }

        span {
          line-height: 1.5;
          text-align: left;

          @media screen and (min-width: 768px) {}
        }
      }
    }
  }
  .shine-row {
    bottom:0.4em;
    right: -.5em;
          @media screen and (max-width: 767px) {
            display: none;
          }
  }
}
</style>

<script setup>
import { computed, getCurrentInstance } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const list = [
  'ACE王牌商辦新標竿',
  '低基期高潛力新商辦',
  '大台中車站軌道經濟',
  '麗寶集團資源整合',
  '四鐵共構極速路網',
  '榮獲國際大獎標章肯定',
  '干城區高綠覆全機能',
  '天際視野挑高大樓',
  '全球供應鏈指揮樞紐',
  '租售雙贏資金更靈活',
];

// 只負責分組，顏色交給 CSS 決定
const colorClass = (i) => {
  const row = Math.floor(i / 2);
  return row % 2 === 0 ? 'color-a' : 'color-b';
};
</script>