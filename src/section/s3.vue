<template>
  <article class="s3">
    <div class="view">
      <fullview />
    </div>
    <div class="txt">
      <h3 class="title font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">住岡山市心 享站前商圈</h3>
      <h4 class="subtitle font-['Noto_Serif_TC',serif]" data-aos="fade-up" data-aos-delay="100">S科技廊帶效應 重大建設集結岡山</h4>
      <p class="desc" data-aos="fade-up" data-aos-delay="200">
        「岡山車站TOD聯開案」延伸線捷運紅線，全方位強化北高交通動脈<br v-if="!$isMobile()">「岡山87期重劃」未來隱富聚落，比肩美術館特區，更勝高雄農16<br v-if="!$isMobile()">區域利多集合，引領北高經濟量能，岡山未來蓄勢待發。</p>
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s3 {
  @apply relative w-full text-[#fff] bg-[#0D3A79];
  height:size(1080);
  font-size:size(24);
  z-index: 3;
  
.txt {
  position: relative;
  z-index: 3;
  text-align: center;
    font-weight: 400;pointer-events: none;
    padding:4em 0 0 0;
    .title{display: inline-block;
      font-size:size(82);width: size(970);
      font-weight: 700;letter-spacing: 0.1em;
      border-bottom: 1px solid currentColor;
    }
    .subtitle{
      font-size:size(32);
      font-weight: 700;letter-spacing: 0.1em;
      margin: .1em auto 0;
    }
  }



  .view {
    @apply w-full absolute bottom-0 left-0 right-0 z-[2];
    width:100%;padding:0;
    height:100%;margin: auto;overflow: hidden;
  }
}

/* 螢幕尺寸標準 */
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .s3 {
    height: sizem(600);
    font-size:sizem(13);
  
    .txt {
    width:sizem(310);
    margin:0 auto;
    padding:1.5em 0 0 0;
    .title{width:auto;
      font-size:sizem(25);
      padding-bottom: .1em;}
    .subtitle{
      font-size:sizem(15);
      margin: .9em auto 1em;}
  }

    .view {padding:sizem(30) 0 0 0 ;
      height:100%;
    }
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue";
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue";
const globals = getCurrentInstance().appContext.config.globalProperties;

const smoothScroll = inject("smoothScroll");
const isMobile = computed(() => globals.$isMobile());

const activeLeaf = ref(1);

const splide = ref();

const move = (idx1, idx2, dest) => {
  activeLeaf.value = idx2 + 1
};

const replaceBg = (isHover, event, index) => {
  const target = event.target
  const bgUrl = isHover
    ? target.getAttribute("data-bg2")
    : index == activeLeaf.value
    ? target.getAttribute("data-bg2")
    : target.getAttribute("data-bg")

  target.style.backgroundImage = `url(${bgUrl})`
}
</script>
